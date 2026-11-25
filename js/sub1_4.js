var cnt=$('.tabs .tab_menu a').size();  //탭메뉴 개수 ***

function tab_call(){
    $('.tabs .contlist').hide();
    $('.tabs .contlist:eq(0)').fadeIn('slow'); // 첫번째 탭 내용만 열어라

            //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tabs .tab').click(function(e){  //각각의 탭메뉴를 클릭하면
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
        var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind); ind=0 1 2 

        $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
        $(".tabs .contlist:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
        $(".tabs .tab").removeClass('active'); //모든 탭메뉴를 비활성화
        $(this).addClass('active'); // 클릭한 해당 탭메뉴만 활성화
    });
}

setTimeout(tab_call,500); //2초동안 지도를 그릴 시간을 준다


// 지도보여주기
 window.onload = function() {
    var container = document.getElementById('map');
    var options = {
        center: new daum.maps.LatLng(37.49524038265487, 127.0366839441986),
        level: 2
    };

    var map = new daum.maps.Map(container, options);
    
    var mapTypeControl = new daum.maps.MapTypeControl();
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition  = new daum.maps.LatLng(37.49524038265487, 127.0366839441986); 
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    
    var overlay = new daum.maps.CustomOverlay({
        map: map,
        position: marker.getPosition()       
    });
     
    //두번째 맵
     
      var container2 = document.getElementById('map2');
    var options2 = {
        center: new daum.maps.LatLng(37.3968064, 126.9748051),
        level: 2
    };

    var map2 = new daum.maps.Map(container2, options2);
    
    var mapTypeControl2 = new daum.maps.MapTypeControl();
    map2.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPRIGHT);

    var zoomControl2 = new daum.maps.ZoomControl();
    map2.addControl(zoomControl2, daum.maps.ControlPosition.RIGHT);
    
    var markerPosition2  = new daum.maps.LatLng(37.3968064, 126.9748051); 
    var marker2 = new daum.maps.Marker({
        position: markerPosition2
    });

    marker2.setMap(map2);
    
    var overlay2 = new daum.maps.CustomOverlay({
        map: map2,
        position: marker2.getPosition()       
    }); 
     
     
    // 세번째 맵
     
     var container3 = document.getElementById('map3');
   var options3 = {
       center: new daum.maps.LatLng(37.2985880, 126.7774950),
       level: 2
   };

   var map3 = new daum.maps.Map(container3, options3);
   
   var mapTypeControl3 = new daum.maps.MapTypeControl();
   map3.addControl(mapTypeControl3, daum.maps.ControlPosition.TOPRIGHT);

   var zoomControl3 = new daum.maps.ZoomControl();
   map3.addControl(zoomControl3, daum.maps.ControlPosition.RIGHT);
   
   var markerPosition3  = new daum.maps.LatLng(37.2985880, 126.7774950); 
   var marker3 = new daum.maps.Marker({
       position: markerPosition3
   });

   marker3.setMap(map3);
   
   var overlay3 = new daum.maps.CustomOverlay({
       map: map3,
       position: marker3.getPosition()       
   }); 
}