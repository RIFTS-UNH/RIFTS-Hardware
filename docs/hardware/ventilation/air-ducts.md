# Cooling Air Ducts & Fans

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

Each duct type also has a **Short** variant of the airflow duct, sized to fit within the shallower ZCU216 enclosure — the original (Standard) airflow duct fits the RFSoC 4x2 enclosure. The Fan Mount component is shared between both variants; only the airflow duct length differs.

!!! note "Fan reference models included"
    The actual manufacturer fan CAD isn't included in these downloads due to IP restrictions. Instead, each SolidWorks and Neutral Bundle below includes a simplified **reference model** for that duct type's fan — a block matching the real fan's major footprint and four-hole mounting pattern at true dimensions, without any proprietary internal detail. It's intended for enclosure packaging, clearance checks, and mounting verification only, not as a substitute for the manufacturer's actual model.

!!! note "Short variant installation"
    No separate installation video was recorded for the Short variants — installation is identical to the Standard variants shown below, only the duct length differs.

### Installation Video — Type A

<video controls style="width:100%; max-width:640px; border-radius:8px;">
  <source src="/hardware/ventilation/media/Type_A/Type_A_Installation_Tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*SolidWorks assembly walkthrough showing the Type A fan + duct assembly mounting to the enclosure wall.*

<!-- TODO: replace with actual video filename once exported/uploaded to docs/hardware/ventilation/media/Type_A/ -->

### Installation Video — Type B

<video controls style="width:100%; max-width:640px; border-radius:8px;">
  <source src="/hardware/ventilation/media/Type_B/Type_B_Installation_Tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*SolidWorks assembly walkthrough showing the Type B fan + duct assembly mounting to the enclosure wall.*

<!-- TODO: replace with actual video filename once exported/uploaded to docs/hardware/ventilation/media/Type_B/ -->

---

## Type A Duct

### CAD Bundles

<div class="download-cards" markdown>

<div class="download-card" style="--accent:#4A90D9;" markdown>
<span class="card-icon">:fontawesome-solid-draw-polygon:</span>

**SolidWorks Bundle**

Fan Mount, Airflow Duct (Standard & Short), and the Type A fan reference model, as native `.SLDPRT` files.

[Download](/hardware/ventilation/media/Type_A/RIFTS_Duct_TypeA_SLDPRT_Bundle.zip){: .md-button :download}

</div>

<div class="download-card" style="--accent:#5CB85C;" markdown>
<span class="card-icon">:fontawesome-solid-diagram-project:</span>

**Neutral Bundle**

Same parts in `.STEP` format — works with most CAD software.

[Download](/hardware/ventilation/media/Type_A/RIFTS_Duct_TypeA_STEP_Bundle.zip){: .md-button :download}

</div>

<div class="download-card" style="--accent:#E8833A;" markdown>
<span class="card-icon">:fontawesome-solid-cube:</span>

**STL Bundle**

Print-ready mesh geometry for all parts.

[Download](/hardware/ventilation/media/Type_A/RIFTS_Duct_TypeA_STL_Bundle.zip){: .md-button :download}

</div>

</div>

### Print Projects

<div class="download-cards" markdown>

<div class="download-card" style="--accent:#8E5CD9;" markdown>
<span class="card-icon">:fontawesome-solid-print:</span>

**Standard**

RFSoC 4x2 length — Bambu Studio print project.

[Download](/hardware/ventilation/media/Type_A/RIFTS_Duct_FanMount_AirflowDuct_TypeA_PrintAssembly.3mf){: .md-button :download}

</div>

<div class="download-card" style="--accent:#D9534F;" markdown>
<span class="card-icon">:fontawesome-solid-print:</span>

**Short**

ZCU216 length — Bambu Studio print project.

[Download](/hardware/ventilation/media/Type_A/RIFTS_Short_Duct_FanMount_AirflowDuct_TypeA_PrintAssembly.3mf){: .md-button :download}

</div>

</div>

*A simplified reference model of the Type A fan's mounting footprint is included in the SolidWorks and Neutral Bundles above — see the note at the top of this page for details.*

### HD Renders

<div class="render-scroll" markdown>

![Type A Render — Front](/hardware/ventilation/media/Type_A/Type_A_Assembly_Render.png){: data-gallery="type-a-renders" }

![Type A Render — Back](/hardware/ventilation/media/Type_A/Type_A_Assembly_Render_Back.png){: data-gallery="type-a-renders" }

![Type A Render — In Enclosure](/hardware/ventilation/media/Type_A/Type_A_In_Enclosure_Render (2).png){: data-gallery="type-a-renders" }

![Type A Render — Short Variant](/hardware/ventilation/media/Type_A/Type_A_Assembly_Short_Render.png){: data-gallery="type-a-renders" }

</div>

*HD renders — click to view full size.*

---

## Type B Duct

### CAD Bundles

<div class="download-cards" markdown>

<div class="download-card" style="--accent:#4A90D9;" markdown>
<span class="card-icon">:fontawesome-solid-draw-polygon:</span>

**SolidWorks Bundle**

Fan Mount, Airflow Duct (Standard & Short), and the Type B fan reference model, as native `.SLDPRT` files.

[Download](/hardware/ventilation/media/Type_B/RIFTS_Duct_TypeB_SLDPRT_Bundle.zip){: .md-button :download}

</div>

<div class="download-card" style="--accent:#5CB85C;" markdown>
<span class="card-icon">:fontawesome-solid-diagram-project:</span>

**Neutral Bundle**

Same parts in `.STEP` format — works with most CAD software.

[Download](/hardware/ventilation/media/Type_B/RIFTS_Duct_TypeB_STEP_Bundle.zip){: .md-button :download}

</div>

<div class="download-card" style="--accent:#E8833A;" markdown>
<span class="card-icon">:fontawesome-solid-cube:</span>

**STL Bundle**

Print-ready mesh geometry for all parts.

[Download](/hardware/ventilation/media/Type_B/RIFTS_Duct_TypeB_STL_Bundle.zip){: .md-button :download}

</div>

</div>

### Print Projects

<div class="download-cards" markdown>

<div class="download-card" style="--accent:#8E5CD9;" markdown>
<span class="card-icon">:fontawesome-solid-print:</span>

**Standard**

RFSoC 4x2 length — Bambu Studio print project.

[Download](/hardware/ventilation/media/Type_B/RIFTS_Duct_FanMount_AirflowDuct_TypeB_PrintAssembly.3mf){: .md-button :download}

</div>

<div class="download-card" style="--accent:#D9534F;" markdown>
<span class="card-icon">:fontawesome-solid-print:</span>

**Short**

ZCU216 length — Bambu Studio print project.

[Download](/hardware/ventilation/media/Type_B/RIFTS_Short_Duct_FanMount_AirflowDuct_TypeB_PrintAssembly.3mf){: .md-button :download}

</div>

</div>

*A simplified reference model of the Type B fan's mounting footprint is included in the SolidWorks and Neutral Bundles above — see the note at the top of this page for details.*

### HD Renders

<div class="render-scroll" markdown>

![Type B Render — Front](/hardware/ventilation/media/Type_B/Type_B_Assembly_Render.png){: data-gallery="type-b-renders" }

![Type B Render — Back](/hardware/ventilation/media/Type_B/Type_B_Assembly_Render_Back.png){: data-gallery="type-b-renders" }

![Type B Render — In Enclosure](/hardware/ventilation/media/Type_B/Type_B_In_Enclosure_Render.png){: data-gallery="type-b-renders" }

![Type B Render — Short Variant](/hardware/ventilation/media/Type_B/Type_B_Assembly_Short_Render (2).png){: data-gallery="type-b-renders" }

</div>

*HD renders — click to view full size.*

---

### Notes

- The **SolidWorks Bundle** (.zip) contains all `.SLDPRT` files for that duct type (Fan Mount, Standard Airflow Duct, Short Airflow Duct) along with the fan reference model. Requires SolidWorks to open.
- The **Neutral Bundle** (.zip) contains the same set of parts in `.STEP` format, compatible with most CAD software — recommended if you don't have access to SolidWorks.
- The **STL Bundle** (.zip) contains print-ready mesh geometry for all parts, for slicing in any FDM slicer.
- The **Print Project** (.3mf) files are Bambu Studio print projects containing the validated print settings and slicer profile — one for the Standard variant, one for the Short variant, since they're different length ducts.
- The **Short** variant uses the same Fan Mount as the Standard variant — only the Airflow Duct differs in length to fit the shallower ZCU216 enclosure.
- The **fan reference models** (included in the SolidWorks and Neutral Bundles, one per duct type) are simplified stand-ins for the actual manufacturer fan — a block matching its true footprint and four-hole mounting pattern, without proprietary internal geometry. They're provided for enclosure packaging and mounting verification only, not as manufacturer-accurate CAD.