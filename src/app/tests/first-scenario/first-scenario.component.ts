import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button'
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-first-scenario',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatAnchor,
    RouterLink,
  ],
  templateUrl: './first-scenario.component.html',
  styleUrl: './first-scenario.component.css'
})
export class FirstScenarioComponent {

}
