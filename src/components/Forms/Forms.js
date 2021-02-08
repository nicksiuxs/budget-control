import React, { useState } from 'react';
import Error from '../Error/Error';
import shortid from 'shortid';

const Forms = () => {

    const [name, saveName] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [error, saverError] = useState(false);

    // when the user add a expense
    const addExpense = e => {
        e.preventDefault();
        // validity
        if (quantity < 1 || isNaN(quantity) || name.trim() === "") {
            saverError(true);
            return;
        }
        // set the spending
        const spending ={
            name,
            quantity,
            id: shortid.generate(),
        }
        // console.log(spending)
        
        // sent the expense to principal component
        // reset form
    }
    return (
        <form
            onSubmit={addExpense}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error message="Ambos campos son obligatorios o presupuesto incorrecto"/> : null}
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ingresa el nombre de tu gasto"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa el precio de tu gasto"
                    value={quantity}
                    onChange={e => saveQuantity(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}
export default Forms;