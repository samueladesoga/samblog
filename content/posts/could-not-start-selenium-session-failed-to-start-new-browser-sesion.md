+++
date = "2011-04-26 08:17:44"
title = "could not start Selenium session: Failed to start new browser sesion"
draft = "false"
categories = ["Technical"]
tags = ["Test Automation", "Selenium"]
author = "samueladesoga"
+++

I have heard people have problems with starting firefox3 while using selenium1.0.x on windows7.

The exact error message is similar to this:
<blockquote>java.lang.RuntimeException: Could not start Selenium session: Failed to start new browser session: java.lang.RuntimeException: Firefox 3 could not be found in the path!

Please add the directory containing ''firefox.exe'' to your PATH environment

variable, or explicitly specify a path to Firefox 3 like this:

*firefox3c:\blah\firefox.exe

at com.thoughtworks.selenium.DefaultSelenium.start(DefaultSelenium.java:89)</blockquote>
I attempted to fix this by putting the path in the environment variable of the windows7 machine and it still did not work.

I had put in something like:

c:\Program Files\Mozilla

I spent some time trying different things until i tried

c:\Program Files\Mozilla\

and Yes!!! I could now start running the selenium tests.

