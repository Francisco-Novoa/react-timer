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


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { a: 0 };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
        );
    }

    tick() {
        this.setState({
            a: this.state.a + 1,
        });
    }

    render() {
        return (
            <div className="container backside" id="reloj">
                <div className="row text-white d-flex justify-content-center py-2 m-5 ">
                    <div className="col-1 bg-dark mx-1 rounded pt-1" ><i className="fas fa-clock"></i></div>
                    <div className="col-1 bg-dark mx-1 rounded pt-1" >{parseInt(this.state.a / 100000) % 10}</div>
                    <div className="col-1 bg-dark mx-1 rounded pt-1" >{parseInt(this.state.a / 10000) % 10}</div>
                    <div className="col-1 bg-dark mx-1 rounded pt-1" >{parseInt(this.state.a / 1000) % 10}</div>
                    <div className="col-1 bg-dark mx-1 rounded pt-1" >{parseInt(this.state.a / 100) % 10}</div>
                    <div className="col-1 bg-dark mx-1 rounded pt-1" >{parseInt(this.state.a / 10) % 10}</div>
                    <div className="col-1 bg-dark mx-1 rounded pt-1" >{this.state.a % 10}</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.querySelector("#root"))

