import React from 'react';
import Chatroom from './pages/chatroom/components/Chatroom';
import { Provider } from 'react-redux';
import { store } from './store/reducer';

function App() {
    return (
        <Provider store={store}>
            <Chatroom />
        </Provider>
    );
}

export default App;
