const fixNumber = (nr: number) => {
    return nr < 10 ? `${nr}` : nr.toString();
};

export const formatDate = (date: Date): string => {
    const days = fixNumber (date.getDate());
    const month = fixNumber(date.getMonth());
    const years = date.getFullYear();
    return `${days}.${month}.${years}`;
};

export const formatTime = (date: Date): string => {
    const hours = fixNumber (date.getHours());
    const minutes = fixNumber(date.getMinutes());
    return `, ${hours}:${minutes}`;
};
