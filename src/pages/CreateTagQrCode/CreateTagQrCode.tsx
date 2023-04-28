import QRCode from 'react-qr-code' 
import { useTables } from '../../hooks'
import { useCallback, useEffect, useRef, useState } from 'react';
import { baseURL } from '../../providers'
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

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

    const [tableNumber, setTableNumber] = useState(0);

    function handleOnChange(e: number) {
        setTableNumber(e)
        setLinkMakeAOrder("")
        setLinkHelp("")
        setLinkCloseAccount("")
    }

    function gerarLink(): any{
        if (tableNumber != 0) {
            try{
                setLinkMakeAOrder(`${baseURL}Request/Request/${tableNumber}/20`)
                setLinkHelp(`${baseURL}Request/Request/${tableNumber}/30`)
                setLinkCloseAccount(`${baseURL}Request/Request/${tableNumber}/40`)
            }
            catch{
                alert("Erro ao gerar link!\nTente Novamente...")
            }
        }
    }

    var makeOrderCard = document.getElementById('makeOrderCard')!
    var helpCard = document.getElementById('helpCard')!
    var closeAccountCard = document.getElementById('closeAccountCard')!

    function donwloadCard() {
        if (tableNumber == 0) {
            alert(`Erro ao fazer download!\nPrimeiro Selecione uma mesa e clique no botão "Gerar Link"`)
        }
        else {
            //Download do card Fazer Pedido
            htmlToImage.toPng(makeOrderCard, { quality: 0.95 })
            .then(function (dataUrl) {
              var link = document.createElement('a');
              link.download = 'FazerPedido-Mesa' + tableNumber + '.png';
              link.href = dataUrl;
              link.click();
            });
    
            //Download do card Pedir Ajuda
            htmlToImage.toPng(helpCard, { quality: 0.95 })
            .then(function (dataUrl) {
              var link = document.createElement('a');
              link.download = 'PedirAjuda-Mesa' + tableNumber + '.png';
              link.href = dataUrl;
              link.click();
            });
    
            //Download do card Fechar Conta
            htmlToImage.toPng(closeAccountCard, { quality: 0.95 })
            .then(function (dataUrl) {
              var link = document.createElement('a');
              link.download = 'FecharConta-Mesa' + tableNumber + '.png';
              link.href = dataUrl;
              link.click();
            });
        }
    }

    return(
        <div className="CreateTagQrCode">
            <div className="functions">
                <div className='selectArea'>
                    <label htmlFor="selectTable">Selecione a Mesa:</label>
                    <select name="" id="selectTable" value={tableNumber} onChange={e => handleOnChange(Number(e.target.value))}>
                        <option value="0">...</option>
                        {tables?.entity.map((item) => <option key={item.id} value={item.tableNumber} >Mesa: {item.tableNumber} </option>)}
                    </select>
                </div>

                <div className="buttons">
                    <button className='generateLink' onClick={() => gerarLink()}>Gerar Link</button>
                    <button className='generateLink' onClick={() => donwloadCard()}>Baixar Qr Code</button>
                </div>
            </div>

            <div className="links">
                <p>Link Gerado: {linkMakeAOrder}</p>
                <div className='listBox' id='makeOrderCard'>
                    <div className='listItem'>
                        <span>Fazer Pedido</span>
                        <QRCode value={linkMakeAOrder} className='qrCode'/>  
                    </div>
                </div>

                <p>Link Gerado: {linkHelp}</p>
                <div className='listBox' id='helpCard'>
                    <div className='listItem'>
                        <span>Pedir Ajuda</span>
                        <QRCode value={linkHelp} className='qrCode'/>  
                    </div>
                </div>

                <p>Link Gerado: {linkCloseAccount}</p>
                <div className='listBox' id='closeAccountCard'>
                    <div className='listItem'>
                        <span>Fechar Conta</span>
                        <QRCode value={linkCloseAccount} className='qrCode'/>  
                    </div>
                </div>
            </div>
        </div>
    )
}