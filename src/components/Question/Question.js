import React, { useState } from 'react';
import Error from '../Error/Error';
import PropTypes from 'prop-types';

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {

    //Set the state of the quantity
    const [quantity, saveQuantity] = useState(0);
    // State error
    const [error, saveError] = useState(false);

    // Function that read the value of the budget type by the user
    const setBudget = e => {
        saveQuantity(parseInt(e.target.value, 10))
    }

    // Submit to set the budget
    const addBudget = e => {
        e.preventDefault();
        // Validations
        if (quantity <= 0 || isNaN(quantity)) {
            saveError(true);
            return;
        }
        saveError(false);
        saveBudget(quantity);
        saveRemaining(quantity);
        updateQuestion(false);
    }
    return (
        <div>
            <h2>Ingresa tu presupuesto</h2>
            {error ? <Error message="El presupuesto es incorrecto" /> : null}
            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={setBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </div>
    );
}

Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired,
}

export default Question;