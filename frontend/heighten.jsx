import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';



//! testing
import { signup, login, logout } from './util/session_api_util';
//! testing


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    
    //! testing
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    //! testing

    ReactDOM.render(<Root store={store} />, root);
});
