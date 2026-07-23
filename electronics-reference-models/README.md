# Electronics Reference Models

---

# Overview

This archive contains mechanical CAD models of electronic hardware used throughout the RIFTS hardware development effort.

These models were collected, converted, or created to support mechanical design activities including:

- Enclosure development
- Board integration
- Mounting design
- Connector clearance verification
- Internal packaging studies

The models vary in level of detail depending on their intended purpose.

Some models provide complete mechanical representations of the hardware, while others provide only mechanically relevant board geometry such as PCB outlines and mounting interfaces.

All models in this archive are provided as native **SolidWorks (`.SLDPRT`) files**.

---

# Available Models

| Hardware | Source | Model Detail | Intended Use |
|---|---|---|---|
| AMD Xilinx ZCU216 RFSoC Development Board | Third-party PCB CAD service | Full mechanical model | ZCU216 enclosure development |
| AMD Xilinx RFSoC 4x2 Development Board | AMD-provided CAD model | Full and simplified mechanical models | RFSoC 4x2 enclosure development |
| MIT Haystack RF Interface Board | MIT Haystack Observatory | Full and simplified mechanical models | ZCU216 enclosure integration |
| SparkFun ZED-F9T GNSS Timing Breakout | Converted from Eagle files | PCB footprint model | Mechanical integration |
| SparkFun ESP32 WROOM Thing Plus | Converted from Eagle files | PCB footprint model | Mechanical integration |

---

# CAD Model Detail

## Full Models

Full models preserve the available mechanical geometry of the hardware.

These models are intended for:

- Detailed integration studies
- Connector clearance evaluation
- Interface verification

---

## Simplified Models

Simplified models were created where necessary to improve SolidWorks performance during mechanical design.

Simplified models remove unnecessary geometry while preserving mechanically relevant features including:

- PCB outline
- Mounting locations
- Connector locations
- Overall board envelope

These models are recommended for routine enclosure and mechanical design work.

---

# AMD Xilinx ZCU216 RFSoC Development Board

## Source

The ZCU216 CAD model was purchased from a third-party service specializing in creating mechanical CAD representations of electronic hardware.

The model cost approximately **$30**.

## Model

Included:

- `AMD_Xilinx_ZCU216_Board.SLDPRT`

## Intended Use

The ZCU216 model was used during development of the ZCU216 rack-mounted enclosure.

The model supported:

- Enclosure layout
- Standoff placement
- Connector clearance verification
- Internal packaging studies

---

# AMD Xilinx RFSoC 4x2 Development Board

## Source

The RFSoC 4x2 CAD model was provided directly by an AMD representative through email communication.

The model was provided at no cost.

## Models

Included:

- `AMD_Xilinx_RFSoC_4x2_Board.SLDPRT`
- `AMD_Xilinx_RFSoC_4x2_Board_Simplified.SLDPRT`

## Intended Use

The RFSoC 4x2 models supported development of the portable RFSoC 4x2 enclosure.

The models were used for:

- Board placement studies
- Connector accessibility evaluation
- Internal packaging design
- Thermal management integration

---

# MIT Haystack RF Interface Board

## Source

The RF Interface Board CAD model was provided by a member of the RIFTS collaboration team at MIT Haystack Observatory.

## Models

Included:

- `MIT_Haystack_RF_Interface_Board.SLDPRT`
- `MIT_Haystack_RF_Interface_Board_Simplified.SLDPRT`

## Simplified Model

The simplified model was created specifically for mechanical integration purposes.

Unnecessary bodies and geometry were removed to improve CAD performance while preserving important mechanical features.

## Intended Use

The RF Interface Board models were used during development of the ZCU216 enclosure.

The models supported:

- Board placement
- Mounting interface design
- Connector accessibility evaluation
- Internal enclosure layout

---

# SparkFun ZED-F9T GNSS Timing Breakout

## Source

The original SparkFun board design files were obtained in Autodesk Eagle format.

The files were converted into SolidWorks-compatible mechanical models.

## Model

Included:

- `SparkFun_ZED-F9T.SLDPRT`

## Model Detail

The model represents:

- PCB outline
- Mounting/interface geometry

Component-level geometry is not included.

## Intended Use

The model is intended for:

- Mechanical packaging
- Mounting design
- Interface verification

---

# SparkFun ESP32 WROOM Thing Plus

## Source

The original SparkFun board design files were obtained in Autodesk Eagle format.

The files were converted into SolidWorks-compatible mechanical models.

## Model

Included:

- `SparkFun_ESP32_WROOM.SLDPRT`

## Model Detail

The model represents:

- PCB outline
- Mounting/interface geometry

Component-level geometry is not included.

## Intended Use

The model is intended for:

- Mechanical packaging
- Mounting design
- Interface verification

---

# File Organization

```text
Electronics_Reference_Models/

├── ZCU216/
│   └── AMD_Xilinx_ZCU216_Board.SLDPRT
│
├── RFSoC_4x2/
│   ├── AMD_Xilinx_RFSoC_4x2_Board.SLDPRT
│   └── AMD_Xilinx_RFSoC_4x2_Board_Simplified.SLDPRT
│
├── RF_Interface_Board/
│   ├── MIT_Haystack_RF_Interface_Board.SLDPRT
│   └── MIT_Haystack_RF_Interface_Board_Simplified.SLDPRT
│
├── SparkFun_ZED-F9T/
│   └── SparkFun_ZED-F9T.SLDPRT
│
└── SparkFun_ESP32_WROOM/
    └── SparkFun_ESP32_WROOM.SLDPRT
```

---

# Engineering Notes

These models were created and collected primarily for mechanical integration.

Unless explicitly stated otherwise:

- Models should not be considered electrically accurate.
- Component-level geometry may be omitted.
- Dimensions should be verified against manufacturer documentation before fabrication.

The simplified models are intended to improve CAD performance and should be preferred for routine mechanical design.

---

# Credits

Reference models were obtained from:

- AMD
- MIT Haystack Observatory
- SparkFun Electronics
- Third-party PCB CAD modeling service

Mechanical model conversion, simplification, and organization:

**Joshua D'Addario**