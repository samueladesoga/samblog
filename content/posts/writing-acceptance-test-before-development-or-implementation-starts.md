+++
date = "2011-07-25 15:06:02"
title = "Writing acceptance test before development or implementation starts"
draft = "false"
categories = ["Agile Delivery"]
tags = ["BDD", "Test Automation"]
author = "samueladesoga"
+++

In my the few years, where i have pushed for testers developers to write acceptance test before development or implementation commences, I've had testers come up to me say its difficult to achieve this when you dont know what the UI would look like.

This post would attempt to decribe how i have done this in the past and i still do this at the moment.

NB: Ideally i would write my test using page object pattern, if this was a new project,
I would start creating page objects

Supposing i have a feature file with this scenario

{{< code "ruby" >}}

Given I am on the ebay website
When I add &quot;Item A&quot; to my shopping basket
Then I should be able to pay for my item using &quot;Paypal&quot;

class EbayHome

	def select_item item_name
		raise "Not yet implemented"
	end

end

class ShoppingBasket
	def item_present? item_name
		raise "Not yet implemented"
	end
end

class PayPalPage
	def pay_for_shopping
		raise "Not yet implemented"
	end

	def get_item_cost item_name
		raise "Not yet implemented"
	end
end


{{< /code >}}

As you can see in the code above i have not written any specifics as to how this would be implemented on the page, but i have created my pageobjects
and i have filled in empty methods block, which would raise an exception "Not yet implement" if this test were to be executed.

NB: If i already had the page object class, i would simply write the methods blocks that what would represent the feature yet to be developed.

I would go ahead and write my step definitions as below.

[sourcecode]
Given /I am on the ebay website/ do
visit EbayHome
end

When /I add &quot;(.+)&quot; to my shopping basket do |item|
on EbayHome do |ebay_home|
ebay_home.select_item (item)
end
end

Then /I should be able to pay for my item using &quot;Paypal&quot;/ do
on PayPalSite do |paypal|
paypal.pay_for_shopping
end
end

[/sourcecode]

So those are my tests done and this is good enough for developers to start working and without knowing what element the items on the page would be wrapped in, I have been able to write my failing test
and as soon as developers know more about the structure of the page i can start replacing the "Not yet Implemented" with watir or selenium implementation of the page.

NB: You would have noticed the code blocks for the page object (e.g. on EbayHome ...), i would write a post later on this but this is a result of work done by alister scott, it a gem called watir-page-helper, very nice tool.
This could have been done in any language and using any tool, I have decided to use ruby, cucumber and watir; as these are the tools i am using on my current project.
I hope you find this useful

