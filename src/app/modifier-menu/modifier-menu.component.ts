import {Component, inject} from '@angular/core';
import {MatRadioButton, MatRadioChange, MatRadioGroup} from "@angular/material/radio";
import {QueryService} from "../services/query.service";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-modifier-menu',
  standalone: true,
  imports: [
    MatRadioButton,
    MatRadioGroup,
    FormsModule
  ],
  templateUrl: './modifier-menu.component.html',
  styleUrl: './modifier-menu.component.css'})
export class ModifierMenuComponent {
  MODIFIERS: any = {
    tone: {
      default: "Default",
      excited: "Excited",
      sarcastic: "Sarcastic",
      bored: "Bored"
    },
    detail: {
      default: "Default",
      simplified: "Simplified",
      intermediate: "Intermediate",
      advanced: "Advanced"
    },
    format: {
      default: "Default",
      instructions: "Instructions",
      questions: "Questions",
      facts: "Facts"
    },
    length: {
      default: "Default",
      short: "Short",
      medium: "Medium",
      long: "Long"
    }
  }

  private service: QueryService = inject(QueryService)
  parameters: any = {
    tone: this.MODIFIERS.tone.default,
    detail: this.MODIFIERS.detail.default,
    format: this.MODIFIERS.format.default,
    length: this.MODIFIERS.length.default
  }

  updateParameters(modifier: string, event: MatRadioChange): void {
    this.parameters[modifier] = event.value
    this.service.setSearchParameters(this.parameters)
  }
}
