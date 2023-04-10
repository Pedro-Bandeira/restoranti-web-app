export interface IRootTable {
    hasError: boolean
    message: any
    entity: IMesas[]
  }
  
export interface IMesas {
    id: number
    tableNumber: number
    isAvailable: boolean
    isActive: boolean
    creationDate: string
    modifiedDate: any
}
