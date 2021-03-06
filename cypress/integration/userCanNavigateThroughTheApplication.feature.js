describe("User can navigate the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("to About tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
    });

    it("display About Me header", () => {
      cy.get("#about-header").should("contain", "About Me");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "about");
    });

    it("does not display My Project header", () => {
      cy.get("#projects-header").should("not.exist");
    });

    it("does not display Hello world", () => {
      cy.get("#hello").should("not.exist");
    });

    it("does not display CV header", () => {
      cy.get("#cv").should("not.exist");
    });
  });

  describe("to My Projects tab and it", () => {
    beforeEach(() => {
      cy.get("#projects-tab").click();
    });

    it("displays My Projects header", () => {
      cy.get("#projects-header").should("contain", "My Projects");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "projects");
    });

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display Hello world", () => {
      cy.get("#hello").should("not.exist");
    });

    it("does not display CV header", () => {
      cy.get("#cv").should("not.exist");
    });
  });

  //CV

  describe("to my CV tab and it", () => {
    beforeEach(() => {
      cy.get("#cv-tab").click();
    });

    it("display CV header", () => {
      cy.get("#cv-header").should("contain", "CV");
    });

    it("displays component name in url", () => {
      cy.url().should("contain", "CV");
    });

    it("does not display My Project header", () => {
      cy.get("#projects-header").should("not.exist");
    });

    it("does not display About Me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display Hello world", () => {
      cy.get("#hello").should("not.exist");
    });
  });

  //Portfolio

  describe("back to My Portfolio/Hello tab and it", () => {
    beforeEach(() => {
      cy.get("#about-tab").click();
      cy.get("#header").click();
    });

    it("displays Hello World", () => {
      cy.get("#hello").should("contain", "Hello");
    });

    it("displays correct url", () => {
      cy.url()
        .should("not.contain", "projects")
        .and("not.contain", "about");
    });

    it("does not display About me header", () => {
      cy.get("#about-header").should("not.exist");
    });

    it("does not display My Projects header", () => {
      cy.get("#projects-header").should("not.exist");
    });

    it("does not display CV header", () => {
      cy.get("#cv").should("not.exist");
    });
  });
});
