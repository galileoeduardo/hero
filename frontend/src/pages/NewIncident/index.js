import React from 'react';
import imgLogo from  '../../assets/logo.png';
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './style.css'

const NewIncident = () => {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section style={{marginRight:20 }}>
                    <img src={imgLogo}alt="Ne The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso  detalhadamente para encontrar um novo herói para resolver isso.</p>
                        <Link to="/profile" className="back-link">
                            <FiArrowLeft size="16" color="#e02041"/>
                            Profile
                        </Link>
                </section>

                <form className="form">
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição" style={{height:120}}></textarea>
                    <input placeholder="Valor em reais"/>

                    <button className="button-canclea" type="submit">Cancelar</button>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
};

export default NewIncident;