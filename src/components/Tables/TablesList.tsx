import './TablesList.css'

import { TableItem } from './TableItem'
import { IMesas } from "../../interfaces";

type TablesProps = {
    items: IMesas[];
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