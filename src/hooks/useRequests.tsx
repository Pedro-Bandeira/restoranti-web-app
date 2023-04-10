import { useCallback, useState } from "react"
import { IRootRequests } from "../interfaces";
import { RequestsService } from "../services"

export const useRequests = () => {
    const [requests, setRequests] = useState<IRootRequests>();

    const getAllRequests = useCallback(async () => {
        const { status, data } = await RequestsService.getAll();

        if(status != 200) throw new Error();

        setRequests(data);

    }, [])

    const acceptRequest = useCallback(async (employeeId: number, requestId: number) => {
        const { status, data } = await RequestsService.acceptRequest(employeeId, requestId);

        if(status != 200) throw new Error();  
    }, [])

    return {
        requests,
        getAllRequests,
        acceptRequest
    }
}