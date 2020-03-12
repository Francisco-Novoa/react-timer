import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';

//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

//custom CSS
import "./index.css"

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';



const Nombre = props => <h1>{props.name}</h1>;

​

class Home extends Component {

    constructor(){
        super();
        this.state = {
            name: ''
        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
    }
​
    cambiarNombre(){
        this.setState({
            name: 'Luis'
        })
    }
    cambiarNombreOtraVez = () => {
        this.setState({
            name: 'Pedro'
        })
    }

    cambiarNombrePorTeclado = e => {
        this.setState({
            name: e.target.value
        })
    }

    render(){
        return (
            <>
            <Nombre name={this.state.name} /> <br />
            <input type="text" onChange={(evento) => this.cambiarNombrePorTeclado(evento)}/>
            <button onClick={this.cambiarNombre}>Cambiar Nombre</button>
            <button onClick={this.cambiarNombreOtraVez}>Cambiar Nombre Otra Vez</button>
            </>
        )
    }
}



ReactDOM.render(<Home />, document.querySelector("#root"));