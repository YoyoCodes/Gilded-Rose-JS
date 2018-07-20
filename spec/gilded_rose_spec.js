describe("Gilded Rose", () => {

  describe("Sulfuras", () => {
    let gildedRose;

    beforeEach(() => {
      gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 0) ]);
    });
    it("sellIn doesn't change", () => {
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    });

    it("quality doesn't change", () => {
      let items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });


});
