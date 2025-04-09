export function safeMakeArray(x: any): any[];
/**
 * @summary Returns objects array in compact csv format. E.g.:
 * [{a: 1, b: 2}, {a: 2, d: 3}] -> [['a','b','d'],[1, 2, null], [2, null, 3]]
 * @param objects
 */
export function convertToCompactCSVArrayOfObjects(objects: any): any[][];
/**
 * @summary Function to sort array based on the order given in a separate array
 * @param arr {Array<number|string|object>}: input array to sort
 * @param order {Array<number|string|object>}: define the order of item in array
 * @return {Array<number|string|object>}
 */
export function sortArrayByOrder(arr: Array<number | string | object>, order: Array<number | string | object>): Array<number | string | object>;
