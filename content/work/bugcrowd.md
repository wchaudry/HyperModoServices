---
title: "Bugcrowd: a data strategy for a company that was two businesses at once"
summary: "A crowdsourced-security platform that was also a talent agency — and had built its data and its crowd operations for neither. Two 90-day engagements: the data strategy, then crowd management. Both implemented in full by Bugcrowd's own team."
date: 2019-06-01
lastmod: 2026-09-20
client: "Bugcrowd"
period: "two 90-day engagements, 2019–2020"
eyebrow: "Case study"
logo: "logos/bugcrowd.svg"
logo_h: 26
featured: true
weight: 2
metrics:
  - { value: "2", label: "businesses in one platform — security remediation, and a talent agency for researchers" }
  - { value: "2–4 wks", label: "to answer a data question before; 30 requests queued, 3 in progress" }
  - { value: "2 × 90", label: "days: one engagement for the data strategy, one for crowd management" }
  - { value: "100%", label: "of both strategies implemented by Bugcrowd's own team, without us" }
glance:
  - { k: "Client", v: "Bugcrowd — crowdsourced security platform" }
  - { k: "Engagement", v: "Two 90-day engagements, 2019–2020: data strategy, then crowd management" }
  - { k: "Our role", v: "Data strategy, crowd management strategy, prototypes, organizational design" }
  - { k: "Delivered", v: "Data services framework and roadmap; crowd lifecycle, payout and incentive models; dashboards and wireframes; an Enterprise Data Engineering group" }
  - { k: "Implemented by", v: "Bugcrowd's internal team, in full" }
steps: ["Framed with leadership", "What the business needs, specified", "Handed over — implemented in-house"]
outcome: "Bugcrowd implemented both strategies — the data services framework and the crowd management system — entirely with its own people. No dependency on us, no second engagement to finish the first. That is the model working at its smallest: frame it, specify it, hand it over, and the capability stays."
---

## The diagnosis leadership acted on

{{< pull >}}Bugcrowd is two businesses: a cybersecurity company that helps customers remediate threats, and a talent agency for the people who do it. Its systems treated them as one.{{< /pull >}}

{{< versus left="Customer lifecycle" right="Crowd lifecycle" >}}
{{< vs l="**Mindshare** — try the platform" r="**Mindshare** — join the platform" >}}
{{< vs l="**Wallet share** — pay for a subscription" r="**Wallet share** — get paid for security work" >}}
{{< vs l="**Experience share** — tell other customers" r="**Experience share** — tell other researchers" >}}
{{< /versus >}}

Identical workflows across the two produce very different outcomes, and the imbalance between them was capping how far either could scale. The transformation, in Bugcrowd's own terms: manage the two separately until they can converge, build the data foundation both need, and become the *gateway* — the best talent for every program, the best return on time for every researcher.

## Where the data stood

{{< cards cols="3" >}}
{{< card tag="queue" title="30 requests waiting, 3 in progress" >}}Two to four weeks each. Most were a simple aggregation or a profile lookup.{{< /card >}}
{{< card tag="insight" title="A renewal report and time-to-triage" >}}That was the reporting. Definitions inconsistent from one team to the next.{{< /card >}}
{{< card tag="coupling" title="Data tied to application logic" >}}Every new question meant touching the platform. No data-driven workflow anywhere.{{< /card >}}
{{< /cards >}}

## What we delivered

{{< timeline >}}
{{< tl when="Strategy" title="An open-access data services framework" >}}
An information architecture with a real entity model and master data; ingestion and export instead of ad hoc extracts; programmatic access so new products and self-service reporting stop being tickets. First moves named: a normalized transactional model, a Postgres decision, an ETL spike, an operational data store.
{{< /tl >}}
{{< tl when="Roadmap" title="Three quarters, sequenced" >}}
Infrastructure and a single source of truth first; a machine-learning-ready data services MVP after. Each feature with a goal, a target use case and a five-step path.
{{< /tl >}}
{{< tl when="Features" title="What the data unlocks" >}}
A security knowledge base with a recommendation engine. **Crowd Match** — profile-based matching of vulnerabilities to researchers and teams, with the mockups and information architecture. Auto-remediation, with the honest note that it needed a build-or-buy decision first.
{{< /tl >}}
{{< tl when="Crowd" title="Crowd management, from first principles" >}}
The crowd is talent that completes units of security work and wants work matched to its skills — and to be valued. A lifecycle: recruit, onboard, produce, nurture. Payout models beyond fixed rates. Incentives that turn researchers into evangelists. Requirements by stage across people, process and product. The dashboards, drawn.
{{< /tl >}}
{{< tl when="Organization" title="An Enterprise Data Engineering group" >}}
A lead, an architect, three engineers — the conduit between operations and the platform. The ask to leadership stated plainly: staff it, put data on the product board's agenda, decide whether to accelerate.
{{< /tl >}}
{{< /timeline >}}

## What Bugcrowd did with it

Implemented both — the data services framework and the crowd management system — in full, with its own internal team. The front half of the model without the venture: frame it, specify it, hand it over, and the capability stays.
