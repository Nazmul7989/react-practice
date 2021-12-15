import React, {Component} from 'react';

class FormHandle extends Component {
    constructor() {
        super();

        this.state ={
            name: '',
        }
    }

    onChangeHandler = (e)=>{
        let inputValue = e.target.value;
        this.setState({name: inputValue})
    }

    render() {
        return (
            <>
                <h4>My name is: {this.state.name}</h4>
                <form>
                    <input onChange={this.onChangeHandler} type="text" id="name" />
                </form>
            </>
        );
    }
}

export default FormHandle;