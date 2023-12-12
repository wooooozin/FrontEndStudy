var userIdInput = document.querySelector('#user-id');
var userPasswordInput1 = document.querySelector('#user-pw1');
var userPasswordInput2 = document.querySelector('#user-pw2');
userIdInput.addEventListener('change', checkId);
userPasswordInput1.addEventListener('change', checkPw);
userPasswordInput2.addEventListener('change', comparePw1);

function checkId() {
  var userId = userIdInput.value;
  if (userId.length < 4 || userId.length > 15) {
    alert("4~15자리의 영문과 숫자를 사용하세요.");
    userIdInput.select();
  }
}

function checkPw() {
  var pw1 = userPasswordInput1.value;
  if (pw1.length < 8) {
    alert('비밀번호는 8자리 이상이어야 합니다.');
    userPasswordInput1.value = '';
    userPasswordInput1.focus();
  }
}

function comparePw1() {
  var pw1 = userPasswordInput1.value;
  var pw2 = userPasswordInput2.value;

  if (pw1 != pw2) {
    alert('작성한 비밀번호가 일치하지 않습니다.');
    userPasswordInput2.value = '';
    userPasswordInput2.focus();
  }
}