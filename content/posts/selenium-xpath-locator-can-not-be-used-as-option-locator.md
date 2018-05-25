+++
date = "2008-11-03 13:22:00"
title = "Selenium: Xpath locator can not be used as Option Locator"
draft = "false"
categories = ["Technical"]
tags = ["selenium", "xpath"]
author = "samueladesoga"
+++

&gt;In my new job been doing a lot of selenium and i needed to scroll through the list of<br />options in a select element and click on a particular options.<br /><br />i have initially used the browser.DoubleClick<br /><br />browser.DoubleClick("xpath=//select/option[child::text()='Option_Label']");)<br /><br />But then this didnt work because selenium doesn't have the functionality to scroll down the select element in other to make my desired option visible.<br /><br />Looking through the selenium api, i have used another method, which take in two parameters, the select locator and the option locator.<br /><br />so i used:<br /><br />browser.Select("xpath=//select", "xpath =//option[child::text()='Option_Label']");<br /><br />that hasnt work either as the option locator type cannot be xpath. it has to be a label, id, atrribute, name or any other html locator<br /><br />so i have done<br /><br />browser.Select("xpath=//select", "label=Option_Label");<br /><br />which in myown opinion i think is good as it is robust for a selenium test.

