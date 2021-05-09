<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html lang="en" xmlns:th="https://www.thymeleaf.org">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link type="text/css" rel="stylesheet" href="./style/style.css">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
<link rel="stylesheet"
	href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet"
	href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
<script type="text/javascript" src="./js/script.js"></script>
<title>Edit Menu Item</title>
</head>

<body>
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		<header class="mdl-layout__header">
			<div class="mdl-layout__header-row">
				<span class="mdl-layout-title">truYum</span> <img
					class="mdl-layout-icon logo" src="images/truyum-logo-light.png"></img>
				<div class="mdl-layout-spacer"></div>
				<nav class="mdl-navigation">
					<a class="mdl-navigation__link" href="/show-menu-list-admin">Menu</a>
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
						<caption>
							<h3>Edit Menu Item</h3>
						</caption>
						<form:form name="menuItemForm" method="post"
							action="/edit-menu-item" modelAttribute="menuItem" onsubmit="return validateForm()">
							<c:set var="menuItem" value="${menuItem}"></c:set>
							<form:hidden path="id"/>
							<div class="form-group">
								<form:label path="name">Name</form:label>
								<form:input id="name" type="text" class="form-control" path="name"/>
							</div>
							<div class="form-row">
								<div class="form-group col-md-2">
									<form:label path="price">Price (Rs.)</form:label>
									<form:input id="price" type="text" class="form-control" path="price"/>
								</div>
								<div class="form-group col-md-2" style="margin: 0px 20px;">
									<form:label path="active">Active</form:label>
									<br>
									<div style="padding: 5px;">
										<form:radiobutton value="Yes" path="active" />
										<form:label path="active">Yes</form:label>
										&nbsp;&nbsp;
										<form:radiobutton value="No" path="active" />
										<form:label path="active">No</form:label>
									</div>
								</div>
								<div class="form-group col-md-3">
									<form:label for="dateOfLaunch" path="dateOfLaunch">Date of Launch</form:label>
									<form:input type="date" class="form-control" id="dateOfLaunch"
										path="dateOfLaunch"/>
								</div>
								<div class="form-group col-md-3">
									<form:label for="category" path="category">Category</form:label>
									<form:select id="category" class="form-control" path="category">
										<form:option value="Starters" name="category" path="category">Starters</form:option>
										<form:option value="Main Course" name="category"
											path="category">Main Course</form:option>
										<form:option value="Dessert" name="category" path="category">Dessert</form:option>
										<form:option value="Drinks" name="category" path="category">Drinks</form:option>
									</form:select>
								</div>

							</div>
							<div class="form-group">
								<div class="form-check">
									<form:checkbox class="form-check-input" id="freeDelivery"
										name="freeDelivery" path="freeDelivery" value="Yes" />
										<form:label class="form-check-label" for="gridCheck" path="freeDelivery"> Free Delivery </form:label>
								</div>
							</div>
							<button
								class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
								type="submit" id="save">Save</button>
						</form:form>

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
	</div>
</body>

</html>
