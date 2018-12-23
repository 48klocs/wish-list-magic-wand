const permuter = {
  secondaryHashMap: {
    599007201: 1180618054, // enduring guard
    2117683199: 4267945040, // full auto trigger system
    1168162263: 3124871000, // outlaw
    332773068: 1478423395 // volatile launch
  },
  nameHashMap: {
    "Accurized Rounds": 3142289711,
    "Alloy Casing": 2985827016,
    "Alloy Mag": 1431678320,
    "Ambitious Assassin": 2010801679,
    "Appended Mag": 1087426260,
    "Archer's Tempo": 201365942,
    "Arrowhead Brake": 839105230,
    "Assassin's Blade": 354401740,
    "Assault Mag": 791862061,
    "ATA Scout": 893526892,
    "ATC Rex": 893526893,
    "Auto-Loading Holster": 3300816228,
    "Balanced Guard": 52780822,
    "Black Powder": 199614214,
    "Blinding Grenades": 3032599245,
    "Box Breathing": 2551157718,
    "Carbon Arrow Shaft": 2154191829,
    "Chambered Compensator": 3661387068,
    "Cleanshot IS": 13792279,
    "Cluster Bomb": 1275731761,
    "Compact Arrow Shaft": 16392701,
    "Concussion Grenades": 1716000303,
    "Control SAS": 445755706,
    "Corkscrew Rifling": 4090651448,
    Countermass: 3809316345,
    "Crossfire HCS": 1926090090,
    Dragonfly: 2848615171,
    "Drop Mag": 4134353779,
    "Dusk Dot D1": 1452368634,
    "Dusk Sight D1": 1288081798,
    "Dynamic Sway Reduction": 1359896290,
    "Elastic String": 2801223209,
    "Enhanced Battery": 2680121939,
    "Enduring Guard": 599007201,
    "Extended Barrel": 1467527085,
    "Extended Mag": 2420895100,
    "Explosive Head": 3365897133,
    "Explosive Payload": 3038247973,
    "Fastdraw HCS": 1926090094,
    "Feeding Frenzy": 2779035018,
    "Fiberglass Arrow Shaft": 3429800428,
    "Field Prep": 2869569095,
    "Firmly Planted": 280464955,
    "Flared Magwell": 3230963543,
    "Flash HS5": 162816563,
    "Flexible String": 4067834857,
    "Fluted Barrel": 1840239774,
    "Fourth Time's the Charm": 1354429876,
    "Full Auto Trigger System": 2117683199,
    "Full Bore": 202670084,
    "Full Choke": 104783041,
    "GA Post": 87986589,
    "GB Iron": 87986588,
    Genesis: 3096702027,
    "Grave Robber": 1631667848,
    "Hammer-Forged Rifling": 3250034553,
    "Heavy Guard": 2349202967,
    "High Tension String": 3371775011,
    "High-Caliber Rounds": 1561002382,
    "High-Explosive Ordnance": 1380253176,
    "High-Impact Reserves": 2213355989,
    "High-Velocity Rounds": 2822142346,
    "Hip-Fire Grip": 1866048759,
    "HitMark HCS": 1926090093,
    "Hitmark IS": 13792278,
    "Honed Edge": 2827049491,
    "Hungry Edge": 436053704,
    "IS 2 Classic": 2209280307,
    "Kill Clip": 1015611457,
    "King Dot K2": 1452368633,
    "King Sight K1": 1288081797,
    "Light Mag": 679225683,
    "Linear Compensator": 1441682018,
    "Model 8 Red": 663495154,
    "Natural String": 1784898267,
    Onslaught: 95528736,
    "Opening Shot": 47981717,
    Outlaw: 1168162263,
    "Polygonal Rifling": 1392496348,
    "Polymer String": 852209214,
    "Proximity Grenades": 409831596,
    "Pulse Monitor": 972757866,
    "Quick Launch": 3525010810,
    Quickdraw: 706527188,
    "Quickdraw IS": 2410284311,
    Rampage: 3425386926,
    Rangefinder: 2846385770,
    "Rapid Hit": 247725512,
    "Red Dot Micro": 240563801,
    "Red Dot 2 MOA": 2405638015,
    "Relentless Strikes": 1749209109,
    "Ricochet Rounds": 1885400500,
    "Rifled Barrel": 1332244541,
    "SC Holo": 2054312700,
    "Shortspec SAS": 445755705,
    Slideshot: 3161816588,
    Smallbore: 1482024992,
    "Snapshot Sights": 957782887,
    "Spike Grenades": 3301904089,
    "Steady Rounds": 3177308360,
    "SteadyHand HCS": 1926090095,
    "Sureshot HCS": 1926090091,
    "Tactical Mag": 106909392,
    "Tactile String": 1196733167,
    "Tap the Trigger": 1890422124,
    "Target SAS": 445755711,
    "Tempered Edge": 938542991,
    "Threat Detector": 4071163871,
    "Tireless Blade": 2590710093,
    "Torch HS3": 162816563,
    "Tracking Module": 3977735242,
    "Triple Tap": 3400784728,
    "TrueSight HCS": 1926090092,
    "Under Pressure": 1645158859,
    "Volatile Launch": 332773068,
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
    return arrayToCheck.some(v => v.length > 0);
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
  getInitialPerkArray: function(perkString) {
    if (perkString.match(/[a-z]/i)) {
      const perkArray = perkString
        .split(/\,|\//)
        .map(v => v.trim())
        .filter(v => v.length > 1)
        .map(v => this.optionallyTranslateNameToHash(v));

      this.addSecondaryHashValue(perkArray);

      return perkArray;
    }

    return perkString.trim().split(" ");
  },
  generatePermutations: function() {
    const itemId = $("#itemId")
      .val()
      .trim();

    const slotOneValues = this.getInitialPerkArray($("#slotOnePerks").val());

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

    const slotTwoValues = this.getInitialPerkArray($("#slotTwoPerks").val());

    const slotThreeValues = this.getInitialPerkArray(
      $("#slotThreePerks").val()
    );

    const slotFourValues = this.getInitialPerkArray($("#slotFourPerks").val());

    const slotFiveValues = this.getInitialPerkArray($("#slotFivePerks").val());

    const generatedPermutations = [];

    slotFiveValues.forEach(sv => {
      slotFourValues.forEach(so => {
        slotThreeValues.forEach(sh => {
          slotTwoValues.forEach(sw => {
            slotOneValues.forEach(sn => {
              const perkString = [sn, sw, sh, so, sv]
                .map(v => v.trim())
                .filter(v => v && v !== "")
                .join(",");

              generatedPermutations.push(
                `dimwishlist:item=${itemId}&perks=${perkString}`
              );
            });
          });
        });
      });
    });

    $("#dimWishListContent").val(generatedPermutations.join("\n"));
  }
};
