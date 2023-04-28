import { useState } from 'react';
import { useUsers } from '../../../hooks';
import './Employees.css'
import { useNavigate } from "react-router-dom";
import { IUsers } from '../../../interfaces';


import Waiter from '../../../assets/waiter.png'

export const Employees = () => {

  const navigate = useNavigate();
  
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
  const { createUser } = useUsers();
  

  function handleCancel() {
    navigate("/cadastros")
  }

  function handleFormData (event: any) {
    const value = event.target.value;
    setUserData({
      ...userData,
      [event.target.name]: value
    });
  }

  function handleJson() {
    const date = Date.now()
    const data: IUsers = {
      employeeId: userData.employeeId,
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      profile: Number(userData.profile),
      username: userData.username,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      creationDate: new Date(date).toISOString(),
      modifiedDate: new Date(date).toISOString(),
    }
    handleCreateUser(data)
  }

  async function handleCreateUser(userData: IUsers) {
    try {
      console.log(userData)
      await createUser(userData);
      alert("Usuario criado com sucesso!");
      handleCancel();
    }
    catch(event){
      console.log(event)
      alert("Ocorreu um erro ao criar o usuario, tente novamente!")
    }
  }

  return (
    <div className="employees">
      <h2>Cadastro de Funcionários</h2>

      <div className="employees-content">
        <div className="fields">
          <div className="field">
            <label htmlFor="txtNameEmployee">Nome: </label>
            <input type="text" name="name" id="txtNameEmployee" placeholder='Nome funcionario' onChange={handleFormData}/>
          </div>

          <div className="field">
            <label htmlFor="txtPhoneEmployee">Telefone: </label>
            <input type="phone" name="phone" id="txtPhoneEmployee" placeholder='Telefone funcionario' onChange={handleFormData}/>
          </div>

          <div className="field">
            <label htmlFor="txtEmailEmployee">Email: </label>
            <input type="email" name="email" id="txtEmailEmployee" placeholder='Email funcionario' onChange={handleFormData}/>
          </div>

          <div className="field">
            <label htmlFor="txtUsernameEmployee">Username: </label>
            <input type="text" name="username" id="txtUsernameEmployee" placeholder='Username funcionario' onChange={handleFormData}/>
          </div>

          <div className="field">
            <label htmlFor="txtPasswordEmployee">Senha: </label>
            <input type="password" name="password" id="txtPasswordEmployee" placeholder='Senha' onChange={handleFormData}/>
          </div>

          <div className="field">
            <label htmlFor="txtConfirmPasswordEmployee">Confirmar Senha: </label>
            <input type="password" name="confirmPassword" id="txtConfirmPasswordEmployee" placeholder='Confirmar senha' onChange={handleFormData}/>
          </div>

          <div className="field">
            <label htmlFor="selectProfile">Tipo de Perfil: </label>
            <select name="profile" id="selectProfile" onChange={handleFormData}>
              <option value={0}>Admin</option>
              <option value={1}>Funcionário</option>
            </select>
          </div>

          <div className="buttons-employee">
            <button onClick={handleJson} id='save'>SALVAR</button>
            <button onClick={handleCancel} id='cancel'>CANCELAR</button>
          </div>
        </div>
        <div className="image-right">
          <img src={Waiter} alt="" />
        </div>
      </div>
    </div>
  )
}