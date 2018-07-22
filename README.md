# Gilded-Rose-JS
To interact with the app just fork the repo and clone it. Open SpecRunner in the browser to run the tests. Open the console on the same page to interact with the code.

## About
Here is the text of the kata:

*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."*

## Aproach
The first step after reading the code was to start writing the tests for it. I also decided to add the tests for the new "Conjured" item.
After observing some discrepancies between the results I got from interacting with the code directly via the console and tests, I realised some of the rules that applied to the items were not correct. I adjusted the tests accordingly.

The second step was grouping together the behaviour that was specific to each item. While doing this, I started observing patterns in the code - for example items were constantly increasing and decreasing in quality.

The next step was extracting the code into stand alone functions while constantly refractoring the updateQuality function.
## Sample of how the code works:
<a href="https://imgbb.com/"><img src="https://image.ibb.co/gKmiRy/gilded_code.png" alt="gilded_code" border="0"></a>

## Running the tests
### Testing framework - Jasmine
<a href="https://ibb.co/evqUYd"><img src="https://preview.ibb.co/cEXyRy/Gilded_Rose.png" alt="Gilded_Rose" border="0"></a>
