---
title: Software Security Requirements
---
Every federal information system must go through NIST's [Risk Management Framework](../steps/) before it can be used to process federal information. This process culminates in a signed Authority to Operate (ATO) being issued. Because the ATO process is a complex, multi-step process which will constrain the design and implementation of your system, you should start thinking about how it applies to your system *before* you begin designing and implementing it.

For a full list, see the [NIST Glossary](https://csrc.nist.gov/Glossary).

## Roles

Roles in ATO processes typically include:

* **Assessor**: Responsible for checking the compliance of systems; sit in an agency's Security team. Validates and verifies that the documented controls (see [Step 3](../steps/#step-3-implement-security-controls)) actually work, using the assessment cases (see [Step 4](../steps/#step-4-assess-security-controls)).
* **Authorizing Official (AO)**: Responsible for overall impact categorization and risk acceptance. The AO is ultimately responsible for determining if the risk of operating the system is acceptable, and if so, issuing an Authority to Operate (ATO) for that system. They often Designate this responsibility to one or more other people.
* **Information System Security Officer (ISSO)**: Supports the information security system, consults on control selection, organizes scanning process. Reports to the Information System Security Manager (ISSM).
* **Penetration tester(s)**: Conducts the penetration test after terms are agreed to as documented in the Rules of Engagement (RoE).
* **Program team** : Those who are trying to build/launch the system.
* **System Owner** The system owner is usually the product lead or tech lead of the project team. They will be named in the ATO documents and are the main contact during the evaluation process that leads up to an ATO.

The long version: [NIST SP 800-37 Appendix D](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-37r2.pdf#page=133)

## FISMA

In the Federal government, the principal law governing the security of information systems is the **Federal Information Security Management Act (FISMA)**. 

One of the goals of the Federal Information Security Management Act of 2002 (FISMA) is to “provide a comprehensive framework for ensuring the effectiveness of information security controls over information resources that support Federal operations and assets.” The National Institute of Standards and Technology (NIST) was tasked with designing and implementing this framework: the result is NIST’s Risk Management Framework (RMF). All federal information and information systems (except classified information and national security systems) are subject to NIST’s RMF. There's [an introduction to the RMF on NIST's website](http://csrc.nist.gov/groups/SMA/fisma/framework.html). A more comprehensive guide, including how to apply the framework, references to the various relevant publications, and definitions of roles and responsibilities, is found in NIST's [Special Publication 800-37](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-37r1.pdf).

"The ATO process", as it's commonly called here in TTS, is formally defined in the National Institute of Standards & Technology (NIST)'s [Risk Management Framework (RMF)](https://csrc.nist.gov/projects/risk-management/risk-management-framework-(RMF)-Overview):

![NIST Risk Management Framework diagram](https://csrc.nist.gov/CSRC/media/Projects/Risk-Management/images-media/OrgRMF_v3.png)

The steps in the process are as follows:

## Step 1: Categorize Information System

The information systems' owner, working with the AO, categorizes the system based on the potential impact on the organization if the information system, or the information within it, is jeopardized. The system will end up with a category of *low*, *moderate* or *high*, based on criteria described [here](../categorization/).

If your system will be providing novel or risky functions, or handling extremely sensitive data, do this as early as possible.

## Step 2: Select Security Controls

"Controls" are individual security requirements laid out by the National Institute of Standards and Technology (NIST). NIST's encyclopedic [Special Publication 800-53](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r4.pdf) (currently on revision 4) is the definitive guide to security and privacy controls for federal information systems.

Your AO determines which controls need to be implemented. This is generally based on the following:

* *The impact level of the system* (low, moderate or high). SP 800-53 provides a "baseline" set of controls for each level. The higher the level, the more controls or control enhancements are in scope. For systems running on cloud infrastructure, you should consult [FedRAMP's security control documentation](https://www.fedramp.gov/resources/documents-2016/).
* *Which controls are already taken care of by your infrastructure*. If you're running in the cloud, many controls are taken care of at the infrastructure or platform layer. If your provider has received a FedRAMP P-ATO, it will provide a document called a *customer responsibility matrix* (CRM) or *control implementation summary* (CIS) listing the residual or hybrid controls that are the responsibility (or partial responsibility) of the applications running on the infrastructure or platform.
* *What type of ATO you want to receive*. The options will be specific to the organization doing the authorizing.
* *Tailoring*. The information system owner, working with the AO and the agency's information security team, can then add, remove or modify controls to achieve cost-effective, risk-based security, based on the agency's mission or business need.

This step should happen as an integral part of any system design activities. The team should also develop a monitoring strategy to ensure that security controls continue to be effective once the system receives its authority to operate.

## Step 3: Implement Security Controls

As part of system development work, controls are implemented. The implementation is documented in the SSP.

This step is essentially "state how your system meets each of the regulations". Using a FedRAMP'ed or GSA based Platform as a Service (PaaS) provides a significant amount of inheritable controls, so the primary focus can your application's custom code and configuration. This custom code and configuration is known as the "attack surface". The final version of this document is called the System Security Plan.

Fill out the documentation. The full list of data and functions in and of the system (in government parlance "mission based information types" and "delivery mechanisms") must be itemized in structured data. While the data types are obviously arbitrary and custom to each system we produce, the government has a formalized data set of mission functions that should be mapped to the system via [NIST 800-60](http://csrc.nist.gov/groups/SMA/fisma/categorization.html). 

## Step 4: Assess Security Controls

In other words, "verify that your system is secure".

Before your system can go live with government information, your control implementation must be tested. Testing is often performed by the system team working together with the agency's information security team, based on a security assessment plan. The security assessment plan will depend upon the type of ATO. FedRAMP has a [Security Assessment Framework](https://www.fedramp.gov/resources/documents-2016/) for FedRAMP ATOs.

There will usually be a penetration test conducted on the system. Any penetration test findings deemed serious enough to prevent an ATO will need to be fixed right away to unblock the ATO process. They will also review the SSP document and test the control narratives. This testing and review process will take 1-2 weeks and should be the top priority for the project team at the time.

The results of the assessment are documented in a *security assessment report* (SAR). Depending on the findings of the security assessment, remediation work may have to take place before the system receives its ATO. Other problems that are less critical can be remediated at a later date: these are listed in a document called a *plan of action and milestones* (POAM or POA&M).

## Step 5: Authorize Information System

The SSP, SAR and POAM together form a *security authorization package* (FedRAMP requires a further document: a continuous monitoring strategy). The Authorizing Official will make a risk-based decision whether to grant an ATO based on the information in this package. This decision, made in consultation with other key stakeholders such as the CISO, balances security considerations with the mission and operational needs of the agency.

Once all of the materials are prepared and testing is done and the system is considered "ready" by the Authorizing Official, they will sign the ATO memo. If an ATO is granted, an *authorization decision document* is issued and signed by the AO which lists the conditions under which the ATO will remain valid, including the ATO's expiry date.

## Step 6: Monitor Security Controls

Once a system receives an ATO, it must be assessed at regular intervals to ensure the effectiveness of the control implementation. Any changes to the system's security boundary or its environment should also be assessed to determine their impact.

There are several ways to ensure that your system remains compliant:

* Perform regular, automated security scans on your system, and act on the findings in a timely manner.
* Keep your System Security Plan (and any other architecture/security-related documentation) up-to-date.



## Re-authorization

Your system may need to be reassessed and re-authorized if your application team is planning to make substantive changes, such as changes to:

* Encryption methodologies
* Administrative functionality within the application
* The kinds of information you store (for example, [personally identifiable information (PII)](../categorization/#pii))
* The external services used or how/what data flows to/from them
* Anything that will requires an update to the System Security Plan, system diagram, etc.

Example changes that do *not* require re-authorization, as long as they don't include the above:

* Features
* Bug fixes
* Interface changes
* Documentation updates

The Authorizing Official determines whether a system needs re-authorization. If you're planning a change that you think may require re-authorization, contact them.

If it needs re-authorization, follow the usual steps for getting an ATO. You should be able to reuse most of your existing ATO materials, assuming they have been kept up-to-date.

## ATO renewal

Many ATOs are issued with a time limit, often this expiration is between one and three years. When an ATO nears expiration, you'll need the ATO to be renewed. Follow the usual steps for getting an ATO. You should be able to reuse most of your existing ATO materials, assuming they have been kept up-to-date.



## Definitions

* **Assessment:** The step of the ATO process (and RMF) where the system and package are reviewed by a third party.
* **ATO package:** The SSP and other documentation needed to get an ATO.
* **Authority to Operate (ATO):** The approval for a government system to be run in production, and the compliance process for getting there.
* **Compliance:** Ensuring that a system meets minimum security requirements.
* **Information system** means a discrete set of information resources organized for the collection, processing, maintenance, use, sharing, dissemination, or disposition of information ([44 U.S.C. § 3502](https://www.law.cornell.edu/uscode/text/44/3502#8)).
* **POAM:** Plan of Action and Milestones. They are the TODOs following an assessment, which are usually low-risk security findings that need to be addressed.
* **RMF:** The [NIST Risk Management Framework (RMF)](https://csrc.nist.gov/projects/risk-management/risk-management-framework-(RMF)-Overview), which is what most ATO processes are based on.
* **Security:** The sum of processes and features safeguarding systems and data.
* **System Security Plan (SSP):** The primary document in an ATO package, the bulk of which contains the [NIST 800-53 security controls](https://nvd.nist.gov/800-53/Rev4). "The purpose...is to provide an overview of the security requirements of the system and describe the controls in place or planned for meeting those requirements." ([NIST SP 800-18](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-18r1.pdf#page=7))