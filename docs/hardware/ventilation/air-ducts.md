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

---

## Type A Duct

### Full Assembly

[:fontawesome-solid-cubes: Download (.SLDASM)](../media/air-ducts/RIFTS_Duct_TypeA_Assembly.SLDASM){: .md-button :download}

*Designed for: [Fan model TBD](#) — CAD available from the manufacturer.*

### Fan Mount

[:fontawesome-solid-file-import: Download (.SLDPRT)](../media/air-ducts/RIFTS_Duct_TypeA_Fan_Mount.SLDPRT){: .md-button :download}
[:fontawesome-solid-file-import: Download (.STEP)](../media/air-ducts/RIFTS_Duct_TypeA_Fan_Mount.STEP){: .md-button :download}

### Airflow Duct

[:fontawesome-solid-file-import: Download (.SLDPRT)](../media/air-ducts/RIFTS_Duct_TypeA_Airflow_Duct.SLDPRT){: .md-button :download}
[:fontawesome-solid-file-import: Download (.STEP)](../media/air-ducts/RIFTS_Duct_TypeA_Airflow_Duct.STEP){: .md-button :download}

---

## Type B Duct

### Full Assembly

[:fontawesome-solid-cubes: Download (.SLDASM)](../media/air-ducts/RIFTS_Duct_TypeB_Assembly.SLDASM){: .md-button :download}

*Designed for: [Fan model TBD](#) — CAD available from the manufacturer.*

### Fan Mount

[:fontawesome-solid-file-import: Download (.SLDPRT)](../media/air-ducts/RIFTS_Duct_TypeB_Fan_Mount.SLDPRT){: .md-button :download}
[:fontawesome-solid-file-import: Download (.STEP)](../media/air-ducts/RIFTS_Duct_TypeB_Fan_Mount.STEP){: .md-button :download}

### Airflow Duct

[:fontawesome-solid-file-import: Download (.SLDPRT)](../media/air-ducts/RIFTS_Duct_TypeB_Airflow_Duct.SLDPRT){: .md-button :download}
[:fontawesome-solid-file-import: Download (.STEP)](../media/air-ducts/RIFTS_Duct_TypeB_Airflow_Duct.STEP){: .md-button :download}

---

### Notes

- The **.SLDASM** files are the full assembled duct models, combining both components, and also require SolidWorks to open.
- The **.SLDPRT** files are native SolidWorks part files and require SolidWorks to open.
- The **.STEP** files are neutral-format exports compatible with most CAD software, recommended if you don't have access to SolidWorks.