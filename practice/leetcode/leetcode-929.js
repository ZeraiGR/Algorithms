// Unique Email Addresses
// https://leetcode.com/problems/unique-email-addresses/

// Tags: Array, Hash Table, String

const numUniqueEmails = function(emails) {
  let res = new Set();
  for (let email of emails) {
    let [local, domain] = email.split('@');
    local = local.split('+')[0].split('.').join('');
    res.add(local + '@' + domain);
  }
  console.log(res);
  return res.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]));