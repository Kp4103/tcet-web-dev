function isPalindrome(input) {
    // Remove non-alphanumeric characters and convert to lowercase
    let sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverse the sanitized input
    let reversedInput = sanitizedInput.split('').reverse().join('');

    // Check if the sanitized input is the same as the reversed input
    return sanitizedInput === reversedInput;
}

// Function to handle user input
function checkPalindrome() {
    // Get the input from the user
    let input = prompt("Enter a word or phrase to check if it's a palindrome:");

    // Check if the input is a palindrome
    if (isPalindrome(input)) {
        console.log(`"${input}" is a palindrome!`);
    } else {
        console.log(`"${input}" is not a palindrome.`);
    }
}

// Run the palindrome checker
checkPalindrome();
