+++
date = "2017-08-24 22:07:38"
title = "Should API test and UI Acceptance Tests be written in the same programming language?"
draft = "false"
categories = ["Agile", "Technical"]
tags = ["Test Automation"]
author = "samueladesoga"
+++

I have written in my previous <a href="/post/2016/02/29/never-too-early-to-start-thinking-about-your-tests/">blog</a> about how we need to distribute our tests across the testing pyramid for reasons which i have explained in the previous <a href="/post/2016/02/29/never-too-early-to-start-thinking-about-your-tests/">blog</a>. This particular post is focussed on how we ought to design our tests across the higher levels of abstractions which includes the UI test and API tests.

For the purpose of the blog, I would be using a case study of team that writes its UI Acceptance tests in protractor (Javascript) and the API tests
in Java using RestAssured library. The content of this post is an expression of my experience and observation and I am happy for other people to share their experiences.

<strong>1. Maintenance cost is even higher:</strong>  I have already established in my previous post how expensive these high level tests could be.
For an application that requires a lot of data to be setup before the tests are run, the effort of setting up data is duplicated as these are effectively two different set of tests written in two different languages. Also these test would requiring two different build runners e.g gradle/maven for java and gulp for javascript which adds to the complexity in my own opinion.

<strong>2. Silos are Encouraged:</strong> One of the few practices, that I encourage on an Agile Team is ensuring that everyone works together and continuously collaborating on code and the tests. In my experience when team decides to split the higher end test as described above, i.e Java for API Tests and Javascript for UI Acceptance test, have observed that one of these could happen
<ul>
	<li>Testers and back end developers contribute to the API Tests while front end developers contribute to the UI Acceptance Test.</li>
	<li>Testers and front end developers contribute to the UI Acceptance Tests while backend develops would write/maintain the Java API Tests.</li>
</ul>
This is <strong>bad</strong> as we have just reintroduced silos into the team. Another side effect is that the definition of "Done" becomes blurred. We expect that the definition of "Done" to be when all code has been written, tested, deployed and signed off by the product owner. However when we have two separate test suites, back end developers can write the Java API test as soon as the back end code is completed and provided the test are passing, the team is tempted to split stories in back end stories and front stories over time.

<strong>3. Higher chances of duplicating test scenario in both suites:</strong> For the reasons that have been described above, I have observed that the chances for similar test scenarios to be implemented in the UI Acceptance tests as well as in the API test suite is highly increased. This is because when the team doesn't work together on the tests and assumptions are made, most likely than not, a team that cares about test coverage would try to write as many test as possible which ends up in having the same scenarios implemented twice. Similarly, it is a lot easier to introduce gaps into the testing, this occurs for instance if a backend developer assumes a particular test should be written as part of the front end test and this is not communicated; the other person that is supposedly writing the front end test might not write the test for similar reasons.
<h3>The advice</h3>
In other to reduce the chances for some of these problems that i have observed, I would always advice for a single code base and single language for API Test and the UI Acceptance Test.
I worked with a client a couple of years ago, and before i joined the team, the set of their API Tests and UI Acceptance Tests was as described above. The problem was even worse at the time, as the UI Acceptance tests were considered an optional set of tests.
On joining the team, i got everyone together so that we could discuss how we were doing tests as a team and where we would like to be. It wasn't an easy task but the team decided to use a combination of Spock (for defining test scenarios), Geb (a browser automation tool based on WebDriver) and Rest Assured.

There was always a tussle between front end developers and back end developers in that the front end developers weren't keen on writing full blown Java code whilst back end developers weren't keen on writing Javascript test. As a result of this we decided on the tool set as described as above for  the reason highlight below:
<ul>
	<li>Groovy: The base language used in the test suite was Groovy which is a JVM based language; this felt as a middle ground for both java developers
and javascript developers. Groovy is not a difficult language to pick up for a front end developer as the syntax has some resemblance to javascript
or any other scripted languages.</li>
	<li>Geb: This library was the main reason we tilted towards Groovy, Geb has a nice syntax that is very jQuery like and this is the reason we decided
to use this language.</li>
</ul>
After we had adopted these set of tools, below are some of the advantages that we experienced:

1. Creation of Test Automation scripts became an atomic task in that “the automated tests have been written” meant that both front end and back end tests have been thought through
and implemented accordingly.

2. Reusability of set up data came naturally, as we had a single suite of test; hence a singular test set up.

3. Reusability of code including helper class, page object and api wrappers.

4. The feedback was much faster as we had a singular test suite and all we had to do was run one set of test.

5. Singular source of Truth for Test as source of System Documentation.

I really hope when team are just about to start your next set of tests, maybe on a brand new project or a rewrite of an existing test suite; you would think about some of the points discussed above, make sure your api tests and ui tests are in the same language and within the same project.

