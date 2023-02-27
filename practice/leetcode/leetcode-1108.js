// Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/description/

// Tags: String

const defangIPaddr = function(address) {
  return address.split('').map(l => l === '.' ? '[.]' : l).join('');
};