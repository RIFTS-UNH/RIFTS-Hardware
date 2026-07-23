# RIFTS Hardware Documentation

![ZCU216 Enclosure](images/hero/front_with_board_v1.jpg)

## Radio Interferometer For Thunderstorm Studies (RIFTS)

This documentation site serves as the engineering archive for the mechanical hardware developed for the **Radio Interferometer For Thunderstorm Studies (RIFTS)** project at the University of New Hampshire.

The archive preserves the design process, fabrication history, testing procedures, and engineering decisions behind the RIFTS hardware platforms.

Included documentation covers:

* Mechanical enclosure design
* Additively manufactured components
* CAD reference models
* Manufacturing files
* Environmental validation testing
* Engineering lessons learned

The goal of this archive is to provide a clear, maintainable reference for future hardware development, reproduction, and continued project support.

---

# Hardware Platforms

## RFSoC 4x2 Portable Field Enclosure

![RFSoC 4x2 Enclosure](images/hero/rear_isometric_view.jpg)

The RFSoC 4x2 enclosure was developed as a portable hardware platform for mobile lightning measurement campaigns.

The design builds upon lessons learned from the earlier ZCU216 enclosure while introducing improvements focused on portability, thermal management, and field deployment.

Key features include:

* 5052 aluminum sheet metal construction
* Electromagnetic shielding considerations
* Active thermal management
* Integrated carrying handles and protective features
* Custom RF pathway integration
* Portable field deployment capability

[View RFSoC 4x2 Documentation →](hardware/rfsoc-4x2/README.md)

---

## ZCU216 Rack-Mount Enclosure

The ZCU216 enclosure was the original RIFTS hardware enclosure platform.

Designed as a 2U rack-mounted laboratory system, it provided mechanical integration for:

* AMD Xilinx ZCU216 RFSoC development platform
* MIT Haystack RF Interface Board
* Associated RF hardware

The ZCU216 enclosure established the mechanical design approach later adapted for portable hardware iterations.

[View ZCU216 Documentation →](hardware/zcu216/README.md)

---

# Antenna Systems

## OmniLOG PRO 1030 N Antenna Mount System

The OmniLOG antenna mount system was developed as a rugged, field-deployable mounting solution for lightning observation campaigns.

The design focuses on:

* Dielectric construction to reduce RF scattering effects
* Environmental sealing
* Mechanical stability
* Repeatable field deployment

Documentation includes:

* Mechanical design rationale
* Manufacturing information
* Print settings
* Bill of materials
* Water immersion validation testing

[View Antenna Mount Documentation →](antenna-mounts/README.md)

---

# Supporting Hardware

## Hardware Accessories

Supporting mechanical components developed throughout the RIFTS hardware development process.

Included systems:

* Cooling air ducts for enclosure thermal management
* RFSoC 4x2 TPU corner protection pads
* RFSoC 4x2 RF pathway reference model
* Additional integration hardware

[View Hardware Accessories →](hardware/accessories/README.md)

---

# Electronics Reference Models

This archive contains mechanical CAD models of electronic hardware used throughout RIFTS development.

These models support:

* Enclosure design
* Mechanical integration studies
* Connector placement verification
* Internal packaging development
* Hardware visualization

The collection includes both manufacturer-provided and internally created CAD models.

Where appropriate, simplified CAD models are included to improve SolidWorks performance while maintaining:

* Board dimensions
* Mounting locations
* Connector locations
* Mechanically relevant interfaces

[View Electronics Reference Models →](electronics-reference-models/README.md)

---

# Engineering Archive Philosophy

This repository documents not only completed hardware, but also the engineering decisions and lessons learned that shaped each design.

Each major subsystem includes:

* Design requirements
* Engineering rationale
* Manufacturing approach
* Validation testing
* Revision history
* Future improvement considerations

The objective is to preserve the complete engineering process rather than only the final manufactured hardware.

---

# Repository Organization

```
RIFTS-Hardware/

├── hardware/
│   ├── rfsoc-4x2/
│   ├── zcu216/
│   └── accessories/
│       ├── cooling-air-ducts/
│       ├── rfsoc-4x2-corner-pads/
│       └── rfsoc-4x2-rf-pathway/
│
├── antenna-mounts/
│
├── electronics-reference-models/
│
├── docs/
│
├── images/
│
└── downloads/
```

---

# CAD and Manufacturing Files

Large CAD assemblies and manufacturing archives may be maintained separately or through Git Large File Storage (Git LFS) due to file size limitations.

Documentation pages provide navigation, engineering context, and access information for archived hardware files.

---

# Acknowledgements

This hardware was developed as part of the **Radio Interferometer For Thunderstorm Studies (RIFTS)** project at the University of New Hampshire.

Additional hardware contributions and reference designs include:

* **Frank Lind, MIT Haystack Observatory**

  * RF Interface Board reference design

* **AMD Xilinx**

  * ZCU216 RFSoC Development Platform
  * RFSoC 4x2 Development Platform

* **SparkFun Electronics**

  * ZED-F9T GNSS Timing Breakout
  * ESP32 WROOM Thing Plus

---

# Maintainer

Mechanical design and documentation:

**Joshua D'Addario**

---

# Revision History

| Revision | Date      | Description                                   |
| -------- | --------- | --------------------------------------------- |
| Rev A    | July 2026 | Initial RIFTS hardware documentation archive. |
