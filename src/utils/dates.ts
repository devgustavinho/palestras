export function selectRandomItem<T>(array: T[]): { selectedItem: T, itemsLeft: T[] } {
    const randomIndex = Math.floor(Math.random() * array.length);
    const selectedItem = array[randomIndex];
    const itemsLeft = array.filter((_, index) => index !== randomIndex);
    
    return { selectedItem, itemsLeft };
}

export function myAgeDetails(birthDate: Date) {
    const today = new Date();
    const thisMonth = today.getMonth();
    
    const year = birthDate.getFullYear();
    const month = birthDate.getMonth();
    const day = birthDate.getDate();
    let age = today.getFullYear() - year;
    if (thisMonth < month || (thisMonth === month && today.getDate() < day)) {
        age--;
    }

    return {
        since: year,
        age: age,
    };
}

export function myNextBirthDayDetails(birthDate: Date): { months: number, days: number, weeks: number } {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());
    
    if (nextBirthday < today) {
        nextBirthday = new Date(currentYear + 1, birthDate.getMonth(), birthDate.getDate());
    }

    const diffMs = nextBirthday.getTime() - today.getTime();

    const oneDayMs = 1000 * 60 * 60 * 24;
    const oneMonthMs = oneDayMs * 30.44;

    const months = Math.floor(diffMs / oneMonthMs);
    const days = Math.floor((diffMs % oneMonthMs) / oneDayMs);
    const weeks = Math.floor(days / 7);

    return { months, days, weeks };
}