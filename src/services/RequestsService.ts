import { IRootRequests } from "../interfaces"
import { Api } from "../providers"


const getAll = () => Api.get<IRootRequests>('Request/Request/GetList')

const acceptRequest = (employeeId: number, requestId: number) => Api.put(`Request/AcceptService/${employeeId}/${requestId}`)


export const RequestsService = {
    getAll,
    acceptRequest,
}