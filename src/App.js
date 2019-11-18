import React from "react";
import "./App.scss";
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoggedIn from './pages/LoggedIn';
import RootProvider from './utils/contexts';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <RootProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/signup" component={Signup} />
                        <Route path="/loggedin" component={LoggedIn} />
                        <Route path="/" component={Login} />
                    </Switch>
                </BrowserRouter>
            </RootProvider>
        </div>
    );
};

export default App;
