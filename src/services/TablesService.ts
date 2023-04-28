import { IRootTable, ITables } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IRootTable>('Table/GetList');

const bookATable = (tableNumber: number) => Api.get<IRootTable>(`Table/BookATable/${tableNumber}/10`);

const createTable = (data: ITables) => Api.post<ITables>('Table/Create', data);

const deleteTable = (tableId: number) => Api.delete(`Table/Delete/${tableId}`);


export const TablesService = {
    getAll,
    bookATable,
    createTable,
    deleteTable,
}