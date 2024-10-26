// creating an array and log the ele
arr = [1, 1, 2, 3, 4, 4]
let v = arr.map((element) => { return element });
console.log(v)


// pushing element
let add = (arr, ele) => {
    if (!Array.isArray(arr)) {
        return []
    }
    arr.push(ele);
    console.log("fter adding element: ", arr);
}

// removeing ele
function remove(arr) {
    t = arr.pop();
    console.log(" after removing: ", arr);
    console.log(" the element that was removed: ", t);

}

add([1, 2, 3, 4], 5)
remove([6, 7, 8, 9])

//for each
arra = ['abdo', 'mano', 'ali']
arra.forEach(function(el) {
    console.log(el)
})

//even nuber
function EvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}

const unsortedArray = [4, 60, 98, 88, 85, 58, 98, 10, 44, 21, 77, 38, 8, 35, 3, 39, 23, 80, 23, 80];

const sortedArray = unsortedArray.slice().sort((a, b) => a - b);
console.log("Sorted array:", sortedArray);