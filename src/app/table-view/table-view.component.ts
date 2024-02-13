import {Component, inject, ViewChild} from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import {QueryService} from "../services/query.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css',
  providers: [QueryService]
})
export class TableViewComponent {

  private service = inject(QueryService)
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator?: MatPaginator

  // dataSource = this.service.getResult("sample")
  columnDefinitions = ['title', 'description', 'image', 'link']

  constructor() {
    this.dataSource = new MatTableDataSource(this.service.getResult('sample'))
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator
  }
}
