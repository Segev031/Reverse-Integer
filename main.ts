function reverseInteger(x: number): number {
    let isNegative: boolean = false;
    if (x < 0) {
        isNegative = true;
        x *= -1;
    }
    let num: number = x;
    let y: number = 0;
    while (num != 0) {
        y = y * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    
    if (y > 0x7FFFFFFF) {
        return 0;
    }
    
    if (isNegative) 
        return y * -1;
    return y;
};