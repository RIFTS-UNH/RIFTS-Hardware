# Cooling Air Ducts & Fans

## Project Summary

| | |
|---|---|
| **Project** | Cooling Air Ducts & Fans |
| **Purpose** | Shared airflow management ducting for enclosure-mounted fans across RIFTS hardware platforms |
| **Platform** | ZCU216 RF Shielded Enclosure, RFSoC 4x2 Portable Field Enclosure |
| **Application** | Radio Interferometer for Thunderstorm Studies (RIFTS) |
| **Manufacturing Method** | FDM Additive Manufacturing |
| **Prototype Material** | PLA |
| **Recommended Material** | PETG or ABS |
| **Duct Variants** | Type A, Type B — each with Standard and Short length options |
| **Status** | Final Design Complete |
| **Related Hardware** | ZCU216 RF Shielded Enclosure, RFSoC 4x2 Portable Field Enclosure |

---

Shared thermal management components developed for use with RIFTS enclosure platforms.

The air duct assemblies improve airflow management by directing fan-generated airflow toward intended cooling regions within the enclosure.

Applicable platforms:

- ZCU216 Rack-Mounted Enclosure
- RFSoC 4x2 Portable Field Enclosure

---

## Design Overview

Two duct variants were developed — **Type A** and **Type B** — each consisting of two printed components that work together around a single fan:

- **Fan Mount** — attaches the fan itself to the enclosure panel.
- **Airflow Duct** — attaches to the opposite side of the fan and channels the exhaust into a more uniform, streamlined flow.

Both duct types share this same two-part mounting approach; the difference between Type A and Type B lies in their geometry, sized for the specific fan and airflow requirements of their target enclosure.

Each duct type also has a **Short** variant of the airflow duct, sized to fit within the ZCU216 enclosure — the original (Standard) airflow duct fits the RFSoC 4x2 enclosure. The Fan Mount component is shared between both variants; only the airflow duct length differs.

!!! note "Fan reference models included"
    The actual manufacturer fan CAD isn't included in these downloads due to IP restrictions. Instead, each SolidWorks and Neutral Bundle below includes a simplified **reference model** for that duct type's fan — a block matching the real fan's major footprint and four-hole mounting pattern at true dimensions, without any proprietary internal detail. It's intended for enclosure packaging, clearance checks, and mounting verification only, not as a substitute for the manufacturer's actual model.

!!! note "Short variant installation"
    No separate installation video was recorded for the Short variants — installation is identical to the Standard variants shown below, only the duct length differs.

### Installation Video — Type A

<div class="video-wrap" markdown="1">

<video controls>
  <source src="../media/Type_A/Type_A_Installation_Tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

SolidWorks assembly walkthrough showing the Type A fan + duct assembly mounting to the enclosure wall.
{: .video-caption }

</div>

<!-- TODO: replace with actual video filename once exported/uploaded to docs/hardware/ventilation/media/Type_A/ -->

### Installation Video — Type B

<div class="video-wrap" markdown="1">

<video controls>
  <source src="../media/Type_B/Type_B_Installation_Tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

SolidWorks assembly walkthrough showing the Type B fan + duct assembly mounting to the enclosure wall.
{: .video-caption }

</div>

<!-- TODO: replace with actual video filename once exported/uploaded to docs/hardware/ventilation/media/Type_B/ -->

---

## Material Selection

Prototype ducts and fan mounts were printed in **PLA** for rapid iteration and geometry verification during early development. PLA's relatively low glass transition temperature and mechanical brittleness make it a poor long-term choice for components mounted near actively cooled electronics, however.

**PETG or ABS is recommended** for production units — both offer improved heat resistance, layer adhesion, and impact durability better suited to sustained operation inside the enclosure than PLA.

---

## Type A Duct

### CAD Bundles

<div class="download-cards" markdown>

<div class="download-card" style="--accent:#4A90D9;" markdown>
<span class="card-icon">:fontawesome-solid-draw-polygon:</span>

**SolidWorks Bundle**

Fan Mount, Airflow Duct (Standard & Short), and the Type A fan reference model, as native `.SLDPRT` files.

[Download](../media/Type_A/RIFTS_Duct_TypeA_SLDPRT_Bundle.zip){: .md-button :download}

</div>

<div class="download-card" style="--accent:#5CB85C;" markdown>
<span class="card-icon">:fontawesome-solid-diagram-project:</span>

**Neutral Bundle**

Same parts in `.STEP` format — works with most CAD software.

[Download](../media/Type_A/RIFTS_Duct_TypeA_STEP_Bundle.zip){: .md-button :download}

</div>

<div class="download-card" style="--accent:#E8833A;" markdown>
<span class="card-icon">:fontawesome-solid-cube:</span>

**STL Bundle**

Print-ready mesh geometry for all parts.

[Download](../media/Type_A/RIFTS_Duct_TypeA_STL_Bundle.zip){: .md-button :download}

</div>

</div>

### Print Projects

<div class="download-cards" markdown>

<div class="download-card" style="--accent:#8E5CD9;" markdown>
<span class="card-icon">:fontawesome-solid-print:</span>

**Standard**

RFSoC 4x2 length — Bambu Studio print project.

[Download](../media/Type_A/RIFTS_Duct_FanMount_AirflowDuct_TypeA_PrintAssembly.3mf){: .md-button :download}

</div>

<div class="download-card" style="--accent:#D9534F;" markdown>
<span class="card-icon">:fontawesome-solid-print:</span>

**Short**

ZCU216 length — Bambu Studio print project.

[Download](../media/Type_A/RIFTS_Short_Duct_FanMount_AirflowDuct_TypeA_PrintAssembly.3mf){: .md-button :download}

</div>

</div>

*A simplified reference model of the Type A fan's mounting footprint is included in the SolidWorks and Neutral Bundles above — see the note at the top of this page for details.*

### Assembly Hardware

Both the Standard and Short Type A duct assemblies require **four M3 × 50 mm machine screws and four M3 nuts** to secure the Fan Mount to the Airflow Duct.

### HD Renders

<div class="render-scroll" markdown>

![Type A Render — Front](../media/Type_A/Type_A_Assembly_Render.png){: data-gallery="type-a-renders" }

![Type A Render — Back](../media/Type_A/Type_A_Assembly_Render_Back.png){: data-gallery="type-a-renders" }

![Type A Render — In Enclosure](../media/Type_A/Type_A_In_Enclosure_Render (2).png){: data-gallery="type-a-renders" }

![Type A Render — Short Variant](../media/Type_A/Type_A_Assembly_Short_Render.png){: data-gallery="type-a-renders" }

</div>

---

## Type B Duct

### CAD Bundles

<div class="download-cards" markdown>

<div class="download-card" style="--accent:#4A90D9;" markdown>
<span class="card-icon">:fontawesome-solid-draw-polygon:</span>

**SolidWorks Bundle**

Fan Mount, Airflow Duct (Standard & Short), and the Type B fan reference model, as native `.SLDPRT` files.

[Download](../media/Type_B/RIFTS_Duct_TypeB_SLDPRT_Bundle.zip){: .md-button :download}

</div>

<div class="download-card" style="--accent:#5CB85C;" markdown>
<span class="card-icon">:fontawesome-solid-diagram-project:</span>

**Neutral Bundle**

Same parts in `.STEP` format — works with most CAD software.

[Download](../media/Type_B/RIFTS_Duct_TypeB_STEP_Bundle.zip){: .md-button :download}

</div>

<div class="download-card" style="--accent:#E8833A;" markdown>
<span class="card-icon">:fontawesome-solid-cube:</span>

**STL Bundle**

Print-ready mesh geometry for all parts.

[Download](../media/Type_B/RIFTS_Duct_TypeB_STL_Bundle.zip){: .md-button :download}

</div>

</div>

### Print Projects

<div class="download-cards" markdown>

<div class="download-card" style="--accent:#8E5CD9;" markdown>
<span class="card-icon">:fontawesome-solid-print:</span>

**Standard**

RFSoC 4x2 length — Bambu Studio print project.

[Download](../media/Type_B/RIFTS_Duct_FanMount_AirflowDuct_TypeB_PrintAssembly.3mf){: .md-button :download}

</div>

<div class="download-card" style="--accent:#D9534F;" markdown>
<span class="card-icon">:fontawesome-solid-print:</span>

**Short**

ZCU216 length — Bambu Studio print project.

[Download](../media/Type_B/RIFTS_Short_Duct_FanMount_AirflowDuct_TypeB_PrintAssembly.3mf){: .md-button :download}

</div>

</div>

*A simplified reference model of the Type B fan's mounting footprint is included in the SolidWorks and Neutral Bundles above — see the note at the top of this page for details.*

### Assembly Hardware

Both the Standard and Short Type B duct assemblies require:

- Four M3 × 15 mm machine screws and nuts
- Four M3 × 50 mm machine screws and nuts (minimum length — see note below)

!!! note "50 mm is a minimum, not a target — use longer screws on the Standard variant where possible"
    50 mm M3 screws only just barely protrude far enough past the assembly to fit the nuts on, which isn't ideal. The 50 mm cap is strictly a fit constraint of the **Short (ZCU216) variant** — the ZCU216 enclosure doesn't have room for anything longer. The **Standard (RFSoC 4x2) variant** has no such restriction and has room for longer screws, so screws longer than 50 mm should be used there whenever available. 50 mm is listed as the baseline/minimum length for both variants simply because it's guaranteed to work on either one.

### HD Renders

<div class="render-scroll" markdown>

![Type B Render — Front](../media/Type_B/Type_B_Assembly_Render.png){: data-gallery="type-b-renders" }

![Type B Render — Back](../media/Type_B/Type_B_Assembly_Render_Back.png){: data-gallery="type-b-renders" }

![Type B Render — In Enclosure](../media/Type_B/Type_B_In_Enclosure_Render.png){: data-gallery="type-b-renders" }

![Type B Render — Short Variant](../media/Type_B/Type_B_Assembly_Short_Render (2).png){: data-gallery="type-b-renders" }

</div>

---

## Commercial Sources

- **M3 × 15 mm Machine Screws:** [mcmaster.com](https://www.mcmaster.com/products/screws/socket-head-screws-2~/system-of-measurement~metric/thread-size~m3/length~15-mm/)
- **M3 × 50 mm Machine Screws:** [mcmaster.com](https://www.mcmaster.com/products/screws/socket-head-screws-2~/system-of-measurement~metric/thread-size~m3/length~50-mm/)
- **M3 Nuts (Nylon Insert Locknuts):** [mcmaster.com](https://www.mcmaster.com/products/nuts/locknuts-2~/nylon-insert-locknuts-2~~/system-of-measurement~metric/thread-size~m3/)

!!! note "Locknuts recommended to resist loosening"
    The nuts linked above are nylon-insert locknuts, the same fastener type used for the sealing hardware on the [antenna mount page](../../antenna/nav_2/antenna-overview.md) — the nylon insert resists loosening under vibration over time better than a standard hex nut, which is worth having on hardware that sees repeated field transport and handling.

!!! note "Galvanic compatibility"
    Pairing dissimilar metals (e.g., stainless steel fasteners against an aluminum enclosure panel) can, under the right conditions, lead to galvanic corrosion over time. This isn't expected to be a meaningful concern here, since these enclosures aren't deployed in environments with sustained exposure to moisture or salt spray. Still, it's worth keeping galvanic compatibility in mind if this hardware is ever adapted for a more corrosion-prone deployment environment.

---

### Notes

- The **SolidWorks Bundle** (.zip) contains all `.SLDPRT` files for that duct type (Fan Mount, Standard Airflow Duct, Short Airflow Duct) along with the fan reference model. Requires SolidWorks to open.
- The **Neutral Bundle** (.zip) contains the same set of parts in `.STEP` format, compatible with most CAD software — recommended if you don't have access to SolidWorks.
- The **STL Bundle** (.zip) contains print-ready mesh geometry for all parts, for slicing in any FDM slicer.
- The **Print Project** (.3mf) files are Bambu Studio print projects containing the validated print settings and slicer profile — one for the Standard variant, one for the Short variant, since they're different length ducts.
- The **Short** variant uses the same Fan Mount as the Standard variant — only the Airflow Duct differs in length to fit inside the ZCU216 enclosure.
- The **fan reference models** (included in the SolidWorks and Neutral Bundles, one per duct type) are simplified stand-ins for the actual manufacturer fan — a block matching its true footprint and four-hole mounting pattern, without proprietary internal geometry. They're provided for enclosure packaging and mounting verification only, not as manufacturer-accurate CAD.