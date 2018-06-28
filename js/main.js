$("#rating").on("change", addFilm);

function addFilm() {

	var filmName = $("#film")[0].value;
	var stars = $("#rating")[0].options[rating.options.selectedIndex].value;

	if(filmName) {
		$("#rating-list").append("<div class='col-6 py-5'><h3 class='display-4'>" + filmName + "</h3></div>");
		$("#rating-list").append("<div class='col-6 py-5'><h3 class='display-4'>" + stars + " stars</h3></div>");
	}

};