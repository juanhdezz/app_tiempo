import './estilos/App.css';
import Navbar from "./components/Navbar"
import WeatherPanel from "./components/WeatherPanel"
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Menu/> */}
      <Navbar/>
      <WeatherPanel/>
      <Footer/>
    </div>
  );
}

export default App;
