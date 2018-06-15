+++
title = "Tests automation, a crucial part of Continuous Integration and Continuous Delivery"
date = 2018-06-15T09:56:27+01:00
draft = false
categories = ["Agile Delivery"]
tags = ["Test Automation", "Continuous Delivery", "Continuous Integration"]
+++

I was recently contacted to write an article for a [devops online](http://www.devopsonline.co.uk/continuous-integration-testing-and-delivery/) which has been published here but i wanted to post same article on my blog. This is by no means a detailed tutorial but i hope it gives a very quick overview on Continuous Integration and Continous Delivery.

Software development is usually undertaken by one software development team or a number of software development teams. Each software development team would usually consist of developers, testers and business analysts.

Historically, software development was seen to be an act of just writing code; the requirement spec would usually be divided along functionality lines and assigned to developers within a single development team, or assigned to software development teams.

For an extended period of time, code would be put together and towards the end of this exercise, for the very first time, the developer starts to think about integration. Integration could mean a number of things:

* Integration with other components of the same product being built.
* Integration with other products or system.
* Integration issues


There are a few issues that I have observed with this approach:

* Building a system in this fashion means that all along, most of the decisions that might have been made would have been based on assumptions of how things are expected to work.
* The cost of any rework would most likely than not be higher as compared to finding the defects weeks or months earlier.
* Integration might take longer than expected and that could be a slip in overall project delivery date.

The issues that I have highlighted above can be mitigated using continuous integration, which is a process of continuous merging code using build tools such as CircleCI, TeamCity and Jenkins. Continuous integration is a group of practices that ensures that code is built as frequently as each code check-in, unit/integration tests are executed, code is automatically deployed to a test environment and then executes some more end-to-end tests on the deployed system.

## Integration success
This is a process that is designed to be repeatable and as mentioned earlier, this process would be executed each time code is checked-in to the repository. As you must have noticed, the process that has been described above, doesn’t exclude tests, so in my own opinion, continuous testing cannot be taken away from continuous integration; it is integral to the success of a continuous integration process.

The goal of an agile team is to ensure that we can deliver a quality product to the customer and ultimately our users; as a result, a few years ago (2010), Dave Farley and Jez Humble wrote a [continuous delivery book](https://www.amazon.co.uk/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912/). In my own opinion, continuous delivery takes the concept of continuous integration a bit further and continuous delivery introduces an extended set of practices that ensure we can continually release small increments to higher level environments and eventually into production environments.

The release of software could potentially be a nerve-wracking exercise and continuous delivery when done properly tends to take the nerve out of the release process. With the release process being a regular activity, then the risks/fears associated with releasing software is minimal. I have been fortunate to work on teams that have released software in frequencies ranging from two weeks to releasing multiple times in the same day into production.

## ‘Tests must be automated’
The journey from infrequent integration to continuous integration (CI), and eventually to continuous delivery (CD) takes a lot of practice and hard work. My advice is to commence this effort in small increments, automating everything and keep the process repeatable until release because of another routine process for the team.

One last thing to always remember is that continuous testing is at the centre of all this, tests must be automated and executed all the time. Every time the CI/CD jobs recompiles or rebuild the source code, tests (unit and/or integration test) must be run and each time a deployment is done to a new environment, tests (acceptance/end to end tests) must be executed.
