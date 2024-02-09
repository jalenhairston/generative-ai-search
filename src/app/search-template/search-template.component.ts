import { Component } from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-search-template',
  standalone: true,
  imports: [
    SearchComponent,
    FooterComponent
  ],
  templateUrl: './search-template.component.html',
  styleUrl: './search-template.component.css'
})
export class SearchTemplateComponent {

}
