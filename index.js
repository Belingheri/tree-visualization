/**
 * printItem stampa un singolo elemento e ricorsivamente i suoi figli
 * @Belingheri
 * @param {Element} padre elemento alla quale appendere la struttura
 * @param {{index:string,label:string,children:array,checked:Boolean}} attuale oggetto contenente i dati in un certo formato
 * @example
 * const dataElement = {
 *      index:"5fa9b86537dc38e571a06b39",
 *      label:"Bergamo is 🔝",
 *      children:[
 *          {
 *              index:"5fa9b86537dc90e571a06b00",
 *              label:"Torre Boldone ❤",
 *              children:[]
 *          },
 *          {
 *              index:"5fa86ef6537dc90e571a08643",
 *              label:"Citta Alta 😜",
 *              children:[]
 *          }
 *      ]
 * };
 * const element = document.getelementById('container'); *
 * printItem(element,dataElement);
 *
 * // done!
 *
 */
function printItem(padre, attuale) {
  // contenitore figlio
  const li = document.createElement("li");

  // valore check
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = attuale.index;
  input.checked = attuale.checked;
  li.appendChild(input);

  // label visualizzata
  const label = document.createElement(
    attuale.children.length > 0 ? "label" : "span"
  );
  label.setAttribute("for", input.id);
  label.innerHTML = attuale.label;
  li.appendChild(label);

  if (attuale.children.length > 0) {
    // chiamata ricorsiva per figli
    const ul = document.createElement("ul");
    attuale.children.forEach((e) => {
      printItem(ul, e);
    });
    li.appendChild(ul);
  }
  padre.appendChild(li);
}
/**
 * init print first element and iterate
 * @param {string} idFirstElement starter element of print
 */
function init(idFirstElement) {
  const firstElement = document.getElementById(idFirstElement);
  data.forEach((e) => printItem(firstElement, e));
}
