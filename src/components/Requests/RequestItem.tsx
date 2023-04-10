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

    const [isOpen, setIsOpen] = useState(false)
    const [employeeId, setEmployeeId] = useState(0)

    const { acceptRequest } = useRequests();

    function handleOpenModal () {
        setIsOpen(true);
    }

    function handleCloseModal () {
        setIsOpen(false);
    }

    function handleEmployeeId (event: any) {
        setEmployeeId(event.target.value)
    }

    async function acceptRequests() {
        try {
            if(employeeId != 0){
                await acceptRequest(employeeId, requestId);
                handleCloseModal();
                alert("Solicitação atendida com sucesso!")
            }
            else{
                alert("Id digitado inválido!")
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
            <button style={{gridArea: "confirm"}} onClick={handleOpenModal}>CONFIRMAR</button>
            <Modal 
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
            >
                <div className="modal-box">
                    <div className="modal-input">
                        <label>Digite o seu Id:</label>
                        <input type="number" placeholder='0' value={employeeId} onChange={handleEmployeeId}/>
                    </div>
                    <div className="modal-buttons">
                        <button onClick={() => (handleCloseModal())} className='modal-button'>Cancelar</button>
                        <button onClick={() => (acceptRequests())} className='modal-button'>Confirmar</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}