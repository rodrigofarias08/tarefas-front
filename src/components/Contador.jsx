import React, {Component} from 'react';

export default class Contador extends Component {
    
    state = {
        ...this.props
    }

    somar(evento){
        this.setState({valor : this.state.valor + 1})
    }
    render(){
        return (
            <div>
                <h1>Contador:</h1>
                <h2>
                    Valor: {this.state.valor}
                </h2>
                <hr />
                <input type="button" value="Somar" onClick={e => this.somar()}/>
                
            </div>
        )
    }
}