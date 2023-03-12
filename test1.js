function countBiggerThanTen(numbers) {
    let cnt = numbers.reduce((res, cval) => {
        if (cval > 10) {
            return res + 1;
        }
        else return res;
    }, 0);
    return cnt;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5