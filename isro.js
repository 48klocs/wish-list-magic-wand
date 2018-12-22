const permuter = {
  nameHashMap: {
    'Alloy Casing': 2985827016,
    'Alloy Mag': 1431678320,
    'Ambitious Assassin': 2010801679,
    'Arrowhead Brake': 839105230,
    'Auto-Loading Holster': 3300816228,
    'Chambered Compensator': 3661387068,
    'Control SAS': 445755706,
    'Corkscrew Rifling': 4090651448,
    'Crossfire HCS': 1926090090,
    'Dragonfly': 2848615171,
    'Dusk Dot D1': 1452368634,
    'Dusk Sight D1': 1288081798,
    'Dynamic Sway Reduction': 1359896290,
    'Elastic String': 2801223209,
    'Extended Barrel': 1467527085,
    'Extended Mag': 2420895100,
    'Explosive Payload': 3038247973,
    'Fastdraw HCS': 1926090094,
    'Firmly Planted': 280464955,
    'Flared Magwell': 3230963543,
    'Fourth Time\'s the Charm': 1354429876,
    'Full Auto Trigger System': 2117683199, // bugbug: or is it 4267945040?
    'GB Iron': 87986588,
    'Genesis': 3096702027,
    'Grave Robber': 1631667848,
    'Hammer-Forged Rifling': 3250034553,
    'High Tension String': 3371775011,
    'High-Caliber Rounds': 1561002382,
    'High-Impact Reserves': 2213355989,
    'HitMark HCS': 1926090093,
    'IS 2 Classic': 2209280307,
    'Kill Clip': 1015611457,
    'King Dot K2': 1452368633,
    'King Sight K1': 1288081797,
    'Light Mag': 679225683,
    'Model 8 Red': 663495154,
    'Natural String': 1784898267,
    'Outlaw': 1168162263, // bugbug: or is it 3124871000?
    'Polygonal Rifling': 1392496348,
    'Polymer String': 852209214,
    'Pulse Monitor': 972757866,
    'Rampage': 3425386926,
    'SC Holo': 2054312700,
    'Shortspec SAS': 445755705,
    'Slideshot': 3161816588,
    'Steady Rounds': 3177308360,
    'SteadyHand HCS': 1926090095,
    'Sureshot HCS': 1926090091,
    'Tactical Mag': 106909392,
    'Tactile String': 1196733167,
    'Tap the Trigger': 1890422124,
    'Target SAS': 445755711,
    'Threat Detector': 4071163871,
    'Triple Tap': 3400784728,
    'TrueSight HCS': 1926090092,
    'Under Pressure': 1645158859,
    'Wolf Dot W2': 1452368632,
    'Wolf Sight W1': 1288081796,
    'Zen Moment': 2387244414
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

    if(isNaN(value)) {
      const hashValue = this.nameHashMap[value];

      if (isNaN(hashValue)) {
        $("#dimWishListContent").val(`${value} is not a number and doesn't resemble a known hash.`);
        throw "";
      }

      return hashValue.toString();
    }

    return value;
  },
  getInitialPerkArray: function(perkString) {
    if (perkString.includes(',')) {
      return perkString
        .split(',')
        .map(v => v.trim())
        .filter(v => v.length > 1)
        .map(v => this.optionallyTranslateNameToHash(v));
    }

    return perkString
      .trim()
      .split(' ');
  },
  generatePermutations: function() {
    const itemId = $("#itemId")
      .val()
      .trim();

    const slotOneValues = this.getInitialPerkArray($("#slotOnePerks")
      .val());

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

    const slotTwoValues = $("#slotTwoPerks")
      .val()
      .trim()
      .split(" ")
      .map(v => this.optionallyTranslateNameToHash(v));

    const slotThreeValues = $("#slotThreePerks")
      .val()
      .trim()
      .split(" ")
      .map(v => this.optionallyTranslateNameToHash(v));

    const slotFourValues = $("#slotFourPerks")
      .val()
      .trim()
      .split(" ")
      .map(v => this.optionallyTranslateNameToHash(v));

    const slotFiveValues = $("#slotFivePerks")
      .val()
      .trim()
      .split(" ")
      .map(v => this.optionallyTranslateNameToHash(v));

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
