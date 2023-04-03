/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
    createContext, useCallback, useContext, useState,
} from 'react';
import { useTalkText } from '../hooks/UseTalkText';

export const AppContext = createContext({
    listMessage: [],
    listResponse: [],
    handleMessage: () => { },
});

export const useAppContext = () => useContext(AppContext);

function AppContextAndProvider({ children }) {
    const [receiveText] = useTalkText(null);
    const [listMessage, setListMessage] = useState([]);

    const handleResponse = useCallback((newResponse) => {
        if (!newResponse) return;
        setListMessage((prevState) => [
            ...prevState,
            {
                origin: 'server',
                message: newResponse,
            },
        ]);
        receiveText(newResponse);
    }, []);

    const handleMessage = useCallback((newMessage) => {
        if (!newMessage) return;
        setListMessage((prevState) => [
            ...prevState,
            {
                origin: 'client',
                message: newMessage,
            },
        ]);
    }, []);

    return (
        <AppContext.Provider value={{ handleMessage, listMessage, handleResponse }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextAndProvider;
