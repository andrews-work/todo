// TodoAppE2E.test.tsx

describe('Todo App', () => {
    beforeEach(() => {
      cy.visit('/'); // Replace '/'' with the actual URL where your app is hosted
    });
  
    it('should add a new todo', () => {
      cy.get('input[type="text"]').type('New Todo');
      cy.get('button[type="submit"]').click();
      cy.contains('New Todo').should('exist');
    });
  
    it('should delete a todo', () => {
      cy.get('input[type="text"]').type('Todo to delete');
      cy.get('button[type="submit"]').click();
      cy.contains('Todo to delete')
        .parent()
        .find('button')
        .click();
      cy.contains('Todo to delete').should('not.exist');
    });
  });
  