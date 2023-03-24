import { useCallback, useState } from "react"
import { IMesas } from "../interfaces";
import { MesasService } from "../services"

export const useMesas = () => {
    const [mesas, setRequests] = useState<IMesas[]>([]);

    const getAll = useCallback(async () => {
        const { status, data } = await MesasService.getAll();

        if(status != 200) throw new Error();

        setRequests(data);

    }, [])

    return {
        mesas,
        getAll,
    }
}