// declare variables

// pulling inputs on html page

// function that takes variable 1 and variable 2 and adds them together
// function that takes variable 1 and variable 2 and multiplies them together
// function that takes variable 1 and variable 2 and divides one by the other
// function that takes variable 1 and variable 2 and subtracts one from the other

// Create separate sentences for each operation that provides the results. Like "When I add your first number, X, to the second number, Y, I get Z."

//You must use Functions and Jquery to make the sentence appear on a web page.
//You must use form inputs, variables, functions, and jQuery.

//Has to be dynamic so if you change the value of the variables, the webpage should show updated results automatically.


$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();


		var birthday = parseInt($("#birthday").val());
		var birthmonth = parseInt($("#birthmonth").val());

		$(".x").text(birthday);
		$(".y").text(birthmonth);

		var DayPlusMonth = addition(birthday, birthmonth);
		var DayMinusMonth = substract(birthday, birthmonth);
		var DayTimesMonth = multiply(birthday, birthmonth);
		var DayDivededMonth = divide(birthday, birthmonth);

		$("#addition .z").text(DayPlusMonth);
		$("#substract .z").text(DayMinusMonth);
		$("#multiply .z").text(DayTimesMonth);
		$("#divide .z").text(DayDivededMonth);

		$("#answer").val(poop);
		console.log(totals);

		$("#totals").text("This I don't understand " + totalbirthday + " And it's driving me crazy! " + totalmonth);

	});

	$("#button2").on("click", function (e) {
		e.preventDefault();

		var d = parseFloat($("#d").val());
		var e = parseFloat($("#e").val());
		var f = parseFloat($("#f").val());

		var poop = quadSolve(d, e, f);

		$("#answer2").val(anything);
	});
});

function addition(x, y) {
	var add = x + y;
	return add;
}

function subtraction(x, y) {
	var sub = x - y;
	return sub;
}

function multiply(x, y) {
	var mul = x * y;
	return mul;
}

function divide(x, y) {
	var div = x / y;
	return div;
}
