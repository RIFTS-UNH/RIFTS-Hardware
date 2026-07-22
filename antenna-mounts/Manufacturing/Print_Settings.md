# OmniLOG PRO 1030 N Antenna Mount Print Settings

## Overview

This document describes the validated FDM printing parameters used during development of the OmniLOG PRO 1030 N Antenna Mount System.

The printed components were manufactured and evaluated using a **Bambu Lab A1** FDM printer. These settings represent the configurations used during prototype development and field evaluation.

Future reproductions may use equivalent hardware and materials; however, maintaining similar print parameters is recommended to preserve mechanical performance and dimensional accuracy.

---

# Printer

| Parameter | Value |
|----------|-------|
| Printer | Bambu Lab A1 |
| Nozzle | 0.4 mm Stainless Steel |
| Slicer | Bambu Studio |
| Layer Height | 0.20 mm |

---

# Filament

The antenna mount prototypes were manufactured using Bambu Lab filament.

Materials used:

| Material | Application |
|----------|-------------|
| Bambu PLA Basic | Initial prototype development and geometry verification |
| Bambu ABS | Field evaluation prototypes |

For future prints using Bambu Lab printers, Bambu brand filament is recommended where possible. Equivalent materials from other manufacturers may also be suitable if comparable mechanical and thermal properties are maintained.

The final production design is intended to be manufactured using **ASA-CF** for improved outdoor durability, UV resistance, and long-term environmental stability.

---

# Print Orientation

Print orientation was selected to reduce support requirements, preserve critical sealing surfaces, and maintain mechanical strength.

---

## Top Lid

### Orientation

The top lid was printed with the **O-ring sealing groove facing upward**.

### Rationale

This orientation allows the sealing groove to be printed without support material while maintaining a clean sealing surface.

Avoiding supports in the O-ring groove is important because surface imperfections in this region could negatively impact sealing performance.

---

## Cylindrical Housing

### Orientation

The cylindrical housing was printed with the **lid sealing face oriented downward toward the print bed**.

### Rationale

This orientation minimizes the number of required supports.

The bottom region of the housing that contains the antenna stem cavity requires a single support tree structure. Printing in the opposite orientation would require significantly more support material to support the outer circumference of the overhanging sealing face.

This orientation provides a balance between:

- support material usage
- surface quality
- print reliability
- preservation of sealing geometry

---

## Ground Mounting Mast

### Orientation

The mast was printed vertically, standing upright with the M5 heat-set insert mounting holes facing upward.

### Rationale

This orientation follows the natural loading direction of the component and provides a straightforward print configuration with no support requirements.

---

# Structural Settings

| Parameter | Value |
|----------|-------|
| Wall Loops | 12 |
| Top/Bottom Surface Pattern | Concentric |
| Top/Bottom Shell Thickness | 1.6 mm |
| Top/Bottom Shell Layers | 8 |
| Internal Solid Infill Pattern | Monotonic |
| Sparse Infill Density | 30% |
| Sparse Infill Pattern | Gyroid |

---

# Support Settings

Supports were enabled where required.

| Parameter | Value |
|----------|-------|
| Support Style | Tree Slim |
| Support Generation | Tree Auto |
| Overhang Threshold Angle | 55° |
| Top Z Distance | 0.28 mm |
| Interface Layers | 3 |

Tree supports were selected to minimize unnecessary material usage and reduce surface defects on externally visible surfaces.

---

# Additional Manufacturing Notes

The validated manufacturing package includes:

- STL files for each printed component
- Bambu Studio project files (`.3mf`)
- Native CAD models
- Documented print parameters

The `.3mf` files preserve the original Bambu Studio configurations, including:

- print orientation
- support generation
- material selection
- slicing parameters

When reproducing this design, using the provided `.3mf` files is recommended when a compatible Bambu printer is available.