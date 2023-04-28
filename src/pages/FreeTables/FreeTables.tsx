import { TablesList } from '../../components'
import { useTables } from '../../hooks'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import './FreeTables.css'

export const FreeTables = () => {
    const { tables, getAll } = useTables();

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
        <div className="freeTables">
          <div className="pageTitle">
            <h1>Gerenciar Mesas</h1>
            <button onClick={() => (pollingRequests())}><i><FontAwesomeIcon icon={faRefresh} /></i></button>
          </div>
          {tables?.entity.length === 0 || tables?.entity === undefined ? <p>Carregando...</p> : <TablesList items={tables?.entity} /> } 
        </div>
    )
}