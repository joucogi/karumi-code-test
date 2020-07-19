describe("E2E testing", () => {
  it("Visits Home url when user is not logged in", () => {
    cy.visitHome()
      .contains("h2", "Welcome to your homepage Unknown")
      .get("button#btnLogout");
  });

  it("Visits Home url and go to Login url when logout button is clicked", () => {
    cy.visitHome()
      .clickButton("btnLogout")
      .shouldBeOnUrl("/login");
  });
});
