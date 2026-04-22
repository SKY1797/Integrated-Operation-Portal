const protectionData = {
  "Boiler": {
    "Mill seal air fan": [
      { "Parameter": "BOTH PA FAN OFF", "Value": "(15 sec delay)" },
      { "Parameter": "FAN DE /NDE BRG TEMP HIGH", "Value": "> 90°C (3 sec)" },
      { "Parameter": "MOTOR DE/NDE BRG TEMP HIGH", "Value": "> 90°C (3 sec)" },
      { "Parameter": "MOTOR R/Y/B WDG TEMP HIGH (BYPASSED)", "Value": "> 124°C (3 sec)" }
    ],
    "Coal feeder": [
      { "Parameter": "FLAME SUPPORT CONDITION NOT SATISFIED", "Value": "" },
      { "Parameter": "BUNKER LEVEL LOW", "Value": "< 2 M" },
      { "Parameter": "FEEDER TEMP HIGH", "Value": "> 66°C" },
      { "Parameter": "CLASSIFIER O/L TEMP HIGH", "Value": ["> 121 °C (300 sec)", "> 126 °C (no delay)"] },
      { "Parameter": "PRIMARY AIR FLOW LOW", "Value": "<  27.5 ksc (99 tph) (2 sec)" },
      { "Parameter": "COMBUSTION AIR FLOW LOW", "Value": "< 16 ksc (30 sec)" },
      { "Parameter": "ANY BIV NOT OPEN", "Value": "" },
      { "Parameter": "ANY MDV NOT OPEN", "Value": "" },
      { "Parameter": "HAG OR CAG CLOSE (AFTER FEEDER ON)", "Value": "300 sec delay" },
      { "Parameter": "GRINDING ROLLER NOT LOWERED (ALL ROLLER > 348 mm) AND FEEDER ON AND BELT LVL HI", "Value": "500 sec delay" },
      { "Parameter": "NO COAL ON BELT", "Value": "" },
      { "Parameter": "COAL FEEDER DISCHARGE PLUGGAGE SWITCH", "Value": "" },
      { "Parameter": "MILL MOTOR NOT ON", "Value": "" },
      { "Parameter": "MFT ACTED", "Value": "" }
    ],
    "SGECW pump": [
      { "Parameter": "ECW OVERHEAD TANK LEVEL LOW", "Value": "< 400 mm (3 sec)" },
      { "Parameter": "SUCTION HEADER PRESSURE LOW", "Value": "< 2.8 ksc (3 sec)" },
      { "Parameter": "PUMP ON AND DISCHARGE PRESSURE HIGH", "Value": "> 11.5 ksc (3 sec)" },
      { "Parameter": "PUMP ON AND DISCHARGE VALVE NOT OPEN", "Value": "(60 sec delay)" },
      { "Parameter": "PUMP ON AND SUCTION VALVE CLOSE", "Value": "No delay" }
    ],
    "BRP": [
      { "Parameter": "DP BETWEEN SUCTION AND DISCHARGE", "Value": "< 4 bar (30 sec)" },
      { "Parameter": "SEPARATOR VESSEL PRESSURE", "Value": "> 149 bar (60 sec)" },
      { "Parameter": "MAIN STEAM FLOW", "Value": "> 795 TPH (60 sec)" },
      { "Parameter": "BRP SUCTION VALVE CLOSE FB", "Value": "" },
      { "Parameter": "BRP DISCHARGE VALVE CLOSE FB", "Value": "" },
      { "Parameter": "BRP MOTOR CAVITY TEMP", "Value": "> 66°C" },
      { "Parameter": "BRP DISCHARGE FLOW with RECIRCULATION V/V CLOSE", "Value": "< 116 TPH (20 sec)" },
      { "Parameter": "BRP DISCHARGE FLOW with RECIRCULATION V/V NOT OPEN", "Value": "< 116 TPH (80 sec)" },
      { "Parameter": "SEPARATOR LEVEL LOW (2/3)", "Value": "< 100 mm (5 sec)" }
    ],
    "ID fan": [
      { "Parameter": "ID FAN BRG DE/NDE TEMP HI", "Value": "> 105°C" },
      { "Parameter": "ID FAN MOTOR BRG DE/NDE TEMP HI", "Value": "> 90°C" },
      { "Parameter": "MOTOR WINDING TEMP (R/Y/B) HI", "Value": "> 124°C" },
      { "Parameter": "FAN DE/NDE BRG VIBRATION (X/Y) HI", "Value": "> 11 mm/s" },
      { "Parameter": "MOTOR DE/NDE BRG VIBRATION (X/Y) HI", "Value": "> 7.1 mm/s" },
      {
        "Parameter": "PROTECTION OFF CONDITION FOR ID FAN",
        "Value": [
          "FURNACE PR < -200mmWc",
          "OR",
          "FAN SUCTION PR. < -600mmWC",
          "OR",
          "FAN DISCHARGE PR. > 200mmWC",
          "OR",
          "BOILER CCT LEVEL > 2200 mm",
          "OR",
          "CORRESPONDING APH FG O/L TEMP > 200°C"
        ]
      },
      { "Parameter": "FD FAN STALL PROTECTION ACTED", "Value": "calculated value" }
    ],
    "PA fan": [
      { "Parameter": "PA FAN BRG DE/NDE TEMP HI", "Value": "> 105°C (3 sec)" },
      { "Parameter": "PA FAN MOTOR BRG DE/NDE TEMP HI", "Value": "> 90°C (3 sec)" },
      { "Parameter": "MOTOR WINDING TEMP (R/Y/B) HI", "Value": "> 124°C (3 sec)" },
      { "Parameter": "FAN DE/NDE BRG VIBRATION (X/Y) HI", "Value": "> 11 mm/s (2 sec)" },
      { "Parameter": "MOTOR DE/NDE BRG VIBRATION (X/Y) HI", "Value": "> 7.1 mm/s (3 sec)" },
      { "Parameter": "BOILER TRIPPED (MFT ACTED)", "Value": "" },
      { "Parameter": "PA FAN STALL PROTECTION ACTED", "Value": "calculated value" }
    ],
    "FD fan": [
      { "Parameter": "FD FAN BRG DE/NDE TEMP HI", "Value": "> 105°C (3 sec)" },
      { "Parameter": "FD FAN MOTOR BRG DE/NDE TEMP HI", "Value": "> 90°C (3 sec)" },
      { "Parameter": "MOTOR WINDING TEMP (R/Y/B) HI", "Value": "> 130°C (3 sec)" },
      { "Parameter": "FAN DE/NDE BRG VIBRATION (X/Y) HI", "Value": "> 11 mm/s (2 sec)" },
      { "Parameter": "MOTOR DE/NDE BRG VIBRATION (X/Y) HI", "Value": "> 7.1 mm/s (3 sec)" },
      {
        "Parameter": "FAN PROTECTION OFF CONDITION",
        "Value": ["BOTH ID FAN TRIPPED", "OR", "FR. DRAFT > 200 mmWC"]
      },
      { "Parameter": "FD FAN STALL PROTECTION ACTED", "Value": "calculated value" }
    ],
    "MFT condition": [
      { "Parameter": "PROTECTION OFF CONDITION FOR BOTH FD FAN", "Value": "FURNACE PR > 200mmWc" },
      { "Parameter": "BOTH FD FAN OFF CONDITION", "Value": "" },
      {
        "Parameter": "PROTECTION OFF CONDITION FOR BOTH ID FAN",
        "Value": [
          "FURNACE PR < -200mmWc",
          "OR",
          "FAN SUCTION PR. < -600mmWC",
          "OR",
          "FAN DISCHARGE PR. > 200mmWC",
          "OR",
          "BOILER CCT LEVEL > 2200 mm",
          "OR",
          "APH FG O/L TEMP > 200°C"
        ]
      },
      { "Parameter": "BOTH ID FAN OFF CONDITION", "Value": "" },
      { "Parameter": "AIR FLOW LOW", "Value": "< 140 kg/Sec" },
      {
        "Parameter": "ECO FLOW LOW",
        "Value": [
          "< 690 TPH (20 s) if any BFP ON",
          "OR",
          "< 690 TPH (4 s) if no BFP ON"
        ]
      },
      {
        "Parameter": "EVAPORATOR O/L STEAM TEMP HIGH (LEFT/RIGHT)",
        "Value": ["> 477°C (15 min Delay)", "> 487°C (instant trip)"]
      },
      {
        "Parameter": "MS (SH3 OUTLET) TEMP HIGH (LEFT/RIGHT)",
        "Value": ["> 590°C (15 min Delay)", "> 595°C (instant trip)"]
      },
      {
        "Parameter": "RH1 OUTLET STEAM TEMP HIGH (LEFT/RIGHT)",
        "Value": ["> 550°C (15 min Delay)", "> 555°C (instant trip)"]
      },
      {
        "Parameter": "HRH (RH2 OUTLET) STEAM TEMP HIGH (LEFT/RIGHT)",
        "Value": ["> 620°C (15 min Delay)", "> 625°C (instant trip)"]
      },
      { "Parameter": "LOSS OF FLAME", "Value": "" },
      { "Parameter": "ALL FUEL INPUT OFF", "Value": "" },
      { "Parameter": "IGNITION STD TIME OVER (AFTER MFT RESET)", "Value": "30 min delay" },
      { "Parameter": "IGNITION COUNT>MAX", "Value": "" },
      { "Parameter": "EMERGENCY PUSH BUTTON OPERATED", "Value": "" }
    ],
    "Mill motor": [
      { "Parameter": "GEAR BRG OIL TEMP HIGH", "Value": "> 70°C" },
      { "Parameter": "LUBE OIL PRESSURE LOW", "Value": "< 1 bar (3 sec)" },
      { "Parameter": "MOTOR NDE TEMP1/TEMP2", "Value": "> 90°C" },
      { "Parameter": "MOTOR DE TEMP1/TEMP2", "Value": "> 90°C" },
      { "Parameter": "MILL SEAL AIR DP LOW AND HAG/CAG NOT CLOSED", "Value": "< 80 mmWC (30 sec)" },
      { "Parameter": "EPB OPERATED", "Value": "" }
    ]
  },
  "Turbine": {
    "Vacuum pump": [
      { "Parameter": "VAC PUMP SUC V/V CLOSING FAULT", "Value": "" },
      { "Parameter": "VAC PUMP SUC V/V DISTURBANCE", "Value": "10 sec delay" },
      { "Parameter": "VAC PUMP SEP LEVEL LOLO AND ALL CEP OFF", "Value": "180 sec delay" },
      { "Parameter": "SEAL WATER PUMP ON AND SEAL WATER FLOW <MIN 1", "Value": "5 sec delay" },
      { "Parameter": "VAC PUMP SEP MAKE UP VV OPEN AND SEP LVL<MIN1", "Value": "120 sec delay" },
      { "Parameter": "EPB PRESSED", "Value": "" }
    ],
    "TDBFP": [
      { "Parameter": "EXHAUST STEAM PR HIGH", "Value": "> 0.5 bar" },
      { "Parameter": "CONTROL OIL PR LOW", "Value": "< 10 bar" },
      { "Parameter": "LUBE OIL PR LOW", "Value": "< 1.5 bar" },
      { "Parameter": "HPU OIL PR LOW", "Value": "< 135 bar" },
      { "Parameter": "LUBE OIL TANK DP HIGH", "Value": "> 1.5 mbar" },
      { "Parameter": "AXIAL SHIFT HIGH", "Value": "> (+/-) 0.6 mm" },
      { "Parameter": "TURBINE THRUST BRG TEMP HIGH", "Value": "> 128°C" },
      { "Parameter": "TURBINE JOURNAL BRG TEMP HIGH", "Value": "> 120°C" },
      { "Parameter": "TURBINE SHAFT VIB HIGH", "Value": "> 85 micron" },
      { "Parameter": "SPUR GEAR DE/NDE VIB HIGH", "Value": "> 9.5 mm/s" },
      { "Parameter": "BOOSTER PUMP DE/NDE VIB HIGH", "Value": "> 11.2 mm/s" },
      { "Parameter": "MAIN PUMP SHAFT (SUC/DISCHR SIDE) VIB HIGH", "Value": "> 118 micron" },
      { "Parameter": "BOOSTER PUMP DE/NDE BRG TEMP HIGH", "Value": "> 100°C" },
      { "Parameter": "MAIN PUMP DE/NDE BRG TEMP HIGH", "Value": "> 100°C" },
      { "Parameter": "TEMP RADIAL HELICAL GEAR DE/NDE HIGH", "Value": "> 115°C" },
      { "Parameter": "BOOSTER PUMP DE/NDE SEAL WTR TEMP HIGH", "Value": "> 95°C" },
      { "Parameter": "MAIN PUMP DE/NDE SEAL WTR TEMP HIGH", "Value": "> 80°C" },
      { "Parameter": "FST LEVEL LOW", "Value": "< 1540 mm" },
      { "Parameter": "FST LEVEL TX (2/3) FAILED", "Value": "" },
      { "Parameter": "HOTWELL LEVEL HIGH", "Value": "> 1025 mm" },
      { "Parameter": "HOTWELL LEVEL TX (2/3) FAILED", "Value": "" },
      { "Parameter": "TDBFP FW FLOW LOW (SPEED VS FLOW)", "Value": "variable" },
      { "Parameter": "TDBFP RUN OUT (SPEED VS PR)", "Value": "variable" },
      { "Parameter": "TDBFP NPSH TRIP", "Value": "" },
      { "Parameter": "SUCTION V/V NOT OPEN", "Value": "" },
      { "Parameter": "EXHAUST VALVE NOT OPEN", "Value": "" },
      { "Parameter": "TDBFP DISCH PR TX(2/3) FAILURE", "Value": "" },
      { "Parameter": "AT LEAST ONE CW PUMP NOT RUNNING", "Value": "" },
      { "Parameter": "TDBFP TRIP PB (UCD)", "Value": "" },
      { "Parameter": "TDBFP TRIP PB (LOCAL)", "Value": "" },
      { "Parameter": "FIRE PROTECTION PB", "Value": "" },
      { "Parameter": "VERISTROKE TRIP", "Value": "" },
      { "Parameter": "ETG TRIP", "Value": "" },
      { "Parameter": "CONTROLLER TRIP", "Value": "" },
      { "Parameter": "TEST TURBINE PROTECTION", "Value": "" }
    ],
    "MDBFP": [
      { "Parameter": "BOOSTER PUMP DE/NDE SEAL WTR TEMP HIGH", "Value": "> 95°C" },
      { "Parameter": "MAIN PUMP DE/NDE SEAL WTR TEMP HIGH", "Value": "> 70°C" },
      { "Parameter": "BSTR PUMP THRUST BRG TEMP HIGH", "Value": "> 100°C" },
      { "Parameter": "BSTR PUMP DE/NDE JOURNAL BRG TEMP HIGH", "Value": "> 100°C" },
      { "Parameter": "MOTOR BSTR PUMP SIDE/HC SIDE BRG TEMP HIGH", "Value": "> 100°C" },
      { "Parameter": "MAIN PUMP THRUST BRG TEMP HIGH", "Value": "> 100°C" },
      { "Parameter": "MAIN PUMP DE/NDE JOURNAL BRG TEMP HIGH", "Value": "> 100°C" },
      { "Parameter": "MDBFP HYD CPLG JOURNAL BRG 1 TO 10 TEMP HIGH", "Value": "> 95°C" },
      { "Parameter": "MOTOR WDG (R/Y/B) TEMP HIGH", "Value": "> 135°C" },
      { "Parameter": "HYD CPLG UPSTR CLR WORKING OIL TEMP HIGH", "Value": "> 130°C" },
      { "Parameter": "HYD CPLG DNSTR CLR WORKING OIL TEMP HIGH", "Value": "> 60°C" },
      { "Parameter": "BSTR PUMP DE/NDE BRG HOUSNG VIB HIGH", "Value": "> 11.2 mm/s (20s)" },
      { "Parameter": "MAIN PUMP SHAFT (DE/NDE SIDE) VIB HIGH", "Value": "> 164 µm/s (20s)" },
      { "Parameter": "MOTOR BRG (BSTR PP/HC SIDE) VIB HIGH", "Value": "> 11.2 mm/s" },
      { "Parameter": "LUB OIL PR DNSTR FILTER LOW", "Value": "< 0.8 ksc" },
      { "Parameter": "PUMP DISCHARGE PR HIGH", "Value": "> 319 ksc" },
      { "Parameter": "FST LEVEL LOW", "Value": "< 1540 mm" },
      { "Parameter": "FST LEVEL TX (2/3) FAILURE", "Value": "5 sec delay" },
      { "Parameter": "SUCTION VALVE NOT OPEN", "Value": "" },
      { "Parameter": "MDBFP MOTOR COOLER LEAK DETECTOR ACTIVE", "Value": "switch" },
      { "Parameter": "MDBFP ON AND FLOW 2/3 FAILURE & DISCH VV OPEN", "Value": "" },
      { "Parameter": "MDBFP MIN FLOW VLV OPEN AND MDBFP FLOW LOW", "Value": "" },
      { "Parameter": "MDBFP ON AND FLOW HIGH", "Value": "" },
      { "Parameter": "MDBFP HEAD < REQUIRED AND DISCH VALVE OPEN AND MDBFP ON", "Value": "calculated" },
      { "Parameter": "MDBFP DISCHARGE PRESSURE TX 2/3 FAILURE", "Value": "" },
      { "Parameter": "MDBFP RUN OUT (SPEED VS PRESSURE)", "Value": "" },
      { "Parameter": "EPB OPERATED", "Value": "" }
    ],
    "LP bypass": [
      { "Parameter": "LP BYPASS DUMP TUBE TEMP HIGH", "Value": "> 570 °C (2 s)" },
      { "Parameter": "LP BYPASS DUMP TUBE TEMP DISTURBANCE", "Value": "2 sec" },
      { "Parameter": "LP BYPASS OUTLET STEAM TEMP HIGH", "Value": "> 110°C (2 s)" },
      { "Parameter": "LP BYPASS OUTLET STEAM TEMP DISTURBANCE", "Value": "2 sec" },
      { "Parameter": "LP BYPASS SPRAY WATER PR LOW", "Value": "< 20 ksc (5 s)" },
      { "Parameter": "LP BYPASS SPRAY WATER PR TX FAILURE", "Value": "" },
      { "Parameter": "ALL CW PUMP OFF", "Value": "" },
      { "Parameter": "HOTWELL LEVEL HIGH", "Value": "> 975 mm" },
      { "Parameter": "HOTWELL LEVEL TX FAILURE", "Value": "" },
      { "Parameter": "LPT EXHAUST PR HIGH", "Value": "> 0.4 ksc" }
    ],
    "HP bypass": [
      {
        "Parameter": "HP BYPASS DNST TEMP HIGH (2/3)",
        "Value": ["> 390°C (23 sec)", "> 400°C (6 sec)"]
      },
      { "Parameter": "ST TRIP AND LP BYPASS TRIP AND MS PR > 50 KSC", "Value": "" },
      {
        "Parameter": "HP BYPASS CV QUICK OPENING",
        "Value": "FOR BOILER LOAD MORE THAN 60% AND GEN NOT ON GRID OR ST PROTECTION TRIP"
      }
    ],
    "CEP": [
      { "Parameter": "THRUST BRG TEMP HIGH", "Value": "> 125°C (3 s)" },
      { "Parameter": "MOTOR DE/NDE BRG TEMP HIGH", "Value": "> 110°C (3 s)" },
      { "Parameter": "MOTOR WDG (R/Y/B) TEMP HIGH", "Value": "> 160°C (3 s)" },
      { "Parameter": "THRUST BRG VIB HIGH", "Value": "> 9.5 mm/s (3 s)" },
      { "Parameter": "MOTOR DE/NDE BRG VIB HIGH", "Value": "> 11 mm/s (3 s)" },
      { "Parameter": "SUCTION VALVE NOT OPEN", "Value": "" },
      { "Parameter": "SUCTION FILTER DP HIGH", "Value": "> 0.1 ksc" },
      { "Parameter": "HOTWELL LEVEL LOW", "Value": "" },
      { "Parameter": "HOTWELL LEVEL TX (2/3) FAILURE", "Value": "" },
      { "Parameter": "DISCH HDR PRESS LOW AND 3 CEP ON", "Value": "< 21 ksc (30 s)" },
      { "Parameter": "DISCH HDR PRESS TX (2/3) FAILURE", "Value": "" },
      { "Parameter": "MOTOR ON FOR 10 SEC AND MIN FLOW CV CLOSED AND DISCHARGE VALVE CLOSED", "Value": "" },
      { "Parameter": "CONDENSATE EXTRACTION FLOW LOW", "Value": "< 235 tph" },
      { "Parameter": "ONE CEP ON FOR AND POLISHING PLANT NOT READY AND CPP BYPASS NOT OPEN", "Value": "3 sec delay" },
      { "Parameter": "EPB PRESSED", "Value": "" }
    ],
    "TGECW pump": [
      { "Parameter": "TGECW HEAT EXCHANGE INLET PR HIGH", "Value": "> 7.8 ksc (10 s)" },
      { "Parameter": "PUMP ON AND INLET VALVE NOT OPEN", "Value": "" },
      { "Parameter": "PUMP ON AND OULTEL VALVE NOT OPEN", "Value": "" },
      { "Parameter": "PUMP DP HIGH", "Value": "> 4.7 ksc (15 s)" },
      { "Parameter": "PUMP DP LOW", "Value": "< 2.5 ksc (30 s)" }
    ],
    "Drip pump": [
      { "Parameter": "PUMP SUC VALVE NOT OPEN", "Value": "" },
      { "Parameter": "LPH-3 LEVEL LOW", "Value": "< 151 mm" },
      { "Parameter": "LPH-3 LEVEL TX 3rd FAULT", "Value": "" },
      { "Parameter": "FST LEVEL HIGH", "Value": "> 3376 mm" },
      { "Parameter": "FST LEVEL TX 3rd FAULT", "Value": "" },
      { "Parameter": "FST PR HIGH", "Value": "> 14.5 ksc" },
      { "Parameter": "FST PR TX 3rd FAULT", "Value": "" },
      { "Parameter": "THRUST BRG TEMP HIGH", "Value": "> 90°C" }
    ],
    "ACW pump": [
      { "Parameter": "ACW PUMP ON AND DISCHARGE VALVE CLOSED", "Value": "10 sec delay" },
      { "Parameter": "ACW COMMON O/L VALVE NOT OPEN", "Value": "3 sec delay" },
      { "Parameter": "ACW COMMON INLET VALVE NOT OPEN", "Value": "3 sec delay" },
      { "Parameter": "ACW PUMP INLET PR LOW", "Value": "< 0.5 ksc (16 s)" },
      { "Parameter": "ACW SUC V/V CLOSED AND PUMP ON", "Value": "" },
      { "Parameter": "ACW PUMP DP LOW", "Value": "< 0.85 ksc (30 s)" },
      { "Parameter": "ACW PUMP DP HIGH", "Value": "> 2.8 ksc (15 s)" },
      { "Parameter": "EPB OPERATED", "Value": "" }
    ],
    "Main turbine": [
      {
        "Parameter": "TURBINE HIGH SPEED",
        "Value": [
          "> 3180 rpm (5 sec)",
          "> 3150 rpm (10 sec)",
          "> 3090 rpm (20 sec)"
        ]
      },
      { "Parameter": "TURBINE OVERSPEED HW PROTECTION", "Value": "> 3330 rpm" },
      { "Parameter": "TURBINE UNDER FREQ PROTECTION", "Value": "< 2745 rpm (2 sec)" },
      { "Parameter": "TURBINE STANDSTILL PROTECTION", "Value": "< 3 rpm" },
      { "Parameter": "LPT EXHAUST PRESSURE HIGH (SPEED>1500 RPM) HW", "Value": "> 0.61 ksc" },
      { "Parameter": "SAFETY OIL PRESSURE LOW", "Value": "< 27.53 ksc" },
      { "Parameter": "LUBE OIL PRESSURE LOW", "Value": "< 0.92 ksc" },
      { "Parameter": "THRUST POSITION HIGH", "Value": "> (+/-) 0.8 mm" },
      { "Parameter": "HIGH BEARING VIBRATION", "Value": "> 240 micron (1 sec)" },
      { "Parameter": "HIGH BEARING VIBRATION WHILE ROLLING", "Value": "> 360 micron (1 sec)" },
      { "Parameter": "LPT VENT TEMP HI", "Value": "> 200°C" },
      {
        "Parameter": "HPT STRESS HIGH",
        "Value": ["> 105%", "> 102% (5 min)"]
      },
      {
        "Parameter": "IPT STRESS HIGH",
        "Value": ["> 105%", "> 102% (5 min)"]
      },
      {
        "Parameter": "LIVE STEAM (MS) TEMP HIGH",
        "Value": ["> 593°C", "> 579°C (15 min)"]
      },
      {
        "Parameter": "HRH TEMP HIGH",
        "Value": ["> 620°C", "> 608°C (15 min)"]
      },
      { "Parameter": "HPT EXHAUST TEMP HIGH", "Value": "> 500°C" },
      { "Parameter": "HPT DP HIGH", "Value": "> 25.39 ksc" },
      { "Parameter": "LUBE OIL TANK LEVEL LOW", "Value": "< 100 mm" },
      { "Parameter": "HPT FRONT BRG TEMP HIGH", "Value": "> 120°C" },
      { "Parameter": "THRUST BRG TEMP HIGH [MAD21CT003A, 3B,3C(4,5,6)]", "Value": "> 125°C" },
      { "Parameter": "LPT FRONT BRG TEMP HIGH", "Value": "> 120°C" },
      { "Parameter": "GENERATOR FRONT BRG TEMP HIGH", "Value": "> 120°C" },
      { "Parameter": "GENERATOR REAR BRG TEMP HIGH", "Value": "> 120°C" },
      { "Parameter": "EXCITER REAR BRG TEMP HIGH", "Value": "> 120°C" },
      { "Parameter": "SEAL OIL DP LOW", "Value": "< 0.2 KSC" },
      { "Parameter": "SEAL OIL TANK LEVEL LOW LOW", "Value": "SWITCH" },
      { "Parameter": "COLD H2 GAS TEMP (LHS/RHS) HIGH", "Value": "> 66°C" },
      { "Parameter": "BOILER TRIPPED", "Value": "" },
      { "Parameter": "GENERATOR TRIPPED", "Value": "" },
      { "Parameter": "FIRE PROTECTION PB ST", "Value": "" },
      { "Parameter": "FIRE PROTECTION PB HYSU (MOT ROOM)", "Value": "" },
      { "Parameter": "FIRE PROTECTION PB UCD", "Value": "" },
      { "Parameter": "FIRE PROTECTION PB FAP", "Value": "" },
      { "Parameter": "ST TRIP FROM CONTROL ROOM", "Value": "" },
      { "Parameter": "ST TRIP FROM LOCAL PB TG(17 M)", "Value": "" },
      { "Parameter": "ST TRIP FROM LOCAL PB HYSU (MOT ROOM)", "Value": "" },
      { "Parameter": "CONTROLLER NOT OK", "Value": "" },
      { "Parameter": "H2 GAS QUICK DISCHARGE PB", "Value": "" },
      { "Parameter": "ST CONTROL TRIP (TRIP SIGNAL 2/3 FAILURE)", "Value": "" },
      { "Parameter": "TIGHTNESS TEST", "Value": "" },
      { "Parameter": "ST SEQUENCE TRIP", "Value": "" },
      { "Parameter": "Test Turbine protection", "Value": "" },
      { "Parameter": "Test over pressure protection", "Value": "" },
      { "Parameter": "Boolean output card", "Value": "" }
    ]
  },
  "Offsite": {
    "Fire water pumps": [
      { "Pump Name": "JOCKEY PUMP", "Action": "AUTO START", "Condition": "HDR PR < 9.5 KSC" },
      {
        "Pump Name": "JOCKEY PUMP",
        "Action": "AUTO STOP",
        "Condition": [
          "HDR PR > 10.5 KSC",
          "OR",
          "ANY HYDRANT OR SPRAY PUMP ON"
        ]
      },
      { "Pump Name": "HYDRANT PUMP 1", "Action": "AUTO START", "Condition": "HDR PR < 8.5 KSC" },
      { "Pump Name": "HYDRANT PUMP 2", "Action": "AUTO START", "Condition": "HDR PR < 7.5 KSC" },
      { "Pump Name": "HYDRANT PUMP 3", "Action": "AUTO START", "Condition": "HDR PR < 6.5 KSC" },
      { "Pump Name": "DIESEL HYDRANT PUMP", "Action": "AUTO START", "Condition": "HDR PR < 5.5 KSC" },
      { "Pump Name": "SPRAY PUMP", "Action": "AUTO START", "Condition": "HDR PR < 8.5 KSC" },
      { "Pump Name": "DIESEL SPRAY PUMP", "Action": "AUTO START", "Condition": "HDR PR < 7.5 KSC" },
      { "Pump Name": "BOOSTER HYDRANT PUMP", "Action": "AUTO START", "Condition": "HDR PR < 8.0 KSC" },
      { "Pump Name": "DIESEL BOOSTER HYDRANT PUMP", "Action": "AUTO START", "Condition": "HDR PR < 7.5 KSC" },
      { "Pump Name": "BOOSTER SPRAY PUMP", "Action": "AUTO START", "Condition": "HDR PR < 8.0 KSC" },
      { "Pump Name": "DIESEL BOOSTER SPRAY PUMP", "Action": "AUTO START", "Condition": "HDR PR < 7.5 KSC" }
    ],
    "CW seal water pumps": [
      { "Parameter": "CW OVERHEAD TANK LEVEL LOW", "Value": "< 0.4 M" },
      { "Parameter": "SEAL WATER PUMP DISCHARGE PR HIGH (1/2)", "Value": "> 7 ksc" }
    ],
    "RAW water Ash water pump": [
      { "Parameter": "THRUST BRG TEMP HIGH", "Value": "> 90°C" },
      { "Parameter": "SUMP LEVEL LOW", "Value": "< 1 M" },
      { "Parameter": "PUMP DISCHARGE PR HIGH", "Value": "> 3.2 ksc (Delay 60s)" },
      { "Parameter": "OVERHEAD TANK LEVEL LOW", "Value": "< 0.35 M" },
      { "Parameter": "LUBE WATER FLOW LOW", "Value": "" },
      { "Parameter": "PUMP ON AND DISCHARGE VALVE NOT OPEN", "Value": "90 sec Delay" },
      { "Parameter": "ALL LUBE WATER PUMP OFF", "Value": "" },
      { "Parameter": "EPB PRESSED", "Value": "" }
    ],
    "Service water pump": [
      { "Parameter": "PUMP ON AND DISCHARGE VV FAIL TO OPEN", "Value": "10 s Delay" },
      { "Parameter": "TANK LEVEL LOW", "Value": "< 1.8 M" },
      { "Parameter": "SUCTION VALVE CLOSED", "Value": "" },
      { "Parameter": "COMMON DISCHARGE HDR PR HIGH", "Value": "> 9.5 KSC" },
      { "Parameter": "EPB PRESSED", "Value": "" }
    ],
    "SACW pump": [
      { "Parameter": "SUMP LEVEL LOW", "Value": "< 1 M" },
      { "Parameter": "PUMP DISCHARGE PR HIGH", "Value": "> 6 ksc" },
      { "Parameter": "PUMP THRUST BRG TEMP HIGH", "Value": "> 80°C" }
    ],
    "RAW water PT pump": [
      { "Parameter": "THRUST BRG TEMP HIGH", "Value": "> 90°C" },
      { "Parameter": "SUMP LEVEL LOW", "Value": "< 1 M" },
      { "Parameter": "PUMP DISCHARGE PR HIGH", "Value": "> 3.2 ksc (60 s)" },
      { "Parameter": "OVERHEAD TANK LEVEL LOW", "Value": "< 0.35 M" },
      { "Parameter": "LUBE WATER FLOW LOW", "Value": "" },
      { "Parameter": "PUMP ON AND DISCHARGE VALVE NOT OPEN", "Value": "90 sec Delay" },
      { "Parameter": "ALL LUBE WATER PUMP OFF", "Value": "" },
      { "Parameter": "EPB PRESSED", "Value": "" }
    ],
    "IAC PAC": [
      { "Parameter": "MOTOR WDG (R/Y/B) TEMP HIGH", "Value": "> 110 °C (10 s)" },
      { "Parameter": "1st STAGE O/L PR HIGH", "Value": "> 2.8 ksc (3 s)" },
      { "Parameter": "2nd STAGE O/L PR LOW", "Value": "< 1.6 ksc (3 s)" },
      { "Parameter": "DISCHARGE PR HIGH", "Value": "> 8.8 ksc" },
      { "Parameter": "2nd STAGE I/L TEMP HIGH", "Value": "> 45°C (10 s)" },
      { "Parameter": "2nd STAGE O/L TEMP HIGH", "Value": "> 215°C (10 s)" },
      { "Parameter": "MOT DE/NDE BRG TEMP HIGH", "Value": "> 100°C (5 s)" },
      { "Parameter": "OIL TEMP HIGH", "Value": "> 50°C (10 s)" },
      { "Parameter": "OIL PR LOW", "Value": "< 1.1 ksc (2 s)" },
      { "Parameter": "INLET WATER PR LOW", "Value": "< 1 ksc (3 s)" },
      { "Parameter": "BLOW OFF PR HIGH", "Value": "> 0.4 ksc" },
      { "Parameter": "DIRECT TRIP ON PLC FAULT", "Value": "" },
      { "Parameter": "LOSS OF COMPRESSOR RUNNING FB", "Value": "" }
    ],
    "AUX boiler LDO pump": [
      { "Parameter": "LDO TANK LEVEL LOW", "Value": "< 20% (2 s)" },
      { "Parameter": "SUCTION STRAINER DP HIGH", "Value": "> 0.3 ksc (2 s)" },
      { "Parameter": "EPB PRESSED", "Value": "" }
    ],
    "CW pump": [
      { "Parameter": "TRUST BRG VIB HIGH (X/Y)", "Value": "> 70 μ (15 s)" },
      { "Parameter": "MOTOR DE/NDE BRG VIB HIGH (X/Y)", "Value": "> 70 μ (15 s)" },
      { "Parameter": "MOTOR WDG (R/Y/B) TEMP HIGH", "Value": "> 135°C" },
      { "Parameter": "THRUST BRG TEMP HIGH", "Value": "> 90°C" },
      { "Parameter": "MOTOR DE/NDE BRG TEMP HIGH", "Value": "> 105 °C (90 s)" },
      { "Parameter": "THRUST BRG OIL LEVEL LOW", "Value": "< 100 mm" },
      { "Parameter": "CWP-EMG CLS SOV 2 OPEN", "Value": "" },
      { "Parameter": "CWP-STBY EMG CLS SOV1 DIST", "Value": "" },
      { "Parameter": "CWP DISCHARGE PR HIGH", "Value": "> 4.2 ksc (90 s)" },
      { "Parameter": "CWP SUMP LEVEL LOW", "Value": "< 6.5 M" },
      { "Parameter": "CW PUMP SEAL WATER FLOW LOW", "Value": "5 sec delay" },
      { "Parameter": "CW PUMP SEAL WATER DISCHARGE PR LOW", "Value": "< 3 ksc (30 s)" },
      { "Parameter": "CWP SEAL WATER PP 1/2 TRIP AND PP 2/1 FAIL TO START", "Value": "" },
      { "Parameter": "CWP ON FOR 15 SEC AND BFV >90% N OPEN FOR 80 SEC", "Value": "" },
      { "Parameter": "EPB PRESSED", "Value": "" }
    ],
    "Aux boiler BFP": [
      { "Parameter": "DEAERATOR LEVEL LOW", "Value": "< 7.5% (2 s)" },
      { "Parameter": "SUCTION PR LOW", "Value": "< 0.7 ksc (2 s)" },
      { "Parameter": "SUCTION STRAINER DP HIGH", "Value": "> 0.25 ksc (2 s)" },
      { "Parameter": "EPB PRESSED", "Value": "" }
    ],
    "Aux boiler MFT": [
      { "Parameter": "DRUM LEVEL HIGH", "Value": "> 78%" },
      { "Parameter": "DRUM LEVEL LOW", "Value": "< 17.4%" },
      { "Parameter": "MAIN STEAM O/L TEMP HIGH", "Value": "> 240°C" },
      { "Parameter": "MAIN STEAM PR HIGH", "Value": "> 24 ksc" },
      { "Parameter": "FURNACE PR HIGH", "Value": "> 300 mmWc" },
      { "Parameter": "FD FAN DISCHARGE AIR FLOW LOW", "Value": "< 26 tph" },
      { "Parameter": "INSTRUMENT AIR PR LOW", "Value": "< 2.5 ksc" },
      { "Parameter": "ATOMIZING STEAM/AIR TO LDO DP LOW", "Value": "< 0.8 ksc" },
      { "Parameter": "LDO BURNER COMMON HDR PR HIGH", "Value": "> 11 ksc" },
      { "Parameter": "LDO BURNER COMMON HDR PR LOW", "Value": "< 0.5 ksc" },
      { "Parameter": "BURNER A & B FLAME FAIL", "Value": "" },
      { "Parameter": "BOTH FD FAN OFF", "Value": "" },
      { "Parameter": "DESK EPB PRESSED", "Value": "" },
      { "Parameter": "SOFT EPB PRESSED", "Value": "" },
      { "Parameter": "LOCAL EPB PRESSED", "Value": "" }
    ],
    "Ujjani MUWP": [
      { "Parameter": "MUWP MTR WDG TEMP > MAX2 (R/Y/B-PHASE)", "Value": "> 130 Degree (4 sec delay)" },
      { "Parameter": "MUWP MTR NDE BRG TEMP - 1, 2 (1/2)", "Value": "> 85 Degree (4 sec delay)" },
      { "Parameter": "MUWP MTR DE BRG TEMP - 1", "Value": "> 85 Degree (4 sec delay)" },
      { "Parameter": "MUWP MTR NDE THR BRG TEMP-1, 2 (1/2)", "Value": "> 85 Degree (4 sec delay)" },
      { "Parameter": "MUWP SUMP LEVEL-1/2<MIN2", "Value": "< 2.4M" },
      { "Parameter": "LUB WATER OVERHEAD TANK LEVEL < MIN2", "Value": "< 0.4M" },
      { "Parameter": "MUWP DISCH PRESS > MAX2", "Value": "> 25.5 kg/cm2 (60 sec delay)" },
      { "Parameter": "MUWP PUMP THR BRG TEMP-1> MAX2", "Value": "> 80 Degree (4 sec delay)" },
      { "Parameter": "MUWP MTR DE/NDE BRG VIB (X,Y) 1/2 > MAX2", "Value": "> 10.5 mm/sec (15 sec delay)" },
      { "Parameter": "MUWP PUMP THR BRG VIB (X,Y) 1/2 > MAX2", "Value": "> 8.5 mm/sec (10 sec delay)" },
      { "Parameter": "LUB WATER PUMPS DISCH PRESS < MIN2", "Value": "< 20 kg/cm2" },
      { "Parameter": "ALL LUB WATER PUMPS STOP", "Value": "" },
      { "Parameter": "MUWP START & DISCH VLV N-OPEN & S/D SEQ N- ON", "Value": "90sec delay" },
      { "Parameter": "LUBE WATER FLOW TO PUMP SEALING LOW", "Value": "< 25LPM" }
    ]
  },
  "FGD": {
    "FGD booster fan": [
      { "Parameter": "BF1 Emergency PB is ACTIVATED/PRESSED", "Value": "" },
      { "Parameter": "BF1 Motor Winding Temp is H2", "Value": ">=  130" },
      { "Parameter": "BF1 Motor DE Bearing Temp is H2", "Value": ">= 95" },
      { "Parameter": "BF1 Motor NDE Bearing Temp is H2", "Value": ">= 95" },
      { "Parameter": "BF1 Motor DE Bearing Vibration is H2", "Value": ">= 7.0" },
      { "Parameter": "Main Bearing Assembly Vibration is H2", "Value": ">= 7.2" },
      { "Parameter": "Radial Bearing DE Temperature is H2", "Value": ">= 100" },
      { "Parameter": "Thrust Bearing Temperature NDE is H2", "Value": ">= 100" },
      { "Parameter": "Radial Bearing Temperature NDE is H2", "Value": ">= 100" },
      { "Parameter": "Stall Trip-DPT is H2 (more than 120 s)", "Value": ">= 50" },
      { "Parameter": "Booster Fan O/L gate CLOSD Status", "Value": "10 Sec" },
      { "Parameter": "Booster Fan I/L gate CLOSD Status", "Value": "10 Sec" },
      { "Parameter": "Absorber in Emg & WFGD Bypass Damper open", "Value": "10 Sec" },
      { "Parameter": "BF2 INT/EXT/NDE TEMP SWITCH HH (5 secs delay)", "Value": ">= 95" },
      { "Parameter": "Booster Fans common shutdown due to MFT", "Value": "" },
      { "Parameter": "Absorber in EMG, ESP Opacity High >175 (5secs delay)", "Value": "" }
    ],
    "FGD bypass damper": [
      { "Parameter": "IDF-A or IDF-B NOT RUNNING (From Signal Exchange)", "Value": "Auto Open" },
      { "Parameter": "BOILER MFT OPERATED1 OR BOILER MFT OPERATED2 (From Signal Exchange)", "Value": "Auto Open" },
      { "Parameter": "ABSORRFR IN EMERGENCY", "Value": "Auto Open" },
      { "Parameter": "EMERG. QUNECH TANK LEVEL LOW", "Value": "3m, 10 Secs" },
      { "Parameter": "ESP OPACITY HIGH", "Value": "150 mg/nm3, 600 sec" },
      { "Parameter": "GAS PATH NOT AVAILABLE", "Value": "2 sec" },
      { "Parameter": "BOILER LOAD IS <40%", "Value": "264 MW, 300 sec" },
      { "Parameter": "BYPASS DAMPER FAILED TO OPEN", "Value": "10 sec (Prot. Open)" },
      { "Parameter": "BYPASS DAMPER FAILED TO CLOSE AND PRS DEV >=-2 Mbar", "Value": "150 sec" },
      { "Parameter": "BYPASS DAMPER AUTO OPEN CMD", "Value": "NA" },
      { "Parameter": "BYPASS DAMPER BOTH FB AND PRS DEV >= -2 Mbar", "Value": "2 mbar 10 sec" },
      { "Parameter": "EPB PRESSED", "Value": "2 sec" },
      { "Parameter": "BYPASS DAMPER OPEN COMMAND1 OR COMMANAD2 FROM BOILER DCS", "Value": "Auto Open" },
      { "Parameter": "FG01REMOTE NODES OR MODULE FAILED", "Value": "10 sec" },
      { "Parameter": "BOOSTER FAN-1A STOPPED OR SHUTDOWN SEQUENCE CMD INIT", "Value": "" },
      { "Parameter": "BOOSTER FAN-1B STOPPED OR SHUTDOWN SEQUENCE CMD INIT", "Value": "" },
      { "Parameter": "BOOSTER FAN 1A OR BOOSTER FAN 1B STALL WARNING OCCURED", "Value": "" },
      { "Parameter": "BYPASS DUCT PRESSURE HIGH (+3 OR -7 Mbar)", "Value": "" },
      { "Parameter": "BOOSTER FANS COMMON SHUTDOWN", "Value": "" },
      { "Parameter": "BOOSTER FAN-1 RUNNING AND INLET OR OUTLET DAMPER NOT OPEN", "Value": "600 sec" },
      { "Parameter": "BOOSTER FAN-2 RUNNING AND INLET OR OUTLET DAMPER NOT OPEN", "Value": "600 sec" },
      { "Parameter": "INST AIR HDR PR LL", "Value": "4.5bar, 60 sec" },
      { "Parameter": "RECIEVER TANK PR LL", "Value": "4bar, 30 sec" },
      { "Parameter": "BOOSTER FAN A BLADE PITCH FAULT", "Value": "5 sec" },
      { "Parameter": "BOOSTER FAN B BLADE PITCH FAULT", "Value": "5 sec" }
    ],
    "FGD RC pump": [
      { "Parameter": "RCP 3 MTR WDG R PH H2", "Value": ">= 130" },
      { "Parameter": "RCP 3 MTR WDG Y PH H2", "Value": ">= 130" },
      { "Parameter": "RCP 3 MTR WDG B PH H2", "Value": ">= 130" },
      { "Parameter": "RCP 3 MTR BRG TEMP DE H2", "Value": ">= 95" },
      { "Parameter": "RCP 3 MTR BRG TEMP NDE H2", "Value": ">= 95" },
      { "Parameter": "RCP 3 MTR BRG DE VIB H2", "Value": ">= 7.1" },
      { "Parameter": "RCP 3 MTR BRG NDE VIB H2", "Value": ">= 7.1" },
      { "Parameter": "RCP 3 GB OIL SUMP TEMP H2", "Value": ">= 105" },
      { "Parameter": "RCP 3 PUMP OIL SUMP TEMP H2", "Value": ">= 100" },
      { "Parameter": "RCP 3 DE BRG TEMP H2", "Value": ">= 85" },
      { "Parameter": "RCP 3 DE BRG VIB H2", "Value": "11.9" },
      { "Parameter": "RCP 3 NDE BRG VIB H2", "Value": "11.9" },
      { "Parameter": "RCP 3 NDE BRG TEMP H2", "Value": ">= 85" },
      { "Parameter": "RCP 3 GB VIB H2", "Value": ">= 7.1" },
      { "Parameter": "RCP 3 ANY 2 TEMP SET BAD", "Value": "" },
      { "Parameter": "RCP 3 ANY 2 VIB SET BAD", "Value": "" },
      { "Parameter": "RCP 3 RUNNING & ISV CLOSE", "Value": "" },
      { "Parameter": "RCP 3 RUNNING & OV CLOSE", "Value": "" },
      { "Parameter": "RCP 3 RUNNING & DV NT CLOSE", "Value": "" },
      { "Parameter": "RCP 3 RUNNING & FV NT CLOSE", "Value": "" },
      { "Parameter": "ABSORBER LEVEL <= L2", "Value": "<= 6.9" }
    ]
  }
};
