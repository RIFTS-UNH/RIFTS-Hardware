# RIFTS Hardware Repository

![ZCU216 Enclosure](images/hero/front_with_board_v1.jpg)

## Overview

This repository contains the mechanical design archive and documentation for the **Radio Interferometer For Thunderstorm Studies (RIFTS)** project at the University of New Hampshire.

The archive includes the mechanical hardware designs, CAD models, manufacturing files, and documentation developed for RF sensing platforms used in lightning research.

The primary goal of this repository is to preserve the engineering work completed during the development of RIFTS hardware and provide a clear reference for future project development.

---

## Hardware Platforms

### RFSoC 4x2 Portable Enclosure

A compact, field-deployable enclosure designed for the AMD Xilinx RFSoC 4x2 platform.

Features:
- Portable field deployment design
- Integrated carrying handles
- Rubber feet for benchtop operation
- Aluminum construction for mechanical protection and electromagnetic shielding
- Active cooling provisions

[View RFSoC 4x2 Documentation →](hardware/rfsoc-4x2/README.md)

---

### ZCU216 Rack-Mount Enclosure

A 2U rack-mounted enclosure designed for the AMD Xilinx ZCU216 RFSoC platform and associated RF hardware.

Features:
- 2U rack integration
- Aluminum construction
- Electromagnetic shielding
- Active cooling provisions
- Integration with the MIT Haystack RF Interface Board

[View ZCU216 Documentation →](hardware/zcu216/README.md)

---

## Additional Hardware

### OmniLOG Antenna Mounts

Weather-resistant antenna mounting hardware designed for field deployment of OmniLOG antennas.

Features:
- FDM-manufactured components
- Weather-resistant materials
- Integrated sealing features
- Designed for rapid field deployment

[View Antenna Mount Documentation →](antenna-mounts/README.md)

---

## Repository Structure

```
hardware/
├── rfsoc-4x2/
├── zcu216/
└── accessories/

antenna-mounts/

docs/

images/

downloads/
```

---

## Documentation

Additional documentation, design notes, manufacturing files, and archived releases are available throughout the repository.

Large CAD archives and manufacturing packages are maintained separately through the project file archive.

---

## Acknowledgements

This hardware was developed as part of the RIFTS project at the University of New Hampshire.

Additional hardware contributions and reference designs include:
- MIT Haystack Observatory RF Interface Board developed by Frank Lind
- AMD Xilinx RFSoC development platforms

---

## Maintainer

Mechanical design and documentation:
- Joshua D'Addario

```