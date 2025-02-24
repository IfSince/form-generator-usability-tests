import { Component, Input } from '@angular/core'
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card'


// const parsedTemplate = parseTemplate(
//   `<mat-card>
//       <p>
//         {{ someText }}
//       </p>
//     </mat-card>`,
//   './other/other.component.html',
//   {
//     preserveWhitespaces: false,
//     interpolationConfig: { start: '{{', end: '}}' },
//   },
// )

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
  ],
  templateUrl: './other.component.html',
  // template: `
  //   <mat-card>
  //     <p>
  //       {{ someText }}
  //     </p>
  //   </mat-card>
  // `,
  styleUrl: './other.component.css',
})
export class OtherComponent {
  @Input() someText!: string
}
