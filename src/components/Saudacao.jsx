import React, {Component} from 'react';

export default class Saudacao extends Component {
    // state = {
    //     tipo: this.props.tipo,
    //     nome: this.props.nome
    // }

    state = {
        ...this.props,
        meuAtributo : 10
    }

    setNome(evento){
        //console.log(evento.target.value)
        this.setState({nome : evento.target.value})
    }
    render(){
        const { tipo, nome} = this.props
        return (
            <div>
                
                <h1>
                    {this.state.tipo} {this.state.nome}!
                </h1>
                <hr />
                <input type="text" value={this.state.nome} onChange={e => this.setNome(e)}/>
                
            </div>
        )
    }
}