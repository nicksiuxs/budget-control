import React from 'react';
import {reviewBudget} from '../../helper';
import PropTypes from 'prop-types';

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

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default BudgetControl;