import React, {Component, Fragment} from 'react';
import Nati from "./Nati";

class Sele extends Component {
    render() {
        return (
            <Fragment>
                <Nati name={this.props.name}></Nati>
            </Fragment>
        );
    }
}

export default Sele;