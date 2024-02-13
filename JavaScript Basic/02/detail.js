let tabButtons = document.querySelectorAll('.tab-button');
let tabContents = document.querySelectorAll('.tab-content');

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener('click', function() {
      for (let j = 0; j < tabButtons.length; j++) {
        tabButtons[j].classList.remove('orange');
      }
      tabButtons[i].classList.add('orange');

      for (let k = 0; k < tabContents.length; k++) {
        tabContents[k].classList.remove('show');
      }
      tabContents[i].classList.add('show');
  });
}

console.log(tabButtons);
console.log(tabButtons[0]);
console.log(tabButtons[1]);
console.log(tabButtons[2]);