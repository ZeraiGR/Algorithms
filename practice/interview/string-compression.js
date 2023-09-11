// String Compression

/*

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

*/

const compress = function(chars) {
  let i = 0;
  let count = 1;

  for (let j = 1; j < chars.length + 1; j++) {
    if (j < chars.length && chars[j] === chars[j-1]) {
      count++;
    } else {
      chars[i] = chars[j-1];
      i++;
      if (count > 1) {
        for (const k of String(count)) {
          chars[i] = k;
          i++;
        }
      }
      count = 1;
    }

  }
  
  return i;
};

console.log(compress(['a']));