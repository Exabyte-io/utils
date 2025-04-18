"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToPrecision = void 0;
const mathjs_1 = __importDefault(require("mathjs"));
const constants_1 = require("./constants");
/*
 * @summary Same as `combinations` but accepting intervals (tuples) of integers: eg. [-3, 4]
 */
const /**
     * @summary Zero threshold. Numbers below it are put to zero exactly.
     * Used to avoid mathjs.js bug in treating zero as X.XXe-16.
     */ EPSILON = 1e-8, 
/**
 * @summary Returns scalar product of vectors
 * @param v1 Vector 1
 * @param v2 Vector 2
 */
product = (v1, v2) => {
    return mathjs_1.default.multiply(v1, mathjs_1.default.transpose(v2));
}, 
/**
 * @summary Returns length of a vector.
 * @param v Vector
 */
vlen = (v) => {
    // @ts-ignore
    return mathjs_1.default.sqrt(product(v, v));
}, 
/**
 * @summary Returns angle between `a` and `b` vectors.
 * @param a Vector a
 * @param b Vector b
 * @param unit `rad`, `deg`
 */
angle = (a, b, unit) => {
    const lenA = vlen(a);
    const lenB = vlen(b);
    return (mathjs_1.default
        // @ts-ignore
        .unit(mathjs_1.default.acos(product(a, b) / (lenA * lenB)), "rad")
        .toNumber(unit || "deg"));
}, angleUpTo90 = (a, b, unit) => {
    const angleUpTo180 = angle(a, b, unit);
    return angleUpTo180 < 90 ? angleUpTo180 : 180 - angleUpTo180;
}, 
/**
 * @summary Returns distance between 2 vectors.
 * @param v1 {Number[]} Vector
 * @param v2 {Number[]} Vector
 * @return {Number}
 */
vDist = (v1, v2) => {
    if (v1.length !== v2.length) {
        console.error("Attempting to calculate distance between vectors of different dimensionality");
    }
    return vlen(v1.map((coordinate, index) => coordinate - v2[index]));
}, 
/**
 * @summary Returns checks whether 2 vector are equal within tolerance.
 * @param vec1 {Number[]} Vector
 * @param vec2 {Number[]} Vector
 * @param tolerance {Number} Tolerance
 * @return {Number}
 */
vEqualWithTolerance = (vec1, vec2, tolerance = constants_1.tolerance.pointsDistance) => {
    const val = vDist(vec1, vec2);
    if (typeof val === "undefined") {
        return false;
    }
    // @ts-ignore
    return val <= tolerance;
}, 
/**
 * @summary Returns 0 if passed number is less than Made.mathjs.EPSILON.
 * @param n {Number}
 * @return {Number}
 */
roundToZero = (n) => {
    return Math.abs(n) < EPSILON ? 0 : n;
}, 
/**
 * @summary Returns number with specified precision.
 */
precise = (x, n = 7) => {
    return Number(x.toPrecision(n));
}, 
/**
 * @summary Returns mod of the passed value with the specified tolerance.
 */
mod = (num, tolerance = 0.001) => {
    const m = num % 1;
    const x = num >= 0 ? m : 1 + m;
    if (mathjs_1.default.smallerEq(Math.abs(x - 1), tolerance) ||
        mathjs_1.default.smallerEq(Math.abs(x), tolerance)) {
        return 0;
    }
    return x;
}, 
/**
 * @summary Returns cartesian of passed arrays.
 * @example combinations([1,2], [4,5], [6]) = [[1,4,6], [1,5,6], [2,4,6], [2,5,6]];
 */
cartesianProduct = (...arg) => {
    const r = [];
    const max = arg.length - 1;
    const helper = (arr, i) => {
        for (let j = 0, l = arg[i].length; j < l; j++) {
            const a = arr.slice(0); // clone arr
            a.push(arg[i][j]);
            if (i === max) {
                r.push(a);
            }
            else {
                helper(a, i + 1);
            }
        }
    };
    helper([], 0);
    return r;
}, 
/**
 * @summary Returns all possible positive integer combinations where each value changes from 0 to a, b, c.
 */
almostEqual = (a, b, tolerance = constants_1.tolerance.pointsDistance) => {
    return Math.abs(a - b) < tolerance;
}, 
/**
 * @summary Returns true if number is 0 <= x < 1, inclusive, otherwise false.
 * Helper to deal with JS arithmetic artifacts.
 */
isBetweenZeroInclusiveAndOne = (number, tolerance = constants_1.tolerance.length) => {
    return roundToZero(number) >= 0 && !almostEqual(number, 1, tolerance) && number < 1;
}, 
/**
 * @summary Returns all possible positive integer combinations where each value changes from 0 to a, b, c.
 * @example
 *   var comb = combinations(1, 2, 0);
 *   // [[0, 0, 0], [0, 1, 0], [0, 2, 0], [1, 0, 0], [1, 1, 0], [1, 2, 0]]
 * @param a
 * @param b
 * @param c
 */
combinations = (a, b, c) => {
    const combs = [];
    for (let i = 0; i <= a; i++) {
        for (let j = 0; j <= b; j++) {
            for (let k = 0; k <= c; k++) {
                combs.push([i, j, k]);
            }
        }
    }
    return combs;
}, combinationsFromIntervals = (arrA, arrB, arrC) => {
    const combs = [];
    for (let i = arrA[0]; i <= arrA[1]; i++) {
        for (let j = arrB[0]; j <= arrB[1]; j++) {
            for (let k = arrC[0]; k <= arrC[1]; k++) {
                combs.push([i, j, k]);
            }
        }
    }
    return combs;
}, roundValueToNDecimals = (value, decimals = 3) => {
    return parseFloat(value.toFixed(decimals));
}, 
/**
 * @summary Returns n splits of the passed segment.
 */
calculateSegmentsBetweenPoints3D = (point1, point2, n) => {
    // safely parse if passed strings
    const point1_ = point1.map((x) => (typeof x === "string" ? parseFloat(x) : x));
    const point2_ = point2.map((x) => (typeof x === "string" ? parseFloat(x) : x));
    const n_ = typeof n === "string" ? parseInt(n, 10) : n;
    const result = [];
    for (let i = 1; i < n_; i++) {
        const lambda = i / (n_ - i);
        result.push([
            (point1_[0] + lambda * point2_[0]) / (1 + lambda),
            (point1_[1] + lambda * point2_[1]) / (1 + lambda),
            (point1_[2] + lambda * point2_[2]) / (1 + lambda),
        ]);
    }
    return result;
};
/**
 * @summary Wrapper for native [Number.toPrecision](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Number/toPrecision) method.
 * Returns a string representing the Number object to the specified precision.
 * @locus Client
 * @method
 * @name toPrecision
 * @param number
 * @param precision Optional. An integer specifying the number of significant digits.
 */
function numberToPrecision(number, precision) {
    if (typeof number === "number") {
        return number.toPrecision(precision);
    }
    return String(number);
}
exports.numberToPrecision = numberToPrecision;
exports.default = {
    ...mathjs_1.default,
    PI: Math.PI,
    trunc: Math.trunc,
    product,
    vlen,
    angle,
    angleUpTo90,
    vDist,
    vEqualWithTolerance,
    roundToZero,
    precise,
    mod,
    isBetweenZeroInclusiveAndOne,
    cartesianProduct,
    almostEqual,
    combinations,
    combinationsFromIntervals,
    calculateSegmentsBetweenPoints3D,
    roundValueToNDecimals,
    numberToPrecision,
};
