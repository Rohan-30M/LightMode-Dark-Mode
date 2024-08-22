//import React, {useState,createContext} from 'react';
import './App.css';
import Provider from "./Provider";
import Button from "./Button"
//import { useContext } from 'react';
import Context from './Context';
import Home from './home';

function App() {
  return(
    <>
      <Provider>
          <Home/>
      </Provider>
    </>
  );
}

export default App;
