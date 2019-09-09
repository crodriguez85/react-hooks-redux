import React, {useState} from 'react'

const Buscador = () => {

    const [ terminoBusqueda, setTerminoBusqueda ] = useState('');

    const handleSubmit= e => {
        e.preventDefault();

        // Validar

        // Enviar Termino a Componente Principal

    }


    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una Imagen: Ej: Futbol, Cafe"
                        onChange={e => setTerminoBusqueda(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Buscador;