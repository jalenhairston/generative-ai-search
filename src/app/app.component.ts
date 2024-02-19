import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import  {SearchComponent} from "./search/search.component";
import {SearchTemplateComponent} from "./search-template/search-template.component";
import {ResultViewComponent} from "./result-view/result-view.component";
import {FooterComponent} from "./footer/footer.component";



@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, SearchComponent, SearchTemplateComponent, ResultViewComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-walkthrough';
}
