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
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
         continue;
      }

      if (this.items[i].name == 'Aged Brie') {
         this.items[i].sellIn -= 1;
         if (this.items[i].sellIn >= 0 && this.items[i].quality < 50) {
           this.items[i].quality += 1;
         }
         if(this.items[i].sellIn < 0 && this.items[i].quality < 49) {
           this.items[i].quality += 2;
         }
      }

      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i].sellIn -= 1;
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = 0;
        }
        if(this.items[i].sellIn >= 10 && this.items[i].quality < 50 && this.items[i].sellIn >= 0) {
          this.items[i].quality += 1;
        }

        if(this.items[i].sellIn < 10 && this.items[i].sellIn >= 5 && this.items[i].quality < 48 ) {
          this.items[i].quality += 2;
        }
        if(this.items[i].sellIn < 5 && this.items[i].quality < 47 && this.items[i].sellIn >= 0) {
          this.items[i].quality += 3;
        }
      }

      if (this.items[i].name == 'Conjured') {
         this.items[i].sellIn -= 1;
         if (this.items[i].quality >= 2 && this.items[i].sellIn >= 0) {
           this.items[i].quality -= 2;
         }
         if (this.items[i].quality >= 4 && this.items[i].sellIn < 0) {
           this.items[i].quality -= 4;
         }
      }
    }

    return this.items;
  }
}
