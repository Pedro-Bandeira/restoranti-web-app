import { useCallback, useState } from "react"
import { ITables, IRootTable } from "../interfaces";
import { TablesService } from "../services"

export const useTables = () => {
    const [tables, setTables] = useState<IRootTable>();
    const [freeTablesQuantity, setfreeTablesQuantity] = useState(0);

    const getAll = useCallback(async () => {
        const { status, data } = await TablesService.getAll();

        if(status != 200) throw new Error();

        let countFreeTables = 0;

        let teste = freeTablesQuantity;
        if (teste != countFreeTables){
            setfreeTablesQuantity (0);
        }
        setTables(data);

    }, [])


    const bookATable = useCallback(async (tableNumber: number) => {
        const { status, data } = await TablesService.bookATable(tableNumber);

        if(status != 200) throw new Error();  
    }, [])

    const createTable = useCallback(async (tableData: ITables) => {
        const { status, data } = await TablesService.createTable(tableData);

        if(status != 200) throw new Error();  
    }, [])


    const deleteTable = useCallback(async (tableId: number) => {
        const { status, data } = await TablesService.deleteTable(tableId);

        if(status != 200) throw new Error();  
    }, [])


    return {
        tables,
        freeTablesQuantity,
        getAll,
        bookATable,
        createTable,
        deleteTable
    }
}