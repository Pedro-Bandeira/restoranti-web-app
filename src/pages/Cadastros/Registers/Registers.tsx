import './Registers.css'

import MUIDataTable from "mui-datatables";

const columnsEmployees = ["Nome", "Codigo", "celular", "Data Cadastro"];

const dataEmployees = [
 ["Joe James", "0005", "(00)00000-0000", "00/00/2023"],
 ["John Walsh", "0002", "(00)00000-0000", "00/00/2023"],
 ["Bob Herm", "0004", "(00)00000-0000", "00/00/2023"],
 ["James Houston", "0003", "(00)00000-0000", "00/00/2023"],
];

const columnsTables = ["Numero Mesa", "Ativa", "Data Cadastro"];

const dataTables = [
 ["1", "Sim", "00/00/2023"],
 ["2", "Sim", "00/00/2023"],
 ["3", "Sim", "00/00/2023"],
 ["4", "Sim", "00/00/2023"],
];

const columnsServices = ["Serviço", "Codigo", "Data Cadastro"];

const dataServices = [
 ["Chamar Garçon", "1", "00/00/2023"],
 ["Pedir Ajuda", "2", "00/00/2023"],
 ["Pedir Cardápio", "3", "00/00/2023"],
 ["Fechar Conta", "4", "00/00/2023"],
];

const options = {
    filterType: 'checkbox',
};
  
export const Registers = () => {
    return(
        <div className="registers">
            <div className="employeesArea">
                {/* <div className="header"><span>Funcionarios</span> <a href="">Novo</a></div> */}
                <MUIDataTable
                    title={"Funcionários"}
                    data={dataEmployees}
                    columns={columnsEmployees}
                    options={options}
                />
            </div>

            <div className="tablesBottom">
                <div className="tablesArea">
                    <MUIDataTable
                        title={"Mesas"}
                        data={dataTables}
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