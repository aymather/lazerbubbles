import React, { useEffect } from "react";
import "./App.scss";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useAuth from './utils/hooks/useAuth';

const App = () => {
    const { loadUser } = useAuth();

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div className="App">
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Dashboard} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;