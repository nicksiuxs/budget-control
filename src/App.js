import React from 'react';
import Question from './components/Question/Question.js';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Question/>
        </div>
      </header>
    </div>
  );
}

export default App;
