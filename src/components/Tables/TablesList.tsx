import './TablesList.css'

import { TableItem } from './TableItem'
import { ITables } from "../../interfaces";

type TablesProps = {
    items: ITables[];
};

export const TablesList: React.FC<TablesProps> = ({ items }) => {
    return(
        <div className="TablesList">
            <div className="container-requests">
                {items.map((item, index) => (
                    <TableItem key={index} {...item} />
                ))}
            </div>
        </div>
    )
}