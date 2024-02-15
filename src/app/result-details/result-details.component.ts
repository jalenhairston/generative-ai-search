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
  providers: [QueryService]
})
export class ResultDetailsComponent {

  private id: string = ''
  private service: QueryService = inject(QueryService)
  data: any;

  showData: boolean = false
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let tempId = this.route.snapshot.paramMap.get('id')
    if (tempId) {
      this.id = tempId
      this.service.getResult('')
                  .subscribe(data => {
                    this.data = this.getResultById(data, this.id)
                    this.showData = true
                  })
    }
  }

  getResultById(data: any, id: string): any {
    return data.find((element: any) => element.id === id)
  }

}
