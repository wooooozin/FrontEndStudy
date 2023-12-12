var check = document.querySelector('#shippingInfo');
check.addEventListener('change', isChecked);

function isChecked() {
  var name = document.querySelector('#billingName').value;
  var tel = document.querySelector('#billingTel').value;
  var address = document.querySelector('#billingAddr').value;

  var shippingNameInput = document.querySelector('#shippingName');
  var shippingTelInput = document.querySelector('#shippingTel');
  var shippingAddrInput = document.querySelector('#shippingAddr');

  if (check.checked) {
    shippingNameInput.value = name;
    shippingTelInput.value = tel;
    shippingAddrInput.value = address;
  } else {
    shippingNameInput.value = '';
    shippingTelInput.value = '';
    shippingAddrInput.value = '';
  }
}