import './RequestItem.css'

export type RequestItemsProps = {
    tableNumber: number,
    type: number,
}

export const RequestItem: React.FC<RequestItemsProps> = ({tableNumber, type}) => {

    return(
        <div className="itemCard">
            <h2 style={{gridArea: "mesa", color: "#fff"}}>Mesa: {tableNumber}</h2>
            <span style={{gridArea: "servico", fontSize: 20, color: "#fff"}}>{type == 20 ? "Fazer Pedido" : type == 30 ? "Pedir Ajuda" : type == 40 ? "Fechar Conta" : "Tipo Inválido"}</span>
            <button style={{gridArea: "confirm"}}>CONFIRMAR</button>
        </div>
    )
}