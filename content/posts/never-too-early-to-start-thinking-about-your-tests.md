+++
date = "2016-02-29 21:53:14"
title = "Never too early to start thinking about your tests"
draft = "false"
categories = ["Agile Delivery", "Technical"]
tags = ["Test Strategy", "Test Automation"]
author = "samueladesoga"
+++

This post is spurned by taking a reflection on my journey as a tester and it's amazing to see how much i have moved from designing large UI test suites to very small UI test suites. For emphasis, the largest test suite had taken over 8 hrs and the smallest has been 3mins of execution time.
There are a lot of posts on the internet about how fragile a UI test framework could be and i would expect the next question to be how have you been able to achieve this. I would try to address this in this post.

<strong>1. Thinking about tests while designing the system:</strong> There are some decisions made in the early stages of the projects that has a direct impact on how easy or how difficult It would be to test a system. E.g. a web application that has been built with RESTful api and with minimal business logic embedded within the UI lend itself to proper layering of test automation when compared to a system with loads of logic embedded in the UI logic.

<strong>2. Testing is done at the cheapest level:</strong>
There is always a cost associated with test automation, cost in terms of test creation, test maintenance and test execution. As testers and developers we ought to think about the cost we incur and determine at what level the tests should be written.

<strong>Test Creation:</strong> The project test suite should be split between unit test, integration tests and end-to-end tests. The end to end tests can be further split into two categories, api tests and user interface tests. The cost associated with test creations would generally increase as we move up from lower levels of test automation to more abstract levels such as User interface tests. However, in some instances e.g. rewrite of legacy applications without any form of test automation,  it might be easier to create a quick UI test suite using record and play tools. There isn't any rule of the thumb on this but I would advise the team to have this conversation at all times discussing how to best automate tests  for new features and updates to existing features.

<strong>Test Maintenance:</strong> This is the cost associated with updating tests as the system continues to evolve, and in my experience its generally cheaper to update lower levels of test automation and this can be done in parallel with development of features.

<strong>Test Execution: </strong>This can best be expressed in amount of time it takes for a test suite to run from start to finish, and I would like to include the time elapsed when the tester and/or developer is waiting for the test result. It also makes sense to include efforts involved in interpreting the any test results including test failures. Bearing in mind that the automated test suite is expected to be executed several times in a day, over the life time of the project this is one aspect that could potential be the most expensive. The teams test strategy should ensure that the lower level tests which are generally faster needs to contain the majority of the tests I.e. unit, integration, api tests.

<strong>3. Collaboration with developers:</strong> No matter how solid a test automation strategy is, it would never be complete if there hasn't been any thoughts about how to collaborate with developers. It is very common to have the unit tests and integration test be designed and maintained by developers while testers would design and maintain the end-to-end test suite. The consequences of such practices include test duplication and test omission. At the end of the day we should all be working as a team, testers should take interest in Unit tests and integration tests; ensuring that these tests are relevant at the least and we should be able to suggest scenarios to be added to the test suite even if we do not have the skills to write such on our own.
On the other end, developers need to be involved with design and maintenance of end to end tests, developers should be able to advice testers if a proposed end to end test (usually expensive) can be written cheaply in a unit test and/or integration test.

These are some of the ideas that have helped me with achieving a lean UI test automation suite and i do hope you find this useful as well.

