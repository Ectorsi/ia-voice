import React from 'react';
import AppContextAndProvider from './contexts/appContextAndProvider';
import Main from './pages/Main';
import GlobalStyles from './styles/global';

function App() {
    return (
        <AppContextAndProvider>
            <Main />
            <GlobalStyles />
        </AppContextAndProvider>
    );
}

export default App;
