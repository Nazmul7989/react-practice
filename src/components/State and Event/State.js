import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class State extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Md Nazmul Hasan',
        }
    }

    changeName(a){
        this.setState({name: a})
    }

    showAlert(e){
        alert(e);
    }

    render() {
        return (
            <div>
                <h3>This is example of state and event</h3>
                <h3>{this.state.name}</h3>
                <button onClick={this.changeName.bind(this,'Faisal Ahmed Apo')} className="btn btn-info">Change Name</button>
                <button onClick={this.showAlert.bind(this,'I am click event')} className="btn btn-info ml-3">Show Alert</button>
           </div>
        );
    }
}

export default State;