+++
date = "2012-02-28 15:18:12"
title = "Cucumber unicode support"
draft = "false"
categories = ["TEchnical"]
tags = ["BDD", "Test Automation"]
author = "samueladesoga"
+++

I ran into a problem today where some french and spanish characters were being displayed strangely.

And this made my test to fail, 

After some poking around in google i can across a post that suggested adding

require 'cucumber/formatter/unicode'


to the env.rb and that seem to have sorted the problems i was having.

Hopes this saves you some time.

