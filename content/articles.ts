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

export const CATEGORIES: Record<string, Category> = {
  perimeter: {
    slug: "perimeter",
    label: "Périmètre",
    color: "#1F7E8C",
    blurb: "Portes, serrures, fenêtres, garage. La couche qui décide si entrer demande des outils.",
  },
  detection: {
    slug: "detection",
    label: "Détection",
    color: "#0E7C6E",
    blurb: "Caméras, sonnettes, détecteurs. Ce qui vous dit que ça se passe, et le prouve après coup.",
  },
  response: {
    slug: "response",
    label: "Réaction",
    color: "#147F60",
    blurb: "Qui agit, à quelle vitesse, et ce que vous faites dans les 90 premières secondes.",
  },
  resilience: {
    slug: "resilience",
    label: "Résilience",
    color: "#2C6C8B",
    blurb: "Ce qui continue de fonctionner quand l'électricité ou internet s'arrêtent.",
  },
};

export const CATEGORY_ORDER = ["perimeter", "detection", "response", "resilience"] as const;

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
