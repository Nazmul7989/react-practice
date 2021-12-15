import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
// import axios from "axios";


class PostRequest extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            phone: '',
            email: '',
            skill: '',
            description: '',
        }
    };

    onChangeHandler = (e)=>{
        let inputName = e.target.name;
        let inputValue = e.target.value;

        this.setState({[inputName]: inputValue})
    }

    onClickHandler = (e)=>{
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6">
                            <h3 className="text-center mt-5 mb-2 text-info">This is Test Form</h3>
                            <form>
                                <div className="form-group">
                                    <input onChange={this.onChangeHandler} name="name" placeholder="Your Name" className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.onChangeHandler} name="phone" placeholder="Your Phone Number" className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.onChangeHandler} name="email" placeholder="Your Email Address" className="form-control" type="email" />
                                </div>
                                <div className="form-group">
                                    <select onChange={this.onChangeHandler} name="skill" className="form-control">
                                        <option value="" className="d-none">Select your skill</option>
                                        <option value="HTML">HTML</option>
                                        <option value="Php">Php</option>
                                        <option value="React Js">React Js</option>
                                        <option value="Vue Js">Vue Js</option>
                                        <option value="Javascript">Javascript</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea onChange={this.onChangeHandler} cols="30" rows="4" name="description" placeholder="Your Description" className="form-control" type="email" />
                                </div>
                                <div className="form-group">
                                    <button onClick={this.onClickHandler} className="btn btn-info btn-sm" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </>
        );
    }
}

export default PostRequest;