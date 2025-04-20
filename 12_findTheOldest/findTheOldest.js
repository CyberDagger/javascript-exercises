const findTheOldest = function(people) {
    const d = new Date();
    currentYear = d.getFullYear();
    let oldest;
    if (!("yearOfDeath" in people[0])) {
        people[0].yearOfDeath = currentYear;
    }
    oldest = people.reduce((current, person) => {
        if (!("yearOfDeath" in person)) {
            person.yearOfDeath = currentYear;
        }
        if (current.yearOfDeath - current.yearOfBirth < person.yearOfDeath - person.yearOfBirth) {
            return person;
        } else {
            return current;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
