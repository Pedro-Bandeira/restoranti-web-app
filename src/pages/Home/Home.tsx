import './Home.css'
import { useMesas } from '../../hooks'
import { useEffect } from 'react';

export const Home = () => {

    const { getAll, freeTablesQuantity } = useMesas();

    let pollingTimeout: number | undefined;
    async function pollingRequests() {
      await getAll();
  
      pollingTimeout = setTimeout(() => pollingRequests(), 10000);
    }
  
    useEffect(() => {
      pollingRequests();
  
      return () => {
        clearTimeout(pollingTimeout);
      }
    }, [getAll])

    return(
        <div className="Home">
            <div className="welcome-session">
                <span>Olá</span>, você esta usando um perfil de admin
            </div>
            <div className="request-session">
                <h2>Quantidade de Solicitações</h2>
                <span>6</span>
            </div>
            <div className="freeTables-session">
                <h2>Quantidade de Mesas Livres</h2>
                <span>{freeTablesQuantity}</span>
            </div>
        </div>
    )
}