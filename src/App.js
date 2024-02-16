import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './nav/NavBar';
import Routes from './routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
       <Routes />
       <NavBar />
    </div>
    </BrowserRouter>
  )
}

export default App;