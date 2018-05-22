+++
date = "2009-11-18 12:24:00"
title = "&gt;Search for a single digit within a string using regex as provided in java api"
draft = "false"
categories = ["Software Testing"]
tags = ["pattern", "selenium", "Java", "regex", "string", "test", "xml"]
author = "samueladesoga"
+++

&gt;In my current work, i have been writing a lot of test in Java, which obviously means i need to learn a lot more about the Java api, which is good i think?????<br /><br />Well i needed to match the single digit in this string "home-area-1" and return this digit. With a quick google i found this piece of code <a href="http://java.sun.com/j2se/1.4.2/docs/api/java/util/regex/Pattern.html">here</a>.<br /><br />Pattern p = Pattern.compile("a*b");<br />Matcher m = p.matcher("aaaaab");<br />boolean b = m.matches();<br />System.out.println(b);<br /><br />A quick run of this code printed "true" which means the code works.<br /><br />So i wrote this:<br /><br />Pattern p = Pattern.compile("[1,2,3,4]");<br />Matcher m = p.matcher("promo-area-3");<br />System.out.println(m.group());<br /><br />and guess what this fails ...... giving me an "illegal state exception"<br /><br />Pattern p = Pattern.compile("[1,2,3,4]");<br />Matcher m = p.matcher("promo-area-3");<br />boolean b = m.matches();<br />System.out.println(b);<br /><br />This returns false which suggests that matching is not working properly.<br /><br />After a lot of guesses and try and errors , i did<br /><br />Pattern p = Pattern.compile("[1,2,3,4]");<br />      Matcher m = p.matcher("promo-area-3");<br />     while (m.find()) {<br />       System.out.println("regex stuff " + m.group());<br />     }<br /><br />My thinking is this, the first code with this pattern "Pattern.compile("a*b");" was searching for a text which the subsequent one "Pattern.compile("[1,2,3,4]")" was a search for a character within a sequence and maybe this account for the while loop with m.find ........<br /><br />Am not sure, maybe if anyone has a better explanation ... i would appreciate

