+++
date = "2011-04-26 14:16:00"
title = "Redirecting blogger post to wordpress.com"
draft = "false"
categories = ["Programming"]
tags = ["blogger", "redirect", "wordpress"]
author = "samueladesoga"
+++

I moved my blog from the blogger one to wordpress and i wanted to ensure that people that have bookmarked post on my old blog get redirected to the new one on wordpress as i wouldnt be update the old blog anymore.

I found a lot of effort by different people and all the stuff that was suggested using javascript didnt work for me, what i got was regardless of the page you are on my old blogger site, you would be redirected to my homepage on the wordpress site which is not very helpful.

With inspiration from this <a href="http://etairaz.wordpress.com/2011/02/21/redirecting-visitors-in-an-old-blogger-blog-to-new-location-on-wordpress-com/" target="_blank">post</a>, I decided to write my own piece of javascript to make sure that each post is redirected to its equivalent on the wordpress blog.

<code>[sourcecode language="javascript"]
 <div>
<div style="position: fixed; top: <span class='hiddenSpellError'>30px</span>; left: 30px; border: solid 2px #333; color: #000; background-color: yellow; padding: 5px; width: 400px; z-index: 5; font-family: verdana, geneva, arial, helvetica, sans-serif; font-size: large;"></div>
```
<div><strong>My blog has moved!</strong></div>
```
<div>You should be automatically redirected in 5 seconds. If not, visit
<a href='http://samueladesoga.wordpress.com/'> <span style="font-weight:bold;color:#bb0000;">http://samueladesoga.wordpress.com</span></a>
and update your bookmarks.</div>

</div>



function addZero(numberToPad)
{
return ("0" + numberToPad).slice (-2);
}

function convertTitleToUrl(title)
{
title = title.replace(/\'/g, "").replace(/\"/g, "")
return title.replace(/^\s+|\s+$/g,"").replace(/\s+/g, "-").toLowerCase();
}
var m_wpUrl = 'http://samueladesoga.wordpress.com/';
var m_published = document.getElementsByClassName('published');
var m_postName;
if(m_published.length == 1)
{
m_published = m_published[0].getAttribute('title');
var m_pubDate = new Date(m_published);
var m_url = location.href;
var m_lastSlash = m_url.lastIndexOf('/');
var m_lastDot = m_url.lastIndexOf('.');
m_postName  = document.getElementsByClassName('post-title')[0].firstChild.data;
if(m_lastDot &gt; 0 &amp;&amp; m_postName.indexOf("_archive") &lt; 0) m_wpUrl += m_pubDate.getFullYear() + &#039;/&#039; + addZero(m_pubDate.getMonth() + 1) + &#039;/&#039; + addZero(m_pubDate.getDate()) + &#039;/&#039; + convertTitleToUrl(m_postName);

}
//redirect in 5 seconds
window.setTimeout(function(){location.href = m_wpUrl}, 5);

//change text
document.getElementsByClassName(&#039;redirectLink&#039;)[0].setAttribute(&#039;href&#039;, m_wpUrl);
document.getElementsByClassName(&#039;redirectText&#039;)[0].innerText = m_wpUrl;



 [/sourcecode]

```
In this <a href="http://etairaz.wordpress.com/2011/02/21/redirecting-visitors-in-an-old-blogger-blog-to-new-location-on-wordpress-com/" target="_blank">post</a> which i have taken inspiration from, the writer advises to put a gadget anywhere on your blog, that didnt work for me because sometimes where i try to do a javascript
<blockquote>document.getElementsByClassName('published');</blockquote>
This part of the code fails because the page might not be fully loaded and if the gadget is placed above the post you want to redirect to its new location, the scripts would always fails.

So what I have done is to use two gadgets, use one gadget above the post and this gadget would contain the html bit that displays the information that the blog has moved and the second gadget I place lower down on the page; this is the gadget that  contains the JavaScript to be executed.

See image below:

<a href="http://samueladesoga.files.wordpress.com/2011/04/selection_004.jpeg"><img class="alignnone size-medium wp-image-55" title="Selection_004" src="http://samueladesoga.files.wordpress.com/2011/04/selection_004.jpeg?w=300" alt="gadget positions" width="572" height="398" /></a>

Also in the <a href="http://etairaz.wordpress.com/2011/02/21/redirecting-visitors-in-an-old-blogger-blog-to-new-location-on-wordpress-com/" target="_blank">post</a> which i have taken inspiration from, the writer gets the url of the new wordpress post from the url of the blogger post, i have refused to do same as it seems that blogger tends to strip out certain words such as "the". Hence my script would get the title of the blogger post which you are viewing and then attempt to create a slug with it would append to the new wordpress domain.

Hope you find this useful as well while it works.

