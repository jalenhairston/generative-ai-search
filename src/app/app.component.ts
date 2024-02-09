import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import  {SearchComponent} from "./search/search.component";
import {SearchTemplateComponent} from "./search-template/search-template.component";
import {ResultViewComponent} from "./result-view/result-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent, SearchTemplateComponent, ResultViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-walkthrough';
  searchText: string = 'default text'

  // getStyle(): any {
  //   let maxChars = 100
  //   let normalizedLengthToColor = (this.searchText.length / maxChars) * 255
  //   let halfColor = Math.floor(255/2)
  //   return {
  //     backgroundColor: `rgb(${normalizedLengthToColor}, ${halfColor}, ${halfColor}`
  //   }
  // }
}
