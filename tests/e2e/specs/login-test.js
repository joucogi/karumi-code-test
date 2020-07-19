describe("When user visits Login url", () => {
  it("should be showing some components", () => {
    cy.visitLogin()
      .get("input#username")
      .get("input#password")
      .get("button#btnLogin")
      .get("span.error");
  });

  it("Should be showing error message if user click the button and inputs are empty", () => {
    cy.visitLogin()
      .shouldNotBeVisible("span.error")
      .clickButton("btnLogin")
      .shouldBeOnUrl("/login")
      .shouldBeVisible("span.error");
  });

  it("Should be showing error message if user click the button and credentials are wrong", () => {
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

  it("Should be redirected to home page if user click the button and credentials are valid", () => {
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
