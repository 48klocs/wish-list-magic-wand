const permuter = {
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
  generatePermutations: function() {
    const itemId = $("#itemId")
      .val()
      .trim();

    const slotOneValues = $("#slotOnePerks")
      .val()
      .trim()
      .split(" ");

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
      .split(" ");

    const slotThreeValues = $("#slotThreePerks")
      .val()
      .trim()
      .split(" ");

    const slotFourValues = $("#slotFourPerks")
      .val()
      .trim()
      .split(" ");

    const slotFiveValues = $("#slotFivePerks")
      .val()
      .trim()
      .split(" ");

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
