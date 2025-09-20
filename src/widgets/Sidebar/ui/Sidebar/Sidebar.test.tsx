import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar test', () => {
    test('Test render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });
    test('Test Sidebar collapse button', () => {
        componentRender(<Sidebar />);
        const btn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
