
var host = 'ws://192.168.0.5:9090';

/**
 *    * Setup all GUI elements when the page is loaded. 
 *       */

function init() {
	console.log("init: start")
	// Connecting to ROS.
	var ros = new ROSLIB.Ros({
		url : host
	});

	// ======================== //
	// part for map example
	var viewer = new ROS2D.Viewer({
		divID  : 'nav',
		width  : 750,
		height : 800
	});

	var nav = NAV2D.OccupancyGridClientNav({
		ros : ros,
	  rootObject : viewer.scene,
		viewer : viewer,
		serverName : '/pr2_move_base' // <======= 
	});

	// ========================= //
	// part for keyop example
	// Initialize the teleop.
	var teleop = new KEYBOARDTELEOP.Teleop({
		ros : ros,
			topic : '/mobile_base/commands/velocity'
	});

	// Create a UI slider using JQuery UI.
	$('#speed-slider').slider({
		range : 'min',
		min : 0,
		max : 100,
		value : 90,
		slide : function(event, ui) {
			// Change the speed label.
			$('#speed-label').html('Speed: ' + ui.value + '%');
			// Scale the speed.
			teleop.scale = (ui.value / 100.0);
		}
	});

	// Set the initial speed .
	$('#speed-label').html('Speed: ' + ($('#speed-slider').slider('value')) + '%');
	teleop.scale = ($('#speed-slider').slider('value') / 100.0);

	console.log("init: end")
}
