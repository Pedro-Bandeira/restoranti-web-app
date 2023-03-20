import { useEffect } from 'react';
import './App.css'
import { useSolicitacoes } from './hooks'
import { Request, Header } from './components'


function App() {
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
      <Header/>
      <h1>Solicitações</h1>
      <Request items={requests}/>
    </div>
  )
}

export default App
