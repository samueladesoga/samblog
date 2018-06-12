+++
date = "2017-08-28 13:27:49"
title = "Why do you need to learn SQL as a tester?"
draft = "false"
categories = ["Agile Delivery", "Technical"]
tags = ["Technical Testing"]
author = "samueladesoga"
image = "images/blog/blog-1.jpg"
+++

In the last 5 years or so, we have been <a href="http://www.dachtsolutions.com">training and mentoring</a> Software Testers and Business Analysts and as part of the mentoring session, I ask about their experience of interviews; generally I am looking for the sort of questions the mentees are being asked and more importantly what answers were provided to the interviewers. My observations in recent years is that there is an increasing demand for manual testers with technical skills and knowledge of databases is one that sits high on the list of technical skills.

So, I had one of these sessions yesterday and the guy I was having the conversation with was asked "what does he do with the database?" and "when does he query the database?".  It is a valid question, and even though I will query the database several times in the data, whenever i am testing a system; I had to take a step back to think about this and I will be sharing some of the reasons i would want to look into the database.

Most applications have a data store which is a part of the application that persistently holds data and for a lot of people that are new to testing, you would normally do your checks on the user interface. So why check in the database?
<ul>
	<li><strong>Learn more about the system:</strong> As part of exploratory testing and getting to know the system, looking at the database might help you understand how the data is structured. When you create, update or delete a record in the database, looking at the related tables might help you explore the UI better.</li>
	<li><strong>Debug / Investigating a potential bug:</strong> Often times, I don't stop at raising a bug; i like to poke around the system to under the root cause of a bug. (Disclaimer: Be careful not to spend too much time doing this). A good example is a feature which is expected to sort data on a page using last updated time; if i find that the functionality is not working as expected, i might query the database, and run a query based on my understanding of the feature being tested; hoping that i can reproduce the issue.</li>
	<li><strong>Test Data:</strong> Its good practice to create your own test data to reduce the the chances of unexpected side effects, but sometimes, i find it useful to run a very quick query in the database to find data that i could potentially use to execute my intended test scenarios.</li>
</ul>
There are a few more reasons that i could think about but i think these 3 reasons broadly covers why i would query the database as part of a testing session. For a lot of seasoned testers, these might be already obvious to you but i thought for newbies, this post might just help you on your journey to being a better tester.

&nbsp;

