import React from 'react';

const Spending = ({spending}) => {
    return ( 
        <li className="gastos">
            <p>
                {spending.name}
                <span className="gasto">$ {spending.quantity} </span>
            </p>
        </li>
     );
}
 
export default Spending;