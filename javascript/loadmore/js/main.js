$(function () {
    var $container = $('.gallery'), //리스트
        $loadMoreBtn = $('.load-more'), //로드 버튼
        $addItemCount = 3, //추가 갯수
        $added = 0 // 버튼 클릭돼서 추가된 로드 갯수. 전체 데이터 수와 일치하면 버튼 사라지게
        $allData = [];

        $container.masonry({
            // options
            itemSelector: '.gallery-item',
            columnWidth: 270,
            gutter:20
        });

    //$.getJSON('파일경로', 할일); JSON 불러오는 방법
    $.getJSON('./data/content.json', initGallery);

    function initGallery(data){
        $allData = data;
        console.log($allData);
        addItem(); // 기본 아이템 추가

        $loadMoreBtn.click(addItem); //클릭하면 아이템 추가
    }//initGallery

    function addItem(){
        var slicedData;
        var elements = [];

        slicedData = $allData.slice($added, $added+$addItemCount); //데이터 3개씩 호출
        console.log(slicedData);

        // $.each('배열', function(idx, item){}); // JSON 배열값마다 할 일
        $.each(slicedData, function(idx, item){
            var itemHTML =
            '<li class="gallery-item">' + 
                '<a href="#">' +
                    '<figure>' +
                        '<img src="' + item.images.thumb + '"alt="' + item.title + '">' +
                        '<figcaption>' + 
                        item.title +
                        '</figcaption>' +
                    '</figure>' +
                '</a>' +
            '</li>' ;


            elements.push($(itemHTML).get(0));
        });
        
        console.log(elements);
        $container.append(elements);
        
        $added += slicedData.length;

        if($added < $allData.length){
            $loadMoreBtn.show()
        } else {
            $loadMoreBtn.hide()
        }

        $container.imagesLoaded(function() {
            // images have loaded
            $container.masonry('appended', elements )
        });
        
          

    }//addItem
}); //ready function
