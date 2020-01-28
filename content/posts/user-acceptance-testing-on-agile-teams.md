+++
title = "User Acceptance Testing on Agile Teams"
date = "2020-01-28T20:08:40+01:00"
draft = "false"
categories = ["Agile Delivery"]
tags = ["Agile Coaching", "Transformation", "User Acceptance Testing"]
author = "samueladesoga"
+++

It is surprising that many "agile" teams still have a User acceptance testing phase within their software development lifecycle; if this doesn't surprise you, then it surprises me.
To be clear, I refer to an "agile" team as a team that has adopted one of the Agile methodologies i.e. Scrum, Kanban, SAFE e.t.c. as their chosen methodology to build their product.
One of the agile manifestos reads "Customer Collaboration over Contract negotiation" and this implies that we are encouraged to Collaborate with the Customer while building the product. Our customer should include users of the products, Vendors that interface with the product and Product Sponsors; and there could be more.

For the purpose of balance, why do we conduct User Acceptance Testing (UAT)? UAT phase is one where the business teams and proposed users are asked to use the system using real life scenarios in an environment that mimics production. One of the main purpose of any form is testing is to reduce the risk assosicated with the release of a new version of software or any product that is being built. In my mind some of the risks that is being mitigated by a User Acceptance Phase would usually include:

* Non representative test environments: The test environment used during development do not represent a production environment.
* Non representative test data: The test data used for testing do NOT accurately represent data used in production.
* Non representative Scenarios: The scenario being tested by the delivery team do not represent the actually scenario in the live system.

If the expectation as stated above is that the delivery team is to collaborate with the customer, I would like to suggest that the User Acceptance Testing should be a redundant phase. 
Rather the User Acceptance Tests should be integrated as part of "Definition of Done" for the Delivery Team. 
One of the main practices with an agile team is the provision of a Continuous Integration environment; this is an environment that allows for the product to be integrated and tested continually and in other for leaders of "agile delivery teams" to be able to start having conversation around eliminating a "User acceptance phase", the following MUST be in place:

* The test environment must be a true representation of the production environment. Factor to consider include capacity and architecture of the production environment.
* The data in the test environment should be representative of data in the live systems. In instances, where data cannot be exposed to the delivery teams due to data protection regulation, then significant efforts must be put in place to ensure that personal details is scrambled from the the data set. The data should be enriched such that it is readily available for every single scenarios that needs to be tested.
* The User Acceptance Testing scenarios or test scripts should be part of the requirements that is made available to the delivery teams. These scenarios should be automated where possible and should form part of the automated regression tests for the product.

*Please note that environments as specified here could refer to serverless environment, containers, virtual machine and many more. This is not a post to discuss environment in details.*

De-risking the release of a product is one of the promises of agile and the delivery team should be empowered to ensure that the quality of product can be ascertained as close as possible to the moment the features are being built. It is worth stating that depending on where your teams and the organisation is on its path to agility, eliminating the User Acceptance Testing as a phase could prove to be an arduous task. The build up of the mindset that is able to support this change takes time and below are some principles that can be applied to drive this sort of  transformational change.

* Work with the business and delivery team to create mini-experiments around integrating UAT scenarios as part of sprint work.
* Create metrics that can be used to measure and drive the change.
* Capture data for the defined metrics and make transparent to every one involved.
* Repeat and Refine the experiments i.e. improve the metrics that have been useful, ditch the metrics that have not been useful, and create new experiments as desired.



