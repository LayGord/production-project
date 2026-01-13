import { render, screen } from '@testing-library/react';
import { Input } from "./Input";

describe('shared/Input', () => {
    test('default render', () => {

        render(<Input />);
        expect(screen.getByTestId('input')).toBeInTheDocument();
    });
});