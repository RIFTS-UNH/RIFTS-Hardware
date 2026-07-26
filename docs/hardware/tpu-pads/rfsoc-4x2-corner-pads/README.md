# RFSoC 4x2 TPU Corner Pad System

![Installed Corner Pads](../../../images/accessories/corner_pads_installed.jpg)

---

# Project Summary

| | |
|---|---|
| **Project** | RFSoC 4x2 TPU Corner Pad System |
| **Purpose** | Protective corner assemblies for portable enclosure handling and transportation |
| **Associated Platform** | RFSoC 4x2 Portable Field Enclosure |
| **Manufacturing Method** | FDM Additive Manufacturing |
| **Primary Material** | TPU |
| **Rigid Insert Material** | PLA Prototype / PETG Recommended |
| **Threaded Hardware** | M3 Brass Heat-Set Inserts |
| **Printer** | Bambu Lab A1 |
| **Status** | Complete |

---

# Overview

The RFSoC 4x2 TPU Corner Pad System was developed specifically for the portable RIFTS RFSoC 4x2 enclosure to improve durability during transportation, handling, and field deployment.

Unlike the laboratory-oriented ZCU216 enclosure, the RFSoC 4x2 platform was designed for repeated transportation and operation outside of a controlled laboratory environment.

The corner pad assemblies provide mechanical protection for the aluminum enclosure while improving stability when placed on uneven or irregular surfaces.

---

# Design Purpose

The corner pad assemblies were developed to:

- Protect enclosure corners during transportation and handling.
- Reduce impact forces transferred to the aluminum enclosure.
- Improve stability on uneven surfaces.
- Provide a high-friction interface between the enclosure and supporting surfaces.
- Improve long-term durability of the portable hardware platform.

---

# Assembly Design

Each enclosure corner uses a **unique corner pad assembly** designed to accommodate the specific geometry of that enclosure corner.

The complete system consists of four separate corner assemblies.

Each assembly contains:

- Four TPU body sections.
- Ten custom rigid insert components.
- Ten M3 brass heat-set threaded inserts.
- Mechanical fasteners for final assembly.

The rigid insert components are bonded into dedicated pockets within the TPU sections.

Because TPU is flexible and does not provide an ideal material for directly installing heat-set inserts, rigid printed inserts were incorporated to provide a more reliable threaded interface.

The heat-set inserts are installed into the rigid insert components, allowing the TPU sections to be mechanically fastened together into a complete three-dimensional corner pad assembly.

This modular construction allows damaged sections to be replaced individually rather than requiring replacement of an entire corner assembly.

---

# Material Selection

## TPU Corner Components

The protective corner sections were manufactured using Thermoplastic Polyurethane (TPU).

TPU was selected due to:

- High impact resistance.
- Flexibility under loading.
- Abrasion resistance.
- High surface friction.
- Ability to absorb mechanical shocks.

Compared with rigid thermoplastics, TPU provides improved energy absorption and reduces the likelihood of transmitting impact forces directly into the aluminum enclosure.

---

## Rigid Insert Components

The rigid insert components were originally manufactured using PLA to support rapid prototyping and design iteration.

For future manufacturing, **PETG is recommended** because it provides:

- Improved toughness.
- Increased impact resistance.
- Better elevated-temperature performance.
- Reduced brittleness during repeated assembly.

---

# Heat-Set Insert Installation

The M3 brass heat-set inserts are installed into the rigid printed insert components.

Recommended installation procedure:

1. Heat a soldering iron to approximately **230°C**.
2. Use a heat-set insert press attachment designed for soldering irons to maintain alignment during installation.
3. Insert the brass threaded insert into the prepared hole.
4. Ensure the **serrated face of the heat-set insert faces outward toward the opening of the hole**.
   - The serrated surface should face upward/outward.
   - It should not point deeper into the printed insert.
5. Apply heat and gently press the insert into position until fully seated.

A suitable heat-set insert press attachment can be purchased commercially.

Example:

https://www.amazon.com/Vertical-Machine-Heat-Insertion-Threaded-Components/dp/B0DHKPHKJZ

---

# Design Features

The completed corner pad assemblies provide:

- Full enclosure corner protection.
- Replaceable modular construction.
- Flexible impact absorption.
- Increased friction against supporting surfaces.
- Improved stability during transportation.
- Lightweight construction.

The modular design allows individual TPU sections or rigid inserts to be replaced without recreating the entire assembly.

---

# Gallery

## CAD Model

![Corner Pad CAD](../../../images/accessories/corner_pad_CAD.jpg)

Representative CAD model of a corner pad assembly.

---

## Installed Assembly

![Installed Corner Pad](../../../images/accessories/corner_pads_installed.jpg)

Completed corner pad assemblies installed on the RFSoC 4x2 enclosure.

---

# Manufacturing

The corner pad assemblies were manufactured using fused deposition modeling (FDM) additive manufacturing.

## Manufacturing Details

| Component | Material | Manufacturing Method |
|---|---|---|
| TPU corner sections | TPU | FDM 3D Printing |
| Rigid insert components | PLA Prototype / PETG Recommended | FDM 3D Printing |
| Threaded inserts | Brass M3 Heat-Set Inserts | Commercial Hardware |

Printer:

- Bambu Lab A1

Future manufacturing packages may include Bambu Studio (`.3mf`) files containing validated print profiles.

---

# File Organization

```text
rfsoc-4x2-corner-pads/

├── Common_Components/
│   └── Corner_Pad_Insert/
│       ├── CAD/
│       └── STL/
│
├── Corner_Pad_1/
│   ├── Assembly/
│   ├── CAD/
│   └── STL/
│
├── Corner_Pad_2/
│
├── Corner_Pad_3/
│
└── Corner_Pad_4/
```

---

# Downloads

The repository includes:

## Common Components

- Native SolidWorks CAD for rigid insert components.
- STL files for additive manufacturing.

## Corner Pad Assemblies

Each corner assembly includes:

- SolidWorks assembly files (`.SLDASM`).
- Native SolidWorks part files (`.SLDPRT`).
- STL files for additive manufacturing.

Future revisions may include:

- STEP exports.
- Exploded assembly drawings.
- Bambu Studio (`.3mf`) print files.

---

# Associated Hardware Platform

The corner pad system was developed exclusively for the RFSoC 4x2 portable enclosure.

These assemblies are not used on the ZCU216 enclosure platform.

---

# Revision History

| Revision | Date | Description |
|---|---|---|
| Rev A | July 2026 | Initial corner pad assembly documentation and archive release. |

---

# Credits

Mechanical design and documentation:

**Joshua D'Addario**