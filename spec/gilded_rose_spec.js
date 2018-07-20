describe("Gilded Rose", () => {
  let gildedRose;
  let items;

  describe("Sulfuras", () => {
    beforeEach(() => {
      gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 0) ]);
      items = gildedRose.updateQuality();
    });
    it("sellIn doesn't change", () => {
      expect(items[0].sellIn).toEqual(0);
    });

    it("quality doesn't change", () => {
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("Aged Brie", () => {
    beforeEach(() => {
      gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      items = gildedRose.updateQuality();
    });
    it("sellIn drops by 1", () => {
      expect(items[0].sellIn).toEqual(-1);
    });

    it("quality increases by 2 each day", () => {
      expect(items[0].quality).toEqual(2);
    });

    it("quality can't be greater than 50", () => {
      for(let i=0; i < 50; i++){
          gildedRose.updateQuality();
      }
      expect(items[0].quality).toEqual(50);
    });

    it("quality can't be less than 0", () => {
      expect(items[0].quality).not.toBeLessThan(0);
    });
  });
});
