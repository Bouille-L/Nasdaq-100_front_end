// cypress/integration/e2e.spec.tsx
/// <reference types="cypress" />;

describe('Nasdaq-100 ETF Explorer E2E Tests', () => {
  beforeEach(() => {
    // Before each test, visit the homepage
    cy.visit('/');
  });

  it('Should navigate to the About Us page', () => {
    // Click the About Us link
    cy.contains('About Us').click();

    // Ensure that the About Us page content is displayed
    cy.contains('Our Mission').should('exist');
  });

  it('Should navigate to the Contact Us page', () => {
    // Click the Contact Us link
    cy.contains('Contact Us').click();

    // Ensure that the Contact Us page content is displayed
    cy.contains('Full Name').should('exist');
  });

  it('Should navigate to the ETF Information page', () => {
    // Click the ETF Information link
    cy.contains('ETF Information').click();

    // Ensure that the ETF Information page content is displayed
    cy.contains('How ETFs Work').should('exist');
  });

  it('Should navigate to the Educational Resources page', () => {
    // Click the Educational Resources link
    cy.contains('Educational Resources').click();

    // Ensure that the Educational Resources page content is displayed
    cy.contains("ETF Beginner's guide").should('exist');
  });

  it('Should handle navigation to a non-existent page', () => {
    // Attempt to navigate to a non-existent page
    cy.visit('/NotFound');

    // Ensure that the NotFound page content is displayed
    cy.contains('404 - Not Found').should('exist');
  });

  it('Should test form submission', () => {
    // Visit the page that contains the Contact Us form
    cy.visit('/contact'); // Adjust the URL if different

    // Fill out the form fields
    cy.get('input[name="name"]').type('Sample Name');
    cy.get('input[name="email"]').type('sample@example.com');
    cy.get('textarea[name="your_message"]').type('This is a test message.');

    // Submit the form
    cy.get('form').find('button[type="submit"]').click();

    // Assert that the form submission was successful
    cy.contains('Thank you for your message! We will respond to you soon.').should('exist');
  });
});
