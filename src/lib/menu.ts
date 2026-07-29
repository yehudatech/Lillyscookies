export type CookieItem = {
  id: string;
  name: string;
  tag: string;
  description: string;
  notes: string[];
  status: "seasonal" | "limited" | "classic";
};

export const cookies: CookieItem[] = [
  {
    id: "brown-butter-miso",
    name: "Brown Butter Miso Chip",
    tag: "Customer favorite",
    description:
      "Toasty brown butter, white chocolate, and a whisper of miso. Sweet, salty, and unforgettable.",
    notes: ["umami", "caramel", "chewy edge"],
    status: "classic",
  },
  {
    id: "lavender-honey",
    name: "Lavender Honey Cloud",
    tag: "Soft bake",
    description:
      "Floral honey dough with crushed lavender sugar. Soft center, delicate crust — perfect with tea.",
    notes: ["floral", "honey", "soft"],
    status: "limited",
  },
  {
    id: "cacao-nib-sea-salt",
    name: "Cacao Nib Sea Salt",
    tag: "Dark chocolate",
    description:
      "70% cacao chunks, roasted nibs, flaky salt. For people who take chocolate seriously.",
    notes: ["bitter-sweet", "crunch", "salt"],
    status: "classic",
  },
  {
    id: "yuzu-white-session",
    name: "Yuzu White Chocolate",
    tag: "Citrus",
    description:
      "Bright yuzu zest folded into white chocolate dough. Zingy, creamy, not too sweet.",
    notes: ["citrus", "bright", "creamy"],
    status: "seasonal",
  },
  {
    id: "cardamom-date",
    name: "Cardamom Date Fold",
    tag: "Spice",
    description:
      "Warm cardamom, sticky date pieces, toasted sesame. Cozy without being heavy.",
    notes: ["spice", "chewy", "sesame"],
    status: "limited",
  },
  {
    id: "olive-oil-rosemary",
    name: "Olive Oil Rosemary Shortbread",
    tag: "Savory-sweet",
    description:
      "Herb-scented shortbread with good olive oil and lemon peel. Snackable and excellent with coffee.",
    notes: ["herbal", "crumbly", "savory"],
    status: "seasonal",
  },
];

export const statusLabel: Record<CookieItem["status"], string> = {
  seasonal: "Seasonal",
  limited: "Limited",
  classic: "House classic",
};
