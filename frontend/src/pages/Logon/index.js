import React from 'react';
import {Link} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './style.css';
import imgLogo from  '../../assets/logo.png';
import imgHeroes from  '../../assets/heroes.png';

const Logon = () => {
    return (
        <div className="logon-container">
            
            <section className="form">
                <img src={imgLogo} alt="logo"/>

                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" />
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