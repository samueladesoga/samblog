+++
date = "2008-11-06 16:26:00"
title = "Selenium and Javascript events"
draft = "false"
categories = ["Technical"]
tags = ["Test Automation", "selenium"]
author = "samueladesoga"
+++

Have you ver been in situattion when you have typed a value into a text box and you expect a
Javascript event to be triggered such as “OnBlur”

Well selenium has a method “FireEvent” which triggers the event for you, but then the trick is you have to strip the “on” and name for the event wouldbe “OnBlur”

I guess abit of example would make more sense, lol.
This is what my html look like

{{< code "html" >}}
	<input type="text" value="" onblur="JavaScript:ValidateSimpleMail(true);" size="25" name="EMAIL_1" id="EMAIL_1"/>
{{< /code >}}

The selenium command which is expected to type into the textbox, which doesnt fire the event attached to the text box.

browser.type(“EMAIL_1”, “sam@sam.com”);

The work around is to use selenium to fire the event after it has typed in the textbox
FireEvent(locator, eventName) which in my case is

browser.FireEvent(“EMAIL_1”, “blur”);

