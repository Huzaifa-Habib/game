
// Take input from user==================================

var input = prompt("Enter a word")


// Declare letters=========================================

var alphabets=["a","b","c","d","e","f","i","j","k","k","l","m","n","o","p"
,"q","r","s","t","u","v","w","x","y","z"];

var random;
random=Math.floor(Math.random()*100);
console.log(random)

function randomWords() {
    var guess=input.value
    if(guess === random){
        document.write="You got right"
    }
    
}

