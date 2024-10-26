class Books {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    summary() {
        return `${this.title} wrote by ${this.author} and published at ${this.year}`
    }

    display() {
        let index = [];
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                index.push(`${key}: ${this[key]}`);
            }
        }
        return index;
    }
}

let book1 = new Books("the greatest bootcamp", "mano", 2024)

let books = [new Books("backend", "John", "2000"),
    new Books("frontend", "ali", 2004),
    new Books("stateup", "mano", 1880),
    new Books("cyber", "mostfa", 1990),
    new Books("90 days", "omar", 2000)
];

function find(object, name) {
    for (let key of object) {
        if (name.toLowerCase() === key.title.toLowerCase()) {
            return key;
        }
    }
    return "Not found";
}


function objects(ob) {
    if (ob !== typeof object) {
        return {}
    };

    console.log("this is my new object:", ob)
}

console.log(objects(object1))