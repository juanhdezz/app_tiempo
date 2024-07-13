import './estilos/App.css';
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import WeatherPanel from "./components/WeatherPanel";
import Header from './components/Header';
import Footer from './components/Footer';
import Mapa from './components/Mapa'; // Importa el componente Mapa

function App() {
    const [coords, setCoords] = useState({ lat: null, lon: null });

    const handleCoordinates = (lat, lon) => {
        setCoords({ lat, lon });
    };

    return (
        <div className="App">
            <Header />
            <Navbar />
            <WeatherPanel onCoordinatesChange={handleCoordinates} />
            <section className="container-desc">
                <h2>¡Bienvenido a la página de pronóstico del tiempo!</h2>
                <p>En esta página podrás encontrar el pronóstico del tiempo de tu ciudad, solo debes buscarla en el buscador y listo.</p>
                <p>Además, podrás ver el pronóstico de las próximas horas, la temperatura actual y un mapa de la situación geográfica.</p>
                <p>¡Espero que disfrutes de la página!</p>
            </section>
            <section className="container-desc">
              {coords.lat && coords.lon && <Mapa lat={coords.lat} lon={coords.lon} />} {/* Pasa las coordenadas al componente Mapa */}
            </section>
            <section className="container-desc">
                <h2>Descripción del proyecto:</h2>
                <p>Este proyecto lo he desarrollado con React.js, un framework de JavaScript basado en componentes.</p>
                <p>He utilizado APIs externas como es el caso de Open Weather y de OpenStreetMap.</p>
                <p>Cualquier pregunta no dude en contactarme</p>
            </section>
            
            <Footer />
        </div>
    );
}

export default App;
