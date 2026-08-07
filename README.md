# RIFTS Hardware Documentation

Mechanical design archive and documentation for the **Radio Interferometer For Thunderstorm Studies (RIFTS)** project at the University of New Hampshire.

📖 **Live documentation site:** [joshdaddario.github.io/RIFTS-Hardware](https://rifts-unh.github.io/RIFTS-Hardware/)

This repository holds the source for that site. It covers mechanical enclosure design, additively manufactured components, CAD reference models, manufacturing files, environmental validation testing, and engineering lessons learned across the RIFTS hardware platforms — the RFSoC 4x2 portable field enclosure, the ZCU216 rack-mount enclosure, the OmniLOG antenna mount system, and supporting accessories.

For the full write-ups, navigation, and images, visit the site linked above rather than browsing this repo directly.

---

## Repository Contents

```
RIFTS-Hardware/
├── .github/
│   └── workflows/
│       └── deploy.yml   # builds and deploys the site to GitHub Pages on push to main
├── docs/                # mkdocs source (pages, images, assets for the documentation site)
├── mkdocs.yml            # site configuration
└── README.md
```

Large CAD assemblies and manufacturing archives are tracked with Git LFS. Clone with `git lfs install` set up beforehand, or run `git lfs pull` after cloning, to fetch them.

---

## Building the Site Locally

```bash
pip install mkdocs-material mkdocs-glightbox
mkdocs serve
```

Then open `http://127.0.0.1:8000` to preview locally. Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site with `mkdocs build` and deploys it to GitHub Pages automatically.

---

## Acknowledgements

This hardware was developed as part of the **Radio Interferometer For Thunderstorm Studies (RIFTS)** project at the University of New Hampshire.

Additional hardware contributions and reference designs:

- **Frank Lind, MIT Haystack Observatory** — RF Interface Board reference design
- **AMD Xilinx** — ZCU216 RFSoC Development Platform, RFSoC 4x2 Development Platform
- **SparkFun Electronics** — ZED-F9T GNSS Timing Breakout, ESP32 WROOM Thing Plus

---

## Maintainer

Mechanical design and documentation: **Joshua D'Addario**

---

## Revision History

| Revision | Date      | Description                                              |
| -------- | --------- | --------------------------------------------------------- |
| Rev A    | July 2026 | Initial RIFTS hardware documentation archive.              |
| Rev B    | Aug 2026  | Repository cleaned up to contain only mkdocs source and its GitHub Actions deploy workflow; README rewritten to point to the live site rather than duplicate it. |