export interface IRootRequests {
    hasError: boolean
    message: string
    entity: IRequests[]
}

export interface IRequests {
    id: number
    type: number
    tableNumber: number
    isActive: boolean
    employeeId: number
    creationDate: string
    modifiedDate: any
}