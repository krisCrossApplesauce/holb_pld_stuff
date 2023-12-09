
function scrollThroughTrees(event) {
	if (event.deltaY > 0) {
		$("#tree-0").attr("id", "1");
		$("#tree-1").attr("id", "2");
		$("#tree-2").attr("id", "3");
		$("#tree-3").attr("id", "0");

		$("#0").attr("class", "tree z-0 m-auto");
		$("#0").hide();
		$("#1").attr("class", "tree z-1 size-1 m-auto");
		$("#1").show();
		$("#2").attr("class", "tree z-2 size-2 m-auto");
		$("#3").attr("class", "tree z-3 m-auto");

		$("#0").attr("id", "tree-0");
		$("#1").attr("id", "tree-1");
		$("#2").attr("id", "tree-2");
		$("#3").attr("id", "tree-3");
	}
	else {
		console.log("scrolled down");
	}

	console.log("function has been called");
}

$(document).ready(function() {
	$("#tree-0").hide();
});
