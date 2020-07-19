describe("E2E testing", () => {
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

  it("Visits Login url and go to Home url showing the correct name when login validation success", () => {
    cy.visitLogin()
      .shouldNotBeVisible("span.error")
      .get("input#username")
      .type("joel")
      .get("input#password")
      .type("123456")
      .clickButton("btnLogin")
      .shouldBeOnUrl("/")
      .get("h2")
      .contains("Welcome to your homepage Joel");
  });
});
