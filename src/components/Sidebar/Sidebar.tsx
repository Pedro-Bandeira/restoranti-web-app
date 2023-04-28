import Logo from '../../assets/logo.png'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faTable, faLayerGroup, faFile, faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../hooks/useAuth';

type SideBarProps = {
    sidebarOpen: boolean;
    sidebarClose: Function;
};

export const Sidebar:React.FC<SideBarProps> = ({sidebarOpen, sidebarClose}) => { 

    const {logout} = useAuth()

    // Variaveis para resgatar a rota ativa na aplicação
    const basePath = window.location.origin;
    const completePath = window.location.href;
    const path = window.location.href.substring(basePath.length, completePath.length)

    async function handleLogout() {
        logout();
    }

    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-img">
                    <img src={Logo} alt="logo" />
                    <a href="/"><h1>Restoranti</h1></a>
                </div>

                <i 
                onClick={() => sidebarClose()}
                id='sidebarIcon'
                aria-hidden='true'
                >
                    <FontAwesomeIcon icon={faTimes} />
                </i>
            </div>

            <div className="sidebar-menu">
                <div className={path === "/" ? "sidebar-link active_menu_link" : "sidebar-link"}>
                    <i><FontAwesomeIcon icon={faHome} /></i>
                    <a href="/">Home</a>
                </div>    
                <div className={path === "/solicitacoes" ? "sidebar-link active_menu_link" : "sidebar-link"}>
                    <i><FontAwesomeIcon icon={faList} /></i>
                    <a href="/solicitacoes">Solicitações</a>
                </div>    
                <div className={path === "/mesas" ? "sidebar-link active_menu_link" : "sidebar-link"}>
                    <i><FontAwesomeIcon icon={faTable} /></i>
                    <a href="/mesas">Mesas</a>
                </div>    
                <h2>ADMIN</h2>
                <div className={path === "/gerar-tag-qrcode" ? "sidebar-link active_menu_link" : "sidebar-link"}>
                    <i><FontAwesomeIcon icon={faLayerGroup} /></i>
                    <a href="gerar-tag-qrcode">Gerar Tags NFC / QR Code</a>
                </div>   
                <div className={path === "/cadastros" ? "sidebar-link active_menu_link" : "sidebar-link"}>
                    <i><FontAwesomeIcon icon={faFile} /></i>
                    <a href="/cadastros">Cadastros</a>
                </div>   
                <div className="sidebar-logout">
                    <i><FontAwesomeIcon icon={faPowerOff} /></i>
                    <a onClick={() => (handleLogout())} href='/login'>LogOut</a>
                </div>   

            </div>

        </div>
    )
}