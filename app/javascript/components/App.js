import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../redux/configureStore";
import HelloWorld from "./HelloWorld";
class App extends React.Component {
  render () {
    return (
    <Provider store= {store}>
      <BrowserRouter>
        <Routes>
        <Route path="/hello" element={<p>Home</p>} />
        <Route path="/" element={<HelloWorld greeting="friend"/>} />
      </Routes>
      </BrowserRouter>
    </Provider> 
    );
  }
}

export default App
