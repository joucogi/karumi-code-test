describe("E2E testing", () => {
  it("Visits Home url", () => {
    cy.visitHome();
    cy.contains("h2", "Welcome to your homepage Joel");
    cy.get("button#btnLogout");
  });

  it("Visits Home url, go to Login url and go back to Home url using buttons", () => {
    cy.visitHome();
    cy.clickButton("btnLogout");
    cy.shouldBeOnUrl("/login");
    cy.clickButton("btnLogin");
    cy.shouldBeOnUrl("/");
  });

  it("Visits Login url", () => {
    cy.visitLogin();
    cy.get("input#username");
    cy.get("input#password");
    cy.get("button#btnLogin");
  });

  it("Visits Login url, go to Home url and go back to Login url using buttons", () => {
    cy.visitLogin();
    cy.clickButton("btnLogin");
    cy.shouldBeOnUrl("/");
    cy.clickButton("btnLogout");
    cy.shouldBeOnUrl("/login");
  });
});
