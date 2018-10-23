+++
date = "2010-04-06 16:29:00"
title = "Active Record find by Column Name"
draft = "false"
categories = ["Technical"]
tags = ["Active Record", "Ruby"]
author = "samueladesoga"
+++

In recent days been doing a lot of ruby, which means i tend to use <a href="http://api.rubyonrails.org/classes/ActiveRecord/Base.html">Active Record</a> as well.

I had written some scripts where i was selecting records that matched a criteria such as:

@table1.table2s.select{|e| e.column_name == 1234} but as i need to sort my result and also give some more conditions to filter the data, i need alternatives to this above query and i ended up with the two lines of code below:

@table1.table2s.find(:all, :conditions =&gt; {:column_name =&gt; 1234})

@table1.table2s.find_all_by_column_name(1234)

Please note that the two lines above does same thing, the second one is just a lil but shorter and more readable the the 1st one. Using the second one i can now do stuff like 

@table1.table2s.find_all_by_column_name(1234, :order =&gt; "col_2 ASC")

which would order my results based on the column that i have specified and i could have ASC - ascending and DESC - descending. I have learnt something else today .... Have you?

