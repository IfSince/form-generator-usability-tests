import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button'
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-third-scenario',
  standalone: true,
  imports: [
    MatAnchor,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    RouterLink,
  ],
  templateUrl: './third-scenario.component.html',
  styleUrl: './third-scenario.component.css'
})
export class ThirdScenarioComponent {

}
