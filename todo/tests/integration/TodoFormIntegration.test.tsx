import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from '../../src/components/TodoForm';

test('adds a new todo when the form is submitted', () => {
  const addTodoMock = jest.fn(); // Create a mock function for addTodo
  const { getByPlaceholderText, getByText } = render(<TodoForm addTodo={addTodoMock} />);

  const inputElement = getByPlaceholderText('Add a new todo');
  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.submit(inputElement);

  expect(addTodoMock).toHaveBeenCalledWith('Test Todo'); // Ensure addTodo was called with the correct value
});
