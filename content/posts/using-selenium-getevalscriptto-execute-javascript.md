+++
date = "2008-12-23 08:55:00"
title = "Using selenium.GetEval(script)to execute Javascript"
draft = "false"
categories = ["Software Testing"]
tags = ["DOM", "Javascripts", "QA", "selenium", "Web Application"]
author = "samueladesoga"
+++

&gt;The task at hand was to navigate through the DOM of a particular webpage and check the<br />style.display attribute of an object or element if you prefer. There are two elements on this page that displayed either success or failure messages.(msgSuccess and msgFailed)<br />For perfomance reasons, if previously a successful message was displayed and subsequently the you get a failure message, what the developers of the page did was to amend the style.display attribute.<br /><br />&lt;span style="display: none;" id="msgSuccess" class="MyMsgSuccess"&gt;<br /><br />The HTML code above implies the element 'msgSuccess' would not be displayed<br /><br />&lt;span style="" id="msgSuccess" class="MyMsgSuccess"&gt;<br /><br />In the second case, the msg success would be displayed ....<br /><br />The problem i encountered was, sometimes i would have<br /><br />&lt; span style="display: none;" id="msgSuccess" class="MyMsgSuccess" &gt; Operation Successful &lt;/span &gt;<br /><br />If i do a selenium.GetText("msgSuccess"), i get the text returned even though the style.display is set to none. Hence the need for the Selenium.GetEval to check the value of the style.display attribute as that seem as a true test for the web page<br /><br />I have done:<br /><br />const string script = "document.getElementById(\"msgSuccess\").style.display";<br />string evalResult = selenium.GetEval(script);<br /><br />The above script failed as selenium was executing the javascript in the selenium console and not on the Application under test (AUT)<br />and searching the internet got me doing:<br /><br />const string script = "selenium.browserbot.getCurrentWindow().document.getElementById(\"msgSuccess\").style.display";<br />string evalResult = selenium.GetEval(script);<br /><br />This way i got the javascript to be run on the Application under test ....

