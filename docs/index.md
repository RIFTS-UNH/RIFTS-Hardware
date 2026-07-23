# RIFTS Hardware Design Archive

Mechanical design, validation testing, and engineering documentation for the **Radio Interferometer For Thunderstorm Studies (RIFTS)** project at the University of New Hampshire.

This site serves as the engineering archive for the mechanical hardware developed for RIFTS, preserving the design process, fabrication history, testing procedures, and engineering decisions behind each hardware platform.

Included documentation covers:

* Mechanical enclosure design
* Additively manufactured components
* CAD reference models
* Manufacturing files
* Environmental validation testing
* Engineering lessons learned

The goal of this archive is to provide a clear, maintainable reference for future hardware development, reproduction, and continued project support.

---

## Hardware Platforms

### ZCU216 Rack-Mount Enclosure

The ZCU216 enclosure was the original RIFTS hardware platform: a 2U rack-mounted laboratory system providing mechanical integration for:

* AMD Xilinx ZCU216 RFSoC development platform
* MIT Haystack RF Interface Board
* Associated RF hardware

The ZCU216 enclosure established the mechanical design approach later adapted for portable hardware iterations.

[View ZCU216 Documentation →](hardware/zcu216.md)

### RFSoC 4x2 Portable Field Enclosure

The RFSoC 4x2 enclosure was developed as a portable hardware platform for mobile lightning measurement campaigns, building on lessons learned from the ZCU216 enclosure while improving portability, thermal management, and field deployment.

Key features include:

* 5052 aluminum sheet metal construction
* Electromagnetic shielding considerations
* Active thermal management
* Integrated carrying handles and protective features
* Custom RF pathway integration
* Portable field deployment capability

[View RFSoC 4x2 Documentation →](hardware/rfsoc-4x2.md)

---

## Antenna Systems

### OmniLOG PRO 1030 N Antenna Mount System

The OmniLOG antenna mount system is a rugged, field-deployable mounting solution for lightning observation campaigns, focused on:

* Dielectric construction to reduce RF scattering effects
* Environmental sealing
* Mechanical stability
* Repeatable field deployment

Documentation includes mechanical design rationale, manufacturing information, print settings, bill of materials, and water immersion validation testing.

[View Antenna Mount Documentation →](antenna/omnilog.md)

---

## Supporting Hardware

Supporting mechanical components developed throughout the RIFTS hardware development process, including:

* Cooling air ducts for enclosure thermal management
* RFSoC 4x2 TPU corner protection pads
* RFSoC 4x2 RF pathway reference model
* Additional integration hardware

[View Hardware Accessories →](hardware/accessories.md)

---

## Electronics Reference Models

This archive contains mechanical CAD models of electronic hardware used throughout RIFTS development, supporting:

* Enclosure design
* Mechanical integration studies
* Connector placement verification
* Internal packaging development
* Hardware visualization

The collection includes both manufacturer-provided and internally created CAD models. Where appropriate, simplified models are included to improve SolidWorks performance while preserving board dimensions, mounting locations, connector locations, and other mechanically relevant interfaces.

[View Electronics Reference Models →](electronics-reference-models.md)

---

## Engineering Archive Philosophy

This repository documents not only completed hardware, but also the engineering decisions and lessons learned that shaped each design. Each major subsystem includes:

* Design requirements
* Engineering rationale
* Manufacturing approach
* Validation testing
* Revision history
* Future improvement considerations

The objective is to preserve the complete engineering process rather than only the final manufactured hardware.

---

## CAD and Manufacturing Files

Native CAD models, manufacturing files, and associated documentation are included throughout this archive. Larger design files are managed separately using Git Large File Storage (Git LFS) where appropriate.

---

## Acknowledgements

This hardware was developed as part of the Radio Interferometer For Thunderstorm Studies (RIFTS) project at the University of New Hampshire.

Additional hardware contributions and reference designs include:

* **Frank Lind, MIT Haystack Observatory** — RF Interface Board reference design
* **AMD Xilinx** — ZCU216 RFSoC Development Platform, RFSoC 4x2 Development Platform
* **SparkFun Electronics** — ZED-F9T GNSS Timing Breakout, ESP32 WROOM Thing Plus

---

## Maintainer

Mechanical design and documentation: **Joshua D'Addario**

---

## Revision History

| Revision | Date      | Description                                   |
| -------- | --------- | ---------------------------------------------- |
| Rev A    | July 2026 | Initial RIFTS hardware documentation archive.  |