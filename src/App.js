import React, { useState } from 'react';
import Question from './components/Question/Question';
import Form from './components/Forms/Forms';

function App() {

  // set states
  const [budget, saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [spendings, saveSpendings] = useState([]);

  // When add a new spending
  const saveNewSpending = spending =>{
    console.log(spending);
    saveSpendings([
      ...spendings,
      spending
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {showquestion
            ? (<Question
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}
            />)
            : (
              <div className="row">
                <div className="one-half column">
                  <Form saveNewSpending = {saveNewSpending}/>
                </div>
                <div className="one-half column">
                  2
              </div>
              </div>
            )
          }

        </div>
      </header>
    </div>
  );
}

export default App;
