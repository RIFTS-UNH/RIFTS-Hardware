# Gallery

Click any photo below to open it full-size. Use the arrow keys or on-screen arrows to page through the rest of that section without returning to this page.

!!! note "Highly editable"
    This page is a starting scaffold — add, remove, or re-group images freely as photos come in. Each image needs:

    - `class="stack-item"` — required for the stacked layout
    - `style="--tx:Npx; --htx:Mpx; --rot:Xdeg; --z:Y;"` — collapsed offset, hover (fanned-out) offset, rotation, and stacking order
    - `data-gallery="group-name"` — images sharing a group name page through together in the click-through viewer

    To add a 2nd+ photo to a stack, just increase `--tx`/`--htx`/decrease `--z` following the same pattern as the one below.

---

## HD Renders

<div class="photo-stack" markdown>

![Corner Pad Render](rfsoc-4x2-corner-pads/Images/corner_pad_render_01.jpg){: class="stack-item" style="--tx:0px; --htx:0px; --rot:-4deg; --z:5;" data-gallery="corner-pad-renders" }

</div>

*Only one render currently — pile will fan out properly once more are added.*

<!-- Add more render images here as they're produced, e.g.:
![Corner Pad Render 2](rfsoc-4x2-corner-pads/Images/corner_pad_render_02.jpg){: class="stack-item" style="--tx:14px; --htx:60px; --rot:3deg; --z:4;" data-gallery="corner-pad-renders" }
-->

---

## Corner Numbering Diagram

![Corner Numbering Diagram](/hardware/tpu-pads/rfsoc-4x2-corner-pads/Corner_Pad_Number_Guide.JPG)

*SolidWorks drawing labeling enclosure corners 1–4, showing which corner each pad is designed for.*

<!-- TODO: confirm final filename once uploaded to docs/.../rfsoc-4x2-corner-pads/Images/ -->

---

## Installed by Corner

<div class="photo-stack" markdown>

![Corner 1 Installed](rfsoc-4x2-corner-pads/Images/corner_pad_1_installed.jpg){: class="stack-item" style="--tx:0px; --htx:0px; --rot:-4deg; --z:5;" data-gallery="installed-by-corner" }

![Corner 2 Installed](rfsoc-4x2-corner-pads/Images/corner_pad_2_installed.jpg){: class="stack-item" style="--tx:14px; --htx:60px; --rot:3deg; --z:4;" data-gallery="installed-by-corner" }

![Corner 3 Installed](rfsoc-4x2-corner-pads/Images/corner_pad_3_installed.jpg){: class="stack-item" style="--tx:28px; --htx:120px; --rot:-3deg; --z:3;" data-gallery="installed-by-corner" }

![Corner 4 Installed](rfsoc-4x2-corner-pads/Images/corner_pad_4_installed.jpg){: class="stack-item" style="--tx:42px; --htx:180px; --rot:4deg; --z:2;" data-gallery="installed-by-corner" }

</div>

*Each pad installed on its corresponding corner — cross-reference with the numbering diagram above to identify which pad goes where.*

<!-- TODO: replace with actual photo filenames once uploaded -->

---

## Installed Assembly

<div class="photo-stack" markdown>

![Installed Corner Pad](rfsoc-4x2-corner-pads/Images/corner_pads_installed.jpg){: class="stack-item" style="--tx:0px; --htx:0px; --rot:-4deg; --z:5;" data-gallery="installed" }

![Corner Pad CAD](rfsoc-4x2-corner-pads/Images/corner_pad_CAD.jpg){: class="stack-item" style="--tx:14px; --htx:60px; --rot:3deg; --z:4;" data-gallery="installed" }

</div>

*Completed corner pad assemblies installed on the RFSoC 4x2 enclosure, alongside a representative CAD model of a corner pad assembly.*

---

## Assembly & Installation Videos

!!! note
    Both tutorials below were recorded using Corner Pad 4 — since all four pads assemble and install identically, the procedure shown applies equally regardless of which pad you're working with.

### Assembly Tutorial

<video controls style="width:100%; max-width:640px; border-radius:8px;">
  <source src="/hardware/tpu-pads/rfsoc-4x2-corner-pads/RIFTS_Corner_Pad_4_Assembly_Tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*SolidWorks walkthrough showing how the four TPU sections and rigid inserts assemble into one complete corner pad (shown using Corner Pad 4).*

<!-- TODO: confirm final filename once uploaded -->

### Installation Tutorial

<video controls style="width:100%; max-width:640px; border-radius:8px;">
  <source src="/hardware/tpu-pads/rfsoc-4x2-corner-pads/Corner_Pad_Installation_Tutorial.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*SolidWorks walkthrough showing how a completed corner pad assembly mounts to the RFSoC 4x2 enclosure (shown using Corner Pad 4). Not applicable to the ZCU216 enclosure, which does not use this corner pad system.*

<!-- TODO: confirm final filename once uploaded -->