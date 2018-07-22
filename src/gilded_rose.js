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

      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
         continue;
      }

      this.decreaseSellIn(item);

      if (this.items[i].name == 'Aged Brie') {
        this.increaseQuality(item);
         if (this.items[i].sellIn < 0) {
           this.increaseQuality(item);
         }

      }

      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.increaseQuality(item);
        if(this.items[i].sellIn < 10 && this.items[i].sellIn >= 5) {
          this.increaseQuality(item);
        }
        if(this.items[i].sellIn < 5 && this.items[i].sellIn >= 0) {
          this.increaseQuality(item);
          this.increaseQuality(item);
        }
        if (this.items[i].sellIn < 0) {
          this.dropQualityToZero(item);
        }
      }

      if (this.items[i].name == 'Conjured') {
         this.reduceQuality(item)
         if (this.items[i].sellIn < 0) {
           this.reduceQuality(item)
         }
      }
    }

    return this.items;
  }
}
