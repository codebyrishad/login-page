import React, { createContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./home";


export const usercontext = createContext();

function App() {

  // reducer function
  const reducer = (state, action) => {
    if (action.type === "LOGIN") {
      return { username: action.payload };
    } else if (action.type === "UPDATE") {
      return { username: action.payload };
    } else {
      return state;
    }
  };

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, { username: "" });

  return (
    <usercontext.Provider value={{ state, dispatch }}>
   
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      
    </usercontext.Provider>
  );
}

export default App;
