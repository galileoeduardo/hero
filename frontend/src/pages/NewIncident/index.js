import React, {useState} from 'react';
import imgLogo from  '../../assets/logo.png';
import { Link, useHistory } from "react-router-dom";
import api from '../../services/api';
import { FiArrowLeft } from "react-icons/fi";
import './style.css'

const NewIncident = () => {

    const history = useHistory();

    const [title,setTitle] = useState('');
    const [description,setDescrption] = useState('');
    const [value,setValue] = useState('');
    const ong_id = localStorage.getItem('ongId');

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {title,description,value};
        try {
            await api.post('incidents',data,{
                headers: {
                    "Authorization": ong_id
                }
            }).then(response => {
                alert("Caso cadastrado com sucesso!");
                history.push('/profile')
            });
        } catch (error) {
            alert("Não foi possível criar o caso");
        }
    }
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

                <form className="form" onSubmit={handleSubmit}>
                    <input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descrição" style={{height:120}} value={description} onChange={e => setDescrption(e.target.value)}></textarea>
                    <input placeholder="Valor em reais" value={value} onChange={ e => setValue(e.target.value)}/>
                    <div className="button-group">
                        <button className="button-cancelar" type="button" onClick={() => history.push('/profile')}>Cancelar</button>
                        <button className="button" type="submit" onSubmit={handleSubmit}>Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default NewIncident;