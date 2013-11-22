(document).ready(function() {
	$("#bc, #blurb-bc").hover(function() {
		$("#blurb, #blurb-bc, #arrow-bc").toggle();
	}, function() {
		$("#blurb, #blurb-bc, #arrow-bc").toggle();
	});

	$("#hr, #blurb-hr").hover(function() {
		$("#blurb, #blurb-hr, #arrow-hr").toggle();
	}, function() {
		$("#blurb, #blurb-hr, #arrow-hr").toggle();
	});
	
	$("#cf, #blurb-cf").hover(function() {
		$("#blurb, #blurb-cf, #arrow-cf").toggle();
	}, function() {
		$("#blurb, #blurb-cf, #arrow-cf").toggle();
	});

	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	
	var now = new Date();
	var day = days[now.getDay()];
	
	$("#dow").html(day);

});
