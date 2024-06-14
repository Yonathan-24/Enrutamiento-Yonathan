import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import Number from './componentes/Number';
import Word from './componentes/Word';
import StyledWord from './componentes/StyledWord';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:color/:bgColor" element={<StyledWord />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
