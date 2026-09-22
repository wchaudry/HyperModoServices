#!/usr/bin/env python3
"""Render static/og.png, the 1200x630 card link previews show."""

import math
import os
import sys
import urllib.request

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
MARGIN = 72

INK = (35, 16, 68)
VIOLET = (109, 75, 234)
WASH_A = (239, 234, 255)
WASH_B = (123, 92, 240)
WHITE = (255, 255, 255)

EYEBROW = "PEOPLE, PROCESS AND TECHNOLOGY, CONTINUOUSLY IMPROVED"
HEADLINE = ["Make transformation", "a culture, not a project."]
FOOTER = "hypermodo.com"

FONTS = {
    "sans": (
        "PlusJakartaSans.ttf",
        "https://github.com/google/fonts/raw/main/ofl/plusjakartasans/PlusJakartaSans%5Bwght%5D.ttf",
    ),
    "mono": (
        "JetBrainsMono.ttf",
        "https://github.com/google/fonts/raw/main/ofl/jetbrainsmono/JetBrainsMono%5Bwght%5D.ttf",
    ),
}

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, ".fonts")


def font(kind, size, weight):
    name, url = FONTS[kind]
    path = os.path.join(CACHE, name)
    if not os.path.exists(path):
        os.makedirs(CACHE, exist_ok=True)
        sys.stderr.write("fetching %s\n" % name)
        urllib.request.urlretrieve(url, path)
    f = ImageFont.truetype(path, size)
    f.set_variation_by_axes([weight])
    return f


def wash(img):
    """The hero's own gradient: flat to 58%, then down to the violet."""
    d = ImageDraw.Draw(img)
    for y in range(H):
        t = y / (H - 1)
        k = 0.0 if t <= 0.58 else (t - 0.58) / 0.42
        d.line(
            [(0, y), (W, y)],
            fill=tuple(round(a + (b - a) * k) for a, b in zip(WASH_A, WASH_B)),
        )


def mark(img, x, y, size):
    """The bolt from layouts/partials/mark.html, on its 72-unit grid."""
    s = size / 72
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([x, y, x + size, y + size], radius=16 * s, fill=VIOLET)
    pts = [(45, 3), (20, 41), (33, 41), (27, 69), (54, 27), (41, 27)]
    a = math.radians(30)
    out = []
    for px, py in pts:
        dx, dy = px - 36, py - 36
        rx = 36 + dx * math.cos(a) - dy * math.sin(a)
        ry = 36 + dx * math.sin(a) + dy * math.cos(a)
        out.append((x + rx * s, y + ry * s))
    d.polygon(out, fill=WHITE, outline=WHITE, width=max(1, round(1.5 * s)))


def tracked(d, xy, text, f, fill, tracking):
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=f, fill=fill)
        x += d.textlength(ch, font=f) + tracking
    return x


def main():
    img = Image.new("RGB", (W, H), WASH_A)
    wash(img)
    d = ImageDraw.Draw(img)

    brand = font("sans", 36, 700)
    eyebrow = font("mono", 16, 500)
    head = font("sans", 68, 600)
    foot = font("sans", 25, 500)

    mark(img, MARGIN, 54, 50)
    d.text((MARGIN + 50 + 16, 54 + 6), "HyperModo", font=brand, fill=INK)

    tracked(d, (MARGIN, 187), EYEBROW, eyebrow, VIOLET, 1.4)

    y = 258
    for line in HEADLINE:
        d.text((MARGIN, y), line, font=head, fill=INK)
        y += 78

    d.text((MARGIN, H - MARGIN - 28), FOOTER, font=foot, fill=INK)

    out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, "../../static/og.png")
    img.save(os.path.abspath(out), "PNG", optimize=True)
    print("wrote %s (%dx%d)" % (os.path.abspath(out), W, H))


if __name__ == "__main__":
    main()
