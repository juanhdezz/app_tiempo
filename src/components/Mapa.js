import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importar los estilos de Leaflet

const Mapa = ({ lat, lon }) => {
    const mapRef = useRef(null); // Referencia para el mapa Leaflet

    useEffect(() => {
        if (!lat || !lon) return;

        if (!mapRef.current) {
            // Crear el mapa si la referencia actual no existe
            mapRef.current = L.map('mi_mapa').setView([lat, lon], 16);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);

            L.marker([lat, lon]).addTo(mapRef.current).bindPopup("Ubicación seleccionada");
        } else {
            // Actualizar la vista del mapa si la referencia ya existe
            mapRef.current.setView([lat, lon], 16);
            const marker = L.marker([lat, lon]).addTo(mapRef.current);
            marker.setLatLng([lat, lon]).bindPopup("Ubicación seleccionada");
        }

        return () => {
            // Limpiar el mapa al desmontar el componente
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [lat, lon]);

    // Estilo para el contenedor del mapa
    const getMapStyle = () => ({
        width: '80%',  // 80% del ancho del contenedor padre
        height: '300px',  // Altura fija de 300px
        margin: '20px auto', // Margen superior e inferior de 20px, centrado horizontalmente
        clear: 'both', // Limpiar flotados para evitar problemas de alineación
        position: 'relative', // Posición relativa para ajustar el z-index si es necesario
        zIndex: 1, // Ajustar si es necesario para que esté encima de otras secciones
    });

    return (
        <div style={{ clear: 'both' }}>
            <div id="mi_mapa" style={getMapStyle()}></div>
        </div>
    );
};

export default Mapa;
