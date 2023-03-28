import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faClock, faBars } from '@fortawesome/free-solid-svg-icons'

export const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <i aria-hidden="true"><FontAwesomeIcon icon={faBars} /></i>
            </div>

            <div className="navbar-left">
                <a href="/">Home</a>
                <a href="/solicitacoes" className="active-link">Solicitações</a>
                <a href="/mesas">Mesas</a>
            </div>

            <div className="navbar-right">
                <a href="">
                    <i><FontAwesomeIcon icon={faSearch} /></i>
                </a>

                <a href="">
                    <i><FontAwesomeIcon icon={faClock} /></i>
                </a>

                <a href="">
                    <i><FontAwesomeIcon icon={faUser} /></i>
                </a>
            </div>

        </nav>
    )
}