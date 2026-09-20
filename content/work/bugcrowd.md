---
title: "Bugcrowd: a data strategy for a company that was two businesses at once"
summary: "A crowdsourced-security platform that was also a talent agency — and had built its data and its crowd operations for neither. The strategy, the roadmap, the organization, and the prototypes engineering built from."
date: 2019-06-01
lastmod: 2026-09-20
client: "Bugcrowd"
period: "2019 – 2020"
eyebrow: "Case study"
featured: true
weight: 2
showTableOfContents: true
---

Bugcrowd runs a platform where companies pay to have security researchers find their vulnerabilities. In 2019 it was growing on two sides at once — customers buying programs, and a crowd of researchers doing the work — and its systems treated both as one thing. Data definitions were inconsistent. Insight stopped at a renewal report and a time-to-triage number. Data and application logic were tightly coupled, so every new question was an engineering request: thirty in the queue, three in progress, two to four weeks each, most of them for a simple aggregation or a profile lookup. And there was no structured way to recruit, pay or keep the researchers the whole business depended on.

## Framing it with leadership {#frame}

The first deliverable was a diagnosis leadership could act on: **Bugcrowd is two businesses.** A cybersecurity company that helps customers remediate threats, and a talent agency for cybersecurity professionals. Each has its own lifecycle — customers *try, pay, and share*; the crowd *joins, gets paid, and shares* — and identical workflows across the two produce very different outcomes. The relationship between them was unbalanced, and that imbalance was capping how far either could scale.

From there the transformation could be stated in the company's own terms: manage the two systems separately until they can converge, build the data foundation both need, and become the *gateway* — the best talent for every program, the best outcomes and return on time for every researcher.

## What we delivered {#delivered}

**A data strategy and roadmap.** An "open access" data services framework: an information architecture with a proper entity model and master data for platform and enterprise data; an ingestion and export layer to replace ad hoc extracts; programmatic data access so new products and self-service reporting stop being engineering tickets. Sequenced by quarter — infrastructure and single source of truth first, a machine-learning-ready data services MVP after — with the concrete first moves named: a normalized transactional model, a Postgres decision, an ETL spike, and an operational data store that new features and reporting could build on without touching the platform's database.

**The features the data would unlock, specified.** A security knowledge base — an aggregated, access-controlled vulnerability repository with a recommendation engine. Crowd Match — profile-based matching of vulnerability types to researchers and teams, with the mockups, the information architecture, and the path from prototype to customer-ready. Auto-remediation, with the honest note that it needed a build-or-buy decision before anything else. Each with a goal, a target use case, and a five-step delivery path.

**A crowd management system, from first principles.** The crowd is not a list of researchers; it is talent that can complete a unit of cybersecurity work, and it wants work matched to its skills that maximizes its return on time — and to be valued. So: a lifecycle — recruiting, onboarding, producing, nurturing — with the current state and desired state at each stage; payout models beyond fixed program rates (team, dynamic, promotional, task-, project- and residual-based); the social and financial incentives that turn researchers into evangelists; and stage-by-stage requirements across people, process and product. Then the workflows and the dashboards, drawn — earnings, teams, programs, hours — so engineering had something to build from rather than something to interpret.

**An organizational recommendation.** A dedicated Enterprise Data Engineering group — a lead, an architect, three engineers — as the conduit between corporate operations and the platform, with the ask to leadership stated plainly: staff it, put data requirements on the product review board's agenda, and decide whether to accelerate with outside help.

## What it asked of the model {#model}

This was the front of the model without the venture: frame it with leadership, specify what the business needs, and hand engineering a plan and prototypes it could act on. The wireframes went into the build. The strategy gave a company that had been answering data questions one ticket at a time a way to answer them structurally — and named the organization that would own it.
