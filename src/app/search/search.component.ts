import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Input() searchValue: string = ""
  @Input() cssClass!: string;
  @Input() searchStatus: string = ""
  isValidSearchValue: boolean = false;
  updateSearchValue(value: string) {
    this.searchValue = value
    if (this.searchValue.length > 0) {
      this.isValidSearchValue = true
      return
    }
    this.isValidSearchValue = false
  }

  getStatusStyle(): any {
    if (this.searchStatus === "complete") {
      return {
        backgroundColor: "green"
      }
    }
    if (this.searchStatus === "pending") {
      return {
        backgroundColor: "yellow"
      }
    }
  }
}

