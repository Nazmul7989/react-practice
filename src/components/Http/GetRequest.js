import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

class GetRequest extends Component {
    constructor() {
        super();

        this.state = {
            posts : [],
        }
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            let posts = response.data.slice(0,5);
            this.setState({posts: posts})
        }).catch((error)=>{
            console.log(error)
        })
    }

    render() {

        const post = this.state.posts.map((post)=>{
            return (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{ post.title}</td>
                    <td>{ post.body}</td>
                    <td style={{ width: '150px'}}>
                        <button className="btn btn-sm btn-info">Edit</button>
                        <button className="btn btn-sm btn-danger ml-2">Delete</button>
                    </td>
                </tr>
            )
        })
        return (
            <>
             <div className="container mt-5">
                 <div className="row">
                     <div className="col-12">
                         <h3 className="text-center">Posts Table</h3>
                         <table className="table table-bordered">
                             <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Post Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                             </thead>
                             <tbody>
                                {post}
                             </tbody>
                         </table>
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

export default GetRequest;