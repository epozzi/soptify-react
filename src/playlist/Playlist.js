import React from "react";
import './Playlist.css';
import playlist1 from '../assets/playlist/1.jpeg';
import playlist2 from '../assets/playlist/2.png';
import playlist3 from '../assets/playlist/3.jpeg';
import playlist4 from '../assets/playlist/4.jpeg';
import playlist5 from '../assets/playlist/5.jpeg';
import playlist6 from '../assets/playlist/6.jpeg';
import playlist7 from '../assets/playlist/7.jpeg';
import playlist8 from '../assets/playlist/8.jpeg';
import playlist9 from '../assets/playlist/9.jpeg';
import playlist10 from '../assets/playlist/10.jpeg';
import playlist11 from '../assets/playlist/11.jpeg';
import playlist12 from '../assets/playlist/12.jpeg';
import playlist13 from '../assets/playlist/13.jpeg';
import playlist14 from '../assets/playlist/14.jpeg';
import playlist15 from '../assets/playlist/15.jpeg';

const Playlist = () => {
    return (
        <div className="playlist-container">
            <div id="result-playlist">
                <div className="playlist">
                    <h1 id="greeting">Boa tarde</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>

                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {/* CARD 1 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card1">
                                <img src={playlist1} alt="" />
                                <span>Boas festas</span>
                            </div>
                            </a>

                            {/* CARD 2 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card2">
                                <img src={playlist2} alt="" />
                                <span>Feitos para você</span>
                            </div>
                            </a>

                            {/* CARD 3 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card3">
                                <img src={playlist3} alt="" />
                                <span>Lançamentos</span>
                            </div>
                            </a>

                            {/* CARD 4 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card4">
                                <img src={playlist4} alt="" />
                                <span>Creators</span>
                            </div>
                            </a>

                            {/* CARD 5 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card5">
                                <img src={playlist5} alt="" />
                                <span>Para treinar</span>
                            </div>
                            </a>

                            {/* CARD 6 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card6">
                                <img src={playlist6} alt="" />
                                <span>Podcasts</span>
                            </div>
                            </a>

                            {/* CARD 7 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card7">
                                <img src={playlist7} alt="" />
                                <span>Sertanejo</span>
                            </div>
                            </a>

                            {/* CARD 8 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card8">
                                <img src={playlist8} alt="" />
                                <span>Samba e pagode</span>
                            </div>
                            </a>

                            {/* CARD 9 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card9">
                                <img src={playlist9} alt="" />
                                <span>Funk</span>
                            </div>
                            </a>

                            {/* CARD 10 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card10">
                                <img src={playlist10} alt="" />
                                <span>MPB</span>
                            </div>
                            </a>

                            {/* CARD 11 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card11">
                                <img src={playlist11} alt="" />
                                <span>Rock</span>
                            </div>
                            </a>

                            {/* CARD 12 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card12">
                                <img src={playlist12} alt="" />
                                <span>Hip Hop</span>
                            </div>
                            </a>

                            {/* CARD 13 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card13">
                                <img src={playlist13} alt="" />
                                <span>Indie</span>
                            </div>
                            </a>

                            {/* CARD 14 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card14">
                                <img src={playlist14} alt="" />
                                <span>Relax</span>
                            </div>
                            </a>

                            {/* CARD 15 */}
                            <a href="/playlist/" className="cards">
                            <div className="cards card15">
                                <img src={playlist15} alt="" />
                                <span>Música Latina</span>
                            </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Playlist;