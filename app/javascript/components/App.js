import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../redux/configureStore";
import HelloWorld from "./HelloWorld";
const App = () => {
    return (
    <Provider store= {store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HelloWorld/>} />
      </Routes>
      </BrowserRouter>
    </Provider> 
    );
}

export default App
