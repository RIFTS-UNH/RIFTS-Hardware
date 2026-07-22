# OmniLOG PRO 1030 N Antenna Mount Bill of Materials

## Overview

This document provides the bill of materials required to assemble the OmniLOG PRO 1030 N Antenna Mount System.

The assembly consists of three primary FDM printed components, commercial sealing hardware, stainless steel fasteners, and ground mounting hardware.

Quantities listed represent the requirements for one complete antenna mount assembly.

---

# Assembly BOM

| Item                              | Quantity | Description                              | Notes                                                               |
| --------------------------------- | -------- | ---------------------------------------- | ------------------------------------------------------------------- |
| Top Lid                           | 1        | FDM printed component                    | Provides antenna mounting interface and O-ring sealing surface      |
| Cylindrical Housing               | 1        | FDM printed component                    | Houses antenna electronic stem and provides environmental enclosure |
| Ground Mounting Mast              | 1        | FDM printed component                    | Provides ground stake interface and structural support              |
| Nitrile Rubber O-ring             | 1        | 50 mm × 3.5 mm (ID × CS)                 | Commercially sourced sealing element                                |
| M16L Waterproof Cable Gland       | 1        | Waterproof cable entry fitting           | Provides sealed cable routing through enclosure                     |
| M5 Stainless Steel Machine Screws | 6        | Minimum 25 mm length                     | Secures top lid to cylindrical housing                              |
| M5 Stainless Steel Washers        | 6        | Flat washers                             | Used with lid fasteners                                             |
| M5 Stainless Steel Nuts           | 6        | Threaded nuts                            | Used with lid fasteners                                             |
| M5 Brass Heat-set Inserts         | 2        | Minimum 6 mm length recommended          | Installed in mounting mast for housing attachment                   |
| Ground Stakes                     | 2        | Approximately 16 inch length recommended | Used for field deployment anchoring                                 |
| Ground Stake Washers              | 2        | Load distribution washers                | Reduces localized compressive loading                               |

---

# Sealing System

The environmental seal is achieved through two primary sealing components.

## Lid Seal

The interface between the top lid and cylindrical housing uses:

* One 50 mm × 3.5 mm (ID × CS) nitrile rubber O-ring
* Molykote 111 silicone grease applied lightly to sealing surfaces
* Six stainless steel M5 fasteners

The O-ring provides the primary environmental barrier between the lid and cylindrical housing.

Only a very light coating of silicone grease is required. Excess grease should be avoided, as the purpose of the grease is to improve seating and sealing performance rather than fill the O-ring groove.

---

## Cable Entry Seal

Cable routing is provided through:

* One M16L waterproof cable gland

The cable gland prevents water and debris ingress through the lower enclosure interface while allowing antenna cabling to exit the sealed chamber.

The internal locking nut of the cable gland must be tightened from inside the cylindrical housing interface.

A long socket wrench or sufficiently narrow access tool may be required due to the confined geometry.

---

# Heat-set Insert Installation

The two M5 brass heat-set inserts used in the mounting mast are installed after printing.

Recommended installation procedure:

1. Heat a soldering iron to approximately **230 °C**.
2. Orient the brass heat-set insert so that the **serrated face is facing outward from the printed part** (toward the ceiling during installation), with the smooth face entering the printed hole first. The serrated face should **not** be pointed down into the hole.
3. Carefully press the heat-set insert into the prepared hole while applying controlled downward pressure.
4. Allow the surrounding plastic to cool and solidify around the insert before applying mechanical load.

Proper insert orientation is important. Installing the insert upside down may reduce mechanical retention because the serrated surface is intended to embed into the surrounding plastic and resist pull-out forces.

A heat-set insert press attachment designed to work with a soldering iron can improve alignment and consistency.

One suitable commercially available option:

**Heat Set Insert Press Attachment for Soldering Iron**

Source:
https://www.amazon.com/Vertical-Machine-Heat-Insertion-Threaded-Components/dp/B0DHKPHKJZ

---

# Fastener Notes

## Lid Fasteners

The top lid is secured to the cylindrical housing using:

* Six M5 stainless steel machine screws
* Six M5 stainless steel washers
* Six M5 stainless steel nuts

A minimum screw length of 25 mm is recommended to provide sufficient engagement through the lid and housing interface.

Fasteners should be tightened in a star pattern to apply even compression across the O-ring seal.

---

## Mast Inserts

The cylindrical housing attaches to the ground mounting mast through:

* Two M5 brass heat-set inserts

The inserts are installed into the printed mast component.

A minimum insert length of approximately 6 mm is recommended; however, insert length has not been found to be a critical design parameter provided sufficient engagement is achieved.

---

# Printed Components

## Prototype Materials

During development, printed components were manufactured using:

| Material        | Purpose                       |
| --------------- | ----------------------------- |
| Bambu PLA Basic | Initial geometry verification |
| Bambu ABS       | Field evaluation prototypes   |

---

## Planned Production Material

The final production design is intended to use:

| Material | Purpose                                                 |
| -------- | ------------------------------------------------------- |
| ASA-CF   | Improved UV resistance and long-term outdoor durability |

---

# Commercial Sources

## Cable Gland

Commercial cable gland:

**QILIPSU M16L Waterproof Cable Gland**

Source:
https://www.amazon.com/QILIPSU-Thread-Waterproof-Through-Connector/dp/B0F99JGRYY

---

## Heat-set Insert Press

Commercial heat-set insert press attachment:

**Vertical Heat Insert Press Attachment for Soldering Iron**

Source:
https://www.amazon.com/Vertical-Machine-Heat-Insertion-Threaded-Components/dp/B0DHKPHKJZ

---

# Assembly Procedure

The recommended assembly sequence is:

## 1. Install O-ring

Lightly coat the 50 mm × 3.5 mm nitrile rubber O-ring with Molykote 111 silicone grease.

Install the O-ring into the sealing groove located on the top lid.

Only a minimal amount of grease is required.

---

## 2. Install Antenna

Secure the antenna to the top lid using the retaining hardware supplied with the antenna.

The antenna should be fully secured before continuing assembly.

---

## 3. Install Cable Gland

Install the M16L cable gland into the cylindrical housing.

Using a long socket wrench or narrow access tool, tighten the internal locking nut of the cable gland from inside the cylindrical housing.

---

## 4. Route Antenna Cable

Route the cable from the neighboring electronics enclosure through the cable gland and into the cylindrical housing.

The cable should exit through the top of the cylindrical housing and connect to the base of the antenna stem.

---

## 5. Seal Top Lid to Housing

Once the antenna and cable routing are secured, join the top lid and cylindrical housing using the six M5 fasteners.

Tighten the nuts in a star pattern to ensure even compression of the O-ring and consistent sealing pressure.

---

## 6. Install Ground Mast

Mount the ground mast at the desired deployment location using the ground stakes before attaching the antenna housing assembly.

This allows the mast to be secured without handling the completed antenna assembly.

---

## 7. Attach Housing Assembly

Attach the completed top lid and cylindrical housing assembly to the mast using the two additional M5 mounting screws installed into the mast heat-set inserts.

The antenna mount is now ready for deployment.

---

# Related Documentation

Additional manufacturing information:

* [Print Settings](Print_Settings.md)
* [Antenna Mount README](../README.md)
