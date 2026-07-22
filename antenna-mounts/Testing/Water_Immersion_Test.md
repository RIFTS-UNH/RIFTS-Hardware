# Water Immersion Test Fixture

![Water Tower Assembly](Images/full_assembly.jpg)

## Overview

The Water Immersion Test Fixture was developed to evaluate the environmental sealing performance of the OmniLOG PRO 1030 N Antenna Mount System.

The fixture provides a simple, low-cost method of performing repeatable immersion testing using commercially available PVC pipe and a custom-designed 3D printed support structure.

Although originally developed to validate the antenna mount enclosure, the fixture may also be used for future waterproofing evaluations of other laboratory hardware.

---

# Test Objective

The primary objective of this test was to evaluate the effectiveness of the antenna mount sealing system.

Specifically, the test was intended to verify the performance of:

- 50 mm × 3.5 mm nitrile rubber O-ring
- M16L waterproof cable gland
- Overall enclosure sealing strategy

The testing demonstrated water resistance consistent with an IPX7-style immersion test.

Formal IP certification was **not** performed.

---

# Test Fixture

The immersion fixture consists of:

| Component | Description |
|-----------|-------------|
| PVC Pipe | 5 inch diameter PVC pipe |
| Water Column | Approximately 1 meter tall |
| End Cap | Standard PVC end cap |
| Base | Custom PLA printed support structure |

The custom printed base supports the PVC column during filling and testing while reducing the likelihood of accidental tipping.

---

# Design Rationale

Commercial waterproof testing equipment was not available during development.

Instead, a simple immersion fixture was designed that could:

- be manufactured inexpensively
- use commercially available PVC components
- support repeatable testing
- be easily reproduced by future lab members

The resulting fixture provides a practical solution requiring only a single custom printed component.

---

# Test Procedure

The antenna mount assembly was prepared according to the standard assembly procedure.

Testing consisted of:

1. Installing the antenna mount sealing components.
2. Filling the PVC water column.
3. Submerging the antenna mount within the column.
4. Maintaining immersion for the duration of the evaluation.
5. Inspecting the enclosure interior for evidence of water ingress.

---

# Results

The antenna mount successfully demonstrated water resistance throughout testing.

No significant water ingress into the sealed electronics chamber was observed.

The sealing system consisting of the nitrile rubber O-ring and M16L cable gland performed as intended.

---

# Limitations

This evaluation represents an engineering validation test rather than a formal certification.

The following should be noted:

- Formal IP certification was not performed.
- Dust ingress testing was not conducted.
- Pressure testing beyond the 1 meter water column was not performed.
- The PVC test fixture itself exhibits minor leakage after several hours of operation.

The leakage originates from the fixture rather than the antenna mount under test and does not significantly affect the usefulness of the evaluation.

---

# Lessons Learned

Several observations were made during development.

- Commercial nitrile O-rings provided significantly more consistent sealing performance than earlier TPU printed O-rings.
- A light coating of Molykote 111 silicone grease improved O-ring seating without requiring excessive lubricant.
- The simple PVC fixture provided an effective and inexpensive alternative to specialized waterproof testing equipment.

---

# Gallery

## Complete Test Fixture

![Complete Assembly](Images/full_assembly.jpg)

Complete water immersion test fixture.

---

## Water Surface

![Water Surface](Images/surface_of_water_view.jpg)

Water column during immersion testing.

---

## Test Fixture Base

![Fixture Base](Images/base.jpg)

Custom PLA printed support structure.

---

## Antenna Mount During Testing

![Immersion Test](Images/immersion_test.jpg)

Antenna mount undergoing immersion testing.

---

## CAD Model

![CAD](Images/CAD.jpg)

CAD model of the complete water immersion fixture.

---

# Available Files

## Native CAD

- [Water_Tower_Assembly.SLDASM](CAD/SLDASM/Water_Tower_Assembly.SLDASM)
- [5in_PVC.SLDPRT](CAD/SLDPRT/5in_PVC.SLDPRT)
- [water_column_base.SLDPRT](CAD/SLDPRT/water_column_base.SLDPRT)

---

## STEP

- [Water_Tower_Assembly.STEP](CAD/STEP/Water_Tower_Assembly.STEP)
- [5in_PVC.STEP](CAD/STEP/5in_PVC.STEP)
- [water_column_base.STEP](CAD/STEP/water_column_base.STEP)

---

## Manufacturing

- [water_column_base.STL](Manufacturing/STL/water_column_base.STL)
- [water_column_base.3mf](Manufacturing/Bambu_Studio/water_column_base.3mf)

---

# Future Improvements

Potential future enhancements include:

- Integrated drain valve
- Improved leak resistance at PVC joints
- Graduated depth markings on the water column
- Dedicated fixture for automated leak testing

---

---

# Lessons Learned

Development of the Water Immersion Test Fixture yielded several practical observations that informed the final antenna mount design.

* Commercial nitrile rubber O-rings provided significantly more consistent sealing performance than earlier TPU printed O-rings.
* Applying only a light coating of Molykote 111 silicone grease improved O-ring seating while avoiding unnecessary lubricant buildup.
* A simple PVC-based immersion fixture proved to be an effective and inexpensive alternative to specialized waterproof testing equipment.
* Designing the fixture around commonly available hardware minimized cost while making future reproduction straightforward.

---

# Engineering Notes

The Water Immersion Test Fixture was developed as a practical engineering validation tool rather than a standardized testing apparatus.

Several observations made during development may be helpful for future users.

## Fixture Stability

The custom PLA support base provides adequate stability for normal operation; however, the fixture should always be placed on a flat, level surface before filling.

Once filled, the water column becomes significantly heavier and should not be moved.

---

## Fixture Leakage

Minor leakage may develop from the PVC water column after several hours.

This leakage originates from the test fixture itself rather than the antenna mount being evaluated.

For extended tests, placing a towel or shallow catch pan beneath the fixture is recommended.

---

## Test Repeatability

For consistent results, inspect the following before each test:

* O-ring condition
* O-ring cleanliness
* Cable gland tightness
* Fastener tightness
* Proper seating of all sealing surfaces

The antenna mount should always be assembled using the documented tightening sequence to ensure uniform compression of the O-ring.

---

## Fixture Reproducibility

The fixture was intentionally designed around standard 5-inch PVC components that can be sourced from most hardware stores.

Only the support base requires custom fabrication, allowing damaged or worn components to be replaced individually without reproducing the entire fixture.

---

# Future Work

Although the fixture successfully met its design objectives, several improvements could further increase its utility.

Potential future enhancements include:

* Permanent depth markings on the PVC water column
* Improved sealing of the PVC fixture itself to eliminate long-duration leakage
* Integrated drain valve for easier filling and emptying
* Transparent water column for improved visual observation during testing
* Pressure instrumentation for quantitative leak testing
* Longer-duration immersion testing
* Formal dust ingress testing to complement the water resistance evaluation
* Testing of future antenna mount revisions manufactured from ASA-CF

---

# Repository Philosophy

This fixture is included in the repository not only to document the validation of the antenna mount, but also to preserve the engineering process that produced it.

Future researchers are encouraged to document design changes, manufacturing improvements, validation results, and lessons learned alongside any new hardware revisions.

The long-term goal of this repository is to serve as a living engineering archive that captures not only the final designs, but also the reasoning, testing, and practical experience behind them.

---

# Related Documentation

* [OmniLOG PRO 1030 N Antenna Mount](../../README.md)
* [Print Settings](../../Manufacturing/Print_Settings.md)
* [Bill of Materials](../../Manufacturing/BOM.md)