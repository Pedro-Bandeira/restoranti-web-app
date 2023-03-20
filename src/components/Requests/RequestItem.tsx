import './RequestItem.css'

export type RequestItemsProps = {
    id: number,
    servico: string,
}

export const RequestItem: React.FC<RequestItemsProps> = ({id, servico}) => {
    return(
        <div className="itemCard">
            <h1 style={{gridArea: "mesa"}}>Mesa: {id}</h1>
            <h2 style={{gridArea: "servico"}}>{servico}</h2>
            <button style={{gridArea: "confirm"}}>CONFIRMAR</button>
        </div>
    )
}