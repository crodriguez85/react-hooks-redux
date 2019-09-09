import React, { useState } from 'react'

const Formulario = (props) => {

    // State
    const [ nombreGasto, setNombreGasto ] = ('');
    const [ cantidadGasto, setCantidadGasto ] = (0);
    const [ error, setError ] = useState(false);

    return ( 
        <form>
            <h2>Agrega Tus Gastos Aqui</h2>
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    className="u-full-width"
                    type="text"
                    placeholder="Ej Transporte"
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    className="u-full-width"
                    type="number"
                    placeholder="Ej 300"
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;