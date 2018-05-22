+++
date = "2016-02-29 22:47:57"
title = "Geb and Spock: My favourites for test automation"
draft = "false"
categories = ["Agile Delivery", "Software Testing"]
tags = ["Geb", "Spock", "BDD", "Test Automation", "webdriver", "feature driven development"]
author = "samueladesoga"
+++

So I have used quite a number of tools in my time building test automation frameworks over the years; and in the last 2years i have evaluated a number of these tools and i am becoming more and more opinionated in my choice of tools.

For someone that has used selenium/webdriver and cucumber a lot in the past, i find myself using <a href="http://www.gebish.org/">Geb</a> and <a href="https://code.google.com/archive/p/spock/">Spock</a> these days and it hasnt been much difficulty in switch to these tools.

<a href="http://www.gebish.org/">Geb</a> has won my heart with the syntax and for people that have used it before it is uses webdriver under the cover and you can drop down to the layer below it; if you choose to use webdriver directly. In the time i have used Geb, there are times i've had to do this but i love the DSL which Geb provides and i hate when i have to use webdriver directly.

I love cucumber, and i know that the regex matching between step files and step definition files is quite powerful; however i find that the manner in which <a href="https://code.google.com/archive/p/spock/" target="_blank">spock</a> eliminates the need for a seperate text file  cool. Also with a very big test suite, i have that the Regex could introduce a maintenance overhead, hence the reason i prefer to use Spock.

However, I didn't like the default report that comes with <a href="https://code.google.com/archive/p/spock/">spock</a> and i decided to include a library called '<a href="https://github.com/renatoathaydes/spock-reports">spock-report</a>' which provides better reporting that one bundled with <a href="https://code.google.com/archive/p/spock/">spock</a>.

I have created an <a href="https://github.com/samueladesoga/geb-spock-example">example project</a> and it might be a good start for anyone wanting to look at this ..

&nbsp;

