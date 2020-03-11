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


class Home extends Component {

    __constructor(){
        super();
        this.state={}
    }
    render (){
        return(
            <h1> Proyecto React Vacio</h1>
        )
    }
}
 

ReactDOM.render(<Home />, document.querySelector("#root"));