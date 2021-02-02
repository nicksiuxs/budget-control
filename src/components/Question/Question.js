import React, { useState } from 'react';

const Question = () => {

    //Set the state of the quantity
    const [quantity, saveQuantity] = useState(0);

    // Function that read the value of the budget type by the user
    const setBudget = e => {
        saveQuantity(parseInt(e.target.value, 10))
    }

    // Submit to set the budget
    const addBudget = e => {
        e.preventDefault();
        // Validations
        // e.target.value
    }
    return (
        <div>
            <h2>Ingresa tu presupuesto</h2>
            <form
                onSubmit={ }
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

export default Question;