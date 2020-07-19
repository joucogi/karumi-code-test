describe("When user visits Home url", () => {
  it("should be redirected to login url if it is not logged in", () => {
    cy.visitHome().shouldBeOnUrl("/login");
  });
});
