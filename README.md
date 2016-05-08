# sulcata-web

## Description

<b>THIS PROJECT IS CURRENTLY UNDER CONSTRUCTION</b>

This repository is in a robot integration project, which is [SULCATA](http://github.com/bus710/sulcata). You need to set up SULCATA on your system before SULCATA-WEB    

The main goal of this repository is an easy web interface for users. For that, keyop buttons, 2D map, and image from kinect v2 will be shown on web browser.  

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

## Commentary
![images/rqt2.png](images/rqt2.png)

```
rostopic list
> /keyop/teleop
```

```
rostopic info /keyop/teleop
> Type: kobuki_msgs/KeyboardInput
> Publishers: None
> Subscribers: 
> * /keyop (http://x230:41315/)
```

```
rosmsg show kobuki_msgs/KeyboardInput
> uint8 KeyCode_Right=67
> uint8 KeyCode_Left=68
> uint8 KeyCode_Up=65
> uint8 KeyCode_Down=66
> uint8 KeyCode_Space=32
> uint8 KeyCode_Enable=101
> uint8 KeyCode_Disable=100
> uint8 pressedKey
```

```
rostopic echo /keyop/teleop
```

## Reference
[1] http://wiki.ros.org/Books/ROS_Robot_Programing   
[2] https://github.com/oroca/rosbook_kobuki  
[3] https://github.com/OpenKinect/libfreenect2  
[4] https://github.com/code-iai/iai_kinect2  
[5] http://wiki.ros.org/turtlebot  


