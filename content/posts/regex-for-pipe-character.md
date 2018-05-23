+++
date = "2010-01-11 21:25:00"
title = "Regex for pipe \"|\" character"
draft = "false"
categories = ["Technical"]
tags = ["Regex", "Testing"]
author = "samueladesoga"
+++

I was trying to split a string using a regex today and i had this problem<br /><br />my string of format<br /><br />A | B | C<br /><br />My intent was to split this string using the Regex match for "|"<br /><br />The regex that worked for me was "\\|" - escaping pipe and then escaping the slash the escapes the pipe

