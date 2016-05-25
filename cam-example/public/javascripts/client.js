
var Sulcata = function( id ){
	this.id = id;
	this.hostIp = location.host.split(":")[0];
	this.host = 'ws://' + this.hostIp + ':9090';
	this.ros = new ROSLIB.Ros({
		url : this.host
	});
}

// ==========================================
// keyOp method
Sulcata.prototype.keyOp = function(){
	// Initialize the teleop.
	var teleop = new KEYBOARDTELEOP.Teleop({
		ros : this.ros,
		topic : '/mobile_base/commands/velocity' // <=======
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

// ==========================================
// mapDraw method
Sulcata.prototype.mapDraw = function(){

	$('#nav').empty();

	// part for map example
	var mapViewer = new ROS2D.Viewer({
		divID  : 'nav',
		width  : 320,
		height : 240
	});

	var navi;
	navi = NAV2D.OccupancyGridClientNav({
		ros : this.ros,
		rootObject : mapViewer.scene,
		viewer 		 : mapViewer,
		serverName : '/pr2_move_base' // <======= 
	});
}

// ==========================================
// camDraw method
Sulcata.prototype.camDraw = function(){
	var camViewer = new MJPEGCANVAS.Viewer({
		divID : 'mjpeg',
		host : this.hostIp,
		width : 320,
		height : 240,
		//topic : '/wide_stereo/left/image_color' // <=======
		topic : '/kinect2/sd/image_color_rect'
	});
}

// ==========================================
function init() {
	var sulcata = new Sulcata('test');

	sulcata.keyOp();
	sulcata.camDraw();
	sulcata.mapDraw();
	setInterval(function(){ sulcata.mapDraw() }, 3000);
}
