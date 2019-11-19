import React, { useState, useContext } from 'react';
import { AuthContext } from '../utils/contexts/authContext';
import { UserContext } from '../utils/contexts/userContext';

const LoggedIn = () => {
    const [authState, setAuthState] = useContext(AuthContext);
    const [userState, setUserState] = useContext(UserContext);
    const [tokenState, setTokenState] = useState({
        token: window.localStorage.getItem('token') || null
    });

    return (
        <div>
            <p>Your logged in status is: { authState.isLoggedIn === true ? 'true' : 'false' }</p>
            <p>Your token is: { tokenState.token }</p>
            <p>Your user's email is: { userState.email }</p>
            <p>Your user's id is: { userState.id }</p>
        </div>
    )
}

export default LoggedIn;