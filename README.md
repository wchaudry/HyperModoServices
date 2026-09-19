# HyperModo Services

The marketing site and writing for HyperModo, Wiqar Chaudry's consulting practice.

What this is for, what gets built and in what order: `docs/2026-09-19-hypermodo-practice-spec.md`.

Not in this repo: HyperModo the product (`../hypermodo`), Xymbia's products, anything that needs a build pipeline to publish.

## Running it

Hugo (extended) is the only tool. Blowfish is pulled as a Hugo module on first build.

    hugo server        # local preview at http://localhost:1313/
    hugo --gc --minify # production build into public/

Content lives in `content/` as Markdown: `work/` (case studies), `writing/` (essays), `people/`,
`about/`. `podcast/` and `videos/` exist as drafts and build the day they have a first item.
Public contact is wiqar@hypermodo.com and LinkedIn only; no phone number or resume file is
published.
