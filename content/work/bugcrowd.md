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
    when: "2019"
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
    when: "2019"
    photo: bugcrowd-people.jpg
    alt: A team in discussion
    how: "The people were already in the company. Bugcrowd's engineering team could do all of the work, so the question was ownership, not capacity. We mapped who should own the data on the customer side and who on the crowd side. We also recommended a standing data group of five, for leadership to staff from its own people whenever it chose."
    we:
      - The map of who owns the data for the customer side and the crowd side
      - A recommended data group, with each role defined, for leadership to staff in its own time
    has: Its own engineering team, which went on to build both strategies in full.
  - n: "03"
    title: Measure and fix the process
    when: "2019"
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
    when: "2019 – 2020"
    photo: whiteboard.jpg
    alt: A working session at a whiteboard
    how: "We specified two strategies in enough detail for Bugcrowd's engineers to build them. The first was a data services framework. It gave the company one entity model and one set of master data, replaced ad hoc extracts with proper ingestion and export, and opened the data to programs so that new products and self-service reports stopped being tickets. The second was a crowd management strategy, built from first principles. It treated the crowd as talent with a lifecycle — recruit, onboard, produce, nurture — and added payout models beyond fixed rates and incentives that turn researchers into advocates."
    we:
      - "The data services framework and its three-quarter roadmap: infrastructure and a single source of truth first, a machine-learning-ready data services MVP after"
      - "Feature specifications: a security knowledge base with a recommendation engine, Crowd Match with its mockups and information architecture, and auto-remediation with a build-or-buy decision first"
      - The crowd lifecycle, payout and incentive models, with requirements by stage across people, process and product
      - The dashboards, drawn
    has: Both strategies, built in full by its own engineers, with no follow-on engagement.
outcome: "Bugcrowd built both strategies with its own engineers, in full. It never needed us again, and there was no second engagement to finish the first. That is the process at its smallest. We define the outcome, we specify the work, and the client's own team builds it — and the capability stays with them."
---
