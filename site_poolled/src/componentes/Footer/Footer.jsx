import React from 'react';
import Botao from '../../Atomos/botaoAcao/Botao'

import './Footer.css'

const Footer = () => {
    return (
        <footer className='rodape'>
            <div className='rodape-contato'>
                <div className='fundo-escuro'>
                <h2>obtenha um orçamento gratuito</h2>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                <Botao texto='contate-nos' className='btn-contatenos'/>
                </div>
            </div>

            <div className='rodape-direitos' >
                <p>direitos autorais © 2023 | Reservado a Pool Led </p>
            </div>
        </footer>
    )
}

export default Footer;