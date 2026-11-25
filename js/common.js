//모든페이지 공통js

//스플래시 스크린 처리코드
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');

  // 방문 기록('splashVisited')이 없는 '첫 방문자'일 때만 실행합니다.
  if (!sessionStorage.getItem('splashVisited')) {
    
    // 1. 숨겨져 있던 스플래시 스크린을 화면에 표시합니다.
    splash.classList.add('active');

    // 2. 1초(1000ms) 후에 페이드 아웃 애니메이션을 실행합니다.
    setTimeout(() => {
      splash.classList.add('fade-out');
      // 3. 다음 방문 시에는 뜨지 않도록 세션에 기록을 저장합니다.
      sessionStorage.setItem('splashVisited', 'true');
    }, 1000);
  }
  // 이미 방문한 사용자는 아무런 클래스도 추가되지 않으므로 
  // CSS의 기본값인 display: none 상태가 유지되어 깜빡이지 않습니다.
});

//햄버거 메뉴 열고닫기 처리
var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)

$(".menu_ham").click(function(e) { //메뉴버튼 클릭시
    e.preventDefault();
    
    var documentHeight =  $(document).height(); //전체 페이지의 높이
    $("#gnb").css('height',documentHeight); //네비의 높이를 전체 전체 페이지의 높이로...

  if(op==false){  //메뉴가 닫혀있는 상태에서 클릭했냐??
    $('#headerArea .modal').show();  // 모달박스(nav80%일때)
    $("#gnb").animate({right:0,opacity:1}, 'fast');  //네비가 우측에서 날라온다
    $('#headerArea').addClass('mn_open');  //닫기버튼 모양
    op=true;  //상태->열림
  }else{  //true->메뉴가 열려있는 상태에서 클릭했냐??
    $('#headerArea .modal').hide();  // 모달박스
    $("#gnb").animate({right:'-100%',opacity:0}, 'fast');  //네비를 우측으로 보낸다(메뉴닫기)
    $('#headerArea').removeClass('mn_open'); //열기버튼 모양
    op=false; //상태->닫기
  }

});


//2depth 메뉴 교대로 열기 처리 
var onoff=[false,false,false,false]; //가정법 false(서브닫힘) , true(열림)
var arrcount=onoff.length;  // 배열의 개수 6

//console.log(arrcount);

$('#gnb .depth1 h3 a').click(function(e){  //1depth메뉴를 클릭하면
  e.preventDefault();
    
  var ind=$(this).parents('.depth1').index();  // 0~5
  //var ind=$(this).index('#gnb .depth1 h3 a');
    
  //console.log(ind);
    
    if(onoff[ind]==false){  //각각의 1depth메뉴의 서브가 닫혀있냐??
    //$('#gnb .depth1 ul').hide();
    $(this).parents('.depth1').find('ul').slideDown('slow'); //자신의 서브를 열어라
    $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //자신을 제외한 모든 서브를 닫아라
      for(var i=0; i<arrcount; i++) onoff[i]=false; //모든 배열값을 false
      onoff[ind]=true;  //자신의 대한 배열만 true로 변경
        
      $('.depth1 .icon').html('<span class="material-symbols-outlined">keyboard_arrow_down</span>');   //모든 메뉴가 닫혀있다.
      $(this).find('.icon').html('<span class="material-symbols-outlined">keyboard_arrow_up</span>');   //모든 메뉴가 열려있다.
        
    }else{ //각각의 1depth메뉴의 서브가 열려있냐??
      $(this).parents('.depth1').find('ul').slideUp('fast'); //지 서브를 닫아라~~
      onoff[ind]=false;  // true->false 
        
      $(this).find('.icon').html('<span class="material-symbols-outlined">keyboard_arrow_down</span>');     
    }
}); 

//header 배경색상 스크롤 처리 + top메뉴 나타나기
var vh=$('.visual').height();  //비주얼의 높이
var hh=$('#headerArea').height(); //헤더의 높이

$(window).on('scroll',function(){//스크롤의 거리가 발생하면
  var scroll = $(window).scrollTop(); //스크롤의 거리

  if(scroll>vh-hh){          //스크롤이 비주얼 보다 아래로 내려올때
    $('#headerArea').css('background','rgba(255,255,255,1').css('border-bottom','1px solid #eee');
    $('#footerArea .top_move').fadeIn('fast')
  }else{
    $('#headerArea').css('background','rgba(255,255,255,.8').css('border-bottom','none');
    $('#footerArea .top_move').fadeOut('fast')
  }
});

//top버튼 클릭시 상단으로 부드럽게 이동
$('.top_move').click(function(e){
  e.preventDefault();
  //상단으로 스르륵 이동
  $('html,body').stop().animate({'scrollTop':0},700);
})
//nav 색상변경
$('#headerArea #gnb li h3 a').on('click', function () {
    $('#headerArea #gnb li h3 a').not(this).removeClass('active');
    $(this).toggleClass('active');
});

//햄버거 검색창
   $('.mobile_search #mobile_btn').click(function(){
      var pname = $('#mobile_pro_name').val();  //베이스
      if(pname){  //검색어를 입력했으면...
        location.href = './sub2_1.html?pname='+  pname;
      }
     else{   //검색어를 입력하지 않았다면...
        alert('검색어를 입력하세요');
       }
   });
   // 엔터로 검색
    $('#mobile_pro_name').keydown(function(e){
        if(e.key === 'Enter'){
            $('#mobile_btn').click();
        }
    });
  // 햄버거 메뉴를 열 때 검색창 초기화
    $(window).on('pageshow', function(){
    $('#mobile_pro_name').val('');
    });

  //  $('#headerArea .search_btn').click(function(e){
  //       e.preventDefault();
  //       $('.search_modal .modal_box').fadeIn('fast');
  //       $('.search_modal .search_pop').fadeIn('slow');
  //  });

  //   $('.search_modal .modal_box').click(function(){
  //       $(this).fadeOut('fast');
  //       $('.search_modal .search_pop').fadeOut('fast');

  //  });

  //  $('.recom_box .recom dl dd a').click(function(e){
  //      e.preventDefault();
  //      var keyword = $(this).text();
  //      //console.log(keyword);
  //      $('#pro_name').val(keyword);
  //  });



//footer family site
	$('.select .arrow').toggle(function(){     //홀수번째 클릭시 
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){       //짝수번째 클릭시
        $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

	//tab키 처리
	  $('.select .arrow').on('focus', function () {  //arrow <a>태그가 포커스를 받으면
              $('.select .aList').fadeIn('slow');	 //리스트를 열어라
			  $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
       });
       $('.select .aList li:last a').on('blur', function () {  //가장 마지막에 있는 리스트<a>태그가 포커스를 잃으면 
              $('.select .aList').fadeOut('fast');      //메뉴를 닫아라
			  $('.select .arrow span').html('<i class="fa-solid fa-chevron-up"></i>');	
       });
