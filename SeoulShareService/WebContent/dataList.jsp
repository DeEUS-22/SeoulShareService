<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="http://localhost:9000/SeoulShareService/js/data.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<div class="container">
	<h4 style="text-align: center; padding: 50px 0">JSON Data List</h4>
	<table class="table table-striped" id="member_table">
		<thead>
			<tr>
				<th>No</th>
				<th>대여소 ID</th>
				<th>주소1</th>
				<th>주소2</th>
				<th>위도</th>
				<th>경도</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>
</div>
</body>
</html>