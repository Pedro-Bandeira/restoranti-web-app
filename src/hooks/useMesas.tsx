import { useCallback, useState } from "react"
import { IMesas } from "../interfaces";
import { MesasService } from "../services"

export const useMesas = () => {
    const [mesas, setRequests] = useState<IMesas[]>([]);
    const [freeTablesQuantity, setfreeTablesQuantity] = useState(0);

    const getAll = useCallback(async () => {
        const { status, data } = await MesasService.getAll();

        if(status != 200) throw new Error();

        let countFreeTables = 0;

        for (let i = 0; i < mesas.length; i++){
            if (mesas[i].isAvailable == true){
            countFreeTables += 1;
            }
        }

        let teste = freeTablesQuantity;
        if (teste != countFreeTables){
            setfreeTablesQuantity (countFreeTables);
        }
        setRequests(data);

    }, [])

    return {
        mesas,
        freeTablesQuantity,
        getAll,
    }
}