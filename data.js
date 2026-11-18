/**
 * AIR QUALITY - Core Domain Data & Knowledge Base
 * Built for winter smog mitigation, indoor air quality optimization, and community impact.
 */

const AIR_QUALITY_DATA = {
  // Preset severe winter smog hotspots
  cities: {
    delhi: {
      name: "Delhi NCR, India",
      region: "Indo-Gangetic Plain",
      baseAqi: 385,
      category: "Severe / Hazardous",
      pm25: 320,
      pm10: 480,
      no2: 85,
      temperature: "13°C",
      humidity: "82%",
      windSpeed: "3.2 km/h (Stagnant)",
      inversionStatus: "Active Severe Ground Inversion (04:00 - 10:30)",
      peakSmogHours: [
        { hour: "06:00", pm25: 380, label: "Peak Inversion & Smoke Trap" },
        { hour: "09:00", pm25: 340, label: "Morning Traffic + Smog" },
        { hour: "13:00", pm25: 190, label: "Solar Mixing Window (Lowest of Day)" },
        { hour: "15:00", pm25: 180, label: "Safest Essential Outdoor Window" },
        { hour: "19:00", pm25: 310, label: "Evening Stagnation Trap" },
        { hour: "22:00", pm25: 395, label: "Night Inversion Deepens" }
      ],
      primarySources: "Stubble smoke transport, biomass heating, cold-start vehicular idling, calm boundary layer."
    },
    lahore: {
      name: "Lahore, Pakistan",
      region: "Punjab Basin",
      baseAqi: 410,
      category: "Hazardous / Emergency",
      pm25: 360,
      pm10: 520,
      no2: 92,
      temperature: "12°C",
      humidity: "86%",
      windSpeed: "2.4 km/h (Calm)",
      inversionStatus: "Critical Thermal Inversion Under 150m",
      peakSmogHours: [
        { hour: "06:00", pm25: 420, label: "Dense Smog Blanket" },
        { hour: "09:00", pm25: 390, label: "Morning Commute Spike" },
        { hour: "13:00", pm25: 220, label: "Midday Solar Dispersion" },
        { hour: "15:00", pm25: 210, label: "Safest Window for Movement" },
        { hour: "19:00", pm25: 380, label: "Heavy Inversion Trapping" },
        { hour: "22:00", pm25: 430, label: "Extreme Night Stagnation" }
      ],
      primarySources: "Crop residue burning, low-grade industrial fuel, dense two-stroke traffic, persistent fog."
    },
    beijing: {
      name: "Beijing-Tianjin-Hebei, China",
      region: "North China Plain",
      baseAqi: 185,
      category: "Unhealthy",
      pm25: 120,
      pm10: 210,
      no2: 64,
      temperature: "-2°C",
      humidity: "48%",
      windSpeed: "7.5 km/h (Moderate NW)",
      inversionStatus: "Moderate Winter Boundary Inversion",
      peakSmogHours: [
        { hour: "06:00", pm25: 145, label: "Cold Morning Accumulation" },
        { hour: "09:00", pm25: 135, label: "Morning Rush" },
        { hour: "13:00", pm25: 95, label: "Wind Mixing Clearing" },
        { hour: "15:00", pm25: 90, label: "Optimal Ventilation Opportunity" },
        { hour: "19:00", pm25: 130, label: "Residential Heating Surge" },
        { hour: "22:00", pm25: 150, label: "Nocturnal Inversion Trap" }
      ],
      primarySources: "Regional coal district heating, industrial sintering, regional heavy freight corridors."
    },
    saltlake: {
      name: "Salt Lake City / Wasatch Basin, USA",
      region: "Intermountain West",
      baseAqi: 165,
      category: "Unhealthy for Sensitive Groups",
      pm25: 82,
      pm10: 110,
      no2: 45,
      temperature: "-4°C",
      humidity: "75%",
      windSpeed: "4.1 km/h (Basin Stagnation)",
      inversionStatus: "Classic Valley Inversion Cap Active",
      peakSmogHours: [
        { hour: "06:00", pm25: 90, label: "Valley Pool Stagnation" },
        { hour: "09:00", pm25: 95, label: "Commute Exhaust Accumulation" },
        { hour: "13:00", pm25: 70, label: "Weak Sun Thermal Lift" },
        { hour: "15:00", pm25: 68, label: "Highest Daily Ceiling" },
        { hour: "19:00", pm25: 88, label: "Cold Air Trapping Return" },
        { hour: "22:00", pm25: 94, label: "Overnight Bowl Saturation" }
      ],
      primarySources: "Topographical basin bowl, vehicle tailpipe cold-starts, domestic wood burning stoves."
    },
    centralvalley: {
      name: "San Joaquin / Central Valley, USA",
      region: "California Central Valley",
      baseAqi: 158,
      category: "Unhealthy for Sensitive Groups",
      pm25: 72,
      pm10: 105,
      no2: 38,
      temperature: "7°C",
      humidity: "88%",
      windSpeed: "3.5 km/h",
      inversionStatus: "Tule Fog Inversion Cap",
      peakSmogHours: [
        { hour: "06:00", pm25: 85, label: "Tule Fog + Biomass Stagnation" },
        { hour: "09:00", pm25: 80, label: "Highway 99 / I-5 Diesel Spike" },
        { hour: "13:00", pm25: 58, label: "Fog Burn-off Mixing" },
        { hour: "15:00", pm25: 55, label: "Relatively Clear Air Window" },
        { hour: "19:00", pm25: 75, label: "Wood Smoke Return" },
        { hour: "22:00", pm25: 82, label: "Overnight Inversion Lock" }
      ],
      primarySources: "Agricultural dust, diesel freight transport, residential wood fireplaces trapped under tule fog."
    }
  },

  // Vulnerability Profile Definitions & Personalized Thresholds
  vulnerabilityProfiles: {
    child_asthma: {
      id: "child_asthma",
      title: "Child / Asthmatic Member",
      icon: "Baby",
      badgeColor: "rose",
      safeAqiLimit: 50,
      warningAqiLimit: 100,
      dangerAqiLimit: 150,
      description: "Underdeveloped lung tissue, high respiration rate per kg body weight, hyper-reactive bronchial tubes.",
      primaryConcerns: "Nighttime coughing, bronchospasms, reduced lung capacity growth, wheezing during physical play.",
      keyDirectives: [
        "Strictly zero outdoor physical exertion above AQI 150 (PM2.5 > 55 µg/m³).",
        "Maintain bedroom PM2.5 below 15 µg/m³ throughout sleep via continuous low-decibel HEPA/Corsi-Rosenthal filtration.",
        "Equip with well-fitting pediatric N95 / KF94 masks for school transit; do not rely on standard loose cloth coverings.",
        "Ensure reliever inhaler (e.g., Albuterol/Salbutamol) is carried and spaced properly prior to stepping outdoors."
      ]
    },
    elderly_cardiac: {
      id: "elderly_cardiac",
      title: "Elderly / Cardiovascular Risk",
      icon: "HeartPulse",
      badgeColor: "amber",
      safeAqiLimit: 60,
      warningAqiLimit: 120,
      dangerAqiLimit: 175,
      description: "Fine PM2.5 translocates across alveolar-capillary membranes into bloodstream, inducing systemic arterial inflammation, blood pressure spikes, and stroke vulnerability.",
      primaryConcerns: "Arrhythmias, sudden blood pressure surges, microvascular thrombosis, COPD exacerbations.",
      keyDirectives: [
        "Avoid early morning outdoor walks when ground-level thermal inversions concentrate particulate matter below 20 meters.",
        "Monitor blood pressure and pulse oximeter twice daily during hazardous air episodes.",
        "Ensure airtight weatherstripping around bedroom and living room doors to block cold toxic infiltration.",
        "Schedule outdoor grocery or hospital visits strictly between 12:30 PM and 3:30 PM."
      ]
    },
    active_commuter: {
      id: "active_commuter",
      title: "Daily Urban Commuter",
      icon: "Navigation",
      badgeColor: "sky",
      safeAqiLimit: 100,
      warningAqiLimit: 200,
      dangerAqiLimit: 300,
      description: "Spends 1.5 - 3 hours daily in direct emission corridors (traffic jams, highway intersections, train stations).",
      primaryConcerns: "Direct inhalation of black carbon, ultra-fine toxic VOCs, heavy metal engine brake particulates.",
      keyDirectives: [
        "Set car air conditioning to 'Internal Air Recirculation' mode (cuts cabin PM2.5 by up to 85% compared to fresh intake in traffic).",
        "Replace worn cabin pollen filter with activated carbon + MERV/HEPA grade cabin filter every winter.",
        "If riding two-wheelers or walking, wear an airtight N95/FFP2 respirator with dual head straps for proper face seal.",
        "Shift commute 30 minutes earlier or later to bypass static gridlock idling hotspots."
      ]
    },
    general_family: {
      id: "general_family",
      title: "General Household & Healthy Adults",
      icon: "Users",
      badgeColor: "emerald",
      safeAqiLimit: 100,
      warningAqiLimit: 200,
      dangerAqiLimit: 300,
      description: "General urban family looking to minimize cumulative oxidative stress, maintain productivity, and protect household well-being.",
      primaryConcerns: "Sinus congestion, morning headache, eye burning, throat dryness, cumulative lung inflammation.",
      keyDirectives: [
        "Audit house draft seals around windows, balcony sliding doors, and kitchen exhaust flues.",
        "Ban all indoor incense, scented paraffin candles, and open wood/kerosene burning.",
        "Optimize ventilation strictly during afternoon solar convection windows when outdoor smog is lowest."
      ]
    }
  },

  // Indoor Air Quality (IAQ) Hacks Database
  iaqHacks: [
    {
      id: "corsi_rosenthal",
      title: "The DIY Corsi-Rosenthal Box Purifier",
      category: "Filtration",
      cost: "Low ($40 - $65 / ₹3,000 - ₹4,800)",
      cadr: "400 - 550 CFM (Exceeds $400 commercial purifiers)",
      effectiveness: "95% PM2.5 & Virus Removal",
      timeToBuild: "15 Minutes",
      materials: [
        "1x Standard 20\" Box Fan (3-speed)",
        "4x 20\"x20\"x2\" MERV-13 (or MERV-14) HVAC Filters",
        "Duct Tape or Heavy Painter's Tape",
        "Cardboard box base & circular fan shroud cutout"
      ],
      steps: [
        "Step 1: Form a cube with the 4 MERV-13 filters, ensuring the airflow arrows all point INWARD toward the center.",
        "Step 2: Seal all vertical corners between filters thoroughly with heavy duct tape to eliminate bypass leakage.",
        "Step 3: Tape the bottom cardboard square securely to close off the base.",
        "Step 4: Place the 20\" box fan on top, blowing UPWARD (exhausting clean air into the room). Tape perimeter securely.",
        "Step 5 (Crucial Hack): Cut a 14\"-16\" circular cardboard shroud and tape it to the front fan face. This prevents air backdraft at fan blade corners, boosting CADR by 35-40%!"
      ],
      physicsExplanation: "Because the total filter surface area is 4 times larger than a single filter, air velocity across the filter media drops dramatically. Lower face velocity increases particle capture efficiency and allows the fan motor to run cool with near-zero backpressure!"
    },
    {
      id: "positive_pressure",
      title: "The Positive Pressure Clean Room Sanctuary",
      category: "Airflow Physics",
      cost: "Free (using existing purifier)",
      cadr: "N/A (Building Physics)",
      effectiveness: "Blocks 90% Infiltration",
      timeToBuild: "5 Minutes",
      materials: ["Airtight bedroom", "1x Purifier", "Window intake sleeve or closed door seals"],
      steps: [
        "Designate one bedroom as the family's 'Clean Air Sanctuary' where vulnerable members sleep and gather.",
        "Seal door sweep gaps with a roll-up towel or silicone door draft stopper.",
        "Run the purifier inside this room. Because the air inside is continuously scrubbed and circulated, keep the door tightly closed.",
        "For homes with ducted fresh air: filter incoming fresh air through MERV-13, creating a slight positive pressure inside the room so air only leaks OUT through microscopic cracks, preventing toxic outside smog from seeping in."
      ],
      physicsExplanation: "Air naturally flows from areas of high pressure to low pressure. By creating clean positive displacement inside a sanctuary room, cold toxic smog cannot enter through window and door cracks."
    },
    {
      id: "thermal_bubble_seal",
      title: "Bubble-Wrap Window Thermal & Smog Film",
      category: "Draught Sealing",
      cost: "Minimal ($3 - $8)",
      cadr: "Prevents 40-70 µg/m³ seepage",
      effectiveness: "High Infiltration Block + 30% Heat Retention",
      timeToBuild: "10 Minutes per Window",
      materials: ["Standard packing bubble wrap (medium/large bubbles)", "Water spray bottle", "Utility knife"],
      steps: [
        "Mist the interior glass of your window pane lightly with water using the spray bottle.",
        "Press the flat side of the bubble wrap directly against the moist glass. Surface tension holds it firmly in place without sticky residue.",
        "Tape the outer edges of the bubble wrap sheet to the window frame with low-tack painter's tape to lock out cold smog draughts.",
        "Acts as a dual-pane thermal barrier (air pockets trap heat) and stops micro-drafts of particulate infiltration."
      ],
      physicsExplanation: "Cold window glass creates a descending convection current: cold air sinks along the glass, drawing chilly, smog-laden air through microscopic frame gaps into your living space. Bubble wrap breaks this convective loop."
    },
    {
      id: "exhaust_backdraft_stop",
      title: "Range Hood Exhaust & Backdraft Prevention",
      category: "Hazard Prevention",
      cost: "Zero",
      cadr: "Prevents 150+ µg/m³ Spikes",
      effectiveness: "Critical Safety",
      timeToBuild: "Immediate Habit",
      materials: ["Kitchen door", "Downwind window latch"],
      steps: [
        "High-powered kitchen exhaust chimneys expel up to 300-600 CFM of air outside.",
        "If all windows and doors are sealed tight, this creates severe negative pressure in your house, actively sucking toxic smog down fireplace flues and bathroom vents!",
        "Rule: While running kitchen exhaust during cooking, isolate the kitchen by closing its interior door, and crack open a small window slightly on the DOWNWIND side of the house to provide makeup air.",
        "Turn off the range hood 2 minutes after cooking ends; never leave it running continuously during smog days."
      ],
      physicsExplanation: "Every cubic foot of air pulled out by an exhaust fan MUST be replaced. Without a dedicated makeup air path, your house pulls replacement air from dirty cracks and combustion chimneys."
    },
    {
      id: "botanical_reality",
      title: "Indoor Botanical Allies (The Realistic Guide)",
      category: "Biological / IAQ",
      cost: "Moderate ($10 - $25)",
      cadr: "Low for PM2.5, Excellent for O2 & Humidity",
      effectiveness: "Psychological & Mild VOC Buffer",
      timeToBuild: "Weekend Project",
      materials: ["Snake Plant (Sansevieria)", "Areca Palm", "Spider Plant", "Pothos"],
      steps: [
        "Scientific Truth: Plants do NOT replace HEPA purifiers for fine PM2.5 smog removal. A typical room requires 10-20 plants per square meter to equal one small HEPA filter.",
        "Strategic Role 1: Snake Plants perform Crassulacean Acid Metabolism (CAM), meaning they absorb CO2 and release Oxygen at NIGHT, making them ideal for sealed bedrooms where CO2 accumulates.",
        "Strategic Role 2: Areca Palms act as natural winter humidifiers, maintaining 45-55% relative humidity which keeps human nasal cilia moist and prevents airborne particles from hanging suspended."
      ],
      physicsExplanation: "Dry winter heating dries out nasal mucous membranes, disabling human respiratory defense mechanisms. Optimal humidity (40-50%) accelerates particulate agglomeration (particles stick together and drop out of breathing zone)."
    }
  ],

  // Sustainable Alternatives & Direct Quantified Impact Data
  sustainableAlternatives: [
    {
      id: "commute_shift",
      title: "Metro / Electric Transit vs. Cold-Start Solo Vehicle Commute",
      category: "Transportation",
      action: "Switch a 15 km daily commute from private petrol/diesel car to Metro or Carpool",
      personalHealthImpact: {
        pm25AvoidedPerDay: "145 µg inhaled dose avoided",
        cigaretteEquivalent: "Equivalent to not smoking 1.8 cigarettes today",
        stressReduction: "High (bypasses heavy road-level black carbon exposure)"
      },
      communityAirshedImpact: {
        tailpipePm25Saved: "8.4 grams of toxic PM2.5 prevented from local air",
        co2eSaved: "4.2 kg CO2e emissions eliminated per trip",
        nitrogenOxidesSaved: "14.5 grams NOx avoided"
      },
      communityMultiplier500: "Over a 30-day winter smog period, 500 commuting families save 126 kg of direct ground PM2.5 and 63 metric tons of CO2e!"
    },
    {
      id: "heating_retrofit",
      title: "Thermal Curtains + Heat Pump vs. Open Biomass / Kerosene Fire",
      category: "Domestic Heating",
      action: "Replace open wood/biomass fire or unvented kerosene heater with insulated thermal curtains and electric heat pump",
      personalHealthImpact: {
        pm25AvoidedPerDay: "580 µg indoor lung deposition avoided",
        cigaretteEquivalent: "Equivalent to avoiding 7.2 passive cigarettes in your living room",
        carbonMonoxideRisk: "100% elimination of indoor CO and benzene poisoning hazard"
      },
      communityAirshedImpact: {
        tailpipePm25Saved: "45 grams of heavy smoke particulate prevented daily",
        co2eSaved: "12.8 kg CO2e prevented per household daily",
        nitrogenOxidesSaved: "32 grams NOx spared"
      },
      communityMultiplier500: "500 households eliminating winter biomass heating prevents 675 kg of direct lung-damaging particulates in one month!"
    },
    {
      id: "community_compost",
      title: "Neighborhood Bio-Composting vs. Winter Leaf & Waste Burning",
      category: "Waste Management",
      action: "Coordinate neighborhood dry leaf & pruning composting bins instead of burning garden waste in streets",
      personalHealthImpact: {
        pm25AvoidedPerDay: "Street-level PM2.5 drops by 65-120 µg/m³ along walking pathways",
        cigaretteEquivalent: "Children walking to bus stops avoid severe throat stinging",
        carcinogenAvoidance: "Zero release of toxic dioxins, PAHs, and furans"
      },
      communityAirshedImpact: {
        tailpipePm25Saved: "120 grams PM2.5 prevented per compost pile",
        co2eSaved: "85 kg CO2e and organic soil nutrients preserved",
        nitrogenOxidesSaved: "48 grams toxic nitrogen compounds"
      },
      communityMultiplier500: "A community-wide ban on open burning cuts ambient peak smog spikes by up to 22% during evening temperature inversions!"
    },
    {
      id: "school_carpool",
      title: "Coordinated School Route Carpooling (4 Families / Vehicle)",
      category: "Community Action",
      action: "Combine 4 individual school vehicle drop-offs into 1 shared electric or fuel-efficient van",
      personalHealthImpact: {
        pm25AvoidedPerDay: "School entrance idle pollution cut by 75%",
        cigaretteEquivalent: "Prevents children inhaling concentrated cold-exhaust plumes",
        transitSafety: "Reduces school gate traffic congestion by 70%"
      },
      communityAirshedImpact: {
        tailpipePm25Saved: "16.8 grams PM2.5 prevented at school perimeter daily",
        co2eSaved: "9.6 kg CO2e saved daily per carpool cluster",
        nitrogenOxidesSaved: "28 grams NOx prevented"
      },
      communityMultiplier500: "Creating 50 school carpools removes 150 idling cold engines from school zones every morning!"
    }
  ],

  // Corsi-Rosenthal Fan & Filter Physics Parameters
  cadrPhysics: {
    filterRatings: {
      "merv11": { name: "MERV 11", efficiencyPm25: 0.65, resistanceMultiplier: 0.85 },
      "merv13": { name: "MERV 13 (Gold Standard for Smog)", efficiencyPm25: 0.85, resistanceMultiplier: 1.0 },
      "merv14": { name: "MERV 14", efficiencyPm25: 0.90, resistanceMultiplier: 1.15 },
      "hepa13": { name: "True HEPA H13", efficiencyPm25: 0.9997, resistanceMultiplier: 2.2 }
    },
    fanRatings: {
      "box_20": { name: "20\" Standard Box Fan (e.g., Lasko/Havells)", nominalCfm: 1800, actualLoadedCfm: 650, watts: 55, dBA: 52 },
      "box_premium": { name: "High-Efficiency EC Motor Box Fan", nominalCfm: 2100, actualLoadedCfm: 820, watts: 38, dBA: 46 },
      "pc_fan_array": { name: "Silent 140mm PC Fan Array (9x Noctua/Arctic)", nominalCfm: 600, actualLoadedCfm: 450, watts: 18, dBA: 32 }
    }
  },

  // Built-in GenAI Pre-Trained Domain Prompts & Responses
  aiEngine: {
    defaultSystemPrompt: `You are AIR QUALITY, an expert GenAI assistant specialized in winter smog defense, indoor air quality (IAQ) engineering, respiratory protection, and community emission reduction. You provide actionable, empathetic, physics-grounded guidance tailored to family vulnerabilities and urban locations. Always format responses clearly with key actions, direct health rationale, and quantified impacts.`,

    presets: [
      {
        question: "How do I optimize my family's routine during severe winter smog?",
        response: `### 🗓️ Optimized Daily Routine for Severe Winter Smog

During severe winter smog (AQI 300+), ground-level thermal inversions trap toxic pollutants close to the earth during early mornings and late evenings. Here is your science-backed daily defense schedule:

1. **06:00 - 09:30 AM (Extreme Inversion Peak - STRICT INDOOR LOCKDOWN)**
   * **Hazard:** Calm wind and nocturnal cold air pools concentrate PM2.5 and diesel exhaust below 20 meters.
   * **Action:** Keep all windows closed. Do NOT go for outdoor walks or runs. Run bedroom and living room air purifiers on medium-high.
   * **Vulnerable Members:** Keep children and seniors indoors. Ensure any school transit is done with a tightly sealed N95/KF94 mask.

2. **11:30 AM - 03:00 PM (Solar Convection Window - SAFEST FOR ERRANDS)**
   * **Opportunity:** Solar heating warms the ground, breaking the inversion cap and dispersing pollutants upward (PM2.5 typically drops by 35-50%).
   * **Action:** Conduct essential outdoor errands, groceries, or doctor visits now. If indoor air feels stuffy (CO2 > 1200 ppm), perform a rapid 10-minute 'burst ventilation' from an upwind window while running purifiers on high.

3. **05:30 - 09:30 PM (Evening Traffic & Ground Inversion - RE-SEAL)**
   * **Hazard:** Rapid evening cooling traps evening rush hour exhaust and wood/biomass heating smoke at head height.
   * **Action:** Seal exterior doors with draft stoppers. Avoid frying or grilling foods that emit indoor ultra-fines; use boiled, baked, or pressure-cooked meals. Turn on bedroom purifiers 45 minutes prior to bedtime.`
      },
      {
        question: "How can I build a cheap DIY air purifier that actually works?",
        response: `### 🛠️ The DIY Corsi-Rosenthal Box Purifier (C-R Box)

The Corsi-Rosenthal Box is a scientifically validated air cleaner tested by UC Davis, EPA, and MIT. It costs **$45 - $60** and delivers a Clean Air Delivery Rate (CADR) of over **500 CFM**, outperforming commercial purifiers costing $400+.

#### 📦 Materials Needed:
1. **1x 20-inch Box Fan** (e.g., Lasko 20" or equivalent)
2. **4x MERV-13 HVAC Filters** (20" x 20" x 1" or ideally 2" thickness)
3. **1x Cardboard Box bottom** (20" x 20")
4. **Duct Tape** (Heavy duty)

#### 🔨 Step-by-Step Instructions:
1. **Build the Filter Cube:** Arrange the 4 filters in a square box with the **airflow arrows on the filter frames pointing INWARD** toward the center.
2. **Tape the Edges:** Tape all 4 vertical joints thoroughly so dirty air cannot bypass the filter media.
3. **Seal the Bottom:** Tape the cardboard square to the bottom of the cube.
4. **Attach the Fan:** Place the 20" box fan on top, blowing **UPWARD** (pulling air through the filters and exhausting clean air into the ceiling). Tape all four edges securely.
5. **The Secret Hack (Cardboard Shroud):** Cut a cardboard donut with a 15-inch round hole and tape it over the front face of the fan. 
   * *Why?* Box fan blades create reverse vortex airflow in the corners. The shroud blocks reverse leakage and **increases clean air delivery by 40%!**

*Estimated Room PM2.5 Clearance:* Drops an 800 sq ft room's PM2.5 from 300 µg/m³ to under 15 µg/m³ in under 22 minutes.`
      },
      {
        question: "My child has mild asthma. What specific precautions should we take?",
        response: `### 🛡️ Asthma & Pediatric Defense Plan for Severe Smog

Children breathe **50% more air per pound of body weight** than adults, and their narrower airway passages inflame rapidly under fine PM2.5 exposure.

#### 1. Clinical Precautions:
* **Pre-Exertion Inhaler:** Consult your pediatrician about taking a prophylactic dose of reliever inhaler (e.g., Albuterol/Salbutamol) 15 minutes before any unavoidable outdoor transit.
* **Peak Flow Monitoring:** Measure morning and evening Peak Expiratory Flow (PEF). A drop of >15% signals early airway inflammation before wheezing starts.

#### 2. Bedroom Micro-Sanctuary:
* The bedroom MUST be maintained below **12 µg/m³ PM2.5**. Run a HEPA or Corsi-Rosenthal purifier on low 24/7.
* Place a damp towel or draft stopper under the bedroom door.
* Keep humidity between **40% and 50%**. Cold, dry air irritates hyper-reactive bronchial spasms.

#### 3. School Transit Protocol:
* Never use loose cloth or surgical masks—they allow >70% edge leakage. Use an authentic pediatric-certified **KF94 or N95** with an adjustable nose wire.
* Request the school administration to suspend morning outdoor assemblies and physical education during AQI > 200 days.`
      },
      {
        question: "What is the direct impact if our community stops burning dry leaves and trash?",
        response: `### 🌍 Direct Impact of Ending Leaf & Trash Burning

Open burning of biomass and residential waste during winter is one of the most toxic ground-level smog accelerators because it occurs at 0 meters altitude (breathing level) and releases heavy polycyclic aromatic hydrocarbons (PAHs).

#### 📊 Direct Quantified Impact for 1 Neighborhood (500 Households):
1. **Direct Particulate Spared:** Prevents **65 to 130 kg of direct PM2.5** from saturating your local neighborhood streets every month.
2. **Toxic Chemical Elimination:** Eliminates direct inhalation of **dioxins, acrolein, and carbon monoxide** that trigger immediate pediatric asthma emergencies.
3. **Local Air Improvement:** Studies show community burn bans lower ambient neighborhood nighttime PM2.5 spikes by **25% to 38%**.
4. **Sustainable Alternative:** Establish 3 community bio-compost enclosures. Leaves break down over 90 days into rich organic humus for community gardens, sequestering carbon rather than emitting it.`
      }
    ]
  }
};

// Export to global window scope for modular access in browser
if (typeof window !== "undefined") {
  window.AIR_QUALITY_DATA = AIR_QUALITY_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = AIR_QUALITY_DATA;
}
