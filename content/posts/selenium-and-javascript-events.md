+++
date = "2008-11-06 16:26:00"
title = "&gt;Selenium and Javascript events"
draft = "false"
categories = ["Software Testing"]
tags = ["Javascripts", "onblur", "selenium", "Events"]
author = "samueladesoga"
+++

&gt;Have you ver been in situattion when youhave typed a value into a text box and you expect a<br />Javascript event to be called such as "OnBlur"<br /><br />welll selenium has a method "FireEvent" which triggers the event for you, but then the trick is you have to strip the "on" and name for the event wouldbe "OnBlur"<br /><br />I guess abit of example would make more sense, lol.<br />This is what my html look like<br /><br />&lt;input type=&quot;text&quot; value=&quot;&quot; onblur=&quot;JavaScript:ValidateSimpleMail(true);&quot; size=&quot;25&quot; name=&quot;EMAIL_1&quot; id=&quot;EMAIL_1&quot;/&gt;<br /><br />selenium command to type into an email box, which doesnt fire the event attached to the text box<br /><br />browser.Type("EMAIL_1", "sam@sam.com");<br /><br />The work around is to use selenium to fire the event after it has typed in the textbox<br />FireEvent(locator, eventName) which in my case is<br /><br />browser.FireEvent("EMAIL_1", "blur");

