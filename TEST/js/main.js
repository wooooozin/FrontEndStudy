console.log('하이하이하이!');

const els = document.querySelectorAll('div');
els.forEach(el => {
  console.log(el.dataset.fruitName);
})