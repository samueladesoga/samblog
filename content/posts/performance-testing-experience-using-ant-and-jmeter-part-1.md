+++
date = "2012-02-01 15:18:59"
title = "Performance Testing experience using Ant and Jmeter - Part 1"
draft = "false"
categories = ["Software Testing"]
tags = ["performance testing", "testing tool", "ant", "Jmeter", "teamcity"]
author = "samueladesoga"
+++

<a href="http://jmeter.apache.org/" target="_blank">Jmeter</a> is a well known open source performance/load testing tool and to be fair it does a lot of stuff really well. 
if you wants to do some quick performance testing without a whole lots of infrastructure around it then it is great.

I started out my task with jmeter with some objectives:


	<li> A tool that i could integrate into a CI tool such as teamcity</li>
	<li> Meaningful graphs that could be easily interpreted by any one in the team</li>
	<li> Able to integrate the graphs into teamcity</li>	
	<li> Able to monitor the performance of the website under test.</li>


After doing an initial round of tests, i didnt like the graphs which were being produced by jmeter and i search for plug-ins to enable me plot better graphs.
I came across <a href="http://code.google.com/p/jmeter-plugins/" target="_blank">jmeter-plugins</a> which is an awesome collection of jmeter plugins. Instructions to install can be found on this <a href="http://code.google.com/p/jmeter-plugins/wiki/PluginInstall" target="_blank">page</a>. 
 
Whilst, there are lots of usefuil graphs bundled within this plugin, i found the following graphs to be most useful

	<li><a href="http://code.google.com/p/jmeter-plugins/wiki/ActiveThreadsOverTime" target="_blank">Active Thread Over Time</a></li>

 
 	<li><a href="http://code.google.com/p/jmeter-plugins/wiki/ResponseTimesOverTime" target="_blank">Response Times Over Time</a></li>
 
	<li><a href="http://code.google.com/p/jmeter-plugins/wiki/ResponseTimesVsThreads" target="_blank">Response Times versus Thread.</a></li>
 

I could easily put "Active Thread Over Time" and "Response Times Over Time" to get a complete picture of my performance results solely based on response times.
And that was good enough for me.

Also jmeter only allow you to specify a ramp up period and the maximum number of thread you want to execute your tests with. I desperately wanted to be able to specify a ramp down time as well and fortunately, the <a href="http://code.google.com/p/jmeter-plugins/wiki/UltimateThreadGroup" target="_blank">Ultimate Thread Group</a>  which ships with the jmeter-plugins  solves that problem for me as well.

Having jmeter-plugins installed along side with my installation of jmeter helped to get the best out of jmeter, and i was able to specify my load more realistically as well as having clear and better graphs.

See below.

<img src="http://samueladesoga.files.wordpress.com/2012/02/responsetimesovertime.png" alt="Response Time Over Time" /></br>
<img src="http://samueladesoga.files.wordpress.com/2012/02/threadsstateovertime.png" alt="Thread State Over Time" /></br>
<img src="http://samueladesoga.files.wordpress.com/2012/02/timesvsthreads.png" alt="Time Vs Thread" /></br>



In the next <a href="/post//2012/02/01/performance-testing-experience-using-ant-and-jmeter-part-2/">blog post</a>  i would discuss how i have integrated jmeter with ant, enabling me to run jmeter in command line


