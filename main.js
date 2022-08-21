function reverseInteger(x) {
    var isNegative = false;
    if (x < 0) {
        isNegative = true;
        x *= -1;
    }
    var num = x;
    var y = 0;
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
}
;
