# sulcata-web

## Description

<b>THIS PROJECT IS CURRENTLY UNDER CONSTRUCTION</b>

This repository is in a robot integration project, which is [SULCATA](http://github.com/bus710/sulcata). You need to set up SULCATA on your system before SULCATA-WEB. The main goal of this repository is an easy web interface for users. For that, keyop buttons, 2D map, and image from kinect v2 will be shown on web browser.  

Users can:  
- control kobuki via web interface.
- monitor 2D map on your web browser.
- watch video streaming on your web browser.

## Maintainer
- [SJ Kim](http://bus710.net) <<bus710@gmail.com>>

## Table of contents
- [Description](#description)
- [Requirement](#requirement)
- [Installation](#installation)
- [Launch](#launch)
- [Commentary](#commentary)
- [Reference](#reference)

## Requirement
The requirement is same as SULCATA.

## Installation
```
cd ~/Download
git clone http://github.com/bus710/sulcata-web
cd sulcata-web/web-server
npm install
```

## Launch
```
cd ~/Download/sulcata-web
roslaunch rosbridge_server rosbridge_websocket.launch

# in a new terminal
cd web-server
npm start
```

After above steps, you can access your robot via web browser.  
![images/result.png](images/result.png)

## Commentary
As you can see, you can trace/control topics by using rqt so that you also can find the correct topic for your web interface. In this case, it is <b>/mobile_base/commands/velocity</b>. You can find the spot to change the topic from <b>public/javascript/client.js</b>. Another important file is <b>build/keyboardteleop.js</b>. You should check your keycode, and apply to the file to adjust switch-case section.   
![images/rqt.png](images/rqt.png)
![images/rqt2.png](images/rqt2.png)


## Reference
[1] http://wiki.ros.org/Books/ROS_Robot_Programing   
[2] https://github.com/oroca/rosbook_kobuki  
[3] http://wiki.ros.org/kobuki 
[4] https://github.com/GT-RAIL/keyboardteleopjs


