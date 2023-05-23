export const isPastDate = (seconds): boolean => {
    const currentDate = new Date();
    const givenDate = new Date(currentDate.getTime() - (seconds * 1000));

    return givenDate < currentDate;
}