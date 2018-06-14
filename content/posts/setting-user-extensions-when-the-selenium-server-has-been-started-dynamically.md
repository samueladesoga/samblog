+++
date = "2009-11-16 15:17:00"
title = "Setting user extensions when the Selenium Server has been started dynamically"
draft = "false"
categories = ["Technical"]
tags = ["Javascipt", "selenium", "Test Automation"]
author = "samueladesoga"
+++

I hope this helps someone someday, I needed to set user extension for a selenium test suite, dynamically in the code as i was starting the <a href="http://samadesoga.blogspot.com/2009/11/start-selenium-server-dynamically.html">Selenium server via same</a>.

{{< code "ruby" >}}

public void startSeleniumServer(String port) {
	rcc = new RemoteControlConfiguration();     
	rcc.setPort(Integer.parseInt(port));
	try { 
		 	seleniumServer = new SeleniumServer(false, rcc);
		 	seleniumServer.start();
	 	} catch (Exception e) {
	 		throw new IllegalStateException("Can't start selenium server", e);  
	 	} 
	 }

	 public void stopSeleniumServer() {
	 	if (seleniumServer != null) {
	 		seleniumServer.stop();
	 		}
	 	}

{{< /code >}}

I was setting the user extension file using the remoteControlConfiguration object so i had typed: 

rcc.setUserExtensions(new File({path_location_to_user_extension.js}));

This didnt work and an extensive search in the api wasnt very useful. A colleague however found out that doing a 

	seleniumServer.boot(); 

would make the user-extension file to work. Great isn't it ...........

