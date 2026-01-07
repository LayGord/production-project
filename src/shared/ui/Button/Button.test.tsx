import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from "./Button";

describe('shared/Button', () => {
    test('default render', () => {

        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
    test('render with theme', () => {

        render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug()
    });
})