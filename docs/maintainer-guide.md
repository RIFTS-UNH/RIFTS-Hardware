# Maintainer Guide

<div class="maintainer-badge">:material-hammer-wrench: Maintainer Documentation — Not RIFTS Hardware Content</div>

<div class="maintainer-page" markdown="1">

This page exists so that anyone besides the original author can pick up
this site, run it locally, and add new content without having to
reverse-engineer how it works.

---

## 1. What This Site Is

A MkDocs (Material theme) static site documenting RIFTS mechanical hardware —
enclosures, antenna mounts, supporting hardware, and CAD references. It's
plain Markdown files plus a small custom stylesheet, built into static HTML
and published automatically.

---

## 2. Repository & Hosting Access

The site is hosted on **GitHub Pages**, built and deployed via **GitHub
Actions** — every push to the main branch triggers an automatic rebuild and
redeploy. There is no manual deploy step.

### Getting new maintainers set up

**Fastest path — add as collaborators:**

1. Go to the repo → **Settings → Collaborators and teams → Add people**.
2. Add with **Write** access (or **Admin** if they should also manage
   repo settings, like the one below).
3. That's it — they can clone, branch, and push, and Actions will deploy
   whatever lands on the main branch.

**More durable path (worth considering) — move the repo into a GitHub
Organization** (e.g. `unh-rifts`) rather than leaving it under a personal
account:

1. Create the org (free) at github.com/organizations/new.
2. In the repo → **Settings → General → Danger Zone → Transfer ownership** →
   transfer to the new org.
3. Add maintainers as org members.

This matters mainly because personal GitHub accounts leave with the person —
an org account keeps the project stable as RIFTS members graduate or
change roles. Either path works technically; the org just avoids a future
"whose account is this actually under" problem.

**One thing to verify either way:** open `.github/workflows/` and confirm the
deploy workflow only uses the default `GITHUB_TOKEN`. If it references a
personal access token or secret tied to one specific account, that'll need
to be replaced or other maintainers' pushes won't deploy.

---

## 3. Local Development Setup

```bash
git clone <repo-url>
cd <repo-folder>
python3 -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt

mkdocs serve                   # live preview at http://127.0.0.1:8000
```

`mkdocs serve` auto-reloads on save — the fastest way to check a page before
pushing. Running `mkdocs build` locally (optional) is a good sanity check
before pushing, since it will surface broken links or bad Markdown the same
way the Actions build would, without waiting on CI.

Pushing to the main branch is what actually publishes the site — there is no
separate manual deploy command to run.

---

## 4. Site Structure

- `mkdocs.yml` — site config and the left-hand navigation tree. **Adding a
  new page requires two steps**: create the `.md` file under `docs/`, *and*
  add an entry for it under `nav:` in `mkdocs.yml` — pages not listed in
  `nav` won't appear in the sidebar even if they exist.
- `docs/stylesheets/extra.css` — all custom styling, including the
  conventions below.
- Each hardware platform generally follows the same page skeleton: Project
  Summary table → HD Renders → Overview → Design Rationale → Manufacturing
  → Engineering Notes → Lessons Learned → Future Work → Related Hardware →
  Revision History → Credits. Copying an existing page (e.g.
  `hardware/zcu216/overview.md`) as a starting template is the easiest way
  to keep new pages consistent.

---

## 5. Styling Conventions (Copy-Paste Patterns)

These are the established patterns on this site. Reuse them exactly for new
pages so everything stays visually consistent — don't reinvent per-page.

### Image with caption

```markdown
![Alt text](path/to/image.jpg){: .hero-image }

Caption text here.
{: .figure-caption }
```

### Video with caption

Videos need the shared wrapper — don't just drop a bare `<video>` tag, it
won't center or round its corners correctly on its own.

```markdown
<div class="video-wrap" markdown="1">

<video controls>
  <source src="path/to/video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Caption text here.
{: .video-caption }

</div>
```

### Download cards (CAD/manufacturing file bundles)

```markdown
<div class="download-cards" markdown>

<div class="download-card" style="--accent:#4A90D9;" markdown>
<span class="card-icon">:fontawesome-solid-draw-polygon:</span>

**Bundle Name**

Short description of what's in it.

[Download](path/to/file.zip){: .md-button :download}

</div>

</div>
```

### Scrolling render strip

```markdown
<div class="render-scroll" markdown>

![Render 1](path.png){: data-gallery="unique-name" }
![Render 2](path.png){: data-gallery="unique-name" }

</div>
```

### Notes/warnings

```markdown
!!! note "Optional Title"
    Body text, indented four spaces.

!!! warning "Optional Title"
    Body text, indented four spaces.
```

### The one attr_list rule that trips people up

The `{: .class-name }` attribute line must sit **directly under** the text
it applies to, on its **own line**, with **no blank line** between them.
Putting it on the same line as the text, or adding a blank line before it,
means it won't apply and will just show up as literal text on the page.

```markdown
Correct:
Some text.
{: .some-class }

Wrong (renders literally, class doesn't apply):
Some text.{: .some-class }

Also wrong (blank line breaks it):
Some text.

{: .some-class }
```

---

## 6. Questions / Issues

For anything not covered here, Josh D'Addario is the original author and
best point of contact for the "why is this built this way" questions.

</div>