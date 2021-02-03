import React , {useState}from 'react';
import Question from './components/Question/Question';
import Form from './components/Forms/Forms';

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
          <div className="row">
              <div className="one-half column">
                  <Form/>
              </div>
              <div className="one-half column">
                  2
              </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
