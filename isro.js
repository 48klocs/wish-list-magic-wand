const permuter = {
  nameHashMap: {
    'Dusk Dot D1': 1452368634,
    'Dusk Sight D1': 1288081798,
    'Dynamic Sway Reduction': 1359896290,
    'Extended Barrel': 1467527085,
    'Extended Mag': 2420895100,
    'Flared Magwell': 3230963543,
    'High-Caliber Rounds': 1561002382,
    'High-Impact Reserves': 2213355989,
    'Kill Clip': 1015611457,
    'King Sight K1': 1288081797,
    'Light Mag': 679225683,
    'Rampage': 3425386926,
    'Steady Rounds': 3177308360,
    'SteadyHand HCS': 1926090095,
    'Tap the Trigger': 1890422124,
    'Triple Tap': 3400784728,
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
