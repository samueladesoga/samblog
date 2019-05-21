+++
title = "Can Testing Really Be Agile?"
date = "2019-05-21T23:29:55+01:00"
draft = "false"
categories = ["Agile Delivery", "Conference Talk"]
tags = ["Agile", "Software Testing", "UAT"]
author =  "samueladesoga"
+++


## Introduction:** 
Agile has been around for a while and whilst there has been a lot of successes recorded for some aspect of the software development process such as analysis and development, it seems that testing is that “area” that is being pushed to the right and sometimes made optional. In my years of working in Agile, there are certainly a lot of moment that I had thought “everything else but testing is Agile”.

This led to ask myself this question “Can testing really be agile?” and based on my personal experiences overlaid with influences the Agile Manifestos, this is an attempt to explain some agile testing practices and how it might benefit an Agile team.


## “Individual and Interactions” over “Processes and Tools”

![Test Contest](https://samadesoga.me/images/blog/test-contest.jpg)

A very long time ago, I worked on a software development team where testers were not permitted to share their test scripts with developers and testers that found highest number of bugs were recognized within the team. 

These are definitely practices that we do NOT want to encourage with our team; we would rather want to see testers work closely Business Analysts, Developers and every other member of the team.  

**Agile practices:**
- Always conduct User stories Huddles.
- Involve testers in architectural designs decisions sessions.
- Have a conversation about defects found rather than “just” raising a ticket in a defect tracking tools such as Jira.
- Writing high-level acceptance criteria or user scenarios with developers and Business Analysts.

**Benefits include:**
- Prevents duplication of tests across the different layers of testing within the testing pyramid
- Testing and quality checks is pushed as far as possible to the left.
- Bringing the Business close to testing means that testing has a far higher chance of representing business expectations.
- Over time this helps build the confidence of the business in the product being built.
- A culture of the co-ownership of code and tests is a by-product of these sorts of working practices is encouraged.

## “Working Software” over “Comprehensive Documentation”

![Test Documentation](https://samadesoga.me/images/blog/test-documentation.jpg)

For anyone that has worked within a team using traditional development lifecycle, it is common to have the test team being required to create elaborate documents such as Test plans and Test evidences. These documents typically takes a lot of time to create and get out of data very quickly; hence not as useful as they are being made to seem.

**Agile Practices:**

- Publish a Test Approach document in a wiki or confluence page
- Work with Business Analysts and Business users to specify tests using tools that allow tests to be specified as behavior expected.
- Treat Tests as living documentation for application being developed.
- Test reports should be automatically generated from Tests execution runs.
- Incorporate performance tests as part of the pipeline.
 
**Benefits include:**
- Adequate time is allowed for high value activities e.g. exploratory tests.
- Having tests automated would encourage anyone with right skillsets to help out with test maintenance.

## “Customer Collaboration” over “Contract Negotiation”

![Stop UAT](https://samadesoga.me/images/blog/stop-uat.jpg)

Why do we need UAT? This was a question I posed to the project manager of team on a client engagement I had about 10years ago. 10years later, I still believe that on Agile project done properly, UAT phase is irrelevant.

**Agile Practices:**
- Tests should reflect expected behavior from the customer.
- Choice of test framework should be one that allow test to be specified in an expressive language (use of a DSL).
- Ensure Tests report is fluent so that customers can understand reports with interpretation.
- Tests reports should be visible and accessible to all.

**Benefits include:**
- Being agile and collaborating with the Customer, UAT scripts and scenarios should be covered within the sprint, which could imply that we do away with need for a UAT phase.

- Business User’s time is very scare and precious and I would rather we use this scare resources upfront in the lifecycle and continuously.


## “Responding to a Change” over “Following a Plan”

![Test Estimate](https://samadesoga.me/images/blog/test-estimate.jpg)

Can you remember a time when a feature change is being proposed and the test team is being asked estimate how long it would take to test the new changes. These are behaviors that suggest that testing is seen as a phase separate from development.


**Practices:**
- Ensure that everyone regards tests as integral to the product. A feature developed and not tested is not “DONE”.
- Everyone needs to understand the dynamics of the testing pyramid and consistently working to test feature at the cheapest level of the pyramid.
- Test effort should not be estimated separately from the development efforts.
- As much as possible tests should be automated

**Benefits:**
- As tests are integrated into the deliverable, there isn’t any extra effort to test changes apart from the actual effort to make the change.


## Take Aways

- Tests are embedded in User Stories, Unit Tests and Acceptance Tests.
- Create opportunities for conversations that potentially lead to removing the UAT Phase.
- A story not tested is not “DONE”
- Write fluent tests and make test report visible.


