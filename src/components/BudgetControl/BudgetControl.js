import React from 'react';
import {reviewBudget} from '../../helper';

const BudgetControl = ({budget, remaining}) => {
    return ( 
        <div>
            <div className="alert alert-primary">
                Presupuesto: ${budget}
            </div>
            <div className={reviewBudget(budget,remaining)}>
                Restante: ${remaining}
            </div>
        </div>
     );
}
 
export default BudgetControl;