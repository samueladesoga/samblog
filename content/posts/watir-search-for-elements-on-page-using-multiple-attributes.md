+++
date = "2010-06-25 15:41:00"
title = "Watir: Search for elements on page using multiple attributes"
draft = "false"
categories = ["Technical"]
tags = ["Ruby", "Test Automation"]
author = "samueladesoga"
+++

I ran into a situation today where i wanted to scan through a page and return a table based on the table matching 3 attributes<br /><br />Before:<br /><br />browser.tables.find do |table|<br />     table.class_name == 'my_class_name' and<br />     table.cell(:class, 'class_1_name').text == 'some_text_1' and<br />     table.cell(:class, 'class_2_name').text == 'some_text_2'<br />end<br /><br />This was taking about 3minutes as there were about 86tables on this page under test. I was worried but the tables on this page was gonna increase with time which meant the time for this stage of the test was bound to increase.<br /><br />In my search for how to search for a single table using multiple attributes:<br /><br />I found this:<br /><br />After:<br /><br />browser.table(:class =&gt;  'my_class_name', :text =&gt; /#{'some_text_1}/, :text =&gt; /#{'some_text_2}/)<br /><br />Believe it or not, i got my test time reduced to 3secs, awesome isnt it?<br /><br />Enjoy!!!!!!

