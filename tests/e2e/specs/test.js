// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080");
    cy.contains("h1", "Random Dog Images");
  });

  it("pressing counter button increments button", () => {
    cy.get("#myCounter").click();
    cy.contains("h2", "Dog Count 2");
  });
});
