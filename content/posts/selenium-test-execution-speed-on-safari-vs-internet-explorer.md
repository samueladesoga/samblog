+++
date = "2009-04-30 19:18:00"
title = "Selenium Test execution speed on Safari vs Internet Explorer"
draft = "false"
categories = ["Technical"]
tags = ["selenium", "Test Automation"]
author = "samueladesoga"
+++

I have been working on a selenium test suite that contains about 150 tests.
These test would normally take about 4hrs 30mins for it to execute to completion.

I tried to run same tests on Safari today, and it took exactly 1hr 9min. This is such a big difference 
and i think it is because of the extreme use of Xpath in the test suite. And as it is known thatXpath execute soooo slow in IE.

This is quite good as i have decided to run intraday tests in safari so as to get faster feedback, cos up until now i am unable to kick off these test because a test suite that takes 4hr 30min to executes would have taken almost half of my day and does little good.

I would be writing another post that talk about how to efficiently use Xpath in your tests whenever you need to ......


Any comments ............

