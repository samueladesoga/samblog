+++
date = "2017-04-02 22:46:32"
title = "Uploading CSS files using \"Shrine\" gem"
draft = "false"
categories = ["Technical"]
tags = ["Development", "Image Upload", "Ruby On Rails"]
author = "samueladesoga"
+++

I have recently switched from <a href="https://github.com/carrierwaveuploader/carrierwave">carrierwave</a> to <a href="https://github.com/janko-m/shrine">shrine</a> in my Rails <a href="http://www.yangah.com/">app</a> and i thought i follow the advice of <a href="http://www.eviltester.com">Alan Richardson</a>, saying when you learn something new, irregardless of how trivial it might seem to you, share it and save someone else that headache.

So in the <a href="http://www.yangah.com/">Yangah</a> application, we upload a number of files to amazon s3 which include images, font files and css files for these fonts. However, i have found that with shrine, out of the box it was not able to correctly set the mime type for the uploaded file on s3.

I actually did try to fix this myself and eventually reach out to the Shrine google group and Janko, the author of the Shrine gem was able to provided a suggestion which worked first time and i am grateful for that.

Here is a link to the actual thread but just incase it gets deleted; this is extract of the message sent by Janko.
<blockquote>The `determine_mime_type` plugin uses the "file" utility by default for recognizing the MIME type, and it seems to recognize .css files as "text/plain" (and it's the same for .js files). As noted in the `determine_mime_type` plugin documentation, one analyzer won't be able to correctly detect correctly all types of files.
<div>For text-based file formats (non-binary) it's probably better to use the "mime_types" analyzer, which uses the mime-types gem to determine the MIME type from the file extension directly (rather than file content). So you could built a custom analyzer that mixes and matches "file" and "mime_types" analyzers; trying the "file" analyzer first, and if the best MIME type that it could come up with was "text/plain" (which is technically correct), then you can call the "mime_types" analyzer to determine which text-based format is it exactly.</div>
<div></div>
<div>This way you still get the benefits of the `file` utility preventing someone from uploading a binary file with a .css extension, and use the precision of determining from file extension when needed.</div></blockquote>
<div>

I installed the gem "mime_type" and update the FileUploader class with code snippet below.

plugin :determine_mime_type, analyzer: <b>-&gt;</b>(io, analyzers) <b>do</b>
<p style="padding-left:30px;">mime_type <b>=</b> analyzers<b>[</b>:file<b>].</b>call(io)</p>
<p style="padding-left:30px;">mime_type <b>=</b> analyzers<b>[</b>:mime_types<b>].</b>call(io) <b>if</b> mime_type <b>==</b> "text/plain"</p>
<p style="padding-left:30px;">mime_type</p>
<b>end</b>

</div>
&nbsp;

And that's it!!! i have the css file now being uploaded correctly with the mime type of "text/css".

&nbsp;

&nbsp;

&nbsp;

&nbsp;

