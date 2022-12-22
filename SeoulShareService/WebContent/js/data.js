$(document).ready(function() {
	
	//공공데이터
	$.ajax( {
		
		// ajax 옵션 설정
		url : "http://openapi.seoul.go.kr:8088/6b4f6975416d6f623735664456464f/json/bikeList/1/1000/",
		type : "GET", 
		dataType : "json", 
		
		// 요청이 성공시 진행할 내용
		success : function( data ) { 
		
			// 할 일 처리
			let api_data = "";
			$.each( data.rentBikeStatus.row, function( key, value ) {
				
					api_data += "<tr>";
					api_data += "<td>"+ key +"</td>";
					api_data += "<td>"+ value.rackTotCnt +"</td>";
					api_data += "<td>"+ value.stationName +"</td>";
					api_data += "<td>"+ value.parkingBikeTotCnt +"</td>";
					api_data += "<td>"+ value.shared +"</td>";
					api_data += "<td>"+ value.stationId +"</td>";
					api_data += "</tr>";
												
			} );
		
			// 페이지단에 붙이기
			$( '#member_table' ).append( api_data );
			
		}
		
	} );
	
});
