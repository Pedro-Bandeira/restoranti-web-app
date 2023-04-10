import { IRootTable } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IRootTable>('Table/GetList')

const bookATable = (tableNumber: number) => Api.get<IRootTable>(`Table/BookATable/${tableNumber}/10`)


export const TablesService = {
    getAll,
    bookATable,
}