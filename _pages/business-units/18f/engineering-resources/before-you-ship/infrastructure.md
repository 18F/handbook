---
title: Infrastructure
permalink: "/before-you-ship/infrastructure"
---

At some point, you're going to want to deploy your system. You have a good idea of the final destination of your system early on
in the project. **If you're building [a site that has no server-side code](#static-sites), aim to use [Federalist](#federalist). If you're
going to host server-side code, aim to deploy to [cloud.gov](#cloudgov).** You can also deploy to [TTS-managed infrastructure as a service (IaaS)](#infrastructure-as-a-service-iaas) directly, but your life will be harder. For GSA systems, see [comparison of hosting options](https://docs.google.com/spreadsheets/d/1TTu6R9vKOR5eiyC0tjF5XfaM9ozVp0FMoKDn_ZJOxG8/edit#gid=0).

Whichever option you choose, [you should start deploying to a production-like environment from early on in the development process](https://blog.thepete.net/blog/2019/10/04/hello-production/).

Note that sending traffic from the internet to your local machine for _any_ testing purposes is not permitted. In order to enable testing, you can request [sandbox accounts](sandbox/) on both cloud.gov or AWS.

## Themes

In general:

- The more your system looks like other TTS systems, the better
  - This allows TTS to more easily share people, patterns, code, and services across projects
- The more you can offload (to your hosting provider, frameworks, etc.), the better
  - This will lower your operational and compliance burden

## Notes

- Below, "internal" projects mean "things built by and for TTS", i.e. "not for a partner agency". If you're building for a partner agency to own long term, you will want to factor in considerations for their environment.
- **If an option isn't listed below, you probably can't use it** for deploying TTS projects. This includes:
  - GitHub Pages ([why](https://18f.gsa.gov/2015/05/14/18Fpages/))
  - Heroku and other platform services
  - Your personal AWS account
- Any questions? Ask in [#infrastructure](https://18f.slack.com/messages/infrastructure/).

## Server-side code

### cloud.gov

_Preferred_

TTS uses AWS as the underlying IaaS, but spending effort at the IaaS level is not the best use of your team’s time. TTS has invested in developing [cloud.gov](https://cloud.gov/) to provide for the most common infrastructure needs. cloud.gov uses [Cloud Foundry](https://www.cloudfoundry.org/) – an open source Platform-as-a-Service (PaaS) – as a team-friendly abstraction above AWS, encapsulating good practice cloud hosting without having to worry about a lot of the details. For most of the products that TTS develops, deploying onto cloud.gov will:

- Minimize [ATO](../ato/) compliance overhead (which is quite hefty) and reduce security concerns
- Reduce TTS’s overhead for handling infrastructure billing, since it is fully self-service
- Make it easier for teams to ensure high availability/scalability

As a result, cloud.gov significantly reduces the portion of your team’s capacity that you need to dedicate to operational concerns. For this reason, when making infrastructure decisions, **opt to use cloud.gov for your deployment whenever possible, and only resort to directly using AWS for infrastructure pieces that are impossible to achieve through cloud.gov or use new AWS services not yet available in cloud.gov**.

Comprehensive [documentation](https://cloud.gov/docs/) for cloud.gov is available.

Cloud.gov has [a FedRAMP JAB Provisional ATO at the Moderate level](https://marketplace.fedramp.gov/#/product/18f-cloudgov?sort=productName).

#### Compliance info

cloud.gov's

- FedRAMP package
- System Security Plan
- Control Implementation Summary
- Customer Responsibility Matrix

can be found on [cloud.gov's FedRAMP page](https://cloud.gov/docs/overview/fedramp-tracker/#how-you-can-use-this-p-ato).

### Infrastructure as a service (IaaS)

#### Amazon Web Services (AWS)

If you do want to use AWS directly, see the [AWS](aws/) page.

#### Microsoft Azure and Google Cloud Platform (GCP)

See [outstanding issue](https://github.com/18F/tts-tech-portfolio/issues/162).

### FISMA High systems

There are some specific cases where the product is [categorized](../ato/levels/) “FISMA High”. This would usually only happen due to your product handling extremely sensitive information or being critical to normal government function. AWS GovCloud has received a [FedRAMP JAB Provisional ATO at the High level](https://www.fedramp.gov/marketplace/compliant-systems/amazon-web-services-aws-government-community-cloud-govcloud/).

Note however that when partner agencies assert that **of course** their product will be FISMA High, TTS often finds upon examination that a product should really be judged FISMA Moderate or FISMA Low... So don’t discard cloud.gov or AWS as options before probing that point carefully!

## Static sites

### Federalist

_Preferred_

[More information.](federalist/)

### cloud.gov

See cloud.gov page on [deploying static sites](https://docs.cloud.gov/apps/static/).

- **Internal:** Likely free, but start by checking with #cloud-gov-business with your use case.
- **External:** see the [pricing page](https://cloud.gov/pricing/)

## Sandbox Accounts

## Amazon Web Services

## Federalist

## Domains

## Good Production Practices

## HTTPS Certificates

## Monitoring

## Pinning Dependencies

## Logging

## Decomissioning
