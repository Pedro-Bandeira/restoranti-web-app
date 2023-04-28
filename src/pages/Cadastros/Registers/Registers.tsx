import './Registers.css'
import { useUsers, useTables } from '../../../hooks'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faEdit, faTrash, } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IRootUser } from '../../../interfaces';

const dataServices = [
 ["Reservar Mesa", "10"],
 ["Fazer Pedido", "20"],
 ["Pedir Ajuda", "30"],
 ["Fechar Conta", "40"]
];
  
export const Registers = () => {

    const [userData, setUserData] = useState({
        employeeId: 0,
        name: '',
        phone: '',
        email: '',
        profile: 0,
        username: '',
        password: '',
        confirmPassword: '',
        creationDate: new Date().toISOString(),
        modifiedDate: new Date().toISOString(),
    });

    const [isOpen, setIsOpen] = useState(false)

    // Chama hooks dos objetos
    const { users, getAllUsers, deleteUser, editUser } = useUsers();
    const { tables, getAll, deleteTable } = useTables();

    // Função que retorna os dados
    async function pollingRequests() {
        await getAll();
        await getAllUsers();
    }

    // executa a função ao carregar a pagina
    useEffect(() => {
        pollingRequests();
    }, [])


    function handleOpenModal (employeeId: number) {
        setIsOpen(true);
        handleEdit(employeeId)
    }

    function handleCloseModal () {
        setIsOpen(false);
    }


    function handleDelete(type: number, itemId: number) {
        //Type = 0 : Deleta funcionario
        //Type = 1 : Deleta Mesa
        if(type == 0){

            var r=confirm("Tem certeza que deseja deletar o usuário?");
            if (r==true)
            {
                if(itemId == Number(localStorage.getItem('i'))){
                    alert('O usuário não pode ser deletado pois é o mesmo que está sendo usado no login!')
                }
                else{
                    deleteUser(itemId)
                    alert('Usuario (' + itemId + ') foi deletado')
                }
            }
        }
        else if (type == 1) {
            var r=confirm("Tem certeza que deseja deletar a mesa " + itemId + "?");
            if (r==true)
            {
                deleteTable(itemId)
                alert('Mesa (' + itemId + ') foi deletada')
            }
        }
        pollingRequests()

       
    }

    function handleEdit(employeeId: number) {

        const result = users?.entity.filter((obj) => {
            return obj.employeeId === employeeId;
          });
        if(result != undefined){
            setUserData({
                employeeId: result[0].employeeId!,
                name: result[0].name!,
                phone: result[0].phone!,
                email: result[0].email!,
                profile: result[0].profile!,
                username: result[0].username!,
                password: result[0].password!,
                confirmPassword: result[0].confirmPassword!,
                creationDate: result[0].creationDate!,
                modifiedDate: result[0].modifiedDate!,
            })
        }
    }

    function handleEditFormChange(event: any) {
        const value = event.target.value;
        setUserData({
        ...userData,
        [event.target.name]: value
        });
    }

    async function saveEdit() {
        try {
            console.log(userData)
            const response: IRootUser = await editUser(userData);
            alert(response.message)
            if(!response.hasError) {
                handleCloseModal()
                pollingRequests()
            }
          }
          catch(event){
            console.log(event)
            alert("Ocorreu um erro ao criar o usuario, tente novamente!")
        }
    }




    return(
        <div className="registers">
            <div className="buttons-registers">
                <a href="/cadastros/funcionarios">
                    <i><FontAwesomeIcon icon={faAdd} /></i>
                    Novo Funcionário
                </a>
                <a href="/cadastros/mesas">
                    <i><FontAwesomeIcon icon={faAdd} /></i>
                    Nova Mesa
                </a>
            </div>
            <div className="employeesArea">

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="left"colSpan={7}>
                                <h3>Funcionários</h3>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell align="left">Cógido</TableCell>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="left">Telefone</TableCell>
                            <TableCell align="left">Data Cadastro</TableCell>
                            <TableCell align="center">Editar</TableCell>
                            <TableCell align="center">Deletar</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {users?.entity.map((row) => (
                            <TableRow key={row.employeeId}>
                            <TableCell component="th" scope="row">{row.username}</TableCell>
                            <TableCell align="left">{row.employeeId}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                            <TableCell align="left">{row.creationDate}</TableCell>
                            <TableCell align="center">
                                <button className='buttonRow' onClick={() => handleOpenModal(Number(row.employeeId))}>
                                    <i><FontAwesomeIcon icon={faEdit} /></i>
                                </button>
                            </TableCell>
                            <TableCell align="center">
                                <button className='buttonRow' id='deleteButton' onClick={() => (handleDelete(0, Number(row.employeeId)))}>
                                    <i><FontAwesomeIcon icon={faTrash} /></i>
                                </button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className="tablesBottom">
                <div className="tablesArea">
                    
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left"colSpan={7}>
                                    <h3>Mesas</h3>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Numero Mesa</TableCell>
                                <TableCell align="left">Data Cadastro</TableCell>
                                <TableCell align="center">Deletar</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {tables?.entity.map((row) => (
                                <TableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.tableNumber}</TableCell>
                                <TableCell align="left">{row.creationDate}</TableCell>
                                <TableCell align="center">
                                    <button className='buttonRow' id='deleteButton' onClick={() => (handleDelete(1, row.id))}>
                                        <i><FontAwesomeIcon icon={faTrash} /></i>
                                    </button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div className="servicesArea">

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 350 }} aria-label="caption table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="left"colSpan={7}>
                                    <h3>Serviços</h3>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Serviço</TableCell>
                                <TableCell align="left">Código</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {dataServices.map((row) => (
                                <TableRow key={row[0]}>
                                <TableCell component="th" scope="row">{row[0]}</TableCell>
                                <TableCell align="left">{row[1]}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <Modal 
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
                >
                    <div className="modalEmployeeBox">
                        <div className="modalEmployeesContent">
                            <div className="fields">
                                <div className="field">
                                    <label htmlFor="txtEmployeeId">Id: </label>
                                    <input type="text" name="employeeId" id="txtEmployeeId" placeholder='Nome funcionario' value={userData.employeeId} disabled/>
                                </div>

                                <div className="field">
                                    <label htmlFor="txtNameEmployee">Nome: </label>
                                    <input type="text" name="name" id="txtNameEmployee" placeholder='Nome funcionario' value={userData.name} onChange={handleEditFormChange}/>
                                </div>

                                <div className="field">
                                    <label htmlFor="txtPhoneEmployee">Telefone: </label>
                                    <input type="phone" name="phone" id="txtPhoneEmployee" placeholder='Telefone funcionario' value={userData.phone} onChange={handleEditFormChange}/>
                                </div>

                                <div className="field">
                                    <label htmlFor="txtEmailEmployee">Email: </label>
                                    <input type="email" name="email" id="txtEmailEmployee" placeholder='Email funcionario' value={userData.email} onChange={handleEditFormChange}/>
                                </div>

                                <div className="field">
                                    <label htmlFor="txtUsernameEmployee">Username: </label>
                                    <input type="text" name="username" id="txtUsernameEmployee" placeholder='Username funcionario' value={userData.username} onChange={handleEditFormChange} disabled/>
                                </div>

                                <div className="field">
                                    <label htmlFor="txtPasswordEmployee">Senha: </label>
                                    <input type="password" name="password" id="txtPasswordEmployee" placeholder='Senha' value={userData.password} onChange={handleEditFormChange}/>
                                </div>

                                <div className="field">
                                    <label htmlFor="txtConfirmPasswordEmployee">Confirmar Senha: </label>
                                    <input type="password" name="confirmPassword" id="txtConfirmPasswordEmployee" placeholder='Confirmar senha' value={userData.confirmPassword} onChange={handleEditFormChange}/>
                                </div>

                                <div className="field">
                                    <label htmlFor="selectProfile">Tipo de Perfil: </label>
                                    <select name="profile" id="selectProfile" value={userData.profile} onChange={handleEditFormChange}>
                                    <option value={0}>Admin</option>
                                    <option value={1}>Funcionário</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modalEmployeeButtons">
                                <button id='save' onClick={() => (saveEdit())}>SALVAR</button>
                                <button onClick={() => (handleCloseModal())} id='cancel'>CANCELAR</button>
                        </div>
                    </div>
                </Modal>
            </div>
           
        </div>
    )
}