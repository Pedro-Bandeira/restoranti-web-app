export interface IRootUser {
  hasError: boolean
  message: any
  entity: IUsers[]
}

export interface IUsers {
  employeeId: number
  name: string
  phone: string
  email: string
  profile: number
  username: string
  password: string
  confirmPassword: string
  creationDate: string
  modifiedDate: string
}
