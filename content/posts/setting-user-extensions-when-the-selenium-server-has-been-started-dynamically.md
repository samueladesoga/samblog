+++
date = "2009-11-16 15:17:00"
title = "Setting user extensions when the Selenium Server has been started dynamically"
draft = "false"
categories = ["Technical"]
tags = ["Javascipt", "selenium", "Test Automation"]
author = "samueladesoga"
+++

&gt;I hope this helps someone someday, I needed to set user extension for a selenium test suite, dynamically in the code as i was starting the <a href="http://samadesoga.blogspot.com/2009/11/start-selenium-server-dynamically.html">Selenium server via same</a>.<br /><br />public void startSeleniumServer(String port) {<br /><br />      rcc = new RemoteControlConfiguration();<br />      rcc.setPort(Integer.parseInt(port));<br />  <br />   <br />      try {<br />          seleniumServer = new SeleniumServer(false, rcc);<br />          seleniumServer.start();<br />       <br />      } catch (Exception e) {<br />          throw new IllegalStateException("Can't start selenium server", e);<br />      }<br />  }<br /><br />   public void stopSeleniumServer() {<br />      if (seleniumServer != null) {<br />          seleniumServer.stop();<br />      }<br />  }<br /><br />i was setting the user extension file using the remoteControlConfiguration object<br /><br />so i had typed:<br />         <br />            rcc.setUserExtensions(new File({path_location_to_user_extension.js}));<br /><br />This didnt work and an extensive search in the api wasnt very useful.<br />A colleague however found out that doing a<br /><br />seleniumServer.boot(); would make the user-extension file to work.<br /><br />Great isn't it ...........

