/*

Задача написать JavaScript-функцию, которая разместит блоки с текстом как газетные колонки.

Условия:
  
  - При вызове к контексте html-страницы функция renderWaterfall должна расположить DOM-элементы объявлений так, чтобы они они разместились в columnsCount колонок, а расстояние между ними составляло elementGap
  
  - Каждый следующий элемент нужно помещать в ту колонку, высота которой меньше остальных

  - При равных наименьших высотах элемент помещается в первую колонку слева.

  - Не удаляйте существующие классы элементов.

  - Вы можете изменять ширину объявлений, но высота должна быть зависимой от контента.

  - Можно добавлять свои дополнительные элементы для структурирования.


Выводы из условий:

  - В задаче есть расчёты расстояний

  - Задача на стыке алгоритмов и вёрстки

  - Задачу теоретически можно решить на JS без стилей

  - Понадобятся как базовые знания вёрстки, так и DOM API

  - В условиях есть подсказки как писать алгоритм

  - Нужно быть аккуратным с базовой разметкой

  - Можем написать свои тест-кейсы

*/


/** @typedef {import('./solution').RenderWaterfall} RenderWaterfall */

/** @type {RenderWaterfall} */
function renrerWaterfall (rootNode, columnCount = 3, gap = 20) {
  rootNode.style.display = 'flex';
  rootNode.style.justifyContent = 'space-between';

  const styleTag = document.createElement('style');
  const css = `
    .column :not(:last-child) {
      margin-bottom: ${gap}px;
    }
  `;

  styleTag.appendChild(document.createTextNode(css));
  document.body.appendChild(styleTag);

  const allGapsWidth = gap * (columnCount - 1);
  const columnWidth = (rootNode.offsetWidth - allGapsWidth) / columnCount;

  /** @type {(arr: number[]) => number} */
  const findBestColumnIndex = (arr) => {
    let minIndex = 0;
    arr.forEach((item, index) => {
      if (item < arr[minIndex]) minIndex = index;
    });
    return minIndex;
  };

  const columnsHeight = new Array(columnCount).fill(0);
  const letters = Array.from(rootNode.children);

  /** @type {HTMLDivElement[]} */
  const columnElements = new Array(columnCount).fill().map(() => {
    const columnElement = document.createElement('div');
    columnElement.className = 'column';
    columnElement.style.width = `${columnWidth}px`;

    rootNode.appendChild(columnElement);

    return columnElement;
  });

  while (letters.length) {
    const idx = findBestColumnIndex(columnsHeight);

    console.log(columnsHeight);

    columnElements[idx].appendChild(letters.shift());
    columnsHeight[idx] = columnElements[idx].offsetHeight;
  }
}

/*
<div class="root">
  <div class="el">У каждого объявления есть свои стили</div>
  <div class="el">Их не нужно менять</div>
</div>
*/