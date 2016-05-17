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
- [Keyop Example](#keyop-example)
- [Map Example](#map-example)
- [RGBD Example](#rgbd-example)
- [Commentary](#commentary)
- [Reference](#reference)

## Requirement
The requirement is same as SULCATA.

## Keyop Example
This example is based on [keyboard-teleop-js](http://wiki.ros.org/keyboardteleopjs/Tutorials/CreatingABasicTeleopWidgetWithSpeedControl). You can see a slide bar on your web page and type your keyboard to convey key siganl to roscore through ros-bridge.

### Installation
In order to install the required node stack, you can download the code from this repository.
```
cd ~/Download
git clone http://github.com/bus710/sulcata-web
cd sulcata-web/keyop-example
npm install
```

### Launch
```
cd ~/Download/sulcata-web/scripts
./06_rosbridge

# in a new terminal
cd sulcata-web/keyop-example
npm start
```

### Access
After above steps, you can access your robot via web browser.  
![images/result.png](images/result.png)

Now you can type keys on your web browser such as up, down, left, right keys to control your Turtle-bot/Kobuki.

## Map Example
### Installation
### Launch
### Access  

## RGBD Example
### Installation
### Launch
### Access

## Commentary
### How to build a mixture with ROS, node.js, and roslibjs examples?
Once you run express-generator in your project's root dierectory, the command makes a typical structure with jade(html), css, and js files as below
```
keyop-example
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   │   └── client.js
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```
If you are an experienced node.js developer, you are familiar with the structure. Even if you are not, it is simple as other web frameworks. In order to merge roslibjs and node.js, I divided the provided HTML code from Robotwebtools into three files such as layout.jade, index.jade, and client.js with below rules.
- The html tags between head should be inserted to layout.jade.
- The js source code should be inserted to client.js
- The html tags between body should be inserted to index.jade.

In addition to apply roslibjs, you should copy the library files into public/build directiry then the sturucture should be same as below.
```
keyop-example
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── build
│   │   ├── keyboardteleop.js
│   │   └── keyboardteleop.min.js
│   ├── images
│   ├── javascripts
│   │   └── client.js
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

### How to find a specific topic?
If you have a different robot system, you should check your topics to adjust this stacks for your system. If you check the client.js file, you might be noticed that there is a variable, which is "teleop". It is a javascript object and it contains the location of a certain topic.     

As below screenshots, you can trace/control topics by using rqt so that you also can find the correct topic for your web interface. In this case, it is <b>/mobile_base/commands/velocity</b>. You can find the spot to change the topic from <b>public/javascript/client.js</b>. Another important file is <b>build/keyboardteleop.js</b>. You should check your keycode, and apply to the file to adjust the switch-case section in the file.   
![images/rqt.png](images/rqt.png)
![images/rqt2.png](images/rqt2.png)


## Reference
[1] http://wiki.ros.org/Books/ROS_Robot_Programing   
[2] https://github.com/oroca/rosbook_kobuki  
[3] http://wiki.ros.org/kobuki   
[4] https://github.com/GT-RAIL/keyboardteleopjs


