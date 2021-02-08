import React from 'react';
import Spending from '../Spending/Spending';


const List = ({ spendings }) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {spendings.map(spending => (
                 <Spending 
                 key={spending.id}
                 spending={spending}
             />
            ))}
        </div>
    );
}

export default List;