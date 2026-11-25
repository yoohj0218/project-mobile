	var article = $('.add_area .article');  //모든 질문 답변 리스트 li
	article.find('.add_list').hide(); // 모든 답변 닫아라
    article.removeClass('show').addClass('hide');
    article.find('.icon').html('<i class="fa-regular fa-circle-down"></i>'); //모든 li의 질문에 아래방향의 아이콘 삽입
    //$('.add_area .article:first').find('.add_list').slideDown(200); //첫번째 li의 답변만 열어라
    //$('.add_area .article:first').find('.icon').html('<span class="material-symbols-outlined">remove</span>'); //첫번재 li의 질문에 위쪽방향 아이콘 변경
	
	$('.add_area .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.article'); //클릭한 해당 list >li 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            //article.find('.add_list').slideUp(100); //모든 답변을 닫아라
            //article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            //article.find('.icon').html('<span class="material-symbols-outlined icon">add_2</span>');

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.add_list').slideDown(200);  //해당 리스트의 답변을 열어라  
            myArticle.find('.icon').html('<i class="fa-regular fa-circle-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.add_list').slideUp(200);  //해당 리스트의 답변을 닫아라  
            myArticle.find('.icon').html('<i class="fa-regular fa-circle-down"></i>');
        }  
  });