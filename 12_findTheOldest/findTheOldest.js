const findTheOldest = function(people) {
    let maxAge = -1;
    let oldestPerson = null;

    for (const person of people) {
        let age = 0;

        if (person['yearOfDeath'] === undefined) {
            let currentYear = new Date().getFullYear();
            age = currentYear - person['yearOfBirth'];
        } else {
            age = person['yearOfDeath'] - person['yearOfBirth'];
        }

        if (age > maxAge) {
            oldestPerson = person;
            maxAge = age;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
