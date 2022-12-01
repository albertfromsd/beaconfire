function add2( num1 ) {
    return function sub1(num2) {
        return function sub2(num3) {
            return num1 + num2 + num3;
        }
    }
}

console.log(add2(1)(2)(3));