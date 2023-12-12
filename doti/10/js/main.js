function openPop() {
  var newWindow = window.open('popup.html', ' ', 'width=400, height=400');
  if (newWindow == null) {
    alert('팝업해제하세요');
  }
}
window.onload = openPop;