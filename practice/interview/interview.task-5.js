// Написать регулярку, которая будет удалять из строки любые дублирования подстрок из 1, 2 или 3 символов, идущих подряд.

let regexp = /([a-z]{1,3})\1+/g;

console.log('abababbbabcabc'.replace(regexp, '$1'));