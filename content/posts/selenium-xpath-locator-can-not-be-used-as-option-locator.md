+++
date = "2008-11-03 13:22:00"
title = "Selenium: Xpath locator can not be used as Option Locator"
draft = "false"
categories = ["Technical"]
tags = ["selenium", "xpath"]
author = "samueladesoga"
+++

In my new job been doing a lot of selenium and i needed to scroll through the list of options in a select element and click on a particular options.

I have initially used the browser.DoubleClick

browser.DoubleClick("xpath=//select/option[child::text()='Option_Label']");)

But then this didnt work because selenium doesn't have the functionality to scroll down the select element in other to make my desired option visible.

Looking through the selenium api, i have used another method, which take in two parameters, the select locator and the option locator. So i used:

browser.Select("xpath=//select", "xpath =//option[child::text()='Option_Label']"); 
that hasnt work either as the option locator type cannot be xpath. 

It has to be a label, id, atrribute, name or any other html locator so i have done 

browser.Select("xpath=//select", "label=Option_Label"); which in my own opinion i think is good as it is robust for a selenium test.

