import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter test', () => {
    test('Test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('valuetitle')).toHaveTextContent('10');
        screen.debug();
    });
    test('Test increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('incbtn'));
        expect(screen.getByTestId('valuetitle')).toHaveTextContent('11');
    });
    test('Test decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decbtn'));
        expect(screen.getByTestId('valuetitle')).toHaveTextContent('9');
    });
});
