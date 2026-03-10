export interface Pizza {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string; // crossed-out price for discount display
  description: string;
  ingredients: string[];
  spiceLevel: number;
  folderPath: string;
  themeColor: string;
  gradient: string;
  badge: string;
  stats: { label: string; val: string }[];
  section1: { title: string; subtitle: string };
  section2: { title: string; subtitle: string };
  section3: { title: string; subtitle: string };
  section4: { title: string; subtitle: string };
  storySection: { title: string; description: string };
  freshnessSection: { title: string; description: string };
  orderSection: {
    price: string;
    unit: string;
    highlights: string[];
    chefNote: string;
    prepTime: string;
  };
}

export const pizzas: Pizza[] = [
  {
    id: "spicy-pepperoni",
    name: "Spicy Pepperoni",
    tagline: "Born from fire.",
    price: "₹399",
    originalPrice: "₹599",
    description: "Double pepperoni · Jalapeños · Chili flakes · Mozzarella",
    ingredients: ["Double layer pepperoni","Fresh jalapeño slices","Red chili flakes","Bubbling mozzarella","San Marzano tomato base"],
    spiceLevel: 3,
    folderPath: "/images/pepperoni",
    themeColor: "#ff4e00",
    gradient: "linear-gradient(135deg, #ff4e00 0%, #c62800 100%)",
    badge: "BESTSELLER",
    stats: [{ label: "Spice", val: "🌶🌶🌶" },{ label: "Crust", val: "Thin" },{ label: "Size", val: "12 inch" }],
    section1: { title: "Spicy Pepperoni.", subtitle: "Born from fire." },
    section2: { title: "Double the heat, double the flavour.", subtitle: "Two layers of premium pepperoni charred to crispy perfection." },
    section3: { title: "Jalapeños that bite back.", subtitle: "Fresh sliced jalapeños layered beneath molten mozzarella for a slow, building burn." },
    section4: { title: "Not for the faint-hearted.", subtitle: "" },
    storySection: { title: "The Legend of the Pepperoni", description: "Our Spicy Pepperoni is the pizza that started it all. We import our pepperoni from a third-generation butcher in Naples who still cures the meat with sea salt and smoked paprika. The jalapeños are grown on our partner farm and sliced fresh every morning." },
    freshnessSection: { title: "Made Fresh, Never Frozen", description: "Every Spicy Pepperoni is assembled to order. Our dough is cold-fermented for 48 hours for a deep, complex flavour. The sauce is crushed by hand, never blended. The pepperoni is draped last so the edges curl and crisp in our 450°C wood-fired oven." },
    orderSection: { price: "₹599", unit: "per 12-inch pizza", highlights: ["48hr Cold Fermented Dough","Wood Fired at 450°C","Imported Napoli Pepperoni"], chefNote: "Ask for extra chili oil on the side — trust us.", prepTime: "8 minutes" }
  },
  {
    id: "truffle-shroom",
    name: "Truffle Shroom",
    tagline: "Earthy. Luxurious.",
    price: "₹449",
    originalPrice: "₹699",
    description: "Truffle oil · Wild mushrooms · Gruyère · Thyme · Cream base",
    ingredients: ["Italian truffle oil drizzle","Wild shiitake and oyster mushrooms","Aged gruyère cheese","Fresh thyme sprigs","White garlic cream base"],
    spiceLevel: 1,
    folderPath: "/images/truffle",
    themeColor: "#8B7355",
    gradient: "linear-gradient(135deg, #8B7355 0%, #4a3728 100%)",
    badge: "CHEF'S PICK",
    stats: [{ label: "Spice", val: "🌶" },{ label: "Crust", val: "Thick" },{ label: "Size", val: "12 inch" }],
    section1: { title: "Truffle Shroom.", subtitle: "Earthy. Luxurious." },
    section2: { title: "Wild mushrooms meet liquid gold.", subtitle: "Foraged shiitake and oyster mushrooms, roasted until golden, on a white truffle cream base." },
    section3: { title: "A perfume you can eat.", subtitle: "Italian black truffle oil drizzled hot from the oven — the aroma alone is worth the price." },
    section4: { title: "Luxury in every single bite.", subtitle: "" },
    storySection: { title: "When Forest Meets Fire", description: "The Truffle Shroom was born from a single experiment — what if we treated pizza like fine dining? We import our truffle oil from Umbria, Italy, cold-extracted to preserve every molecule of its complex, earthy aroma. Our mushrooms are delivered fresh daily from a local forager who scouts the Western Ghats every morning." },
    freshnessSection: { title: "Assembled with Precision", description: "The Truffle Shroom demands patience. The cream base is made from scratch with roasted garlic and fresh cream, reduced slowly for 30 minutes. The mushrooms are flash-roasted at high heat to remove moisture before going on the pizza, ensuring a crispy, concentrated flavour." },
    orderSection: { price: "₹699", unit: "per 12-inch pizza", highlights: ["Umbrian Truffle Oil","Freshly Foraged Mushrooms","Post-Bake Truffle Drizzle"], chefNote: "Pair with our Midnight Matcha for the perfect earthy balance.", prepTime: "10 minutes" }
  },
  {
    id: "bbq-smokehouse",
    name: "BBQ Smokehouse",
    tagline: "Smoky. Rich. Legendary.",
    price: "₹429",
    originalPrice: "₹649",
    description: "Pulled chicken · Smoked bacon · Caramelized onion · Cheddar",
    ingredients: ["Slow-pulled smoked chicken","Crispy smoked bacon strips","Caramelized golden onions","Mature cheddar and mozzarella blend","House BBQ sauce base"],
    spiceLevel: 2,
    folderPath: "/images/bbq",
    themeColor: "#d4791a",
    gradient: "linear-gradient(135deg, #d4791a 0%, #7a3a00 100%)",
    badge: "CROWD FAVOURITE",
    stats: [{ label: "Spice", val: "🌶🌶" },{ label: "Crust", val: "Stuffed" },{ label: "Size", val: "12 inch" }],
    section1: { title: "BBQ Smokehouse.", subtitle: "Smoky. Rich. Legendary." },
    section2: { title: "Low and slow, then blazing hot.", subtitle: "Our chicken is smoked for 4 hours before it ever touches your pizza." },
    section3: { title: "Caramelized onions. Two hours of patience.", subtitle: "Slow-cooked until golden and jammy — the secret weapon beneath every slice." },
    section4: { title: "The one you come back for.", subtitle: "" },
    storySection: { title: "A Tribute to the Smokehouse", description: "The BBQ Smokehouse is our love letter to American barbecue culture, reimagined on an Italian canvas. Our chicken is brined overnight, then smoked over applewood for four hours until it falls apart at the touch. The house BBQ sauce is a closely guarded recipe — smoky, tangy, slightly sweet." },
    freshnessSection: { title: "The Onion Secret", description: "Most places skip this step. We do not. Our onions are caramelized in a cast iron pan with a splash of balsamic and brown sugar for two full hours until they turn dark, jammy and impossibly sweet." },
    orderSection: { price: "₹649", unit: "per 12-inch pizza", highlights: ["4-Hour Applewood Smoked Chicken","2-Hour Caramelized Onions","Cheese-Stuffed Crust"], chefNote: "Get the stuffed crust upgrade. You will not regret it.", prepTime: "9 minutes" }
  },
  {
    id: "garden-fresh",
    name: "Garden Fresh",
    tagline: "Light. Vibrant. Alive.",
    price: "₹349",
    originalPrice: "₹549",
    description: "Roasted peppers · Zucchini · Feta · Olives · Pesto base",
    ingredients: ["Roasted red and yellow bell peppers","Thin-sliced zucchini ribbons","Crumbled Greek feta cheese","Kalamata olives","Basil pesto base"],
    spiceLevel: 1,
    folderPath: "/images/garden",
    themeColor: "#4caf50",
    gradient: "linear-gradient(135deg, #4caf50 0%, #1b5e20 100%)",
    badge: "VEGETARIAN",
    stats: [{ label: "Spice", val: "🌶" },{ label: "Crust", val: "Thin" },{ label: "Size", val: "12 inch" }],
    section1: { title: "Garden Fresh.", subtitle: "Light. Vibrant. Alive." },
    section2: { title: "The garden on a plate.", subtitle: "Colourful roasted vegetables hand-placed on a fragrant basil pesto base." },
    section3: { title: "Feta that crumbles perfectly.", subtitle: "Imported Greek feta, crumbled generously — salty, creamy, and absolutely necessary." },
    section4: { title: "Proof that vegetables can steal the show.", subtitle: "" },
    storySection: { title: "A Garden in Every Bite", description: "The Garden Fresh began as our answer to customers who wanted something lighter — but we refused to make it boring. Every vegetable is roasted separately at different temperatures to bring out its individual character. The pesto is blended fresh each morning from Italian basil, pine nuts, parmesan, and cold-pressed olive oil." },
    freshnessSection: { title: "Roasted Right", description: "Roasting transforms vegetables. Our bell peppers are charred until blistered, then peeled to reveal a sweet, smoky flesh. The zucchini is salted, drained, and grilled on a cast iron until it has beautiful char marks." },
    orderSection: { price: "₹549", unit: "per 12-inch pizza", highlights: ["Freshly Blended Morning Pesto","Individually Roasted Vegetables","Imported Greek Feta"], chefNote: "Add a drizzle of balsamic reduction. Completely transforms it.", prepTime: "7 minutes" }
  },
  {
    id: "margherita-classica",
    name: "Margherita Classica",
    tagline: "Simple. Perfect. Timeless.",
    price: "₹299",
    originalPrice: "₹499",
    description: "San Marzano tomatoes · Fresh mozzarella · Basil · Olive oil",
    ingredients: ["San Marzano crushed tomatoes","Fresh buffalo mozzarella rounds","Hand-torn fresh basil","Extra virgin olive oil drizzle","Sea salt flakes"],
    spiceLevel: 1,
    folderPath: "/images/margherita",
    themeColor: "#f5a623",
    gradient: "linear-gradient(135deg, #f5a623 0%, #c97a00 100%)",
    badge: "THE CLASSIC",
    stats: [{ label: "Spice", val: "🌶" },{ label: "Crust", val: "Neapolitan" },{ label: "Size", val: "12 inch" }],
    section1: { title: "Margherita Classica.", subtitle: "Simple. Perfect. Timeless." },
    section2: { title: "Three ingredients. Infinite perfection.", subtitle: "Tomato, mozzarella, basil. The holy trinity of pizza, done the right way." },
    section3: { title: "The crust is the point.", subtitle: "Leopard-spotted, blistered, chewy and light — a Neapolitan crust that tells you everything about our craft." },
    section4: { title: "The original. The best.", subtitle: "" },
    storySection: { title: "Respecting the Original", description: "The Margherita is where we prove ourselves. There is nowhere to hide — no heavy toppings, no complex sauces. Just dough, tomato, and cheese. Our dough is the same recipe our founder learned in Naples in 2018, fermented for exactly 48 hours." },
    freshnessSection: { title: "48 Hours of Patience", description: "Great Neapolitan pizza starts with great fermentation. Our dough is mixed, balled, and placed in sealed containers in a 4°C cold room for 48 hours. This slow fermentation develops complex flavours and creates the large air bubbles in the crust." },
    orderSection: { price: "₹499", unit: "per 12-inch pizza", highlights: ["DOP San Marzano Tomatoes","Buffalo Mozzarella","48hr Cold Fermented Dough"], chefNote: "This is the one to judge us by. We welcome the scrutiny.", prepTime: "6 minutes" }
  },
  {
    id: "midnight-black",
    name: "The Midnight Black",
    tagline: "Dark. Dramatic. Unforgettable.",
    price: "₹499",
    originalPrice: "₹749",
    description: "Squid ink base · Calamari · Shrimp · Garlic butter · Parsley",
    ingredients: ["Jet black squid ink sauce base","Grilled calamari rings","Sautéed garlic butter shrimp","Smoked mozzarella","Fresh flat-leaf parsley"],
    spiceLevel: 2,
    folderPath: "/images/midnight",
    themeColor: "#546e7a",
    gradient: "linear-gradient(135deg, #546e7a 0%, #102027 100%)",
    badge: "SIGNATURE",
    stats: [{ label: "Spice", val: "🌶🌶" },{ label: "Crust", val: "Charcoal" },{ label: "Size", val: "12 inch" }],
    section1: { title: "The Midnight Black.", subtitle: "Dark. Dramatic. Unforgettable." },
    section2: { title: "The pizza that stops the room.", subtitle: "Jet black squid ink base, glossy and mysterious, crowned with ocean-fresh seafood." },
    section3: { title: "Garlic butter shrimp. Enough said.", subtitle: "Wild-caught shrimp tossed in house garlic butter, finished with smoked mozzarella and fresh parsley." },
    section4: { title: "Order it once. Crave it forever.", subtitle: "" },
    storySection: { title: "The Pizza That Started Arguments", description: "When we put the Midnight Black on the menu, half the team said it was too experimental. The other half said it was the best thing we had ever made. It went on the menu as a weekend special. Within two weeks it was our second best-seller." },
    freshnessSection: { title: "Sourced from the Ocean, Not the Freezer", description: "Our seafood arrives fresh every morning from a coastal supplier, never frozen. The calamari is tenderized with a light milk soak before grilling. The shrimp are peeled, deveined and cooked to order in clarified butter with four cloves of minced garlic per serving." },
    orderSection: { price: "₹749", unit: "per 12-inch pizza", highlights: ["Mediterranean Squid Ink Base","Fresh Daily Seafood Delivery","Charcoal-Infused Crust"], chefNote: "Photograph it before you eat it. The black base is extraordinary.", prepTime: "11 minutes" }
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka Masala",
    tagline: "Spiced. Smoky. Desi Soul.",
    price: "₹379",
    originalPrice: "₹579",
    description: "Tandoori paneer · Tikka masala sauce · Bell peppers · Onion · Mint chutney",
    ingredients: ["Chargrilled tandoori paneer cubes","Spiced tikka masala tomato base","Tri-colour bell peppers","Sliced red onion rings","Mint chutney drizzle"],
    spiceLevel: 2,
    folderPath: "/images/bbq",
    themeColor: "#e64a19",
    gradient: "linear-gradient(135deg, #e64a19 0%, #bf360c 100%)",
    badge: "INDIAN FUSION",
    stats: [{ label: "Spice", val: "🌶🌶" },{ label: "Crust", val: "Naan-style" },{ label: "Size", val: "12 inch" }],
    section1: { title: "Paneer Tikka Masala.", subtitle: "Spiced. Smoky. Desi Soul." },
    section2: { title: "Where Italy meets India.", subtitle: "Tandoori-marinated paneer on a rich tikka masala base — bold, fragrant, electric." },
    section3: { title: "Chargrilled at 450°C.", subtitle: "The paneer gets gorgeous char marks in our wood-fired oven, locking in the tandoori marinade." },
    section4: { title: "Your favourite curry, reimagined.", subtitle: "" },
    storySection: { title: "Hyderabad's Own Fusion", description: "The Paneer Tikka Masala was born in our Hyderabad kitchen as a tribute to the city's love of both great pizza and great Indian food. We marinate the paneer in a yogurt-spice blend for 24 hours before chargrilling, then drizzle fresh mint chutney over the finished pizza." },
    freshnessSection: { title: "24-Hour Tandoori Marinade", description: "Our paneer is house-made from full-fat milk and pressed daily. It soaks in a blend of hung curd, ginger-garlic paste, kashmiri chili, garam masala, and mustard oil for a full 24 hours. When it hits our 450°C oven, the sugars in the marinade caramelize into beautiful char." },
    orderSection: { price: "₹579", unit: "per 12-inch pizza", highlights: ["24-Hour Tandoori Marinade","House-Made Paneer","Mint Chutney Drizzle"], chefNote: "Add extra green chutney on the side — it is life-changing.", prepTime: "8 minutes" }
  },
  {
    id: "four-cheese-bianca",
    name: "Four Cheese Bianca",
    tagline: "Creamy. Rich. Pure Indulgence.",
    price: "₹429",
    originalPrice: "₹649",
    description: "Mozzarella · Ricotta · Gorgonzola · Parmesan · Honey drizzle",
    ingredients: ["Stretchy buffalo mozzarella","Dollops of silky ricotta","Crumbled gorgonzola","Shaved aged parmesan","Wildflower honey drizzle"],
    spiceLevel: 1,
    folderPath: "/images/margherita",
    themeColor: "#c8a96e",
    gradient: "linear-gradient(135deg, #c8a96e 0%, #8d6e2e 100%)",
    badge: "CHEESE LOVER",
    stats: [{ label: "Spice", val: "🌶" },{ label: "Crust", val: "Neapolitan" },{ label: "Size", val: "12 inch" }],
    section1: { title: "Four Cheese Bianca.", subtitle: "Creamy. Rich. Pure Indulgence." },
    section2: { title: "Four cheeses. Zero regrets.", subtitle: "Mozzarella, ricotta, gorgonzola and parmesan layered on a garlic olive oil base — no tomato needed." },
    section3: { title: "A drizzle of honey. A stroke of genius.", subtitle: "Cold-pressed wildflower honey poured post-bake turns every slice into a sweet-salty masterpiece." },
    section4: { title: "For those who take cheese seriously.", subtitle: "" },
    storySection: { title: "A Love Letter to Cheese", description: "The Four Cheese Bianca started as a late-night experiment when our head chef asked: what if we built a pizza entirely around cheese? No tomato. No distraction. Just four perfectly chosen cheeses in harmony, finished with a golden drizzle of raw wildflower honey from a Coorg apiary." },
    freshnessSection: { title: "Four Perfectly Balanced Cheeses", description: "Each cheese plays a role. Mozzarella provides the melt and stretch. Ricotta adds creaminess and lightness. Gorgonzola brings funk and depth. Parmesan delivers the salty punch. All four are applied at different stages of the bake." },
    orderSection: { price: "₹649", unit: "per 12-inch pizza", highlights: ["Buffalo Mozzarella","Imported Gorgonzola","Wildflower Honey Drizzle"], chefNote: "Add a walnut topping for ₹49 extra. Absolutely worth it.", prepTime: "7 minutes" }
  },
  {
    id: "volcano-chicken",
    name: "Volcano Chicken",
    tagline: "Blazing. Crispy. Unstoppable.",
    price: "₹399",
    originalPrice: "₹629",
    description: "Nashville hot chicken · Sriracha glaze · Pickled jalapeños · Ranch · Coleslaw",
    ingredients: ["Nashville-style spiced fried chicken","Sriracha and honey glaze","Pickled jalapeño coins","Cool ranch drizzle","Crunchy fennel coleslaw"],
    spiceLevel: 3,
    folderPath: "/images/pepperoni",
    themeColor: "#d32f2f",
    gradient: "linear-gradient(135deg, #d32f2f 0%, #7f0000 100%)",
    badge: "FIRESTARTER",
    stats: [{ label: "Spice", val: "🌶🌶🌶" },{ label: "Crust", val: "Crispy" },{ label: "Size", val: "12 inch" }],
    section1: { title: "Volcano Chicken.", subtitle: "Blazing. Crispy. Unstoppable." },
    section2: { title: "Nashville heat on Italian dough.", subtitle: "Double-fried chicken filets basted in our fiery Nashville spice blend, placed on a sriracha-honey base." },
    section3: { title: "Ranch cuts through the fire.", subtitle: "Cool, tangy ranch is drizzled over the top to tame the heat — just enough to keep you coming back." },
    section4: { title: "Survivors only. 🌋", subtitle: "" },
    storySection: { title: "Born From a Dare", description: "One of our regulars dared our chef to make the spiciest pizza possible. The Volcano Chicken was the result. The chicken is marinated in buttermilk and cayenne for 12 hours, double-fried to stay crispy under the toppings, then basted in a scorching blend of hot sauce, cayenne, brown sugar and smoked paprika." },
    freshnessSection: { title: "Double-Fried for Maximum Crunch", description: "The chicken is fried once for the interior, rested, then flash-fried again for an audibly crunchy crust that holds up even after baking. The pickled jalapeños are made in-house for 48 hours in a vinegar-garlic brine that turns them perfectly tangy and bright." },
    orderSection: { price: "₹629", unit: "per 12-inch pizza", highlights: ["12-Hour Buttermilk Marinated Chicken","Double-Fried Crispy Coating","House Pickled Jalapeños"], chefNote: "Sign the wall of fame if you finish a full one alone.", prepTime: "10 minutes" }
  },
];
