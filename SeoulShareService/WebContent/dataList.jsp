<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="http://localhost:9000/SeoulShareService/js/data.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<body>
<div class="container">
		<h4 style="text-align: center; padding: 50px 0">서울시 공공자전거 실시간 대여정보</h4>
		<div class="table-responsive-xl">
			<table class="table table-bordered table-striped text-center" id="member_table">
				<thead>
					<tr>
						<th>#</th>
						<th>rackTotCnt</th>
						<th>stationName</th>
						<th>parkingBikeTotCnt</th>
						<th>shared</th>
						<th>stationId</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
		
	</div>
</body>
</html>