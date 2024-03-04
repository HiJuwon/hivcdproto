/* 하위 카테고리 보이게 하기 */

const menu = document.querySelector(".category-group");
const subBars = document.querySelectorAll(".category-group > .category > .subcategory");

let subToggle = true;

function showSub() {
    subBars.forEach(subBar => {
        subBar.classList.toggle("show");
    });
    subToggle = !subToggle;
}

menu.addEventListener("mouseover", showSub);
menu.addEventListener("mouseout", showSub);



/* 크레딧 팝업창 뜨게 하기 */

const creditButton = document.querySelector('.last-category');  //크레딧 팝업창을 여는 버튼
const creditPopup = document.getElementById('credit-popup');    //열리고 닫힐 크레딧 팝업창
const popupHeaderSvg = document.querySelector('#popup-header > svg');   //크레딧 팝업창 닫는 SVG

creditButton.addEventListener('click', showCreditPopup);
popupHeaderSvg.addEventListener('click', hideCreditPopup);

function showCreditPopup() {
    creditPopup.classList.add('show');
}

function hideCreditPopup() {
    creditPopup.classList.remove('show');
}

