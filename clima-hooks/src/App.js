import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // State Principal
  const [ ciudad, setCiudad ] = useState('');
  const [ pais, setPais ] = useState('');

  const datosConsulta = datos => {
    console.log(datos)
  }


  return (
    <div className="App">
      <Header
        titulo="Clima App"
      />

      <div className="contenedor-form">
        <div className="row">
          <div className="col s12 m6">
            <Formulario
              datosConsulta={datosConsulta}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
