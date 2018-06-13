+++
date = "2017-01-06 13:13:31"
title = "Testing an Asynchronous System"
draft = "false"
categories = ["Technical"]
tags = ["Test Automation", "CQRS", "Event based Architecture"]
author = "samueladesoga"
+++

In recent months i have been testing a system built using the CQRS pattern. CQRS stands for Command
Query Responsibility Segregation and you can read more about it <a href="http://martinfowler.com/bliki/CQRS.html">here.</a>

As a tester, one of the key takeaway for me is that there is a Read side and a Write side to the
application. This is very different to the other applications that i have tested in the past where a write operation would NOT be successfully until the data being sent to the application is successfully persisted.

In the case of this system that has been built using an event driven architecture, the write side of the application would always come back with a successful response which implies that the command is successful (provided that the api contracts and json schema validations are met) and this doesn't mean that the data has been persisted. This is due to a concept referred to as <a href="http://www.allthingsdistributed.com/2008/12/eventually_consistent.html">eventual consistency</a>.

Without going into the technical details, the internals of the system is event based, which means that every actions triggers one or more events which are picked up by other parts of the system and eventually the data is persisted; provided all the business rules and validation conditions are met.

So this poses a challenge as to how best to test this system and in my opinion this forces technical testers to look beyond writing API test and seeks <a href="/posts/never-too-early-to-start-thinking-about-your-tests/">cheaper ways of testing the system</a> i.e Traversing the entire testing triangle pushing tests to integration tests and unit tests. 
See my previous post <a href="/posts/never-too-early-to-start-thinking-about-your-tests/">here</a> where i have spent a lot of time discussing how testers should consider the true costs of testing.

For an asynchronous system, there is an incredible amount of polling that has to take place in end-to-end tests that involve the full stack.
Also, testers have to understand the dependency between  different actions that could be happening around the same time, so our tests would look like below:

doAction1()
waitForAction1ToBePersisted()
doAction2()
waitForAction2ToBePersisted()
.
.
.
.
doActionN()
waitForActionNToBePersisted()

I have always considered end-to-end test to be very expensive but the nature of this system adds more complexity to our tests and tests would take an awful long time to complete; hence it is more important that we reconsider how and where we test our system.

