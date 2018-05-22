+++
date = "2012-02-01 15:30:39"
title = "Performance Testing experience using Ant and Jmeter - Part 2"
draft = "false"
categories = ["Software Testing"]
tags = ["performance testing", "ant", "Jmeter", "teamcity"]
author = "samueladesoga"
+++

In my last <a href="/post//2012/02/01/performance-testing-experience-using-ant-and-jmeter-part-1/">blog post</a>, i described how i have used <a href="http://code.google.com/p/jmeter-plugins/">jmeter-plugins</a> at my current client site, now i am faced with another problem , i need to be able to run these performance test from command line, in other for these performance tests to be executed in a CI environment such as teamcity.

A quick search brings to light the <a href="http://www.programmerplanet.org/pages/projects/jmeter-ant-task.php">ant jmeter task</a> which is an ant task for running jmeter test. This fulfils a number of the objectives i have set in this <a href="/post//2012/02/01/performance-testing-experience-using-ant-and-jmeter-part-1/" title="Performance Testing experience using Ant and Jmeter – Part 1">first part</a> of this blog post as teamcity has got an inbuilt runner for ant. To install this, you would need to include ant-jmeter-1.1.1.jar in your Ant classpath. See the <a href="http://www.programmerplanet.org/pages/projects/jmeter-ant-task.php">link</a> for more instructions.

And the author of the ant jmeter tasks has alsop produced an <a href="http://www.programmerplanet.org/media/ant-jmeter/jmeter-results-report.xsl">xsl file </a> which can be fed into the xslt ant task to produce a nicely formatted html result page.

I have put all these into an ant script that looks like the below:

[sourcecode]

&lt;project name=&quot;Performance Testing for my project&quot; basedir=&quot;.&quot; xmlns:ac=&quot;antlib:net.sf.antcontrib&quot;&gt;
  &lt;taskdef uri=&quot;antlib:net.sf.antcontrib&quot; resource=&quot;net/sf/antcontrib/antlib.xml&quot;&gt;
    &lt;classpath&gt;
    &lt;pathelement location=&quot;${basedir}/lib/ant-contrib-1.0b3.jar&quot;/&gt;
  &lt;/classpath&gt;
  &lt;/taskdef&gt;

  &lt;target name=&quot;clean&quot;&gt;
    &lt;delete includeemptydirs=&quot;true&quot;&gt;
      &lt;fileset dir=&quot;Results&quot; excludes=&quot;**/PerformanceCharts.html&quot;/&gt;
    &lt;/delete&gt;
  &lt;/target&gt;

  &lt;target name=&quot;run-jmeter&quot; depends=&quot;clean&quot;&gt;
    &lt;taskdef name=&quot;jmeter&quot; classpath=&quot;${basedir}/jakarta-jmeter-2.5.1/extras/ant-jmeter-1.1.0.jar&quot;
             classname=&quot;org.programmerplanet.ant.taskdefs.jmeter.JMeterTask&quot;/&gt;

    &lt;jmeter
            jmeterhome=&quot;${basedir}/jakarta-jmeter-2.5.1&quot;
            resultlog=&quot;${basedir}/Results/JMeterResults.xml&quot;&gt;
      &lt;testplans dir=&quot;${basedir}/TestPlan&quot; includes=&quot;*.jmx&quot;/&gt;
      &lt;property name=&quot;request.threads&quot; value=&quot;300&quot;/&gt;
      &lt;property name=&quot;request.loop&quot; value=&quot;10&quot;/&gt;
    &lt;/jmeter&gt;
  &lt;/target&gt;

  &lt;target name=&quot;create-reports&quot; depends=&quot;run-jmeter&quot;&gt;
    &lt;xslt
            in=&quot;${basedir}/Results/JMeterResults.xml&quot;
            out=&quot;${basedir}/Results/JMeterResults.html&quot;
            style=&quot;${basedir}/jakarta-jmeter-2.5.1/extras/jmeter-results-detail-report_21.xsl&quot;/&gt;
  &lt;/target&gt;

  &lt;target name=&quot;create-graphs&quot; depends=&quot;create-reports&quot;&gt;
    &lt;ac:for param=&quot;reportType&quot; list=&quot;TimesVsThreads,ResponseTimesOverTime,ThreadsStateOverTime&quot;&gt;
      &lt;sequential&gt;
        &lt;java jar=&quot;${basedir}/jakarta-jmeter-2.5.1/lib/ext/CMDRunner.jar&quot; fork=&quot;true&quot;&gt;
          &lt;arg value=&quot;--tool&quot;/&gt;
          &lt;arg value=&quot;Reporter&quot;/&gt;
          &lt;arg value=&quot;--generate-png&quot;/&gt;
          &lt;arg value=&quot;${basedir}/Results/@{reportType}.png&quot;/&gt;
          &lt;arg value=&quot;--input-jtl&quot;/&gt;
          &lt;arg value=&quot;${basedir}/Results/JMeterResults.xml&quot;/&gt;
          &lt;arg value=&quot;--plugin-type&quot;/&gt;
          &lt;arg value=&quot;@{reportType}&quot;/&gt;
          &lt;arg value=&quot;--width&quot;/&gt;
          &lt;arg value=&quot;800&quot;/&gt;
          &lt;arg value=&quot;--height&quot;/&gt;
          &lt;arg value=&quot;600&quot;/&gt;
        &lt;/java&gt;
      &lt;/sequential&gt;
    &lt;/ac:for&gt;
  &lt;/target&gt;

  &lt;target name=&quot;main&quot; depends=&quot;clean,run-jmeter,create-reports,create-graphs&quot;/&gt;
&lt;/project&gt;


[/sourcecode]


I have added an additional target for  deleting the test result files as jmeter would append subsequent test results to the previous test results in the file, if file is not deleted. 

You would also notice that there is a target named "create-graphs", this uses the <a href="http://code.google.com/p/jmeter-plugins/wiki/JMeterPluginsCMD">CMDRunner.jar</a> which is a command line utility shipped with <a href="http://code.google.com/p/jmeter-plugins">jmeter-plugins</a>. This tool has helped me to re-create the graphs which i referred to in<a href="/post//2012/02/01/performance-testing-experience-using-ant-and-jmeter-part-1/" title="Performance Testing experience using Ant and Jmeter – Part 1"> part 1 of the blog</a>. It parses the xml result created by the ant jmeter task and creates png images for each of the graphs specified. 

This graph images can then be embedded into an html page to be displayed in teamcity.

I hope this helps someone.

