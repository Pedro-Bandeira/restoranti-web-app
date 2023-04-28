import { useState } from 'react';
import { useRequests } from '../../hooks';
import './RequestItem.css'
import Modal from 'react-modal'

Modal.setAppElement('#root');

export type RequestItemsProps = {
    tableNumber: number,
    type: number,
    requestId: number
}

export const RequestItem: React.FC<RequestItemsProps> = ({tableNumber, type, requestId}) => {

    const [employeeId, setEmployeeId] = useState(0)

    const { acceptRequest } = useRequests();

    async function acceptRequests() {
        try {
            var r=confirm("Tem certeza que deseja atender essa solicitação?");
            if (r==true)
            {
                setEmployeeId(Number(localStorage.getItem("i")))
                if(employeeId != 0){
                    await acceptRequest(employeeId, requestId);
                    alert("Solicitação atendida com sucesso!")
                }
                else{
                    alert("Id digitado inválido!")
                }
            }
        }
        catch(event){
            console.log(event)
            alert("Ocorreu um erro ao confirmar a solicitação, verifique o Id e tente novamente!")
        }
        
        
    }

    return(
        <div className="itemCard">
            <h2 style={{gridArea: "mesa", color: "#fff"}}>Mesa: {tableNumber}</h2>
            <span style={{gridArea: "servico", fontSize: 20, color: "#fff"}}>{type == 20 ? "Fazer Pedido" : type == 30 ? "Pedir Ajuda" : type == 40 ? "Fechar Conta" : "Tipo Inválido"}</span>
            <button style={{gridArea: "confirm"}} onClick={() => (acceptRequests())}>CONFIRMAR</button>
            
        </div>
    )
}