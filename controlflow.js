//task 1
let loops = (a) => {
    if (a === 18) {
        console.log("You're allowed to vote");
    } else
        console.error("Sorry, you can't vote");
}
console.log(loops(4))


//task 2
let switches = (days) => {
    switch (days) {
        case '1':
            console.log('Saturday');
        case '2':
            console.log('Sunday');
        case '3':
            console.log('Monday');
        case '4':
            console.log('Tuesday');
        case '5':
            console.log('Wednesday');
        case '6':
            console.log('Thursday');

        default:
            console.log("Finally it's Friday; 7");
    }
}


//task 3
let arr = ['Mano', 'Ali', 'mohanad', 'messi']
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//task 4 
let n = 0;
while (n <= 10) {
    console.log(n, " ")
    n++
}

//task 5 
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`the number${i} is even`)
    }
    if (i % 2 !== 0) {
        console.log(`the number${i} is odd`)

    }
}