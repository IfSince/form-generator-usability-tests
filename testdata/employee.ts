export class ContactDetails {
  phoneNumber: string
  email?: string
}

interface Employee {
  employeeId: string
  firstName: string
  lastName?: string
  dateOfBirth: string
  contactDetails: Omit<ContactDetails, 'status'>
}
