// Exercice 1 : 

var integer = 102

var float = 13.9

console.log(integer, float)

// Exercice 2 : 

var basic = 34

var stringified = basic.toString()

console.log(typeof stringified)

// Exercice 3 : 

var num = 1.5

var rounded = Math.round(1.5)

console.log(rounded)

// Exercice 4 : 

var test = 12

var bis = 5

console.log(test + bis)
console.log(test - bis)
console.log(test * bis)
console.log(test / bis)
console.log(test % bis)

// Exercice 5 : 

var test = 143

var bis = 219

console.log(test < bis)

console.log(bis < test)

console.log(test > bis)

console.log(bis > test)


// Exercice 6 : 

var limit = 50

var score = 64
score = 43
if (score > limit) {
    console.log("Ok good !")
} else {
    console.log("oh nooo!")
}


// Exercice 7 : 

var password = "azerty"

if (password.length > 5) {
    console.log("The password is secure")
}

// Exercice 8 : 

var limit = 50
var score = 64
var password = "azerty"

if (score > limit && password.length > 5) {
    console.log("everything is good")
} else if (score > limit || password.length > 5) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}

// bonus : 

var random = Math.floor(Math.random() * (6 - 1 + 1) + 1)
console.log(random)

if (random === 6) {
    console.log("Yes i win !")
} else {
    console.log("So close...")
}


// bonus 2 : 

var month = "January"

switch (month) {
    case "January":
        console.log("winter")
        break

    case "may":
        console.log("spring")
        break

    case "obctober":
        console.log("autumn")
        break

    default:
        console.log("Novembre")
}


