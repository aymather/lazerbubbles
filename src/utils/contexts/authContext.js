import React, { useState } from 'react';

const AuthContext = React.createContext([{}, () => {}]);

const AuthProvider = (props) => {
    const [state, setState] = useState({
    //loggedIn: false,
    //toggle for debugging
        loggedIn: true,
    });

    return (
        <AuthContext.Provider value={[state, setState]}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };