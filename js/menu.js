/* MENU DATA — edit here. "## Section|note" starts a section; each line after is "Name|Price in NPR|Description".
   Leave the price empty to show "Ask", or use - for no price. Source: restaurant's Google listing menu screenshots. */
const MENU = `
## Breakfast
Himalayan Yogi|450|Homemade granola (museli), fresh fruits, vegan honey with curd or homemade hemp milk, served with buckwheat chapati & shilajit tea.
Sirniki|450|3 piece of pancakes with cottage cheese yogurt / homemade jam. Tea / coffee.
Cheese On Toast|470|Toast with loaded cheese, potato salad, tea/coffee.
House Special|490|Chapati or multigrain bread with egg on top your choice, nettle soup fruits, tea/coffee.
Tsampa Bowl|470|Crushed multigrain mixed with yogurt or milk topped with dry nuts, tea/coffee.
Aloo Baley Set|470|Two pieces chapati, two eggs, potato curry, tea/coffee.
Muesli Bowl|450|Yogurt / milk, granola, nuts and fruits topped with herbs.
Healthy Man|490|Fruit bowl with wild ginseng tea.
French Toast|490|French toast with fruits bowl & coffee/tea.
## Cocktails
Aila Sour|750|Aila, chyang syrup, lime juice, egg white. The flawless balance of sweet & sour.
Sex On The Beach||Vodka, peach schnapps, cranberry and orange juice. A little flavour of aila and sweet.
Margarita||Tequila, triple sec, lime juice. The flawless balance of sweet & sour.
Sherpa Baileys||Baileys, milk, espresso and fresh cream. Tastes like creamy iced coffee with some sweet rum flavour.
Pina Colada||White rum, coconut cream, pineapple juice. A delicious tropical treat that tastes like pineapple & coconut.
Daiquiri||White rum, sugar syrup & lime juice. Strong with a hint of sweet and sour.
## Beer
Tuborg Beer|570
Gorkha|490
Gorkha Premium|540
Nepal Ice|440
San Miguel|440
Tuborg Can|400
Mustang Small Beer|300
Gorkha Strong Small Beer|300
## Momo|Veg, chicken or buff options
Steam Momo|250
Kothey Momo|300
Fried Momo|300
Chilly & Honey Momo|350
Dapao Momo|350
Soup Momo|350
## Noodles|Veg, chicken or buff options
Keema Noodle|300
Peanuts Noodle|350
Chow Mein|300
Thukpa Soup|350
Thenthuk|350
## Masu Lover
Sukuti / Choila|450
Shyapta|450|Buff or pork
Chilly|450|Buff, chicken or pork
Gyuma|450
Sherpa Wings|490
## Lahping
Waiwai|130
Keema|180
Veg|130
Mixed|200
## Veg Snacks
Aalu Dum|250
Waiwai Sadeko|250
Tofu Chilly|350
## Salad
Fruit Salad|400
Green Salad|350
Russian Salad|400
## Syabaley
Veg|300
Chicken|300
Buff|300
Cheese Topping|100
## Sherpa Fries
Classical|300
Spicy Garlic|350
Chilly & Honey|350
Cheesy Fries|400
## Heavy Combo
Dry Mix|390
Mothuk|390
Momo Platter|590
Wings And Fries|590
Shyapta Rice|550
## Beers
Gorkha|350
Barasinghe|390
Tuborg Big|390
## Before Party
Gin Tonic|590
Rum Coke|490
Vodka Sprite|490
Whiskey On The Rock|490
Ginseng Aila|999
## Shots
Ginseng Aila|450
Tequila|590
Jagar Bomb|750|Jagermeister, red bull
## Mocktails
Virgin Mojito|450|Mint, lime juice, syrup, club soda and lime wedge.
Cucumber Mint Cooler||Cucumber, mint, honey, sparkling water.
Sexy Lady||Orange, pineapple and cranberry juice and garnish.
Virgin Pina Colada||Pineapple chunks, juice, coconut milk, brown sugar, pineapple slice.
Virgin Mai Tai||Orange & pineapple juice, grenadine & orgeat syrup, pineapple.
Ginger Mojito||Grated ginger & cucumber, lime juice, mint, sparkling water & ginger ale.
## Sandwich
Vegan Club Sandwich|450|Marinated eggplant, creamy sauce, tofu mayonnaise with fresh tomato, toasted brown bread and fries. (vegan)
Cheese Tomato|420|Cheese with fresh tomato in toasted brown bread with fries.
Chicken Sandwich|450|Marinated chicken with home made sauce and fries.
House Special|420|Chicken and buff mixed with veggies and fries.
## Burger
Vegan Burger|450|Yummy mix of chickpeas, kidney beans, mushroom, greens, tofu mayonaise and fries. (vegan)
Veg Burger|450|Marinated mushroom, paneer, potato carrot, with greens, yak cheese, homemade mayonaise and fries.
Jerky Chicken|490|Jerky chicken marinated, yak cheese, with fries.
House Special|550|Buff patty with yak cheese and fries.
## Pizza
Margarita|550|Tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.
Green Lovers|590|Tomato sauce, fresh mozarella, mushroom, paneer, spinach, olive, yak cheese.
Chicken Mix|590|Tomato sauce, fresh mozzarella with chicken and greens.
Hawaiian|590|Topped with pineapple, tomato sauce, mozzarella cheese, and either ham.
Meat Lovers|690|Tomato sauce, fresh mozzarella, sausage, chicken, minced buff meat and yak cheese.
## Extra Toppings
Mushrooms|100
Pineapple|100
Yak Cheese|100
Tofu|100
Spinach|100
## Caffeine
Espresso|120
Americano|150
Cappucino|200
Cafe Latte|200
Cafe Mocha|220
Caramel Latte|250
Mad Honey Latte|280
Matcha Latte|280
## Himalayan Medicinal Tea
Hemp Leaf Tea|150
Rosemary Tea|150
Rhododendron Tea|150
Ashwagandha|200
Shilajit & Honey|250
Reishi (Lingzi)|350
Wild Ginseng (Sansam)|500
## Nepali Style
Black Tea|70
Green Tea|100
Lemon Grass Tea|100
M.m Tea|100
Hot Lemon Tea|120
Ginger Honey Lemon|250
Sherpa Butter Tea|150
## Juice
Jah Love|290|Watermelon, mint, beetroot, apple, lemon, spirulina.
Green Love|290|Cucumber, apple, spinach, parsley, celery, ginger, lemon, spirulina.
Rainbow Me|290|Apple, beetroot, carrot, spinach, cucumber and lemon.
Rise & Shine|290|Turmeric, apple, carrot, ginger, lemon and pomegranate.
Seasonal Juice|350
## Smoothies
G Energy|300|Cucumber, spinach, coriander, celery and apple.
Red Devil|300|Beetroot, cucumber, celery, apple, ginger and lemon.
Green Devi|300|Watermelon, cucumber, mint and lemon.
Banana Man|300|Banana, cinnamon, cardamom and dates.
Sweet Dream|350|Banana, peanut butter, coco powder, dates, coconut milk and chia seeds.
## Organic Cooler's
Mint/Pink Lemonade|220
Fresh Lemonade|200
Peach Iced Tea|250
Shilajit Honey Iced Tea|300
Ashwagandha Iced Tea|300
Rhododendron Iced Tea|250
Reishi Mushroom Iced Tea|350
Wild Ginseng Iced Tea|400
Kombucha|280|Fermented tea infused with herbal flavours.
## House Drinks
Plain Lassi|200
Banana Lassi|250
Hot Chocolate|250
Oreo Milk Shake|250
Tsampa Shake|300
Coke - Fanta - Sprite - Soda|100
Seasonal Fresh Juice|350
Water|50
## Smoothie Bowl
Choco Choco|450|Frozen banana, peanut butter, dates and coconut milk topped with chocolate flakes, coconut flakes, dry nuts, mixed fruits.
Pink Panther|450|Frozen banana and pomegranate beetroot, hemp milk, topped with watermelon, risen chocolate flakes, pumpkin seeds, hemp seeds, chia seeds, pomegranate and banana.
Mango Tango|450|Frozen banana and mango, coconut milk topped with granola, risen, mix fruits and seeds.
Greenieee|420|Frozen banana, frozen papaya, cardamom, toasted spinach, pinch of spirulina, coconut milk, topped with granola, risen, mix fruits and hemp seeds.
Heaven O Heaven|420|Frozen banana, frozen pineapple, coconut milk, topped with granola, risen, pineapple, chocolate flakes, pumpkin seeds, hemp seeds, pomegranate and mixed fruits.
## Energy Shots
Hangover|150|Carrot - lemon - chilly
Blood Shot|150|Beetroot - cinnamon - lemon
Full Power|300|Wild ginseng - lemon - ginger
Yin Yang|350|Wild ginseng - reishi
## Hot Drinks
Black Tea|25
Milk Tea|40
Black Coffee|40
Milk Coffee|60
Mint Tea|35
Lemon Tea|40
Masala Tea|50
Hot Milk Per Glass|100
Hot Ginger Lemon Honey|80
## Toast
Cheese Toast|180
Cheese Tomato Toast|190
French Toast With Honey|200
## Egg (2 Eggs)
Boiled Eggs|100
Poached Egg|100
Fried Egg|100
Scrambled Egg|120
Masala Omelette|130
Plain Omelette|100
Cheese Omelette|180
## Muesli/Porridge
Muesli|200|Curd / hot milk / cold milk
Muesli|250|Curd / fruit / muesli / hot & cold milk w/ honey
Porridge|170|Plain / banana
Fruit Salad With Honey|250
## Lassi/Shake
Plain|100
Lassi/Shake|170|Banana, mango, orange, apple
Mix Lassi|120
Sweet Lassi|120
## Fried Rice
Veg. Fried Rice|190
Egg Fried Rice|220
Chicken Fried Rice|250
Mixed Fried Rice|250
## Chow Mein/Thukpa
Veg Chow Mein/Thukpa|190
Chicken Chow Mein/Thukpa|190
Buff Chow Mein/Thukpa|220
Mixed Chow Mein/Thukpa|250
## Soup
Tomato Soup|130
Creamy Soup Veg./Non Veg
Hot & Sour Veg./Non Veg
Daal Soup|120
## Mo: Mo:
Veg. Mo: Mo:|140
Cheese Patato Mo: Mo:|160
Spinach & Cheese Mo: Mo:|160
Buff Mo: Mo:|190
Chicken Mo: Mo:|220
Chilly Mo: Mo:|210|Veg., spinach, potato, cheese
## Veg. Khaja Set|Price not listed. Ask us.
Chiura|-
Aalu Jeera|-
Bhatta Sandheko|-
Papad|-
Chatney|-
Salad|-
Veg Curry|-
## Biryani
Chicken Biryani|300
Veg. Biryani|250
## Momo + Chowmien (Chicken)|Price not listed. Ask us.
Momo|-
Chowmien (Chicken)|-
## Chicken Mo:mo Chilly + Chicken Mo:mo Fry + Chicken Chowmien + Chicken Biryani + Salad|Price not listed. Ask us.
Chicken Mo:mo Chilly|-
Chicken Mo:mo Fry|-
Chicken Chowmien|-
Chicken Biryani|-
Salad|-
## Wrap|Served with salad
Veg. Wrap|180
Chicken Wrap|250
Mix Wrap|300
## Naan/Roti
Plain Naan|70
Butter Naan|90
Garlic Naan|100
Cheese Naan|230
Cheese & Garlic Naan|240
Honey Naan|120
Potato Naan|130
Tandoori Roti|40
Butter Roti|50
Plain Paratha|70
Aalu Paratha|140
Cheese Paratha|250
## Sweet & Desert
Plain Pancake|150
Banana Pancake|180
Chocolate Pancake|250
Lemon Sugar Pancake|150
Honey Pancake|150
## Soft Drinks
Coke/Fanta/Sprite|70
Fresh Lemon Soda|90
Mineral Water|30
## Local/Spirits (Qtr.)
Khukuri Rum|780
Ruslan Vodka|780
8848 Vodka|830
Signature Green|930
Signature Red|980
Old Durbar|1,030
Old Durbar Black Chimney|1,230
## Non Veg. Snacks
Chicken Chilly|370
Sausage Fry|270|4 pcs
Sausage Chilly|350
Chicken Fry|330|Nepal style
Chicken Sandheko|290
## Laphing
Waiwai|130
Keema|180
Egg|160
Mix|200
Soup|140
## Steam Momo
Veg|200
Chicken|200
Buff|200
## Sherpa Soup
Thukpa|300
Thenthuk|300
Mothuk|400|Mix
## Meat
Gyuma|350
Sukuti|400
Shapta|400
Choila
Chick/Buff Chill|400
## Fried Rice / Chow Mein
Veg|300
Chicken|300
Buff|300
## Combo
Syapta & Rice|500
Chicken & Rice|500
Wings & Fries|600
## Sha Phaley
Veg|300
Chicken|300
Buff|300
## Momo Soup
City Momo|400
Classical|350
## Keema Noodles
Egg|300
Chicken|300
Buff|300
## Dapao
Veg|350
Chicken|350
Buff|350
## House Specialities
Peanut Noodles|350
Rice Noodles|350
## Wings
Classical Wings|450
Chili & Honey|450
Sesame & Soya|450
## Others
Chyang|350|Fermented rice beer or wine that is popular in nepal and tibet.
Tongba|400|Millet-based alcoholic beverage found in the eastern mountainous region of nepal.
Veg Organic Thali|450|Local red rice, spinach, vegetable curries, lentils, pickle, curd, fried potato & salads.
Chicken Thali|490|Rice, chicken curry, pickles, lentils, spinach, fried potato, salads & curd.
Buff Thali|490|Rice, chicken curry, pickles, lentils, spinach fried potato, salads & curd.
Pork Thali|550|Rice, pork curry, pickles, lentils, spinach, fried potato, salads & curd.
Mutton Thali|650|Rice, mutton curry, pickles, lentils, spinach, fried potato, salads & curd.
Hookah|400|Any flavour
Extra Coil|50
`;
(() => {
  const root = document.getElementById('menu-root'), chips = document.getElementById('menu-chips');
  if (!root) return;
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let out = '', nav = '', open = false;
  MENU.trim().split('\n').forEach(line => {
    if (line.startsWith('## ')) {
      const [name, note = ''] = line.slice(3).split('|'), id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      if (open) out += '</div></section>';
      out += `<section class="msec" id="${id}"><h2>${esc(name)}</h2>${note ? `<p class="note">${esc(note)}</p>` : ''}<div class="mgrid">`;
      nav += `<a href="#${id}">${esc(name)}</a>`; open = true;
    } else {
      const [n, p = '', d = ''] = line.split('|');
      out += `<div class="it"><b>${esc(n)}</b>${p === '-' ? '' : `<span${p ? '' : ' class="ask"'}>${p ? 'NPR ' + esc(p) : 'Ask'}</span>`}${d ? `<small>${esc(d)}</small>` : ''}</div>`;
    }
  });
  root.innerHTML = out + '</div></section>';
  chips.innerHTML = nav;
})();
