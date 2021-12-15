import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Hooks = () => {

    const [data,setData] = useState({
        name: 'Md Nazmul Hasan',
    });


    function changeName(){
        setData({
            name: 'Md Mizanur Rahman'
        })
    }

    return (
        <>
         <div className="container">
             <div  className="row">
                 <div className="col-12">
                    <h3>My Name : {data.name}</h3>
                     <button onClick={changeName} className="btn btn-info btn-sm">Change Name</button>
                 </div>
             </div>
         </div>
        </>
    );
};

export default Hooks;