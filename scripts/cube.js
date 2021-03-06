$(function() {
	var cube = $('#cube');
	$.jmpress("initStep", function(step, eventData) {
		eventData.stepData.up = eventData.data.up;
		eventData.stepData.down = eventData.data.down;
	});
	$.jmpress("register", "up", function() {
		var stepData = cube.jmpress("active").data("stepData");
		if(stepData.up)
			cube.jmpress("select", stepData.up);
	});
	$.jmpress("register", "down", function() {
		var stepData = cube.jmpress("active").data("stepData");
		if(stepData.down)
			cube.jmpress("select", stepData.down);
	});
	
	cube.jmpress({
		viewPort: {
			width: 2000,
			height: 2000
		},
		keyboard: {
			keys: {
				38: "up",
				40: "down"
			}
		}
	});
	cube.jmpress("route", ["#left", "#front"]);
	cube.jmpress("route", ["#top", "#right"], true);
	cube.jmpress("route", ["#top", "#left"], true, true);
	cube.jmpress("route", ["#bottom", "#left"], true, true);
	cube.jmpress("route", ["#bottom", "#right"], true);
});