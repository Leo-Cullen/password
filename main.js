const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// array to hold generated password
let password = []

// object to hold our passwords
let passwords = {
    password1: [],
    password2: []
}
// grab password field elements
let passwordEl1 = document.getElementById("password-1")
let passwordEl2 = document.getElementById("password-2")

// run this when user clicks generate passwords button 
function generate() {

function makePassword() {
    password = [] // ensure array is empty
    for ( let i = 0; i < 15; i++ ) { 
        let char = Math.floor(Math.random() * characters.length) // create a random number to select a char from charcaters
        password.push(characters[char]) // add randomly selected char to array
    }
    return password
}

passwords.password1 = makePassword()
passwords.password2 = makePassword()

passwordEl1.textContent = "" // clear password field
passwordEl2.textContent = ""

// populate password fields with chars
    for ( let i = 0; i < 14; i++ ) {
        passwordEl1.textContent += passwords.password1[i]
    }

    for ( let i = 0; i < 14; i++ ) {
        passwordEl2.textContent += passwords.password2[i]
    }
}
