# RFSoC 4x2 TPU Corner Pads

![Installed Corner Pads](../../../images/accessories/corner_pads_installed.jpg)

## Overview

The RFSoC 4x2 corner pad system was developed specifically for the portable RIFTS RFSoC 4x2 enclosure to improve durability during transportation and field deployment.

Unlike the laboratory-oriented ZCU216 enclosure, the RFSoC 4x2 platform was intended for frequent transportation and deployment in outdoor environments. The corner pad assemblies provide mechanical protection while improving stability when the enclosure is placed on a variety of surfaces.

---

## Design Purpose

The corner pad assemblies were developed to:

- Protect enclosure corners during transport and handling
- Reduce impact forces transferred to the aluminum enclosure
- Improve stability on uneven surfaces
- Provide a high-friction interface between the enclosure and supporting surfaces
- Improve the long-term durability of the portable hardware platform

---

## Assembly Design

Each enclosure corner uses a unique corner pad assembly designed to accommodate the specific geometry of that corner.

Each assembly consists of:

- Four TPU body sections
- Ten custom rigid inserts
- Ten M3 brass heat-set threaded inserts
- Machine screws for final assembly

The rigid inserts are bonded into dedicated pockets within the TPU components. Heat-set inserts are then installed into the rigid inserts, allowing the four TPU sections to be fastened together using machine screws.

This modular design provides a durable mechanical assembly while allowing individual components to be replaced if damaged.

---

## Material Selection

### TPU Corner Components

The protective body sections were manufactured using Thermoplastic Polyurethane (TPU).

TPU was selected because it provides:

- Excellent impact resistance
- Flexibility under load
- High abrasion resistance
- Excellent surface grip
- Long-term durability during repeated field deployment

Compared to rigid thermoplastics, TPU absorbs impacts while reducing cosmetic and structural damage to the enclosure.

---

### Rigid Insert Components

The rigid insert components were originally manufactured using PLA to support rapid prototyping and design iteration.

For future manufacturing, **PETG is recommended** because it provides:

- Improved toughness
- Greater impact resistance
- Better resistance to elevated temperatures
- Reduced brittleness during repeated assembly and disassembly

---

## Design Features

The completed corner pad assemblies provide:

- Full corner protection
- Replaceable modular construction
- Flexible impact absorption
- Improved enclosure grip
- Stable placement on uneven terrain
- Lightweight construction

The modular design also allows damaged components to be replaced without reprinting an entire corner assembly.

---

## Gallery

### CAD Model

![Corner Pad CAD](../../../images/accessories/corner_pad_CAD.jpg)

Representative CAD model of a corner pad assembly.

---

### Installed Assembly

![Installed Corner Pad](../../../images/accessories/corner_pads_installed.jpg)

Completed corner pad assemblies installed on the RFSoC 4x2 enclosure.

---

## Manufacturing

The corner pad assemblies were manufactured using fused deposition modeling (FDM) additive manufacturing.

### Materials

| Component | Material | Manufacturing Method |
|-----------|----------|----------------------|
| Corner pad body sections | TPU | FDM 3D Printing |
| Rigid insert components | PLA (Prototype) / PETG (Recommended) | FDM 3D Printing |
| Threaded inserts | Brass M3 Heat-Set Inserts | Commercial Hardware |

---

## File Organization

```
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

## Downloads

The repository includes:

### Common Components

- Native SolidWorks CAD for the rigid insert component
- STL files for additive manufacturing

### Corner Pad Assemblies

Each corner assembly includes:

- SolidWorks assembly files (`.SLDASM`)
- Native SolidWorks part files (`.SLDPRT`)
- STL files for additive manufacturing

> **Note**
>
> Additional STEP exports, exploded assembly views, and manufacturing documentation may be added in future revisions of this archive.

---

## Associated Hardware Platform

The corner pad system was developed exclusively for the RFSoC 4x2 portable enclosure.

These assemblies are not used on the ZCU216 enclosure platform.

---

## Revision History

| Revision | Date | Description |
|----------|------|-------------|
| Rev A | July 2026 | Initial corner pad assembly documentation and archive release. |

---

## Credits

Mechanical design and documentation:

**Joshua D'Addario**