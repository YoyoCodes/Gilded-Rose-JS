describe("Gilded Rose", () => {

  describe("Sulfuras", () => {
    it("sellIn doesn't change", () => {
      const gildedRose = new Shop([ new Item("Sulfuras", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    });

    it("quality doesn't change", () => {
      const gildedRose = new Shop([ new Item("Sulfuras", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });
});
