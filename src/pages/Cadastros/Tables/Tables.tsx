import { useState } from 'react';
import { useTables } from '../../../hooks';
import './Tables.css'
import { useNavigate } from "react-router-dom";
import { IMesas } from '../../../interfaces';

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
    const data: IMesas = {
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


  async function handleCreateTable(tableData: IMesas) {
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
      <label htmlFor="txtTableNumber">Número da Mesa: </label>
      <input type="number" placeholder="Número da Mesa" id="txtTableNumber" value={tableNumber} onChange={handleTableNumber} />
      <button onClick={handleTableData}>Salvar</button>
      <button onClick={handleCancel}>Cancelar</button>
    </div>
  )
}
  

// {
//   "creationDate": "2023-04-12T03:12:00.306Z",
//   "modifiedDate": "2023-04-12T03:12:00.306Z",
//   "id": 0,
//   "tableNumber": 0,
//   "isAvailable": true,
//   "isActive": true
// }