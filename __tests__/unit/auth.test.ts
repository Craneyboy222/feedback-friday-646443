import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider } from '../src/contexts/AuthContext';
import LoginForm from '../src/components/LoginForm';

describe('Advanced Authentication', () => {
  test('should handle login with validation', async () => {
    render(<AuthProvider><LoginForm /></AuthProvider>);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Invalid email format')).toBeInTheDocument();
  });
});