class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  decreaseSellIn(item) {
    item.sellIn -=  1;
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  dropQualityToZero(item) {
      item.quality = 0;
  }

  reduceQuality(item) {
    if (item.quality >= 2) {
      item.quality -= 2;
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let item = this.items[i];

      if (item.name == 'Sulfuras, Hand of Ragnaros') {
         continue;
      }

      this.decreaseSellIn(item);

      if (item.name == 'Aged Brie') {
        this.increaseQuality(item);
         if (item.sellIn < 0) {
           this.increaseQuality(item);
         }
      }

      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.increaseQuality(item);
        if(item.sellIn < 10) {
          this.increaseQuality(item);
        }
        if(item.sellIn < 5) {
          this.increaseQuality(item);
        }
        if (item.sellIn < 0) {
          this.dropQualityToZero(item);
        }
      }

      if (item.name == 'Conjured') {
         this.reduceQuality(item)
         if (item.sellIn < 0) {
           this.reduceQuality(item)
         }
      }
    }
    return this.items;
  }
}
