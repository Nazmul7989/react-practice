import React, {useEffect, useState} from 'react';
import axios from "axios";

const HooksHttp = () => {

    const [data,setData] = useState({
       posts: [],
    });

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            let posts = response.data.slice(0,5)
            setData({
                posts : posts
            })
        }).catch((error)=>{
            console.log(error)
        })
    });

    const post = data.posts.map((post)=>{
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
            <div className="container">
                <div  className="row">
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
            </div>
        </>
    );
};

export default HooksHttp;