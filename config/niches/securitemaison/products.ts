import type { Product } from "@/lib/types";

// Mêmes données internes et le même lien d'affiliation que la niche
// readyscore (même produit, même vendeur) — seul le texte visiteur change.
export const PRODUCTS: Product[] = [
  {
    id: "anti-looter-kit",
    slug: "anti-looter-kit",
    name: "Anti-Looter Kit",
    shortDescription:
      "Un système de sécurité domestique à installer soi-même — détecteurs de mouvement, fil-piège de périmètre, alarmes de fenêtre et projecteur autonome sans électricité — conçu pour rendre votre maison plus difficile à cibler en cas de perturbation.",
    image:
      "https://lh3.googleusercontent.com/CRJMqVx-XZWVSTp6rkrXe5foidYl0TESyrC4tKKj8j3uuaBJLzWSMH0iRRqQFu2QOpwezs6IA8uozbGYSl_LhzVqLwrqfM_amg=s0",
    videoUrl: "https://fast.wistia.net/embed/iframe/buhhnebdmm?seo=false&videoFoam=false",
    images: [
      "https://lh3.googleusercontent.com/YxJPsZBJ7JfIzj619gwdL8Nvp2_E29C4XQ25taxBNJbrv-2NPLUggdKsPPn8bCMg_Q0VvnAX0quV40jVH1SlntyDKBKOjgmN2Lc=w800",
      "https://lh3.googleusercontent.com/fgHcswGk4rXkIO5cdGgQjw6BwqjKwGtJZB7LvDKHERhQ0dKxh-8mQqT8eEJo8ilwefouEHOVwgEl85I8hxdpNI_nsRVT4iS68g=w800",
      "https://lh3.googleusercontent.com/7_rPepSl09LVfcrrZH5Yhf0WeTPgoGgyd4oBsAvh19QwiKtmLblr6O0K8DPxsH-BSM-dae6wcjIefrEDpH0i4JZJvAr2IFRTdw=w800",
      "https://lh3.googleusercontent.com/BL4ky-cGC5B0s_1br7z9yfftxtavrCyrD9E0JcdGPLMHQ1VPat5y_GRHShMN44il-vVHatsVTDTuvyvvXos2tfd4AaLOn-SvPZg=w800",
    ],
    price: 172.03,
    currency: "EUR",
    netRevenuePerSale: 45.31,
    commissionRate: 0.33,
    checkoutConversion: 0.18,
    refundRate: 0.0355,
    affiliateUrl: "https://www.theantilooterkit.com/main/#aff=papagallotoon",
    campaignKey: "securitemaison-launch-a",
    category: "home-security",
    advantages: [
      "Aucun outil ni câblage — détecteurs de mouvement, fil-piège et alarmes de fenêtre installés en quelques minutes",
      "Projecteur autonome, sans câble ni pile à changer",
      "Boîtier étanche et résistant aux chocs, avec 2 télécommandes à partager",
    ],
    disadvantages: [
      "Coût de départ plus élevé qu'une solution DIY assemblée pièce par pièce",
      "Ne remplace pas un système de sécurité complet télésurveillé",
    ],
    recommendedFor: ["low", "medium", "high"],
    countryAvailability: ["FR", "BE", "CH", "CA", "EU"],
    active: true,
  },
];
