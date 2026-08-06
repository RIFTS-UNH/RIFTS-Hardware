# Maintainer Guide

<div class="maintainer-badge">Maintainer Documentation — Not RIFTS Hardware Content</div>

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

## 2. Software You'll Need

Install these once per computer, in this order, before doing anything else.
Everything here is free.

| Tool | What it's for | Download |
|---|---|---|
| **Git** | Tracks changes to the files and talks to GitHub | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **Git LFS** | Handles the large CAD file bundles in this repo (see note below — skip this and downloads will look broken) | [git-lfs.com](https://git-lfs.com/) |
| **Python 3** | Runs MkDocs, which builds the site | [python.org/downloads](https://www.python.org/downloads/) |
| **A code editor** | For editing Markdown/YAML files — plain Notepad works but is painful | [Visual Studio Code](https://code.visualstudio.com/download) (recommended, free) |

On Windows, installing **Git for Windows** also gives you "Git Bash," a
terminal that behaves like Mac/Linux — use that instead of Command Prompt for
any commands in this guide.

!!! warning "Don't skip Git LFS"
    This repo stores its large CAD file bundles (the SolidWorks/STEP/STL
    downloads) through **Git LFS** instead of directly in Git, because Git
    itself handles large binary files poorly. If you clone this repo
    *without* Git LFS installed first, those CAD downloads will silently be
    replaced by tiny broken placeholder files — nothing will error, the
    download links will just be broken. Install it and run
    `git lfs install` (see Section 4) before you clone.

### An easier alternative to the command line: GitHub Desktop

Everything in this guide can be done from a terminal, but if that's
unfamiliar territory, **[GitHub Desktop](https://desktop.github.com/)** is a
free app that does the clone/commit/push steps through buttons and a visual
diff viewer instead of typed commands. It **automatically handles Git LFS**
for you — one less thing to install and remember. It doesn't replace the
code editor (you'd still open the files in VS Code to actually write
content) but it removes almost all of the "typing git commands correctly"
friction.

If you install GitHub Desktop, you can skip the `git clone` command in
Section 4 below — use **File → Clone Repository** in the app instead, sign
in with your GitHub account when prompted, and pick this repo from the
list.

---

## 3. Repository & Hosting Access

The site is hosted on **GitHub Pages**, built and deployed via **GitHub
Actions** — every push to the main branch triggers an automatic rebuild and
redeploy. There is no manual deploy step.

### Recommended: move the repo into a GitHub Organization

**Do this rather than just adding people as collaborators on your personal
account.** A personal account is tied to one person — if that account is
ever deleted, renamed, or simply inaccessible, everything under it (repo,
Pages site, Actions history) goes with it. An organization is its own
independent entity that any current or future RIFTS team member can belong
to, so the project survives graduations, role changes, and anyone's
individual account problems. For a project meant to outlive any one
student's time at UNH, this is the right home for it, not an optional
upgrade.

1. Create the org (free) at [github.com/organizations/new](https://github.com/organizations/new) —
   something like `unh-rifts` is a reasonable name.
2. In the repo → **Settings → General → Danger Zone → Transfer ownership** →
   transfer it into the new org.
3. In the org → **People → Invite member** → add whoever will be
   maintaining the site (and yourself, so you keep access after you're no
   longer the account owner). Give them at least **Write** access to the
   repo; **Admin** if they should also manage repo/org settings.
4. Each person invited gets an email invitation — **they need to accept
   it** before they have any access at all. Nothing below in this guide
   works for them until that invite is accepted.

Nothing about the site, the Pages URL, or the Actions workflow needs to
change when you do this — only who owns the repo.

### Faster stopgap, if you need access set up today

If the org move needs to wait, you can add someone directly to your
personal repo instead: **Settings → Collaborators and teams → Add people**,
same Write/Admin choice as above, same email-invite-must-be-accepted step.
This works immediately but should be treated as temporary — plan to do the
org transfer above once there's time, rather than leaving it as the
permanent setup.

**One thing to verify either way:** open `.github/workflows/` and confirm the
deploy workflow only uses the default `GITHUB_TOKEN`. If it references a
personal access token or secret tied to one specific account, that'll need
to be replaced or other maintainers' pushes won't deploy.

---

## 4. Local Development Setup

Two ways to get the files onto your computer — pick whichever matches what
you installed in Section 2.

### Option A: GitHub Desktop (recommended if the command line feels unfamiliar)

**Before this will work, you need to already have access to the repo** —
that means you must have received and *accepted* an invite (either as an
org member or a direct collaborator, per Section 3). Check your email for a
GitHub invitation if you're not sure — until it's accepted, the repo won't
show up anywhere in GitHub Desktop no matter what you try.

1. If you don't already have a GitHub account, create one free at
   [github.com/join](https://github.com/join) — you'll need this before an
   invite can even be sent to you.
2. Open GitHub Desktop → **File → Clone Repository**.
3. Sign in with that same GitHub account when prompted.
4. Click the correct tab — **GitHub.com** for a personal-account repo, or
   **your org's name** (e.g. `unh-rifts`) if it's been moved into an
   organization — and the repo should now appear in the list, since you
   have access.
5. Select it, choose a folder on your computer, click **Clone**. Git LFS is
   handled automatically — nothing else to do here.
6. Open a terminal *inside that cloned folder* (in GitHub Desktop:
   **Repository → Open in Terminal**) and run just the Python/MkDocs part
   below, starting from `python3 -m venv .venv`.

### Option B: Command line

Run once per machine, before your first clone:

```bash
git lfs install       # one-time setup per machine
```

Then, once per project:

```bash
git clone <repo-url>
cd <repo-folder>
python3 -m venv .venv
source .venv/bin/activate      # Windows (Git Bash): source .venv/Scripts/activate
pip install -r requirements.txt
```

### Previewing the site (either option)

From inside the project folder, with the virtual environment active:

```bash
mkdocs serve                   # live preview at http://127.0.0.1:8000
```

Open that address in a browser — it auto-reloads every time you save a file,
so you can see your edits immediately without pushing anything yet. Leave
this running in its own terminal window while you work; open a second
terminal (or GitHub Desktop) for git commands.

Running `mkdocs build` (optional) is a good sanity check before pushing — it
surfaces broken links or bad Markdown the same way the real Actions build
would, without waiting on CI to tell you.

Pushing to the main branch is what actually publishes the site — there is no
separate manual deploy command to run.

---

## 5. Day-to-Day Editing Workflow

Once everything in Sections 2–4 is set up, every future edit — big or
small — follows the same repeating loop: **get the latest version → make
your change → check it looks right → save your change → send it up to
GitHub.**

Follow whichever section below matches what you set up in Section 4. Do the
steps in order, every time — skipping the "get latest" step at the start is
the most common way people run into confusing conflicts later.

### If you're using GitHub Desktop

1. Open the **GitHub Desktop** app. Confirm the correct repository is
   selected — its name appears near the top-left of the window; if it's
   the wrong one, click that name to switch.
2. Click **Fetch origin** in the top bar. GitHub Desktop checks whether
   anyone else has pushed changes since you last opened it.
3. If a **Pull origin** button appears after that, click it too, and wait
   for it to finish downloading. (If it stays as "Fetch origin" with no
   "Pull" button showing up, you're already fully up to date — move on.)
4. Open the project folder on your computer (wherever you cloned it) and
   open the `.md` file you want to edit in your code editor.
5. Make your edits, then **save the file** (Ctrl+S / Cmd+S).
6. Switch to the browser tab running your `mkdocs serve` preview (see
   Section 4) and refresh it. Confirm your change actually looks right
   before going further.
7. Switch back to GitHub Desktop. Your edited file(s) now appear in a list
   on the left, under **Changes** — this is everything that's different
   from what's currently live on GitHub.
8. In the text box at the bottom-left, type a short description of what
   you changed — e.g. "Update ZCU216 overview wording." This becomes the
   commit's label, so anyone looking at the project's history later can
   tell what happened and why.
9. Click **Commit to main**.
10. Click **Push origin** in the top bar. This uploads your commit to
    GitHub — watch for the small progress indicator to confirm it finished.
11. Done editing for now. Skip to **Confirming it worked** below.

### If you're using the command line

1. Open your terminal and move into the project folder, if you're not
   already there:
   ```bash
   cd path/to/project-folder
   ```
2. Pull the latest changes:
   ```bash
   git pull
   ```
   This downloads anything others have pushed since you last checked. If it
   reports a conflict, stop and don't guess — that means someone edited the
   same lines you're about to touch, and needs to be resolved carefully.
3. Open the `.md` file you want to edit in your code editor, make your
   changes, and save it.
4. Check your `mkdocs serve` preview (Section 4) in the browser — refresh
   the page and confirm the change actually looks right.
5. Stage your changes (marks them as ready to be recorded):
   ```bash
   git add .
   ```
6. Commit them, with a short description of what changed:
   ```bash
   git commit -m "short description of the change"
   ```
7. Push them up to GitHub:
   ```bash
   git push
   ```
8. Done editing for now. Continue to **Confirming it worked** below.

### Confirming it worked (either method)

1. On GitHub.com, open the repo and click the **Actions** tab near the top
   of the page.
2. Find the most recent run at the top of the list — a green checkmark
   means the site rebuilt and published successfully. A red ✕ means it
   failed; click into that run to see the error log explaining why (almost
   always a Markdown or YAML typo).
3. Give it a minute or two after pushing, then open the live site and hard
   refresh (Ctrl+Shift+R / Cmd+Shift+R) to make sure you're not looking at
   a cached older version.

---

## 6. Site Structure

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

## 7. Styling Conventions (Copy-Paste Patterns)

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

## 8. Troubleshooting

**CAD download bundles (.zip/.step/.3mf) look broken/tiny after cloning.**
Git LFS wasn't installed before you cloned. Install it (Section 2), then
run `git lfs pull` from inside the project folder to fetch the real files.

**`mkdocs: command not found`**
The virtual environment isn't active. Run
`source .venv/bin/activate` (Mac/Linux/Git Bash) or
`.venv\Scripts\activate` (Windows Command Prompt) from inside the project
folder, then try again. You'll know it worked if your terminal prompt
starts showing `(.venv)`.

**A caption or styled element shows up as plain text with `{: .some-class }`
literally visible on the page.**
See "The one attr_list rule that trips people up" above — almost always a
missing/extra blank line around the attribute tag.

**`git push` is rejected / says the branch is behind.**
Someone else pushed changes since you last pulled. Run `git pull` first
(GitHub Desktop: **Fetch origin** → **Pull origin**), resolve any conflicts
it flags, then push again.

**The live site hasn't updated after I pushed.**
Check the **Actions** tab on the repo's GitHub page — the deploy takes a
minute or two, and if it failed the tab will show a red ✕ with logs
explaining why (usually a broken Markdown/YAML syntax error). A hard
refresh (Ctrl+Shift+R / Cmd+Shift+R) also rules out browser caching.

---

## 9. Glossary

Plain-language definitions for the jargon used throughout this guide.

| Term | Meaning |
|---|---|
| **Repo (repository)** | The project's folder, tracked by Git, hosted on GitHub |
| **Clone** | Downloading a full copy of the repo onto your computer |
| **Commit** | A saved snapshot of changes, with a short description attached |
| **Push** | Uploading your local commits to GitHub |
| **Pull** | Downloading commits others have pushed since you last checked |
| **Branch** | An independent line of edits (this project mainly just uses `main`) |
| **Markdown (.md)** | The plain-text format used to write every page — see [this cheat sheet](https://www.markdownguide.org/cheat-sheet/) for the basics if you're new to it |
| **YAML (.yml)** | The format `mkdocs.yml` is written in — spacing/indentation matters, so edit carefully |
| **MkDocs** | The tool that turns the Markdown files into the actual website |
| **GitHub Actions** | The automation that rebuilds and republishes the site every time you push |
| **GitHub Pages** | The free hosting GitHub provides for the built site |

</div>