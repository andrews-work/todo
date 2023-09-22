import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoApp from '../../src/components/TodoApp';

test('renders TodoApp component', () => {
  const { getByText, getByPlaceholderText } = render(<TodoApp />);
  expect(getByText('Todo App')).toBeInTheDocument();
  expect(getByPlaceholderText('Add a new todo')).toBeInTheDocument();
});

test('adds a new todo', () => {
  const { getByPlaceholderText, getByText } = render(<TodoApp />);
  const inputElement = getByPlaceholderText('Add a new todo');
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.submit(inputElement);
  expect(getByText('New Todo')).toBeInTheDocument();
});

test('deletes a todo', () => {
  const { getByPlaceholderText } = render(<TodoApp />);
  const inputElement = getByPlaceholderText('Add a new todo');
  fireEvent.change(inputElement, { target: { value: 'Todo to delete' } });
  fireEvent.submit(inputElement);
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument();
});