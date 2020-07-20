describe("When logged user visits Login url", () => {
  beforeEach(() => {
    const token =
      "eyJfaWQiOjEsIl9uYW1lIjoiSm9lbCIsIl91c2VybmFtZSI6ImpvZWwuY29sbEBnbWFpbC5jb20iLCJfcGFzc3dvcmQiOiIxMjM0NTYifQ==";
    cy.clearLocalStorage().should(ls => {
      ls.setItem("token", token);
      expect(ls.getItem("token")).not.to.be.null;
    });
  });

  it("Should be redirect to home url", () => {
    cy.visitLogin().shouldBeOnUrl("/login");
  });
});

describe("When logged user visits Login url", () => {
  beforeEach(() => {
    cy.clearLocalStorage().should(ls => {
      expect(ls.getItem("token")).to.be.null;
    });
  });

  it("should be contain some components", () => {
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
      .shouldBeVisibleAndContain("span.error", "The username is not an email");
  });

  it("Should be showing error message if user click the button and email is not valid", () => {
    cy.visitLogin()
      .shouldNotBeVisible("span.error")
      .get("input#username")
      .type("lololololo")
      .get("input#password")
      .type("lalalalala")
      .clickButton("btnLogin")
      .shouldBeOnUrl("/login")
      .shouldBeVisibleAndContain("span.error", "The username is not an email");
  });

  it("Should be showing error message if user click the button and credentials are wrong", () => {
    cy.visitLogin()
      .shouldNotBeVisible("span.error")
      .get("input#username")
      .type("lololololo@domain.com")
      .get("input#password")
      .type("lalalalala")
      .clickButton("btnLogin")
      .shouldBeOnUrl("/login")
      .shouldBeVisibleAndContain(
        "span.error",
        "The username or password you’ve entered is incorrect"
      );
  });

  it("Should be redirected to home page if user click the button and credentials are valid and token should exist", () => {
    cy.clearLocalStorage().should(ls => {
      expect(ls.getItem("token")).to.be.null;
    });

    cy.visitLogin()
      .shouldNotBeVisible("span.error")
      .get("input#username")
      .type("joel.coll@gmail.com")
      .get("input#password")
      .type("123456")
      .clickButton("btnLogin")
      .shouldBeOnUrl("/")
      .get("h2")
      .contains("Welcome to your homepage Joel")
      .should(() => {
        console.log("TOKEN", localStorage.getItem("token"));
        expect(localStorage.getItem("token")).not.to.be.null;
      });
  });
});
