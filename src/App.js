import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'João',
        emai: 'joao@mail.com',
        data: new DataTransfer(2020, 3, 19),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Pedro',
        emai: 'pedro@mail.com',
        data: new DataTransfer(2020, 3, 22),
        mensagem: 'Olá, tudo bem sim....'
      },
    ]
  }

  render() {
    return (
      <div className="App">
       <h1>Meu projeto</h1>
        
        {this.state.comentarios.map((comentario, indice)  => (
           <Comentario 
           key={indice}
           nome={comentario.nome} 
           email= {comentario.email}
           data={comentario.data}>
           {comentario.mensagem}
            </Comentario>
        ))}  
      </div>
    );
  }
  
}

export default App;
