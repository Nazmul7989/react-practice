import React from "react";
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import MyRoutes from "./components/routes/MyRoutes";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <Navbar></Navbar>
                <MyRoutes></MyRoutes>

            </BrowserRouter>
        </div>
    );
}

export default App;
