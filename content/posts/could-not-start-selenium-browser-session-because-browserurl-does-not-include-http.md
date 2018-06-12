+++
date = "2011-04-26 08:27:15"
title = "Could not start selenium browser session because browserurl does not include \"http\""
draft = "false"
categories = ["Technical"]
tags = ["Test Automation", "Selenium"]
author = "samueladesoga"
image = "images/blog/blog-1.jpg"
+++

I was helping a friend out last weekend, and he was getting an error

java.lang.RuntimeException: Could not start Selenium session: Failed to start new browser session: Error while launching browser

at com.thoughtworks.selenium.DefaultSelenium.start(DefaultSelenium.java:89)

This was strange because looking at his code everything seem to be properly set up, i did some debugging and I discovered that the session in the selenium object was null, this suggested that we weren't initializing the selenium object properly.

In the constructor code, my friend had put

DefaultSelenium selenium = new DefaultSelenium("localhost", 4444, "*firefox", "www.yahoo.com");

That looked okay to me until i saw that the browserurl was missing the "http://" part.

So i changed this to

DefaultSelenium selenium = new DefaultSelenium("localhost", 4444, "*firefox", "http://www.yahoo.com");

And we had the test running again.

I am not sure if this is a selenium bug or if it is a user error, i have always specified "http://" when i initialise my tests. Anyway there you go .......

