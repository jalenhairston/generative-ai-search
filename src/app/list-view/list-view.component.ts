import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent {

  @Input() dataList: any
}
