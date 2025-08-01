import { createContext, useState } from "react";
import classes from './Counter.module.scss';


export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    
    return (
        <div className={classes.btn}>
            <h3>{count}</h3>
            <button onClick={increment}>increment</button>
        </div>
    );
};
