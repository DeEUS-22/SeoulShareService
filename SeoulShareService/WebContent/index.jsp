<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>서울시 공공자전거 실시간 대여정보(Open API) 시각화 프로젝트</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=69d02d054bc554d77e8ab840092a3b61&libraries=services,clusterer,drawing"></script>
<script src="http://localhost:9000/SeoulShareService/js/map.js"></script>
<link rel="stylesheet" type="text/css" href="http://localhost:9000/SeoulShareService/css/map.css">
</head>
<body>
<div class="all">
	<h2>서울시 공공자전거 실시간 대여정보(Open API) 시각화 프로젝트</h2>
	
	<!-- 지도 -->
	<div class="map_wrap">
	    <div class="map" id="map"></div> 
	    
	    <!-- 지도 확대, 축소 컨트롤 div 입니다 -->
	    <div class="custom_zoomcontrol radius_border"> 
	        <span onclick="zoomIn()"><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대"></span>  
	        <span onclick="zoomOut()"><img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소"></span>
	    </div>
	</div>
	
	<!-- 표 -->
	<a href="data.do?command=list"><button type="button" class="btn btn_outline">표로 보기</button></a>
</div>
</body>
</html>