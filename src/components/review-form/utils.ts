import { Range } from './const';

export const inRange = (value: number, range: Range): boolean => value >= range.min && value <= range.max;
