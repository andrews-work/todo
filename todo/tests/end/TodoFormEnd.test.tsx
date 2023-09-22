// TodoFormE2E.test.tsx

describe('Todo Form', () => {
    beforeEach(() => {
      cy.visit('/'); // Replace '/'' with the actual URL where your app is hosted
    });
  
    it('should add a new todo', () => {
      cy.get('input[type="text"]').type('New Todo');
      cy.get('button[type="submit"]').click();
      cy.contains('New Todo').should('exist');
    });
  
    it('should not add an empty todo', () => {
      cy.get('input[type="text"]').type('    '); // Type only spaces
      cy.get('button[type="submit"]').click();
      cy.contains('New Todo').should('not.exist');
    });
  });
  