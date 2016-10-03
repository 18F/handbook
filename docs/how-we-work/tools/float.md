---
title: Float
---

## About Float

[Float](https://18f.float.com) is a team scheduling tool that helps us keep track of everyone's availability and improve visibility into who's working on what — no small feat for a team of our size. Float also allows product managers to work with the Finance team to align project planning with available budget.  Right now, almost all teams are represented in Float (with the exception of Talent, Front Office, and Operations team). The Operations team serves as the administrator of Float. If you have questions or comments about using Float, you can post them in [#admins-float](https://18f.slack.com/messages/admins-float/).

As an 18F team member, you have access to a comprehensive breakdown of our projects. As we take on new projects, engagement / project managers / product leads  use Float to record the decisions made during the [staffing and resource planning process](https://github.com/18F/staffing-and-resources), help us track availability, improve our processes, and make us more effective.

## Roles

There are two different types of Float users at 18F:

* **Administrators:** This group includes chapter heads, their designees,  engagement managers, project managers, product leads, and members of Team Ops. Although all administrators have full editing capabilities in Float, only members of the Ops team should add new projects and new user accounts, based on the existing agreements pipeline and onboarding processes. 

* **Observers:** This group includes most 18F team members. Observers can see their weekly schedules in the My Schedule tab. They can also view everyone else's projects and availability.

## Float vs. Tock: what’s the difference?

Some folks have expressed confusion about the difference between Float and Tock; after all, both help us track our time. To clarify, Float is about planning current and future project work, while Tock is the tool folks use to record how they spent their time in the past. In other words, Float is about projections and Tock is about historical records. 

The Operations team provides a weekly [Float vs. Tock report](https://docs.google.com/spreadsheets/d/1c5ws6FwkgteS4oaysSS779madyFcjsr9IQzxm6x3RnU/edit#gid=1761250053) to help the team reconcile upcoming plans with the actual time logged. Liaisons from Business Units will review this report and work with engagement / project managers / product leads and Chapters to resolve variances between Float and Tock, as needed.

## Setup and getting started

If you’ve never used Float, you’ll be glad to hear that it’s quite easy to set up. You can request your account  [#admins-float](https://18f.slack.com/messages/admins-float/). Once an administrator creates an account for you, you’ll get an invitation email. If you haven’t received this email and are sure your account has been created, please check your spam folder — the invite might mistakenly have been sent there. 

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/invite.png" alt="Float invite email">  
</figure>

When you first sign in, you'll be prompted to set a password. 

If you’re currently an observer and need to become an administrator, please request an account upgrade in [#admins-float](https://18f.slack.com/messages/admins-float/). 

## See how project time is allotted

Whether you're an observer or administrator, you have the ability to see everyone's project schedules and view your own project schedule. Here’s what you’ll be able to do with either type of Float account: 

- View the project schedule by day, week, or month
- Sort the project schedule by name, availability, department, or job title
- Search by person or project
- View anyone's assigned tasks and projects
- Export the project schedule to .CSV format or print

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/schedule-overall.gif" alt="Float Schedule - Overall">  
</figure>

You can also view your individual project schedule:

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/schedule-individual.png" alt="Float Schedule - Individual">  
</figure>

## Change your name, email, or password

This is where you change your email and password settings. You can also subscribe to your schedule via iCal to sync it with your personal calendar.

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/settings-observer.gif" alt="Float Settings - Observer">  
</figure>

## See who is doing what

Here you can view other people’s roles and projects. Using the top search box, you can filter to see who's working on which projects.

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/people-observer.gif" alt="Float People - Observer">  
</figure>

## See projects, teams, and their details

The Projects page is you’ll find the details of each project; it’s also where you can filter the list of projects by keyword. (In this way, it’s similar to the *People* page, where you can filter by team member name.)

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/projects-observer.gif" alt="Float Projects - Observer">  
</figure>

## Analyze project data and schedules

From the report page, you can filter by date range, employee status, and whether a project is tentative or confirmed. As you adjust these filters, you'll see the following calculations for the project and period you’ve selected:

- Overall utilization
- Number of scheduled hours
- Available unscheduled hours
- Upcoming company-wide holidays
- Number of total working hours
- Percentages of billable and non-billable hours scheduled

Finally, please note that, regardless of what page you’re on in Float, you can always use the search bar up top to filter what you see.

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/reports-observer.gif" alt="Float Reports - Observer">  
</figure>

---

## For admins

As a Float administrator, you can do everything an observer can do, but you also have the ability to edit and add projects, edit people’s profile, and add users to Float.

### Add someone to Float (Ops team only)

Administrators who are part of Team Ops can add people to Float, as well as archiving and removing folks from the schedule or editing folks’ planned work hours.

To add someone to Float, click on the plus sign in the upper-right-hand corner and select Add Person. A dialog box will pop up and ask for the following:

- First and last name (required)
- Email: Use the person's GSA email address (required)
- Access type: Default should be “Observer” (required)
- Title
- Department
- Full time
- Tags:  Add a tag for the person’s  location using one of the following location codes (Required. Make this tag **GREEN**). If needed, for some remote workers, use **Remote** as their location code. 

  - ATL
  - AUS
  - BOS
  - CHICAGO
  - CHO
  - DAY
  - DC
  - IND
  - LAX
  - LFK
  - MSP
  - NJ
  - NYC
  - PDX
  - PITTSBURGH
  - RDU
  - SBA
  - SEA
  - SF
  - TUC
  - WESTERN MA

You can also add tags representing a person’s skills. Please use **yellow** tags for skills. Skills tags are not required.

- Chat. Under the Additional section of the dialog box, Tock ID is required for the “Chat” field. This is very important as this is the key to link Float data with Tock data. Tock ID can be found on [Tock Employee page](https://tock.18f.gov/employees/). 

Once you add a person, you can add them to projects.

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/adding-person.gif" alt="Float - Add a Person">  
</figure>

### Add a project (Ops team only)

Currently, Ops adds projects to Float **only** after the IAA/MOU process is started, or when a staffing decision is made in the [staffing and resource planning process](https://github.com/18F/staffing-and-resources). If you’d like to request that a project be added to Float, please do so in [#admins-float](https://18f.slack.com/messages/admins-float/). If a member of  Ops isn’t able to add your project, they’ll let you know. 

The Float project name and other information should be consistent with Tock. Although technically possible, other non-Team Ops Float Admins should not create new projects in Float. 

To add a project to Float, click the plus sign in the upper-right-hand corner of the page and choose "Add Project." A dialog box will pop up and ask for the following:

- Project: Please double-check that the name you enter here is consistent with the [Tock project name](https://tock.18f.gov/projects/). 
- Client (Agency): While most clients are already in Float, you also have the option to enter a new client. If you have questions about whether your client is already entered in Float, please check in with the folks in  [#admins-float](https://18f.slack.com/messages/admins-float/).
- Color: The default color should be blue.
- Notes: Support notes that help define the project. These notes needn’t be lengthy — a sentence or two is just fine.
- Tags: The first tag is reserved for the project’s [Tock ID](https://tock.18f.gov/projects/). If you’re entering a project before its Tock ID is assigned, enter **Tock ID TBD** for the first tag and revise it later when the Tock ID is available. You can also add other tags to help team members find the project more easily, but you’re not required to add more tags. 
- Billable/Non-billable: Use this field to indicate whether your project is billable or non-billable. Make sure what you enter here is consistent with the settings in Tock.
- Tentative: If your project’s IAA/MOU is still in progress, mark your project as Tentative. 
- Team: If your resourcing request has been approved, you can use this tab to add team members to a project. 
- Milestones (optional): Use milestones to note key points in the project roadmap.
- Tasks: You can assign tasks to any member of the project team.

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/adding-project.gif" alt="Float - Add a Project">  
</figure>

### Edit schedule (all administrators)

During the staffing and [staffing and resource planning process](https://github.com/18F/staffing-and-resources), Chapters assign people to work on each project. Each engagement or project lead is responsible for keeping their project's Float information up to date, including adding the intial scheduling information once an assignment has been made by a Chapter. If an engagement or project lead sees any unfamiliar scheduling discrepancies, they should work with the employee in question and their Chapter leadership to get it resolved as soon as possible. 

Once a project is created, admins can associate team members with it, block out time on people’s schedules, and assign people specific tasks.

To add a project to someone’s timeline, select the team member you want to add by searching for them by name. (You can also go to the General Schedule view to add someone to a project.) Click on the team member’s timeline — a dialog box will pop up and present  a form you’ll need to fill out. The following are some of the items you can enter in this form:

- Task
- Client
- Project (required)
- Notes: If you are creating or editing a project schedule based on the decisions made in the [staffing and resource planning process](https://github.com/18F/staffing-and-resources), please include a link to the GitHub repo in Float notes to explain when and why things changed. 
- Daily hours: The number of hours each day this person should spend working on this project. 
    The smallest time block in Float is 30 minutes, though we ask that scheduling be done in increments of 4-7 hours. Please use the guidance below when editing schedules. Employees should not be scheduled for more than 32 hours of billable work per week.
    * Full time: 7 hours a day in Float
    * Half time: 4 hours a day in Float
- From/to dates: The dates on which the person should start and stop working on this project. These dates help admins determine who’s available for additional project work and who already has enough work on their plate. 

To edit existing schedule, double click the current schedule - a similar dialog box will pop up and present a form you can edit. 

When you're finished completing this form, hit Create or Update. The assignment will appear on that person's schedule.

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/adding-project-schedule.gif" alt="Float - Add a Project to a Schedule">  
</figure>


### Set up notifications

Float allows you to set up automatic notifications, which are great for keeping people in the loop; you have the ability to set up one-time, immediate notifications or recurring notifications. To do this, select the share icon in the upper-left-hand corner of the page and choose Email Notifications.

<figure class="expandable">
  <img src="{{ site.baseurl }}/images/float/adding-notifications.gif" alt="Float - Add Notifications">  
</figure>

---

#### Still have questions?

Ask in Slack: [#admins-float](https://18f.slack.com/messages/admins-float/), or check out the [Float Help Center](http://support.float.com/help_center).
