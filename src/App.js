import React from 'react';

import Company from './componentes/view/company/company';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="App">
    <BrowserRouter>
     <Route exact path='/empresas' component={Company} />
    </BrowserRouter>
  </div>
     
    </div>
  );
}

export default App;
