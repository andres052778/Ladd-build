import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import RouterApp from "./screens/RouterApp.tsx";
import {Provider} from "react-redux";
import {store} from "./store/Store.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <RouterApp/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
