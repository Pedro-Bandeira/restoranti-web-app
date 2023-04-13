import { useState } from 'react';
import { useTables } from '../../../hooks';
import './Tables.css'
import { useNavigate } from "react-router-dom";
import { ITables } from '../../../interfaces';

export const Tables = () => {

  const navigate = useNavigate();

  const [tableNumber, setTableNumber] = useState(0);
  const { createTable } = useTables();

  function handleCancel() {
    navigate("/cadastros")
  }

  function handleTableNumber (event: any) {
    setTableNumber(event.target.value)
  }

  function handleTableData() {
    const date = Date.now()
    const data: ITables = {
      id: 0,
      creationDate: new Date(date).toISOString(),
      modifiedDate: new Date(date).toISOString(),
      tableNumber: tableNumber,
      isAvailable: true,
      isActive: true
    }
    console.log(data)
    handleCreateTable(data)
  }


  async function handleCreateTable(tableData: ITables) {
    try {
      await createTable(tableData);
      alert("Mesa cadastrada com sucesso!");
      handleCancel();
    }
    catch(event){
      console.log(event)
      alert("Ocorreu um erro ao cadastrar a mesa, tente novamente!")
    }
    
    
}

  return (
    <div className="tables"> 
      <h2>Cadastro de Mesas</h2>
      <div className="tablesFields">
        <label htmlFor="txtTableNumber">Digite o número da Mesa: </label>
        <input type="number" placeholder="Número da Mesa" id="txtTableNumber" value={tableNumber} onChange={handleTableNumber} />
        <div className="buttons-tables">
          <button onClick={handleTableData}>Salvar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}