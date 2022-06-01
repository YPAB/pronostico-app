import React from 'react'

export const PronosticoCiudad = ({ ciudad }) => {

  return (
    <div className='container p-3'>

      <div className='card text-bg-success'>
        <h1>5 Días - { ciudad.country } - { ciudad.name } </h1>
        <h5>Poblacion: {ciudad.population}</h5>
        <h5>Latitud: {ciudad.coord.lat}</h5>
        <h5>Longitud: {ciudad.coord.lon}</h5>  
      </div> 
    </div>
  )
}
