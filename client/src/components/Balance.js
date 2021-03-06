import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {numberWithCommas } from '../utils/format';

export const Balance =()=> {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const sign = total < 0 ? '-' : '';

    return (
    
            <div className="balance-container">
                <h2>Current Balance:</h2>
                <h3>{sign} ${numberWithCommas(total)}</h3>
            </div>
    )
}
