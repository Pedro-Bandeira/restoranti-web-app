import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'

type NavBarProps = {
    sidebarOpen: boolean;
    openSidebar: Function;
};

export const Navbar: React.FC<NavBarProps> = ({ sidebarOpen, openSidebar }) => {

    // Variaveis para resgatar a rota ativa na aplicação
    const basePath = window.location.origin;
    const completePath = window.location.href;
    const path = window.location.href.substring(basePath.length, completePath.length)

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

            <div className="navbar-right">
                <a href="">
                    <i><FontAwesomeIcon icon={faUser} /></i>
                </a>
            </div>

        </nav>
    )
}