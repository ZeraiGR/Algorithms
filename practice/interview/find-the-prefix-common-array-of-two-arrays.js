// Find the Prefix Common Array of Two Arrays

/*

You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

*/

const findThePrefixCommonArray = function(A, B) {
  // Get the Size of an Array
  let n = A.length;

  // Create frequency array which will store the running frequency
  // of each integer in both the arrays together. Since, they
  // are permutations, the frequency of the each element will 
  // reach 2 at max at any point during the iterations.
  let aux = new Array(n + 1).fill(0);

  // Answer array
  let ans = new Array(n).fill(0);

  // cmn will store the number of elements found to be common yet.
  let cmn = 0;

  for (let i = 0; i < n; i++) {
    // Increment frequency of element a[i], if frequency becomes 2 then 
    // increment the cmn counter.
    aux[A[i]]++;
    if (aux[A[i]] === 2) cmn++;

    // Increment frequency of element b[i], if frequency becomes 2 then
    // increment the cmn counter.
    aux[B[i]]++;
    if (aux[B[i]] === 2) cmn++;

    // Because we are moving in one direction the common elements
    // will not be changed infact the count will remain same or increase
    // but will never get reduced and hence at index 'i' the number of
    // common elements will be 'cmn'
    ans[i] = cmn;
  }

  return ans;
}