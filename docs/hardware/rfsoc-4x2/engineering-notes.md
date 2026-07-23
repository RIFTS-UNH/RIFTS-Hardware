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