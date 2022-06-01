import React, { useState } from 'react'
import PropTypes from "prop-types";
import './css/pronosticoForm.css';
import { useDispatch } from "react-redux";
import { getWeathersAsync } from '../store';
import { ciudades } from '../data/ciudades';
import Select from 'react-select'

const cantidadDias = [
  {value:'8', label:'Un Día'},
  {value:'16', label:'Dos Días'},
  {value:'24', label:'Tres Días'},
  {value:'32', label:'Cuatro Días'},
  {value:'40', label:'Cinco Días'},

];

export const PronosticoForm = () => {
  const [ciudad,setCiudad] = useState([]);
  const dispatch = useDispatch();


  function handleGetWeathersClick(ciudad){
    dispatch(getWeathersAsync(ciudad));
    console.log(ciudad)
  }

  return (
    <div className="card p-3">

    <Select className="mb-3 text-bg-light" placeholder="Seleccionar Ciudad" isSearchable={ true } value={ciudad} onChange={setCiudad} options={ciudades} />
      
    <button className="PronositcoFormButton" onClick= { () => handleGetWeathersClick(ciudad.value)}>
      <h4 className='PronosticoFormButtonH4'>Obtener Clima</h4>
    </button>


    </div>
  )
}


