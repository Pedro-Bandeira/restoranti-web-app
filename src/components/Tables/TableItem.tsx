import './TableItem.css'
import { useTables } from '../../hooks'


export type MesaItemProps = {
    tableNumber: number,
    isAvailable: boolean
}

export const TableItem: React.FC<MesaItemProps> = ({tableNumber, isAvailable}) => {

    const { bookATable } = useTables();

    async function bookChange() {
        await bookATable(tableNumber);
        if(isAvailable) {
            alert(`Mesa ${tableNumber} ocupada com sucesso!`)
        }
        else{
            alert(`Mesa ${tableNumber} está livre agora`)
        }
    }

    return(
        <div className={isAvailable == false ? "TableItem-ocupado" : "TableItem"}>
            <h2 style={{color: "#fff"}}>Mesa: {tableNumber}</h2>
            <span style={{fontSize: 20, color: "#fff"}}>Status: {isAvailable == true ? "Disponível" : "Ocupado"}</span>
            <button 
            id={isAvailable == false ? "buttonBooked" : "buttonBooking"}
            onClick={bookChange}
            >
                {isAvailable == false ? "DESOCUPAR" : "OCUPAR"}
            </button>
        </div>
    )
}