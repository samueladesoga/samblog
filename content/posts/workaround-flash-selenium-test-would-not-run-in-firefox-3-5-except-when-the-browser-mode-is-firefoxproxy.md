+++
date = "2009-11-23 12:04:00"
title = "Workaround: Flash selenium test would not run in firefox 3.5 except when the browser mode is *firefoxProxy"
draft = "false"
categories = ["Technical"]
tags = ["firefox", "flash selenium", "selenium", "firefox 3.5", "flash", "non-NPObject"]
author = "samueladesoga"
+++

I looked into <a href="http://code.google.com/p/flash-selenium/">flash selenium</a> a few weeks back and  i thought it was a great way for me to test certain part of the apps i have been ignoring for some time.<br /><br />However after knocking up a few test i discovered that my test would not run in my version of firefox (3.5). I got this error:<br /><br /><blockquote> INFO - Got result: ERROR: Threw an exception: NPMethod called on non-NPObject wrapped JSObject! on session 471c65508e46457fa43f4deb873d0592</blockquote>Then i read in some <a href="http://code.google.com/p/flash-selenium/issues/detail?id=27">issue</a> raised in the flash selenium site that flash selenium would only work in firefox 3.0 and it worked fine in IE for me.<br /><br />Today while i was investigating another <a href="http://samadesoga.blogspot.com/2009/11/selenium-failed-to-start-browser-in.html">issue</a>, i decided to try running the flashSelenium test  in the "*firefoxproxy" mode and my tests ran succcessfully.<br /><br />I am sure this workaround would be welcome by people facing this issue as well, please leave a comment if this is any help.<br /><br />Thanks<br /><br /><br /><blockquote><br /><br /></blockquote>

