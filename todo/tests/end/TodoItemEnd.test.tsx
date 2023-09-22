// TodoItemE2E.test.tsx

describe('Todo Item', () => {
    beforeEach(() => {
      cy.visit('/'); // Replace '/'' with the actual URL where your app is hosted
      cy.get('input[type="text"]').type('Todo to delete');
      cy.get('button[type="submit"]').click();
    });
  
    it('should delete a todo', () => {
      cy.contains('Todo to delete')
        .parent()
        .find('button')
        .click();
      cy.contains('Todo to delete').should('not.exist');
    });
  });
  