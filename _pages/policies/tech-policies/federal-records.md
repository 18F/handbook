---
title: Federal records policy
---

_As the team at TTS begins to provide digital service teams with systems that generate federal records, we must have a policy in place on how to properly treat those records. The vast majority of these systems are new to government use and in some cases, are new to the private sector as well. The paucity of standard operating processes and best practices require 18F to formulate its own._

## Analysis
The **principle** behind Federal Records policy is that the the information we create as public servants immediately becomes *public property*. Legally, it does not belong to an individual civil servant, in the same way that a tree in a national park does not belong to the park ranger who plants it.

The goals of this policy is to ensure that the government doesn't *destroy* information that:

* allows the government to function
* justifies or explains our actions
* the public can use to hold us accountable

While the principle and goals behind the records policy are sound, guidance on records policy, like most government imperatives, has become woefully lengthy, complex, and out of date.

Policies that were made to simplify the management and increase the efficiency of record keeping now result in outcomes *opposite* their original intent. These policies contain design decisions targeted primarily at  paper records or legacy digital formats that were expensive to create, maintain, analyze, and store. As the marginal cost of all of these actions approaches zero, the assumptions under the original policies collapse, and new guidance must be formulated.

Per CFR Title 36 Chapter XII Subchapter B §1220.10, "the GSA is responsible for overseeing economy and efficiency in records management." **To that end, we at TTS are developing new guidance to meet the needs of records management in the 21st century.**

Instead of voluminous record keeping schedules that put the burden on federal staff to properly categorize the information they create and complex documentation on how to properly store the information for retention, our policy can be encapsulated as:

---

_Keep everything, forever_

---

In a world of paper records, such a retention and management policy would be totally unworkable due to staff time limitations and budgetary considerations.

Now, with the ever decreasing cost of storage, keeping everything forever is the *cheapest* option for the Federal government. For example, the hourly rate of a government working finding the appropriate information to dispose of and subsequently deleting it **would cost the government more than simply continu
ing to store the information indefinitely**.

This policy will provide an even more comprehensive history of government, while simultaneously cutting costs by keeping federal staff focused on their mission.

## Policy

In order to meet and exceed all relevant federal records laws, regulations and policies, every fiscal quarter, TTS will take the following actions on every system that it owns:

* export all data out of first and third party systems
* store the data in a discovery system that can be searched against
* move data from the quarter the year previous to an archival storage system (like AWS Glacier) *and* to NARA

The only exemption to this rule shall be the sensitive information of private individuals. That data requires additional actions in order to preserve the security and privacy of the information and thus must be segregated from discovery, archival, or NARA systems. This data will continue to be governed by FISMA and the Privacy Act.

## Questions

### Doesn't someone else take care of records for us?

No. Many federal staff are often asked to make a PDF of an email they "think" should be a record.

Even systems that have been moved to the cloud, like Google Apps for Government, still don't have adequate records policy or systems around them. Most agencies have no common system for archiving or discovery. The records are spread out among multiple mediums.

### Who is responsible for these records?

All GSA employees are responsible for records management. The widespread use of electronic mail (gmail) and electronic records through GSA’s online applications has highlighted the need for everyone to understand how to determine which documents are Federal records and how to manage them effectively. Records serve a number of purposes, including:

* planning administrative and program needs
* documenting GSA activities
* protecting the agency's legal and financial rights
* providing for adequate oversight by Congress and other authorized agencies
* documenting the agency's history
* providing continuity of operations during an emergency or disaster

Records are critical to an organization to function effectively and efficient. [Visit GSA Insite Records Management Page](https://insite.gsa.gov/portal/category/530229) for general procedures on identifying Federal records, determining what documents are needed to document Agency activities, for official files and managing records in accordance with the law.

### Are any of these records "permanent records"?

Probably. But it would require significant time and expense to properly categorize and segment such records. By keeping *all* of our records forever, we ensure whatever records that we would be required to keep permanently are, and additional information which might be provide important context to the permanent records is kept as well.

### Doesn't the new Capstone initiative by NARA fix all of this?

No. Capstone is primarily a solution for records management of email, where email records are preserved by schedules determined by the seniority of individuals receiving or sending those emails. 

For example, under Capstone, all email sent or received by the head of a department or agency would be kept permanently, while the email of a senior executive may be kept for many years but not permanently.

Further, research indicates most of agencies have *not* yet implemented Capstone, and this includes GSA.

## References

* [GSA Insite Records Management Page](https://insite.gsa.gov/portal/category/530229)
* [General duties](https://www.law.cornell.edu/uscode/text/44/3101)
* [Transfer to record centers, archivist](https://www.law.cornell.edu/uscode/text/44/3103)
* [Presidential and Federal Records Act of 2014](https://www.congress.gov/113/plaws/publ187/PLAW-113publ187.pdf)
* [OMB Guidance on Capstone, i.e. emails](https://www.whitehouse.gov/sites/default/files/omb/memoranda/2014/m-14-16.pdf)
* [Agency Record-keeping Requirements: a Management Guide, 1996](http://www.archives.gov/records-mgmt/publications/agency-recordkeeping-requirements.html)
* [Prevent violation of disclosure](https://www.law.cornell.edu/uscode/text/5/552a)

---

#### Still have questions?

Ask in Slack: [#legalstuff](https://gsa-tts.slack.com/messages/legalstuff/) or [#infrastructure](https://gsa-tts.slack.com/messages/infrastructure/)

