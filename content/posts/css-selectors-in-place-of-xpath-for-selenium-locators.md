+++
date = "2009-07-13 07:38:00"
title = "css selectors in place of xpath for selenium locators"
draft = "false"
categories = ["Technical"]
tags = ["Test Automation"]
author = "samueladesoga"
+++

I have always resolved to using xpath whenever i am creating selenium scripts and i need to do locate elements with no 'id'. Well as you would probably know, xpath executes so slow on IE.

For intance i have a test suite that would run in 1hr 30mins on firefox/ safari but the same test suites would take over 4hrs to run to completion on IE.So with the help of a colleagues, i have been using css selectors from last week and i can say this has drastically improved the speed of our test and you would notice too much difference between IE and FF/Safari anymore.

It takes some time to get used to but these are some link that might be useful to get start with ....
A summary or cheat sheet could be found <a href="http://www.princexml.com/doc/6.0/selectors/">here</a>

Other links are: <a href="http://www.w3.org/TR/CSS2/selector.html">W3C CSS2</a> and <a href="http://www.w3.org/TR/2001/CR-css3-selectors-20011113/">W3C CSS3</a>

Enjoy .....

