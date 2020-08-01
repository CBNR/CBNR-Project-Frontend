import React from 'react';
import Chatroom from './pages/chatroom/components/Chatroom';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import { Box, ThemeProvider } from '@material-ui/core';
import theme from './theme';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Box style={{ width: "95vw", height: "95vh", margin: 8 }}>
                    <Chatroom />
                </Box>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
