import React from 'react';
import './CSS/Instrucciones.css';
import ListCategory  from '../Components/Tools/ListCategory.js'
import { refGeneralCategory } from './Tools/DataBase.js'


class Instrucciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  componentDidMount() {
    refGeneralCategory.on("value", (snapshot) => {
      let category = snapshot.val();
      this.setState({category : category})
    });
  }

  render() {
    return (
      <div className="DivInstrucciones">

          <header style={{backgroundColor:"black", color:"white", padding:"10px"}}>
            <h3>
              Instrucciones
            </h3>
          </header>

          <div className="ListInstruccion">
            <p>Estamos estudiando cómo se usaron las plataformas tecnológicas  después  del terremoto que sucedió en México el 19 de Septiembre de 2017.</p>
            <p>Te daremos una hoja de cálculo donde está una lista de descripciones que nos dieron varias personas en una encuesta donde nos platican sobre su experiencia sobre el temblor y el uso de la tecnología.</p>
            <p>Cada renglón representa un comentario de una persona.</p>      
            <p>Objetivo: categoriza cada comentario con alguna de las siguientes categorías.</p>
          </div>
          
          <div style={{marginLeft:"30px"}}>
            <ListCategory/>
          </div>

          <div style={{marginBottom:"30px"}} className="goButton">
            {this.props.button}
          </div>
      </div>
    );
  }
}

export default Instrucciones;