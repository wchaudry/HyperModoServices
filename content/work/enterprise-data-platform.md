---
title: "An enterprise data platform, from strategy to production"
summary: "Wrote the transformation strategy for Zones LLC, a $3B IT solutions provider, sold it, won a $4M program, and delivered six products into daily use."
date: 2022-07-01
lastmod: 2026-09-01
client: "Zones LLC"
period: "2022–present"
numbers: "$4M · 6 products · 70 engineers"
featured: true
eyebrow: "Case study"
weight: 10
tags: ["strategy", "data platform", "delivery"]
---

{{< stats >}}
{{< stat value="$4M" label="Program" >}}36 months, run from start to finish as Program Owner.{{< /stat >}}
{{< stat value="6" label="Products in production" >}}Identity, master data, dataflow orchestration, merchandising, documentation, operations.{{< /stat >}}
{{< stat value="3" label="Legacy systems retired" >}}BizTalk EDI processing, an Oracle identity system, twenty years of ERP-embedded rules.{{< /stat >}}
{{< /stats >}}

## The situation

Zones LLC, a $3B IT solutions provider, had product data split across three departments, catalog rules buried in twenty years of ERP customization, and no way to sell hardware, services and subscriptions as a single offer. Merchandising was manual, competitive pricing reached a small fraction of the catalog, and every catalog change was an IT request.

## What I did

Wrote the digital-platform strategy — the market case, the competitive analysis, the business model, the revenue it should produce — and presented it to the executive team. Won the program. Then built it: the architecture, the delivery organization, and the hardest parts of the code.

The platform replaced the content-management tool and the fragmented catalog processes with one governed source of truth for product, service and subscription data, owned by the business rather than the ERP. Vendor and distributor feeds — EDI, catalog, inventory — are ingested automatically; the business rules that lived in people's heads and in AX customization are documented, coded and testable; business users change product data themselves, with approval workflows and a full audit trail.

Go, PostgreSQL, Kubernetes, Azure, React.

## What happened

Six products in daily use. BizTalk EDI processing, an Oracle-based sign-in system and the legacy ERP business rules retired. The platform designed so it could be sold, not just used: every connector on a plugin framework, outside developers able to register applications against it, and three plausible ways to charge for it.
