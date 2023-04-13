import QRCode from 'react-qr-code' 
import { useTables } from '../../hooks'
import { useEffect, useState } from 'react';

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

    const [linkMakeAOrder, setLinkMakeAOrder] = useState("");
    const [linkHelp, setLinkHelp] = useState("");
    const [linkCloseAccount, setLinkCloseAccount] = useState("");

    const [tableNumber, setTableNumber] = useState(1);

    function gerarLink(): any{
        try{
            setLinkMakeAOrder(`https://localhost:7143/api/Request/Request/${tableNumber}/20`)
            setLinkHelp(`https://localhost:7143/api/Request/Request/${tableNumber}/30`)
            setLinkCloseAccount(`https://localhost:7143/api/Request/Request/${tableNumber}/40`)
        }
        catch{
            alert("Erro ao gerar link!\nTente Novamente...")
        }
    }

    return(
        <div className="CreateTagQrCode">
            <div className="functions">
                <div className='selectArea'>
                    <label htmlFor="selectTable">Selecione a Mesa:</label>
                    <select name="" id="selectTable" value={tableNumber} onChange={e => setTableNumber(Number(e.target.value))}>
                        {tables?.entity.map((item) => <option key={item.id} value={item.tableNumber} >Mesa: {item.tableNumber} </option>)}
                    </select>
                </div>

                <div className="buttons">
                    <button className='generateLink' onClick={() => gerarLink()}>Gerar Link</button>
                    <button className='generateLink'>Baixar Qr Code</button>
                </div>
            </div>

            <div className="links">
                <div className='listBox'>
                    <div className='listItem'>
                        <span>Fazer Pedido</span>
                        <QRCode value={linkMakeAOrder} className='qrCode'/>  
                    </div>
                    <p>Link Gerado: {linkMakeAOrder}</p>
                </div>

                <div className='listBox'>
                    <div className='listItem'>
                        <span>Pedir Ajuda</span>
                        <QRCode value={linkHelp} className='qrCode'/>  
                    </div>
                    <p>Link Gerado: {linkHelp}</p>
                </div>

                <div className='listBox'>
                    <div className='listItem'>
                        <span>Fechar Conta</span>
                        <QRCode value={linkCloseAccount} className='qrCode'/>  
                    </div>
                    <p>Link Gerado: {linkCloseAccount}</p>
                </div>
            </div>
        </div>
    )
}