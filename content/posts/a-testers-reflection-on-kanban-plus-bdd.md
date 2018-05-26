+++
date = "2010-09-03 14:55:00"
title = "A tester's reflection on kanban plus BDD"
draft = "false"
categories = ["Agile Delivery", "Technical"]
tags = ["Kanban", "Test Automation", "BDD" ]
author = "samueladesoga"
+++

Having just finished an engagement with a client where the development practices include
kanban and BDD. Kanban for us meant that we give priority to work on the right side of the board.
So as a tester, I would rather spend my time doing some manual testing on a story that is in the QA queue, than writing automated acceptance tests for a story in the queue for Acceptance Tests.

Maybe it would be worth while to draw a representation of the way in which work flows through our kanban board

Analyis > Queue > Accetance Tests in Progress > Queue > Dev in progress > Queue > QA in progress > Smoke Test > Queue > UAT Deployment in progress > Queue > UAT in progress > Queue > Live Deployment in Progress > Deployed.

The good thing is that everyone in the team has a visibility of work up till deployment. For more information, read up kanban

The BDD framework used was Cucumber + Watir + Rspec, and developers would only start developing software when the tests have been written for the acceptance criteria. (Acceptance criteria is written by Analysts in a text editor in the cucumber format). The acceptance tests is jointly owned by developers and testers. If as a tester i am busy doing some other tasks further down in the work flow, the developers were happy to write the failing automated test for the acceptance criteria before development commences.

As a result of these good practices:

1. The team was always in good spirit and which improves the effectiveness
2. The number of defects raised was low, this was achievable because for a developer to move a story to the QA queue, the automated acceptance criteria must have been passing.
3. There wasnt a defect management system because testing is carried as close to the development time, and if the business believes the defect is critical to the functionality, the functionality of story does not progress further in the kanban board, but it is blocked until fixed and verified.

One downside is that because we wrote acceptance test for virtually every functionality that is testable, the acceptance test grew so quick that the time taken increased from about 20mins to about 1.40mins and this time kept growing. A side defect of this is that feedback time increased and as a result developers would not run the complete test suite before checking their code in. This was however managed by doing some exploratory manual testing around the functionality being developed.

All in all, it was a good experience for me and i just hope i get to work on more projects such as this.
