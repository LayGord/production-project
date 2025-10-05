import { CounterActions, CounterReducer } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(CounterReducer(state, CounterActions.decrement)).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(CounterReducer(state, CounterActions.increment)).toEqual({ value: 11 });
    });
    test('with initial state instead of local defined prop', () => {
        expect(CounterReducer(undefined, CounterActions.increment)).toEqual({ value: 1 });
    });
});
