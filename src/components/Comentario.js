import React,{useState} from "react";

const Comentario = ({tiempo_actual},{showdata}) => {
    if(!showdata){
        return <h2>Cargando...</h2>
    }
 else return (
    <h2>{tiempo_actual}</h2>
)

}

export default Comentario;