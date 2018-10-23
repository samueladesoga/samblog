+++
title =  "Driving a Technical Spike Using Bdd"
date = 2018-10-22T23:37:26+01:00
draft = false
categories = ["Agile Delivery"]
tags = ["BDD", "Technical Spike", "Coaching"]
author =  "samueladesoga"
image = "images/blog/spike-bdd.jpg"
+++

Most Agile methodologies provide for the application of a Technical Spike for exploring a new technology or risky areas of a product. 
The SAFe methodology [defines](https://www.scaledagileframework.com/spikes/) the Spike as a type of Exploration and Enabler Story.

There are a number of approaches that have been recommended for Technical Spikes. These include: 

- Estimating and sizing a Technical Spike Story

- Timeboxing a Technical Spike .
 
The Technical Spike is exploratory in nature and it is conflicting to attempt to estimate the complexity for a piece of work that is not well understood; in my experience most teams would rather Timebox the efforts required to complete a Technical Spike. 

Few weeks ago, I was having a conversation with a developer that was mid-way into a spike and I had an ah-ha moment, and this post is an attempt to explain what might be an alternative approach to Technical Spikes.

I would suggest the Product Owner / Business Analyst in conjunction with a Technical member of the team e.g. Architect, Tech Lead define the high level requirements using the the Behaviour Driven Development Methodology.

Advantages of spec'ing the requirements / behavious upfront include the following:
 
- The goal for the spike is clearly defined upfront and as such the the developer is clear about what the deliverable is.

- The definition of DONE for the Technical Spike would be as soon as all Requirements spec'ed are met.

- Either the developer or a tester can automated the BDD script into executable requirements.

- The risk of spending too much time /efforts on the Technical Spike is minimised.

- A Baseline line of requirement for actual implementation evolves from the Technical Spike.


As with every else, there isn't a silver bullet but care must be taken not to go over board with the requirement. As this is a technical spike, there is a need to ensure that the requirement are at a very high level sufficient to describe the goals of the Technical Spike; it must not be prescriptive.

It seems to be working well for this project so feel free to try it out. 

