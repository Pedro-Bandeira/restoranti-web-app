import './RequestItem.css'

export type RequestItemsProps = {
    id: number,
    servico: string,
}

export const RequestItem: React.FC<RequestItemsProps> = ({id, servico}) => {
    return(
        <div className="itemCard">
            <h2 style={{gridArea: "mesa", color: "#fff"}}>Mesa: {id}</h2>
            <span style={{gridArea: "servico", fontSize: 20, color: "#fff"}}>{servico}</span>
            <button style={{gridArea: "confirm"}}>CONFIRMAR</button>
        </div>
    )
}