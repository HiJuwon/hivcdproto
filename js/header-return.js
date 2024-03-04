window.addEventListener('scroll', function() {
    var header = document.querySelector('.header'); 
    var menuColor = document.querySelectorAll('.menu');
    var subMenuColor = document.querySelectorAll('.submenu');

    var section = document.getElementById('section-3'); // 변경을 원하는 섹션 요소
    var scrollPosition = window.scrollY;
    var sectionPosition = section.offsetTop; // 섹션의 상단 위치

    // 스크롤 위치가 섹션의 상단 위치에 도달하면 클래스를 추가하고 제거하여 배경색 변경
    if (scrollPosition > sectionPosition) {
        header.classList.remove('trans-header');
        menuColor.forEach(function(element) {
            element.classList.remove('trans-color');
        });
        subMenuColor.forEach(function(element) {
            element.classList.remove('trans-color');
        });
    } else {
        header.classList.add('trans-header');
        menuColor.forEach(function(element) {
            element.classList.add('trans-color');
        });
        subMenuColor.forEach(function(element) {
            element.classList.add('trans-color');
        });
    }
});
