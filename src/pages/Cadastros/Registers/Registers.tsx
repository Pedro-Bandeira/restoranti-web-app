import './Registers.css'
import { useUsers, useTables } from '../../../hooks'
import { useEffect } from 'react';

import MUIDataTable from "MUI-Datatables";

const columnsEmployees = 
[
    {name: "name", label: "Nome"}, 
    {name: "employeeId", label: "Código"},
    {name: "phone", label: "Telefone"},
    {name: "creationDate", label: "Data Cadastro"},
];

const columnsTables = 
[
    {name: "tableNumber", label: "Numero Mesa"}, 
    {name: "isActive", label: "Ativa"}, 
    {name: "creationDate", label: "Data Cadastro"}
];

const columnsServices = ["Serviço", "Codigo"];

const dataServices = [
 ["Reservar Mesa", "10"],
 ["Fazer Pedido", "20"],
 ["Pedir Ajuda", "30"],
 ["Fechar Conta", "40"]
];

const options = {
    filterType: 'checkbox',
};
  
export const Registers = () => {

    // Chama hooks dos objetos
    const { users, getAllUsers } = useUsers();
    const { tables, getAll } = useTables();

    // Função que retorna os dados
    async function pollingRequests() {
        await getAll();
        await getAllUsers();
    }

    // executa a função
    useEffect(() => {
        pollingRequests();
    }, [])

    return(
        <div className="registers">
            <div className="employeesArea">
                {/* <div className="header"><span>Funcionarios</span> <a href="">Novo</a></div> */}
                <MUIDataTable
                    title={"Funcionários"}
                    data={users?.entity}
                    columns={columnsEmployees}
                    options={options}
                />
            </div>

            <div className="tablesBottom">
                <div className="tablesArea">
                    <MUIDataTable
                        title={"Mesas"}
                        data={tables?.entity}
                        columns={columnsTables}
                        options={options}
                    />
                </div>

                <div className="servicesArea">
                    <MUIDataTable
                        title={"Serviços"}
                        data={dataServices}
                        columns={columnsServices}
                        options={options}
                    />
                </div>
            </div>
           
        </div>
    )
}