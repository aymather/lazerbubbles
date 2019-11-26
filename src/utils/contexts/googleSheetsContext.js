import React, { useState } from 'react';

const GoogleSheetsContext = React.createContext([{}, () => {}]);

const GoogleSheetsProvider = (props) => {
    const [state, setState] = useState({
        isConnected: false,
        sheets: {}
    });

    return (
        <GoogleSheetsContext.Provider value={[state, setState]}>
            {props.children}
        </GoogleSheetsContext.Provider>
    );
};

export { GoogleSheetsProvider, GoogleSheetsContext };