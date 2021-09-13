---
title: Frequently Asked Questions
---
### Q: Does there exist an exhaustive/comprehensive/authoritative list of tools that are available for use?  or a list of what tools are prohibited?

A:  [https://ea.gsa.gov](https://ea.gsa.gov/)

### Q: What is the definition of a tool?  Examples of tools on the TTS Handbook include SaaS solutions (e.g., Smartsheet) as well as applications installed on a system that don't include a dependency on network access (e.g., vim), so I don't think FedRAMP status (or lack thereof) is a determining factor.

A. Depends if It’s a third party managing government data. If they are managing gov data then they need to be ATOed.

### Q: Suppose I want to use PyCharm (a software package installed to the local terminal); how do I determine if I'm allowed to use it?  What about CLI applications, like Pico?  what about GNU core utilities (e.g., `ls`) that are not included with the Linux kernel, but which are included with operating systems such as *BSD?

A. cli, libraries and packages used for local development do not need an ATO until they are used as part of the supply chain for a government system.