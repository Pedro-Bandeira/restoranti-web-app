import QRCode from 'react-qr-code' 
import { useTables } from '../../hooks'
import { useEffect, useState } from 'react';
import { DropDown } from "../../components";

import './CreateTagQrCode.css'

export const CreateTagQrCode = () => {

    // Cria lista com os tipos de requisicoes
    const requests=[
        {enum: 20, name: "Fazer Pedido"},
        {enum: 30, name: "Pedir Ajuda"}, 
        {enum: 40, name: "Fechar Conta"}
    ]

    // Chama hooks dos objetos
    const { tables, getAll } = useTables();

    // Função que retorna os dados
    async function pollingRequests() {
        await getAll();
    }

    // executa a função
    useEffect(() => {
        pollingRequests();
    }, [])

    

    const [tableNumber, setTableNumber] = useState(0);

    const getTableNumber = (value: number) => {
        setTableNumber(value)
    }

    const [link, setLink] = useState("");

    function gerarLink(): any{
        try{
            setLink(`https://localhost:7143/api/Request/Request/${tableNumber}/20`)
        }
        catch{
            alert("Erro ao gerar link!\nTente Novamente...")
        }
    }

    return(
        <div className="CreateTagQrCode">
            
            {requests.map(
                (item, index) => 
                <ul className='listBox'>
                    <li className='listItem' key={index}>
                        <span>{item.name}</span>
                        {tables?.entity.length === 0 || tables?.entity === undefined ? <p>Carregando...</p> : <DropDown items={tables?.entity} handleTableNumber={getTableNumber}/> } 
                        <QRCode key={index} value={link} className='qrCode'/>  
                        <div className="buttons">
                            <button className='generateLink' onClick={gerarLink}>Gerar Link</button>
                            <button className='generateLink'>Baixar Qr Code</button>
                        </div>
                    </li>
                    <p>Link Gerado: {link}</p>
                </ul>
            )}

        </div>
    )
}