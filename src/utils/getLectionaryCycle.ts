function getLectionaryCycle(year: number) {
    // Refactor to consider month and season;
    // If in advent, cycle gets bumped by 1
    const cycles = ['a','b','c'];
    return cycles[year % 3];
}