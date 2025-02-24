import { Component, ViewChild, ViewContainerRef } from '@angular/core'
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { MatButton } from '@angular/material/button'
import { parseTemplate } from '@angular/compiler'


const parsedTemplate = parseTemplate(
  `<mat-card>
      <p>
        {{ someText }}
      </p>
    </mat-card>`,
  '../other/other.component.html',
  {
    preserveWhitespaces: false,
    interpolationConfig: { start: '{{', end: '}}' },
  },
)

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatButton,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(

  ) { }


  async click() {
    const { OtherComponent } = await import('../other/other.component');
    this.container.createComponent(OtherComponent)

  }

  clickOther() {
    const parsedTemplate = parseTemplate(
      `<mat-card>
      <p>
        {{ someText }}
      </p>
    </mat-card>`,
      '../other/other.component.html',
      {
        preserveWhitespaces: false,
        interpolationConfig: { start: '{{', end: '}}' },
      },
    )


    console.log(parsedTemplate)
  }
}
