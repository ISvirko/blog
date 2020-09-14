export const formattedString = (string: string): string =>
    string.length > 100 ? `${string.split('').slice(0, 100).join('')}...` : string;
