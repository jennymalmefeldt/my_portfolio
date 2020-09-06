describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
});

it("displays first project", () => {
  cy.get("#project-1").within(() => {
    cy.get(".image").should("exist");
    cy.get(".ui.header").should("contain", "Address Book");
    cy.get(".description").should(
      "contain",
      "Address Book"
    );
  });
});

it("displays secound project", () => {
  cy.get("#project-2").within(() => {
    cy.get(".image").should("exist");
    cy.get(".ui.header").should("contain", "FizzBuzz");
    cy.get(".description").should(
      "contain",
      "Design FizzBuzz game"
    );
  });
});

it("displays third project", () => {
  cy.get("#project-3").within(() => {
    cy.get(".image").should("exist");
    cy.get(".ui.header").should("contain", "ATM");
    cy.get(".description").should(
      "contain",
      "ATM Machine"
      );
    });
  });
});
