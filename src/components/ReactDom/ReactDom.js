import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class ReactDom extends Component {

    onClickHandler(){
        let element = <h3>Hello, This React Dom text has been changed</h3>
        let container = document.getElementById('dom');

        ReactDOM.render(
            element, container,
        )
    }

    render() {
        return (
            <>
             <div className="container">
                 <div className="row">
                     <div className="col-12">
                         <h4 id="dom">This is React Dom Text</h4>
                         <button onClick={this.onClickHandler} className="btn btn-info btn-sm">Change Dom Text</button>
                     </div>
                 </div>
             </div>
            </>
        );
    }
}

export default ReactDom;