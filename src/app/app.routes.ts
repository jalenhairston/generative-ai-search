import { Routes } from '@angular/router';
import {SearchTemplateComponent} from "./search-template/search-template.component";
import {ResultViewComponent} from "./result-view/result-view.component";

export const routes: Routes = [
  {path: 'search', component: SearchTemplateComponent},
  {path: 'result/:query', component: ResultViewComponent}
];
