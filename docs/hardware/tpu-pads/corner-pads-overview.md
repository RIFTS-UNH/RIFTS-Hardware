# RFSoC 4x2 TPU Corner Pad System

## Project Summary

| | |
|---|---|
| **Project** | RFSoC 4x2 TPU Corner Pad System |
| **Purpose** | Protective corner assemblies for portable enclosure handling and transportation |
| **Associated Platform** | RFSoC 4x2 Portable Field Enclosure |
| **Manufacturing Method** | FDM Additive Manufacturing |
| **Primary Material** | TPU |
| **Rigid Insert Material** | PLA Prototype / PETG Recommended |
| **Threaded Hardware** | M3 Brass Heat-Set Inserts |
| **Printer** | Bambu Lab A1 |
| **Status** | Complete |

---

## HD Renders

<div class="render-scroll" markdown>

![Corner Pad 1 Render](media/Corner_Pad_1.png){: data-gallery="corner-pad-renders" }

![Corner Pad 2 Render](media/Corner_Pad_2.png){: data-gallery="corner-pad-renders" }

![Corner Pad 3 Render](media/Corner_Pad_3.png){: data-gallery="corner-pad-renders" }

![Corner Pad 4 Render](media/Corner_Pad_4.png){: data-gallery="corner-pad-renders" }

</div>

*Renders are shown in order from Corner Pad 1 to Corner Pad 4, left to right.*

<!-- Add more renders by appending additional image lines above, same pattern. -->

---

## Overview

The RFSoC 4x2 TPU Corner Pad System was developed specifically for the portable RIFTS RFSoC 4x2 enclosure to improve durability during transportation, handling, and field deployment.

Unlike the laboratory-oriented ZCU216 enclosure, the RFSoC 4x2 platform was designed for repeated transportation and operation outside of a controlled laboratory environment. The corner pad assemblies provide mechanical protection for the aluminum enclosure.

This system was developed exclusively for the RFSoC 4x2 portable enclosure — these assemblies are not used on the ZCU216 enclosure platform.

---

## Design Overview

Each enclosure corner uses a **unique corner pad assembly** designed to accommodate the specific labeling of that corner. The complete system consists of four separate corner assemblies, each built from four TPU sections.

Each assembly contains:

- Four TPU body sections.
- Ten custom rigid insert components.
- Ten M3 brass heat-set threaded inserts.
- Eight M3 x 10 mm countersunk machine screws.
- Two M3 x 16 mm countersunk machine screws.

The rigid insert components are glued into dedicated pockets within the TPU sections. Because TPU is flexible and does not provide an ideal material for directly installing heat-set inserts, rigid printed inserts were incorporated to provide a more reliable threaded interface. The heat-set inserts are installed into the rigid insert components, allowing the TPU sections to be mechanically fastened together into a complete three-dimensional corner pad assembly — a modular construction that allows damaged sections to be replaced individually rather than requiring replacement of an entire corner assembly.

The corner pad assemblies were developed to:

- Protect enclosure corners during transportation and handling.
- Reduce impact forces transferred to the aluminum enclosure.
- Provide a high-friction interface between the enclosure and supporting surfaces.
- Improve long-term durability of the portable hardware platform.

### Material Selection

The protective corner sections were manufactured using Thermoplastic Polyurethane (TPU), selected for high impact resistance, flexibility under loading, abrasion resistance, high surface friction, and the ability to absorb mechanical shocks. Compared with rigid thermoplastics, TPU provides improved energy absorption and reduces the likelihood of transmitting impact forces directly into the aluminum enclosure.

The rigid insert components were originally manufactured using PLA to support rapid prototyping and design iteration. For future manufacturing, **PETG is recommended** because it provides improved toughness, increased impact resistance, better elevated-temperature performance, and reduced brittleness during repeated assembly.

### Heat-Set Insert Installation

The M3 brass heat-set inserts are installed into the rigid printed insert components. Recommended installation procedure:

1. Heat a soldering iron to approximately **230°C - 250°C**.
2. Use a heat-set insert press attachment designed for soldering irons to maintain alignment during installation.
3. Insert the brass threaded insert into the prepared hole.
4. Ensure the **serrated face of the heat-set insert faces outward toward the opening of the hole** — the serrated surface should face upward/outward, not into the printed insert.
5. Apply heat and gently press the insert into position until fully seated.

A suitable heat-set insert press attachment can be purchased commercially: [amazon.com](https://www.amazon.com/Vertical-Machine-Heat-Insertion-Threaded-Components/dp/B0DHKPHKJZ)

### Design Features

The completed corner pad assemblies provide full enclosure corner protection, replaceable modular construction, flexible impact absorption, increased friction against supporting surfaces, and lightweight construction. The modular design allows individual TPU sections or rigid inserts to be replaced without recreating the entire assembly.

### Assembly Tutorial

<video controls style="width:100%; max-width:640px; border-radius:8px;">
  <source src="/hardware/tpu-pads/rfsoc-4x2-corner-pads/RIFTS_Corner_Pad_1_Assembly_Tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*SolidWorks walkthrough showing how the four TPU sections and rigid inserts assemble into one complete corner pad (shown using Corner Pad 1).*

### Installation Tutorial

<video controls style="width:100%; max-width:640px; border-radius:8px;">
  <source src="/hardware/tpu-pads/rfsoc-4x2-corner-pads/Corner_Pad_Installation_Tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*SolidWorks walkthrough showing how a completed corner pad assembly mounts to the RFSoC 4x2 enclosure (shown using Corner Pad 4). Not applicable to the ZCU216 enclosure, which does not use this corner pad system.*

!!! note
    Since all four pads assemble and install identically, both procedures shown apply equally regardless of which pad you're working with.

### Corner Numbering Diagram

![Corner Numbering Diagram](/hardware/tpu-pads/rfsoc-4x2-corner-pads/Corner_Pad_Number_Guide.JPG)

*SolidWorks drawing labeling enclosure corners 1–4, showing which corner each pad is designed for.*

### Installed Assembly

<video controls style="width:100%; max-width:640px; border-radius:8px;">
  <source src="/hardware/tpu-pads/rfsoc-4x2-corner-pads/Corner_Pads_Rotate_View.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*SolidWorks rotating view showing all four corner pads installed on the RFSoC 4x2 enclosure — cross-reference with the numbering diagram above to identify which pad goes where.*

<!-- TODO: confirm final video filename once uploaded -->

---

## Downloads

Downloadable CAD and manufacturing files for all four unique corner assemblies (Section A, Section B, Section C, and Section D) and the shared rigid insert component.

!!! note
    Each bundle below packages that pad's four sections together with the rigid insert files in the matching format, so you only need to grab one zip per format instead of downloading each part individually. The **SolidWorks Bundle** includes the `.SLDASM` full assembly file alongside the individual `.SLDPRT` parts — no separate assembly download needed. The **Print Bundle** likewise includes the `.3mf` for all four sections plus the rigid insert's `.3mf`.

<div class="download-cards cols-2" markdown>

<div class="download-card" markdown>
<span class="card-icon">:fontawesome-solid-cubes:</span>

**Corner Pad 1**

[:fontawesome-solid-draw-polygon: SLDPRT](rfsoc-4x2-corner-pads/Corner_Pad_1/RIFTS_CornerPad_1_SLDPRT_Bundle.zip){: .card-action title="SolidWorks Bundle (.zip) — includes .SLDASM" }
[:fontawesome-solid-diagram-project: STEP](rfsoc-4x2-corner-pads/Corner_Pad_1/RIFTS_CornerPad_1_STEP_Bundle.zip){: .card-action title="Neutral Bundle (.zip)" }
[:fontawesome-solid-cube: STL](rfsoc-4x2-corner-pads/Corner_Pad_1/RIFTS_CornerPad_1_STL_Bundle.zip){: .card-action title="Print-Ready Bundle (.zip)" }
[:fontawesome-solid-print: 3MF](rfsoc-4x2-corner-pads/Corner_Pad_1/RIFTS_CornerPad_1_Print_Bundle.zip){: .card-action title="Bambu Studio Print Bundle (.zip)" }
{: .card-actions-row }

</div>

<div class="download-card" markdown>
<span class="card-icon">:fontawesome-solid-cubes:</span>

**Corner Pad 2**

[:fontawesome-solid-draw-polygon: SLDPRT](rfsoc-4x2-corner-pads/Corner_Pad_2/RIFTS_CornerPad_2_SLDPRT_Bundle.zip){: .card-action title="SolidWorks Bundle (.zip) — includes .SLDASM" }
[:fontawesome-solid-diagram-project: STEP](rfsoc-4x2-corner-pads/Corner_Pad_2/RIFTS_CornerPad_2_STEP_Bundle.zip){: .card-action title="Neutral Bundle (.zip)" }
[:fontawesome-solid-cube: STL](rfsoc-4x2-corner-pads/Corner_Pad_2/RIFTS_CornerPad_2_STL_Bundle.zip){: .card-action title="Print-Ready Bundle (.zip)" }
[:fontawesome-solid-print: 3MF](rfsoc-4x2-corner-pads/Corner_Pad_2/RIFTS_CornerPad_2_Print_Bundle.zip){: .card-action title="Bambu Studio Print Bundle (.zip)" }
{: .card-actions-row }

</div>

<div class="download-card" markdown>
<span class="card-icon">:fontawesome-solid-cubes:</span>

**Corner Pad 3**

[:fontawesome-solid-draw-polygon: SLDPRT](rfsoc-4x2-corner-pads/Corner_Pad_3/RIFTS_CornerPad_3_SLDPRT_Bundle.zip){: .card-action title="SolidWorks Bundle (.zip) — includes .SLDASM" }
[:fontawesome-solid-diagram-project: STEP](rfsoc-4x2-corner-pads/Corner_Pad_3/RIFTS_CornerPad_3_STEP_Bundle.zip){: .card-action title="Neutral Bundle (.zip)" }
[:fontawesome-solid-cube: STL](rfsoc-4x2-corner-pads/Corner_Pad_3/RIFTS_CornerPad_3_STL_Bundle.zip){: .card-action title="Print-Ready Bundle (.zip)" }
[:fontawesome-solid-print: 3MF](rfsoc-4x2-corner-pads/Corner_Pad_3/RIFTS_CornerPad_3_Print_Bundle.zip){: .card-action title="Bambu Studio Print Bundle (.zip)" }
{: .card-actions-row }

</div>

<div class="download-card" markdown>
<span class="card-icon">:fontawesome-solid-cubes:</span>

**Corner Pad 4**

[:fontawesome-solid-draw-polygon: SLDPRT](rfsoc-4x2-corner-pads/Corner_Pad_4/RIFTS_CornerPad_4_SLDPRT_Bundle.zip){: .card-action title="SolidWorks Bundle (.zip) — includes .SLDASM" }
[:fontawesome-solid-diagram-project: STEP](rfsoc-4x2-corner-pads/Corner_Pad_4/RIFTS_CornerPad_4_STEP_Bundle.zip){: .card-action title="Neutral Bundle (.zip)" }
[:fontawesome-solid-cube: STL](rfsoc-4x2-corner-pads/Corner_Pad_4/RIFTS_CornerPad_4_STL_Bundle.zip){: .card-action title="Print-Ready Bundle (.zip)" }
[:fontawesome-solid-print: 3MF](rfsoc-4x2-corner-pads/Corner_Pad_4/RIFTS_CornerPad_4_Print_Bundle.zip){: .card-action title="Bambu Studio Print Bundle (.zip)" }
{: .card-actions-row }

</div>

</div>

### Additional Downloads

<div class="download-cards" markdown>

<div class="download-card" markdown>
<span class="card-icon">:fontawesome-solid-layer-group:</span>

**All Pads**

Single `.3mf` with 4 print plates, one per pad — cycle through in Bambu Studio to print the full set.

[Download](rfsoc-4x2-corner-pads/RIFTS_CornerPads_All_Print_Bundle.3mf){: .md-button :download}

</div>

<div class="download-card" markdown>
<span class="card-icon">:fontawesome-solid-file-zipper:</span>

**Rigid Insert Only**

The shared insert component alone, in every format — no need to open a full pad bundle to get it.

[Download](rfsoc-4x2-corner-pads/RIFTS_CornerPad_Rigid_Insert_Bundle.zip){: .md-button :download}

</div>

</div>

### Notes

- Each **SolidWorks Bundle** (SLDPRT) contains four `.SLDPRT` files (Sections A–D), the rigid insert `.SLDPRT`, **and the `.SLDASM` full assembly file** — everything needed to open the complete assembly is in this one zip. Requires SolidWorks to open.
- Each **Neutral Bundle** (STEP) contains the same set of parts in `.STEP` format, compatible with most CAD software — recommended if you don't have access to SolidWorks.
- Each **Print-Ready Bundle** (STL) contains print-ready mesh geometry for all four sections plus the rigid insert, for slicing in any FDM slicer.
- Each **Print Bundle** (3MF) contains the `.3mf` files for all four sections plus the rigid insert, each preserving the validated print settings and slicer profile used for production. Opening them requires Bambu Studio.
- **All Pads** is a single `.3mf` file containing four separate print plates, one per corner pad.
- **Rigid Insert Only** provides just the shared insert component on its own, in every format, without needing to open a full pad bundle to get it.

---

## Commercial Sources

- **Heat-Set Insert Press:** [amazon.com](https://www.amazon.com/Vertical-Machine-Heat-Insertion-Threaded-Components/dp/B0DHKPHKJZ)
- **M3 Brass Heat-Set Inserts:** [amazon.com](https://www.amazon.com/Yaocom-Inserts-Threaded-Printing-Components/dp/B0DG59PW2R?pd_rd_w=7Grzo&content-id=amzn1.sym.a17d2b69-5d25-4d1d-9e89-ce7360646089&pf_rd_p=a17d2b69-5d25-4d1d-9e89-ce7360646089&pf_rd_r=JZVH9V0PMGPMA1Y3VAPB&pd_rd_wg=Yz636&pd_rd_r=59a2750d-b8a0-4a42-a022-94f63fb32d20&pd_rd_i=B0DG59PW2R&ref_=pd_bap_d_grid_rp_0_3_i&th=1)
- **M3 Countersunk Machine Screws:** [amazon.com](https://www.amazon.com/Metric-Assortment-Machine-Countersunk-Washers/dp/B0GFDHNDM1/ref=sr_1_3?crid=1QST9NAJ35K4S&dib=eyJ2IjoiMSJ9.WMfSNpVPhbPwghbXTCS6rzBl7bOstqUAEK_lUiiBB2qcG8SB5pssGuiF_bVL5HPGF6DscMhqWKqhYmFJ-7pZh14xnlJHJxDg293-s0geeXWlQotNxzxCL_WkbvzqhIlKZm156zMGJeWKdp9jMDY_cJ_MILRjKXfEpwgoLay6HLk5Y-asI92aJ9y2wA39RH0c0lRRRMTLOaXBq_St3REJRw5BvteZFXNtI9cZYuxJX5sTK_vMTjEr3RBBj3R045HhXhxiObC7Nuu9vnIQHEDhgyQmUhcROsJsf9PDLEnxohA.ewszYRFlFnKXF1gt-jlAGKVr7keHDw2PTjCur7JnhB8&dib_tag=se&keywords=m3%2Bcountersunk%2Bmachine%2Bscrews&qid=1785779112&s=industrial&sprefix=m3%2Bcountersunk%2Bmachine%2Bscrew%2Cindustrial%2C188&sr=1-3&th=1)

---

## Manufacturing

The corner pad assemblies were manufactured using fused deposition modeling (FDM) additive manufacturing on a Bambu Lab A1 printer.

| Component | Material | Manufacturing Method |
|---|---|---|
| TPU corner sections | TPU | FDM 3D Printing |
| Rigid insert components | PLA Prototype / PETG Recommended | FDM 3D Printing |
| Threaded inserts | Brass M3 Heat-Set Inserts | Commercial Hardware |

---

## Revision History

| Revision | Date | Description |
|---|---|---|
| Rev A | July 2026 | Initial corner pad assembly documentation and archive release. |

---

## Credits

Mechanical design and documentation: **Joshua D'Addario**