import React, { useState, useEffect } from 'react';
import Question from './components/Question/Question';
import Form from './components/Forms/Forms';
import List from './components/List/List';
import BudgetControl from './components/BudgetControl/BudgetControl';

function App() {

  // set states
  const [budget, saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [spendings, saveSpendings] = useState([]);
  const [spending, saveSpending] = useState({});
  const [createspending, saveCreatespending] = useState(false);

  // UseEffect thats updates the remaining
  useEffect(() => {
    if (createspending) {

      // agrega el nuevo presupuesto
      saveSpendings([
        ...spendings,
        spending
      ]);

      // resta del presupuesto actual
      const budgetRemaining = remaining - spending.quantity;
      saveRemaining(budgetRemaining);

      // Resetear a false
      saveCreatespending(false);
    }
  }, [spending, createspending, spendings, remaining]);

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
                  <Form saveSpending={saveSpending}
                    saveCreatespending={saveCreatespending}
                  />
                </div>
                <div className="one-half column">
                  <List
                    spendings={spendings}
                  />
                  <BudgetControl
                    budget={budget}
                    remaining={remaining}
                  />
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
