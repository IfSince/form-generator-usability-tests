import { Component } from '@angular/core'
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'

@Component({
  selector: 'app-test-view',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
  ],
  templateUrl: './test.view.html',
  styleUrl: './test.view.css'
})
export class TestView {

}
