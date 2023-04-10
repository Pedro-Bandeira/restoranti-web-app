import { TablesList } from '../../components'
import { useTables } from '../../hooks'
import { useEffect } from 'react';
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
            <h1>Gerenciar Mesas</h1>
            {tables?.entity.length === 0 || tables?.entity === undefined ? <p>Carregando...</p> : <TablesList items={tables?.entity} /> } 
        </div>
    )
}