const isEmpty = function(value) {
  if (value === null || value === undefined || value === "") {
    return true;
  }

  if (Array.isArray(value)) {
    return value.every(isEmpty);
  } else if (typeof value === "object") {
    return Object.values(value).every(isEmpty);
  }

  return false;
};

const permuter = {
  secondaryMasterworkHashMap: {
    178753455: 758092021, // reload -> reload speed
    654849177: 1154004463, // velocity -> velocity
    915325363: 1431498388, // charge time + impact
    1431498388: 1639384016, // draw time + charge time
    186337601: 2357520979, // handling -> handling
    684616255: 2697220197, // range -> range
    384158423: 2942552113, // stability -> stability
    2674077375: 2993547493, // accuracy -> accuracy
    1431498388: 3128594062, // charge time + impact -> ct + i
    915325363: 3128594062, // charge time + impact -> ct + i,
    3130025796: 3833978555, // arc damage resistance -> adr
    1576279482: 3870201881 // void damage resistance -> vdr
  },
  masterworkHashMap: {
    Accuracy: 2674077375,
    "Arc Damage Resistance": 3130025796,
    "Blast Radius": 3444329767,
    "Charge Time": 1431498388,
    "Draw Time": 1639384016,
    Handling: 186337601,
    "Heroic Resistance": 2572873169,
    Impact: 915325363,
    Range: 684616255,
    Reload: 178753455,
    "Solar Damage Resistance": 383171816,
    Stability: 384158423,
    Velocity: 654849177,
    "Void Damage Resistance": 1576279482
  },
  secondaryHashMap: {
    1683379515: 3871884143, // disruption break (it's a barrel and a trait)
    599007201: 1180618054, // enduring guard
    2117683199: 4267945040, // full auto trigger system
    3337692349: 3513791699, // mulligan
    1168162263: 3124871000, // outlaw
    806159697: 2360754333, // trench barrel (barrel -> trait)
    332773068: 1478423395 // volatile launch
  },
  nameHashMap: {
    "50VAL Telescopic": 767484757,
    "Accelerated Coils": 689005463,
    "Accurized Rounds": 3142289711,
    "Agile Bowstring": 3768438372,
    "Alloy Casing": 2985827016,
    "Alloy Mag": 1431678320,
    Alloy Magazine: 1431678320,
    "Ambitious Assassin": 2010801679,
    "Appended Mag": 1087426260,
    "Archer's Gambit": 3414324643,
    "Archer's Tempo": 201365942,
    "Armor-Piercing Rounds": 1968497646,
    "Arrowhead Brake": 839105230,
    "Assassin's Blade": 354401740,
    "Assault Mag": 791862061,
    "ATA Scout": 893526892,
    "ATC Rex": 893526893,
    "ATD Raptor": 893526895,
    "Augmented Drum": 1771897777,
    "Auto Loading Holster": 3300816228,
    "Auto-Loading Holster": 3300816228,
    "Backup Plan": 1600092898,
    "Balanced Guard": 52780822,
    "Barrel Shroud": 1300023272,
    "Black Powder": 1996142143,
    "Blinding Grenades": 3032599245,
    "Box Breathing": 2551157718,
    Breakthrough: 4190643473,
    "Burst Guard": 3625355092,
    "Candle PS": 1409978309,
    "Carbon Arrow Shaft": 2154191829,
    Celerity: 1264398905,
    "Chambered Compensator": 3661387068,
    "Cleanshot IS": 13792279,
    "Clown Cartridge": 2284787283,
    "Cluster Bomb": 1275731761,
    "Compact Arrow Shaft": 16392701,
    "Concussion Grenades": 1716000303,
    "Confined Launch": 1844523823,
    "Control SAS": 445755706,
    "Corkscrew Rifling": 4090651448,
    Counterattack: 3016987351,
    Countermass: 3809316345,
    "Crossfire HCS": 1926090090,
    Demolitionist: 3523296417,
    Dragonfly: 2848615171,
    "Disruption Break": 1683379515,
    "Drop Mag": 4134353779,
    "Dusk Dot D1": 1452368634,
    "Dusk Sight D1": 1288081798,
    "Dynamic Charge": 127335543,
    "Dynamic Sway Reduction": 1359896290,
    "Elastic String": 2801223209,
    "Elemental Capacitor": 3511092054,
    "En Garde": 1685431615,
    "Enhanced Battery": 2680121939,
    "Enduring Blade": 1261178282,
    "Enduring Guard": 599007201,
    "Energy Transfer": 2030760728,
    "Extended Barrel": 1467527085,
    "Extended Mag": 2420895100,
    "Explosive Head": 3365897133,
    "Explosive Light": 3194351027,
    "Explosive Payload": 3038247973,
    "Eye of the Storm": 699525795,
    "FarPoint SAS": 445755710,
    "Fastdraw HCS": 1926090094,
    "Feeding Frenzy": 2779035018,
    "Fiberglass Arrow Shaft": 3429800428,
    "Field Prep": 2869569095,
    "Firing Line": 1771339417,
    "Firmly Planted": 280464955,
    "Flared Magwell": 3230963543,
    "Flash Counter": 2244851822,
    "Flash HS5": 1628165637,
    "Flexible String": 4067834857,
    "Fluted Barrel": 1840239774,
    "Fourth Time's the Charm": 1354429876,
    "Full Auto Trigger System": 2117683199,
    "Full Bore": 202670084,
    "Full Choke": 1047830412,
    "Full Court": 2888557110,
    "GA Post": 87986589,
    "GB Iron": 87986588,
    Genesis: 3096702027,
    "Grave Robber": 1631667848,
    "Hammer Forged Rifling": 3250034553,
    "Hammer-Forged Rifling": 3250034553,
    "Hard Launch": 981914802,
    Headseeker: 460017080,
    "Heavy Guard": 2349202967,
    "Helical Fletching": 3311977193,
    "High Tension String": 3371775011,
    "High-Caliber Rounds": 1561002382,
    "High-Explosive Ordnance": 1380253176,
    "High-Impact Reserves": 2213355989,
    "High Velocity Rounds": 2822142346,
    "High-Velocity Rounds": 2822142346,
    "Hip-Fire Grip": 1866048759,
    "Hitmark HCS": 1926090093,
    "HitMark HCS": 1926090093,
    "Hitmark IS": 13792278,
    "Honed Edge": 2827049491,
    "Hungry Edge": 436053704,
    "Impact Casing": 3796465595,
    "Implosion Rounds": 3492396210,
    "Impulse MS3": 194952922,
    "Ionized Battery": 1483536627,
    "IS 2 Classic": 2209280307,
    "IS 5 Circle": 2209280306,
    "Jagged Edge": 3666208348,
    "Kill Clip": 1015611457,
    "Killing Tally": 2782457288,
    Killing Wind: 2450788523,
    "King Dot K2": 1452368633,
    "King Sight K1": 1288081797,
    "Lead from Gold": 1556840489,
    "Light Mag": 679225683,
    "Linear Compensator": 1441682018,
    "Liquid Coils": 1687452232,
    "Master of Arms": 3081867624,
    "Mechanized Autoloader": 1178686995,
    Meganeura: 1941225610,
    "Meyrin RDL": 3433396027,
    "Meyrin RDS": 3433396026,
    "Micro-Missile": 3713839994,
    "Mini Frags": 332133599,
    "Model 6 Loop": 663495155,
    "Model 8 Red": 663495154,
    "Moving Target": 588594999,
    Mulligan: 3337692349,
    "Multikill Clip": 2458213969,
    "Natural Fletching": 1500996326,
    "Natural String": 1784898267,
    "No Distractions": 2866798147,
    "One-Two Punch": 2679249093,
    Onslaught: 95528736,
    "Opening Shot": 47981717,
    Osmosis: 1774574192,
    Outlaw: 1168162263,
    Overflow: 3643424744,
    "Particle Repeater": 3868766766,
    "Polygonal Rifling": 1392496348,
    "Polymer String": 852209214,
    "Projection Fuse": 2969185026,
    "Proximity Grenades": 409831596,
    "Pulse Monitor": 972757866,
    Pyrogenesis: 1059301209,
    "Quick Launch": 3525010810,
    "Quickdot SAS": 445755707,
    "QuickDot SAS": 445755707,
    Quickdraw: 706527188,
    "Quickdraw IS": 2410284311,
    Rampage: 3425386926,
    Rangefinder: 2846385770,
    "Rapid Hit": 247725512,
    "Rasmussen ISA": 1096957638,
    "Red Dot Micro": 2405638014,
    "Red Dot 2 MOA": 2405638015,
    "Relentless Strikes": 1749209109,
    "Reservoir Burst": 1427256713,
    "Reversal of Fortune": 136456835,
    "Ricochet Rounds": 1885400500,
    "Rifled Barrel": 1332244541,
    "SC Holo": 2054312700,
    "Shattering Blade": 818211479,
    "Shield Disorient": 3275789089,
    "Shortspec SAS": 445755705,
    "Signal MS5": 194952923,
    Slideshot: 3161816588,
    Slideways: 2039302152,
    "SLO-10 Post": 965619223,
    "SLO-12 Post": 965619221,
    "SLO-21 Post": 965619220,
    Smallbore: 1482024992,
    "Smart Drift Control": 3798852852,
    "Snapshot Sights": 957782887,
    "Sneak Bow": 908147344,
    "Spark PS": 1409978308,
    "Spike Grenades": 3301904089,
    "SPO-26 Front": 3151536503,
    "SPO-28 Front": 3151536500,
    "SPO-57 Front": 3151536501,
    "SRO-37 Ocular": 360593483,
    "SRO-41 Ocular": 360593482,
    "SRO-52 Ocular": 360593481,
    "Steady Rounds": 3177308360,
    "Steadyhand HCS": 1926090095,
    "SteadyHand HCS": 1926090095,
    "Sticky Grenades": 3373736292,
    "Straight Fletching": 3827198035,
    Subsistence: 1820235745,
    "Sureshot HCS": 1926090091,
    Surrounded: 3708227201,
    Swashbuckler: 4082225868,
    "Swordmaster's Guard": 269888150,
    Sympathetic Arsenal: 3350417888,
    "Tactic SAS": 445755704,
    "Tactical Mag": 106909392,
    "Tactile String": 1196733167,
    "Tap the Trigger": 1890422124,
    "Target SAS": 445755711,
    "Tempered Edge": 938542991,
    "Threat Detector": 4071163871,
    "Timed Payload": 1954620775,
    "Tireless Blade": 2590710093,
    "Torch HS3": 1628165636,
    "Tracking Module": 3977735242,
    "Trench Barrel": 806159697,
    "Triple Tap": 3400784728,
    "Truesight HCS": 1926090092,
    "TrueSight HCS": 1926090092,
    "Under Pressure": 1645158859,
    Underdog: 205890336,
    Unrelenting: 3108830275,
    "Volatile Launch": 332773068,
    "Vorpal Weapon": 1546637391,
    "Whirlwind Blade": 3913600130,
    "Wolf Dot W2": 1452368632,
    "Wolf Sight W1": 1288081796,
    "Zen Moment": 2387244414
  },
  initEvents: function() {
    $("#generatePermutations").click(() => {
      this.generatePermutations();
    });
  },
  init: function() {
    this.initEvents();
  },
  arrayHasValues: function(arrayToCheck) {
    return arrayToCheck.length > 0;
  },
  optionallyTranslateNameToHash: function(value) {
    if (!value || !value.length) {
      return value;
    }

    if (isNaN(value)) {
      const hashValue = this.nameHashMap[value];

      if (isNaN(hashValue)) {
        $("#dimWishListContent").val(
          `${value} is not a number and doesn't resemble a known hash.`
        );
        throw "";
      }

      return hashValue.toString();
    }

    return value;
  },
  addSecondaryHashValue: function(perkArray) {
    const alsoKnownAsValues = perkArray
      .map(v => this.secondaryHashMap[v])
      .filter(v => !isNaN(v))
      .map(v => v.toString());

    perkArray.push(...alsoKnownAsValues);
  },
  getPerkArray: function(perkString) {
    if (!perkString) {
      return [""];
    }

    if (perkString.match(/[a-z]/i)) {
      const perkArray = this.splitOnDelimiters(perkString)
        .map(v => v.trim())
        .filter(v => v.length > 1)
        .map(v => this.optionallyTranslateNameToHash(v));

      this.addSecondaryHashValue(perkArray);

      return perkArray
        .map((v) => Number(v));
    }

    return perkString.trim().split(" ");
  },
  optionallyTranslateMasterworkToHash: function(value) {
    if (!value || !value.length) {
      return value;
    }

    if (isNaN(value)) {
      const hashValue = this.masterworkHashMap[value];

      if (isNaN(hashValue)) {
        $("#dimWishListContent").val(
          `${value} is not a number and doesn't resemble a known masterwork hash.`
        );
        throw "";
      }

      return hashValue.toString();
    }

    return value;
  },
  addSecondaryMasterworkHashValue: function(masterworkArray) {
    const masterworkAlsoKnownAsValues = masterworkArray
      .map(v => this.secondaryMasterworkHashMap[v])
      .filter(v => !isNaN(v))
      .map(v => v.toString());

    masterworkArray.push(...masterworkAlsoKnownAsValues);
  },
  getMasterworkPerkArray: function(masterworkString) {
    if (!masterworkString) {
      return [""];
    }

    if (masterworkString.match(/[a-z]/i)) {
      const masterworkArray = this.splitOnDelimiters(masterworkString
        .replace("or", ","))
        .map(v => v.trim())
        .filter(v => v.length > 1)
        .map(v => this.optionallyTranslateMasterworkToHash(v));

      this.addSecondaryMasterworkHashValue(masterworkArray);

      return masterworkArray;
    }

    return masterworkString.trim().split(" ");
  },
  normalizeTag: function(tag) {
    switch(tag)
    {
      case "pvp":
        return "PvP";
      case "pve":
        return "PvE";
      case "controller":
        return "Controller";
      case "mkb":
        return "M+KB";
      case "dps":
        return "DPS";
      default:
        return `??? ${tag} ???`;
    }
  },
  tagsToNotesPrefix: function(tags) {
    const normalizedTags = this.splitOnDelimiters(tags)
      .map(this.normalizeTag);

    return ` (${normalizedTags
      .filter(t => t)
      .join(" / ")}): `;
  },
  getNotes: function(tags) {
    const baseNotes = $("#itemNotes").val();
    const reviewer = $("#reviewer").val();
    const tagsPrefixed = this.tagsToNotesPrefix(tags);

    const commentedTags = this.getCommentedTags(tags);

    return baseNotes ? `//notes:${reviewer}${tagsPrefixed}${baseNotes}${commentedTags}` : "";
  },
  splitOnDelimiters: function(inputString) {
    return inputString.split(/\,|\//);
  },
  getTags: function() {
    const tagsString = $("#tags").val();

    if (!tagsString) {
      return "";
    }

    return this.splitOnDelimiters(tagsString)      
      .map(v => v.trim())
      .filter(v => v.length > 1)
      .join(",");
  },
  getCommentedTags: function(tags, forLineLevel) {
    if (!tags) {
      return "";
    }

    return forLineLevel ? `#notes:|tags:${tags}` : `|tags:${tags}`;
  },
  getUnformattedNotes: function() {
    const baseNotes = $("#itemNotes").val();

    return baseNotes ? baseNotes : "";
  },
  replacer(key, value) {
    return isEmpty(value) ? undefined : value;
  },
  generatePermutations: function() {
    const itemId = Number($("#itemId")
      .val()
      .trim());

    const itemName = $("#itemName")
      .val()
      .trim();

    const slotOneValues = this.getPerkArray($("#slotOnePerks").val());

    if (!itemId) {
      $("#dimWishListContent").val(
        "You need to enter the item ID, a wildcard, or a category hash ID."
      );
      return;
    }

    if (!this.arrayHasValues(slotOneValues)) {
      $("#dimWishListContent").val("You need to select at least one perk.");
      return;
    }

    const slotTwoValues = this.getPerkArray($("#slotTwoPerks").val());

    const slotThreeValues = this.getPerkArray($("#slotThreePerks").val());

    const slotFourValues = this.getPerkArray($("#slotFourPerks").val());

    const masterworkPerkValues = this.getMasterworkPerkArray(
      $("#masterworkPerks").val()
    );

    const tags = this.getTags();
    const blockNotes = this.getNotes(tags);
    const commentedTags = this.getCommentedTags(tags, true);

    const generatedPermutations = [];

    if (itemName) {
      const itemHeader = `// ${itemName}`;
      generatedPermutations.push(itemHeader);
    }

    if (blockNotes) {
      generatedPermutations.push(blockNotes);
    }

    masterworkPerkValues.forEach(sv => {
      slotFourValues.forEach(so => {
        slotThreeValues.forEach(sh => {
          slotTwoValues.forEach(sw => {
            slotOneValues.forEach(sn => {
              const perkString = [sn, sw, sh, so, sv]
                .filter(v => v)
                .join(",");

              if (!blockNotes) {
                generatedPermutations.push(
                  `dimwishlist:item=${itemId}&perks=${perkString}${commentedTags}`
                );
              } else {
                generatedPermutations.push(
                  `dimwishlist:item=${itemId}&perks=${perkString}`
                );
              }
            });
          });
        });
      });
    });

    const notes = this.getUnformattedNotes();

    const jsonItem = {
      itemName,
      itemId,
      slotOneValues,
      slotTwoValues,
      slotThreeValues,
      slotFourValues,
      masterworkPerkValues,
      notes,
      tags
    };

    generatedPermutations.push("");
    generatedPermutations.push("");
    generatedPermutations.push(`${JSON.stringify(jsonItem, this.replacer)},`);

    generatedPermutations.push("");
    generatedPermutations.push("");

    $("#dimWishListContent").val(generatedPermutations.join("\n"));
  }
};
