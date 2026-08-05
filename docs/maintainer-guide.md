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
| **Git LFS** | Handles the large video/image files in this repo (see note below — skip this and things will look broken) | [git-lfs.com](https://git-lfs.com/) |
| **Python 3** | Runs MkDocs, which builds the site | [python.org/downloads](https://www.python.org/downloads/) |
| **A code editor** | For editing Markdown/YAML files — plain Notepad works but is painful | [Visual Studio Code](https://code.visualstudio.com/download) (recommended, free) |

On Windows, installing **Git for Windows** also gives you "Git Bash," a
terminal that behaves like Mac/Linux — use that instead of Command Prompt for
any commands in this guide.

!!! warning "Don't skip Git LFS"
    This repo stores its videos and high-res renders through **Git LFS**
    instead of directly in Git, because Git itself handles large binary
    files poorly. If you clone this repo *without* Git LFS installed first,
    every video and some images will silently be replaced by tiny broken
    placeholder files — nothing will error, it'll just look wrong. Install
    it and run `git lfs install` (see Section 4) before you clone.

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

## 4. Local Development Setup

Two ways to get the files onto your computer — pick whichever matches what
you installed in Section 2.

### Option A: GitHub Desktop (recommended if the command line feels unfamiliar)

1. Open GitHub Desktop → **File → Clone Repository**.
2. Sign in with your GitHub account if prompted.
3. Select this repo from the list, choose a folder on your computer, click
   **Clone**. Git LFS is handled automatically — nothing else to do here.
4. Open a terminal *inside that cloned folder* (in GitHub Desktop:
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

Once everything above is set up, this is the loop for every future edit:

1. **Pull the latest changes first**, in case someone else edited since you
   last opened the project — GitHub Desktop: click **Fetch origin** then
   **Pull origin**. Command line: `git pull`.
2. **Edit the `.md` file(s)** in your code editor.
3. **Check `mkdocs serve`** in the browser to confirm it looks right.
4. **Commit your changes** — GitHub Desktop: write a short summary of what
   changed in the box at bottom-left, click **Commit to main**. Command
   line: `git add .` then `git commit -m "short description of the change"`.
5. **Push** — GitHub Desktop: click **Push origin**. Command line:
   `git push`.
6. Wait a minute or two, then check the live site — the GitHub Actions
   workflow rebuilds and redeploys automatically on every push to main. You
   can watch its progress under the repo's **Actions** tab on GitHub.com if
   you want to confirm it succeeded.

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

**Videos or large images look broken/missing after cloning.**
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