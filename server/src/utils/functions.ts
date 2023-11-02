export function isNumeric(str: string): boolean {
    const num = parseFloat(str);
    return !isNaN(num) && isFinite(num);
}