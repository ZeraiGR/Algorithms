/*

Java[^script]

У нас есть регулярное выражение /Java[^script]/.

Найдёт ли оно что-нибудь в строке Java? А в строке JavaScript?

*/

/*

Ответ: В первом случае null, т.к после Java нет больше никакого символа, хотя должен быть. Во втором случае найдёт JavaS, так как s != S

*/