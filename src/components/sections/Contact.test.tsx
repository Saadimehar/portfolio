/**
 * EmailJS Contact Form - Integration Test
 * 
 * This test verifies that the contact form logic correctly:
 * 1. Loads environment variables
 * 2. Creates form elements with correct field names
 * 3. Prepares data for EmailJS submission
 * 4. Handles success/error states
 * 
 * Run with: npx jest --testPathPattern=contact.test
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '@/components/sections/Contact';

// Mock EmailJS
jest.mock('@emailjs/browser', () => ({
  init: jest.fn(),
  sendForm: jest.fn(),
}));

describe('Contact Form - EmailJS Integration', () => {
  beforeEach(() => {
    // Set environment variables
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = 'test-public-key';
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID = 'test-service-id';
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = 'test-template-id';
    
    // Clear mocks
    jest.clearAllMocks();
  });

  test('initializes EmailJS with public key on mount', () => {
    const emailjs = require('@emailjs/browser');
    render(<Contact />);
    
    expect(emailjs.init).toHaveBeenCalledWith('test-public-key');
  });

  test('creates form with all required fields', async () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const subjectInput = screen.getByLabelText(/Subject/i);
    const messageInput = screen.getByLabelText(/Message/i);
    
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  test('sends form with correct field names', async () => {
    const emailjs = require('@emailjs/browser');
    emailjs.sendForm.mockResolvedValue({ status: 200 });
    
    render(<Contact />);
    
    // Fill form
    await userEvent.type(screen.getByLabelText(/Your Name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/Email Address/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/Subject/i), 'Test Subject');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Test message');
    
    // Submit
    fireEvent.click(screen.getByText(/Send Message/i));
    
    // Wait for submission
    await waitFor(() => {
      expect(emailjs.sendForm).toHaveBeenCalled();
    });
    
    // Verify sendForm was called with correct parameters
    expect(emailjs.sendForm).toHaveBeenCalledWith(
      'test-service-id',
      'test-template-id',
      expect.any(HTMLFormElement) // DOM form element
    );
  });

  test('displays success message on successful submission', async () => {
    const emailjs = require('@emailjs/browser');
    emailjs.sendForm.mockResolvedValue({ status: 200, text: 'OK' });
    
    render(<Contact />);
    
    // Fill and submit form
    await userEvent.type(screen.getByLabelText(/Your Name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/Email Address/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/Subject/i), 'Test');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Test');
    
    fireEvent.click(screen.getByText(/Send Message/i));
    
    // Check for success message
    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument();
    });
  });

  test('displays error message on failed submission', async () => {
    const emailjs = require('@emailjs/browser');
    emailjs.sendForm.mockRejectedValue(new Error('Send failed'));
    
    render(<Contact />);
    
    // Fill and submit form
    await userEvent.type(screen.getByLabelText(/Your Name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/Email Address/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/Subject/i), 'Test');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Test');
    
    fireEvent.click(screen.getByText(/Send Message/i));
    
    // Check for error message
    await waitFor(() => {
      expect(screen.getByText(/Unable to send message/i)).toBeInTheDocument();
    });
  });

  test('clears form fields after successful submission', async () => {
    const emailjs = require('@emailjs/browser');
    emailjs.sendForm.mockResolvedValue({ status: 200 });
    
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/Your Name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/Email Address/i) as HTMLInputElement;
    
    // Fill form
    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(screen.getByLabelText(/Subject/i), 'Test');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Test');
    
    // Submit
    fireEvent.click(screen.getByText(/Send Message/i));
    
    // Wait for success and field clearing
    await waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(emailInput.value).toBe('');
    });
  });

  test('shows loading state while submitting', async () => {
    const emailjs = require('@emailjs/browser');
    
    // Simulate slow submission
    let resolveSubmit: any;
    const submitPromise = new Promise(resolve => {
      resolveSubmit = resolve;
    });
    emailjs.sendForm.mockReturnValue(submitPromise);
    
    render(<Contact />);
    
    // Fill form
    await userEvent.type(screen.getByLabelText(/Your Name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/Email Address/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/Subject/i), 'Test');
    await userEvent.type(screen.getByLabelText(/Message/i), 'Test');
    
    // Submit
    fireEvent.click(screen.getByText(/Send Message/i));
    
    // Check for loading text
    expect(screen.getByText(/Sending/i)).toBeInTheDocument();
    
    // Resolve submission
    resolveSubmit({ status: 200 });
    
    // Check loading is gone
    await waitFor(() => {
      expect(screen.queryByText(/Sending/i)).not.toBeInTheDocument();
    });
  });

  test('validates required fields', async () => {
    render(<Contact />);
    
    const submitButton = screen.getByText(/Send Message/i);
    
    // Try to submit empty form
    fireEvent.click(submitButton);
    
    // HTML5 validation should prevent submission
    expect(screen.getByLabelText(/Your Name/i)).toHaveAttribute('required');
    expect(screen.getByLabelText(/Email Address/i)).toHaveAttribute('required');
    expect(screen.getByLabelText(/Subject/i)).toHaveAttribute('required');
    expect(screen.getByLabelText(/Message/i)).toHaveAttribute('required');
  });
});
