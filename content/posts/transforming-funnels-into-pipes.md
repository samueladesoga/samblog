---
title: "Transforming Funnels Into Pipes"
date: 2019-09-25T13:57:12+01:00
draft: false
categories: ["Agile Delivery"]
tags: ["Agile Coaching", "Agile Transformation"]
image: "images/blog/funnels-into-pipes-header-1.jpg"
---

Usually when I join an organisation or team to help identify challenges with current processes
and help channel the teams fix their processes, I would usually look for bottlenecks within the organisation. Once identified, bottlenecks are usually not difficult to eliminate compared to the effort that is required to ensure that behaviours that have introduced the bottlenecks are unlearnt.

A bottleneck can be described as a process within a chain of processes that reduces the overall capacity of the entire system
due to the limitation of that single process. Some examples of bottlenecks in typical software development team include:

1. Bundling all testing to be done by a specialist testing team at the end of development
2. Code review and merges for the entire team done by a tech lead 
3. Product owner to sign off all stories at the end of the sprint.
4. UAT phase at the end of the sprint

A direct consequence of bottlenecks with the software development process is that we introduce "Funnels" in our system. Regardless of the width of widest part of the funnel, the throughput of the funnel would always be equal to the throughput of the narrowest part of the funnel. In the instance given above where all testing is conducted by a specialist testing team at the end of the "development", regardless of how much analysis and development work is done, the user stories are not "DONE" until they have all been tested. This means the testing team really would determine how much "DONE" means for the entire team.

On the other hand, a "Pipe" provides a channel where throughput is constant and no part of the system constitutes a bottleneck to the overall throughput.

## Funnels into Pipes:
There are a number of strategies that I have successful applied on a number of teams in other to transform a funnel shaped process into pipelines.
![Funnels into Pipes](https://samadesoga.me/images/blog/funnels-into-pipes-1.jpg#center)

### Eliminate All Key Person Dependencies:

The challenges associated with Key Person Dependencies include inabilities to churn through a backlog of work at a fast enough rate compared to
the rate at which the work arrives on the backlog. Moreover, in the event that the Key Person is unavailable due to illness or holiday that throughput is effectively Zero.

The first step would be to identify all Key Person dependencies and "recruit" more people in and around the team
to execute these tasks for you. This will usually involve allocating some time for training, which is in a good investment for the team.
Some of Key person dependencies include:
  * Single tester allocated to test stories developed by a team of 10 developers.
  * Single product owner required to sign off  stories in other to close off delivery of features. 
  * Single Tech Lead to review and approve PRs.


### Shift Left:
Shift left is that term that implies a move of activities that would be typically be carried out later on in the development cycle to be done earlier.
This term is commonly associated with quality checks and testing activities but I advice that this be applied to everything. Engaging the teams to ask
itself questions around their processes and figure out which activities can be done earlier and not in a big bang approach. On a number of clients sites,
I have advised and implemented, a continuous performance test stage as part of the build pipeline and that eliminated the need for a performance test phase which could be a bottleneck in the delivery cycle.
 

### Task Swarming:
Task swarming is a process that is employed when a number of people come together to complete a task that could become a bottleneck
if not done. A good example when developers swarm on testing activities after code implementation is complete, the developers could have moved on to a new user story but working with testers would ensure that the testers do not become a bottleneck to delivery. Another example is implementation of a peer review process for code rather than having one developer review all pull requests.


These are just some of the strategies that I have successfully deployed but ultimately part of the goal of an Agile coach is to empower the team to resolve it own bottlenecks and you might just find other strategies that work for you, apart from these.  

