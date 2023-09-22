import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp from '../../src/components/TodoApp';

test('adds and deletes a todo', () => {
  const { getByText, getByPlaceholderText } = render(<TodoApp />);
  
  // Find the input field and add a new todo
  const inputElement = getByPlaceholderText('Add a new todo');
  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.submit(inputElement);
  
  // Verify if the todo was added
  getByText('Test Todo');

  // Find and click the delete button
  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  // Verify if the todo was deleted
  expect(queryByText('Test Todo')).toBeNull();
});
