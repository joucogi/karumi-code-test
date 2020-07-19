describe("E2E testing", () => {
  it("Visits Home url", () => {
    cy.visitHome()
      .contains("h2", "Welcome to your homepage Joel")
      .get("button#btnLogout");
  });

  it("Visits Home url and go to Login url when logout button is clicked", () => {
    cy.visitHome()
      .clickButton("btnLogout")
      .shouldBeOnUrl("/login");
  });

  it("Visits Login url", () => {
    cy.visitLogin()
      .get("input#username")
      .get("input#password")
      .get("button#btnLogin")
      .get("span.error");
  });

  it("Visits Login url and stay at Login url and show error message when inputs are empty", () => {
    cy.visitLogin()
      .shouldNotBeVisible("span.error")
      .clickButton("btnLogin")
      .shouldBeOnUrl("/login")
      .shouldBeVisible("span.error");
  });

  it("Visits Login url and stay at Login url and show error message when login validation fails", () => {
    cy.visitLogin()
      .shouldNotBeVisible("span.error")
      .get("input#username")
      .type("lololololo")
      .get("input#password")
      .type("lalalalala")
      .clickButton("btnLogin")
      .shouldBeOnUrl("/login")
      .shouldBeVisible("span.error");
  });

  it("Visits Login url and go to Home url when login validation success", () => {
    cy.visitLogin()
      .shouldNotBeVisible("span.error")
      .get("input#username")
      .type("joucogi")
      .get("input#password")
      .type("123456")
      .clickButton("btnLogin")
      .shouldBeOnUrl("/");
  });
});
