---
title: "Bugcrowd: a data strategy for a company that was two businesses at once"
summary: "A two-sided business — companies on one side, security researchers on the other — sitting on years of data it wasn't using. Two 90-day engagements: the data strategy, then crowd management. Both built in full by Bugcrowd's own engineers."
date: 2019-06-01
lastmod: 2026-09-21
client: "Bugcrowd"
period: "two 90-day engagements, 2019 – 2020"
eyebrow: "Case study"
logo: "logos/bugcrowd.svg"
logo_h: 26
featured: true
weight: 2
metrics:
  - { value: "90 days", label: "per engagement, from first conversation to a plan the company could execute" }
  - { value: "2", label: "strategies: data services, and crowd management" }
  - { value: "100%", label: "built by Bugcrowd's own engineers, with no follow-on engagement" }
glance:
  - { k: "Client", v: "Bugcrowd, a crowdsourced security platform" }
  - { k: "Engagement", v: "Two 90-day engagements, 2019 – 2020" }
  - { k: "Our role", v: "Data strategy and crowd management strategy, with leadership" }
  - { k: "Delivered", v: "Two strategies, a three-quarter roadmap, and the design of the data group" }
  - { k: "Built by", v: "Bugcrowd's own engineers, in full" }
situation:
  eyebrow: "The situation, 2019"
  heading: "What Bugcrowd needed, and what stood in the way."
  sub: "Bugcrowd is two businesses — a cybersecurity company that helps customers remediate threats, and a talent agency for the people who do it. Its systems treated them as one."
  left: "What the business had to be able to do"
  right: "What was in the way"
  rows:
    - { l: "Serve two businesses — customers and researchers — from one platform.", r: "Identical workflows for both, very different outcomes, and the imbalance between them capping how far either could scale." }
    - { l: "Answer a business question without filing a ticket.", r: "Thirty requests waiting and three in progress, two to four weeks each — most of them a simple aggregation or a profile lookup." }
    - { l: "Match the right researcher to the right program.", r: "No profile data to match on. Data tied to application logic, so every new question meant touching the platform." }
    - { l: "Report consistently across the company.", r: "A renewal report and time-to-triage. Definitions that changed from one team to the next." }
stages_eyebrow: "Four of the six steps"
stages_heading: "How the process ran, in ninety days at a time."
stages_sub: "Two engagements covered steps one to four and handed over. Delivery and adjustment were Bugcrowd's own — it built both strategies with its internal team."
stages:
  - n: "01"
    title: Define the business outcome
    when: "Engagement one, 2019"
    photo: bugcrowd-outcome.jpg
    alt: A strategy session with leadership
    how: "Bugcrowd's leadership knew the platform served two very different populations. What it needed was the outcome stated in its own terms, and we wrote it with them. Run the customer business and the crowd business separately until they can converge. Build the data foundation both depend on. Become the gateway: the best talent for every program, and the best return on a researcher's time."
    we:
      - "The diagnosis: two lifecycles on one platform, and the imbalance between them"
      - The customer and crowd lifecycles, mapped side by side
      - The outcome in writing, and the case for putting data on the product board's agenda
    has: A diagnosis leadership acted on, and an outcome in its own words.
  - n: "02"
    title: Identify the people
    when: "Engagement one, 2019"
    photo: bugcrowd-people.jpg
    alt: A team in discussion
    how: "The data work needed owners, and Bugcrowd didn't have them yet. We designed the group it needed. An Enterprise Data Engineering team of five — a lead, an architect and three engineers — would sit between operations and the platform and own the data for both. We put the ask to leadership plainly. Staff it, and decide whether to accelerate."
    we:
      - The design of the Enterprise Data Engineering group and each of its roles
      - The ask to leadership, with what it would cost and what it would unlock
    has: A named group with a mandate, staffed from its own people.
  - n: "03"
    title: Measure and fix the process
    when: "Engagement one, 2019"
    photo: bugcrowd-measure.jpg
    alt: Monitoring screens in an operations room
    how: "We measured where the data stood. Thirty requests were waiting and three were in progress, each taking two to four weeks, and most were a simple aggregation or a profile lookup. Reporting amounted to a renewal report and a time-to-triage figure, with definitions that changed from team to team. Every new question meant touching the platform."
    we:
      - "The request queue, measured: volume, wait, and what was actually being asked for"
      - The reporting inventory, and where the definitions disagreed
      - The coupling between data and application logic, mapped
      - "The first four fixes, named: a normalized transactional model, a Postgres decision, an ETL spike, an operational data store"
    has: A baseline, and the first four fixes to make.
  - n: "04"
    title: Build what the business needs
    when: "Both engagements, 2019 – 2020"
    photo: whiteboard.jpg
    alt: A working session at a whiteboard
    how: "We specified two strategies to the point where Bugcrowd's engineers could build them. The first was a data services framework: an information architecture with a real entity model and master data, ingestion and export in place of ad hoc extracts, and programmatic access so that new products and self-service reporting stop being tickets. The second was crowd management from first principles. Recruit, onboard, produce, nurture. Payout models beyond fixed rates, and incentives that turn researchers into evangelists."
    we:
      - "The data services framework and its three-quarter roadmap: infrastructure and a single source of truth first, a machine-learning-ready data services MVP after"
      - "Feature specifications: a security knowledge base with a recommendation engine, Crowd Match with its mockups and information architecture, and auto-remediation with a build-or-buy decision first"
      - The crowd lifecycle, payout and incentive models, with requirements by stage across people, process and product
      - The dashboards, drawn
    has: Both strategies, built in full by its own engineers, with no follow-on engagement.
outcome: "Bugcrowd built both strategies — the data services framework and the crowd management system — entirely with its own people. No dependency on us and no second engagement to finish the first. That is the process at its smallest: define it, specify it, hand it over, and the capability stays."
---
