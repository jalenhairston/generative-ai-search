import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent {

  @Input() dataList: any

  isValidImageURL(url: string): boolean {
    return url.length > 0
  }
}
