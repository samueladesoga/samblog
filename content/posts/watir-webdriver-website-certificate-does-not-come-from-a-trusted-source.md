+++
date = "2011-10-18 10:40:00"
title = "Watir-Webdriver: Website certificate does not come from a trusted source"
draft = "false"
categories = ["Technical"]
tags = ["automation", "watir-webdriver", "SSL Certificate", "testing"]
author = "samueladesoga"
+++

A colleague came across this problem while executing our acceptance tests.

The issue was related to the fact that the SSL certificate for the site was named differently from the domain on which the test were being executed on .

Hence, we got this error:

"xxx.xxx.xxxx uses an invalid security certificate.The certificate does not come from a trusted source.The certificate is only valid for &lt;a id="cert_domain_link" title="xxx.xxx.com"&gt;xxxx.xxxxx.com&lt;/a&gt;The certificate will not be valid until 13-Jul-11 10:28 AM. The current time is 18-Oct-11 10:14 AM
The page you are trying to view can not be shown because the authenticity of the received data could not be verified.Please contact the web site owners to inform them of this problem. 
Alternatively, use the command found in the help menu to report this broken site."

Well the fix that helped was:

[sourcecode]
profile = Selenium::WebDriver::Firefox::Profile.new
profile.assume_untrusted_certificate_issuer = false
@browser = Watir::Browser.new(:firefox, :profile =&gt; profile)
[/sourcecode]

I still need to understand what this bit of code does but it fixes the problem for us.

&nbsp;

Hope it helps you too

