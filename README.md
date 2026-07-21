# RIFTS Hardware Repository

![ZCU216 Enclosure](images/hero/front_with_board_v1.jpg)

## Overview

This repository contains the mechanical design archive and documentation for the **Radio Interferometer For Thunderstorm Studies (RIFTS)** project at the University of New Hampshire.

The archive preserves the mechanical engineering work completed for the RIFTS hardware platforms, including enclosure designs, supporting components, CAD models, manufacturing files, and documentation.

The goal of this repository is to provide a clear and maintainable reference for future development, hardware reproduction, and continued project support.

---

# Hardware Platforms

## RFSoC 4x2 Portable Field Enclosure

The RFSoC 4x2 enclosure was developed as a portable, field-deployable hardware platform for mobile lightning measurement campaigns.

The enclosure provides:

- Portable field deployment capability
- Aluminum mechanical protection
- Electromagnetic shielding considerations
- Active thermal management
- Interface accessibility for RFSoC hardware
- Integration of custom RF pathway components

[View RFSoC 4x2 Documentation →](hardware/rfsoc-4x2/README.md)

---

## ZCU216 Rack-Mount Enclosure

The ZCU216 enclosure was the original RIFTS hardware enclosure platform.

Designed as a 2U rack-mounted laboratory system, it provides mechanical integration for:

- AMD Xilinx ZCU216 RFSoC development platform
- MIT Haystack RF Interface Board
- Associated RF hardware

The enclosure established the mechanical design approach later adapted for portable field hardware.

[View ZCU216 Documentation →](hardware/zcu216/README.md)

---

# Additional Hardware

## Hardware Accessories

Supporting components developed for RIFTS hardware platforms.

Includes:

- RFSoC 4x2 cooling air ducts
- TPU corner protection pads
- RF pathway mechanical CAD model
- Additional integration hardware

[View Hardware Accessories →](hardware/accessories/README.md)

---

## OmniLOG Antenna Mounts

Weather-resistant antenna mounting hardware designed for field deployment of OmniLOG antennas.

Features:

- FDM-manufactured components
- Weather-resistant materials
- Integrated sealing features
- Field deployment considerations

[View Antenna Mount Documentation →](antenna-mounts/README.md)

---

# Repository Structure

```
RIFTS-Hardware/

├── hardware/
│   ├── rfsoc-4x2/
│   ├── zcu216/
│   └── accessories/
│
├── antenna-mounts/
│
├── docs/
│
├── images/
│
└── downloads/
```

---

# Documentation

Each hardware section contains:

- Design overview
- Engineering rationale
- CAD model information
- Manufacturing notes
- Revision history
- Associated documentation

---

# CAD and Manufacturing Files

Large CAD assemblies and manufacturing archives may be maintained separately from this repository due to file size limitations.

The repository documentation provides navigation and context for all archived hardware files.

---

# Acknowledgements

This hardware was developed as part of the **Radio Interferometer For Thunderstorm Studies (RIFTS)** project at the University of New Hampshire.

Additional hardware contributions and reference designs include:

- Frank Lind, MIT Haystack Observatory  
  - RF Interface Board reference design

- AMD Xilinx
  - ZCU216 RFSoC Development Platform
  - RFSoC 4x2 Development Platform

---

# Maintainer

Mechanical design and documentation:

**Joshua D'Addario**

---

# Revision History

| Revision | Date | Description |
|----------|------|-------------|
| Rev A | July 2026 | Initial RIFTS hardware documentation archive. |