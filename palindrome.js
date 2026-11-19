const word = prompt ("Enter a word please:  ");
// these variables are used in the while loop and allows loop to compare and read the word from right to left  
let left = 0;
let right = word.length - 1;
let palindrome = true;
// loop determines whether the word is a palindrome or not.
while (left < right ) {
    if (word[left] !== word[right]){
        palindrome = false;
        break;
    }
    left++;
    right--;
}
// if and else statement is use to display whether the word is a palindrome of not(it uses the loop to determine it, so loop gives a false it well refer the else statement and vise verser. )
if (palindrome) {
        console.log(`${word} is a palindrome`);    
} else {
        console.log(`${word} is not a palindrome`);
}
