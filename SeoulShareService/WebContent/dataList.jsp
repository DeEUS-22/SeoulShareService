<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>서울시 공공자전거 실시간 대여정보</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="http://localhost:9000/SeoulShareService/js/data.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<body>
<div class="container">
	<h1 style="text-align: center; padding: 50px 0">서울시 공공자전거 실시간 대여정보</h1>
	<a href="http://localhost:9000/SeoulShareService/index.jsp">
	<button type="button" class="btn btn-secondary" style="float:right;">
		이전으로
	</button></a><br><br>
	<table class="table table-hover table-bordered table-striped text-center" id="member_table">
		<thead>
			<tr>
				<th>NO</th>
				<th>거치대개수</th>
				<th>대여소이름</th>
				<th>자전거주차수</th>
				<th>거치율(%)</th>
				<th>대여소ID</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>
</div>
</body>
</html>