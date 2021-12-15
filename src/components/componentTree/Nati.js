import React, {Component, Fragment} from 'react';
import Puti from "./Puti";

class Nati extends Component {
    render() {
        return (
            <Fragment>
                <Puti name={this.props.name}></Puti>
            </Fragment>
        );
    }
}

export default Nati;