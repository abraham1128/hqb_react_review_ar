import React from 'react';
import './App.css';
import Formulario from './containers/Formulario';


interface AppProps {
  name: string ;
  isLogin?: boolean;
}


function App(props: AppProps) {
  return (
    <div classNameName="App">
      <Formulario></Formulario>
    </div>
  );
}

export default App;