import React, {Component} from 'react';
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";

class MyRoutes extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Switch>
                            <Route exact path="/" component={Home } />
                            <Route  path="/about" component={About} />
                            <Route  path="/contact" component={Contact} />
                            <Route  path="/blog" component={Blog} />
                            <Route  component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>

        );
    }
}

export default MyRoutes;