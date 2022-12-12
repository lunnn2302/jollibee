import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';
import { SidebarMenuProvider } from './context/SidebarMenuContext';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <Provider store={store}>
            <SidebarMenuProvider>
                <App />
            </SidebarMenuProvider>
        </Provider>
    </GlobalStyles>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
