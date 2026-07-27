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

!!! note "Fan CAD not included"
    The fan itself is not included in these downloads. Each assembly is designed around a specific manufacturer fan model — download the fan's own CAD model directly from the manufacturer and place it alongside the assembly file before opening, or the assembly will show a missing reference.

    <!-- TODO: add fan model + manufacturer CAD link for Type A and Type B once confirmed -->

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

### Component Files

| Component | SolidWorks (.SLDPRT) | Neutral (.STEP) |
|---|:---:|:---:|
| Fan Mount | [:fontawesome-solid-file-import:](/hardware/ventilation/media/Type_A/Type_A_Fan_Mount.SLDPRT){: title="Download Type A Fan Mount .SLDPRT" } | [:fontawesome-solid-file-import:](/hardware/ventilation/media/Type_A/Type_A_Fan_Mount.STEP){: title="Download Type A Fan Mount .STEP" } |
| Airflow Duct | [:fontawesome-solid-file-import:](/hardware/ventilation/media/Type_A/Type_A_Air_Duct.SLDPRT){: title="Download Type A Airflow Duct .SLDPRT" } | [:fontawesome-solid-file-import:](/hardware/ventilation/media/Type_A/Type_A_Air_Duct.STEP){: title="Download Type A Airflow Duct .STEP" } |

### Full Assembly & Print Project

[:fontawesome-solid-cubes: Download Full Assembly (.SLDASM)](/hardware/ventilation/media/Type_A_Assembly.SLDASM){: .md-button :download}
[:fontawesome-solid-layer-group: Download Print Project (.3mf)](/hardware/ventilation/media/Type_A/RIFTS_Duct_FanMount_AirflowDuct_TypeA_PrintAssembly.3mf){: .md-button :download}

*Designed for: [Fan model TBD](#) — CAD available from the manufacturer.*

### HD Renders

<div class="render-showcase" markdown>

![Type A Render — Front](/hardware/ventilation/media/Type_A/Type_A_Assembly_Render.png){: data-gallery="type-a-renders" }

![Type A Render — Back](/hardware/ventilation/media/Type_A/Type_A_Assembly_Render_Back.png){: data-gallery="type-a-renders" }

![Type A Render — In Enclosure](/hardware/ventilation/media/Type_A/Type_A_In_Enclosure_Render.png){: data-gallery="type-a-renders" }

</div>

*HD renders — click to view full size.*

---

## Type B Duct

### Component Files

| Component | SolidWorks (.SLDPRT) | Neutral (.STEP) |
|---|:---:|:---:|
| Fan Mount | [:fontawesome-solid-file-import:](/hardware/ventilation/media/Type_B/Type_B_Fan_Mount.SLDPRT){: title="Download Type B Fan Mount .SLDPRT" } | [:fontawesome-solid-file-import:](/hardware/ventilation/media/Type_B/Type_B_Fan_Mount.STEP){: title="Download Type B Fan Mount .STEP" } |
| Airflow Duct | [:fontawesome-solid-file-import:](/hardware/ventilation/media/Type_B/Type_B_Air_Duct.SLDPRT){: title="Download Type B Airflow Duct .SLDPRT" } | [:fontawesome-solid-file-import:](/hardware/ventilation/media/Type_B/Type_B_Air_Duct.STEP){: title="Download Type B Airflow Duct .STEP" } |

### Full Assembly & Print Project

[:fontawesome-solid-cubes: Download Full Assembly (.SLDASM)](/hardware/ventilation/media/Type_B_Assembly.SLDASM){: .md-button :download}
[:fontawesome-solid-layer-group: Download Print Project (.3mf)](/hardware/ventilation/media/Type_B/RIFTS_Duct_FanMount_AirflowDuct_TypeB_PrintAssembly.3mf){: .md-button :download}

*Designed for: [Fan model TBD](#) — CAD available from the manufacturer.*

### HD Renders

<div class="render-showcase" markdown>

![Type B Render — Front](/hardware/ventilation/media/Type_B/Type_B_Assembly_Render.png){: data-gallery="type-b-renders" }

![Type B Render — Back](/hardware/ventilation/media/Type_B/Type_B_Assembly_Render_Back.png){: data-gallery="type-b-renders" }

![Type B Render — In Enclosure](/hardware/ventilation/media/Type_B/Type_B_In_Enclosure_Render.png){: data-gallery="type-b-renders" }

</div>

*HD renders — click to view full size.*

---

### Notes

- The **.SLDASM** files are the full assembled duct models, combining both components, and require SolidWorks to open.
- The **.SLDPRT** files are native SolidWorks part files and require SolidWorks to open.
- The **.STEP** files are neutral-format exports compatible with most CAD software, recommended if you don't have access to SolidWorks.
- The **.3mf** files are Bambu Studio print projects containing the validated print settings and slicer profile for that duct type.