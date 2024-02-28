import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {Router} from "@angular/router";
import {QueryService} from "../services/query.service";

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
  private router: Router = inject(Router)
  private service: QueryService = inject(QueryService)


  SEARCH_STATUS_STYLES = {
    complete: {
      text: "GOOD",
      style: {
        backgroundColor: "green"
      }
    },
    loading: {
      text: "PENDING",
      style: {
        backgroundColor: "yellow"
      }
    },
    waiting: {
      text: "STANDBY",
      style: {
        backgroundColor: "white"
      }
    },
  }
  @Input() searchStatus: keyof typeof this.SEARCH_STATUS_STYLES = "waiting"
  @Input() searchValue: string = ""
  @Input() searchClass!: string;
  @Output() newSearchEvent = new EventEmitter<string>();

  parameters: any

  ngOnInit() {
    if (!this.searchValue) {
      this.searchValue = ""
    }
  }

  updateSearchValue(value: string) {
    this.searchValue = value
  }


  executeSearch() {
    if (this.searchClass === "resultDisplay") {
      this.newSearchEvent.emit(this.searchValue);
    }
    this.router.navigate([('/result/' + this.searchValue)]);
  }

  isValidSearchValue(): boolean {
    return this.searchValue.length > 0
  }

  getStatusStyle(): any {
    return this.SEARCH_STATUS_STYLES[this.searchStatus].style
  }

  getStatus(): string {
    return "Server Status: " + this.SEARCH_STATUS_STYLES[this.searchStatus].text
  }
}

