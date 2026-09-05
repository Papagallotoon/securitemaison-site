// Table des niches disponibles. AJOUTER UNE NICHE = AJOUTER UNE LIGNE ICI.
//
// Ce dépôt est une version française dédiée, forkée depuis le moteur
// multi-niches "readyscore-affiliate-engine" — une seule niche ici,
// volontairement, pour ne pas trimballer du contenu anglais inutilisé.

import type {
  ContentConfig,
  Product,
  QuizQuestion,
  ScoringConfig,
  SiteConfig,
} from "@/lib/types";

import { SITE as securitemaisonSite } from "./niches/securitemaison/site";
import { QUESTIONS as securitemaisonQuestions } from "./niches/securitemaison/quiz";
import { PRODUCTS as securitemaisonProducts } from "./niches/securitemaison/products";
import { SCORING as securitemaisonScoring } from "./niches/securitemaison/scoring";
import { CONTENT as securitemaisonContent } from "./niches/securitemaison/content";

/** Tout ce qu'une niche doit fournir pour que le moteur tourne. */
export interface NicheConfig {
  SITE: SiteConfig;
  QUESTIONS: QuizQuestion[];
  PRODUCTS: Product[];
  SCORING: ScoringConfig;
  CONTENT: ContentConfig;
}

export const NICHES: Record<string, NicheConfig> = {
  securitemaison: {
    SITE: securitemaisonSite,
    QUESTIONS: securitemaisonQuestions,
    PRODUCTS: securitemaisonProducts,
    SCORING: securitemaisonScoring,
    CONTENT: securitemaisonContent,
  },
};

/** Niche servie quand NEXT_PUBLIC_NICHE est absente ou inconnue. */
export const DEFAULT_NICHE = "securitemaison";

export const NICHE_SLUGS = Object.keys(NICHES);
