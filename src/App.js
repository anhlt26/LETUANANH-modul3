import './App.css';
import HeaderCompenent from './Components/HeaderComponent';
import React from 'react';
import Listcomponent from './Components/ListComponent';
import {Routes, Route, Link} from "react-router-dom";
import HomeComponent from './Components/HomeComponent';
import AddComponent from './Components/AddComponent';

function App() {
  return (
    <>
          <HeaderCompenent/>
      <Routes>
        <Route path={'/listproduct'} element={<Listcomponent />}></Route>
        <Route path={'/home'} element={<HomeComponent/>}></Route>
        <Route path={'/listproduct/create'} element={ <AddComponent/>}></Route>
      </Routes>

    </>

  );
}

export default App;
