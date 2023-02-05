
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
    }
}






// export default function template() {

// }