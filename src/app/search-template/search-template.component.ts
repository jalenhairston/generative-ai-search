import { Component } from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {FooterComponent} from "../footer/footer.component";
import {ModifierMenuComponent} from "../modifier-menu/modifier-menu.component";

@Component({
  selector: 'app-search-template',
  standalone: true,
  imports: [
    SearchComponent,
    ModifierMenuComponent,
    FooterComponent
  ],
  templateUrl: './search-template.component.html',
  styleUrl: './search-template.component.css'
})
export class SearchTemplateComponent {

}
