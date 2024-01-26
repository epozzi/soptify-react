import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Playlist from './playlist/Playlist'
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className='body-container'>
      <Sidebar/>
      <div className="main-container">
        <Header/>
        <Playlist/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
