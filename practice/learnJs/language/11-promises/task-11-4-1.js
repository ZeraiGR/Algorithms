/*

Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

*/

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log);

/*

Нет, т.к ошибка выбрасывается асинхронно, не сразу. А try catch вокруг executor работает только с синхронным кодом.

*/