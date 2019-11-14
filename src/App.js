import React, { Component } from "react";
import "./App.scss";
import TableDisplay from "./components/TableSelector";
import Login from './pages/Login';
import Signup from './pages/Signup';

import { AuthProvider } from './utils/contexts/authContext';

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/" component={TableDisplay} />
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
};

export default App;
