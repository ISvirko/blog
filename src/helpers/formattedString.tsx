export const formattedString = (string: string): string => {
    const splittedString = string.split('');

    if (splittedString.length > 40) {
        const formattedString = splittedString.slice(0, 40).join('');
        return `${formattedString}...`;
    } else {
        return string;
    }
};
