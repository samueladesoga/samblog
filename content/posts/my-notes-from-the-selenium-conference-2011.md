+++
date = "2011-04-11 15:43:00"
title = "My notes from the selenium conference 2011"
draft = "false"
categories = ["Technical"]
tags = ["Conference", "Test Automation"]
author = "samueladesoga"
+++

I had the opportunity to attend the selenium conference and loads of good stuff, i must tell you. This post is an attempt to highlight the conference talks/ seminar that i really enjoyed.

1. Page Object 101: This was a workshop delivered by <a href="http://patrickwilsonwelsh.com/">Patrick Wilson Welsh</a> and <a href="http://adam.goucher.ca/">Adam Goucher</a>. Even though I have done a lot of page objects in the past, at a glance i like the way patrick has approached html elements, (wraping each html elements in a class), it feels like writing selenium code in a watir way.

The full source code of Patrick's work be found here:

https://github.com/PillarTechnology/SeleniumPatterns/tree/master/selenium-rc-patterns

I hope to have a closer look, and learn one or two things to do page object better in the future. Note that Patrick's work has been done in selenium 1.

2. There were a number of talks about what Selenium 2 bring to the testing table. I noted a few things from several workshops and presentations.

- Generally Simon Stewart claims that Selenium 2 is much more faster than Selenium 1. This should be evident i believe from some example i hope to explain below.

<strong>Locating Elements by XPaths</strong>

- If i have the followin code snippet in selenium 1:
<blockquote>selenium.click("//div[@id = 'some_id']//*[@class = 'some_class']");</blockquote>
This would be written as:
<blockquote>driver.findElement(By.id('some_id')).findElement(By.className('some_class')).click;</blockquote>
From the example above, this eliminates the need for the use of xPath and as a result would increase the speed of such tests.

<strong>Waiting For Elements to Appear</strong>

In selenium 1, if you use the Wait class you would do

[sourcecode language="java"]

new Wait(&quot;Couldn't find close button!&quot;) {
	boolean until() {
		return selenium.isElementPresent(&quot;button_Close&quot;);
	}
};

[/sourcecode]

In the code snippet about, the test would spend have some time to wait for the element to appear, and then you would something like:
<blockquote>selenium.click("button_Close");</blockquote>
In selenium 2, this would be replaced with:
<blockquote>[sourcecode language="java"]
WebElement close_button = new WebDriverWait(driver, 10).until(new Function&lt;WebDriver,WebElement&gt;()
						   {
                				public WebElement apply(WebDriver driver) {
                     			return driver.findElement(By.id('button_close'));
                			}
           				 });

[/sourcecode]</blockquote>
The difference is that the 'until' methods of the WebDriverWait class waits until the condition evaluates to a value that is neither null nor false. So this means it would return any object be it boolean or a WebElement object.
NB: note that the code is for illustration, you might need to tweak for it to work properly.

<strong>Sleeps</strong>

In the talk by Dante Briones, I can remember a section in which he talked about the dangers of using sleeps in tests and I loved his suggestions of wrapping Thread.sleep() in an appropriately named methods such as:

couldNotDoTheNeccessaryHardWorkAsIWasLazy();

I think the morale of the story is that using sleep in your tests is evil.
Nice :)

3. There were also several sessions around Web Performance testing and this was more educating for me as i learnt a few things that i hope to explore in great depths in the future
- I learnt about the <a href="http://proxy.browsermob.com/">BrowserMob proxy</a> which can be used as a DesiredCapability in association with Firefox2. These can also be used for blacklisting/whitelisting urls, redirecting urls, setting internet speed and many other uses.

- Also learnt that we can do similar things with the <a href="http://fiddler.wikidot.com/fiddlercore">FiddlerCore Api</a> but this would only work on .Net platforms.

- There was also a slide about platform specific tools that can be used to capture performance metrics. <a href="http://www.tcpdump.org/">Tcpdump</a> for windows platforms and <a href="http://www.tcpdump.org/">PCap</a> for linux/ Unix platforms.

its always nice to know about more tools that would make me a better technical tester and i hope to explore these tools in depth at a future date.

4. At the end of the conference, Simon Stewart took a few of us through the selenium source code and he was talking about how to build the source. I can guarantee that it would have been impossible to build the source without someone holding your hand (not literarily). I learnt that the build scripts is based on rake, but the guys have a build grammar called '<a href="http://code.google.com/p/crazy-fun/">crazy-fun</a>'.

As i use selenium more and more, i am hoping to be able to contribute to this wonderful tools, but i still have a lot of personal work to do in other to understand all that simon said at that talk.

There were loads of other talks at the conference and as soon as the source code / slides / videos are posted. I would update this post with some more links.

Enjoy!!!

