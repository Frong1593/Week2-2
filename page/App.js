import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import HOC from '../component/hoc/HOC'
import Ref  from '../component/ref/Ref'
import Context from '../component/context/Context.js'
import {Navigation} from './Navigation.js';


function App (){
    return (
            <Router>
            <div className="container">
            <h3 className="m-3 d-flex justify-contnet-center"> React JS Work from home </h3>
            <Navigation/>
            
            <Switch>
                <Route path='/HOC' component={HOC} exact/>  
                <Route path='/Ref' component={Ref} exact/>  
                <Route path='/Context' component={Context} exact/>  
            </Switch>
            </div>
            </Router>
    )
}
export default App;