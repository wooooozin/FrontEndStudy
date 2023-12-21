let boxEl = document.querySelector('.box');
console.log(boxEl);


boxEl.addEventListener('click', function() {
  console.log('click~~');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
});


const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

boxEls.forEach(function(boxEl, index) {
  boxEl.classList.add(`order-${index+1}`)
});

console.log(boxEl.textContent);
boxEl.textContent = 'aaaaa';
console.log(boxEl.textContent);