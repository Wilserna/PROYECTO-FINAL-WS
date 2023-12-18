// import React from 'react'
import { useEffect, useState } from 'react';
import Tarjetas from '../Tarjetas/Tarjetas'
import './contenedortarjeta.css'
import axios from 'axios';

const ContenedorTarjeta = () => {
  const [datos, setDatos] = useState([]);
  const ts=2;
  const key="61d7c814c8289dd0d39cb687e4bbf6a7"
  const hash="e95a32dda41f42638ce808d1c3792186"
  const categoria="comics"
  const url= `http://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`

  useEffect (() => {
    const solicitud = async()=>{
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
        console.log(datos);
      } catch (error) {
        console.log("hubo un error: ", error);
      }
      
    }
    solicitud();
  },[])

  return (
    <>
      <main className='contenedor'>
        {/* <Tarjetas
          ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/d/d0/657228f432870/detail.jpg"
          titulo="Ficha"
          descripcion="Soy la descripcion del comic" />
        <Tarjetas
          ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/d/d0/657228f432870/detail.jpg"
          titulo="Ficha"
          descripcion="Soy la descripcion del comic" />
        <Tarjetas
          ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/d/d0/657228f432870/detail.jpg"
          titulo="Ficha"
          descripcion="Soy la descripcion del comic" /> */}

          {datos.map((item)=>(
            <Tarjetas
            key={item.id}
            ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
            titulo={item.title}
            />
          ))}

      </main>
    </>
  )
}

export default ContenedorTarjeta
