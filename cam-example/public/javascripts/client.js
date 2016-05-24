var host = 'ws://192.168.0.5:9090';

var Sulcata = function( id ){
	this.id = id;
	this.host = host;
	this.ros = new ROSLIB.Ros({
		url : this.host
	});
}

Sulcata.prototype.keyOp = function(){
	// Initialize the teleop.
	var teleop = new KEYBOARDTELEOP.Teleop({
		ros : this.ros,
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
}

Sulcata.prototype.mapDraw = function(){

	$('#nav').empty();

	// part for map example
	var viewer = new ROS2D.Viewer({
		divID  : 'nav',
		width  : 400,
		height : 300
	});

	var navi;
	navi = NAV2D.OccupancyGridClientNav({
		ros : this.ros,
		rootObject : viewer.scene,
		viewer 		 : viewer,
		serverName : '/pr2_move_base' // <======= 
	});
}

Sulcata.prototype.camDraw = function(){
	var viewer = new MJPEGCANVAS.Viewer({
		divID : 'mjpeg',
		host : '192.168.0.5',
		width : 320,
		height : 240,
		//topic : '/wide_stereo/left/image_color' // <=======
		topic : '/kinect2/sd/image_color_rect'
	});
}

function init() {
	var sulcata = new Sulcata('test');

	sulcata.keyOp();
	sulcata.mapDraw();
	setInterval(function(){ sulcata.mapDraw() }, 3000);
	sulcata.camDraw();
}
