# Manufacturing Details

Full build reference for the OmniLOG PRO 1030 N Antenna Mount System — validated print parameters and the complete bill of materials needed to assemble one unit.

---

## Bill of Materials

The assembly consists of three primary FDM-printed components, commercial sealing hardware, stainless steel fasteners, and ground mounting hardware. Quantities listed represent the requirements for one complete antenna mount assembly.

| Item | Quantity | Description | Notes |
|------|----------|--------------|-------|
| Top Lid | 1 | FDM printed component | Provides antenna mounting interface and O-ring sealing surface |
| Cylindrical Housing | 1 | FDM printed component | Houses antenna electronic stem and provides environmental enclosure |
| Ground Mounting Mast | 1 | FDM printed component | Provides ground stake interface and structural support |
| Nitrile Rubber O-ring | 1 | 50 mm × 3.5 mm (ID × CS) | Commercially sourced sealing element |
| M16L Waterproof Cable Gland | 1 | Waterproof cable entry fitting | Provides sealed cable routing through enclosure |
| M5 Stainless Steel Machine Screws | 6 | Minimum 25 mm length | Secures top lid to cylindrical housing |
| M5 Stainless Steel Washers | 6 | Flat washers | Used with lid fasteners |
| M5 Stainless Steel Nuts | 6 | Threaded nuts | Used with lid fasteners |
| M5 Brass Heat-set Inserts | 2 | Minimum 6 mm length recommended | Installed in mounting mast for housing attachment |
| Ground Stakes | 2 | Approximately 16 inch length recommended | Used for field deployment anchoring |
| Ground Stake Washers | 2 | Load distribution washers | Reduces localized compressive loading |

!!! note
    For the material evolution across prototype, field-evaluation, and final production versions (PLA → ABS → ASA-CF), see Design Evolution on the main Overview page.

### Fastener Notes

**Lid Fasteners** — The top lid is secured to the cylindrical housing using six M5 stainless steel machine screws, washers, and nuts. A minimum screw length of 25 mm is recommended to provide sufficient engagement through the lid and housing interface. Fasteners should be tightened in a star pattern to apply even compression across the O-ring seal.

**Mast Inserts** — The cylindrical housing attaches to the ground mounting mast through two M5 brass heat-set inserts installed into the printed mast component. A minimum insert length of approximately 6 mm is recommended; insert length has not been found to be a critical design parameter provided sufficient engagement is achieved.

### Heat-Set Insert Installation

The two M5 brass heat-set inserts used in the mounting mast are installed after printing. Recommended procedure:

1. Heat a soldering iron to approximately **230 °C**.
2. Orient the brass heat-set insert so the **serrated face is facing outward from the printed part** (toward the ceiling during installation), with the smooth face entering the printed hole first — the serrated face should **not** point down into the hole.
3. Carefully press the heat-set insert into the prepared hole while applying controlled downward pressure.
4. Allow the surrounding plastic to cool and solidify around the insert before applying mechanical load.

Proper insert orientation matters — installing the insert upside down may reduce mechanical retention, since the serrated surface is intended to embed into the surrounding plastic and resist pull-out forces. A heat-set insert press attachment designed to work with a soldering iron can improve alignment and consistency.

### Commercial Sources

- **Cable Gland:** QILIPSU M16L Waterproof Cable Gland — [amazon.com](https://www.amazon.com/QILIPSU-Thread-Waterproof-Through-Connector/dp/B0F99JGRYY)
- **Heat-Set Insert Press:** Vertical Heat Insert Press Attachment for Soldering Iron — [amazon.com](https://www.amazon.com/Vertical-Machine-Heat-Insertion-Threaded-Components/dp/B0DHKPHKJZ)

---

## Print Settings

Validated FDM printing parameters used during development, manufactured and evaluated on a **Bambu Lab A1**. These represent the configurations used during prototype development and field evaluation — future reproductions may use equivalent hardware and materials, but maintaining similar print parameters is recommended to preserve mechanical performance and dimensional accuracy.

### Printer

| Parameter | Value |
|----------|-------|
| Printer | Bambu Lab A1 |
| Nozzle | 0.4 mm Stainless Steel |
| Slicer | Bambu Studio |
| Layer Height | 0.20 mm |

### Filament

| Material | Application |
|----------|-------------|
| Bambu PLA Basic | Initial prototype development and geometry verification |
| Bambu ABS | Field evaluation prototypes |
| ASA-CF | Final production design — improved UV resistance and long-term outdoor durability |

For future prints using Bambu Lab printers, Bambu brand filament is recommended where possible; equivalent materials from other manufacturers may also be suitable if comparable mechanical and thermal properties are maintained.

### Print Orientation

Print orientation was selected to reduce support requirements, preserve critical sealing surfaces, and maintain mechanical strength.

**Top Lid** — Printed with the O-ring sealing groove facing upward. This allows the groove to be printed without support material, preserving a clean sealing surface — avoiding supports here matters because imperfections in this region could negatively impact sealing performance.

**Cylindrical Housing** — Printed with the lid sealing face oriented downward toward the print bed. This minimizes required supports; the antenna stem cavity at the bottom of the housing requires only a single support tree structure, whereas the opposite orientation would require significantly more support material for the overhanging sealing face. This balances support material usage, surface quality, print reliability, and preservation of sealing geometry.

**Ground Mounting Mast** — Printed vertically, standing upright with the M5 heat-set insert mounting holes facing upward. This follows the natural loading direction of the component and requires no supports.

### Structural Settings

| Parameter | Value |
|----------|-------|
| Wall Loops | 12 |
| Top/Bottom Surface Pattern | Concentric |
| Top/Bottom Shell Thickness | 1.6 mm |
| Top/Bottom Shell Layers | 8 |
| Internal Solid Infill Pattern | Monotonic |
| Sparse Infill Density | 30% |
| Sparse Infill Pattern | Gyroid |

### Support Settings

| Parameter | Value |
|----------|-------|
| Support Style | Tree Slim |
| Support Generation | Tree Auto |
| Overhang Threshold Angle | 55° |
| Top Z Distance | 0.28 mm |
| Interface Layers | 3 |

Tree supports were selected to minimize unnecessary material usage and reduce surface defects on externally visible surfaces.

!!! note
    The `.3mf` project files (see Media) preserve the exact Bambu Studio configuration — orientation, supports, material, and slicing parameters — used for production. When reproducing this design, using the provided `.3mf` files is recommended when a compatible Bambu printer is available.