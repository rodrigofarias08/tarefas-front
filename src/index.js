import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from './components/Primeiro'
import Saudacao from './components/Saudacao'
import Contador from './components/Contador'

// const tela = (
//     <div>
//     <Primeiro nome ='Senai'/>
//         <Saudacao tipo='Boa noite' nome='José'/>
//     </div>
// )

const tela = (
        <div>
        <Contador valor ={10}/>
        </div>
    )

ReactDOM.render(tela, document.getElementById('root'));