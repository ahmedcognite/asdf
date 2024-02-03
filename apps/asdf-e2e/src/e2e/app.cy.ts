describe('asdf-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should verify sequential (paginated) loading of posts', () => {
    cy.visit('/');

    cy.intercept('GET', 'https://dummyjson.com/posts?limit=50&skip=0').as(
      'getPosts1Till50'
    );
    cy.intercept('GET', 'https://dummyjson.com/posts?limit=50&skip=50').as(
      'getPosts51Till100'
    );
    cy.intercept('GET', 'https://dummyjson.com/posts?limit=50&skip=100').as(
      'getPosts101Till150'
    );
    cy.intercept('GET', 'https://dummyjson.com/posts?limit=50&skip=150').as(
      'getPosts151Till200'
    );

    cy.wait('@getPosts1Till50').its('response.statusCode').should('eq', 200);
    cy.get('[data-testid="posts-container"]').should('exist');
    cy.get('[data-testid="posts-container"]')
      .children('article')
      .should('have.length', 50);

    cy.get('[data-testid="posts-container"]').children('button').click();

    cy.wait('@getPosts51Till100').its('response.statusCode').should('eq', 200);
    cy.get('[data-testid="posts-container"]').should('exist');
    cy.get('[data-testid="posts-container"]')
      .children('article')
      .should('have.length', 100);

    cy.get('[data-testid="posts-container"]').children('button').click();

    cy.wait('@getPosts101Till150').its('response.statusCode').should('eq', 200);
    cy.get('[data-testid="posts-container"]').should('exist');
    cy.get('[data-testid="posts-container"]')
      .children('article')
      .should('have.length', 150);

    cy.get('[data-testid="posts-container"]').children('button').click();

    cy.wait('@getPosts151Till200').its('response.statusCode').should('eq', 200);
    cy.get('[data-testid="posts-container"]').should('exist');
    cy.get('[data-testid="posts-container"]')
      .children('p')
      .should('have.text', 'All posts have been fetched.');
  });

  it('should login the user', () => {
    cy.login(
      Cypress.env('USERNAME') || "Cypress.env('USERNAME') is undefined",
      Cypress.env('PASSWORD') || "Cypress.env('PASSWORD') is undefined"
    );
  });

  it('should verify user info after login', () => {
    cy.visit('/');
    cy.login(
      Cypress.env('USERNAME') || "Cypress.env('USERNAME') is undefined",
      Cypress.env('PASSWORD') || "Cypress.env('PASSWORD') is undefined"
    );
    cy.visit('/user');

    cy.get('[data-testid="user-info-container"]').should('exist');
    cy.get('[data-testid="user-info-container"]').should(
      'include.text',
      '"id": 15'
    );
    cy.get('[data-testid="user-info-container"]').should(
      'include.text',
      '"username": "kminchelle"'
    );
    cy.get('[data-testid="user-info-container"]').should(
      'include.text',
      '"email": "kminchelle@qq.com"'
    );
    cy.get('[data-testid="user-info-container"]').should(
      'include.text',
      '"firstName": "Jeanne"'
    );
    cy.get('[data-testid="user-info-container"]').should(
      'include.text',
      '"lastName": "Halvorson"'
    );
    cy.get('[data-testid="user-info-container"]').should(
      'include.text',
      '"gender": "female"'
    );
    cy.get('[data-testid="user-info-container"]').should(
      'include.text',
      '"image": "https://robohash.org/Jeanne.png?set=set4"'
    );
    cy.get('[data-testid="user-info-container"]').should(
      'include.text',
      '"token": "*****"'
    );
  });
});
