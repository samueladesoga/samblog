+++
date = "2011-07-20 14:24:55"
title = "Test automation click might not completely simulate an actual human click"
draft = "false"
categories = ["Agile Delivery", "Technical"]
tags = ["Test Automation", "javascript events", "watir-webdriver", "BDD"]
author = "samueladesoga"
+++

I have been working at this client where i am opportuned to use cucumber, watir-webdriver and i came across this problem today. The application i am testing is an e-commerce site and i am writing test for a page on which i click on an item and the item appears on the shopping basket area of the site.

My code look like

[code]

def select_item(item_name)
@browser.li(:text => /#{item_name}/).link(:class_name => "addOptions").click
Watir::Wait.until { @browser.img(:alt => /#{item_name}/).exists? }
end

```
As you can i am waiting for an image which is the icon that represent the item i am buying to appear on the shopping basket. I get this error when the test click on the item

[code]

Element is not currently visible and so may not be interacted with (Selenium::WebDriver::Error::ElementNotDisplaye
dError)

```
And on visual inspection, i can see that the item is being added into the shopping basket, this led me to inspect the source to look for any event that might need to be triggered and i found an "onclick"

To supress this error i had to manually trigger the onclick event by inserting

[code]

@browser.li(:text => /#{item_name}/).link(:class_name => "addOptions").fire_event("onlick&quot;)

```
My test now run reliably. What you can take from this is that even though the UI seems to be doing the right things, there might so event needed for the page logic to behave as expected.

&nbsp;

