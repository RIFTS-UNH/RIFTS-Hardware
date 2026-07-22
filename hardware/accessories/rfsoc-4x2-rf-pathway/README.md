# RFSoC 4x2 RF Pathway Reference Model

![RF Pathway](../../../images/accessories/rf_pathway.jpg)

---

# Project Summary

| | |
|---|---|
| **Project** | RFSoC 4x2 RF Pathway Reference Model |
| **Purpose** | Mechanical reference model for enclosure integration and layout validation |
| **Associated Hardware** | RFSoC 4x2 Portable Field Enclosure |
| **Model Type** | Reverse-engineered CAD reference model |
| **Estimated Accuracy** | Approximately 90% overall scale accuracy |
| **Intended Use** | Mechanical packaging and visualization |
| **Status** | Complete |

---

# Overview

The RFSoC 4x2 enclosure utilizes four RF signal pathways composed of commercially available RF components rather than a custom RF interface board.

Because a complete mechanical CAD model of the pathway assembly was not available during enclosure development, a reference model was created to support internal packaging studies and mechanical integration.

The resulting CAD model represents the approximate physical envelope of the RF pathway assembly and was used throughout development of the RFSoC 4x2 portable enclosure.

The RF pathway hardware itself was not designed or manufactured as part of the RIFTS project. This archive contains only the mechanically representative CAD model developed to support enclosure design.

---

# Design Purpose

The reference model was created to:

- Estimate the overall physical size of the RF pathway assembly.
- Verify enclosure clearances.
- Evaluate connector accessibility.
- Support internal component layout.
- Assist mechanical packaging decisions.

Four RF pathway assemblies are installed within the completed RFSoC 4x2 enclosure.

---

# Development Methodology

No complete CAD model of the RF pathway assembly was available during enclosure development.

The reference model was therefore created by reverse engineering the overall assembly geometry using:

- Available manufacturer documentation.
- Photographs of the assembled hardware.
- A single measured overall pathway length.

Individual RF components were modeled manually and proportionally scaled so that the completed reference model matched the measured overall length of the physical assembly.

This approach produced a mechanically representative model suitable for enclosure development without requiring detailed dimensional information for every individual RF component.

---

# Accuracy and Intended Use

The RF pathway model was developed exclusively as a mechanical integration reference.

The completed model is estimated to represent the physical hardware to approximately **90% overall dimensional accuracy**.

It is suitable for:

- Mechanical packaging studies.
- Enclosure layout.
- Clearance verification.
- CAD visualization.

It should **not** be used for:

- Manufacturing.
- Precision dimensional verification.
- Mechanical tolerance analysis.
- RF simulation.
- Procurement.

---

# Gallery

## Reference CAD Model

![RF Pathway CAD](../../../images/accessories/rf_pathway_cad.jpg)

Reverse-engineered CAD reference model used during enclosure development.

---

## Installed Hardware

![RF Pathway](../../../images/accessories/rf_pathway.jpg)

One of the four RF pathway assemblies installed within the completed RFSoC 4x2 enclosure.

---

# Engineering Notes

The purpose of this model was to understand the physical footprint of the RF pathway assembly within the enclosure.

The model prioritizes:

- Overall dimensions.
- Connector locations.
- Approximate component placement.
- Mechanical envelope.

Individual component geometries should not be considered dimensionally authoritative.

---

# Associated Hardware Platform

This reference model was created specifically for integration into the RFSoC 4x2 Portable Field Enclosure.

Related documentation:

- [RFSoC 4x2 Portable Field Enclosure](../../README.md)

---

# File Organization

```text
rfsoc-4x2-rf-pathway/

├── CAD/
│   └── SLDPRT/
│       └── RIFTS_RF_Pathway_Reference_Model.SLDPRT
│
├── Images/
│   ├── rf_pathway.jpg
│   └── rf_pathway_cad.jpg
│
└── README.md
```

---

# Downloads

Included in this archive:

- Native SolidWorks reference model (`.SLDPRT`)

---

# Revision History

| Revision | Date | Description |
|----------|------|-------------|
| Rev A | July 2026 | Initial RF pathway reference model documentation and archive release. |

---

# Credits

Reference model and documentation:

**Joshua D'Addario**