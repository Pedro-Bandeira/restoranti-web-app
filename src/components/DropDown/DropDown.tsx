import { useState } from 'react';
import { IMesas } from '../../interfaces';
import './DropDown.css'



type TablesProps = {
    items: IMesas[];
    handleTableNumber: Function;
};

export const DropDown: React.FC<TablesProps> = ({ items, handleTableNumber }) => {

    return(
        <div className="DropDown">
            <select name="" id="">
                {items.map((item, index) => <option key={item.id} value={item.tableNumber} >Mesa: {item.tableNumber} </option>)}
                
            </select>
        </div>
    )
}