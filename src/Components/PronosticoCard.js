import React from 'react'
import { PronosticoCiudadCard } from './PronosticoCiudadCard'

export const PronosticoCard = ({clima}) => {

  const fechaActual = new Date();

  const dailyData = clima.filter(reading => reading.dt_txt.includes("18:00:00"));

  return (
    <div className='container'>

      <div className='row justify-content-center'> 
      {
                dailyData.map(({ dt,main,weather,wind,visibility,dt_txt }) => (
              
                  
                    <PronosticoCiudadCard key={dt} 
                        id={dt} 
                        main = {main} 
                        weather={weather} 
                        wind={ wind } 
                        visibility={ visibility } 
                        fecha= { dt_txt } />
                    
              ))
            }

      </div>

            
         
    </div>
  )
}
