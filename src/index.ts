
/**
    Gives the remainder of the division of n by d, with an optional offset.
    Equivalent to https://reference.wolfram.com/language/ref/Mod.html
 */
export const mod = (n: number, d: number, offset = 0) =>
    ((n - offset) % d + d) % d + offset;
