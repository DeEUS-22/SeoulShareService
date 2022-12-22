$( document ).ready( function(){
	
	var map = new kakao.maps.Map(document.getElementById('map'), 
		mapOption = { // 지도를 표시할 div
        center : new kakao.maps.LatLng(37.5666805,126.9784147), // 지도의 중심좌표 
        level : 8 // 지도의 확대 레벨 
    });
    
    // 마커 클러스터러를 생성합니다 
    var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 6 // 클러스터 할 최소 지도 레벨 
    });
 
    
    // 데이터를 가져오기 위해 jQuery를 사용합니다
    // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
    $.get("http://openapi.seoul.go.kr:8088/6b4f6975416d6f623735664456464f/json/bikeList/1/1000/", function(data) {
        // 데이터에서 좌표 값을 가지고 마커를 표시합니다
        // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
        var markers = $(data.rentBikeStatus.row).map(function(key, value) {
        	
        	switch(value.shared){
        		case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "10":
        			//마커 새로 넣기
            	    var imageSrc = 'http://localhost:9000/SeoulShareService/image/red.png', // 마커이미지의 주소입니다    
            	    imageSize = new kakao.maps.Size(30, 35), // 마커이미지의 크기입니다
            	    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            	      
            		// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            		var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            		    markerPosition = new kakao.maps.LatLng(value.stationLatitude, value.stationLongitude); // 마커가 표시될 위치입니다
            	    
            		return new kakao.maps.Marker({
            		    position: markerPosition, 
            		    image: markerImage // 마커이미지 설정 
            		});
            		break;
            	default:
            		return new kakao.maps.Marker({
            			position : new kakao.maps.LatLng(value.stationLatitude, value.stationLongitude)
            		});
        	}
        	
        	/*if(value.shared==1){
        		return new kakao.maps.Marker({
        			position : new kakao.maps.LatLng(value.stationLatitude, value.stationLongitude)
        		});
        	}else{
        		
        		//마커 새로 넣기
        	    var imageSrc = 'http://localhost:9000/SeoulShareService/image/red.png', // 마커이미지의 주소입니다    
        	    imageSize = new kakao.maps.Size(30, 35), // 마커이미지의 크기입니다
        	    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        	      
        		// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        		var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        		    markerPosition = new kakao.maps.LatLng(value.stationLatitude, value.stationLongitude); // 마커가 표시될 위치입니다
        	    
        		return new kakao.maps.Marker({
        		    position: markerPosition, 
        		    image: markerImage // 마커이미지 설정 
        		});
        	}*/
            
        });

        // 클러스터러에 마커들을 추가합니다
        clusterer.addMarkers(markers);
    });
	
    // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    function zoomIn() {
        map.setLevel(map.getLevel() - 1);
    }

    // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    function zoomOut() {
        map.setLevel(map.getLevel() + 1);
    }
    
});