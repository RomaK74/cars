import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom';
import {MainPage} from "./pages/MainPage";
import {Order} from "./pages/Order";


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/cars/build" component={MainPage} />
                <Route exact path="/cars/build/order" component={Order}/>
            </Switch>
        </div>)
}

export default App;
