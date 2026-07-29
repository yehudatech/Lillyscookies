export type CookieItem = {
  id: string;
  name: string;
  tag: string;
  description: string;
  notes: string[];
  status: "lab" | "drop" | "classic";
};

export const cookies: CookieItem[] = [
  {
    id: "brown-butter-miso",
    name: "Brown Butter Miso Chip",
    tag: "Batch 07",
    description:
      "Toasty brown butter, white chocolate, and a whisper of miso. Sweet, salty, a little mysterious.",
    notes: ["umami", "caramel", "chewy edge"],
    status: "lab",
  },
  {
    id: "lavender-honey",
    name: "Lavender Honey Cloud",
    tag: "Soft bake",
    description:
      "Floral honey dough with crushed lavender sugar. Soft center, delicate crust — afternoon tea energy.",
    notes: ["floral", "honey", "soft"],
    status: "drop",
  },
  {
    id: "cacao-nib-sea-salt",
    name: "Cacao Nib Sea Salt",
    tag: "Dark lab",
    description:
      "70% cacao chunks, roasted nibs, flaky salt. For people who take chocolate seriously.",
    notes: ["bitter-sweet", "crunch", "salt"],
    status: "classic",
  },
  {
    id: "yuzu-white-session",
    name: "Yuzu White Session",
    tag: "Citrus trial",
    description:
      "Bright yuzu zest folded into white chocolate dough. Zingy, creamy, not too sweet.",
    notes: ["citrus", "bright", "creamy"],
    status: "lab",
  },
  {
    id: "cardamom-date",
    name: "Cardamom Date Fold",
    tag: "Spice route",
    description:
      "Warm cardamom, sticky date pieces, toasted sesame. Cozy without being heavy.",
    notes: ["spice", "chewy", "sesame"],
    status: "drop",
  },
  {
    id: "olive-oil-rosemary",
    name: "Olive Oil Rosemary Short",
    tag: "Savory lane",
    description:
      "Herb-scented shortbread with good olive oil and lemon peel. Snackable. Unexpected. Good with coffee.",
    notes: ["herbal", "crumbly", "savory"],
    status: "lab",
  },
];

export const statusLabel: Record<CookieItem["status"], string> = {
  lab: "In the lab",
  drop: "Limited drop",
  classic: "House classic",
};
