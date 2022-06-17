import { Component, Input, Output } from '@angular/core';

export interface Root {
  loans: Loan[]
}

export interface Loan {
  id: string
  title: string
  tranche: string
  available: string
  annualised_return: string
  term_remaining: string
  ltv: string
  amount: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() amount = 238456
  modal = false;
}
