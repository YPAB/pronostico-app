import React from 'react';
import { useSelector } from "react-redux";
import { PronosticoCard } from './PronosticoCard';
import { PronosticoCiudad } from './PronosticoCiudad';

export const PronosticoBody = () => {

  const {list,city} = useSelector((state) => state.weathers);



  return (
    <div className="row">

      {
        city !== undefined ?  (
          <PronosticoCiudad ciudad={city}/>

        ) : <p></p>
      }


{
        list !== undefined ?  (
          <PronosticoCard clima={list}/>

        ) : <p></p>
      }
  
      


      {/* <PronosticoCard clima={ list }/> */}


        
      
      {/* <pre>{JSON.stringify(city, null, 2)}</pre> */}
      
    </div>
  )
}
