import {Component, inject, Input} from '@angular/core';
import {MatRadioButton, MatRadioChange, MatRadioGroup} from "@angular/material/radio";
import {QueryService} from "../services/query.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-modifier-menu',
  standalone: true,
  imports: [
    MatRadioButton,
    MatRadioGroup,
    FormsModule,
    NgForOf
  ],
  templateUrl: './modifier-menu.component.html',
  styleUrl: './modifier-menu.component.css'})
export class ModifierMenuComponent {
  MODIFIERS: any = {
    tone: ["Default", "Exciting", "Sarcastic", "Boring"],
    detail: ["Default", "Simplified", "Intermediate", "Advanced"],
    format: ["Default", "Instructions", "Questions", "Facts"],
    length: ["Default", "Short", "Medium", "Long"],
  }

  private service: QueryService = inject(QueryService)
  parameters: any = {
    tone: this.MODIFIERS.tone[0],
    detail: this.MODIFIERS.detail[0],
    format: this.MODIFIERS.format[0],
    length: this.MODIFIERS.length[0]
  }

  @Input() menuClass!: string;

  ngOnInit(): void {
    this.service.setSearchParameters(this.parameters)
  }

  updateParameters(modifier: string, event: MatRadioChange): void {
    this.parameters[modifier] = event.value
    this.service.setSearchParameters(this.parameters)
  }
}
