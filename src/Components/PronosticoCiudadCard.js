import React from 'react'
import Moment from 'react-moment';

export const PronosticoCiudadCard = ({id, main, weather, wind,visibility,fecha}) => {
  return (
    
    <div className="col-sm-2">
      <div className="card text-bg-light border-dark">
      <Moment className="card-title" format="YYYY/MM/DD">
          { fecha }
      </Moment>
      <h4>Min: {Math.round(main.temp_min - 273.15)} °F</h4>
      <h4>Max: {Math.round(main.temp_max - 273.15)} °F</h4>
      <h4>Humedad: {Math.round(main.humidity)}%</h4>
      
        
        <div className="card-body">
          <p className="card-text">{weather[0].description}</p>
        </div>
      </div>
    </div>



      
        

  )
}
