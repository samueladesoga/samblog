+++
date = "2008-11-09 01:48:00"
title = "Internet Explorer doesnt handle xpath to locate images exceptionally well"
draft = "false"
categories = ["Technical"]
tags = ["Test Automation"]
author = "samueladesoga"
+++

So i have been doing a lot of selenium and the website i am trying to automate test for<br />doesnt have a lot of element with id, name, or any other HTML attributes that makes selenium testing a bit easier.<br /><br />So i have been using of xpath, my intent was to click on an image and i have used the src attribute of the image element.<br /><br />so my original command,<br /><br />selenium.click ("xpath=//img[@src="location/of/image/on/disc"]");<br /><br />This works excellently on firefox but on IE, i keep getting the error "Element not found!"<br /><br />so after several tries, this definitely work on both IE and firefox ......<br /><br />selenium.click ("xpath=//img[@contains(@href, "google.com")]");<br />The second parameter of the  xpath "contains" a segment of the link that the image element points to.Note that the img element has a href and that is why i am able to use the "contains" method of the xpath to locate the img.

