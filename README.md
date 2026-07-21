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

## Gallery

### Complete Enclosure

![ZCU216 Isometric View](../../images/zcu216/cover_on_isometric_v1.jpg)

![ZCU216 Front View](../../images/zcu216/front_v2.jpg)

### Internal Assembly

![ZCU216 Internal Assembly](../../images/zcu216/internal_assembly_v2.jpg)

### Rear Panel

![ZCU216 Rear View](../../images/zcu216/rear_v2.jpg)

---

## Directory Contents

### Board CAD

Contains reference CAD models used during enclosure development.

Included models:

- `AMD_Xilinx_ZCU216_Board.SLDPRT`
  - Manufacturer CAD model of the AMD Xilinx ZCU216 development board.

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

## Design Revisions

### Revision A — Initial Enclosure (August 2025)

The first ZCU216 enclosure iteration was manufactured and delivered in August 2025.

This revision established the initial mechanical integration approach for the ZCU216 RFSoC platform, including enclosure dimensions, board mounting, RF shielding provisions, and thermal management considerations.

---

### Revision B — Updated Enclosure (December 2025)

The second ZCU216 enclosure iteration was manufactured and delivered in December 2025.

This revision incorporated updates made following evaluation of the initial enclosure and represents the second production iteration of the ZCU216 enclosure design.

---

## Historical Context

The ZCU216 enclosure represents the first major RIFTS hardware enclosure design.

This platform established the mechanical design approach used for later portable hardware iterations, including the RFSoC 4x2 field enclosure.

---

## Revision History

| Revision | Date | Description |
|----------|------|-------------|
| Rev A | August 2025 | Initial enclosure design fabricated and delivered by manufacturer. |
| Rev B | December 2025 | Updated enclosure design fabricated and delivered by manufacturer. |

---

## Credits

Mechanical design and documentation:
- Joshua D'Addario

Additional hardware:
- Frank Lind, MIT Haystack Observatory
- AMD Xilinx ZCU216 RFSoC platform