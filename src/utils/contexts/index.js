import React from 'react';
import { AuthProvider } from './authContext';
import { UserProvider } from './userContext';

const RootProvider = props => {
    return (
        <AuthProvider>
            <UserProvider>
                {props.children}
            </UserProvider>
        </AuthProvider>
    )
}

export default RootProvider;