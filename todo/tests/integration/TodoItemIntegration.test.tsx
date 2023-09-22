import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../../src/components/TodoItem';

test('deletes a todo when the delete button is clicked', () => {
  const onDeleteMock = jest.fn(); // Create a mock function for onDelete
  const { getByText } = render(<TodoItem todo="Test Todo" onDelete={onDeleteMock} />);

  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  expect(onDeleteMock).toHaveBeenCalled(); // Ensure onDelete was called
});
