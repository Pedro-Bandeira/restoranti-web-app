export interface IRootTable {
    hasError: boolean
    message: any
    entity: ITables[]
  }
  
export interface ITables {
    id: number
    tableNumber: number
    isAvailable: boolean
    isActive: boolean
    creationDate: string
    modifiedDate: any
}
