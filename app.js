 // Take input from user==================================

 var input = prompt("Enter a word which consist not more than 4 characters");

 var guess=input.value;


// Declare letters=========================================
 var alphabets=["a","b","c","d","e","f","i","j","k","k","l","m","n","o","p"
  ,"q","r","s","t","u","v","w","x","y","z"];

// Create empty arrray======================================================

var lettersArray=[];

// Create function on button==============================================================
function randomWords() {


// Declare random numbers length to 4========================================================
  for(var i=1; i<= Math.floor(Math.random())+4; i++) {
    
// Replacing random numbers to letters which is in lettersArray===============================
    random = alphabets [Math.floor(Math.random()*alphabets.length)];

// Push randon characters to declared array==============================================
    lettersArray.push(random);
}


// Join  lettersArrays elements which is random letters into string============================
lettersArray=lettersArray.join("");

// Checking user guess against random generated string==========================================
if (guess === lettersArray) {
  alert("You got it right");

}

else if (guess !== lettersArray){
  alert("Wrong");
}


// Print random generated string===============================================================
console.log(lettersArray);

}

// End of function===================================================================


