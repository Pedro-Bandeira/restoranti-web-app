import { TablesList } from '../../components'
import { useMesas } from '../../hooks'
import { useEffect } from 'react';
import './FreeTables.css'

export const FreeTables = () => {
    const { mesas, getAll } = useMesas();

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
            <TablesList items={mesas} />
        </div>
    )
}