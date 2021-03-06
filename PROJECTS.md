# Dominic Coelho | Projects
Constantly a WIP. Last updated: November 2018.

## About
This readme is a place for me to highlight certain projects that I've completed (solo or as part of a team). As time goes on the layout will improve. The aim is to provide a central place to list some of my projects, link to their repos, and briefly summarise what they are, what I'm proud of, and what could be improved.

Projects listed in reverse chronological order (most recent -> oldest).

## Projects I'd like to highlight
### Chrome extension: relative URL creator (solo project)
At Ticketmaster, one of the large internal projects for the front-end team is populated by an API that provides absolute URL paths, not relative. This means that - when running the project locally - navigation is very hard, as clicking on internal links takes you to the live site instead of the local page that you are likely working on.
I created a Chrome extension to efficiently and reliably change these links to be relative in the local environment, so that I - and other members of my team - could quickly/naturally browse our local versions of the site.
* Proud of:
   * Managing to quickly identify the problem, design the extension and create a working prototype in my second week at the company, with no prior experience of building Chrome extensions
   * Creating a basic settings page for my extension to ensure it was easy to add in to my teammate's workflows
   * The fact that it works as intended, and I have managed to save both myself and colleagues time and frustration!
* What could be improved:
   * Nothing major, although there are several code design improvements that I have planned/have already implemented.

### "This Works" (group project)
A way to connect SMEs with local governments. The site allows SMEs to set up and edit profile pages (involving user registration, file upload, video embedding and more). Future goals are to make this easily searchable for local governments to find the SMEs that can solve/have already solved problems that they want to tackle.
* Repo link: [sleuth-coop](https://github.com/VirtualDOMinic/sleuth-coop) (forked to show state of project after 2 weeks of work)
* Demo may be viewable [here](http://sleuth-sme.herokuapp.com/), but will be affected by subsequent build sprints
* Proud of: 
    * How much my team and I achieved in such a short period (~10 days of build time, with interuptions due to client meetings and other commitments on the course)
    * The fun carousel form that we built for the SME signup flow
    * Getting stuck in with planning, QA, design, react, node and postgreSQL (i.e. not just focusing on one technology/area)
* What could be improved:
    * The testing leaves plenty to be desired
    * Several areas to refactor (e.g. the carousel validation logic)
    * The session authentication/route protection logic is purely demonstrative (i.e. not for use in production) - easily bypassed, and relies on user IDs matching company IDs in our database logic
  
### Group timer/stopwatch (solo project, WIP)
A way to easily time how long each person in a group talks for during a presentation. This is to enable teachers (for example) to give those who are less confident/get talked over more time to speak.
* Repo link: [stopwatch-counter](https://github.com/VirtualDOMinic/stopwatch-counter)
* Please see the repo's [readme](https://github.com/VirtualDOMinic/stopwatch-counter/blob/master/README.md) and [issues](https://github.com/VirtualDOMinic/stopwatch-counter/issues) for a summary of future goals, improvements that should be made, etc.
* Proud of:
    * The idea and the overall implementation
    * The use of vanilla JS (no frameworks or libraries)
* What could be improved:
    * The UX/how intuitive the app is to a new user
    * The CSS 
    * Add tests
    * See project readme and issues for more detail


