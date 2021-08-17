import React from 'react';
import { useState } from 'react';
import './App.css';
import { renderToString } from 'react-dom/server'

import Suma from './components/Suma';
import Resta from './components/Resta';

function App() {


  const [primerNumero, setPrimerNumero] = useState<number>();
  const [segundoNumero, setSegundoNumero] = useState<number>();
  const [esSuma, setEsSuma] = useState(false);

  const handlerChangeName = (event: any) => {
    const value = event.target.value;
    setPrimerNumero(value)
  }

  const handlerChangeAge = (event: any) => {
    const value = event.target.value;
    setSegundoNumero(value)
  }


  const handlerChangeEsSuma = (event: any) => {
    //const value = event.target.value === 'checkbox' ? event.target.checked : event.target.value;
    const value = event.target.value;
    setEsSuma(value)
}

  const handlerUserFormSubmit = (event: any) => {
    event.preventDefault()
    console.log(event.target.value);

    if (esSuma) {

      alert("El resultado es: " + renderToString(<Suma primer={primerNumero} segundo={segundoNumero} />));
    } else {

      alert("El resultado es: " + renderToString(<Resta primer={primerNumero} segundo={segundoNumero} />);
    }
  }
}

return (
  <div className="App">
    <form onSubmit={handlerUserFormSubmit}>
      Primer Número:
      <input
        type="text"
        id="name"
        value={primerNumero}
        onChange={handlerChangeName}
      />
      Segundo Número:
      <input
        type="text"
        id="age"
        value={segundoNumero}
        onChange={handlerChangeAge}
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