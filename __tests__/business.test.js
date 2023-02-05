import { UserAgeInterval } from "../src/business";

describe("UserAgeInterval", () => {
    test("should create a user object with age interval", () => {
        const newUser1 = new UserAgeInterval(12, 34);
        expect(newUser1.initialAge).toEqual(12);
        expect(newUser1.endingAge).toEqual(34);
    });

});