import Logo from '../../assets/react.svg'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faTable, faLayerGroup, faFile, faPowerOff, faTimes } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = ({sidebarOpen, sidebarClose}) => { 
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-img">
                    <img src={Logo} alt="logo" />
                    <h1>Restoranti</h1>
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
                <div className="sidebar-link active_menu_link">
                    <i><FontAwesomeIcon icon={faHome} /></i>
                    <a href="/">Home</a>
                </div>    
                <div className="sidebar-link">
                    <i><FontAwesomeIcon icon={faList} /></i>
                    <a href="/solicitacoes">Solicitacoes</a>
                </div>    
                <div className="sidebar-link">
                    <i><FontAwesomeIcon icon={faTable} /></i>
                    <a href="/mesas">Mesas</a>
                </div>    
                <h2>ADMIN</h2>
                <div className="sidebar-link">
                    <i><FontAwesomeIcon icon={faLayerGroup} /></i>
                    <a href="">Gerar Tags NFC / QR Code</a>
                </div>   
                <div className="sidebar-link">
                    <i><FontAwesomeIcon icon={faFile} /></i>
                    <a href="">Cadastros</a>
                </div>   
                <div className="sidebar-logout">
                    <i><FontAwesomeIcon icon={faPowerOff} /></i>
                    <a href="">LogOut</a>
                </div>   

            </div>

        </div>
    )
}