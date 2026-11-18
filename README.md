# 🌬️ AIR QUALITY - GenAI Winter Smog & Community Resilience Co-Pilot

A production-grade, physics-grounded Generative AI application engineered to help urban families, sensitive individuals, and community organizers navigate severe winter smog and air pollution episodes.

The application combines **real-time atmospheric telemetry** (PM2.5, PM10, diurnal ground inversion curves) with **generative intelligence** to deliver optimized daily routines, scientific indoor air quality (IAQ) hacks, DIY air purifier blueprints, and clear quantification of personal health and community emission impacts.

---

## 🌟 Core Features

### 1. 📊 Atmospheric Command & Diurnal Smog Exposure Clock
* **Real-time Smog Telemetry**: Live AQI categories, fine particulate ($PM_{2.5}$) concentrations, temperature, humidity, and atmospheric stagnation alerts.
* **Ground Thermal Inversion Tracker**: Tracks nocturnal radiation inversions where cool stagnant air traps toxic ground emissions below 20 meters.
* **24-Hour Diurnal Exposure Curve**: Accurately maps the **Solar Convection Mixing Window** (11:30 AM – 3:30 PM) when ground PM2.5 drops by 35–50%, identifying the optimal time for essential outdoor chores and burst ventilation.
* **Hotspot Presets**: Built-in microclimate models for severe winter smog zones including **Delhi NCR**, **Lahore**, **Beijing-Hebei**, **Salt Lake City Basin**, and **Central Valley CA**.

### 2. 👶 Vulnerability Context Engine
Personalized guidance thresholds tailored to sensitive family members:
* **Child / Asthmatic Member**: Focuses on pediatric airway sensitivity, peak expiratory flow (PEF) monitoring, nighttime bedroom PM2.5 thresholds (< 12 µg/m³), and certified KF94/N95 masks for school transit.
* **Elderly / Cardiovascular Risk**: Mitigates systemic arterial inflammation and stroke hazards triggered by fine particulate translocation across alveolar capillaries into the bloodstream.
* **Daily Urban Commuter**: Tailored directives for high-exposure transit corridors, including internal vehicle air recirculation protocols and cabin filter upgrades.
* **General Household**: Broad antioxidant, indoor draught sealing, and burn-avoidance practices.

### 3. 🗓️ Low-Emission Daily Routine Planner
* **AI-Optimized Activity Sequencing**: Automatically reschedules outdoor tasks, school runs, and workouts around high-hazard morning and evening inversion hours.
* **Direct Health Impact Annotations**: Clearly explains how each scheduling adjustment reduces cumulative respiratory dosage (e.g., *"Shifting morning exercise avoids inhaling ~85 µg of fine particulate"*).

### 4. 🌀 DIY Corsi-Rosenthal Purifier & Room CADR Physics Lab
* **Fluid Dynamics Physics Engine**: Interactive calculator adhering to ASHRAE 62.2 ventilation guidelines.
  * Inputs: Room length, width, height, filter media (MERV 11, MERV 13, MERV 14, True HEPA H13), number of filters (1, 2, 4), and fan specifications.
  * **Cardboard Shroud Hack**: Demonstrates and calculates the +38% Clean Air Delivery Rate (CADR) boost achieved by eliminating blade-tip vortex backdrafts.
  * Outputs: Total Room Volume (cu ft), Delivered CADR (CFM), Achieved Air Changes per Hour (ACH), and 90% particle clearance time in minutes:
    $$t_{90} = \frac{2.303 \times \text{Room Volume}}{\text{Delivered CADR}}$$
  * Cost comparison: Highlights how a \$45–\$60 DIY box delivers >500 CFM, outperforming \$350+ commercial purifiers.

### 5. 🛠️ Science-Backed Winter IAQ Hacks
* **The Positive Pressure Clean Room Sanctuary**: Isolating a master bedroom so clean air pushes outward through microscopic cracks.
* **Thermal Bubble-Wrap Smog Barrier**: Stops cold downdraft convective loops along window panes while insulating living spaces.
* **Kitchen Exhaust Backdraft Prevention**: Eliminates negative house pressure that sucks chimney soot and exterior smog down exhaust flues during cooking.
* **Botanical Reality Check**: Scientific analysis of air-purifying plants (Areca Palm, Snake Plant) separating biological truth from marketing hype.

### 6. 🌱 Sustainable Alternatives & Direct Impact Ledger
Quantifies personal and collective actions with transparent metrics:
* **Commute Shift**: Switching from private car to metro/carpooling saves 8.4g of direct tailpipe PM2.5 and 4.2 kg CO2e per 15 km trip.
* **Heating Retrofit**: Replacing open wood/biomass fires with thermal curtains and heat pumps saves 45g PM2.5 daily and prevents indoor carbon monoxide risks.
* **Community Bio-Composting**: Eliminating open leaf and trash burning saves 120g of heavy carcinogenic PM2.5 per compost pile.
* **School Carpool Cluster**: Consolidating 4 families cuts school entrance idling emissions by 75%.
* **Tangible Equivalence**: Translates averted particulate intake into **"Cigarettes avoided today"** and calculates a **500-household community multiplier** over 30 winter smog days.

### 7. ✨ AIR QUALITY GenAI Co-Pilot & Vision Inspector
* **Hybrid GenAI Engine**: Connects directly to Google's **Gemini 1.5 Flash / Pro** using a user-provided API key, with a full, deterministic, physics-grounded fallback knowledge engine for zero-quota failure and offline execution.
* **Multimodal / Vision Diagnostic**: Allows users to select scenarios or upload photos (window seams, C-R box builds, stove exhaust hoods) to receive immediate aerodynamic and seal risk scores.
* **Context-Aware Prompt Caching**: Prompts are structured with system constraints, WHO guidelines, and real-time telemetry context to ensure fast, cost-efficient, and hallucination-free guidance.

---

## 🚀 Quick Start Guide

### Option 1: Direct Browser Launch (Zero Installation)
Simply double-click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Brave). No build tools or package managers required!

### Option 2: Local HTTP Server
Run the built-in, zero-dependency Node.js server:

```bash
# Start server on http://localhost:3000
npm start
# or
node server.js
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 File Structure

```text
├── index.html       # Responsive web application with interactive tabs, modals, and Tailwind styling
├── styles.css       # Custom design system: glassmorphism, responsive grid, AQI glows, and switches
├── app.js          # Core application logic, CADR physics engine, state management, and GenAI bridge
├── data.js         # Knowledge base: WHO guidelines, city profiles, IAQ hacks, and emission benchmarks
├── server.js       # Zero-dependency Node.js HTTP static server with SPA fallback
├── package.json    # Project metadata and quick start scripts
└── README.md       # Complete project documentation and scientific references
```

---

## 🔬 Scientific & Regulatory Standards

1. **World Health Organization (WHO)**: *Global Air Quality Guidelines (AQG 2021)* - 24-hour mean guideline of $15\ \mu\text{g/m}^3$ for $PM_{2.5}$.
2. **ASHRAE 62.2**: *Ventilation and Acceptable Indoor Air Quality in Residential Buildings*.
3. **Corsi-Rosenthal Foundation & UC Davis**: *Particle clearance performance of box-fan filter assemblies*.
4. **US EPA**: *Indoor Air Quality in Homes during Wildfire and Winter Smog Events*.
