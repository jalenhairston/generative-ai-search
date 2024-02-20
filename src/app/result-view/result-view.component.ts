import {Component, inject, OnInit} from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {FooterComponent} from "../footer/footer.component";
import {ActivatedRoute} from "@angular/router";
import {QueryService} from "../services/query.service";
import {TableViewComponent} from "../table-view/table-view.component";

@Component({
  selector: 'app-result-view',
  standalone: true,
  imports: [SearchComponent, FooterComponent, TableViewComponent],
  providers: [],
  templateUrl: './result-view.component.html',
  styleUrl: './result-view.component.css'
})
export class ResultViewComponent implements OnInit {

  private service = inject(QueryService)

  query: any
  data: any
  resultStatus: string = "pending"
  constructor(private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query')
    this.data = await this.service.generateResult(this.query)
    this.resultStatus = "complete"
  }

  async executeNewSearch(newQuery: string) {
    this.data = await this.service.generateResult(newQuery)
  }
}
