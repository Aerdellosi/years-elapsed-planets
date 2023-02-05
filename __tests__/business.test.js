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
    test("should calculate years elapsed on earth given earth years interval", () => {
        const newUser1 = new UserAgeInterval(12, 34);
        const intervalDifference = newUser1.findIntervalDifference();
        const earthYearsTotal = yearsElapsedPlanets.yearsElapsedEarth(intervalDifference);
        expect(earthYearsTotal).toEqual(22);
    });
    test("should calculate years elapsed on jupiter given earth years interval", () => {
        const newUser1 = new UserAgeInterval(12, 34);
        const intervalDifference = newUser1.findIntervalDifference();
        const jupiterYearsTotal = yearsElapsedPlanets.yearsElapsedJupiter(intervalDifference);
        expect(jupiterYearsTotal).toEqual(1.85);
    });
    test("should calculate years elapsed on planet X given earth years interval", () => {
        const newUser1 = new UserAgeInterval(12, 34);
        const intervalDifference = newUser1.findIntervalDifference();
        const planetXYearsTotal = yearsElapsedPlanets.yearsElapsedPlanetX(intervalDifference);
        console.log(planetXYearsTotal);
        expect(planetXYearsTotal).toEqual(0.80);
    });

});