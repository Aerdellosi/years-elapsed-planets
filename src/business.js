
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






// export default function template() {

// }