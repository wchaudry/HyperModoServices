---
title: "Production data forensics at scale"
summary: "Pipelines moving tens of millions of rows were reporting success while silently dropping records. A systematic diagnosis practice found and closed the failure classes."
date: 2026-03-01
lastmod: 2026-09-01
client: "Zones LLC"
period: "2026"
numbers: "384 root-cause findings"
featured: true
eyebrow: "Case study"
weight: 40
tags: ["data engineering", "diagnosis", "postgresql"]
---

{{< stats >}}
{{< stat value="384" label="Root-cause findings" >}}Documented, each with the query that proved it.{{< /stat >}}
{{< stat value="39×" label="Regression proven" >}}Cold versus warm on an identical query.{{< /stat >}}
{{< stat value="0" label="Alerts that fired" >}}Silent loss is the worst failure class because nothing tells you.{{< /stat >}}
{{< /stats >}}

## The situation

Data pipelines at multi-million-row scale that reported success and quietly dropped rows. Nothing alerted, because from the pipeline's point of view nothing had failed.

## What I did

Built a diagnosis practice and ran it: evidence gathered bottom-up — from the database, through the generated SQL, to the code — one hypothesis at a time, the root cause named before any fix was written. Every finding preserved with the query that produced it, so the next person can re-run the proof rather than trust the conclusion.

Most of this work was done with AI agents writing the code under a framework I designed — persistent memory across sessions, an explicit definition of what counts as a defect, and a review gate every change has to clear.

## What happened

The silent-loss classes were identified and closed. The practice — and the framework — are now how the platform is run.
