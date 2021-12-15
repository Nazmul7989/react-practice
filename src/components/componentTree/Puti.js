import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {MyConsumer} from "../componentTree/Context";

class Puti extends Component {
    render() {
        return (
            <Fragment>
                <h2>I am Puti</h2>
                <h3 className="text-success">{ this.props.name}</h3>
                <MyConsumer>
                    {
                        msg=>{
                            return <h3 className="text-info">{msg}</h3>
                        }
                    }
                </MyConsumer>
            </Fragment>
        );
    }
}

export default Puti;