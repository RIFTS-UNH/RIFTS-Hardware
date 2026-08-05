# RFSoC 4x2 Portable Field Enclosure

## Project Summary

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

## HD Renders

<div class="render-scroll" markdown>

![RFSoC 4x2 Enclosure Render 1](media/4x2_Cover_On_Isometric_Render.png){: data-gallery="rfsoc-4x2-renders" }

<!-- ![RFSoC 4x2 Enclosure Render 2](media/4x2_Hero_Render.png){: data-gallery="rfsoc-4x2-renders" } -->

![RFSoC 4x2 Enclosure Render 3](media/4x2_Isometric_Render.png){: data-gallery="rfsoc-4x2-renders" }

![RFSoC 4x2 Enclosure Render 4](media/4x2_Top_Render.png){: data-gallery="rfsoc-4x2-renders" }

![RFSoC 4x2 Enclosure Render 4](media/4x2_front_render.png){: data-gallery="rfsoc-4x2-renders" }

</div>

<!-- Scroll strip — add more renders by appending additional image lines above, same pattern. -->

---

## Overview

The RFSoC 4x2 Portable Field Enclosure was developed as the second major enclosure platform for the University of New Hampshire's Radio Interferometer for Thunderstorm Studies (RIFTS) project.

Unlike the earlier ZCU216 enclosure, which was intended primarily for laboratory integration within a standard 2U rack-mounted form factor, the RFSoC 4x2 enclosure was designed specifically for mobile field deployments. It was engineered to provide mechanical protection, electromagnetic shielding, thermal management, and portability while supporting transportation by vehicle and operation in outdoor research environments.

Although the enclosure itself is not waterproof, it was designed to integrate with the project's weather-resistant antenna systems and neighboring RF electronics during field campaigns.

The RFSoC 4x2 enclosure also represents the culmination of several lessons learned during development of the earlier ZCU216 enclosure, particularly with respect to structural rigidity, EMI shielding, and enclosure construction techniques.

---

## Design Requirements

The enclosure was designed to satisfy the following engineering requirements:

- Provide secure mechanical integration of the AMD Xilinx RFSoC 4x2 development platform.
- Protect sensitive RF electronics during transportation and field deployment.
- Minimize electromagnetic emissions and susceptibility through conductive enclosure design.
- Provide active cooling for continuous operation.
- Maintain access to all required RFSoC interfaces.
- Support rapid deployment and transportation.
- Accommodate the project's custom RF pathway assemblies.
- Maintain a serviceable mechanical design.

## Design Rationale

### Portable Field Deployment

Unlike the ZCU216 enclosure, portability became a primary design objective. Integrated carrying handles and rubber feet allow the enclosure to be transported by hand, placed securely within vehicles, and operated on uneven terrain or standard laboratory work surfaces.

### Structural Improvements

Experience gained from the ZCU216 enclosure directly influenced the mechanical construction of the RFSoC 4x2 enclosure. It utilizes **0.064-inch 5052 aluminum**, the thickest enclosure material used on the RIFTS project. The increased thickness provides noticeably greater rigidity during transportation and handling while also contributing to improved low-frequency shielding performance. As with the later revision of the ZCU216 enclosure, seam-welded construction further improves both structural integrity and electromagnetic shielding effectiveness.

### RFSoC 4x2 Mounting Strategy

The initial enclosure concept followed the mounting philosophy established by the ZCU216 enclosure, positioning the RFSoC development board flush against the rear enclosure wall. During integration it became apparent that this arrangement would obstruct access to the RFSoC 4x2's JTAG/UART interface, located along the side of the development board.

To preserve accessibility, the board was relocated into a rear corner of the enclosure, allowing connector cutouts to be incorporated into both the rear panel and one side panel while maintaining a compact footprint. Although this significantly improved connector accessibility, it also made installation of the development board onto the threaded standoffs more challenging due to the reduced working space around the board.

### Thermal Management

The RFSoC 4x2 enclosure incorporates an active cooling system consisting of two fans. The intake fan is mounted directly to one side panel. Unlike previous designs, the exhaust fan is mounted directly to the heatsink supplied with the RFSoC 4x2 development board — heated air is drawn directly from the heatsink and exhausted through a dedicated vent in the enclosure cover.

Additional airflow management is provided through custom FDM-printed air ducts developed specifically for the enclosure, improving airflow direction and cooling efficiency while remaining easily manufacturable using desktop additive manufacturing.

### RF Pathway Integration

Rather than utilizing the MIT Haystack RF Interface Board employed by the ZCU216 platform, the RFSoC 4x2 enclosure incorporates four analog RF pathway assemblies. Because complete vendor CAD models were unavailable, an engineering reference model of the RF pathway was reverse engineered from available measurements and visual references. Although not intended to represent manufacturing geometry, the model accurately captures the overall size, connector locations, and mechanical envelope required for enclosure integration.

---

## Mechanical Design

The enclosure consists of a seam-welded aluminum chassis with a removable fastened cover. Major mechanical features include:

- Integrated carrying handles
- Six rubber isolation feet
- RFSoC 4x2 mounting provisions
- Side-mounted intake fan
- Heatsink-mounted exhaust fan
- Dedicated ventilation openings
- Standardized Protocase PEM hardware

The removable cover provides full access to the enclosure interior while maintaining shielding continuity through closely spaced perimeter fasteners.

---

## Manufacturing

The enclosure was manufactured by [Protocase](https://www.protocase.com/) using CNC sheet metal fabrication from 0.064-inch 5052 aluminum. Compared to the earlier ZCU216 enclosure, the increased material thickness provided substantially greater rigidity for transportation and field handling while maintaining good manufacturability.

The enclosure utilizes standardized Protocase PEM hardware for board mounting and removable cover attachment.

!!! note "Protocase Contact"
    UNH customer representative: [jhurd@protocase.com](mailto:jhurd@protocase.com)

### Manufacturing Compliance Issue Report

Only one enclosure design was produced. Following delivery of the initial manufactured enclosure, it was discovered that several PEM fasteners intended to secure the removable cover had been installed incorrectly during manufacturing, preventing the cover from being removed using the intended screw-fastened assembly.

The enclosure design itself required no modification. A replacement enclosure was manufactured using the original design with corrected PEM installation.

---

## Design Evolution

Unlike the ZCU216 enclosure, the RFSoC 4x2 enclosure did not undergo multiple design revisions after manufacturing began. Instead, the design was revised several times during the pre-fabrication design phase, incorporating lessons learned from previous RIFTS hardware projects before the initial fabrication. The only additional unit produced was the replacement enclosure described above under Manufacturing.

---

## Engineering Notes

### Cover Removal

The removable cover is secured using twenty-eight perimeter fasteners spaced approximately 2.5 inches apart. This dense spacing was intentionally selected to reduce the effective length of conductive discontinuities around the removable cover, improving electromagnetic shielding without requiring conductive EMI gaskets. Although effective from an EMC perspective, removing the cover requires significant assembly time.

Future enclosure designs could improve serviceability by replacing circular fastener holes along the long sides of the cover with slotted features, allowing the corresponding fasteners to remain partially installed while the cover slides free after loosening — reducing disassembly time without compromising shielding performance.

### RFSoC Installation

Positioning the RFSoC 4x2 in the rear corner of the enclosure successfully preserved access to both rear and side interfaces. However, this location leaves limited clearance when installing the development board onto the threaded standoffs. Future revisions should investigate alternative mounting strategies that preserve connector accessibility while simplifying installation.

### PEM Hardware Selection

Protocase PEM hardware follows standardized dimensions. When selecting threaded standoffs, designers should note that the published dimensions correspond to the hardware **before installation** — part of each PEM becomes embedded within the sheet metal during installation, so the installed height will be shorter than the catalog dimension. This was accounted for in the standoff selection for the RFSoC 4x2 enclosure, so no correction is needed if additional units of this enclosure design are manufactured in the future. Future *new* enclosure designs should account for this reduction when selecting standoff lengths.

Standardized PEM standoffs were selected to mount the two PCBs housed within the enclosure — the RFSoC 4x2 development board and the SparkFun GNSS timing breakout board — accounting for board thickness, required standoff height, and each board's mounting hole pattern:

| PCB | Standoff Part Number |
|-----|----------------------|
| AMD Xilinx RFSoC 4x2 | TSOS-256-500 |
| SparkFun ZED-F9T GNSS Timing Breakout (Qwiic) | BSO4-M3-12 |

The full Protocase standoff catalog is available at [protocase.com/products/components/standoff](https://www.protocase.com/products/components/standoff/) for reference when selecting standoffs for future revisions.

![Standoff Placement Diagram](media/STANDOFF INFORMATION.jpg){: .hero-image }

Diagram illustrating standoff placement and type for each PCB within the enclosure.
{: .figure-caption }

#### Board Installation Video

<div class="video-wrap" markdown="1">

<video controls>
  <source src="../media/4x2_board_installation_tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

SolidWorks walkthrough showing installation of the RFSoC 4x2 development board and the GNSS timing breakout board onto their respective standoffs within the enclosure.
{: .video-caption }

</div>

<!-- TODO: confirm final video filename/path once uploaded -->

---

## Lessons Learned & Retrospective

The RFSoC 4x2 enclosure represents the culmination of approximately eighteen months of mechanical design work on the RIFTS project. While the finished enclosure successfully met its design objectives, development surfaced several recurring engineering themes:

- Designing for easy access is just as important as mechanical packaging — dense fastener spacing improved shielding continuity but significantly increased assembly and service time (see Engineering Notes above).
- Preserving connector accessibility by corner-mounting the RFSoC 4x2 came at the cost of installation difficulty, underscoring the need to weigh accessibility against assemblability early in the design process.
- Early consideration of assembly procedures can eliminate unnecessary maintenance effort later in a project's lifecycle.
- Experience gained from the ZCU216 enclosure translated directly into a more rigid, better-shielded portable design.

Perhaps the greatest lesson was the value of iterative engineering — incorporating lessons from prior RIFTS hardware *before* fabrication, rather than through multiple post-production revisions, ultimately produced a more robust design. It reinforced that successful engineering comes from continual refinement rather than a perfect first attempt.

---

## Future Work

Although the enclosure successfully met its design objectives, several opportunities remain for future refinement:

- Slotted removable cover for faster servicing.
- Improved RFSoC mounting strategy to simplify installation.
- Evaluation of conductive EMI gaskets for removable panel interfaces.
- Additional quantitative shielding effectiveness measurements.
- Continued refinement of airflow management accessories.
- Integration of future RF hardware platforms using the established enclosure architecture.

---

## Related Hardware

Several accessories were developed specifically for the RFSoC 4x2 enclosure and are documented elsewhere on this site. Together, these components complete the portable field enclosure assembly:

- [RF Pathway](../rfsoc-4x2-rf-pathway.md)
- [Cooling Air Ducts](../ventilation/air-ducts.md) *(includes the fan CAD reference)*
- [TPU Corner Pads](../tpu-pads/corner-pads-overview.md)

---

## Revision History

| Revision | Date | Description |
|----------|------|--------------|
| Rev A | 06/12/2026 | Initial enclosure manufactured and delivered by Protocase. |
| Rev A (replacement) | 07/13/2026 | Replacement enclosure produced to correct PEM installation compliance issue. |

---

## Credits

**Mechanical Design, CAD, and Documentation**
Joshua D'Addario — University of New Hampshire, Engineering Physics

**Project Support and Technical Guidance**
Dr. Ningyu Liu — University of New Hampshire, Principal Investigator, RIFTS
Stephen Horn — University of New Hampshire, Senior Member, RIFTS Research Team

**Hardware Platform**
AMD Xilinx — RFSoC 4x2 Development Platform
SparkFun Electronics — Auxiliary Platforms

**Manufacturing**
[Protocase](https://www.protocase.com/) — custom precision sheet metal fabrication