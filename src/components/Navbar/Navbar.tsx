import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks';

type NavBarProps = {
    sidebarOpen: boolean;
    openSidebar: Function;
    sidebarClose: Function;
};

export const Navbar: React.FC<NavBarProps> = ({ sidebarOpen, openSidebar, sidebarClose }) => {

    // Variaveis para resgatar a rota ativa na aplicação
    const basePath = window.location.origin;
    const completePath = window.location.href;
    const path = window.location.href.substring(basePath.length, completePath.length)

    const { getUserSigned, logout } = useAuth();

    const [userInfoState, setUserInfoState] = useState(false)
    const [userInfoName, setUserInfoName] = useState('')
    const [userInfoUserName, setUserInfoUserName] = useState('')

    function userInfoClose() {
        if(userInfoState){
            setUserInfoState(false)
        }
        else{
            setUserInfoState(true)
        }
        sidebarClose()
    }

    async function getUser() {
        const userSigned = await getUserSigned();
        if(userSigned){
            setUserInfoName(userSigned.name);
            setUserInfoUserName(userSigned.username);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    async function handleLogout() {
        logout();
    }

    return (
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <i aria-hidden="true"><FontAwesomeIcon icon={faBars} /></i>
            </div>

            <div className="navbar-left">
                <a href="/" className={path === "/" ? "active-link" : ""}>Home</a>
                <a href="/solicitacoes" className={path === "/solicitacoes" ? "active-link" : ""}>Solicitações</a>
                <a href="/mesas" className={path === "/mesas" ? "active-link" : ""}>Mesas</a>
            </div>

            {localStorage.getItem('i') == undefined || localStorage.getItem('i') == null ? null : 
                <div className="navbar-right">
                    <a href="#">
                        <i
                            onClick={() => userInfoClose()}
                            id='sidebarIcon'
                            aria-hidden='true'
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                    </a>
                </div>
            } 

            {!userInfoState ? "" : 
                <div className="userInfo">
                    <div className="userData">
                        <h3>Usuario: {userInfoName}</h3>
                        <span>@{userInfoUserName}</span>
                    </div>
                    <div className="sidebar-logout">
                        <i><FontAwesomeIcon icon={faPowerOff} /></i>
                        <a onClick={() => (handleLogout())} href='/login'>LogOut</a>
                    </div>
                </div>
            }

        </nav>
    )
}