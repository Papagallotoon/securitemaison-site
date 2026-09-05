import type { SiteConfig } from "@/lib/types";

export const SITE: SiteConfig = {
  siteId: "securitemaison",
  siteName: "Sécurité Maison",
  siteDescription:
    "Un indice de préparation de votre maison face à une coupure de 72 heures — en 60 secondes.",
  niche: "sécurité domestique",
  locale: "fr",
  domain: "securitemaison.example.com",
  analytics: { gaMeasurementId: "G-6WW78QXRLW" },
  // Même palette "Tactical" que readyscore (kaki + turquoise foncé) — la
  // marque visuelle reste cohérente, seul le contenu change de langue.
  branding: {
    headingFont: "sans-bold",
    logoLetter: "S",
    colors: {
      "50": "#e6e1d1",
      "100": "#f1ede1",
      "200": "#dcd6c3",
      "300": "#c9c2ad",
      "400": "#8a8f93",
      "500": "#6b7074",
      "600": "#0e7c6e",
      "700": "#5c6266",
      "800": "#33383c",
      "900": "#23272a",
      "950": "#1b1e21",
    },
  },
  headerTagline: "Indice de défense du foyer",
  headerStatus: "Évaluation en ligne",
  hero: {
    eyebrow: "Évaluation terrain / fenêtre de 72 heures",
    title: "72 Heures Sans Électricité, Sans Magasins, Sans Secours",
    subtitle:
      "Sept questions. Soixante secondes. Un indice de préparation solide pour votre maison — et les failles exactes à combler en premier.",
    ctaLabel: "Lancer l'évaluation",
    benefits: ["7 questions", "60 secondes", "Sans inscription"],
  },
  howItWorksTitle: "Séquence opérationnelle",
  howItWorks: [
    {
      title: "Faites le point",
      description:
        "Des réponses honnêtes sur l'électricité, l'eau, la nourriture, les communications, le médical et la sécurité.",
    },
    {
      title: "Recevez votre indice",
      description:
        "Un score de préparation sur 0–100 avec vos points forts confirmés et vos failles critiques.",
    },
    {
      title: "Comblez les failles",
      description:
        "Un kit adapté, classé selon les faiblesses que vous avez réellement.",
    },
  ],
  quizIntro: {
    title: "Évaluation de la préparation du foyer",
  },
  quizStepLabel: "Phase",
  resultCopy: {
    scoreLabel: "Indice de préparation",
    classificationLabel: "Classification",
    strengthsTitle: "Points forts confirmés",
    strengthsEmpty: "Aucun point fort confirmé pour l'instant — commencez par les deux axes les plus faibles ci-dessous.",
    gapsTitle: "Failles critiques",
    gapsEmpty: "Aucune faille critique détectée.",
    mapTitle: "Surface de risque — carte des dimensions",
    mapAllClear:
      "Aucun axe ne tombe dans la zone critique — votre couverture est homogène sur toutes les dimensions.",
    mapWeakestTemplate:
      "Votre maillon le plus faible est {dimension}. Lors d'une coupure de 72 heures, c'est cette faille qui cède en premier — comblez-la avant tout le reste sur cette carte.",
    recommendationTitle: "Équipement recommandé — Dossier 01",
    productCtaLabel: "Déployer mon kit",
    rerunLabel: "Refaire l'évaluation",
    matchReasonTemplate: "Recommandé car vos positions les plus faibles sont {gaps}.",
    matchReasonFallback:
      "Vous couvrez déjà l'essentiel — ceci complète votre installation.",
  },
  furtherTests: {
    eyebrow: "Autres évaluations",
    title: "Faites nos autres tests de sécurité, anonymes",
    subtitle:
      "Pas d'email, pas de compte, rien de stocké de notre côté. Chaque test prend environ une minute et ajoute une dimension à votre profil.",
    tests: [
      {
        label: "Test 02 — 60 s",
        title: "Exposition numérique",
        description: "Dans quelle mesure votre foyer est-il joignable en ligne.",
        href: "#",
      },
      {
        label: "Test 03 — 45 s",
        title: "Préparation du véhicule",
        description: "Votre voiture pourrait-elle vous emmener à 500 km d'ici.",
        href: "#",
      },
      {
        label: "Test 04 — 90 s",
        title: "Exercice de communication familiale",
        description: "Si les réseaux tombent, qui contacte qui, et où.",
        href: "#",
      },
    ],
  },
  legal: {
    affiliateDisclosure:
      "Certains liens de ce site sont des liens d'affiliation. Nous pouvons percevoir une commission si vous effectuez un achat, sans coût supplémentaire pour vous.",
    footerNote: "Ce site ne fournit pas de service médical ou financier.",
    links: [
      { label: "Confidentialité", href: "/privacy" },
      { label: "Conditions", href: "/terms" },
      { label: "Affiliation", href: "/affiliate-disclosure" },
    ],
  },
};
