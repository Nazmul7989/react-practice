import React, {Component} from 'react';

class ConditonalRendering extends Component {

    constructor() {
        super();

        this.state = {
            login : false,
        }

        this.changeStateFalse = this.changeStateFalse.bind(this)
        this.changeStateTrue = this.changeStateTrue.bind(this)
    }

    changeStateFalse = ()=>{
        this.setState({login: false})
    }

    changeStateTrue = ()=>{
        this.setState({login: true})
    }

    render() {
        // if (this.state.login){
        //     return (
        //         <>
        //             <h3>This is conditional renderig true statement</h3>
        //             <button onClick={this.changeStateFalse} className="btn btn-info">Show me if the condition is true</button>
        //         </>
        //     );
        // }else {
        //     return (
        //         <>
        //             <h3>This is conditional renderig false statement</h3>
        //             <button onClick={this.changeStateTrue} className="btn btn-danger">Show me if the condition is false</button>
        //         </>
        //     );
        // }

       return (
            this.state.login? (
                <div>
                    <button onClick={this.changeStateFalse} className="btn btn-danger btn-sm">Logout</button>
                </div>
            ) : (
                <div>
                    <button onClick={this.changeStateTrue} className="btn btn-info btn-sm">Login</button>
                </div>
            )
       );

    }
}

export default ConditonalRendering;