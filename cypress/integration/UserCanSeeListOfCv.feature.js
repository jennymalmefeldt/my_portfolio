describe("User can see list of cv", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });



  it("displays a job experience", () => {
    cy.get("#cv-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "Account Manager");
      cy.get(".description").should("contain","I was working as a Account Manager at WorkWeb")
    })
  });
  

  it("displays a education experience", () => {
    cy.get("#cv-2").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "Craft Academy");
      cy.get(".description").should("contain", "Fullstack developer");
    })
  });
  
});