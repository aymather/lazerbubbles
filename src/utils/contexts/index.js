import React from 'react';
import { AuthProvider } from './authContext';
import { UserProvider } from './userContext';
import { GoogleSheetsProvider } from './googleSheetsContext';
import { SettingsProvider } from './settingsContext';

const RootProvider = props => {
    return (
        <SettingsProvider>
            <AuthProvider>
                <UserProvider>
                    <GoogleSheetsProvider>
                        {props.children}
                    </GoogleSheetsProvider>
                </UserProvider>
            </AuthProvider>
        </SettingsProvider>
    )
}

export default RootProvider;