import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Custom.module.css'
// import './Custom.scss'


class Css extends Component {
    render() {
        const styleObject = {
            color: 'green',
            fontSize: '30px',
            fontWeight: 'bold',
        }
        return (
            <Fragment>
                <h3 className="text-info font-weight-bold font-italic">This is bootstrap css</h3>
                <h3 style={{ color: 'red'}}>This is Inline Style</h3>
                <p style={styleObject}>This is style object </p>
                <p className={styles.custom}>This is module css</p>
                {/*<p className="myCss">This is react sass </p>*/}
            {/*  ==========  React Sass is depriciated   =============*/}

            </Fragment>
        );
    }
}

export default Css;