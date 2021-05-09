<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link type="text/css" rel="stylesheet" href="./style/style.css">
<link rel="stylesheet"
	href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet"
	href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
<title>menu-list-customer-notification</title>
</head>

<body>
	<input type="hidden" id="page" value="customer">
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<span class="mdl-layout-title">truYum</span> <img
					class="mdl-layout-icon logo" src="images/truyum-logo-light.png"></img>
				<div class="mdl-layout-spacer"></div>
				<nav class="mdl-navigation">
					<a class="mdl-navigation__link" href="/show-menu-list-admin">Menu</a> <a
						class="mdl-navigation__link" href="/cart">Cart</a>
				</nav>
			</div>
		</header>
		<div class="mdl-layout__drawer">
			<span class="mdl-layout-title">Select Role</span>
			<nav class="mdl-navigation">
				<a class="mdl-navigation__link" href="/show-menu-list-admin">Admin</a>
				<a class="mdl-navigation__link" href="/show-menu-list-customer">Customer</a>
			</nav>
		</div>
		<main class="mdl-layout__content">
			<div class="page-content">
				<div class="mdl-grid">
					<div class="mdl-cell mdl-cell--3-col"></div>
					<div class="mdl-cell--6-col">
						<table class="mdl-data-table mdl-js-data-table">
							<caption>
								<h3>Menu Items</h3>
								<p class="notif">Item Added to Cart Successfully</p>
							</caption>
							<br>
							<br>
							<thead>
								<tr>
									<th style="text-align: left">Name</th>
									<th style="text-align: center">Free Delivery</th>
									<th style="text-align: right">Price</th>
									<th style="text-align: center">Category</th>
									<th style="text-align: center">Action</th>
								</tr>
							</thead>
							<tbody>
								<c:forEach items="${menuItemList}" var="menuItem">
								<tr>
									<td style="text-align: left">${menuItem.name}</td>
									<td style="text-align: center">${menuItem.freeDelivery}</td>
									<td style="text-align: center">Rs. <fmt:formatNumber
											minFractionDigits="2" value="${menuItem.price}" type="number" /></td>
									<td style="text-align: center">${menuItem.category}</td>
									<td><a href="/add-to-cart?menuItemId=${menuItem.id}">Add
											to Cart</a></td>
									</tr>
								</c:forEach>
							</tbody>
						</table>
					</div>
					<div class="mdl-cell mdl-cell--3-col"></div>
				</div>
			</div>
		</main>
		<footer class="mdl-mini-footer">
			<div class="mdl-mini-footer__left-section">
				<div class="mdl-logo">Copyright &copy; 2019</div>
			</div>
		</footer>
		<script src="js/script.js"></script>
	</div>
</body>

</html>
