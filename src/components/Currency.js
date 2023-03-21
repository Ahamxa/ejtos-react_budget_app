
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency=()=>{
    const { dispatch,remaining,currency  } = useContext(AppContext);
    function handelChange(event){
        dispatch({
            type: 'CHG_CURRENCY',
            payload:event.target.value,
        });
    }

    return(
        
        <div>
            <div className="alert alert-success">
                <label className="" htmlFor="inputGroupSelect01">Currency</label>
                <select className="currencySelect" id="inputGroupSelect01" onChange={(event)=>handelChange(event)}  >
                        <option value="$" name="dolar">$ Dollar</option>
                        <option value="£" name="pound">£ Pound</option>
                        <option value="€" name="euro">€ Euro</option>
                        <option value="₹" name="₹ ruppe">₹ Ruppe</option>
               
                  </select>
                  </div>
                  
        </div>
            
        
    )

}

export default Currency

