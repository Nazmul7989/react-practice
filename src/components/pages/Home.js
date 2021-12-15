import React, {Component, Fragment} from 'react';
// import Sele from "../componentTree/Sele";
// import {MyProvider} from "../componentTree/Context";

//Css
// import Css from "../Css/Css";

//State and event
// import State from "../State and Event/State";

//conditional rendering
// import ConditonalRendering from "../Condition/ConditonalRendering";

//Form Handle
// import FormHandle from "../FormHandle/FormHandle";
// import MultipleForm from "../FormHandle/MultipleForm";

//Http Request Handle
// import GetRequest from "../Http/GetRequest";
// import PostRequest from "../Http/PostRequest";

//React Dom
// import ReactDom from "../ReactDom/ReactDom";

//React Hooks
// import Hooks from "../ReacrHooks/Hooks";
import HooksHttp from "../ReacrHooks/HooksHttp";


class Home extends Component {
    render() {
        return (
            <Fragment>
                <h2>Home Page</h2>
                {/*<MyProvider value="This text from Home Component by using React Context">*/}
                {/*    <Sele name="I am from Home to Puti"></Sele>*/}
                {/*</MyProvider>*/}

                {/*============= Css style ===========*/}
                {/*<Css></Css>*/}

                {/*============= State and event ===========*/}
                {/*<State></State>*/}

                {/*============= Conditional Rendering ===========*/}
                {/*    <ConditonalRendering></ConditonalRendering>*/}

                {/*============= Form Handle ===========*/}
                {/*    <FormHandle></FormHandle>*/}
                {/*    <MultipleForm></MultipleForm>*/}

                {/*============= Http Request ===========*/}
                {/*    <GetRequest></GetRequest>*/}
                {/*    <PostRequest></PostRequest>*/}

                {/*============= React Dom ===========*/}
                {/*<ReactDom></ReactDom>*/}

                {/*============= React Hooks ===========*/}
                {/*<Hooks></Hooks>*/}
                <HooksHttp></HooksHttp>



            </Fragment>
        );
    }
}

export default Home;