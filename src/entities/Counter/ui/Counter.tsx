import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(CounterActions.increment());
    };

    const decrement = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div>
            <h1
                data-testid="valuetitle"
            >
                {counterValue}
            </h1>
            <Button
                onClick={decrement}
                data-testid="decbtn"
            >
                decrement
            </Button>
            <Button
                onClick={increment}
                data-testid="incbtn"
            >
                increment
            </Button>
        </div>
    );
};
