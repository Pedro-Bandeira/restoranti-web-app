import { useCallback, useState } from "react"
import { ISolicitacoes } from "../interfaces";
import { SolicitacoesService } from "../services"

export const useSolicitacoes = () => {
    const [requests, setRequests] = useState<ISolicitacoes[]>([]);

    const getAll = useCallback(async () => {
        const { status, data } = await SolicitacoesService.getAll();

        if(status != 200) throw new Error();

        setRequests(data);

    }, [])

    return {
        requests,
        getAll,
    }
}