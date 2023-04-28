import './ErrorPage.css'

import error404 from '../../assets/error404.png'

export const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <img src={error404} alt="" />
            <h1>Ops! Ocorreu algum erro...</h1>
            <p>Pode ser que a pagina que você está procurando não exista ou esteja com problemas. Tente novamente...</p>
        </div>
    )
}