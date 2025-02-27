import { Component, inject } from '@angular/core'
import { MatAnchor } from '@angular/material/button'
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { RouterLink } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ContactDetails } from '../../../../testdata/employee'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker'
import { provideNativeDateAdapter } from '@angular/material/core'
import { JsonPipe } from '@angular/common'

class ContactDetailsForm {
  phoneNumber: FormControl<string>
  email: FormControl<string>
}

export interface EmployeeForm {
  firstName: FormControl<string>
  lastName: FormControl<string>
  dateOfBirth: FormControl<string>
  contactDetails: FormGroup<ContactDetailsForm>
}

@Component({
  selector: 'app-second-scenario',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatAnchor,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    RouterLink,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatDatepickerInput,
    MatDatepicker,
    MatDatepickerToggle,
    MatLabel,
    JsonPipe,
  ],
  templateUrl: './second-scenario.component.html',
  styleUrl: './second-scenario.component.css'
})
export class SecondScenarioComponent {
  formBuilder = inject(FormBuilder)

  formGroup: FormGroup<EmployeeForm>

  constructor() {
    this.formGroup = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      dateOfBirth: [null],
      contactDetails: this.formBuilder.group({
        phoneNumber: [null],
        email: [null],
      }),
    })
  }
}
