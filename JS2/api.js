const allchkBtn = document.querySelector('#allchk');
const mainChk1 = document.querySelector('#mainchk01');
const mainChk2 = document.querySelector('#mainchk02');
const allCheckboxes = document.querySelectorAll('.checkboxs .checkbox input[type="checkbox"]');
const nextBtn = document.querySelector('.next-button');
const acco1 = document.querySelector('.chk-import1');
const acco2 = document.querySelector('.chk-import2');
const mainSubChk1 = document.querySelectorAll('.chk-import1 .checkboxs.-sub .checkbox input[type="checkbox"]');
const mainSubChk2 = document.querySelectorAll('.chk-import2 .checkboxs.-sub .checkbox input[type="checkbox"]');

allchkBtn.addEventListener('change', allChkStatus);
mainChk1.addEventListener('change', () => {
  mainChkStatus(mainChk1, mainSubChk1);
  setAccoStatus();
});
mainChk2.addEventListener('change', () => {
  mainChkStatus(mainChk2, mainSubChk2);
  setAccoStatus();
});
mainSubChk1.forEach(checkbox => checkbox. addEventListener('change', checkSubChk1Status));
mainSubChk2.forEach(checkbox => checkbox.addEventListener('change', checkSubChk2Status));

function allChkStatus(event) {
  [mainChk1, mainChk2, ...mainSubChk1, ...mainSubChk2].forEach(checkbox => checkbox.checked = event.target.checked);
  setAccoStatus()
  updateNextButtonStatus()
}


function mainChkStatus(mainChk, subChks) {
  subChks.forEach(checkbox => checkbox.checked = mainChk.checked);
  updateAllChkStatus();
}

function updateAllChkStatus() {
  const isAllChecked = mainChk1.checked && mainChk2.checked;
  allchkBtn.checked = isAllChecked;
  updateNextButtonStatus()
}

function updateNextButtonStatus() {
  if (allchkBtn.checked) {
    nextBtn.disAbled = false;
    nextBtn.classList.remove('-disabled')
    nextBtn.classList.add('-on');
  } else {
    nextBtn.disAbled = true;
    nextBtn.classList.remove('-on');
    nextBtn.classList.add('-disabled');
  }
}

function checkSubChk1Status() {
  let isAllChecked = true;
  for (let checkbox of mainSubChk1) {
    if (!checkbox.checked) {
      isAllChecked = false;
      break;
    }
  }
  mainChk1.checked = isAllChecked;
  allchkBtn.checked = isAllChecked && mainChk1.checked && mainChk2.checked;
  setAccoStatus()
  updateNextButtonStatus();
}

function checkSubChk2Status() {
  let isAllChecked = true;
  for (let checkbox of mainSubChk2) {
    if (!checkbox.checked) {
      isAllChecked = false;
      break;
    }
  }
  mainChk2.checked = isAllChecked;
  allchkBtn.checked = isAllChecked && mainChk2.checked && mainChk1.checked;
  setAccoStatus()
  updateNextButtonStatus();
}

function setAccoStatus() {
  // mainChk1과 mainChk2의 상태에 따라 acco1과 acco2의 클래스를 조절
  if (mainChk1.checked) {
    acco1.classList.remove('-active');
  } else {
    acco1.classList.add('-active');
  }

  if (mainChk2.checked) {
    acco2.classList.remove('-active');
  } else {
    acco2.classList.add('-active');
  }
}