import React, { useContext } from 'react';
import { UserContext } from '../../utils/contexts/userContext';
import { AuthContext } from '../../utils/contexts/authContext';
import { GoogleSheetsContext } from '../../utils/contexts/googleSheetsContext';
import { SettingsContext } from '../../utils/contexts/settingsContext';
import { Button } from 'reactstrap';

const LogAllContexts = () => {
    const [userState, setUserState] = useContext(UserContext);
    const [authState, setAuthState] = useContext(AuthContext);
    const [sheetsState, setSheetsState] = useContext(GoogleSheetsContext);
    const [settingsState, setSettingsState] = useContext(SettingsContext);

    const onClick = () => {
        console.log('User State: ');
        console.log(userState);
        console.log('Auth State: ');
        console.log(authState);
        console.log('Google Sheets State: ');
        console.log(sheetsState);
        console.log('Settings State: ');
        console.log(settingsState);
    }

    return (
        <Button onClick={onClick}>Log</Button>
    )
}

export default LogAllContexts;