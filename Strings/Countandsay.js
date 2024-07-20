/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }

    let s = "1"; // Initialize the sequence with the first element

    while (--n) {
        let newStr = ""; // Build the new string
        let i = 0;

        // Single loop to process the current sequence
        while (i < s.length) {
            let count = 1;

            // Count the number of consecutive characters
            while (i + 1 < s.length && s[i] === s[i + 1]) {
                i++;
                count++;
            }

            // Append the count and the character to the new string
            newStr += count.toString() + s[i];
            i++;
        }

        s = newStr; // Update the sequence to the newly constructed sequence
    }

    return s;
}