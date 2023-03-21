import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,expenses,currency } = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget);
    const handelChange = (event) => {
        if(budgetValue >= 20000) {
            alert("The value cannot exceed remaining funds  £30");
            return;
        }

        else if(budgetValue<=expenses){
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        else{
            setBudgetValue(event.target.value)
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
                        <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budgetValue}
                        style={{}}
                        onChange={(event) => handelChange(event)}
                        >
                        </input>
        </div>
    );
};
export default Budget;
