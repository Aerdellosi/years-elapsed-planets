
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
        const martianYears = earthYearsElapsed * (687/365);
        return martianYears;
    }
}






// export default function template() {

// }