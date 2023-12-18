import React from 'react'
import "./Tarjetas.css"

const Tarjetas = ({ruta, titulo, descripcion, id}) => {
  return (
    <>

      <div className="card" style={{ width: '18rem' }}>
        <img src={ruta} className="card-img-top" alt="..." title='Card Title' />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
          <a href="#" className="btn btn-primary" to={`/tarjetas/${id}`}>Mas Información</a>
        </div>
      </div>

    </>
  )
}

export default Tarjetas
