/*

Получите данные о пользователях GitHub

Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

В песочнице есть тестовый пример.

Важные детали:

1. На каждого пользователя должен приходиться один запрос fetch.
2. Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
3. Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

*/

async function getUsers (names) {
  const res = await Promise.all(names.map(
    name => fetch(`https://api.github.com/users/${name}`))).then(data => {
      return Promise.all(data.map(el => el.json()))
    });

  return res.map(el => el?.message ? null : el);
}

async function getUsers2(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

getUsers(['iliakan', 'remy', 'no.such.users']).then(console.log);
