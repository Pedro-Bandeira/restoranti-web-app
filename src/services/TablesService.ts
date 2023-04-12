import { IRootTable, IMesas } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IRootTable>('Table/GetList');

const bookATable = (tableNumber: number) => Api.get<IRootTable>(`Table/BookATable/${tableNumber}/10`);

const createTable = (data: IMesas) => Api.post<IMesas>('Table/Create', data);


export const TablesService = {
    getAll,
    bookATable,
    createTable,
}