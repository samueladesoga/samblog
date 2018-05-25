+++
date = "2010-04-23 10:22:00"
title = "Implement 'Select column_name from table_name where condition' in Active Record"
draft = "false"
categories = ["Technical"]
tags = ["active record"]
author = "samueladesoga"
+++

I needed an array from the data contained in a particular database column based on a condition, so i get the array of <a href="http://rails.rubyonrails.org/classes/ActiveRecord/Base.html">active record</a> rows:<br /><br />array_of_rows =  TableName.find(:all, :conditions =&gt; {:column_name =&gt; ['col_data1','col_data2']})<br /><br />

Then use the <a href="http://ruby-doc.org/core/classes/Array.html#M002189">array map!</a> function to replace the active record objects with the column_name value<br />array_of_rows.map!{|item| item.column_name}<br /><br />Doing some search got me:<br /><br />array_of_rows = TableName .find(:all,:select=&gt;'column_name' :conditions =&gt; {:column_name =&gt; ['col_data1','col_data2']}).map(&amp;:column_name)<br /><br />And i like this better, concise ....<br /><span style="font-weight:bold;">update:</span><br /><br />I've had to update the active record query  above by removing the :select option<br /><br />array_of_rows = TableName .find(:all, :conditions  =&gt; {:column_name =&gt;  ['col_data1','col_data2']}).map(&amp;:column_name)<br /><br />

This is because if i have a method<br /><br />def find_some_data<br />       TableName .find(:all,:select=&gt;'column_name' :conditions =&gt;  {:column_name =&gt; ['col_data1','col_data2']})<br />end<br /><br />I am able to do:<br /><br />find_some_data.map(&amp;:column_name)<br /><br />but i cannot do<br /><br />find_some_data.map(&amp;:another_column_name)<br /><br /><span style="font-weight:bold;">throws:</span>   missing attribute: another_column_name (ActiveRecord::MissingAttributeError)<br /><br />because i have only retrieved  'column_name' values from the table<br /><br />In other to be able to create any array composed of data from any column_name, i have<br /><br />def find_some_data<br />       TableName .find(:all, :conditions =&gt;  {:column_name =&gt; ['col_data1','col_data2']})<br />end

