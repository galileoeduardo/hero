import React , {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './style.css';
import imgLogo from  '../../assets/logo.png';
import imgHeroes from  '../../assets/heroes.png';

const Logon = () => {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        
        e.preventDefault();
        
        try {
            const response = await api.post('sessions',{id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            history.push('/profile');
        } catch (error) {
            alert("Falha no login");
            history.push('/');
        }

    }

    return (
        <div className="logon-container">
            
            <section className="form">
                <img src={imgLogo} alt="logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id}  onChange={e => setId(e.target.value)}/>
                    <button type="submit" className="button">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size="16" color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>


            </section>
            <img src={imgHeroes} alt="Hero"/>
        </div>
    );
};

export default Logon;