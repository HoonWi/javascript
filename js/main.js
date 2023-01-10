$(function () {
    var $container = $('.gallery'), //리스트
        $loadMoreBtn = $('.load-more'), //로드 버튼
        $addItemCount = 3, //추가 갯수
        $added = 0 // 버튼 클릭돼서 추가된 로드 갯수. 전체 데이터 수와 일치하면 버튼 사라지게
        $allData = [];

    //$.getJSON('파일경로', 할일); JSON 불러오는 방법
    $.getJSON('./data/content.json', initGallery);

    function initGallery(data){
        $allData = data;
        console.log($allData);
        addItem(); // 기본 아이템 추가

        $loadMoreBtn.click(addItem); //클릭하면 아이템 추가
    }//initGallery

}); //ready function
