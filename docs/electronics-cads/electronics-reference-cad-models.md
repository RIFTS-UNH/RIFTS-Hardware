# Electronics Reference CAD Models

## Overview

This section catalogs the mechanical CAD reference models of electronic hardware collected over the course of RIFTS development, used to support enclosure design, mechanical integration studies, connector placement verification, and internal packaging development.

These are **mechanical reference models only** — dimensional and geometric representations used for CAD integration work, not schematics, PCB layout, or electrical design files.

The collection includes both manufacturer-provided models and models created or derived in-house from available references, sourced from a mix of manufacturers, collaborators, and third parties.

---

## Models in This Collection

| Model | Designer / Manufacturer | Source | Simplified Version Available |
|-------|--------------------------|--------|:---:|
| AMD Xilinx RFSoC 4x2 Development Board | AMD | Provided directly by an AMD representative | Yes |
| AMD Xilinx ZCU216 Development Board | AMD | Purchased from a third-party CAD vendor | No |
| RF Interface Board | Frank Lind, MIT Haystack Observatory | Provided by the designer for RIFTS integration | Yes |
| SparkFun ZED-F9T GNSS Timing Breakout (Qwiic) | SparkFun Electronics | Converted from SparkFun's published Eagle files | No |
| SparkFun ESP32 WROOM Thing Plus (Micro B) | SparkFun Electronics | Converted from SparkFun's published Eagle files | No |
| Ethernet Cat5e Bulkhead Connector | Third-party | Sourced from GrabCAD | No |

!!! note "SparkFun models are board outline only"
    Both SparkFun models (ZED-F9T and ESP32 Thing Plus) represent the bare PCB geometry only — mounting holes, board outline, and connector locations — without populated components. Full component-level geometry could not be reliably converted from SparkFun's Eagle files. This was sufficient for the mechanical integration work these models were created for, but worth knowing in advance if you're requesting one for a different purpose.

---

## Requesting Files

!!! warning "Files not publicly distributed"
    These models are not available for direct download from this site. Ownership and redistribution rights vary by source — some are manufacturer-owned geometry, some are provided by outside collaborators, and some come from third-party repositories with unclear redistribution terms.

    If you need one of these files, **contact a RIFTS executive** to request it. They can determine whether a given model is appropriate to share on a case-by-case basis.

    <!-- TODO: add RIFTS executive contact name/email here -->

---

## How These Models Are Used

Reference models in this collection support:

- Enclosure and chassis design
- Mechanical integration studies across hardware platforms
- Connector and cable pathway placement
- Internal packaging and clearance verification
- General hardware visualization for documentation

Where appropriate, simplified versions of these models are used in place of full manufacturer geometry — removing unnecessary cosmetic and internal detail while preserving mechanically relevant features such as board envelope dimensions, mounting hole locations, and connector placement. This improves CAD performance during enclosure design work.

Simplified versions currently exist for the **AMD Xilinx RFSoC 4x2 Development Board** and the **RF Interface Board**. These simplified models retain only mechanically significant geometry — external dimensions, connector locations, and mounting interfaces — and are available as an alternative to the full-detail manufacturer models on request.

---

## Revision History

| Revision | Date | Description |
|----------|------|--------------|
| Rev A | July 2026 | Initial electronics reference model catalog. |

---

## Credits

CAD collection and documentation: **Joshua D'Addario**