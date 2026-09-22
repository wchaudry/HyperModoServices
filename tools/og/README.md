# The link-preview card

`static/og.png` is the 1200x630 image LinkedIn, Slack, iMessage and X show
when someone shares a page. `layouts/_default/baseof.html` points at it with
`og:image`, and `twitter:card` set to `summary_large_image` is what makes X
render the wide card rather than a thumbnail.

Regenerate it after changing the headline or the brand colours:

    python3 tools/og/make-og.py

The script needs Pillow. It fetches Plus Jakarta Sans and JetBrains Mono from
the Google Fonts repository on first run and caches them in `tools/og/.fonts`,
which is not tracked.

A page carries its own card by setting `image` in its front matter, as a path
relative to the site root, with `image_alt` beside it.

LinkedIn caches a preview per URL and will keep serving the one it already
has. After changing the card, re-scrape the URL through LinkedIn's Post
Inspector before sharing it.
