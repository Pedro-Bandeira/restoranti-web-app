import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return(
        <div className="Footer">
            <h3>
                Desenvolvido por <i><FontAwesomeIcon icon={faCopyright} /></i> <span>RESTORANTI {new Date().getFullYear()}</span> 
            </h3>
        </div>
    )
}