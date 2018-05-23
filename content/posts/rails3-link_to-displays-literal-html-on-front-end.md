+++
date = "2010-12-22 11:27:00"
title = "Rails3 'link_to' displays literal HTML on front end"
draft = "false"
categories = ["Technical"]
tags = ["Development", "Ruby on Rails"]
author = "samueladesoga"
+++

&gt;In the last month, I have been working on a rails3 app and I ran across this interesting problem where I need to create a href link to a another page from my current page.<br /><br />In my view i have written <br /><br /><blockquote>&lt;%= "Please click on this link #{link_to('here', new_house_path)}" %&gt;</blockquote><br />And interestingly this is displayed as <br /><br /><blockquote>Please click on this link &lt;a href="http://localhost:3000/houses/new"&gt;here&lt;/a&gt;</blockquote><br />on the front end.<br /><br />Hours of frustration and google searches leads me to doing this: <br /><br /><blockquote>&lt;%= ("Please click on this link #{link_to('here', new_house_path)}").html_safe %&gt;;</blockquote><br />which then is displayed correctly on front end<br /><br /><blockquote>Please click on this link <a href="http://houses/new">here</a></blockquote><br />if that isnt clear enough, the trick is you need to wrap the string with a '<a href="http://yehudakatz.com/2010/02/01/safebuffers-and-rails-3-0/">html_safe</a>' method<br /><br />Off i go to learn more stuff .....

