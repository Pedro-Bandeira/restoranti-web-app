import { ISolicitacoes } from "../../interfaces";
import { RequestItem } from "./RequestItem"
import './Request.css'

type RequestProps = {
    items: ISolicitacoes[];
};

export const Request: React.FC<RequestProps> = ({ items }) => {
    return (
        <div className="container">
            {items.map((item, index) => (
                <RequestItem key={index} {...item} />
            ))}
        </div>
    )
}