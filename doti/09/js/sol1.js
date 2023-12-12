var price = 24000;

var addOrderList = document.querySelectorAll('.checkbx');
var total = document.querySelector('#total');
total.value = price + '원';


for (let i = 0; i < addOrderList.length; i++) {
  addOrderList[i].onclick = function() {
    if (this.checked == true) {
      price += parseInt(this.value);
    } else {
      price -= parseInt(this.value);
    }
    total.value = price + '원';
  }
}
