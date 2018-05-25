+++
date = "2009-02-25 11:08:00"
title = "Waiting for Elements in an IFrame on a WebPage to Load"
draft = "false"
categories = ["Technical"]
tags = ["Test Automation", "Selenium"]
author = "samueladesoga"
+++

&gt;Waiting for  a page to load while writing selenium scripts is pretty straightforward using the<br />selenium.<span class="blsp-spelling-error" id="SPELLING_ERROR_0">WaitForPageToLoad</span>("timeout") timeout is time in millisecond.<br /><br />Sometimes using this command <span class="blsp-spelling-corrected" id="SPELLING_ERROR_1">doesn't</span> work, especially when you the whole page is not loaded or reloaded but a <span class="blsp-spelling-error" id="SPELLING_ERROR_2">popup</span> is loaded in a div on the page. In situation like this i would used the<br />selenium.<span class="blsp-spelling-error" id="SPELLING_ERROR_3">WaitForCondition</span>("<span class="blsp-spelling-error" id="SPELLING_ERROR_4">ScriptToReturnwhich ReturnTrue OrFalse</span>",  "timeout");<br />e.g. of scripts would be<br /><br />selenium.WaitForCondition(selenium.browserbot.get CurrentWindow().document<br />.getElement ById('idOfElement ToBelocated')!=null", "60000");       <br /><br />This has always worked well for well until today, i had a special case where the element that i needed to wait for it to load was inside an <span class="blsp-spelling-error" id="SPELLING_ERROR_5">IFrame</span>, which is loaded within a parent page. Using the Wait for condition as above kept timing out as the Javascript could not access the <span class="blsp-spelling-error" id="SPELLING_ERROR_6">IFrame</span>.<br /><br />what worked for me after several hours of trying is:<br /><br /><span style="font-weight:bold;">selenium.<span class="blsp-spelling-error" id="SPELLING_ERROR_7">WaitForCondition</span>("selenium.browserbot.getCurrent Window()<br />.frames['Name Of IFrame'].document.get Element ById<br />'idOfElement ToBelocated')!= null", "60000");</span><br /><br />This brilliantly eliminated my nightmare .......<br /><br />Comments are welcome

