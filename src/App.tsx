import React from 'react';
import { useState } from 'react';
import './App.css';

import Suma from './components/Suma';
import Resta from './components/Resta';

function App() {


  const [primerNumero, setPrimerNumero] = useState<number>();
  const [segundoNumero, setSegundoNumero] = useState<number>();

  const handlerChangeName = (event: any) => {
    const value = event.target.value;
    setPrimerNumero(value)
  }

  const handlerChangeAge = (event: any) => {
    const value = event.target.value;
    setSegundoNumero(value)
  }

  const handlerUserFormSubmit = (event: any) => {
    event.preventDefault()

    console.log(event.target.value);

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
          <button className="btn btn-primary">Suma</button>
          <button className="btn btn-secondary">Resta</button>
        </form>
      </div>
    );
  }

  export default App;