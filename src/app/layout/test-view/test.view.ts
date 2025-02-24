import { Component } from '@angular/core'
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { MatButton } from '@angular/material/button'

@Component({
  selector: 'app-test-view',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatButton,
    MatCardActions,
  ],
  templateUrl: './test.view.html',
  styleUrl: './test.view.css'
})
export class TestView {

}
