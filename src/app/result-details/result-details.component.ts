import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QueryService} from "../services/query.service";
import {FooterComponent} from "../footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-result-details',
  standalone: true,
  imports: [
    FooterComponent, HttpClientModule, NgIf],
  templateUrl: './result-details.component.html',
  styleUrl: './result-details.component.css',
  providers: []
})
export class ResultDetailsComponent {

  private service: QueryService = inject(QueryService)
  data: any;

  showData: boolean = false
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.data = this.service.getResultById(id)
      this.showData = true
    }

  }
}
