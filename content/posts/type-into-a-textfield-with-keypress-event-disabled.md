+++
date = "2012-07-31 08:51:20"
title = "Type into a textfield with keypress event disabled"
draft = "false"
categories = ["Technical"]
tags = ["Test Automation", "watir-webdriver"]
author = "samueladesoga"
+++

A colleague asked me how to automate a disabled text-box which has a calendar attached to it. The customer has specified that they want keyboard entries disabled for this text-field, hence every user of the website has to use the calendar drop down.

<img src="https://samueladesoga.files.wordpress.com/2012/03/calendar_textfield.png" alt="testfield calendar" />

Previously, this has been automated by using webdriver to type the text into the text box but as it was disabled, this was impossible.

imagine, this is the html for the textbox: 

```
&lt;input type="text" id="text_box_identifier" value="" disabled &gt;
```
Using a javascript library such as jQuery, i was able to set this field using 

```
$('#text_box_identifier').attr("value","27/05/2012");
```
Hope that saves you some time today ....

