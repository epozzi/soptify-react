import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="text title">Testar o Premium de graça</p>
                <p className="text paragraph">
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
                </p>
            </div>
            <button className="footer__button">
                <span>Inscreva-se grátis</span>
            </button>
        </footer>
    )
};

export default Footer;