// Вариант 1 (бесконечные деньги всех номиналов)

//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10

function iWantToGet(amountRequired) {
  let availableNotes = [100, 50, 20, 10];
  let res = [];

  if (amountRequired > 0) {
    for (let i = 0; i < availableNotes.length; i++) {
      const note = availableNotes[i];

      while (amountRequired - note >= 0) {
        amountRequired -= note;
        res.push(note);
      }
    }
  } else {
    throw new Error('Invalid amount!');
  }

  return res;
}

// console.log(iWantToGet(360));

// Вариант 2 (ограниченный банкомат, купюры хорошо делятся друг на друга)
/* 
Нужно вернуть купюры и их количество, которыми можно выдать запрашиваемую сумму, в виде объекта в формате, аналогичном объекту лимитов.
При прочих равных возможностях выдать одну и ту же сумму разными купюрами, приоритет отдаётся крупным.
Если выдать запрашиваемую сумму не получится в принципе (сумма не кратна минимальной купюре) - вернуть ошибку "Error: Incorrect value".
Если в банкомате недостаточно нужных купюр - вернуть ошибку "Error: Not enough money".
*/

const nominals = [5000, 1000, 500, 100, 50];

function test() {
  // пример: в банкомате 9200 со следующими номиналами
  const limits = { 5000: 0, 1000: 6, 500: 5, 100: 5, 50: 4 };

  console.log(atm(1250, limits)); // { 1000: 1, 100: 2, 50: 1 }
  // console.log(atm(10000000, limits)); // "Error: Not enough money"
  console.log(atm(2400, limits)); // { 1000: 2, 100: 3, 50: 2 }
  // console.log(atm(6512, limits)); // "Error: Incorrect value"
  console.log(atm(50, limits)); // { 50: 1 }
  // console.log(atm(50, limits)); // "Error: Not enough money"
  console.log(atm(3500, limits)); // { 1000: 3, 500: 1 }
}

function atm (amountRequired, limits) {
  if (amountRequired % 50 !== 0) {
    throw new Error("Error: Incorrect value");
  }
  
  const res = {};

  for (let i = 0; i < nominals.length; i++) {
    const currentNominal = nominals[i];
    const availableNotes = limits[currentNominal];
    const neededNotes = Math.floor(amountRequired / currentNominal);
    const realNotes = Math.min(availableNotes, neededNotes);

    amountRequired -= realNotes * currentNominal;

    if (realNotes) {
      res[currentNominal] = realNotes;
    }
  }

  if (amountRequired > 0) {
    throw new Error("Error: Not enough money");
  }

  Object.entries(res).forEach(([nominal, cnt]) => {
    limits[nominal] -= cnt;
  });

  return res;
}

test();

// Вариант 3 (ограниченный банкомат, купюры не делятся друг на друга)
let iWantToGet3 = (amountRequired, limits) => {

  function collect (amount, nominals) {
    if (amount === 0) return {};
    if (!nominals.length) return;

    let currentNominal = nominals[0];
    let availableNotes = limits[currentNominal];
    let neededNotes = Math.floor(amount / currentNominal);
    let finishNotes = Math.min(availableNotes, neededNotes);

    for (let i = finishNotes; i >= 0; i--) {
      let result = collect(amount - currentNominal * i, nominals.slice(1));

      if (result) {
        return i ? {[currentNominal]: i, ...result} : result;
      }
    }
    
  }

  const nominals = Object.keys(limits).map(Number).sort((a,b) => b - a);

  return collect(amountRequired, nominals);
};

const limits3 = {1000: 5, 500: 2, 100: 5, 50: 100, 30: 6};

// console.log(iWantToGet3(230, limits3)); // {30: 1, 100: 2}
// console.log(iWantToGet3(1000, limits3)); // {1000: 1}
// console.log(iWantToGet3(200, limits3)); // {100: 2}
// console.log(iWantToGet3(150, limits3)); // {50: 1, 100: 1}
// console.log(iWantToGet3(120, limits3)); // {30: 4}
// console.log(iWantToGet3(275, limits3)); // undefined or Error
// console.log(iWantToGet3(50000, limits3)); // undefined or Error