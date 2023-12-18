import React, { useEffect } from 'react'
import './Detalle.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const DetalleTarjeta = () => {

  const [detalle, setDetalle] = useState([]);
  const {id}=useParams();
  const ts=2;
  const key="61d7c814c8289dd0d39cb687e4bbf6a7"
  const hash="e95a32dda41f42638ce808d1c3792186"
  const categoria="comics"
  const url= `http://gateway.marvel.com/v1/public/${categoria}/${id}?ts=${ts}&apikey=${key}&hash=${hash}`

  useEffect (() => {
const solicitud=async()=>{
 try {
   const respuesta =await axios.get(url);
   setDetalle(respuesta.data.data.results[0]);
   console.log(respuesta.data.data.results[0]);
 } catch (error) {
  console.error("hubo un error: ", error)
 }
}
solicitud();
  },[])

  return (
    <main className='contenedordetalle'>
      <div className='contenedorimg'>
        <img src={`${detalle.thumbnail.path}/portrait_uncanny.${detalle.thumbnail.extension}`} alt="" className='img'/>

      </div>
      <div className='contenedortitulo'>
        <h4>{detalle.title}</h4>
        <p> Nick Fury, director de la agencia de espionaje S.H.I.E.L.D., recluta a Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff y Clint Barton para formar un equipo que debe evitar que Loki, hermano de Thor, se apodere de la Tierra. </p>
      </div>
    </main>
  )
}

export default DetalleTarjeta
