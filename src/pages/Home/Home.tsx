import './Home.css'
import { useTables, useRequests } from '../../hooks'
import { useEffect, useState } from 'react';

export const Home = () => {

    const { tables, getAll } = useTables();
    const { requests, getAllRequests } = useRequests();

    async function pollingRequests() {
      await getAll();
      await getAllRequests();
    }
  
    useEffect(() => {
      pollingRequests();
    }, [])

    return(
        <div className="Home">
            <div className="welcome-session">
                <span>Olá</span>, você esta usando um perfil de admin
            </div>
            <div className="request-session">
                <h2>Quantidade de Solicitações</h2>
                <span>{requests?.entity.length === 0 || requests?.entity === undefined ? <p>Carregando...</p> : requests?.entity.length }</span>
            </div>
            <div className="freeTables-session">
                <h2>Quantidade de Mesas Livres</h2>
                <span>{tables?.entity.length === 0 || tables?.entity === undefined ? <p>Carregando...</p> : tables?.entity.filter(available => available.isAvailable != false).length }</span>
            </div>
        </div>
    )
}