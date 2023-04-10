import { useCallback, useState } from "react"
import { IRootRequests } from "../interfaces";
import { SolicitacoesService } from "../services"

export const useRequests = () => {
    const [requests, setRequests] = useState<IRootRequests>();

    const getAllRequests = useCallback(async () => {
        const { status, data } = await SolicitacoesService.getAll();

        if(status != 200) throw new Error();

        setRequests(data);

    }, [])

    return {
        requests,
        getAllRequests,
    }
}