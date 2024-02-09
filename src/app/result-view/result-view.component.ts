import {Component, inject, OnInit} from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {ListViewComponent} from "../list-view/list-view.component";
import {FooterComponent} from "../footer/footer.component";
import {ActivatedRoute} from "@angular/router";
import {QueryService} from "../services/query.service";

@Component({
  selector: 'app-result-view',
  standalone: true,
  imports: [SearchComponent, ListViewComponent, FooterComponent],
  providers: [QueryService],
  templateUrl: './result-view.component.html',
  styleUrl: './result-view.component.css'
})
export class ResultViewComponent implements OnInit {

  query: any
  resultData: any
  service = inject(QueryService)
  resultStatus: string = "pending"
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query')
    this.resultData = this.service.getResult(this.query)
    this.resultStatus = "complete"
  }
}
