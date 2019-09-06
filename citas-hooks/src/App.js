import React, { useState, Fragment } from 'react';

// Components
import Formulario from './components/Formulario';

function App() {
  // UseState
  const [ citas, setCita ] = useState([]);

  // Agregar Nu evas Citas al state
  const crearCita = cita => {
    // Copiar state y agregar nuevo cliente
    const nuevasCitas = [...citas, cita];
    setCita(nuevasCitas);
  }

  return(
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            {citas.map((cita, index) => (
              <Cita
                key={index}
                index={index}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>

  )

}

export default App;
