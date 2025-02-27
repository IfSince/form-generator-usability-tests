import { UUID } from './uuid'

export class ContactDetails {
  phoneNumber: string
  email?: string
}

interface Employee {
  employeeId: UUID
  firstName: string
  lastName?: string
  dateOfBirth: string
  contactDetails: ContactDetails
}
