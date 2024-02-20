import {Component, inject, Input, input, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {QueryService} from "../services/query.service";
import {MatPaginator} from "@angular/material/paginator";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [MatTableModule, MatPaginator, NgIf, RouterLink, HttpClientModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css',
  providers: [QueryService]
})
export class TableViewComponent {

  private router: Router = inject(Router)
  @Input() data!: any
  // @Input() query!: string
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator

  columnDefinitions = ['name', 'response', 'image', 'url']
  showTable: boolean = false

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    let isDataUpdate = Array.isArray(changes["data"].currentValue)
    if (!changes["data"].previousValue && isDataUpdate) {
      this.dataSource = new MatTableDataSource<any>(this.data)
      this.showTable = true
      this.dataSource.paginator = this.paginator
    }
    else if (isDataUpdate) {
      this.dataSource.data = this.data
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

  isAltShade(id: number) {
    return id % 2 === 0;
  }

}
