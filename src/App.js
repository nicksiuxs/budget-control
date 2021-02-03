import React , {useState}from 'react';
import Question from './components/Question/Question.js';

function App() {

  // global state budget
  const [budget, saveBudget] = useState(0);
  // global remaining
  const [remaining, saveRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Question
            saveBudget = {saveBudget}
            saveRemaining = {saveRemaining}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
