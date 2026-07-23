# Design Requirements

The enclosure was designed to satisfy the following engineering requirements:

- Provide secure mechanical integration of the AMD Xilinx RFSoC 4x2 development platform.
- Protect sensitive RF electronics during transportation and field deployment.
- Minimize electromagnetic emissions and susceptibility through conductive enclosure design.
- Provide active cooling for continuous operation.
- Maintain access to all required RFSoC interfaces.
- Support rapid deployment and transportation.
- Accommodate the project's custom RF pathway assemblies.
- Maintain a serviceable mechanical design.

---

## Design Rationale

### Portable Field Deployment

Unlike the ZCU216 enclosure, portability became a primary design objective.

Integrated carrying handles and rubber feet allow the enclosure to be transported by hand, placed securely within vehicles, and operated on uneven terrain or standard laboratory work surfaces.

### Structural Improvements

Experience gained from the ZCU216 enclosure directly influenced the mechanical construction of the RFSoC 4x2 enclosure.

The enclosure utilizes **0.064-inch 5052 aluminum**, making it the thickest enclosure developed for the RIFTS project.

The increased material thickness provides noticeably greater rigidity during transportation and handling while also contributing to improved low-frequency shielding performance.

As with the later revision of the ZCU216 enclosure, seam-welded construction further improves both structural integrity and electromagnetic shielding effectiveness.

### RFSoC 4x2 Mounting Strategy

The initial enclosure concept followed the mounting philosophy established by the ZCU216 enclosure, positioning the RFSoC development board flush against the rear enclosure wall.

During integration it became apparent that this arrangement would obstruct access to the RFSoC 4x2's JTAG/UART interface, which is located along the side of the development board.

To preserve accessibility, the board was relocated into a rear corner of the enclosure. This allowed connector cutouts to be incorporated into both the rear panel and one side panel, providing access to all required interfaces while maintaining a compact enclosure footprint.

Although this approach significantly improved connector accessibility, it also made installation of the development board onto the threaded standoffs more challenging due to the reduced working space around the board.

### Thermal Management

The RFSoC 4x2 enclosure incorporates an active cooling system consisting of two fans.

The intake fan is mounted directly to one side panel of the enclosure.

Unlike previous designs, the exhaust fan is mounted directly to the heatsink supplied with the RFSoC 4x2 development board. Heated air is drawn directly from the heatsink and exhausted through a dedicated vent located in the enclosure cover.

Additional airflow management is provided through custom FDM-printed air ducts developed specifically for the enclosure. These accessories improve airflow direction and cooling efficiency while remaining easily manufacturable using desktop additive manufacturing.

### RF Pathway Integration

Rather than utilizing the MIT Haystack RF Interface Board employed by the ZCU216 platform, the RFSoC 4x2 enclosure incorporates four analog RF pathway assemblies.

Because complete vendor CAD models were unavailable, an engineering reference model of the RF pathway was reverse engineered from available measurements and visual references.

Although not intended to represent manufacturing geometry, the model accurately captures the overall size, connector locations, and mechanical envelope required for enclosure integration.
