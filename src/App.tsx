import React from 'react';
import { useState } from 'react';
import './App.css';
import { renderToString } from 'react-dom/server'

import Suma from './components/Suma';
import Resta from './components/Resta';

function App() {


  const [primerNumero, setPrimerNumero] = useState<number | undefined>(undefined);
  const [segundoNumero, setSegundoNumero] = useState<number | undefined>(undefined);
  const [esSuma, setEsSuma] = useState(false);

  const handlerChangePrimer = (event: any) => {
    const value = event.target.value;
    setPrimerNumero(value)
  }

  const handlerChangeSegundo = (event: any) => {
    const value = event.target.value;
    setSegundoNumero(value)
  }


  const handlerChangeEsSuma = (event: any) => {
    const value = event.target.value;
    setEsSuma(value)
}

  const handlerUserFormSubmit = (event: any) => {
    event.preventDefault()
    console.log(event.target.value);

    if (esSuma) {

      alert("El resultado es: " + renderToString(<Suma primer={primerNumero} segundo={segundoNumero} />));
    } else {

      alert("El resultado es: " + renderToString(<Resta primer={primerNumero} segundo={segundoNumero}/>);
    }
  }
}

return (
  <div className="App">
    <form onSubmit={handlerUserFormSubmit}>
      Primer Número:
      <input
        type="text"
        id="primer"
        value={primerNumero}
        onChange={handlerChangePrimer}
      />
      Segundo Número:
      <input
        type="text"
        id="segundo"
        value={segundoNumero}
        onChange={handlerChangeSegundo}
      />
      Suma?
      <input
        type="checkbox"
        id="esSuma"
        checked={esSuma}
        onChange={handlerChangeEsSuma}
      />
      <button className="btn btn-secondary">Procesar</button>
    </form>
  </div>
)


export default App;