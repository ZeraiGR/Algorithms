/*

Почему результат разный?

Почему результат второго alert'а такой странный?

alert( 123456789 ^ 0 ); // 123456789
alert( 12345678912345 ^ 0 ); // 1942903641

*/

/*

Ответ:

Потому что при работе с побитовыми операторами, числа приводятся в 32 битную форму. А это значит, что если изначальное число занимает больше чем 32 бита, то лишние биты отбрасываются и поэтому меняется результат.

*/