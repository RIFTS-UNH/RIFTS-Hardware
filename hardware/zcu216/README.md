# ZCU216 Rack-Mount Enclosure

![ZCU216 Enclosure](../../images/hero/front_with_board_v1.jpg)

## Overview

The ZCU216 enclosure was the original hardware platform developed for the RIFTS project at the University of New Hampshire.

This enclosure was designed as a **2U rack-mounted system** for laboratory integration of the AMD Xilinx ZCU216 RFSoC development platform and associated RF hardware.

The design provides mechanical protection, electromagnetic shielding, thermal management, and integration space for supporting RF electronics.

---

## Design Features

- 2U rack-mounted form factor
- Aluminum enclosure construction
- Electromagnetic shielding considerations
- Active cooling provisions
- Internal mounting for:
  - AMD Xilinx ZCU216 RFSoC development board
  - MIT Haystack RF Interface Board
  - Associated RF hardware

---

## Directory Contents

### Board CAD

Contains reference CAD models used during enclosure development.

Included models:

- `AMD_Xilinx_ZCU216_Board.SLDPRT`
  - Manufacturer CAD model of the ZCU216 development board.

- `MIT_Haystack_RF_Interface_Board.SLDPRT`
  - CAD model of the RF Interface Board developed by Frank Lind at MIT Haystack Observatory.

- `MIT_Haystack_RF_Interface_Board_Simplified.SLDPRT`
  - Simplified CAD model created to improve SolidWorks performance while preserving mechanically relevant geometry.

---

### Enclosure CAD

Contains the final enclosure CAD model.

Format:
- STEP

---

### Manufacturing Files

Contains fabrication files used for enclosure production.

Format:
- Protocase PDA

---

## CAD Model Notes

Some reference models are provided in both original and simplified forms.

Simplified models remove unnecessary internal or cosmetic geometry to improve CAD performance while preserving:

- mounting locations
- connector locations
- external dimensions
- mechanical interfaces

The simplified models are recommended for routine enclosure development.

---

## Historical Context

The ZCU216 enclosure represents the first major RIFTS hardware enclosure design.

This platform established the mechanical design approach used for later portable hardware iterations, including the RFSoC 4x2 field enclosure.

---

## Revision History

| Revision | Date | Description |
|----------|------|-------------|
| 1.0 | July 2026 | Initial documentation release |

---

## Credits

Mechanical design and documentation:
- Joshua D'Addario

Additional hardware:
- Frank Lind, MIT Haystack Observatory
- AMD Xilinx ZCU216 RFSoC platform