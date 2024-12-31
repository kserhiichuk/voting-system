describe('Sample Test', () => {
  it('should load the home page', () => {
    cy.visit('/');
    cy.contains('Your opinion matters, Democracy is everything!'); // Adjust this to match your home page content
  });

  it('should register a new user', () => {
    cy.visit('/auth/register');
    cy.get('input[name="name"]').type('testuser');
    cy.get('input[name="login"]').type('testuser' + Math.random());
    cy.get('input[name="password"]').type('testpassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/auth/login');
  });

  it('should create a new poll', () => {
    cy.visit('/auth/login');
    cy.get('input[name="login"]').type('testuser0.41164990661282798');
    cy.get('input[name="password"]').type('testpassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.contains('Your opinion matters, Democracy is everything!');

    cy.visit('/newpoll');
    cy.get('input[name="surveyTitle"]').type('Test Poll');
    cy.get('textarea[name="surveyDescription"]').type('This is a test poll');
    cy.get('input[name="options"]').eq(0).type('Option 1');
    cy.get('input[name="options"]').eq(1).type('Option 2');
    cy.get('form').submit();

    cy.url().should('include', '/voting/');
    cy.contains('Test Poll');
  });

  it('should create a new poll and vote', () => {
    cy.visit('/auth/login');
    cy.get('input[name="login"]').type('testuser0.41164990661282798');
    cy.get('input[name="password"]').type('testpassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.contains('Your opinion matters, Democracy is everything!');

    cy.visit('/newpoll');
    cy.get('input[name="surveyTitle"]').type('Test Poll');
    cy.get('textarea[name="surveyDescription"]').type('This is a test poll');
    cy.get('input[name="options"]').eq(0).type('Option 1');
    cy.get('input[name="options"]').eq(1).type('Option 2');
    cy.get('form').submit();

    cy.url().should('include', '/voting/');
    cy.contains('Test Poll');

    cy.get('input[type="radio"]').eq(0).check(); // Select the first option
    cy.get('form').eq(0).submit();

    cy.contains('1 votes');
  });
});
