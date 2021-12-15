import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class MultipleForm extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            phone: '',
            email: '',
            skill: '',
            description: '',
        };

        this.refreshPage = this.refreshPage.bind(this);
    }

    onChangeHandler = (e)=>{
        let inputName = e.target.name;
        let inputValue = e.target.value;
        this.setState({[inputName]: inputValue})
    }

    refreshPage = ()=>{
        this.forceUpdate()
    }

    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-6">
                           <div className="card">
                               <div className="card-header text-center">
                                   <h3>Login Form</h3>
                               </div>
                               <div className="card-body">

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
                                           <button className="btn btn-info btn-sm" type="submit">Submit</button>
                                       </div>
                                   </form>
                                   <button onClick={this.refreshPage} className="btn btn-sm btn-info">Refresh Now</button>
                               </div>
                           </div>
                        </div>
                        <div className='col-6'>
                            <h4>Name: {this.state.name}</h4>
                            <h4>Phone No: {this.state.phone}</h4>
                            <h4>Email Address: {this.state.email}</h4>
                            <h4>Skill: {this.state.skill}</h4>
                            <h4>Description: {this.state.description}</h4>
                            <h3>Random Number: {Math.random()}</h3>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MultipleForm;