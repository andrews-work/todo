import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../../src/components/TodoItem';

test('renders TodoItem component', () => {
  const { getByText } = render(<TodoItem todo="Test Todo" onDelete={() => {}} />);
  expect(getByText('Test Todo')).toBeInTheDocument();
});

test('calls onDelete when delete button is clicked', () => {
  const onDeleteMock = jest.fn();
  const { getByText } = render(<TodoItem todo="Test Todo" onDelete={onDeleteMock} />);
  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);
  expect(onDeleteMock).toHaveBeenCalledTimes(1);
});