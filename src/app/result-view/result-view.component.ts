import {Component, inject, OnInit} from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {FooterComponent} from "../footer/footer.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {QueryService} from "../services/query.service";
import {TableViewComponent} from "../table-view/table-view.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-result-view',
  standalone: true,
  imports: [SearchComponent, FooterComponent, TableViewComponent, RouterLink],
  providers: [],
  templateUrl: './result-view.component.html',
  styleUrl: './result-view.component.css'
})
export class ResultViewComponent implements OnInit {

  private service = inject(QueryService)

  query: any
  data: any
  resultStatus: "waiting" | "complete" | "loading" = "loading"

  constructor(private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.query = this.service.getKeywords()
    this.data = await this.service.generateResult()
    this.resultStatus = "complete"
  }

  async executeNewSearch(newQuery: string) {
    this.data = null
    this.service.setKeywords(newQuery)
    this.data = await this.service.generateResult()
  }
}
