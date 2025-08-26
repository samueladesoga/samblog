+++
title = "Rebuilding Outdated Vuejs Rails Api in Rails8"
date =  2025-08-26T10:24:43+01:00
draft = false
categories = ["Technical"]
tags = ["Rails8", "VueJS", "Kamal2"]
author = "samueladesoga"
image = "images/blog/deploy-with-kamal2.png"
+++

Its been over 10years that I got paid professionally to write code; however I have remained technical and one out of the many ways I try to keep myself technically competent is building web applications to manage tasks that might well be suited for excel. I prefer bespoke software over off the shelf as it’s cheaper for me and I get to keep my Ruby on Rails knowledge (my favourite web application framework) up to date. I am also interested in modern tools for continuous testing (cypress & playwright)  and deployment (Docker, GitHub actions).

9years ago, pairing with one of our developers, we built a Tenant Management System in an older version of rails (api only) and frontend in VueJs. Why VueJS? I wanted to learn a simple Javascript framework, despite the fact that I find Javascript ecosystem cumbersome, especially when upgrading libraries are a pain.

This app was built on heroku, which has become a little bit more expensive even for hobby project, I had been thinking about moving away to something that was way cheaper for an hobby application.

Since the Release of Ruby8 and multiple posts and videos by the awesome [DHH](https://world.hey.com/dhh), I started to pay more attention to the improvements in rails 8. After a bit of research, I finally took the plunge to build the Tenant Management System in Rails. Below is an highlight of what I achieved and learnt in the 2months of fiddling with Rails8: 

- Deployed a staging and production instance of the new version of the Tenant Management System; The previous application was deployed on Heroku but over the last few years, heroku became too expensive for hobby project such as mine. I really wanted to deploy both staging and production instance on the same VPS. The choice of VPS was between [DigitalOcean](https://www.digitalocean.com/) and [Hetzner](https://www.hetzner.com/). After reading several reddit reviews and article from DHH, I settled for Hetzner.

- [Kamal2](https://kamal-deploy.org/), which was bundled as part of rails8 really made my life easier; I do have knowledge of linux, ssh and the whole jazz but Kamal2 does a good job to abstract away some of the complexities. I did  struggle a bit with secret, pre-deploy and a new other bits; that was large due to gaps in my own knowledge. However at the end of the day the article I will list several blog post that I consulted and of course, chatGPT was handy. (I did find chatGPT suggesting solutions from Kamal1 quite annoying but we got there in the end)

- The Tenant Management System is used by a handful of users; so I wanted to move away from Postgres (more savings) and use Sqlite in its place. The choice of sqlite meant I needed to implement some form of replication, and thankful the ruby gem [Litestream](https://litestream.io/) - Streaming SQLite Replication came in handy.

- For Background jobs, my goto has been sidekiq/redis but with solid_queue bundled into rails8, another dependency that wasn’t required anymore. I used another gem, [mission control](https://github.com/rails/mission_control-jobs) for the queue dashboard.

- Historically, my applications could have between 5 and 10 secrets stored in environment variables, but for the first time, I was able to use the Rails Credentials for storing secrets; it took me a couple of days to get my head around this feature. I figured that I don’t have to set as many env variables anymore.

What I have built is an MVP, gets the job done and I will continue to build on this application in my spare time, weekends and evenings; when work permits.

- I have not followed any TDD practices as I had other goals for this exercise and I got caught out a few times with shipping bugs into the application.As a result, I will like to explore some integration tests for this application.

- Deployment is currently done from my local to both staging and production, I will like to move all that into GitHub actions almost immediately. My usual setup is such that; I push to the main branch, a set of automated tests is triggered, followed by an automatic deploy to the staging branch, where another set of automated tests are triggered. Only when the entire build passes, do I manually trigger a deployment to production.

- Improve the User Experience on the application, with sprinkles of JavaScript animation and other nice to have features. 

Below is a list of links that I consulted regularly throughout the process. 

https://community.hetzner.com/tutorials/deploy-rails-8-app-on-hetzner-with-kamal
https://www.beansmile.com/posts/kamal-2-deploy-rails-applications-guide
https://www.reddit.com/r/rails/comments/1dle5xj/kamal_and_database_migrations/
https://www.fromthekeyboard.com/kamal-2-features-that-im-excited-about/

All in all, this was such a pleasant experience, pairing with an AI Agent (agent mode in VS Code) and chatGPT; It helped me with research, code reviews and styling the frontend (something I do not particularly enjoy). And if you will like to have a look at the repo, its here: https://github.com/samueladesoga/primeVilla.v2
