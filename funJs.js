// declaration a function
function add(a, b) {
    return a + b;
}
// create an arrow function
let addition = (c, d) => {
        return c + d;
    }
    // log to the console
console.log(`hello form function this is this the result ${add(2,3)}`);
console.log(`hello form arrow function this is this the result ${addition(10,20)}`);


// the maximum value in the array and there is anouther wat by useing Math.max(...arr)
function the_max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > max) {
                max = arr[j];
            }

        }
    }
    return max;
}
console.log(the_max([2, 7, 3, 4]))