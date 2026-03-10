export interface Drink {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  ingredients: string[];
  themeColor: string;
  gradient: string;
  badge: string;
  imagePath: string;
  pairsWith: string;
}

export const drinks: Drink[] = [
  {
    id: "ember-lemonade",
    name: "Ember Lemonade",
    tagline: "Dark, cold and electric.",
    price: "₹199",
    description: "Charcoal lemonade with chili salt rim and orange garnish",
    ingredients: [
      "Activated charcoal lemonade",
      "Fresh squeezed lemon juice",
      "Chili salt rim",
      "Orange slice garnish",
      "Sparkling water"
    ],
    themeColor: "#ff4e00",
    gradient: "linear-gradient(135deg, #ff4e00 0%, #ff8c00 100%)",
    badge: "MOST ORDERED",
    imagePath: "/images/drinks/ember-lemonade.png",
    pairsWith: "Spicy Pepperoni"
  },
  {
    id: "midnight-matcha",
    name: "Midnight Matcha",
    tagline: "Calm meets complex.",
    price: "₹229",
    description: "Iced matcha latte with black sugar boba and milk swirl",
    ingredients: [
      "Premium ceremonial grade matcha",
      "Black sugar boba pearls",
      "Fresh oat milk",
      "Vanilla cold foam",
      "Metal straw"
    ],
    themeColor: "#2d6a4f",
    gradient: "linear-gradient(135deg, #2d6a4f 0%, #081c15 100%)",
    badge: "VEGAN",
    imagePath: "/images/drinks/midnight-matcha.png",
    pairsWith: "Truffle Shroom"
  },
  {
    id: "crimson-fizz",
    name: "Crimson Fizz",
    tagline: "A spectacle in a glass.",
    price: "₹249",
    description: "Hibiscus soda with raspberry, lime and dry ice smoke effect",
    ingredients: [
      "Hibiscus flower concentrate",
      "Fresh raspberry puree",
      "Lime wheel garnish",
      "Dry ice smoke effect",
      "Elderflower sparkling water"
    ],
    themeColor: "#c62828",
    gradient: "linear-gradient(135deg, #c62828 0%, #4a0000 100%)",
    badge: "INSTAGRAMMABLE",
    imagePath: "/images/drinks/crimson-fizz.png",
    pairsWith: "The Midnight Black"
  }
];
