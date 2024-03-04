const nextSectionBtn = document.getElementById("dive-btn");

nextSectionBtn.addEventListener("click", function() {
    // 다음 섹션으로 스크롤 이동
    const nextSection = document.getElementById("section-2");
    nextSection.scrollIntoView({ behavior: "auto" });
});
