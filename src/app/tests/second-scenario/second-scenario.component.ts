import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button'
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-second-scenario',
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
  templateUrl: './second-scenario.component.html',
  styleUrl: './second-scenario.component.css'
})
export class SecondScenarioComponent {

}
