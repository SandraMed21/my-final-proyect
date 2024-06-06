// // src/__tests__/Form.test.js
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Form from '../components/Form';

// test('submits form data', async () => {
//   render(<Form />);
//   fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'Test' } });
//   fireEvent.change(screen.getByPlaceholderText(/Value/i), { target: { value: '123' } });
//   fireEvent.click(screen.getByText(/Submit/i));
//   expect(await screen.findByText(/Data inserted successfully/i)).toBeInTheDocument();
// });
