+++
date = "2009-01-31 10:31:00"
title = "Need to get a value of an attribute using selenium"
draft = "false"
categories = ["Software Testing"]
tags = [".Net", "DOM", "Microsoft", "selenium", "Web Application", "browser", "Internet Explorer", "Javascipt", "QA"]
author = "samueladesoga"
+++

>I was in this situation when i needed to get the value of an html attribute and i found the selenium.getattribute very handy .....<br /><br />Okay the scenario was such that there was an element which is collapsible on the page and the only attibute for that element that indictated the status of the collapsible element was the 'Class'. when the element was collapsed, the value of the class attribute was 'asleep' and when the element was expanded, the value of the class atttribute was 'awake'.<br /><br />The script used to determine the status of this element is<br />
```
selenium.GetAttribute("elementLocator@nameofAttribute");<br /><br />so if the id of my element is FundingClass and the attribute we are interested in is the 'Class'<br /><br />The selenium code will be<br />selenium.GetAttribute("FundingClass@Class");<br /><br />Hope this helps someone .....<br />
```

