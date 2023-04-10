import { IRequests } from "../../interfaces";
import { RequestItem } from "./RequestItem"
import './Request.css'

type RequestProps = {
    items: IRequests[];
};

export const Request: React.FC<RequestProps> = ({ items }) => {
    return (
        <div className="container-requests">
            {items.map((item, index) => (
                <RequestItem key={index} {...item} />
            ))}
        </div>
    )
}