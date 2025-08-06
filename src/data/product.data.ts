const Products = [
  {
    id: 1,
    name: "Classic Crewneck Tee",
    imgUrl: "https://picsum.photos/id/10/400/500",
    displayPrice: 35000,
    colors: [
      { id: 1, hex: "#000000", qty: 5, price: 35000 },
      { id: 2, hex: "#ffffff", qty: 5, price: 35000 },
      { id: 3, hex: "#808080", qty: 3, price: 35000 }
    ]
  },
  {
    id: 2,
    name: "Oversized Denim Jacket",
    imgUrl: "https://picsum.photos/id/20/400/500",
    displayPrice: 75000,
    colors: [
      { id: 1, hex: "#4B0082", qty: 2, price: 75000 },
      { id: 2, hex: "#8A2BE2", qty: 2, price: 80000 }
    ]
  },
  {
    id: 3,
    name: "Lace Trim Cami",
    imgUrl: "https://picsum.photos/id/30/400/500",
    displayPrice: 42000,
    colors: [
      { id: 1, hex: "#ffffff", qty: 4, price: 42000 },
      { id: 2, hex: "#D2B48C", qty: 4, price: 42000 }
    ]
  },
  {
    id: 4,
    name: "High-Waisted Skinny Jeans",
    imgUrl: "https://picsum.photos/id/40/400/500",
    displayPrice: 65000,
    colors: [
      { id: 1, hex: "#00008B", qty: 2, price: 65000 },
      { id: 2, hex: "#191970", qty: 2, price: 65000 }
    ]
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    imgUrl: "https://picsum.photos/id/50/400/500",
    displayPrice: 90000,
    colors: [
      { id: 1, hex: "#4B0082", qty: 1, price: 90000 },
      { id: 2, hex: "#8B4513", qty: 1, price: 90000 }
    ]
  },
  {
    id: 6,
    name: "Wool Blend Coat",
    imgUrl: "https://picsum.photos/id/60/400/500",
    displayPrice: 120000,
    colors: [
      { id: 1, hex: "#2F4F4F", qty: 2, price: 120000 },
      { id: 2, hex: "#A9A9A9", qty: 2, price: 125000 }
    ]
  },
  {
    id: 7,
    name: "Floral Print Maxi Dress",
    imgUrl: "https://picsum.photos/id/70/400/500",
    displayPrice: 85000,
    colors: [
      { id: 1, hex: "#8B0000", qty: 3, price: 85000 }
    ]
  },
  {
    id: 8,
    name: "Striped Knit Sweater",
    imgUrl: "https://picsum.photos/id/80/400/500",
    displayPrice: 58000,
    colors: [
      { id: 1, hex: "#778899", qty: 5, price: 58000 },
      { id: 2, hex: "#F5F5DC", qty: 5, price: 58000 }
    ]
  },
  {
    id: 9,
    name: "Cargo Trousers",
    imgUrl: "https://picsum.photos/id/90/400/500",
    displayPrice: 70000,
    colors: [
      { id: 1, hex: "#6B8E23", qty: 2, price: 70000 },
      { id: 2, hex: "#A9A9A9", qty: 2, price: 70000 },
      { id: 3, hex: "#808000", qty: 2, price: 70000 }
    ]
  },
  {
    id: 10,
    name: "Running Shoes",
    imgUrl: "https://picsum.photos/id/100/400/500",
    displayPrice: 95000,
    colors: [
      { id: 1, hex: "#000000", qty: 5, price: 95000 },
      { id: 2, hex: "#C0C0C0", qty: 5, price: 95000 }
    ]
  },
  {
    id: 11,
    name: "Sporty Hoodie",
    imgUrl: "https://picsum.photos/id/110/400/500",
    displayPrice: 62000,
    colors: [
      { id: 1, hex: "#A52A2A", qty: 3, price: 62000 },
      { id: 2, hex: "#483D8B", qty: 3, price: 62000 }
    ]
  },
  {
    id: 12,
    name: "Pleated Midi Skirt",
    imgUrl: "https://picsum.photos/id/120/400/500",
    displayPrice: 55000,
    colors: [
      { id: 1, hex: "#ADD8E6", qty: 4, price: 55000 },
      { id: 2, hex: "#DDA0DD", qty: 4, price: 55000 }
    ]
  },
  {
    id: 13,
    name: "Classic Trench Coat",
    imgUrl: "https://picsum.photos/id/130/400/500",
    displayPrice: 150000,
    colors: [
      { id: 1, hex: "#F5F5DC", qty: 1, price: 150000 }
    ]
  },
  {
    id: 14,
    name: "Graphic Print T-Shirt",
    imgUrl: "https://picsum.photos/id/140/400/500",
    displayPrice: 38000,
    colors: [
      { id: 1, hex: "#000000", qty: 5, price: 38000 },
      { id: 2, hex: "#FFFFFF", qty: 5, price: 38000 }
    ]
  },
  {
    id: 15,
    name: "Slim Fit Chinos",
    imgUrl: "https://picsum.photos/id/150/400/500",
    displayPrice: 68000,
    colors: [
      { id: 1, hex: "#808000", qty: 3, price: 68000 },
      { id: 2, hex: "#696969", qty: 3, price: 68000 }
    ]
  },
  {
    id: 16,
    name: "Aviator Sunglasses",
    imgUrl: "https://picsum.photos/id/160/400/500",
    displayPrice: 45000,
    colors: [
      { id: 1, hex: "#000000", qty: 2, price: 45000 },
      { id: 2, hex: "#C0C0C0", qty: 2, price: 45000 }
    ]
  },
  {
    id: 17,
    name: "Statement Necklace",
    imgUrl: "https://picsum.photos/id/170/400/500",
    displayPrice: 30000,
    colors: [
      { id: 1, hex: "#FFD700", qty: 4, price: 30000 }
    ]
  },
  {
    id: 18,
    name: "Knit Beanie",
    imgUrl: "https://picsum.photos/id/180/400/500",
    displayPrice: 22000,
    colors: [
      { id: 1, hex: "#00008B", qty: 5, price: 22000 },
      { id: 2, hex: "#8B0000", qty: 5, price: 22000 }
    ]
  },
  {
    id: 19,
    name: "Leather Belt",
    imgUrl: "https://picsum.photos/id/190/400/500",
    displayPrice: 50000,
    colors: [
      { id: 1, hex: "#8B4513", qty: 3, price: 50000 },
      { id: 2, hex: "#000000", qty: 3, price: 50000 }
    ]
  },
  {
    id: 20,
    name: "Silk Scarf",
    imgUrl: "https://picsum.photos/id/200/400/500",
    displayPrice: 40000,
    colors: [
      { id: 1, hex: "#B0E0E6", qty: 4, price: 40000 },
      { id: 2, hex: "#FFC0CB", qty: 4, price: 40000 }
    ]
  }
];

export default Products;