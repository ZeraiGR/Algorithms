// Реализовать функцию wrapper для fetch, c возможностью перезапроса в случае неудачи.

fetchWithRetry(() => fetch('some-url'), {
  retry: (i) => {
    console.log(i);
    if (i < 5) {
      return i * 1_000;
    }

    return false;
  }
});


function fetchWithRetry(constructor, params = {}) {
  let i = 0;

  const executor = () => {
    return constructor().catch((err) => {
      i++;

      if (params.retry == null) {
        return Promise.reject(err);
      }

      let res = params.retry(i);

      switch (res) {
        case true: return executor();
        case false: return Promise.reject(err);
        default: return new Promise((resolve) => {
          setTimeout(() => resolve(executor()), res);
        });
      }
    });
  };
  
  return executor();
}
