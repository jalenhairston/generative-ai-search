import {Component, inject, Input, input, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {QueryService} from "../services/query.service";
import {MatPaginator} from "@angular/material/paginator";
import {DatePipe, KeyValuePipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatProgressSpinner, NgIf, RouterLink, HttpClientModule, NgForOf, KeyValuePipe, TitleCasePipe, DatePipe],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css',
  providers: [QueryService]
})
export class TableViewComponent {

  private router: Router = inject(Router)
  @Input() data!: any
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator

  columnDefinitions: string[] = ['status', 'modifiers', 'response'/*, 'image', 'url'*/]
  modifierDefinitions: string[] =['tone', 'detail', 'format', 'length']
  showTable: boolean = false

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    let isDataUpdate: boolean = Array.isArray(changes["data"].currentValue)
    let isDataUnload: boolean = !changes["data"].currentValue && Array.isArray(changes["data"].previousValue)
    let isFirstTableRender =!changes["data"].previousValue && isDataUpdate
    if (isFirstTableRender) {
      this.dataSource = new MatTableDataSource<any>(this.data)
      this.showTable = true
      this.dataSource.paginator = this.paginator
    }
    else if (isDataUpdate) {
      this.dataSource.data = this.data
    } else if (isDataUnload) {
      this.showTable = false
    }
  }

  getPaginatorStyle() {
    return this.showTable ? 'block' : 'none'
  }

  isValidURL(url: string): boolean {
    if (url) {
      return url.length > 0
    }
    return false
  }

  isAltShade(index: number) {
    return index % 2 === 1;
  }

  checkResultStatus(index: number): string {
    return index === this.data.length - 1? "Current": "Cache"
  }

  getDataLength() {
    if (this.data) {
      return this.data.length
    }
    return 1;
  }

}
