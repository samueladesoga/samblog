+++
date = "2009-11-23 11:53:00"
title = "selenium failed to start browser in iexplore mode when selenium server is started dynamically in code"
draft = "false"
categories = ["Software Testing"]
tags = ["Java", "test", "iehta", "iexplore", "iexploreproxy", "selenium-server"]
author = "samueladesoga"
+++

&gt;In a <a href="http://samadesoga.blogspot.com/2009/11/start-selenium-server-dynamically.html">previous post</a>, i have written about how i have been starting/ stoping the selenium server dynamically. What i didnt mention was that i was not able to run my tests using Internet Explorer. I got this error

[sourcecode language="java"]

11:56:55.272 INFO - Command request: getNewBrowserSession[*iexplore, http://localhost:8080, ] on session null
11:56:55.272 INFO - creating new remote session
11:56:55.381 INFO - Allocated session 688eff769c8b4751b5fb9477bba213f3 for http://localhost:8080, launching...
11:56:55.397 ERROR - Failed to start new browser session, shutdown browser and clear all session data
java.lang.RuntimeException: java.io.FileNotFoundException: C:\DOCUME~1\SAdesoga\LOCALS~1\Temp\customProfileDir688eff769c8b4751b5fb9477bba213f3\core\RemoteRunner.html (The system cannot find the file specified)
at org.openqa.selenium.server.browserlaunchers.HTABrowserLauncher.createHTAFiles(HTABrowserLauncher.java:100)
at org.openqa.selenium.server.browserlaunchers.HTABrowserLauncher.launch(HTABrowserLauncher.java:60)
at org.openqa.selenium.server.browserlaunchers.HTABrowserLauncher.launchRemoteSession(HTABrowserLauncher.java:140)
at org.openqa.selenium.server.browserlaunchers.InternetExplorerLauncher.launchRemoteSession(InternetExplorerLauncher.java:77)
at org.openqa.selenium.server.BrowserSessionFactory.createNewRemoteSession(BrowserSessionFactory.java:357)
at org.openqa.selenium.server.BrowserSessionFactory.getNewBrowserSession(BrowserSessionFactory.java:122)
at org.openqa.selenium.server.BrowserSessionFactory.getNewBrowserSession(BrowserSessionFactory.java:84)
at org.openqa.selenium.server.SeleniumDriverResourceHandler.getNewBrowserSession(SeleniumDriverResourceHandler.java:712)
at org.openqa.selenium.server.SeleniumDriverResourceHandler.doCommand(SeleniumDriverResourceHandler.java:393)
at org.openqa.selenium.server.SeleniumDriverResourceHandler.handleCommandRequest(SeleniumDriverResourceHandler.java:364)
at org.openqa.selenium.server.SeleniumDriverResourceHandler.handle(SeleniumDriverResourceHandler.java:125)
at org.mortbay.http.HttpContext.handle(HttpContext.java:1530)
at org.mortbay.http.HttpContext.handle(HttpContext.java:1482)
at org.mortbay.http.HttpServer.service(HttpServer.java:909)
at org.mortbay.http.HttpConnection.service(HttpConnection.java:820)
at org.mortbay.http.HttpConnection.handleNext(HttpConnection.java:986)
at org.mortbay.http.HttpConnection.handle(HttpConnection.java:837)
at org.mortbay.http.SocketListener.handleConnection(SocketListener.java:245)
at org.mortbay.util.ThreadedServer.handle(ThreadedServer.java:357)
at org.mortbay.util.ThreadPool$PoolThread.run(ThreadPool.java:534)
Caused by: java.io.FileNotFoundException: C:\DOCUME~1\SAdesoga\LOCALS~1\Temp\customProfileDir688eff769c8b4751b5fb9477bba213f3\core\RemoteRunner.html (The system cannot find the file specified)
at java.io.FileInputStream.open(Native Method)
at java.io.FileInputStream.(Unknown Source)
at org.apache.tools.ant.types.resources.FileResource.getInputStream(FileResource.java:185)
at org.apache.tools.ant.util.ResourceUtils.copyResource(ResourceUtils.java:372)
at org.apache.tools.ant.util.FileUtils.copyFile(FileUtils.java:475)
at org.apache.tools.ant.util.FileUtils.copyFile(FileUtils.java:438)
at org.apache.tools.ant.util.FileUtils.copyFile(FileUtils.java:404)
at org.apache.tools.ant.util.FileUtils.copyFile(FileUtils.java:379)
at org.apache.tools.ant.util.FileUtils.copyFile(FileUtils.java:317)
at org.openqa.selenium.server.browserlaunchers.HTABrowserLauncher.createHTAFiles(HTABrowserLauncher.java:97)
... 19 more
[/sourcecode]

This points out that selenium is trying to start in the iehta mode, even though i have specified that it start in iexplore mode. Doing i quick search i discovered that there has been <a href="http://clearspace.openqa.org/message/49240">some work</a> to start up selenium in iehta even when iexplore is being specified. And the only way to get the original *iexplore is to try *iexploreproxy or piiexplore

So i changed my config file to start selenium using "*iexploreproxy" instead of "*iexplore" and voila i am able run my test on ie.

Hope this helps you too

