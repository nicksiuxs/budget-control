import React from 'react';

const Question = () => {
    return (
    <div>
        <h2>Ingresa tu presupuesto</h2>
        <form>
            <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto"
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