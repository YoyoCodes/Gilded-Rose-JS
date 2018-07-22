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

    it("quality can't be less than 0", () => {
      expect(items[0].quality).not.toBeLessThan(0);
    });
  });

  describe("Aged Brie", () => {
    beforeEach(() => {
      gildedRose = new Shop([ new Item("Aged Brie", 1, 0) ]);
      items = gildedRose.updateQuality();
    });
    it("sellIn drops by 1", () => {
      expect(items[0].sellIn).toEqual(0);
    });

    it("quality increases by 1 each day the sellIn is >= 0 ", () => {
      expect(items[0].quality).toEqual(1);
    });

    it("quality increases by 2 each day sellIn < 0", () => {
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
    });

    it("quality can't be greater than 50", () => {
      newGildedRose = new Shop([ new Item("Aged Brie", 1, 50) ]);
      item = newGildedRose.updateQuality();
      expect(item[0].quality).toEqual(50);
    });

    it("quality can't be less than 0", () => {
      expect(items[0].quality).not.toBeLessThan(0);
    });
  });

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    beforeEach(() => {
      gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0) ]);
      items = gildedRose.updateQuality();
    });
    it("sellIn drops by 1", () => {
      expect(items[0].sellIn).toEqual(10);
    });

    it("when sellIn is greater than 10, quality increases by 1 each day", () => {
      expect(items[0].quality).toEqual(1);
    });

    it("when sellIn is less or equal to 10, quality increases by 2 each day", () => {
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
    });

    it("when sellIn is less than 6, quality increases by 3 each day", () => {
      for(let i=0; i < 6; i++){
          gildedRose.updateQuality();
          console.log(items[0].sellIn, " ", items[0].quality);
      };
      expect(items[0].quality).toEqual(14);
    });

    it("when sellIn is less than 0, quality drops to 0", () => {
      for(let i=0; i < 12; i++){
          gildedRose.updateQuality();
      };
      expect(items[0].quality).toEqual(0);
    });

    it("quality can't be less than 0", () => {
      expect(items[0].quality).not.toBeLessThan(0);
    });
  });

  describe("Conjured", () => {
    beforeEach(() => {
      gildedRose = new Shop([ new Item("Conjured", 1, 6) ]);
      items = gildedRose.updateQuality();
    });
    it("sellIn drops by 1", () => {
      expect(items[0].sellIn).toEqual(0);
    });

    it("quality drops by 2", () => {
      expect(items[0].quality).toEqual(4);
    });

    it("when sellIn < 0, quality drops by 4", () => {
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it("quality can't be less than 0", () => {
      for(let i=0; i < 10; i++){
          gildedRose.updateQuality();
      };
      expect(items[0].quality).not.toBeLessThan(0);
    });
  });
});
