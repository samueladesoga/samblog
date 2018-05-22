+++
date = "2017-01-06 13:59:12"
title = "Testing an Asynchronous System - Part 2"
draft = "false"
categories = ["Software Testing"]
tags = ["CQRS", "Event based Architecture", "api testing"]
author = "samueladesoga"
+++

In this post, I would like to consider how to write automated tests for negative scenarios 
for a system built using an asynchronous / event driven architecture. In my previous post, i have mentioned,
that these systems are peculiar because the effect of the "write" actions are not immediately stored 
in the persistence layer of the application under test.

As an example, in the current system which i have been testing on the write side of the application, the write commands traverses 
though the Command API layer, the command controller layer  and the command Handler layer before it ends up in the Event Store.
Once data reaches the Event Store, it is almost certain that persistence would eventually happen. i.e. there isn't much that could go 
wrong at the stage except things like infrastructure break down.

For End to End tests, what we would usually do is

SendAPostRequestToCreateOrUpdateAnEntity()
QueryAndWaitForEntityToBePersisted()

This usually works for happy path test scenarios but in a case where the test condition is that the Post Request should fail.
In the current system that is being referred to:

Business rules/Complex Logic checks is usually implemented at the Command controller Layer so if I want that I cannot persist a set of attributes because it 
does NOT comply to some set of business rules, a naive way would be to write:


SendA,InvalidPostRequestToCreateOrUpdateAnEntity()
QueryAndWaitForEntityToNeverPersisted()
 
This 2nd line would never fail because immediately the test code executes that line, because of the nature of the system, 
even if there was a bug in the system, we do NOT expect the value to have been persisted on first pass through the wait loop. 
In fact, in an environment where Test driven development is being practised, we expect our tests (unit, integration and end-to-end tests) to fail
before the code to implement the business logic checks is implemented but in this case the tests would never fail. I hope these are enough reasons to 
point that this is definitely the wrong way to test such functionality in an asynchronous system.

An alternative, which i feel is too heavy and unnecessary expense for these sort of test is to modify your tests as such:

SendAPostRequestToCreateAnEntityComplyingWithBusinessRules()
QueryAndWaitForEntityToBePersisted()
SendAPostRequestToUpdateAnEntityNOTComplyingWithBusinessRules()
QueryAndWaitForUpdateEntityToNeverPersisted()

So i guess the question in your mind would be ... What are you proposing?

As i have said in my previous <a href="/post/2016/02/29/never-too-early-to-start-thinking-about-your-tests/">post</a>, your test coverage is a combination of tests written at the different layers of the testing triangle.
I would push this test to a lower level such as unit test for the appropriate layer in the architecture. This is an activity that needs to be carried out in 
conjunction with developers and being able to make a compelling case should get you the necessary support to write such unit and/or integration tests.

