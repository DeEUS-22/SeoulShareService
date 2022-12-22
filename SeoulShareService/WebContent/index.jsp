<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>마커 클러스터러에 클릭이벤트 추가하기</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=69d02d054bc554d77e8ab840092a3b61&libraries=clusterer"></script>
<script src="http://localhost:9000/SeoulShareService/js/map.js"></script>
</head>
<body>

<!-- 지도 -->
<div id="map" style="width:850px;height:500px;"></div>

<a href="data.do?command=list">표 형태로 보기를 원한다면 클릭해주세요.</a><br><br>

</body>
</html>