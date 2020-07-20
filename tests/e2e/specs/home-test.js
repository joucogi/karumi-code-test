describe("When user is not logged and visits Home url", () => {
  it("should be redirected to login url", () => {
    cy.visitHome().shouldBeOnUrl("/login");
  });
});

describe("When user is logged and visits Home url", () => {
  beforeEach(() => {
    const token =
      "eyJfaWQiOjEsIl9uYW1lIjoiSm9lbCIsIl91c2VybmFtZSI6ImpvZWwuY29sbEBnbWFpbC5jb20iLCJfcGFzc3dvcmQiOiIxMjM0NTYifQ==";
    cy.clearLocalStorage().should(ls => {
      ls.setItem("token", token);
      expect(ls.getItem("token")).not.to.be.null;
    });
  });

  it("should be stay to home url", () => {
    cy.visitHome().shouldBeOnUrl("/");
  });

  it("should be redirect to login url and token should not exist", () => {
    cy.visitHome()
      .shouldBeOnUrl("/")
      .clickButton("btnLogout")
      .shouldBeOnUrl("/login")
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null;
      });
  });
});
