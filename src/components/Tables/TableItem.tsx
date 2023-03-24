import './TableItem.css'

export type MesaItemProps = {
    id: number,
    qtd_cadeiras: string,
    status: string
}

export const TableItem: React.FC<MesaItemProps> = ({id, qtd_cadeiras, status}) => {
    return(
        <div className={status == 'ocupado' ? "TableItem-ocupado" : "TableItem"}>
            <h2 style={{gridArea: "mesa", color: "#fff"}}>Mesa: {id}</h2>
            <span style={{gridArea: "cadeiras", fontSize: 20, color: "#fff"}}>Cadeiras: {qtd_cadeiras}</span>
            <span style={{gridArea: "status", fontSize: 20, color: "#fff"}}>Status: {status}</span>
        </div>
    )
}