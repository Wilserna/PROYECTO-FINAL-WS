import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <main className="contenedorlogin">
      <div className='contenedorformulario'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">usuario</span>
          <input type="text" className="form-control" placeholder="Ingrese su usuario" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">contraseña</span>
          <input type="text" className="form-control" placeholder="Ingrese su contraseña" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <button type="button" className="btn btn-primary">Ingresar</button>
      </div>
    </main>
  )
}

export default Login
