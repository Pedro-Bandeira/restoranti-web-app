import { useEffect } from 'react';
import './RequestsPage.css'
import { useRequests } from '../../hooks'
import { Request } from '../../components'


export const Solicitacoes = () => {
  const { requests, getAllRequests } = useRequests();


  let pollingTimeout: number | undefined;
  async function pollingRequests() {
    await getAllRequests();

    pollingTimeout = setTimeout(() => pollingRequests(), 10000);
  }

  useEffect(() => {
    pollingRequests();

    return () => {
      clearTimeout(pollingTimeout);
    }
  }, [getAllRequests])

  return (
    <div className="solicitacoes">
      <h1>Solicitações</h1>
      {requests?.entity.length === 0 || requests?.entity === undefined ? <p>Carregando...</p> : <Request items={requests?.entity} /> } 
    </div>
  )
}
