const $topbtn = document.querySelector(".topbtn");

// 버튼 클릭 시 맨 위로 이동
$topbtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
}