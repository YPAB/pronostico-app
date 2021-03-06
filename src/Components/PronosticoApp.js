import logo from '../../public/assets/weathernews.png';
import './css/pronosticoIndex.css';
import { PronosticoBody } from './PronosticoBody';
import { PronosticoForm } from './PronosticoForm';

export const PronosticoApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>
          Pronóstico App
        </h1>

        <PronosticoForm/>
        <PronosticoBody/>
      </header>
    </div>
  )
}
