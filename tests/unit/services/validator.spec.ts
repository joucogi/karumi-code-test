import Validator from "@/services/validator";

const validator: Validator = new Validator();

describe("For Validator Service", () => {
    it("emailIsValid returns false when email is not valid", () => {
        expect(validator.emailIsValid("lololololo")).toBeFalsy();
        expect(validator.emailIsValid("lololololo.asdasda")).toBeFalsy();
    });

    it("emailIsValid returns true when email is valid", () => {
        expect(validator.emailIsValid("lololololo@domain.com")).toBeTruthy();
        expect(validator.emailIsValid("lololo.lolo@domain.com")).toBeTruthy();
        expect(validator.emailIsValid("lololo.lolo@do-main.com")).toBeTruthy();
    });
});
