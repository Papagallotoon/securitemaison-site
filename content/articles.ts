// Registre éditorial Sécurité Maison.
//
// Source de vérité unique : la home, les hubs de catégorie et les pages
// d'article lisent tous ce fichier. content/editorial.ts n'y ajoute que la
// mise en scène de la home.
//
// Contrairement à la version anglaise d'origine (produits fictifs, chiffres
// de test inventés pour une offre Digistore24), chaque article ici compare
// de vrais produits Amazon déjà vérifiés en direct (mêmes données que les
// scripts vidéo de la chaîne YouTube "Sécurité Maison") : prix réels, avis
// et compatibilité plutôt que des bancs d'essai fabriqués de toutes pièces.

export type Category = {
  slug: string;
  label: string;
  color: string;
  blurb: string;
};

// Quatre teintes volontairement eloignees les unes des autres (pas des
// nuances d'une meme famille turquoise) et distinctes de l'accent
// generique brand-600 utilise pour les boutons/CTA du site — sinon la
// couleur de categorie se fond dans le reste de l'interface.
export const CATEGORIES: Record<string, Category> = {
  perimeter: {
    slug: "perimeter",
    label: "Périmètre",
    color: "#3B6FA0",
    blurb: "Portes, serrures, fenêtres, garage. La couche qui décide si entrer demande des outils.",
  },
  detection: {
    slug: "detection",
    label: "Détection",
    color: "#B8863D",
    blurb: "Caméras, sonnettes, détecteurs. Ce qui vous dit que ça se passe, et le prouve après coup.",
  },
  response: {
    slug: "response",
    label: "Réaction",
    color: "#B2542F",
    blurb: "Qui agit, à quelle vitesse, et ce que vous faites dans les 90 premières secondes.",
  },
  resilience: {
    slug: "resilience",
    label: "Résilience",
    color: "#6B5B95",
    blurb: "Ce qui continue de fonctionner quand l'électricité ou internet s'arrêtent.",
  },
  family: {
    slug: "family",
    label: "Protection enfant",
    color: "#C2477A",
    blurb: "Prises, angles, tiroirs. Empêcher les petits accidents avant qu'ils n'arrivent.",
  },
};

export const CATEGORY_ORDER = ["perimeter", "detection", "response", "resilience", "family"] as const;

export type CategoryKey = keyof typeof CATEGORIES;

export type Tone = "good" | "ok" | "weak" | "bad";

export const TONE: Record<Tone, string> = {
  good: "#0E7C6E",
  ok: "#1F7E8C",
  weak: "#8A8F93",
  bad: "#B25B4A",
};

export type Block =
  | { k: "p"; text: string }
  | { k: "h2"; text: string }
  | { k: "bars"; title: string; note?: string; items: BarItem[]; max?: number }
  | { k: "scatter"; title: string; note?: string; points: Point[]; xTicks: string[]; xMin: number; xMax: number; yMin: number; yMax: number; yTicks: number[]; trend?: [number, number, number, number] }
  | { k: "split"; title: string; note?: string; left: SplitSide; right: SplitSide }
  | { k: "table"; title?: string; columns: string[]; rows: Row[] }
  | { k: "pick"; rank: string; name: string; price: string; badge: string; tone: Tone; verdict: string; pros: string[]; cons: string[]; href: string; image?: string; imageAlt?: string; imageDark?: boolean }
  | { k: "callout"; title: string; text: string }
  | { k: "steps"; title?: string; items: { title: string; text: string }[] }
  | { k: "quiz"; title: string; text: string }
  | { k: "method"; items: string[] }
  | { k: "video"; url: string; caption: string };

export type BarItem = { label: string; value: number; display: string; tone: Tone };
export type Point = { label: string; x: number; y: number; tone: Tone };
export type Row = { cells: string[]; tone?: Tone };
export type SplitSide = { label: string; value: number; display: string; caption: string; tone: Tone };

export type ArticleMeta = {
  slug: string;
  category: CategoryKey;
  kind: "comparison" | "guide" | "duel" | "checklist";
  kicker: string;
  title: string;
  excerpt: string;
  standfirst: string;
  meta: string;
  date: string;
  number: number;
  readingTime: string;
  updated: string;
  image?: string;
  imageAlt?: string;
  imageDark?: boolean;
  /** Short YouTube déjà publié sur ce même sujet — lien affiché en tête
   *  d'article, pas d'embed (les Shorts sont verticaux, mal adaptés à un
   *  cadre 16:9). */
  youtubeUrl?: string;
  facts: { value: string; label: string }[];
  blocks: Block[];
};

const METHOD_ITEMS = [
  "Produits sélectionnés parmi les meilleures ventes et les mieux notés de leur catégorie sur Amazon.fr.",
  "Prix, disponibilité et fiche produit vérifiés en direct au moment de la rédaction — pas depuis une base de données figée.",
  "Avantages et inconvénients tirés des caractéristiques réelles du produit, pas d'un test en laboratoire que nous n'avons pas mené.",
  "Aucune marque n'a payé pour être recommandée ici. Les liens sont des liens d'affiliation Amazon : voir notre page Affiliation.",
];

export const ARTICLES: ArticleMeta[] = [
  {
    slug: "cameras-de-securite-connectees",
    category: "detection",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleures caméras de sécurité connectées pour la maison",
    excerpt:
      "De la caméra d'intérieur à 22 € au kit extérieur double objectif, notre sélection des meilleures caméras connectées 2026, avec ou sans abonnement.",
    standfirst:
      "Cinq caméras, cinq budgets, une seule question à trancher avant d'acheter : avez-vous besoin d'un abonnement cloud, ou est-ce que le stockage local vous suffit ? Voici comment elles se comparent.",
    meta: "5 produits comparés",
    date: "5 sept.",
    number: 401,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 5 septembre 2026",
    image: "/images/products/eufy-solocam-s340.jpg",
    imageAlt: "Caméra de sécurité extérieure connectée fixée sur un mur",
    youtubeUrl: "https://www.youtube.com/shorts/0i7MmumCzVw",
    facts: [
      { value: "5", label: "caméras comparées" },
      { value: "22 € — 281 €", label: "fourchette de prix" },
      { value: "3", label: "sans abonnement obligatoire" },
    ],
    blocks: [
      {
        k: "p",
        text: "Intérieure ou extérieure, avec ou sans abonnement : les caméras connectées n'ont plus grand-chose à voir entre elles une fois qu'on regarde au-delà du prix affiché. Voici cinq modèles qui couvrent l'essentiel des besoins, du premier prix au double objectif sans angle mort.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "TP-Link Tapo C210",
        price: "21,99 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "À moins de 22 €, une caméra d'intérieur avec rotation motorisée 360° et suivi de mouvement, sans abonnement obligatoire grâce au stockage microSD jusqu'à 512 Go.",
        pros: ["Rotation motorisée 360° avec suivi de mouvement", "Aucun abonnement obligatoire, stockage microSD jusqu'à 512 Go"],
        cons: ["Vision nocturne en noir et blanc uniquement", "WiFi 2,4 GHz seulement"],
        href: "https://www.amazon.fr/dp/B095CLQ1PT?tag=secure012de-21",
        image: "/images/products/tapo-c210.jpg",
        imageAlt: "TP-Link Tapo C210",
      },
      {
        k: "pick",
        rank: "02",
        name: "Ring Indoor Cam (2ème génération)",
        price: "49,99 €",
        badge: "Meilleure intégration Alexa",
        tone: "ok",
        verdict:
          "Un cache de confidentialité physique intégré et une intégration Alexa native en font un bon choix pour un foyer déjà équipé en écosystème Amazon.",
        pros: ["Cache de confidentialité physique intégré", "Intégration Alexa native"],
        cons: ["Abonnement Ring Protect nécessaire pour le cloud"],
        href: "https://www.amazon.fr/dp/B0B6GKHS2S?tag=secure012de-21",
        image: "/images/products/ring-indoor-cam.jpg",
        imageAlt: "Ring Indoor Cam 2ème génération",
      },
      {
        k: "pick",
        rank: "03",
        name: "Xiaomi Outdoor Caméra CW300",
        price: "89,85 €",
        badge: "Meilleure détection IA",
        tone: "good",
        verdict:
          "Détection humaine par intelligence artificielle et vision nocturne couleur, résistante aux intempéries — le bon compromis pour une entrée extérieure.",
        pros: ["Détection humaine par IA", "Résistante aux intempéries, vision nocturne couleur"],
        cons: ["Écosystème Xiaomi Home recommandé pour toutes les fonctions"],
        href: "https://www.amazon.fr/dp/B0CVHPQ9P3?tag=secure012de-21",
        image: "/images/products/xiaomi-cw300.jpg",
        imageAlt: "Xiaomi Outdoor Caméra CW300",
      },
      {
        k: "pick",
        rank: "04",
        name: "eufy Security SoloCam S340",
        price: "125,59 €",
        badge: "Meilleure autonomie",
        tone: "good",
        verdict:
          "Panneau solaire intégré et double objectif 360° sans angle mort, sans abonnement — pensée pour tourner en continu, même loin d'une prise.",
        pros: ["Panneau solaire intégré, autonomie sans recharge", "Double objectif 360° sans angle mort, zéro abonnement"],
        cons: ["Investissement de départ plus élevé"],
        href: "https://www.amazon.fr/dp/B0CF8R2P24?tag=secure012de-21",
        image: "/images/products/eufy-solocam-s340.jpg",
        imageAlt: "eufy Security SoloCam S340",
      },
      {
        k: "pick",
        rank: "05",
        name: "Arlo Pro 5 (lot de 2 caméras)",
        price: "281,12 €",
        badge: "Si le budget n'est pas la contrainte",
        tone: "good",
        verdict:
          "Étanchéité IP65, vision nocturne couleur avancée et sirène intégrée sur les deux caméras du lot — le choix pour couvrir deux angles d'un coup, sans compromis.",
        pros: ["Étanchéité IP65, vision nocturne couleur avancée", "Sirène intégrée, WiFi double bande"],
        cons: ["Fonctions IA avancées derrière l'abonnement Arlo Secure"],
        href: "https://www.amazon.fr/dp/B0BTMGK4VT?tag=secure012de-21",
        image: "/images/products/arlo-pro-5.jpg",
        imageAlt: "Arlo Pro 5, lot de deux caméras",
      },
      {
        k: "quiz",
        title: "Pas sûr que la détection soit votre couche la plus faible ?",
        text: "Sept questions notent votre périmètre, votre détection, votre réaction et votre résilience, et vous disent où investir en premier.",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "eclairage-exterieur-connecte",
    category: "perimeter",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleurs éclairages extérieurs connectés à détecteur de mouvement",
    excerpt:
      "Un projecteur qui s'allume au bon moment reste l'une des dissuasions les plus simples contre les cambriolages : voici 5 solutions connectées.",
    standfirst:
      "Pas besoin de câblage pour dissuader : entre solaire, WiFi et hybride caméra-éclairage, ces cinq projecteurs couvrent l'essentiel des configurations, sans électricien.",
    meta: "5 produits comparés",
    date: "5 sept.",
    number: 402,
    readingTime: "5 min de lecture",
    updated: "Mis à jour le 5 septembre 2026",
    image: "/images/products/steinel-xled-home2.jpg",
    imageAlt: "Projecteur extérieur connecté fixé sur une façade",
    youtubeUrl: "https://www.youtube.com/shorts/WXbwmVmTEOA",
    facts: [
      { value: "5", label: "projecteurs comparés" },
      { value: "38 € — 111 €", label: "fourchette de prix" },
      { value: "3/5", label: "sans câblage électrique" },
    ],
    blocks: [
      {
        k: "p",
        text: "Un projecteur qui s'allume pile au bon moment est l'une des dissuasions les moins chères qui existent — un cambrioleur qui préfère l'ombre passe rarement son chemin devant une façade éclairée. Voici cinq façons d'en installer un sans faire appel à un électricien.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "OREiN Projecteur Extérieur Connecté WiFi",
        price: "37,99 €",
        badge: "Meilleur premier prix connecté",
        tone: "ok",
        verdict:
          "Contrôle à distance via l'app, compatible Alexa et Google, orientable à 450° — l'entrée de gamme la plus flexible du comparatif.",
        pros: ["Contrôle à distance via l'app, compatible Alexa et Google", "Orientable à 450°"],
        cons: ["Marque moins connue, avis clients plus limités"],
        href: "https://www.amazon.fr/dp/B0BB1KHTF7?tag=secure012de-21",
        image: "/images/products/orein-spot-wifi.jpg",
        imageAlt: "OREiN Projecteur Extérieur Connecté WiFi",
      },
      {
        k: "pick",
        rank: "02",
        name: "MEIKEE Projecteur Solaire à Détecteur de Mouvement",
        price: "49,99 €",
        badge: "Meilleur sans câblage",
        tone: "ok",
        verdict:
          "Panneau solaire déporté avec câble de 5 m et étanchéité IP66 — l'option la plus populaire pour une pose sans aucun raccordement électrique.",
        pros: ["Option budget très populaire", "Panneau solaire déporté avec câble 5 m, étanche IP66"],
        cons: ["Détection PIR classique, pas de connexion app/smartphone"],
        href: "https://www.amazon.fr/dp/B0BPL8ZKGS?tag=secure012de-21",
        image: "/images/products/meikee-projecteur-solaire.jpg",
        imageAlt: "MEIKEE Projecteur Solaire à Détecteur de Mouvement",
      },
      {
        k: "pick",
        rank: "03",
        name: "eufy Solar Wall Light Cam S120",
        price: "89,00 €",
        badge: "2-en-1 éclairage et caméra",
        tone: "good",
        verdict:
          "Combine éclairage et caméra en un seul appareil, sans câblage ni changement de batterie — deux produits en un pour le prix d'un seul.",
        pros: ["Combine éclairage et caméra en un seul appareil", "Alimentation solaire, sans câblage ni changement de batterie"],
        cons: ["Recharge dépendante de l'exposition au soleil"],
        href: "https://www.amazon.fr/dp/B0C9ZYHLBZ?tag=secure012de-21",
        image: "/images/products/eufy-s120-solar-light-cam.jpg",
        imageAlt: "eufy Solar Wall Light Cam S120",
      },
      {
        k: "pick",
        rank: "04",
        name: "Govee Projecteur LED RGBIC Connecté",
        price: "99,99 €",
        badge: "Le plus personnalisable",
        tone: "good",
        verdict:
          "Compatible Matter, Alexa et Google Home, avec des couleurs et scènes très personnalisables — plus orienté ambiance que dissuasion pure.",
        pros: ["Compatible Matter, Alexa et Google Home", "Très personnalisable (couleurs, scènes)"],
        cons: ["Le détecteur de mouvement est un accessoire Govee vendu séparément"],
        href: "https://www.amazon.fr/dp/B0CZ91MK62?tag=secure012de-21",
        image: "/images/products/govee-projecteur-rgbic.jpg",
        imageAlt: "Govee Projecteur LED RGBIC Connecté",
      },
      {
        k: "pick",
        rank: "05",
        name: "Steinel XLED Home 2 SC",
        price: "111,21 €",
        badge: "Le plus paramétrable",
        tone: "good",
        verdict:
          "Réglages fins via app Bluetooth et possibilité de synchroniser plusieurs projecteurs en groupe — pour une façade entièrement coordonnée.",
        pros: ["Réglages fins via app Bluetooth", "Possibilité de synchroniser plusieurs projecteurs en groupe"],
        cons: ["Prix plus élevé que la concurrence"],
        href: "https://www.amazon.fr/dp/B07Z537H44?tag=secure012de-21",
        image: "/images/products/steinel-xled-home2.jpg",
        imageAlt: "Steinel XLED Home 2 SC",
      },
      {
        k: "quiz",
        title: "Votre périmètre est-il votre couche la plus faible ?",
        text: "Sept questions notent votre périmètre, votre détection, votre réaction et votre résilience, et vous disent où investir en premier.",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "detecteurs-pour-alarme-diy",
    category: "detection",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleurs détecteurs connectés pour créer votre propre alarme maison",
    excerpt:
      "Portes, fenêtres, mouvement : ces capteurs connectés permettent de monter un système d'alarme sur-mesure sans abonnement de télésurveillance.",
    standfirst:
      "Pas besoin d'un système d'alarme complet pour être alerté : ces cinq capteurs, à partir de 18 €, couvrent portes, fenêtres et mouvement, avec ou sans hub.",
    meta: "5 produits comparés",
    date: "5 sept.",
    number: 403,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 5 septembre 2026",
    image: "/images/products/aqara-motion-sensor-p1.jpg",
    imageAlt: "Détecteur de mouvement connecté posé sur une étagère",
    youtubeUrl: "https://www.youtube.com/shorts/NopBrwbDo_c",
    facts: [
      { value: "5", label: "détecteurs comparés" },
      { value: "18 € — 50 €", label: "fourchette de prix" },
      { value: "1", label: "fonctionne sans hub pour l'alerte locale" },
    ],
    blocks: [
      {
        k: "p",
        text: "Monter sa propre alarme capteur par capteur coûte souvent moins cher qu'un pack tout-en-un, et permet de ne couvrir que ce qui compte vraiment chez vous : la porte d'entrée, la baie vitrée, le couloir. Voici cinq détecteurs pour commencer.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "SwitchBot Capteur de Contact d'Alarme de Porte",
        price: "17,99 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Sirène intégrée sans hub obligatoire pour une alerte locale immédiate — le seul de la sélection qui fonctionne dès la sortie de la boîte.",
        pros: ["Prix très accessible", "Sirène intégrée sans hub obligatoire pour une alerte locale"],
        cons: ["Notifications à distance nécessitent le SwitchBot Hub en plus"],
        href: "https://www.amazon.fr/dp/B094XZ8H5H?tag=secure012de-21",
        image: "/images/products/switchbot-door-alarm.jpg",
        imageAlt: "SwitchBot Capteur de Contact d'Alarme de Porte",
      },
      {
        k: "pick",
        rank: "02",
        name: "SwitchBot Capteur de Mouvement Intelligent",
        price: "17,99 €",
        badge: "Le plus compact",
        tone: "ok",
        verdict:
          "Design compact et bonne autonomie de batterie, pour compléter le capteur de porte SwitchBot sur un même hub.",
        pros: ["Design compact", "Bonne autonomie de batterie"],
        cons: ["Fonctions avancées nécessitent le SwitchBot Hub"],
        href: "https://www.amazon.fr/dp/B0DWXV41FS?tag=secure012de-21",
        image: "/images/products/switchbot-motion-detector.jpg",
        imageAlt: "SwitchBot Capteur de Mouvement Intelligent",
      },
      {
        k: "pick",
        rank: "03",
        name: "Aqara Détecteur d'Ouverture Porte/Fenêtre",
        price: "19,99 €",
        badge: "Meilleure autonomie",
        tone: "good",
        verdict:
          "Très compact, avec une autonomie de batterie annoncée jusqu'à 2 ans — pensé pour être posé et oublié.",
        pros: ["Très compact", "Autonomie batterie jusqu'à 2 ans"],
        cons: ["Nécessite un hub Aqara pour fonctionner à distance"],
        href: "https://www.amazon.fr/dp/B07D37VDM3?tag=secure012de-21",
        image: "/images/products/aqara-door-sensor.jpg",
        imageAlt: "Aqara Détecteur d'Ouverture Porte/Fenêtre",
      },
      {
        k: "pick",
        rank: "04",
        name: "Aqara Détecteur de Mouvement P1",
        price: "24,99 €",
        badge: "Le plus paramétrable",
        tone: "good",
        verdict:
          "Autonomie annoncée jusqu'à 5 ans et délai de détection réglable — pour ajuster finement la sensibilité selon la pièce.",
        pros: ["Autonomie annoncée jusqu'à 5 ans", "Délai de détection réglable"],
        cons: ["Nécessite aussi un hub Aqara compatible"],
        href: "https://www.amazon.fr/dp/B0B9XZ1D51?tag=secure012de-21",
        image: "/images/products/aqara-motion-sensor-p1.jpg",
        imageAlt: "Aqara Détecteur de Mouvement P1",
      },
      {
        k: "pick",
        rank: "05",
        name: "Somfy IntelliTAG",
        price: "49,90 €",
        badge: "Détection la plus précoce",
        tone: "good",
        verdict:
          "Détection pré-intrusion par vibration, avant même l'ouverture — une marque française reconnue en sécurité connectée, pour qui veut anticiper plutôt que constater.",
        pros: ["Détection pré-intrusion par vibration, avant l'ouverture", "Marque française reconnue en sécurité connectée"],
        cons: ["Nécessite un système Somfy Protect compatible pour fonctionner"],
        href: "https://www.amazon.fr/dp/B072DTT57R?tag=secure012de-21",
        image: "/images/products/somfy-intellitag.jpg",
        imageAlt: "Somfy IntelliTAG",
      },
      {
        k: "quiz",
        title: "Pas sûr que la détection soit votre couche la plus faible ?",
        text: "Sept questions notent votre périmètre, votre détection, votre réaction et votre résilience, et vous disent où investir en premier.",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "serrures-et-alarmes-connectees",
    category: "perimeter",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleures serrures et alarmes connectées pour sécuriser sa maison",
    excerpt:
      "Serrures intelligentes et systèmes d'alarme connectés 2026 pour verrouiller et surveiller votre porte à distance.",
    standfirst:
      "Deux façons de sécuriser une porte : l'empêcher de s'ouvrir, ou savoir immédiatement quand elle s'ouvre. Ce comparatif couvre les deux, des serrures aux systèmes d'alarme complets.",
    meta: "5 produits comparés",
    date: "5 sept.",
    number: 404,
    readingTime: "7 min de lecture",
    updated: "Mis à jour le 5 septembre 2026",
    image: "/images/products/nuki-smart-lock-pro.jpg",
    imageAlt: "Serrure connectée posée sur une porte d'entrée",
    youtubeUrl: "https://www.youtube.com/shorts/7asvh-lBXpc",
    facts: [
      { value: "5", label: "produits comparés" },
      { value: "149 € — 503 €", label: "fourchette de prix" },
      { value: "3", label: "serrures + 2 systèmes d'alarme" },
    ],
    blocks: [
      {
        k: "p",
        text: "Trois serrures connectées et deux systèmes d'alarme, du plus simple à installer au plus complet. Les serrures se posent sur le cylindre existant sans perçage ; les alarmes couvrent ce qu'une serrure, même connectée, ne peut pas voir.",
      },
      { k: "h2", text: "Les serrures" },
      {
        k: "pick",
        rank: "01",
        name: "Nuki Smart Lock Pro (4ème génération)",
        price: "149,00 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Se pose sur le cylindre existant sans perçage, WiFi intégré et compatible Matter — l'installation la plus simple du comparatif.",
        pros: ["Se pose sur le cylindre existant, sans perçage", "Compatible Matter, WiFi intégré"],
        cons: ["Le clavier à code se vend séparément"],
        href: "https://www.amazon.fr/dp/B0CK4W99Y7?tag=secure012de-21",
        image: "/images/products/nuki-smart-lock-pro.jpg",
        imageAlt: "Nuki Smart Lock Pro 4ème génération",
      },
      {
        k: "video",
        url: "https://www.youtube.com/watch?v=203xoabCvOs",
        caption: "Installation de la Nuki Smart Lock Pro — vidéo officielle Nuki",
      },
      {
        k: "pick",
        rank: "02",
        name: "Aqara Serrure de Porte U100",
        price: "189,99 €",
        badge: "Lecteur d'empreintes",
        tone: "good",
        verdict:
          "Lecteur d'empreintes digitales pour jusqu'à 50 empreintes stockées, étanche et compatible Apple Home Key et Matter.",
        pros: ["Lecteur d'empreintes digitales, 50 empreintes stockables", "Étanche, compatible Apple Home Key et Matter"],
        cons: ["Hub Aqara nécessaire pour l'intégration complète Alexa/Google Home"],
        href: "https://www.amazon.fr/dp/B0BZSD2L1W?tag=secure012de-21",
        image: "/images/products/aqara-u100.jpg",
        imageAlt: "Aqara Serrure de Porte U100",
      },
      {
        k: "pick",
        rank: "03",
        name: "Yale Linus Smart Lock L2",
        price: "226,86 €",
        badge: "Aucun abonnement",
        tone: "good",
        verdict:
          "Installation sans perçage ni changement de cylindre, et aucun abonnement nécessaire pour les fonctions de base.",
        pros: ["Installation sans perçage ni changement de cylindre", "Aucun abonnement nécessaire"],
        cons: ["Certaines fonctions avancées demandent le pont WiFi Connect"],
        href: "https://www.amazon.fr/dp/B0DC6RXKY6?tag=secure012de-21",
        image: "/images/products/yale-linus-l2.jpg",
        imageAlt: "Yale Linus Smart Lock L2",
      },
      { k: "h2", text: "Les systèmes d'alarme" },
      {
        k: "pick",
        rank: "04",
        name: "Kit Ring Alarm - S",
        price: "188,99 €",
        badge: "Meilleur rapport prix/couverture",
        tone: "good",
        verdict:
          "Réseau Z-Wave qui ne sature pas le WiFi, sirène 104 dB, sans engagement — un kit complet pour démarrer sans abonnement obligatoire.",
        pros: ["Réseau Z-Wave, ne sature pas le WiFi", "Sirène 104dB, sans engagement"],
        cons: ["Pas de télésurveillance professionnelle 24/7 en France, seulement des alertes"],
        href: "https://www.amazon.fr/dp/B08L5TWL9D?tag=secure012de-21",
        image: "/images/products/ring-alarm-kit.jpg",
        imageAlt: "Kit Ring Alarm - S",
      },
      {
        k: "pick",
        rank: "05",
        name: "Somfy Home Alarm",
        price: "502,79 €",
        badge: "Le plus complet",
        tone: "good",
        verdict:
          "Détection anti-intrusion précoce brevetée IntelliTAG, fabriqué en France, avec télésurveillance sans engagement en option — le haut de gamme du comparatif.",
        pros: ["Détection anti-intrusion précoce brevetée IntelliTAG", "Fabriqué en France, télésurveillance sans engagement en option"],
        cons: ["Prix d'entrée élevé"],
        href: "https://www.amazon.fr/dp/B0718W696D?tag=secure012de-21",
        image: "/images/products/somfy-home-alarm.jpg",
        imageAlt: "Somfy Home Alarm",
      },
      {
        k: "quiz",
        title: "Votre périmètre est-il votre couche la plus faible ?",
        text: "Sept questions notent votre périmètre, votre détection, votre réaction et votre résilience, et vous disent où investir en premier.",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "sonnettes-video-connectees",
    category: "detection",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleures sonnettes vidéo connectées pour surveiller votre entrée",
    excerpt:
      "Voir qui sonne à la porte depuis son smartphone, où que l'on soit : notre sélection des meilleures sonnettes vidéo connectées.",
    standfirst:
      "Cinq sonnettes vidéo, toutes autour des 100-130 €, qui se distinguent surtout par ce qu'elles font sans abonnement — un critère qui pèse plus lourd que la fiche technique sur la durée.",
    meta: "5 produits comparés",
    date: "5 sept.",
    number: 405,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 5 septembre 2026",
    image: "/images/products/ring-video-doorbell.jpg",
    imageAlt: "Sonnette vidéo connectée installée à côté d'une porte d'entrée",
    youtubeUrl: "https://www.youtube.com/shorts/2sXlkJhrX3Y",
    facts: [
      { value: "5", label: "sonnettes comparées" },
      { value: "100 € — 130 €", label: "fourchette de prix" },
      { value: "3/5", label: "sans abonnement obligatoire" },
    ],
    blocks: [
      {
        k: "p",
        text: "Toutes ces sonnettes filment et notifient. Ce qui les sépare vraiment, c'est ce qui se passe après : est-ce que voir l'enregistrement demande un abonnement mensuel, ou est-ce inclus ? C'est la question à se poser avant de regarder le reste de la fiche produit.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "Ring Video Doorbell (sans fil, 2ème génération)",
        price: "99,99 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Installation très simple sans perçage électrique, et l'écosystème Alexa le plus mature du marché — l'entrée en matière la plus accessible.",
        pros: ["Installation très simple, sans perçage électrique", "Écosystème Alexa très mature"],
        cons: ["Abonnement Ring Protect quasi indispensable pour l'enregistrement"],
        href: "https://www.amazon.fr/dp/B0931VRJT5?tag=secure012de-21",
        image: "/images/products/ring-video-doorbell.jpg",
        imageAlt: "Ring Video Doorbell sans fil 2ème génération",
      },
      {
        k: "video",
        url: "https://www.youtube.com/watch?v=vl8sZI5AH4g",
        caption: "Fonctionnement de la sonnette vidéo Ring — vidéo officielle Ring",
      },
      {
        k: "pick",
        rank: "02",
        name: "TP-Link Tapo D230S1",
        price: "114,55 €",
        badge: "Meilleur rapport qualité-prix",
        tone: "good",
        verdict:
          "Vidéo 2K nette et autonomie batterie annoncée jusqu'à 180 jours — le meilleur compromis prix/prestations du comparatif.",
        pros: ["Très bon rapport qualité-prix, vidéo 2K nette", "Autonomie batterie annoncée jusqu'à 180 jours"],
        cons: ["Application Tapo parfois jugée moins fluide que Ring"],
        href: "https://www.amazon.fr/dp/B0C8BFXFN6?tag=secure012de-21",
        image: "/images/products/tapo-doorbell-d230s1.jpg",
        imageAlt: "TP-Link Tapo D230S1",
      },
      {
        k: "pick",
        rank: "03",
        name: "Aqara Smart Video Doorbell G4",
        price: "119,63 €",
        badge: "Reconnaissance faciale",
        tone: "good",
        verdict:
          "Reconnaissance faciale et compatibilité HomeKit, Alexa et Google Home — pour qui veut une sonnette multi-écosystème.",
        pros: ["Reconnaissance faciale", "Compatible HomeKit, Alexa et Google Home"],
        cons: ["Configuration initiale moins intuitive que Ring ou eufy"],
        href: "https://www.amazon.fr/dp/B0BZYL6W56?tag=secure012de-21",
        image: "/images/products/aqara-doorbell-g4.jpg",
        imageAlt: "Aqara Smart Video Doorbell G4",
      },
      {
        k: "pick",
        rank: "04",
        name: "eufy Security Video Doorbell E340",
        price: "126,99 €",
        badge: "Meilleur stockage local",
        tone: "good",
        verdict:
          "Double objectif — visage et vue tête aux pieds — et stockage local jusqu'à 128 Go, sans abonnement obligatoire.",
        pros: ["Double objectif (visage + vue tête aux pieds)", "Stockage local jusqu'à 128 Go, sans abonnement obligatoire"],
        cons: ["Plus volumineuse que la concurrence"],
        href: "https://www.amazon.fr/dp/B0CF8RPX5M?tag=secure012de-21",
        image: "/images/products/eufy-doorbell-e340.jpg",
        imageAlt: "eufy Security Video Doorbell E340",
      },
      {
        k: "pick",
        rank: "05",
        name: "SwitchBot Video Doorbell avec écran",
        price: "129,99 €",
        badge: "Écran intérieur inclus",
        tone: "good",
        verdict:
          "Sans abonnement obligatoire et livrée avec un écran intérieur dédié — pratique pour une maison sans smartphone toujours à portée.",
        pros: ["Sans abonnement obligatoire", "Écran intérieur dédié inclus"],
        cons: ["Marque moins implantée en France, moins d'avis clients"],
        href: "https://www.amazon.fr/dp/B0F672TCXQ?tag=secure012de-21",
        image: "/images/products/switchbot-doorbell.jpg",
        imageAlt: "SwitchBot Video Doorbell avec écran",
      },
      {
        k: "quiz",
        title: "Pas sûr que la détection soit votre couche la plus faible ?",
        text: "Sept questions notent votre périmètre, votre détection, votre réaction et votre résilience, et vous disent où investir en premier.",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "boites-a-cles-connectees",
    category: "perimeter",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleures boîtes à clés connectées pour sécuriser vos doubles",
    excerpt:
      "Lockbox extérieures avec ouverture par Bluetooth, application ou code : notre comparatif des meilleures boîtes à clés connectées en 2026.",
    standfirst:
      "Pour un proche, un artisan ou une location saisonnière, une boîte à clés connectée évite de faire circuler un double physique. Cinq modèles, du Bluetooth simple à la génération de codes à distance.",
    meta: "5 produits comparés",
    date: "5 sept.",
    number: 406,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 5 septembre 2026",
    image: "/images/products/igloohome-smart-keybox-3.jpg",
    imageAlt: "Boîte à clés connectée fixée près d'une porte d'entrée",
    youtubeUrl: "https://www.youtube.com/shorts/D1ZOmm3pzMM",
    facts: [
      { value: "5", label: "boîtes à clés comparées" },
      { value: "80 € — 220 €", label: "fourchette de prix" },
      { value: "1", label: "avec synchronisation Airbnb native" },
    ],
    blocks: [
      {
        k: "p",
        text: "Donner un accès temporaire sans faire faire un double : c'est tout l'intérêt d'une boîte à clés connectée. Entre Bluetooth simple, empreinte digitale et génération de code à distance sans internet, voici comment ces cinq modèles se distinguent.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "SEPOX Boîte à Clés Connectée Bluetooth IP65",
        price: "79,99 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Clavier anti-espionnage et étanchéité IP65 pour un prix accessible parmi les boîtes à clés connectées.",
        pros: ["Prix accessible pour une boîte connectée", "Clavier anti-espionnage, étanche IP65"],
        cons: ["Contrôle en Bluetooth uniquement, pas de WiFi"],
        href: "https://www.amazon.fr/dp/B0D86T1G7C?tag=secure012de-21",
        image: "/images/products/sepox-boite-cles-bluetooth.jpg",
        imageAlt: "SEPOX Boîte à Clés Connectée Bluetooth IP65",
      },
      {
        k: "pick",
        rank: "02",
        name: "Populife Boîte à Clés avec Empreinte Digitale",
        price: "119,99 €",
        badge: "Ouverture par empreinte",
        tone: "good",
        verdict:
          "Ouverture par empreinte digitale en plus du code, et fonctionne aussi hors ligne avec un accès à distance possible.",
        pros: ["Ouverture par empreinte digitale en plus du code", "Fonctionne aussi hors ligne, accès à distance possible"],
        cons: ["Application parfois nécessaire pour la configuration initiale"],
        href: "https://www.amazon.fr/dp/B0GD6WH6G4?tag=secure012de-21",
        image: "/images/products/populife-boite-cles-empreinte.jpg",
        imageAlt: "Populife Boîte à Clés avec Empreinte Digitale",
      },
      {
        k: "pick",
        rank: "03",
        name: "ABUS Boîte à Clés Connectée 787",
        price: "140,26 €",
        badge: "Plus grande capacité",
        tone: "good",
        verdict:
          "Marque allemande reconnue en sécurité, avec une grande capacité allant jusqu'à 20 clés.",
        pros: ["Marque allemande reconnue en sécurité", "Grande capacité, jusqu'à 20 clés"],
        cons: ["Design moins discret que les modèles compacts"],
        href: "https://www.amazon.fr/dp/B09KNR761L?tag=secure012de-21",
        image: "/images/products/abus-boite-cles-787.jpg",
        imageAlt: "ABUS Boîte à Clés Connectée 787",
      },
      {
        k: "pick",
        rank: "04",
        name: "igloohome Smart Keybox 3",
        price: "159,00 €",
        badge: "Idéale pour la location",
        tone: "good",
        verdict:
          "Génère des codes PIN et Bluetooth à distance sans connexion internet requise sur la boîte, avec synchronisation Airbnb native — pensée pour la location courte durée.",
        pros: ["Génère des codes PIN et Bluetooth à distance sans internet", "Synchronisation Airbnb native, très fiable pour la location"],
        cons: ["Un peu volumineuse pour un usage résidentiel simple"],
        href: "https://www.amazon.fr/dp/B07G8CVQNK?tag=secure012de-21",
        image: "/images/products/igloohome-smart-keybox-3.jpg",
        imageAlt: "igloohome Smart Keybox 3",
      },
      {
        k: "pick",
        rank: "05",
        name: "Master Lock Boîte à Clés Connectée Bluetooth",
        price: "220,33 €",
        badge: "Le plus robuste",
        tone: "good",
        verdict:
          "Marque historique et très fiable en cadenas et serrures, dans un boîtier compact en zinc résistant aux intempéries.",
        pros: ["Marque historique et très fiable en cadenas/serrures", "Boîtier compact en zinc résistant aux intempéries"],
        cons: ["Tarif élevé comparé aux alternatives génériques"],
        href: "https://www.amazon.fr/dp/B072LC6VKP?tag=secure012de-21",
        image: "/images/products/masterlock-boite-cles-bluetooth.jpg",
        imageAlt: "Master Lock Boîte à Clés Connectée Bluetooth",
      },
      {
        k: "quiz",
        title: "Votre périmètre est-il votre couche la plus faible ?",
        text: "Sept questions notent votre périmètre, votre détection, votre réaction et votre résilience, et vous disent où investir en premier.",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "caches-prises-securite-enfant",
    category: "family",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleurs caches-prises de sécurité pour protéger les enfants",
    excerpt:
      "Bébé qui rampe, tout-petit curieux : ces caches-prises simples et efficaces empêchent les enfants d'introduire un objet dans une prise électrique.",
    standfirst:
      "Pas besoin d'électronique ici : juste du plastique bien pensé qui tient en place. Cinq packs, de 2,90 € à 8,99 €, pour équiper toute une maison sans y passer l'après-midi.",
    meta: "5 produits comparés",
    date: "5 sept.",
    number: 407,
    readingTime: "5 min de lecture",
    updated: "Mis à jour le 5 septembre 2026",
    image: "/images/products/cache-prise-universal-24pcs.jpg",
    imageAlt: "Caches-prises de sécurité installés sur une prise électrique",
    youtubeUrl: "https://www.youtube.com/shorts/heUGA4maffo",
    facts: [
      { value: "5", label: "packs comparés" },
      { value: "2,90 € — 8,99 €", label: "fourchette de prix" },
      { value: "24", label: "prises couvertes par le pack le plus complet" },
    ],
    blocks: [
      {
        k: "p",
        text: "Un enfant qui rampe explore avec les mains et la bouche, et une prise électrique à hauteur de vue est une tentation immédiate. La bonne nouvelle : c'est l'un des équipements de sécurité domestique les moins chers et les plus simples à poser. La question n'est pas laquelle acheter, mais système à clé ou collage définitif.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "Safety 1st Cache Prises avec Clés, 12 Pièces",
        price: "2,90 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Système à clé difficile à retirer pour un enfant, d'une marque reconnue en puériculture, pour un prix imbattable.",
        pros: ["Prix imbattable pour une marque reconnue en puériculture", "Système à clé, difficile à retirer pour un enfant"],
        cons: ["Clé à conserver à portée de main pour un adulte pressé"],
        href: "https://www.amazon.fr/dp/B01LRS24E8?tag=secure012de-21",
        image: "/images/products/cache-prise-safety1st-12pcs.jpg",
        imageAlt: "Safety 1st Cache Prises avec Clés, 12 Pièces",
      },
      {
        k: "pick",
        rank: "02",
        name: "reer 32030, Lot de 10 Cache-Prises à Coller",
        price: "6,99 €",
        badge: "Le plus stable",
        tone: "good",
        verdict:
          "Marque allemande spécialiste de la sécurité bébé, testée intensivement — pose par collage qui ne bouge pas une fois en place.",
        pros: ["Marque allemande spécialiste de la sécurité bébé, testée intensivement", "Pose par collage, ne bouge pas une fois en place"],
        cons: ["Collage définitif, plus difficile à retirer si besoin"],
        href: "https://www.amazon.fr/dp/B08Y9SFZ1P?tag=secure012de-21",
        image: "/images/products/cache-prise-reer-32030.jpg",
        imageAlt: "reer 32030, Lot de 10 Cache-Prises à Coller",
      },
      {
        k: "pick",
        rank: "03",
        name: "Dreambaby Cache-Prises avec Clés",
        price: "7,31 €",
        badge: "Retrait le plus facile",
        tone: "good",
        verdict:
          "Marque néo-zélandaise très populaire en puériculture, avec un retrait facile pour un adulte grâce à la clé fournie.",
        pros: ["Marque néo-zélandaise très populaire en puériculture", "Retrait facile pour un adulte grâce à la clé fournie"],
        cons: ["Stock limité chez ce vendeur au moment de la vérification"],
        href: "https://www.amazon.fr/dp/B0049GY2R8?tag=secure012de-21",
        image: "/images/products/cache-prise-dreambaby-cles.jpg",
        imageAlt: "Dreambaby Cache-Prises avec Clés",
      },
      {
        k: "pick",
        rank: "04",
        name: "Cache Prise Bébé Electrique Universal, Lot de 24 (20+4)",
        price: "8,49 €",
        badge: "Le plus grand lot",
        tone: "good",
        verdict:
          "24 unités, largement de quoi équiper toute la maison, compatibles avec les prises Schuko 10/16A standards françaises.",
        pros: ["24 unités, largement de quoi équiper toute la maison", "Compatible prises Schuko 10/16A standards françaises"],
        cons: ["Marque générique, finition moins soignée que Reer ou Safety 1st"],
        href: "https://www.amazon.fr/dp/B07VPKFTS9?tag=secure012de-21",
        image: "/images/products/cache-prise-universal-24pcs.jpg",
        imageAlt: "Cache Prise Bébé Electrique Universal, Lot de 24",
      },
      {
        k: "pick",
        rank: "05",
        name: "HOMYBABY Cache Prise Bébé Français, Pack x20 + E-book",
        price: "8,99 €",
        badge: "Sans clé ni adhésif",
        tone: "ok",
        verdict:
          "Conçu spécifiquement pour les prises françaises type E, sans clé ni adhésif, livré avec un e-book de conseils sécurité bébé.",
        pros: ["Conçu pour les prises françaises type E, sans clé ni adhésif", "Livré avec un e-book de conseils sécurité bébé"],
        cons: ["Amovible facilement par un enfant plus grand et déterminé"],
        href: "https://www.amazon.fr/dp/B0DWSZK3CR?tag=secure012de-21",
        image: "/images/products/cache-prise-homybaby-20pcs.jpg",
        imageAlt: "HOMYBABY Cache Prise Bébé Français, Pack x20",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "coffres-forts-connectes",
    category: "perimeter",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleurs coffres-forts connectés pour protéger vos objets de valeur",
    excerpt:
      "Ouverture par code ou application, alertes en cas d'effraction : notre sélection des meilleurs coffres-forts connectés pour la maison en 2026.",
    standfirst:
      "Du modèle électronique simple au coffre piloté par application avec alertes en direct, cinq coffres-forts pour protéger documents, bijoux et liquidités, de 46 € à 215 €.",
    meta: "5 produits comparés",
    date: "5 sept.",
    number: 408,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 5 septembre 2026",
    image: "/images/products/yale-yss250-connecte.jpg",
    imageAlt: "Coffre-fort connecté posé dans un dressing",
    youtubeUrl: "https://www.youtube.com/shorts/r88EZ_CqZaE",
    facts: [
      { value: "5", label: "coffres-forts comparés" },
      { value: "46 € — 215 €", label: "fourchette de prix" },
      { value: "2", label: "avec notifications d'ouverture à distance" },
    ],
    blocks: [
      {
        k: "p",
        text: "Un coffre-fort sert à deux choses : ralentir quelqu'un qui n'a pas le code, et vous prévenir si quelqu'un essaie quand même. Les modèles électroniques simples font bien la première partie ; les modèles connectés font aussi la seconde.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "Yale Coffre-Fort Électronique Small YSV/200/DB2",
        price: "45,72 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Marque reconnue, serrure électronique à 100 000 combinaisons, format compact facile à fixer au sol ou en armoire.",
        pros: ["Marque reconnue, serrure électronique 100 000 combinaisons", "Format compact facile à fixer au sol ou en armoire"],
        cons: ["Pas de connexion app, code uniquement"],
        href: "https://www.amazon.fr/dp/B0B4BJ4D63?tag=secure012de-21",
        image: "/images/products/yale-ysv200-small.jpg",
        imageAlt: "Yale Coffre-Fort Électronique Small YSV/200/DB2",
      },
      {
        k: "pick",
        rank: "02",
        name: "Amazon Basics Coffre-Fort Électronique 14L",
        price: "73,17 €",
        badge: "Meilleur volume",
        tone: "good",
        verdict:
          "Bon volume de rangement pour documents et bijoux, clavier numérique programmable, fixation murale/sol incluse.",
        pros: ["Bon volume de rangement pour documents et bijoux", "Clavier numérique programmable, fixation murale/sol incluse"],
        cons: ["Aucune alerte à distance en cas de tentative d'effraction"],
        href: "https://www.amazon.fr/dp/B00UG9HB1Q?tag=secure012de-21",
        image: "/images/products/amazon-basics-coffre-14l.jpg",
        imageAlt: "Amazon Basics Coffre-Fort Électronique 14L",
      },
      {
        k: "pick",
        rank: "03",
        name: "Xcase Coffre-Fort Connecté avec Lecteur d'Empreinte et Passerelle WiFi",
        price: "119,95 €",
        badge: "Le plus polyvalent",
        tone: "good",
        verdict:
          "Ouverture par empreinte digitale, code ou passerelle WiFi, avec suivi et notifications d'ouverture à distance.",
        pros: ["Ouverture par empreinte digitale, code ou passerelle WiFi", "Suivi et notifications d'ouverture à distance"],
        cons: ["Configuration de la passerelle WiFi un peu technique"],
        href: "https://www.amazon.fr/dp/B0CWQ9X632?tag=secure012de-21",
        image: "/images/products/xcase-coffre-connecte-wifi.jpg",
        imageAlt: "Xcase Coffre-Fort Connecté avec Lecteur d'Empreinte",
      },
      {
        k: "pick",
        rank: "04",
        name: "Uplock Evolution Mini Coffre-Fort Portable Connecté",
        price: "129,00 €",
        badge: "Le plus portable",
        tone: "good",
        verdict:
          "Alarme anti-arrachement intégrée et verrouillage interne robuste — idéal en complément du coffre principal, ou en déplacement.",
        pros: ["Alarme anti-arrachement intégrée, très portable", "Verrouillage interne robuste, idéal en complément du coffre principal"],
        cons: ["Capacité réduite, pensé pour petits objets de valeur"],
        href: "https://www.amazon.fr/dp/B0C6TZMC4P?tag=secure012de-21",
        image: "/images/products/uplock-evolution.jpg",
        imageAlt: "Uplock Evolution Mini Coffre-Fort Portable Connecté",
      },
      {
        k: "pick",
        rank: "05",
        name: "Yale Coffre-Fort Connecté Haute Sécurité 20,5L YSS/250/EB1",
        price: "214,98 €",
        badge: "Le plus complet",
        tone: "good",
        verdict:
          "Contrôle d'accès à distance par application avec partage de codes et notifications d'ouverture en direct — le haut de gamme du comparatif.",
        pros: ["Contrôle d'accès à distance par application, partage de codes", "Notifications d'ouverture en direct, marque premium reconnue"],
        cons: ["Investissement élevé pour un coffre de cette taille"],
        href: "https://www.amazon.fr/dp/B0BN33DTT2?tag=secure012de-21",
        image: "/images/products/yale-yss250-connecte.jpg",
        imageAlt: "Yale Coffre-Fort Connecté Haute Sécurité 20,5L",
      },
      {
        k: "quiz",
        title: "Votre périmètre est-il votre couche la plus faible ?",
        text: "Sept questions notent votre périmètre, votre détection, votre réaction et votre résilience, et vous disent où investir en premier.",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "detecteurs-bris-vitre-fenetre",
    category: "detection",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleurs détecteurs de bris de vitre et capteurs de vibration",
    excerpt:
      "Ces capteurs détectent la vibration ou le bris d'une vitre avant même qu'un intrus n'entre chez vous, pour une alerte précoce sur vos fenêtres et baies vitrées.",
    standfirst:
      "Cinq capteurs pensés pour l'alerte précoce sur une fenêtre ou une baie vitrée, de 13 € pièce à un lot de 8 pour équiper toute une façade.",
    meta: "5 produits comparés",
    date: "5 sept.",
    number: 409,
    readingTime: "5 min de lecture",
    updated: "Mis à jour le 5 septembre 2026",
    image: "/images/products/detecteur-bris-vitre-frient-zigbee.jpg",
    imageAlt: "Détecteur de bris de vitre fixé sur une fenêtre",
    youtubeUrl: "https://www.youtube.com/shorts/IZ4Jrsu9JJg",
    facts: [
      { value: "5", label: "détecteurs comparés" },
      { value: "13 € — 45 €", label: "fourchette de prix" },
      { value: "1", label: "combine ouverture ET vibration en un boîtier" },
    ],
    blocks: [
      {
        k: "p",
        text: "Un détecteur de bris de vitre alerte avant que l'intrus ait fini d'entrer, contrairement à un capteur d'ouverture qui ne réagit qu'une fois la fenêtre déjà ouverte. Ces cinq modèles couvrent l'essentiel des configurations, du capteur simple au lot pour équiper toute une façade.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "Nivian NVS-VIBRATION2, Détecteur sans Fil de Vibration et Bris de Vitre",
        price: "12,99 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Installation sans câble et portée jusqu'à 100 m, à un prix très accessible — fonctionne surtout en complément d'un système d'alarme Nivian.",
        pros: ["Prix très accessible, installation sans câble", "Portée jusqu'à 100 m"],
        cons: ["Fonctionne surtout en complément d'un système d'alarme Nivian 433 MHz"],
        href: "https://www.amazon.fr/dp/B0FWCNQ7HB?tag=secure012de-21",
        image: "/images/products/detecteur-bris-vitre-nivian.jpg",
        imageAlt: "Nivian NVS-VIBRATION2",
      },
      {
        k: "pick",
        rank: "02",
        name: "Smartwares SMA-40952, Alarme Capteur Bris de Vitre",
        price: "17,97 €",
        badge: "Le plus autonome",
        tone: "good",
        verdict:
          "Marque néerlandaise reconnue en sécurité domestique, fonctionne de façon autonome sans hub ni abonnement.",
        pros: ["Marque néerlandaise reconnue en sécurité domestique", "Fonctionne de façon autonome, sans hub ni abonnement"],
        cons: ["Sirène locale uniquement, pas de notification smartphone"],
        href: "https://www.amazon.fr/dp/B07QBDCJX6?tag=secure012de-21",
        image: "/images/products/detecteur-bris-vitre-smartwares.jpg",
        imageAlt: "Smartwares SMA-40952",
      },
      {
        k: "pick",
        rank: "03",
        name: "frient Capteur de Vibration Zigbee",
        price: "30,95 €",
        badge: "Le plus paramétrable",
        tone: "good",
        verdict:
          "Accéléromètre 3 axes avec 15 niveaux de sensibilité réglables, s'intègre à un écosystème domotique Zigbee.",
        pros: ["Accéléromètre 3 axes, 15 niveaux de sensibilité réglables", "S'intègre à un écosystème domotique Zigbee (SmartThings, Homey)"],
        cons: ["Nécessite un hub Zigbee compatible pour fonctionner"],
        href: "https://www.amazon.fr/dp/B0FNF8VNNK?tag=secure012de-21",
        image: "/images/products/detecteur-bris-vitre-frient-zigbee.jpg",
        imageAlt: "frient Capteur de Vibration Zigbee",
      },
      {
        k: "pick",
        rank: "04",
        name: "Daewoo Security WDV301, Contacteur Ouverture et Vibration 2-en-1",
        price: "38,62 €",
        badge: "2-en-1",
        tone: "good",
        verdict:
          "Combine détection d'ouverture ET de vibration en un seul boîtier — alerte avant intrusion, sans abonnement requis.",
        pros: ["Combine détection d'ouverture ET de vibration en un seul boîtier", "Alerte avant intrusion, sans abonnement requis"],
        cons: ["Plus cher qu'un simple capteur de vibration seul"],
        href: "https://www.amazon.fr/dp/B0FTFQTTP3?tag=secure012de-21",
        image: "/images/products/detecteur-bris-vitre-daewoo-wdv301.jpg",
        imageAlt: "Daewoo Security WDV301",
      },
      {
        k: "pick",
        rank: "05",
        name: "Cozier Alarme Antivol Vibration Rupture Vitres, Lot de 8",
        price: "44,99 €",
        badge: "Idéal pour toute la maison",
        tone: "good",
        verdict:
          "8 unités pour équiper toutes les fenêtres de la maison, avec une sirène puissante de 120 dB pour dissuader avant l'entrée.",
        pros: ["8 unités pour équiper toutes les fenêtres de la maison", "Sirène puissante 120 dB, idéal pour dissuader avant l'entrée"],
        cons: ["Qualité de fabrication plus basique qu'une marque spécialisée"],
        href: "https://www.amazon.fr/dp/B08ZJ92T9F?tag=secure012de-21",
        image: "/images/products/detecteur-bris-vitre-cozier-8pcs.jpg",
        imageAlt: "Cozier Alarme Antivol Vibration Rupture Vitres",
      },
      {
        k: "quiz",
        title: "Pas sûr que la détection soit votre couche la plus faible ?",
        text: "Sept questions notent votre périmètre, votre détection, votre réaction et votre résilience, et vous disent où investir en premier.",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "interphones-video-connectes",
    category: "detection",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleurs interphones vidéo connectés pour sécuriser votre entrée",
    excerpt:
      "Écran tactile, ouverture à distance depuis le smartphone : notre sélection des meilleurs interphones vidéo connectés pour votre porte d'entrée.",
    standfirst:
      "Du visiophone basique à l'interphone premium compatible Alexa et Google Home, cinq modèles qui vont de 160 € à 300 € — le bon choix dépend surtout de si vous voulez juste voir qui sonne, ou piloter l'ouverture à distance au quotidien.",
    meta: "5 produits comparés",
    date: "7 sept.",
    number: 410,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 7 septembre 2026",
    image: "/images/products/nivian-interphone-wifi.jpg",
    imageAlt: "Interphone vidéo connecté avec écran tactile installé à l'entrée",
    youtubeUrl: "https://youtube.com/watch?v=cAXyZrma4zQ",
    facts: [
      { value: "5", label: "interphones comparés" },
      { value: "160 € — 300 €", label: "fourchette de prix" },
      { value: "Wifi", label: "connexion, pas de fil dédié requis" },
    ],
    blocks: [
      {
        k: "p",
        text: "Contrairement à une simple sonnette vidéo, un interphone connecté remplace tout le poste existant : écran tactile intérieur, ouverture de porte à distance, souvent une installation filaire à deux fils. C'est plus engageant à poser, mais plus complet à l'usage — surtout pour ouvrir sans se déplacer.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "NIVIAN Interphone Vidéo WiFi Full HD 7\"",
        price: "159,99 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Grand écran tactile 7 pouces inclus et ouverture à distance via l'application Tuya — l'entrée en matière la plus accessible du comparatif.",
        pros: ["Grand écran tactile 7 pouces inclus", "Ouverture à distance via l'application Tuya"],
        cons: ["Installation filaire 2 fils à prévoir"],
        href: "https://www.amazon.fr/dp/B0F1ZBYDQJ?tag=secure012de-21",
        image: "/images/products/nivian-interphone-wifi.jpg",
        imageAlt: "NIVIAN Interphone Vidéo WiFi Full HD 7 pouces",
      },
      {
        k: "pick",
        rank: "02",
        name: "EZVIZ Visiophone Connecté WiFi CP5",
        price: "189,99 €",
        badge: "Meilleur rapport qualité-prix",
        tone: "good",
        verdict:
          "Marque reconnue et fiable en vidéosurveillance connectée, avec déverrouillage à distance et audio bidirectionnel — un choix sûr.",
        pros: ["Marque reconnue et fiable en vidéosurveillance connectée", "Déverrouillage à distance, audio bidirectionnel"],
        cons: ["Nécessite un compte et l'app EZVIZ pour toutes les fonctions"],
        href: "https://www.amazon.fr/dp/B0DHVRDXNX?tag=secure012de-21",
        image: "/images/products/ezviz-cp5-visiophone.jpg",
        imageAlt: "EZVIZ Visiophone Connecté WiFi CP5",
      },
      {
        k: "pick",
        rank: "03",
        name: "Imou 3K Visiophone Connecté 2 Fils",
        price: "209,99 €",
        badge: "Détection intelligente",
        tone: "good",
        verdict:
          "Détection intelligente personne/véhicule et quatre modes de déverrouillage (code, carte, app, moniteur) — le plus polyvalent à l'ouverture.",
        pros: ["Détection intelligente personne/véhicule", "Déverrouillage par code, carte, app ou moniteur intérieur"],
        cons: ["Prix plus élevé que les modèles basiques"],
        href: "https://www.amazon.fr/dp/B0GVS83X4G?tag=secure012de-21",
        image: "/images/products/imou-3k-visiophone.jpg",
        imageAlt: "Imou 3K Visiophone Connecté 2 Fils",
      },
      {
        k: "pick",
        rank: "04",
        name: "EZVIZ HP7 2K Visiophone Connecté",
        price: "259,90 €",
        badge: "Meilleure image",
        tone: "good",
        verdict:
          "Résolution 2K nette de jour comme de nuit, WiFi double bande et étanchéité pour usage extérieur — pour qui veut la meilleure image du lot.",
        pros: ["Résolution 2K nette de jour comme de nuit", "WiFi double bande, étanche pour usage extérieur"],
        cons: ["Investissement conséquent pour une seule entrée"],
        href: "https://www.amazon.fr/dp/B0BYSK333C?tag=secure012de-21",
        image: "/images/products/ezviz-hp7-visiophone.jpg",
        imageAlt: "EZVIZ HP7 2K Visiophone Connecté",
      },
      {
        k: "pick",
        rank: "05",
        name: "Philips WelcomeEye Connect 3",
        price: "299,00 €",
        badge: "Choix Premium",
        tone: "good",
        verdict:
          "Marque Philips reconnue, compatible Alexa et Google Home, image 3K très nette sur écran tactile 7 pouces — le haut de gamme du comparatif.",
        pros: ["Marque Philips reconnue, compatible Alexa et Google Home", "Image 3K très nette, écran tactile 7 pouces"],
        cons: ["Le plus onéreux de la sélection"],
        href: "https://www.amazon.fr/dp/B0DYWZX2LW?tag=secure012de-21",
        image: "/images/products/philips-welcomeeye-connect3.jpg",
        imageAlt: "Philips WelcomeEye Connect 3",
      },
      {
        k: "quiz",
        title: "Pas sûr que la détection soit votre couche la plus faible ?",
        text: "Sept questions notent votre périmètre, votre détection, votre réaction et votre résilience, et vous disent où investir en premier.",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "alarmes-piscine-connectees",
    category: "family",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleures alarmes de piscine connectées pour la sécurité des enfants",
    excerpt:
      "La noyade est silencieuse et rapide : une alarme de piscine qui détecte l'immersion peut faire toute la différence quand un enfant s'approche du bassin sans surveillance.",
    standfirst:
      "Du modèle flottant basique à l'alarme pilotée par application, cinq systèmes de détection d'immersion pour surveiller la piscine même quand personne ne regarde, de 87 € à plus de 500 €.",
    meta: "5 produits comparés",
    date: "8 sept.",
    number: 411,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 8 septembre 2026",
    image: "/images/products/bcone-alarme-piscine-connectee-app.jpg",
    imageAlt: "Alarme de piscine flottante connectée près d'un bassin",
    youtubeUrl: "https://youtube.com/watch?v=IUR2fvPe3a0",
    facts: [
      { value: "5", label: "alarmes comparées" },
      { value: "87 € — 502 €", label: "fourchette de prix" },
      { value: "2/5", label: "avec application smartphone" },
    ],
    blocks: [
      {
        k: "p",
        text: "Toutes ces alarmes détectent une immersion et déclenchent une sirène. La vraie différence est ce qui se passe quand vous n'êtes pas dans le jardin : certaines n'alertent que sur place, d'autres poussent une notification sur votre téléphone où que vous soyez. C'est le critère qui compte le plus pour une vraie tranquillité d'esprit.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "ELEKTROBOCK Alarme de Piscine ELBO-073 Flottante",
        price: "87,46 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Sirène puissante de 95dB et récepteur radio déporté inclus — une première protection accessible, sans application ni abonnement.",
        pros: ["Sirène puissante de 95dB, récepteur radio déporté inclus", "Prix accessible pour une première protection"],
        cons: ["Pas d'application, alerte sonore uniquement"],
        href: "https://www.amazon.fr/dp/B01HMI8ZPY?tag=secure012de-21",
        image: "/images/products/elektrobock-alarme-piscine-flottante.jpg",
        imageAlt: "ELEKTROBOCK Alarme de Piscine ELBO-073 Flottante",
      },
      {
        k: "pick",
        rank: "02",
        name: "BCone Alarme de Sécurité Piscine Flottante Connectée",
        price: "502,48 €",
        badge: "Choix Premium",
        tone: "good",
        verdict:
          "Notification sur smartphone en cas de détection de chute, où que vous soyez — le plus complet du comparatif, à prix premium.",
        pros: ["Notification sur smartphone en cas de détection de chute", "Sirène puissante en complément de l'alerte app"],
        cons: ["Investissement important pour ce type d'équipement"],
        href: "https://www.amazon.fr/dp/B08T863DNT?tag=secure012de-21",
        image: "/images/products/bcone-alarme-piscine-connectee-app.jpg",
        imageAlt: "BCone Alarme de Sécurité Piscine Flottante Connectée",
      },
      {
        k: "pick",
        rank: "03",
        name: "Alarme de Piscine Solo avec Application Bluetooth",
        price: "247,13 €",
        badge: "Compatible tous bassins",
        tone: "good",
        verdict:
          "Compatible piscines hors sol et creusées, pilotage et alertes via l'application Bluetooth — un bon compromis connecté.",
        pros: ["Compatible piscines hors sol et creusées", "Pilotage et alertes via l'application Bluetooth"],
        cons: ["Portée Bluetooth limitée selon la configuration du jardin"],
        href: "https://www.amazon.fr/dp/B09LVGHL83?tag=secure012de-21",
        image: "/images/products/alarme-piscine-solo-bluetooth-app.jpg",
        imageAlt: "Alarme de Piscine Solo avec Application Bluetooth",
      },
      {
        k: "pick",
        rank: "04",
        name: "Smartpool Pe23 Pooleye Alarme d'Immersion Conforme ASTM",
        price: "176,68 €",
        badge: "Norme de sécurité",
        tone: "good",
        verdict:
          "Conforme à la norme de sécurité ASTM, avec récepteur distant inclus — un choix rassurant côté certification.",
        pros: ["Conforme à la norme de sécurité ASTM", "Récepteur distant inclus"],
        cons: ["Design plus daté que les modèles connectés récents"],
        href: "https://www.amazon.fr/dp/B0050FGV1M?tag=secure012de-21",
        image: "/images/products/smartpool-pooleye-astm.jpg",
        imageAlt: "Smartpool Pe23 Pooleye Alarme d'Immersion",
      },
      {
        k: "pick",
        rank: "05",
        name: "Alarme Piscine avec Sirène Déportée et Clé Magnétique",
        price: "329,00 €",
        badge: "Meilleure couverture",
        tone: "good",
        verdict:
          "Clé magnétique pour désactiver facilement lors de la baignade surveillée, couverture annoncée jusqu'à 32 m² de bassin.",
        pros: ["Clé magnétique pour désactiver facilement lors de la baignade surveillée", "Couverture annoncée jusqu'à 32 m² de bassin"],
        cons: ["Nécessite de bien réactiver l'alarme après chaque usage"],
        href: "https://www.amazon.fr/dp/B08D9V3NN7?tag=secure012de-21",
        image: "/images/products/alarme-piscine-sirene-cle-magnetique.jpg",
        imageAlt: "Alarme Piscine avec Sirène Déportée et Clé Magnétique",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "barrieres-securite-piscine",
    category: "family",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleures barrières de sécurité pour piscine",
    excerpt:
      "Contrairement à l'alarme qui prévient après coup, la barrière empêche physiquement l'accès au bassin : la protection recommandée en premier pour une piscine avec de jeunes enfants dans le jardin.",
    standfirst:
      "Du modèle générique en tissu textilène à la barrière certifiée NF P 90-306, cinq clôtures de piscine pour fermer l'accès au bassin quand personne ne surveille, de 75 € à 93 €.",
    meta: "5 produits comparés",
    date: "10 sept.",
    number: 412,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 10 septembre 2026",
    image: "/images/products/dreamade-barriere-piscine.jpg",
    imageAlt: "Barrière de sécurité installée autour d'une piscine",
    facts: [
      { value: "5", label: "barrières comparées" },
      { value: "75 € — 93 €", label: "fourchette de prix" },
      { value: "1/5", label: "certifiée NF P 90-306" },
    ],
    blocks: [
      {
        k: "p",
        text: "Une barrière ne remplace pas la surveillance, mais elle ferme physiquement l'accès au bassin plutôt que de se contenter d'alerter après coup. La différence entre les modèles tient surtout à la norme (NF P 90-306 pour la seule barrière certifiée de cette sélection) et à la qualité des fixations et du tissu.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "DREAMADE Barrière de Piscine 360 x 125 cm Noir",
        price: "74,99 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict:
          "Tube aluminium et pieds inox, mailles fines pour empêcher les doigts de passer — une première protection accessible.",
        pros: ["Tube aluminium et pieds inox, résistant à l'humidité", "Mailles assez fines pour empêcher les doigts de passer"],
        cons: ["Peu d'avis clients pour l'instant"],
        href: "https://www.amazon.fr/dp/B07Y41FH2P?tag=secure012de-21",
        image: "/images/products/dreamade-barriere-piscine.jpg",
        imageAlt: "DREAMADE Barrière de Piscine 360 x 125 cm Noir",
      },
      {
        k: "pick",
        rank: "02",
        name: "GOPLUS Barrière de Piscine Pliable en Tissu Textilène",
        price: "74,99 €",
        badge: "Meilleure note",
        tone: "good",
        verdict: "4,8 étoiles, la meilleure note du comparatif, et s'adapte aux piscines de formes différentes.",
        pros: ["Meilleure note du comparatif, 4,8 étoiles", "S'adapte aux piscines de formes différentes"],
        cons: ["Stock limité selon les périodes"],
        href: "https://www.amazon.fr/dp/B07S36YV3Z?tag=secure012de-21",
        image: "/images/products/goplus-barriere-piscine-pliable.jpg",
        imageAlt: "GOPLUS Barrière de Piscine Pliable en Tissu Textilène",
      },
      {
        k: "pick",
        rank: "03",
        name: "GIANTEX Barrière Piscine 4 Panneaux 360 x 125 cm",
        price: "74,99 €",
        badge: "Kit complet",
        tone: "good",
        verdict: "Kit de montage fourni et cadre aluminium, avec un bon volume d'avis pour ce type de produit.",
        pros: ["Kit de montage fourni, cadre aluminium", "Bon volume d'avis pour ce type de produit"],
        cons: ["Installation à deux personnes recommandée"],
        href: "https://www.amazon.fr/dp/B096TRHYQL?tag=secure012de-21",
        image: "/images/products/giantex-barriere-piscine-4-panneaux.jpg",
        imageAlt: "GIANTEX Barrière Piscine 4 Panneaux 360 x 125 cm",
      },
      {
        k: "pick",
        rank: "04",
        name: "EDG by Aqualux Module Complet 3,2 m Conforme NF P 90-306",
        price: "92,80 €",
        badge: "Norme de sécurité",
        tone: "good",
        verdict: "La seule barrière conforme à la norme française NF P 90-306 de cette sélection — un choix rassurant côté certification.",
        pros: ["Conforme à la norme française NF P 90-306 sur les barrières de piscine", "Marque spécialisée, près de 80 avis avec bonne note"],
        cons: ["Plus cher que les modèles génériques"],
        href: "https://www.amazon.fr/dp/B00GWEQD4U?tag=secure012de-21",
        image: "/images/products/edg-aqualux-barriere-piscine-nf.jpg",
        imageAlt: "EDG by Aqualux Module Complet 3,2 m Conforme NF P 90-306",
      },
      {
        k: "pick",
        rank: "05",
        name: "Outsunny Clôture Barrière de Sécurité Lot de 4, 365 x 126 cm",
        price: "86,90 €",
        badge: "Meilleure longueur",
        tone: "good",
        verdict: "Lot de 4 panneaux avec pieds en acier inoxydable, pour couvrir une plus grande longueur de bassin.",
        pros: ["Lot de 4 panneaux, bonne longueur totale", "Pieds en acier inoxydable"],
        cons: ["Encore peu d'avis clients"],
        href: "https://www.amazon.fr/dp/B0FB3Y7JYW?tag=secure012de-21",
        image: "/images/products/outsunny-barriere-piscine-lot-4.jpg",
        imageAlt: "Outsunny Clôture Barrière de Sécurité Lot de 4, 365 x 126 cm",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "barrieres-securite-escalier-enfant",
    category: "family",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleures barrières de sécurité escalier pour enfant",
    excerpt:
      "Après les prises et les angles de meubles, l'escalier reste l'un des points les plus dangereux de la maison pour un enfant qui commence à marcher : voici les barrières les mieux notées pour le sécuriser.",
    standfirst:
      "De la barrière à pression sans perçage au modèle rétractable pour les grandes ouvertures, cinq barrières d'escalier plébiscitées par les parents, de 44 € à 65 €.",
    meta: "5 produits comparés",
    date: "10 sept.",
    number: 413,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 10 septembre 2026",
    image: "/images/products/safety1st-easyclose-barriere-escalier.jpg",
    imageAlt: "Barrière de sécurité installée en haut d'un escalier",
    facts: [
      { value: "5", label: "barrières comparées" },
      { value: "44 € — 65 €", label: "fourchette de prix" },
      { value: "17 000+", label: "avis sur le modèle le plus vendu" },
    ],
    blocks: [
      {
        k: "p",
        text: "Deux familles de barrières ici : les modèles à pression, rapides à installer et sans perçage, et les modèles rétractables, plus pratiques sur une grande largeur mais un peu moins rigides. Le choix dépend surtout de la largeur exacte à couvrir et de si vous êtes prêt à percer en haut de l'escalier.",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "Safety 1st Easy Close Metal Gate 73-80 cm Effet Bois",
        price: "43,90 €",
        badge: "Choix d'Amazon",
        tone: "good",
        verdict:
          "Plus de 17 000 avis clients, fermeture d'une main et double verrouillage sans vis — la référence la plus plébiscitée du comparatif.",
        pros: ["Badge Choix d'Amazon, plus de 17 000 avis clients", "Fermeture d'une main, double verrouillage, sans vis"],
        cons: ["Hauteur max 108 cm, à vérifier selon l'ouverture"],
        href: "https://www.amazon.fr/dp/B0DSCBBTPD?tag=secure012de-21",
        image: "/images/products/safety1st-easyclose-barriere-escalier.jpg",
        imageAlt: "Safety 1st Easy Close Metal Gate 73-80 cm Effet Bois",
      },
      {
        k: "pick",
        rank: "02",
        name: "KIDIZ Barrière de Sécurité d'Escalier Sans Perçage 88-94 cm",
        price: "43,80 €",
        badge: "Meilleur premier prix",
        tone: "ok",
        verdict: "Système à pression sans perçage, près de 3 000 avis clients pour un tarif proche de la référence Safety 1st.",
        pros: ["Près de 3 000 avis clients", "Système à pression, aucun perçage nécessaire"],
        cons: ["Largeur réglable plus limitée que les modèles rétractables"],
        href: "https://www.amazon.fr/dp/B0GL8WSB9W?tag=secure012de-21",
        image: "/images/products/kidiz-barriere-escalier-sans-percage.jpg",
        imageAlt: "KIDIZ Barrière de Sécurité d'Escalier Sans Perçage 88-94 cm",
      },
      {
        k: "pick",
        rank: "03",
        name: "VOUNOT Barrière de Sécurité Pliable 3 m, 5 Panneaux",
        price: "64,99 €",
        badge: "Grandes ouvertures",
        tone: "good",
        verdict: "Idéale pour les grandes ouvertures type cheminée ou palier, avec plus de 2 300 avis clients.",
        pros: ["Plus de 2 300 avis clients", "Idéale pour les grandes ouvertures type cheminée ou palier"],
        cons: ["Encombrement plus important une fois dépliée"],
        href: "https://www.amazon.fr/dp/B07F8K4Q2V?tag=secure012de-21",
        image: "/images/products/vounot-barriere-securite-pliable-3m.jpg",
        imageAlt: "VOUNOT Barrière de Sécurité Pliable 3 m, 5 Panneaux",
      },
      {
        k: "pick",
        rank: "04",
        name: "ib style Barrière de Sécurité Berrin 58-185 cm Sans Perçage",
        price: "64,95 €",
        badge: "Meilleure note",
        tone: "good",
        verdict: "4,6 étoiles et une très large plage de largeurs couverte, de 58 à 185 cm.",
        pros: ["Très bonne note, 4,6 étoiles", "Grande plage de largeurs couverte, 58 à 185 cm"],
        cons: ["Moins d'avis que les modèles les plus vendus"],
        href: "https://www.amazon.fr/dp/B0C9HZDVQ6?tag=secure012de-21",
        image: "/images/products/ibstyle-barriere-escalier-berrin.jpg",
        imageAlt: "ib style Barrière de Sécurité Berrin 58-185 cm Sans Perçage",
      },
      {
        k: "pick",
        rank: "05",
        name: "Barrière de Sécurité Rétractable 5 m",
        price: "60,36 €",
        badge: "Passage large",
        tone: "good",
        verdict: "S'enroule et convient à un passage large et irrégulier, avec plus de 2 600 avis clients.",
        pros: ["Plus de 2 600 avis clients", "S'enroule, pratique pour un passage large et irrégulier"],
        cons: ["Moins rigide qu'une barrière à panneaux fixes"],
        href: "https://www.amazon.fr/dp/B0C88Y1RLF?tag=secure012de-21",
        image: "/images/products/barriere-securite-retractable-5m.jpg",
        imageAlt: "Barrière de Sécurité Rétractable 5 m",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },

  {
    slug: "serrures-connectees-nuki-alternatives",
    category: "perimeter",
    kind: "comparison",
    kicker: "Comparatif",
    title: "Les 5 meilleures serrures connectées Nuki et alternatives",
    excerpt:
      "Nuki est la marque la plus recherchée sur les serrures connectées, mais pas la seule à s'installer sans changer son cylindre : voici sa gamme complète face à deux vraies alternatives.",
    standfirst:
      "De l'entrée de gamme Nuki Go à la serrure Ultra, en passant par deux concurrentes sérieuses (Aqara et SwitchBot), cinq serrures connectées qui s'installent en rétrofit, de 190 € à 349 €.",
    meta: "5 produits comparés",
    date: "11 sept.",
    number: 414,
    readingTime: "6 min de lecture",
    updated: "Mis à jour le 11 septembre 2026",
    image: "/images/products/nuki-smart-lock-ultra.jpg",
    imageAlt: "Serrure connectée Nuki installée sur une porte d'entrée",
    facts: [
      { value: "5", label: "serrures comparées" },
      { value: "190 € — 349 €", label: "fourchette de prix" },
      { value: "3/5", label: "de la gamme Nuki" },
    ],
    blocks: [
      {
        k: "p",
        text: "Nuki reste la référence la plus recherchée sur ce marché, avec une gamme à trois niveaux (Go, Pro, Ultra) qui s'installe en rétrofit sur le cylindre existant, sans intervention de serrurier. Aqara et SwitchBot proposent des alternatives sérieuses, parfois moins chères ou avec des fonctions que Nuki n'a pas encore (reconnaissance faciale chez SwitchBot).",
      },
      { k: "h2", text: "Notre sélection" },
      {
        k: "pick",
        rank: "01",
        name: "Nuki Smart Lock Go (2025) avec Clavier",
        price: "209,00 €",
        badge: "Entrée de gamme Nuki",
        tone: "ok",
        verdict: "L'entrée dans l'écosystème Nuki, livrée avec un clavier à code, en Bluetooth uniquement.",
        pros: ["Entrée de gamme Nuki, installation sans changer le cylindre", "Livré avec clavier à code"],
        cons: ["Bluetooth uniquement, pas de WiFi intégré"],
        href: "https://www.amazon.fr/dp/B0FPX9YMYV?tag=secure012de-21",
        image: "/images/products/nuki-smart-lock-go-2025.jpg",
        imageAlt: "Nuki Smart Lock Go (2025) avec Clavier",
      },
      {
        k: "pick",
        rank: "02",
        name: "Aqara Serrure Connectée U200",
        price: "189,99 €",
        badge: "Meilleur premier prix",
        tone: "good",
        verdict: "Moins cher que l'entrée de gamme Nuki, avec Matter sur Thread et compatibilité clé Apple Home.",
        pros: ["Moins cher que l'entrée de gamme Nuki", "Matter sur Thread, compatible clé Apple Home"],
        cons: ["Note un peu plus basse que la gamme Nuki"],
        href: "https://www.amazon.fr/dp/B0D1C75J4F?tag=secure012de-21",
        image: "/images/products/aqara-serrure-connectee-u200.jpg",
        imageAlt: "Aqara Serrure Connectée U200",
      },
      {
        k: "pick",
        rank: "03",
        name: "Nuki Smart Lock Pro",
        price: "269,00 €",
        badge: "WiFi intégré",
        tone: "good",
        verdict: "Le WiFi intégré évite d'acheter un pont séparé, avec la compatibilité Matter pour la domotique.",
        pros: ["WiFi intégré, pas besoin de pont supplémentaire", "Compatible Matter pour l'intégration domotique"],
        cons: ["Note en retrait par rapport au modèle Ultra"],
        href: "https://www.amazon.fr/dp/B0DX2FPQFQ?tag=secure012de-21",
        image: "/images/products/nuki-smart-lock-pro-v5.jpg",
        imageAlt: "Nuki Smart Lock Pro",
      },
      {
        k: "pick",
        rank: "04",
        name: "SwitchBot Serrure Ultra WiFi avec Keypad Vision",
        price: "299,99 €",
        badge: "Reconnaissance faciale",
        tone: "good",
        verdict: "La seule du comparatif avec reconnaissance faciale 3D, et un triple système d'alimentation.",
        pros: ["Reconnaissance faciale 3D en plus de l'empreinte digitale", "Triple système d'alimentation, moins de risque de panne"],
        cons: ["Écosystème différent de Nuki, moins répandu en France"],
        href: "https://www.amazon.fr/dp/B0F2HM2P6F?tag=secure012de-21",
        image: "/images/products/switchbot-serrure-ultra-wifi.jpg",
        imageAlt: "SwitchBot Serrure Ultra WiFi avec Keypad Vision",
      },
      {
        k: "pick",
        rank: "05",
        name: "Nuki Smart Lock Ultra",
        price: "349,00 €",
        badge: "Meilleure note",
        tone: "good",
        verdict: "La meilleure note de toute la gamme Nuki, WiFi et Bluetooth intégrés avec 3 modes de verrouillage.",
        pros: ["Meilleure note de toute la gamme Nuki", "WiFi et Bluetooth intégrés, 3 modes de verrouillage"],
        cons: ["Le plus cher du comparatif"],
        href: "https://www.amazon.fr/dp/B0DN1SZCTL?tag=secure012de-21",
        image: "/images/products/nuki-smart-lock-ultra.jpg",
        imageAlt: "Nuki Smart Lock Ultra",
      },
      { k: "h2", text: "Comment on choisit" },
      { k: "method", items: METHOD_ITEMS },
    ],
  },
];

export function articleHref(a: Pick<ArticleMeta, "category" | "slug">) {
  return `/${a.category}/${a.slug}`;
}

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function byCategory(category: string) {
  return ARTICLES.filter((a) => a.category === category);
}

export function relatedArticles(current: ArticleMeta, limit = 3) {
  const sameCategory = ARTICLES.filter((a) => a.slug !== current.slug && a.category === current.category);
  const rest = ARTICLES.filter((a) => a.slug !== current.slug && a.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
