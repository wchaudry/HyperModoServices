# HyperModo Services

The marketing site and writing for HyperModo, Wiqar Chaudry's consulting practice.

What this is for, what gets built and in what order: `docs/2026-09-19-hypermodo-practice-spec.md`.

Not in this repo: HyperModo the product (`../hypermodo`), Xymbia's products, anything that needs a build pipeline to publish.

## Running it

Hugo (extended) is the only tool; there is no theme and no dependency to fetch.

    hugo server        # local preview at http://localhost:1313/
    hugo --gc --minify # production build into public/

## Where things live

- `content/` — every page, as Markdown: `services/`, `work/` (case studies), `approach/`, `about/`,
  `people/`, `writing/` (essays). `podcast/` and `videos/` are drafts until they have a first item.
- `data/` — what the homepage renders from, editable without touching templates: `ledger.yaml`
  (the program ledger), `clients.yaml`, `stack.yaml`, `services.yaml` (the eight cards),
  `proof.yaml`, `quotes.yaml` (placeholders until real quotes exist), `approach.yaml`.
- `layouts/` — the site's own templates; `assets/css/site.css` — the one stylesheet.
- `design/mockups/` — the standalone design mockups the layouts were built from.
- `config/_default/hugo.toml` — site params: email, LinkedIn, location, entity, booking link.

Public contact is wiqar@hypermodo.com and LinkedIn only; no phone number or resume file is
published.
