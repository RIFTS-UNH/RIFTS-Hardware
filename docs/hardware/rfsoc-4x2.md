# RFSoC 4x2 Portable Field Enclosure

![RFSoC 4x2 Enclosure](../images/hero/rear_isometric_view.jpg)

---

# Project Summary

| | |
|---|---|
| **Project** | RFSoC 4x2 Portable Field Enclosure |
| **Purpose** | Portable EMI-shielded enclosure for field deployment of the AMD Xilinx RFSoC 4x2 platform |
| **Platform** | AMD Xilinx RFSoC 4x2 Development Board |
| **Application** | Radio Interferometer for Thunderstorm Studies (RIFTS) |
| **Manufacturer** | Protocase |
| **Material** | 5052 Aluminum |
| **Material Thickness** | 0.064 in (1.63 mm) |
| **Cooling** | Dual forced-air cooling with heatsink-mounted exhaust fan |
| **Shielding Strategy** | Conductive aluminum enclosure with seam-welded construction, dense fastener spacing, and controlled aperture geometry |
| **Status** | Final Design Complete |
| **Related Hardware** | RF Pathway, Air Ducts, TPU Corner Pads |

---

# Overview

The RFSoC 4x2 Portable Field Enclosure was developed as the second major enclosure platform for the University of New Hampshire's **Radio Interferometer for Thunderstorm Studies (RIFTS)** project.

Unlike the earlier ZCU216 enclosure, which was intended primarily for laboratory integration within a standard 2U rack-mounted form factor, the RFSoC 4x2 enclosure was designed specifically for mobile field deployments. The enclosure was engineered to provide mechanical protection, electromagnetic shielding, thermal management, and portability while supporting transportation by vehicle and operation in outdoor research environments.

Although the enclosure itself is not waterproof, it was designed to integrate with the project's weather-resistant antenna systems and neighboring RF electronics during field campaigns.

The RFSoC 4x2 enclosure also represents the culmination of several lessons learned during development of the earlier ZCU216 enclosure, particularly with respect to structural rigidity, EMI shielding, and enclosure construction techniques.

---

# Design Requirements

The enclosure was designed to satisfy the following engineering requirements:

- Provide secure mechanical integration of the AMD Xilinx RFSoC 4x2 development platform.
- Protect sensitive RF electronics during transportation and field deployment.
- Minimize electromagnetic emissions and susceptibility through conductive enclosure design.
- Provide active cooling for continuous operation.
- Maintain access to all required RFSoC interfaces.
- Support rapid deployment and transportation.
- Accommodate the project's custom RF pathway assemblies.
- Maintain a serviceable mechanical design.

---

# Design Rationale

## Portable Field Deployment

Unlike the ZCU216 enclosure, portability became a primary design objective.

Integrated carrying handles and rubber feet allow the enclosure to be transported by hand, placed securely within vehicles, and operated on uneven terrain or standard laboratory work surfaces.

---

## Structural Improvements

Experience gained from the ZCU216 enclosure directly influenced the mechanical construction of the RFSoC 4x2 enclosure.

The enclosure utilizes **0.064-inch 5052 aluminum**, making it the thickest enclosure developed for the RIFTS project.

The increased material thickness provides noticeably greater rigidity during transportation and handling while also contributing to improved low-frequency shielding performance.

As with the later revision of the ZCU216 enclosure, seam-welded construction further improves both structural integrity and electromagnetic shielding effectiveness.

---

## RFSoC 4x2 Mounting Strategy

The initial enclosure concept followed the mounting philosophy established by the ZCU216 enclosure, positioning the RFSoC development board flush against the rear enclosure wall.

During integration it became apparent that this arrangement would obstruct access to the RFSoC 4x2's JTAG/UART interface, which is located along the side of the development board.

To preserve accessibility, the board was relocated into a rear corner of the enclosure. This allowed connector cutouts to be incorporated into both the rear panel and one side panel, providing access to all required interfaces while maintaining a compact enclosure footprint.

Although this approach significantly improved connector accessibility, it also made installation of the development board onto the threaded standoffs more challenging due to the reduced working space around the board.

---

## Thermal Management

The RFSoC 4x2 enclosure incorporates an active cooling system consisting of two fans.

The intake fan is mounted directly to one side panel of the enclosure.

Unlike previous designs, the exhaust fan is mounted directly to the heatsink supplied with the RFSoC 4x2 development board. Heated air is drawn directly from the heatsink and exhausted through a dedicated vent located in the enclosure cover.

Additional airflow management is provided through custom FDM-printed air ducts developed specifically for the enclosure. These accessories improve airflow direction and cooling efficiency while remaining easily manufacturable using desktop additive manufacturing.

---

## RF Pathway Integration

Rather than utilizing the MIT Haystack RF Interface Board employed by the ZCU216 platform, the RFSoC 4x2 enclosure incorporates four analog RF pathway assemblies.

Because complete vendor CAD models were unavailable, an engineering reference model of the RF pathway was reverse engineered from available measurements and visual references.

Although not intended to represent manufacturing geometry, the model accurately captures the overall size, connector locations, and mechanical envelope required for enclosure integration.

---

# Key Engineering Improvements

| Revision | Major Improvements |
|-----------|--------------------|
| **Final Design** | Increased enclosure thickness to 0.064-inch aluminum, seam-welded construction, portable field-deployment architecture, direct heatsink exhaust cooling, RF pathway integration, and improved accessibility to RFSoC interfaces through corner-mounted board placement. |

---

# Mechanical Design

The enclosure consists of a seam-welded aluminum chassis with a removable fastened cover.

Major mechanical features include:

- Integrated carrying handles
- Rubber isolation feet
- RFSoC 4x2 mounting provisions
- Internal RF pathway mounting
- Side-mounted intake fan
- Heatsink-mounted exhaust fan
- Dedicated ventilation openings
- Standardized Protocase PEM hardware

The removable cover provides full access to the enclosure interior while maintaining shielding continuity through closely spaced perimeter fasteners.

---

# Gallery

## Complete Enclosure

![Rear Isometric View](../../images/rfsoc-4x2/rear_isometric_view.jpg)

Overall view of the completed RFSoC 4x2 enclosure.

---

## Exterior Views

![Front View](../../images/rfsoc-4x2/front_view.jpg)

Front panel showing external interfaces.

---

![Side View](../../images/rfsoc-4x2/side_view.jpg)

Side panel illustrating cooling features and enclosure geometry.

---

![Top View](../../images/rfsoc-4x2/top_view.jpg)

Top cover showing exhaust ventilation.

---

## Cooling System

![Fan Side View](../../images/rfsoc-4x2/fan_side_view.jpg)

Side-mounted intake fan and overall airflow configuration.

---

# Directory Contents

The repository preserves the enclosure design, reference CAD models, manufacturing files, and supporting accessories developed specifically for the RFSoC 4x2 platform.

## Board CAD

Contains reference CAD models for the AMD Xilinx RFSoC 4x2 development platform used during enclosure development.

These models were used to establish mounting geometry, connector locations, and mechanical clearances throughout the design process.

---

## Enclosure CAD

Contains the completed enclosure CAD model.

Available formats:

- STEP

---

## Manufacturing Files

Contains the original fabrication package submitted for manufacturing.

Manufacturer:

- Protocase

Available formats:

- Protocase PDA

These files preserve the exact enclosure geometry used for fabrication and may be used as the starting point for future enclosure revisions.

---

## Associated Components

Several accessories were developed specifically for the RFSoC 4x2 enclosure and are documented elsewhere within this repository.

These include:

- RF Pathway
- Air Ducts
- TPU Corner Pads

Together, these components complete the portable field enclosure assembly.

---

# Manufacturing Notes

The enclosure was manufactured by **Protocase** using CNC sheet metal fabrication from **0.064-inch 5052 aluminum**.

Unlike the earlier ZCU216 enclosure, the increased material thickness provided substantially greater rigidity for transportation and field handling while maintaining good manufacturability.

The enclosure utilizes standardized Protocase PEM hardware for board mounting and removable cover attachment.

---

## Manufacturing Compliance Issue

Only one enclosure design was produced.

Following delivery of the initial manufactured enclosure, it was discovered that several PEM fasteners intended to secure the removable cover had been installed incorrectly during manufacturing.

Because of this installation error, the cover could not be removed using the intended screw-fastened assembly.

The enclosure design itself required no modification.

A replacement enclosure was manufactured using the original design with corrected PEM installation.

---

# Design Evolution

Unlike the ZCU216 enclosure, the RFSoC 4x2 enclosure did not undergo multiple design revisions prior to manufacturing.

Instead, the design incorporated many lessons learned from previous RIFTS hardware projects before the initial fabrication.

The only additional enclosure manufactured was a replacement unit produced to correct the manufacturing compliance issue involving PEM installation.

---

# Lessons Learned

Development of the RFSoC 4x2 enclosure highlighted the importance of designing not only for performance, but also for long-term serviceability.

Several practical lessons emerged during repeated assembly and testing.

- Designing for easy access is just as important as mechanical packaging.
- Dense fastener spacing successfully improves shielding continuity but can significantly increase assembly time.
- Corner mounting of the RFSoC 4x2 preserved access to critical interfaces but made installation of the development board considerably more difficult.
- Early consideration of assembly procedures can eliminate unnecessary maintenance effort later in the project's lifecycle.
- Experience gained from the ZCU216 enclosure translated directly into a more rigid, better-shielded portable enclosure.

---

# Engineering Notes

## Cover Removal

The removable cover is secured using twenty-eight perimeter fasteners spaced approximately 2.5 inches apart.

This dense fastener spacing was intentionally selected to reduce the effective length of conductive discontinuities around the removable cover, improving electromagnetic shielding performance without requiring conductive EMI gaskets.

Although effective from an EMC perspective, removing the cover requires significant assembly time.

Future enclosure designs could improve serviceability by replacing circular fastener holes along the long sides of the cover with slotted features.

This would allow the corresponding fasteners to remain partially installed while the cover slides free after loosening the screws, reducing disassembly time without compromising shielding performance.

---

## RFSoC Installation

Positioning the RFSoC 4x2 in the rear corner of the enclosure successfully preserved access to both rear and side interfaces.

However, this location leaves limited clearance when installing the development board onto the threaded standoffs.

Future revisions should investigate alternative mounting strategies that preserve connector accessibility while simplifying installation.

---

## Cooling Strategy

The direct mounting of the exhaust fan to the RFSoC heatsink proved to be an effective cooling solution.

Combined with the custom printed air ducts, the resulting airflow path efficiently removes heat from the primary heat source before exhausting it through the enclosure cover.

---

# Future Work

Although the enclosure successfully met its design objectives, several opportunities remain for future refinement.

Potential improvements include:

- Slotted removable cover for faster servicing.
- Improved RFSoC mounting strategy to simplify installation.
- Evaluation of conductive EMI gaskets for removable panel interfaces.
- Additional quantitative shielding effectiveness measurements.
- Continued refinement of airflow management accessories.
- Integration of future RF hardware platforms using the established enclosure architecture.

---

# Related Documentation

- [RF Pathway](../../Accessories/RF_Pathway/README.md)
- [Air Ducts](../../Accessories/Air_Ducts/README.md)
- [TPU Corner Pads](../../Accessories/TPU_Corner_Pads/README.md)
- [ZCU216 RF Shielded Enclosure](../zcu216/README.md)

---

# Revision History

| Revision | Date | Description |
|-----------|------|-------------|
| Rev A | 2026 | Final enclosure manufactured. Replacement enclosure produced due to manufacturer PEM installation error; enclosure design unchanged. |

---

# Credits

## Mechanical Design, CAD, and Documentation

**Joshua D'Addario**

University of New Hampshire

Engineering Physics

---

## Hardware Platform

**AMD Xilinx**

RFSoC 4x2 Development Platform

---

## Manufacturing

**Protocase**

Custom precision sheet metal fabrication.