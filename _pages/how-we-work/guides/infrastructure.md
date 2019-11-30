## TTS Infrastructure

At some point, you're going to want to move the system you are building
into production. You should decide the final destination of your system early on
in the project. If you're building a site that has no server-side
code, your options are cloud.gov or Federalist. If you're
going to host server-side code, you should aim to deploy to [cloud.gov](#cloudgov).
We also support deployments to Amazon Web Services(AWS), but with no external support. For GSA systems, see [comparison of hosting options](https://docs.google.com/spreadsheets/d/1TTu6R9vKOR5eiyC0tjF5XfaM9ozVp0FMoKDn_ZJOxG8/edit#gid=0).

Whichever option you choose, you should start deploying to a
production-like environment from early on in the development
process.

Note that sending traffic from the internet to your
local machine for _any_ testing purposes is not permitted. In order to
enable testing, you can request sandbox accounts on both cloud.gov or AWS.

#### FISMA High systems

There are some specific cases where the product is categorized “FISMA High”. This would usually only
happen due to your product handling extremely sensitive information or
being critical to normal government function. AWS GovCloud has
received a [FedRAMP JAB Provisional ATO at the High level](https://www.fedramp.gov/marketplace/compliant-systems/amazon-web-services-aws-government-community-cloud-govcloud/).

Note however that when partner agencies assert that **of course** their product will be FISMA High, TTS often finds upon examination that a product should be really be judged FISMA Moderate or FISMA Low... So don’t discard cloud.gov or AWS as options before probing that point carefully!

#### Credentials

These are things like your AWS password, secret API key, and the
mobile device that generates your multi-factor authentication
token. You are wholly and solely responsible for safeguarding them,
and are responsible if they are released to non-authorized parties.

In particular, your AWS credentials, like all other credentials and
secrets, must _never_ be checked in to version control. If you check
them in by mistake, please treat this as a
[security incident](https://github.com/18F/security-incidents#process).

If you are unfamiliar with how to protect these credentials, please consult with TTS Infrastructure. We're working on getting additional tools to help make this easy for everyone.

#### Other people's money

The federal government cannot pay one penny more than it is authorized to spend. There is no retroactive justification for spends. When government exceeds these limits, a report and explanation is required to the GSA Administrator, General Counsel, and Congress. So tracking costs is a _big deal_.

However we recognize that it's important to provide compute resources for TTS
folks to be able to experiment. Thus sandbox users can spend up to
**\$500 per month** without explicit permission from Infrastructure. This
money counts towards our operating costs, which are ultimately
indirectly billed to customers in the form of increased rates.

Thus in order to keep our rates low, it's extremely important to bill
infrastructure costs, including non-production costs, to agency partners
wherever possible. If the work you are doing is in support of a project which
has an inter-agency agreement (IAA), you _must_ register your system with
[#infrastructure](https://gsa-tts.slack.com/messages/C039MHHF8/), including the
Tock project code and the infrastructure tag you will be using, and tag any AWS
resources accordingly so we can bill these costs to our partner agencies.

#### Other people's information

Any system in AWS might have the public's information (as opposed to _public_ data) at any time. Some systems use stronger measures to help protect the information if it is sensitive. For example, [MyUSA](https://github.com/18F/myusa) uses row-level encryption. If you are unsure of the sensitivity of the data you're going to be handling, consult with TTS Infrastructure first.

Use common sense when handling this information. Unless you have permission _and_ need to in order to do your job:

- Don't release information
- Don't share information
- Don't view information

Regardless of your own norms around privacy, always assume the owner of that data has the most conservative requirements unless they have taken express action, either through a communication or the system itself, telling you otherwise. Take particular care in protecting sensitive personally identifiable information (PII).

#### Your information

In order to make sure we are protecting the integrity of the public systems, **_you_ have no expectation of privacy on any federal system**. Everything you do on these systems is subject to monitoring and auditing.


#### Notes

- Below, "internal" projects mean "things built by and for TTS", i.e. "not for a partner agency".
- **If an option isn't listed below, you probably can't use it** for deploying TTS projects. This includes:
  - GitHub Pages ([why](https://18f.gsa.gov/2015/05/14/18Fpages/))
  - Heroku and other platform services
  - Your personal AWS account
- Any questions? Ask in [#infrastructure](https://18f.slack.com/messages/infrastructure/).

## cloud.gov

TTS uses AWS as the underlying Infrastructure-as-a-Service (aka IaaS) cloud platform, but spending effort at the IaaS level is not the best use of your team’s time. TTS has invested in developing [cloud.gov](https://cloud.gov/) to provide for the most common infrastructure needs. cloud.gov uses [Cloud Foundry](https://www.cloudfoundry.org/) – an open source Platform-as-a-Service (PaaS) – as a team-friendly abstraction above AWS, encapsulating good practice cloud hosting without having to worry about a lot of the details. For most of the products that TTS develops, deploying onto cloud.gov will:

- Minimize ATO compliance overhead (which is quite hefty) and reduce security concerns
- Reduce TTS’s overhead for handling infrastructure billing, since it is fully self-service
- Make it easier for teams to ensure high availability/scalability

As a result, cloud.gov significantly reduces the portion of your team’s capacity that
you need to dedicate to operational concerns. For this reason, when
making infrastructure decisions, **opt to use cloud.gov for your
deployment whenever possible, and only resort to directly using AWS
for infrastructure pieces that are impossible to achieve through
cloud.gov or use new AWS services not yet available in cloud.gov**.

Comprehensive [documentation](https://docs.cloud.gov/) for
cloud.gov is available.

Cloud.gov has
[a FedRAMP JAB Provisional ATO at
the Moderate level](https://marketplace.fedramp.gov/#/product/18f-cloudgov?sort=productName).

See cloud.gov page on [deploying static sites](https://docs.cloud.gov/apps/static/).

- **Internal:** Likely free, but start by checking with #cg-business with your use case.
- **External:** see the [pricing page](https://docs.cloud.gov/intro/pricing/pricing-model/)

## Federalist

Use Federalist for publishing static sites. See [the Federalist homepage](https://federalist.18f.gov) for more information.

#### Cost

* **Internal:** Likely free, but start by checking with #federalist with your use case.
* **External:** Federalist is currently offered for $24949/year. Check in with #federalist-business about your sales lead!

#### ATOs

If you are publishing a new site through Federalist and it's not connecting to any APIs or third-party services beyond public API calls from the browser (i.e. it's a simple static site), the site is considered part of that system, so **it does not require its own ATO** ([source](https://github.com/18F/before-you-ship/issues/95#issuecomment-174011747)). *Note: Technically, static site builders are just adding a collection of pages in an existing system. Therefore, from an ATO perspective, "sites" created through Federalist remain within the security boundary, and thus ATO.*

To make a new Federalist site public (and covered under the ATO), **see [the custom domain setup instructions](https://federalist-docs.18f.gov/pages/how-federalist-works/custom-urls/#technical-steps-to-set-up-a-new-site)**.


## Amazon Web Services (AWS)

At TTS, we use [Amazon Web Services](https://aws.amazon.com/) (AWS) as our [infrastructure as a service](https://en.wikipedia.org/wiki/Cloud_computing#Infrastructure_as_a_service_.28IaaS.29) (IaaS). We have separate AWS accounts for our production systems and sandboxes for development and testing. If you're used to developing locally, you should feel empowered to do everything you'd like in an AWS sandbox account. Note that AWS is currently the **only** IaaS provider we are able to use in TTS right now. You're free to develop purely locally as long as you'd like, but _if you want to get a system online, AWS and cloud.gov are your only options_, of which cloud.gov is preferred.

In particular, you _cannot_ send traffic from the internet to your local machine - you _must_ use a sandbox account for this purpose.

### AWS Fundamentals

If you are familiar with running virtual machines on your own computer, through Parallels, VirtualBox, or VMWare, AWS operates on the same principles but on a truly massive [scale](http://www.enterprisetech.com/2014/11/14/rare-peek-massive-scale-aws/). Pretty much everything in AWS can be orchestrated via the [AWS API](https://aws.amazon.com/documentation/) & [command-line interface](https://docs.aws.amazon.com/cli/latest/reference/).

The core service of AWS is the [Elastic Compute Cloud](https://aws.amazon.com/documentation/ec2/) (EC2). These are virtual machines just like on your computer, but hosted in the AWS environment.

If you want very basic and cheap object storage, AWS provides the [Simple Storage Service](https://aws.amazon.com/s3/) (S3).

These are just the concepts necessary for initial on-boarding. AWS has an [extensive list](https://aws.amazon.com/products/) of other services.

### Building systems that will be deployed directly to AWS

Although cloud.gov is strongly preferred as the production environment for the systems we build, there are some systems that will need to run on AWS. You can **see the GSA approval status and caveats for using different AWS services in [this spreadsheet](https://docs.google.com/spreadsheets/d/1kJrPqu10x80LaGQ_oXFDuoPkBdnaXrXTQVF_uJ14-ok/edit#gid=0)**.

In order to ensure systems deployed to AWS are robust and reliable, and to ensure the integrity of information stored in AWS, we impose some additional restrictions on systems deployed to the TTS production AWS environment.


### Auto scale groups

In order to ensure that systems remain available even in the face of hardware failures within AWS leading to VMs being terminated, all EC2 instances must be launched within an [auto-scaling group](https://aws.amazon.com/autoscaling/) from an AMI.

### VPCs

To ensure logical partitioning of systems running within the TTS production environment, every system must be hosted within its own [virtual private cloud](https://aws.amazon.com/vpc/) (VPC). Network security settings are set at the VPC level, including what ports IP addresses EC2 instances can communicate with each other and back out to the internet.

Occasionally, out-of-date documentation from third parties and Amazon itself may reference _EC2 Classic_. We at TTS do not support this environment.

### HTTPS Everywhere

Regardless of what your system does, we enforce HTTPS Everywhere

### Approved services for production use

Not all AWS services are approved by GSA IT for production use. GSA IT maintains [a current list of approved services](https://docs.google.com/spreadsheets/d/1kJrPqu10x80LaGQ_oXFDuoPkBdnaXrXTQVF_uJ14-ok/edit#gid=0) (note: only visible to GSA employees and contractors).

### Operating system (OS) baseline

We use a pre-hardened version of [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu_%28operating_system%29) as our baseline OS for all EC2 instances in AWS. These are created using the [FISMA Ready project on GitHub](https://github.com/fisma-ready/ubuntu-lts). In AWS, there are [Amazon Machine Images](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) (AMIs) in each AWS Region with these controls already implemented. You should always launch new instances from this baseline. You can find them by searching for the most recent AMI with the name `FISMA Ready Baseline Ubuntu (TIMESTAMP - Packer)`, where `TIMESTAMP` will be a timestamp value.

### Tagging

Tagging resources in AWS is essential for identifying and tracking resources deployed. A tagged resource makes it easier for reasoning from a billing perspective and aids in determining if a system is in a particular environment (ex. production). See the sandbox environment to see how tagged resources enables lifecycle management of resources in AWS.

At a minimum, an AWS resource must have a `Project` tag defined with enough information to be able to identify a project that the AWS resource is associated with.

#### Creating new accounts

1. Forecast the spending for the next 6-12 months.
   - If you expect the spend across your accounts to increase by more than a few percent, the contract may need to be mofified.
1. Reach out to [#admins-iaas](https://gsa-tts.slack.com/messages/admins-iaas) with info about:
   - Who/what the account is for
   - Mailing list to use as the technical contact
   - If you need an associated GovCloud account
1. The admins will:
   1. Create an account using email `devops+aws-<program>-<env>@gsa.gov`
   1. Add to [account list](https://docs.google.com/spreadsheets/d/1DedSCiU9AsCAAVvAFZT0_Ii7AFIKlI-JNifzlpHNbDg/edit#gid=0)
   1. Create an IAM user with `Administrator` permissions

#### If needed

The Tech Portfolio will:

1. Reset root password by email
1. [Change account email](https://console.aws.amazon.com/billing/home#/account) to `devops+aws-<account number>@gsa.gov`
1. [Add to KeePass](https://drive.google.com/drive/folders/1iQnvC8o_MU_DR5u7TYtC9pEKZXtBq03f?usp=sharing) and re-upload database
1. [Set up MFA](https://console.aws.amazon.com/iam/home?#/security_credentials)
1. Add relevant users via IAM

## Sandbox

Sandbox accounts - both cloud.gov and AWS - are available to all TTS staff for non-production use. Things to bear in mind about sandbox accounts:

- Sandbox accounts should be used for testing and demonstration
  purposes. Nobody outside the federal government should be given
  access details for systems running in the sandbox unless
  authentication is in place. Exposing systems to the public without
  authentication requires an [ATO](../../ato/).
- Sandbox accounts _must_ be used when you are sending internet traffic to a non-production system: tools such as `ngrok` and `localtunnel` are strictly forbidden since they can allow your laptop to be compromised.
- No sensitive or [personally identifiable information (PII)](../../privacy/) should be stored in sandbox accounts.
- Any system that becomes publicly routable (ex: for testing) must have a [robots.txt configuration](http://www.robotstxt.org/faq/prevent.html) that prevents indexing by all search engine robots.

### Cloud.gov sandbox accounts

Information on cloud.gov sandboxes is available in the
[Getting Started section of the cloud.gov documentation](https://docs.cloud.gov/getting-started/accounts/).

### AWS sandbox accounts

Anybody in TTS can get an AWS sandbox account. Sandbox users have
`power user` access, which means they have full privileges to all AWS services
except Identity and Access Management (IAM).

Expect everything in the sandbox accounts gets deleted once a week. You can
however protect resources from deletion by following two steps. First, register
the system you are working on in
[#infrastructure](https://gsa-tts.slack.com/messages/C039MHHF8/). Second, make
sure you tag all resources you create in the AWS sandbox with the tag
`Project=<system_infrastructure_tag>`, where `<system_infrastructure_tag>` is
the name you registered with
[#infrastructure](https://gsa-tts.slack.com/messages/C039MHHF8/).

- [Request a sandbox account](https://docs.google.com/a/gsa.gov/forms/d/e/1FAIpQLSeXlsfDyAZi5P_5lS8InCeZxvA3JA3-g8aYWdkgkFmGPcYmLQ/viewform)
- [Sign in to your sandbox account](https://tts-sandbox.signin.aws.amazon.com/console)

#### Permissions

Anyone in TTS can get access to the AWS sandbox account. However only the TTS infrastructure team has login credentials to our production TTS account, and they are only used for debugging and incident management purposes. All systems are deployed using a continuous delivery service from scripts stored in version control, and registered with [#infrastructure](https://gsa-tts.slack.com/messages/C039MHHF8/).

This means:

- All configuration of your production environment must be performed using Terraform scripts checked into version control.
- There will be no "back channel" access to AWS resources for systems deployed into production. Any routine activities such as data management, import / export / archiving, must be performed through your system.



## Pinning Dependencies

The practice of "pinning dependencies" refers to making explicit the versions
of software your _application_ depends on (defining the dependencies of new
software _libraries_ is outside the scope of this document). Dependency
pinning takes different forms in different frameworks, but the high-level idea
is to "freeze" dependencies so that deployments are repeatable. Without this,
we run the risk of executing different software whenever servers are restaged,
a new team-member joins the project, or between development and production
environments. In addition to repeatability, pinning dependencies allows
automatic notification of vulnerable dependencies via [static analysis](../../security/static-analysis/).

As such, all deployed applications should be pinning their library (and where
possible: language, OS, etc.) versions. Let's look at how to implement this in
different languages.

## Ruby

No action is necessary for dependencies to be pinned. This is because the
auto-generated `Gemfile.lock` [should be committed to the repo](http://bundler.io/v1.12/rationale.html)
in development, causing it to be deployed along with the source code:

>  . . . the Gemfile.lock makes your application a single package of both your own
>  code and the third-party code it ran the last time you know for sure that everything worked.

## Node.JS

### Using npm

Package locking is built into npm >= 5. As you `npm install` packages,
they'll be added to your `package.json` file and exact versions of all
libraries (including dependencies of dependencies) will be referenced in the
[`package-lock.json`](https://docs.npmjs.com/files/package-lock.json) file.
Both the `package.json` and lock file should be
committed to the project repo.

##### npm 6.x

In npm 6.x, the `npm ci` command was introduced. This command will clear out
`node_modules` and install the exact dependency tree as defined in
`package-lock.json`. This is now the preferred method of ensuring dependencies
are pinned in CI/CD.  npm 6 or greater is the default from Node.js 10.3.0.

##### npm 5.x

Be sure to use an up-to-date npm 5.x client, as the lockfile behavior was
buggy in early versions. ***Use at least npm 5.4.2.*** Running `npm install`
with no arguments will install the versions of libraries defined in the
lockfile.

##### npm < 5

If using `npm` < 5, you may imitate some of the above behavior by creating a
"shrinkwrap" file. As you install packages, use `npm install --save` to update
your `package.json`. After making changes, run [`npm
shrinkwrap`](https://docs.npmjs.com/cli/shrinkwrap) to generate an
`npm-shrinkwrap.json` file, which references the versions of all the currently
installed packages. `npm install` with no arguments will inspect that file and
install the versions it defines. Both the `package.json` and shrinkwrap file
should be committed to the project repo.

### Using yarn

If you are using [`yarn`](https://yarnpkg.com) to manage your node dependencies,
you will automatically have dependency pinning due to the [`yarn.lock`](https://yarnpkg.com/en/docs/yarn-lock)
file that `yarn` produces and uses. `yarn.lock` [should be committed to your repository](https://yarnpkg.com/en/docs/yarn-lock#toc-check-into-source-control)
during development:

> All yarn.lock files should be checked into source control (e.g. git or mercurial).
> This allows Yarn to install the same exact dependency tree across all machines,
> whether it be your coworker’s laptop or a CI server.


## Python

### Using pipenv

[Pipenv](https://docs.pipenv.org/) is [Python.org](https://python.org)'s
officially recommended packaging tool. It's a mixture of dependency tracking
and virtualenv management (bringing it close to Ruby's `bundler`). To install
dependencies use

```
pipenv install django
# or, with stricter version bounds
pipenv install django~=2.0.4
```

This will generate a `Pipfile` containing a loose Django definition and a
`Pipfile.lock` referencing an exact Django version as well as all its
dependencies. Users need only run `pipenv install` with no arguments to
synchronize the latest libraries.

Pipenv can also export a `requirements.txt` file for tools that need one:

```
pipenv lock -r > requirements.txt
```

### Manually

If Pipenv isn't available, we can imitate some of its functionality by using
pip directly. We'll create a `requirements.in` file, specifying un-pinned
dependencies and install it via

```
pip install -r requirments.in
```

Then, we can "freeze" our libraries, generating a list of the exact versions
of not only our immediate dependencies but _their_ dependencies, by using:

```
pip freeze > requirements.txt
```

Be sure to run this command in an activated virtualenv to avoid freezing
system-wide dependencies.

[`pip-tools`](https://github.com/nvie/pip-tools) provides a more automated
method of managing this flow.

## Good Production Practices

Below is a list of "good" production ops practices, which product and tech leads should consider early in their development and review as part of any major launch. Items in **bold** are considered must-haves.

We will be adding more documentation about how to achieve these within TTS' infrastructure soon, but [docs.cloud.gov](https://docs.cloud.gov/) is a good place to start. It includes a [guide to production-ready apps on cloud.gov](https://docs.cloud.gov/apps/production-ready/) with tips about how to implement relevant practices.

When using cloud.gov, logs sent to standard out are automatically captured by [logs.fr.cloud.gov](https://logs.fr.cloud.gov). [More info.](https://cloud.gov/docs/apps/logs/)

### What to log

Things you are required to log:

- Successful and unsuccessful account logon events
- Account management events
- Object access
    - Examples: reading database records or files on disk
- Policy change
- Privilege functions
- Process tracking
- System events
- For Web applications:
    - All administrator activity
    - Authentication checks
    - Authorization checks
    - Data deletions
    - Data access
    - Data changes
    - Permission changes

_This list comes from GSA’s [AU-2a](https://nvd.nist.gov/800-53/Rev4/control/au-2#Rev4Statements) Parameter Requirement - see the “Audit and Accountability” doc on [this page](https://insite.gsa.gov/topics/information-technology/security-and-privacy/it-security/it-security-procedural-guides)._

**Do not log [sensitive information](https://github.com/18F/open-source-policy/blob/master/practice.md#protecting-sensitive-information).**


#### Other notes

- It's important that the events are traceable back to the user that performed them (if possible), and when, so include things like:
    - The user ID
    - Timestamps, standardized in UTC
- Make sure the right logging is done in production (outside of debug/development mode)
    - [Example change for Django from the FEC project](https://github.com/18F/fec-cms/commit/39961b3ef84b1c2abe882959f15b9bc5d2e25bc8)
- If not using cloud.gov, here are some things to think about:
    - Logs are captured to durable storage before rotation
    - Logs with sensitive data are only available to appropriate people
    - Logs can be browsed/drilled with low-latency (e.g. grepping not necessary)

### Backups

- **All volatile data storage is on redundant infrastructure**
- **Periodic snapshots of volatile data storage are happening**
- Ideally, point-in-time recovery is possible
- Recovery is documented in a testable procedure
- Tests of the recovery path are part of the continuous deployment pipeline

### Deployment

- Can push a new version with a single command
- More than one person is able to do it
- Blue-green deployment
- Automated schema updates
- Snapshot/rollback of volatile data is incorporated in the process
- Deployment only includes production-necessary files
- Secrets are retrieved securely (eg via credential service rather than setting environment variables)
- Download, build, and configuration limited to staging, not runtime
- [Pin dependencies](../pinning-dependencies/)

### Support

- Service-level targets are documented
- Clear entry point for complaints
- Clear escalation for handling infrastructure vs application vs api problems
- Support queue is public
- Resources are appropriately tagged

### Alerting

- **_Someone_ is alerted, somehow, if a monitor test is failing**
- Flexible targets (for vacation, by component, etc), eg PagerDuty
- Alerts triggered based on "out of the norm" thresholds
- Flapping status does not result in excess/bouncing alerts

### Status communication

- A status page is available to all users and downstream services
- The status page is hosted off-infrastructure
- The status page shows any planned and all previous outages
- Users can subscribe to notices

### Security

- **In-person discussion/audit around launch and major changes**
- **Third-party services are approved to hold the data being sent to them**
- Automated pen-testing in a staging environment as part of continuous deployment
- Automated vuln-scanning in production environment that is fed with newly-discovered vulns
- Enable [HTTPS](../certs/) for everything
- Redirect http to https (automatic with cloud.gov and federalist)

### Load-testing

- Periodic tests of in-scope components in a staging environment as part of continuous deployment pipeline
- Upstream components are known to be load-tested up to max foreseeable pressure

### Capacity-planning

- **Planning around launch, significant news, and seasonal deadlines**
- Analysis of similar service traffic in steady state
- Ideally app-relevant elastic response to scale up as needed and back down to control costs

### Scalability

- **Each component has at least two instances at all times**
- Each component horizontally scalable with more instances
- Must-be-vertical components do not pressure their hosts in even elevated traffic condition
- Ideally must-be-vertical components do not share hosts

### Resilience

- Instances are distributed across availability zones
- No in-app dependencies on the number/distribution of upstream instances
- Upstream is similarly resilient (multiple instances in multiple zones)

### Access Control

- **Expected exposure for alpha/beta/blue-green environments is enforced**
- Exposure is controlled via configurable non-bespoke proxy (eg not the app)
- A/B cohorts/affinity supported

### HTTPS Certificates

HTTPS should be enforced on every public endpoint ([here's why](https://18f.gsa.gov/2014/11/13/why-we-use-https-in-every-gov-website-we-make/)). There are a number of ways to get certificates for systems at TTS, depending on what [infrastructure](..) you're using:

* If using cloud.gov, obtain through the [CDN broker](https://cloud.gov/docs/services/cdn-route/).
* If using [Federalist](https://federalist-docs.18f.gov/pages/how-federalist-works/custom-urls/#technical-steps-to-set-up-a-new-site), they are set up automatically.
* If using AWS, there are a few options:
    1. [Let's Encrypt](https://letsencrypt.org/)
    1. GSA IT
        * [Service Desk](https://servicedesk.gsa.gov) > Service Catalog > New Account or Access Requests > Internal Certificate Request
        * Unclear if they can also create certificates for public web. Please update this page if you find out!
    1. SSLMate through #acquisition, via an approved [purchase request](https://handbook.18f.gov/purchase-requests/)
    1. If in OPP, get a GoDaddy certificate through #opp-infra
* If using another agency's infrastructure, consult their IT department.

### Monitoring

There are several kinds of monitoring that you will need to have in place for any application:

- **Downtime:** Is the app available?
- **Errors:** Is the app generating errors at an unacceptable rate?
- **Performance:** Even if the app is functional, is it unusably slow?

Monitoring is only useful if the relevant people are alerted when something goes wrong, and then only if those individuals...

- consider these alerts worth investigating
- have sufficient access and understanding to at least triage and escalate an alert, if not fix it
- have a clear escalation path

It will likely take some tweaking of the thresholds to get the signal-to-noise ratio right. Plan to have monitoring active for several weeks before the go-live date to give the team time to spot problems, practice response and tune the alert conditions.

## Your DevOps Team

At present we don't have a dedicated first-line support team across TTS. Projects need to coordinate their own DevOps teams for alert response. Teams will need:

- **Reachability:** Alerts should go directly to their devices, not just to Slack.
- **Escalation path:** Team members should know how to at least _start_ dealing with alerts. [Here's a great example from College Scorecard](https://docs.google.com/document/d/1Lfr_IufB9nuTjsZJgsm5CxfBRFVbHj266zMddhzWCJg/edit). (Thanks, @abisker!)
- **Direct access to monitoring systems:** Make sure everyone has a working login on whichever monitoring systems you pick, and has at least a little experience navigating them.
- **Clear expectations of uptime & availability:** At present, TTS staff work 40 hour weeks and there is no requirement to be available in off hours. In practice, people want to make sure their stuff works, and many will jump online to fix things if they see a problem over the weekend. But **there should be no expectation of this**. Furthermore, **this understanding must be established with project partners.** Projects that need greater support coverage should arrange dedicated on-call staff elsewhere.

## Errors & Performance Problems

For a non-static site, you will want to know if exceptions are being thrown within your application. TTS uses [New Relic](http://newrelic.com/).

- See [the FISMA Ready instructions](https://github.com/fisma-ready/new-relic) for useful settings to go in the New Relic `ini` file.
- For [New Relic](https://newrelic.com) access, [open an issue in the Infrastructure repo](https://github.com/18F/Infrastructure/issues/new?title=New+Relic+account+for+%3Cname%3E) to get an account set up for your project.

## Analytics

[DAP](https://digital.gov/dap/) should be added to all public-facing pages.

For custom events, DAP and/or [New Relic](https://docs.newrelic.com/docs/using-new-relic/metrics) can be used.

Ask #g-analytics if you have questions.

### Alert Conditions

Error & performance monitors can trigger alerts on a number of different conditions, including:

- Error counts (total or percentage)
- [Apdex score](http://apdex.org/overview.html) (a responsiveness statistic)
- Throughput
- Response time
- Custom metric (which can be sent to monitors for logging using the monitor's client library)

All of the above can be set with thresholds for given time periods; for example, alerting if more than 2% of transactions in any five-minute period return errors.

We recommend creating a mixture of alert conditions during development and tuning them based on the current performance of the app. You may have an Apdex target of 0.9, but if the app is regularly scoring lower then it's counter-productive to keep that as an alert threshold: you'll just fill the alerts with noise that can't be dealt with quickly. The work to meet that performance should be managed at the project level.

Once you've created alert conditions, **ensure that they're actually working.** It helps if you have errors or performance problems that you can trigger on demand; if the production environment is already live to the public then you might need to push a test branch to staging and try your conditions there. Also, when testing conditions, make sure to limit their notifications to only go to you, or you'll need to warn everyone in advance.

## Downtime

You will want to know if your site goes down. Options:

- [New Relic Synthetics](http://newrelic.com/synthetics). ([Here's a walkthrough for setting up a simple ping with Synthetics, testing it and connecting it notification channels](https://docs.google.com/document/d/1pDya72sy37PUOMY5Th65LSqKa_tWYrX9kgtkys6WMm0/edit#))

## Notification Methods

Ways to alert DevOps & project team members:

- **Slack**, though you may not want all errors going to the project's main Slack channel. (See the section below on [grouping notification channels](#grouping-notification-channels))
- **SMS**, which is only available through certain services - PagerDuty provides SMS, but New Relic doesn't; instead it has...
- **Push Notifications**, for which team members need to have the mobile app installed and registered.
- **Email**, which in practice isn't as useful since most people aren't immediately alerted by it.

### Grouping Notification Channels

New Relic (and possibly other monitoring tools) allows you to group notification targets - that is, individuals and Slack channels. This makes it easier to ensure that different kinds of alerts only go to team members who can act on them.

## Good production practices

- **Must-have:** User-representative tests (eg can access service, can perform a critical operation) running regularly. Both of the downtime monitors mentioned above can be scripted to perform and verify multi-step transactions.
- Tests of sub-components also running regularly. Monitoring at the sub-component level will make it significantly easier to diagnose higher-level problems.
- Historical graph (e.g. uptime)
- Tests are run frequently
- Tests are reported with low latency
- Behavior vs stated service-level targets is tracked
- Dev team regularly reviews errors caught by monitors for triage and fixing (even if they didn't set off alerts)


## Common Infrastructure Questions we get from clients

### Do you support DNSSEC?

For domains owned by TTS that speak HTTP, TTS follows the requirements of [OMB M-15-13](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2015/m-15-13.pdf), including [HTTP Strict Transport Security](https://https.cio.gov/hsts/) and the recommended additional step of [HSTS preloading](https://https.cio.gov/hsts/#hsts-preloading).

For information on how HTTPS and HSTS compensate for an absence of DNSSEC for HTTP-based services, see:

- [Why isn’t DNSSEC good enough?](https://https.cio.gov/faq/#why-isnt-dnssec-good-enough)
- [How does HTTPS protect against DNS spoofing?](https://https.cio.gov/faq/#how-does-https-protect-against-dns-spoofing)

Customer applications hosted on [cloud.gov](https://cloud.gov) that use domains owned by customers outside TTS (such as partner agency subdomains) can implement DNSSEC. See [cloud.gov's DNSSEC information](https://cloud.gov/docs/apps/custom-domains/) for details.

### Do you support IPv6?

Yes! [More information.](https://cloud.gov/docs/apps/custom-domains/)

### Do you allow "Direct Connections"?

TTS does not support direct connections, either via fiber or VPN, into the cloud.gov environment. If systems launched on cloud.gov either require initial data from an internal customer system, or ongoing communications with internal customer systems that are unavailable over the public internet, we recommend working with TTS Infrastructure to devise alternatives.

### Where can I get compliance information about cloud.gov?

More info about cloud.gov's

- FedRAMP package
- System Security Plan
- Control Implementation Summary
- Customer Responsibility Matrix

can be found on [cloud.gov's FedRAMP page](https://cloud.gov/overview/security/fedramp-tracker/#how-you-can-use-this-p-ato).


