
var legend = document.querySelector(".booking-form-show-btn");
var form = document.querySelector(".booking-form");

legend.addEventListener("click", function(event) {
	event.preventDefault();
	form.classList.toggle("shown-form");
});

// window.addEventListener("load", function() {
// 	form.classList.add("hidden-form");
// });
