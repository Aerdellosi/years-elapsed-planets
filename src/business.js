
export class UserAgeInterval {
    constructor(initialAge, endingAge) {
        this.initialAge = initialAge;
        this.endingAge = endingAge;
    }
    findIntervalDifference() {
        const intervalDifference = this.endingAge - this.initialAge;
        return intervalDifference;
    }
}

export const yearsElapsedPlanets = {
    yearsElapsedMars: (earthYearsElapsed) => {
        let martianYears = earthYearsElapsed * (365/687);
        martianYears = (Math.round(martianYears * 100)) / 100;
        return martianYears;
    },
    yearsElapsedEarth: (earthYearsElapsed) => {
        return earthYearsElapsed;
    },
    yearsElapsedJupiter: (earthYearsElapsed) => {
        let jupiterYears = earthYearsElapsed * (365/4333);
        jupiterYears = (Math.round(jupiterYears * 100)) / 100;
        return jupiterYears;
    },
    yearsElapsedPlanetX: (earthYearsElapsed) => {
        let planetXYears = earthYearsElapsed * (365/10000);
        planetXYears = (Math.round(planetXYears * 100)) / 100;
        return planetXYears;
    }
}






// export default function template() {

// }