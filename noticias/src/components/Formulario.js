import React, { Component } from 'react'

class Formulario extends Component {
    state = { 
        categoria: 'general'
     }

     handleChange = e => {
         this.setState({
             categoria : e.target.value
         },() => {
            //  Pasarlo a la pagina Principal
            this.props.consultarNoticias(this.state.categoria)
         })
        
     } 
    render() { 
        return ( 
           <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <h2>Encuentra Noticias por Categoria</h2>
                        <div className="input-field col s12 m8">
                            <select
                                onChange={this.handleChange}>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologias</option>
                            </select>
                        </div>
                    </form>
                </div>
           </div> 
         );
    }
}
 
export default Formulario;