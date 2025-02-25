import { Component, inject } from '@angular/core'
import { MatAnchor } from '@angular/material/button'
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card'
import { RouterLink } from '@angular/router'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker'
import { MatCheckbox } from '@angular/material/checkbox'
import { MatOption, MatSelect } from '@angular/material/select'
import { provideNativeDateAdapter } from '@angular/material/core'
import { MatSlideToggle } from '@angular/material/slide-toggle'

enum Country {
  Germany = 'Germany',
  Foreign = 'Foreign',
}

class AddressForm {
  street: FormControl<string>
  houseNumber: FormControl<number>
  country: FormControl<Country>
}

export interface PersonForm {
  firstName: FormControl<string>
  lastName: FormControl<string>
  dateOfBirth: FormControl<string>
  isVerified: FormControl<boolean>
  address: FormGroup<AddressForm>
  test: FormControl<string>
}


@Component({
  selector: 'app-first-scenario',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCard,
    MatCardActions,
    MatCardContent,
    MatAnchor,
    RouterLink,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatCheckbox,
    MatSelect,
    MatOption,
    MatLabel,
    MatSlideToggle,
  ],
  templateUrl: './first-scenario.component.html',
  styleUrl: './first-scenario.component.css'
})
export class FirstScenarioComponent {
  formBuilder = inject(FormBuilder)

  formGroup: FormGroup<PersonForm>

  constructor() {
    this.formGroup = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      dateOfBirth: [null],
      isVerified: [null],
      address: this.formBuilder.group({
        street: [null],
        houseNumber: [null],
        country: [null],
      }),
      test: [null],
    })
  }
}
