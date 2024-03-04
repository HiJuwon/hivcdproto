// 이미지 요소를 담을 배열 생성
const images = [];

// logo-motion-wrapper 안의 모든 img 요소를 선택하여 images 배열에 추가
document.querySelectorAll('.logo-sequence-image').forEach(img => {
    images.push(img);
});

let currentIndex = 0;

setInterval(() => {
    // 다음 이미지를 화면에 보이도록 설정
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.remove('invisible');
    
    // 이전 이미지를 화면에서 숨김
    const previousIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    images[previousIndex].classList.add('invisible');
}, 500); // 0.5초마다 이미지를 변경