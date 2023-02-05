import { UserAgeInterval, yearsElapsedPlanets } from "../src/business";

describe("UserAgeInterval", () => {
    test("should create a user object with age interval", () => {
        const newUser1 = new UserAgeInterval(12, 34);
        expect(newUser1.initialAge).toEqual(12);
        expect(newUser1.endingAge).toEqual(34);
    });
    test("should use a method to calculate interval difference", () => {
        const newUser1 = new UserAgeInterval(12, 34);
        const intervalDifference = newUser1.findIntervalDifference();
        expect(intervalDifference).toEqual(22);
    });

});

describe("yearsElapsedPlanets", () => {
    test("should calculate years elapsed on mars given earth years interval", () => {
        const newUser1 = new UserAgeInterval(12, 34);
        const intervalDifference = newUser1.findIntervalDifference();
        const marsYearsTotal = yearsElapsedPlanets.yearsElapsedMars(intervalDifference);
        expect(marsYearsTotal).toEqual(11.69);
    });

});