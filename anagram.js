function isAnagram(str1, str2) {
    // Helper function to sanitize and sort the string
    function sanitizeAndSort(str) {
        return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
    }

    // Sanitize and sort both strings
    const sanitizedStr1 = sanitizeAndSort(str1);
    const sanitizedStr2 = sanitizeAndSort(str2);

    // Compare the sanitized and sorted strings
    return sanitizedStr1 === sanitizedStr2;
}

// Examples
console.log(isAnagram('spar', 'rasp')); // true
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('Dormitory', 'Dirty room')); // true
console.log(isAnagram('The eyes', 'They see')); // true
