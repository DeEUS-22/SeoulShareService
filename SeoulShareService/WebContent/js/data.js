$(document).ready(function() {
	
	//공공데이터
	$.ajax( {
		
		// ajax 옵션 설정
		url : "http://openapi.seoul.go.kr:8088/6b4f6975416d6f623735664456464f/json/bikeStationMaster/1/5/",
		type : "GET", 
		dataType : "json", 
		
		// 요청이 성공시 진행할 내용
		success : function( data ) { 
		
			// 할 일 처리
			let api_data = "";
			$.each( data.bikeStationMaster.row, function( key, value ) {
				
					api_data += "<tr>";
					api_data += "<td>"+ key +"</td>";
					api_data += "<td>"+ value.LENDPLACE_ID +"</td>";
					api_data += "<td>"+ value.STATN_ADDR1 +"</td>";
					api_data += "<td>"+ value.STATN_ADDR2 +"</td>";
					api_data += "<td>"+ value.STATN_LAT +"</td>";
					api_data += "<td>"+ value.STATN_LNT +"</td>";
					api_data += "</tr>";
												
			} );
		
			// 페이지단에 붙이기
			$( '#member_table' ).append( api_data );
			
		}
		
	} );
	
});
