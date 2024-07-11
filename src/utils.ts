export const isEmpty = <T extends { length: number }>(data: T): boolean => data.length === 0;
