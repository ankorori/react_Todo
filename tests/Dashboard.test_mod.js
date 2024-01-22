import { render, fireEvent } from '@testing-library/react';
import Dashboard from '../src/components/Dashboard';

jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
}));

describe('Dashboard', () => {
    beforeEach(() => {
        localStorage.setItem('token', 'dummy_token');
        localStorage.setItem('nickname', 'dummy_nickname');
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('renders without crashing', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText('Welcome, dummy_nickname!')).toBeInTheDocument();
    });

    it('handles logout', () => {
        const { getByText } = render(<Dashboard />);
        fireEvent.click(getByText('Logout'));
        expect(localStorage.getItem('token')).toBeNull();
        expect(localStorage.getItem('nickname')).toBeNull();
    });
});