import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from '../../src/components/TodoForm';

test('renders TodoForm component', () => {
  const { getByPlaceholderText } = render(<TodoForm addTodo={() => {}} />);
  const inputElement = getByPlaceholderText('Add a new todo');
  expect(inputElement).toBeInTheDocument();
});

test('submits a new todo', () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText } = render(<TodoForm addTodo={addTodoMock} />);
  const inputElement = getByPlaceholderText('Add a new todo');
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.submit(inputElement);
  expect(addTodoMock).toHaveBeenCalledWith('New Todo');
});