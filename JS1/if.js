let isShow = true;
let checked = true;


function toggleBtn() {
  let p = document.getElementById('toggleText');
  if (isShow) {
    p.style.display = 'none';
    isShow = false;
  } else {
    p.style.display = 'block';
    isShow = true;
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.button').addEventListener('click', toggleBtn);
});

