import React, { useEffect } from "react";
import "./App.scss";
import Login from './pages/Login';
import Signup from './pages/Signup';
import LoggedIn from './pages/LoggedIn';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useAuth from './utils/hooks/useAuth';

const App = () => {
    const { loadUser } = useAuth();

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/loggedin" component={LoggedIn} />
                    <Route path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
