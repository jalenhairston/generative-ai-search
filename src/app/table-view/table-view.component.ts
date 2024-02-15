import {Component, inject, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {QueryService} from "../services/query.service";
import {MatPaginator} from "@angular/material/paginator";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
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

  private service = inject(QueryService)

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator

  columnDefinitions = ['title', 'description', 'image', 'link']
  showTable: boolean = false

  constructor() {

  }

  ngAfterViewInit() {
    this.service.getResult('thing')
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource<any>(data)
        this.showTable = true
        this.dataSource.paginator = this.paginator
      })
  }

  getPaginatorStyle() {
    return this.showTable ? 'block' : 'none'
  }

  isValidURL(url: string): boolean {
    return url.length > 0
  }

  isAltShade(id: number) {
    return id % 2 === 0;
  }

}
