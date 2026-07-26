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

![Corner Pad Render](../../images/accessories/corner_pad_render_01.jpg){: class="stack-item" style="--tx:0px; --htx:0px; --rot:-4deg; --z:5;" data-gallery="corner-pad-renders" }

</div>

*Only one render currently — pile will fan out properly once more are added.*

<!-- Add more render images here as they're produced, e.g.:
![Corner Pad Render 2](../../images/accessories/corner_pad_render_02.jpg){: class="stack-item" style="--tx:14px; --htx:60px; --rot:3deg; --z:4;" data-gallery="corner-pad-renders" }
-->

---

## Corner Numbering Diagram

![Corner Numbering Diagram](../../images/accessories/corner_pad_numbering_diagram.jpg)

*SolidWorks drawing labeling enclosure corners 1–4, showing which corner each pad is designed for.*

<!-- TODO: replace with actual drawing filename once exported/uploaded to docs/images/accessories/ -->

---

## Installed by Corner

<div class="photo-stack" markdown>

![Corner 1 Installed](../../images/accessories/corner_pad_1_installed.jpg){: class="stack-item" style="--tx:0px; --htx:0px; --rot:-4deg; --z:5;" data-gallery="installed-by-corner" }

![Corner 2 Installed](../../images/accessories/corner_pad_2_installed.jpg){: class="stack-item" style="--tx:14px; --htx:60px; --rot:3deg; --z:4;" data-gallery="installed-by-corner" }

![Corner 3 Installed](../../images/accessories/corner_pad_3_installed.jpg){: class="stack-item" style="--tx:28px; --htx:120px; --rot:-3deg; --z:3;" data-gallery="installed-by-corner" }

![Corner 4 Installed](../../images/accessories/corner_pad_4_installed.jpg){: class="stack-item" style="--tx:42px; --htx:180px; --rot:4deg; --z:2;" data-gallery="installed-by-corner" }

</div>

*Each pad installed on its corresponding corner — cross-reference with the numbering diagram above to identify which pad goes where.*

<!-- TODO: replace with actual photo filenames once uploaded to docs/images/accessories/ -->

---

## Installed Assembly

<div class="photo-stack" markdown>

![Installed Corner Pad](../../images/accessories/corner_pads_installed.jpg){: class="stack-item" style="--tx:0px; --htx:0px; --rot:-4deg; --z:5;" data-gallery="installed" }

![Corner Pad CAD](../../images/accessories/corner_pad_CAD.jpg){: class="stack-item" style="--tx:14px; --htx:60px; --rot:3deg; --z:4;" data-gallery="installed" }

</div>

*Completed corner pad assemblies installed on the RFSoC 4x2 enclosure, alongside a representative CAD model of a corner pad assembly.*

---

## Assembly & Installation Videos

### Section Assembly

<video controls style="width:100%; max-width:640px; border-radius:8px;">
  <source src="../../media/corner-pads/RIFTS_CornerPad_Section_Assembly.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*SolidWorks walkthrough showing how the four TPU sections and rigid inserts assemble into one complete corner pad.*

<!-- TODO: replace with actual video filename once exported/uploaded to docs/media/corner-pads/ -->

### Mounting to Enclosure

<video controls style="width:100%; max-width:640px; border-radius:8px;">
  <source src="../../media/corner-pads/RIFTS_CornerPad_Enclosure_Mounting.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*SolidWorks walkthrough showing how a completed corner pad assembly mounts to the RFSoC 4x2 enclosure. Not applicable to the ZCU216 enclosure, which does not use this corner pad system.*

<!-- TODO: replace with actual video filename once exported/uploaded to docs/media/corner-pads/ -->