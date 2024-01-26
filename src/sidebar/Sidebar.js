import React from "react";
import './Sidebar.css';
import logo from '../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch, faBook, faPlus, faGlobe} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href='/app/'>
                        <img src={logo} alt="Logo Spotify"/>
                    </a>
                </div>
                <ul>
                    <li>
                        <a href='/app/'>
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href='/app/'>
                            <FontAwesomeIcon icon={faSearch} />
                            <span>Busca</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <FontAwesomeIcon className="fa" icon={faBook} />
                        <span>Sua biblioteca</span>
                    </button>
                    <div className="library__content__plus">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <section className="section-explore">
                    <div id="section-explore__playlist" className="section-explore__content">
                        <span className="text title">
                            Crie sua primeira playlist.
                        </span>
                        <span className="text subtitle">
                            É fácil, vamos te ajudar.
                        </span>
                        <button className="playlist-button section-explore__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                    <div id="section-explore__podcasts" className="section-explore__content">
                        <span className="text title">
                            Que tal seguir um podcast novo?
                        </span>
                        <span className="text subtitle">
                            Avisaremos você sobre novos episódios.
                        </span>
                        <button className="podcast-button section-explore__button">
                            <span>Explore podcasts</span>
                        </button>
                    </div>
                </section>

                <div className="legal">
                    <a href='/app/'>Legal</a>
                    <a href='/app/'>Centro de Privacidade</a>
                    <a href='/app/'>Politica de Privacidade</a>
                    <a href='/app/'>Cookies</a>
                    <a href='/app/'>Sobre anúncios</a>
                    <a href='/app/'>Acessibilidade</a>
                </div>

                <div className="lenguages">
                    <button className="lenguages__button">
                        <FontAwesomeIcon className="fa" icon={faGlobe}/>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;