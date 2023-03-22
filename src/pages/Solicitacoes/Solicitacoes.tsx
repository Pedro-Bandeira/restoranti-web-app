import { useEffect } from 'react';
import './Solicitacoes.css'
import { useSolicitacoes } from '../../hooks'
import { Request } from '../../components'


export const Solicitacoes = () => {
  const { requests, getAll } = useSolicitacoes();


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

  return (
    <div className="App">
      <h1>Solicitações</h1>
      <Request items={requests}/>
    </div>
  )
}
