+++
date = "2010-02-24 11:55:00"
title = "selenium.open timeouts for strange reasons"
draft = "false"
categories = ["Technical"]
author = "samueladesoga"
+++

Have you ever been in situations when your selenium RC test times out after the selenium.open command, the page is loaded but selenium just tells you that it has timed out after 30000ms.<br /><br />I had same problem in Java today when i got the selenium RC 1.0.3 and i fixed the problem by setting the selenium timeout to be "0". so i have done<br /><br />@BeforeClass<br />   public void setUp(){<br />       selenium = new DefaultSelenium("localHost", 4444, "*iexplore", url);<br />       selenium.start();<br />    <span style="font-weight:bold;">   selenium.setTimeout("0");</span><br />   }<br /><br />and then i have used a waitForPageToLoad in each of the selenium methods that needs to wait - open, click .....<br /><br />       selenium.open(url);<br />       <span style="font-weight:bold;">selenium.waitForPageToLoad("5000");</span><br /><br />       selenium.click("btnG");<br />       <span style="font-weight:bold;">selenium.waitForPageToLoad("5000");</span><br /><br /><br />Hopefully you find this useful.

