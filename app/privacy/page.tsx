import type { Metadata } from "next";
import { SITE } from "@/config/active";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-sm leading-relaxed text-brand-800">
      <h1 className="text-2xl font-bold text-brand-950">Politique de confidentialité</h1>
      <p className="mt-4 text-brand-700/60">Dernière mise à jour : {new Date().toISOString().slice(0, 10)}</p>

      <p className="mt-6">
        {SITE.siteName} (« nous ») exploite ce site. Cette politique explique
        quelles informations nous collectons lorsque vous l'utilisez et comment
        elles sont utilisées.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-brand-950">Informations collectées</h2>
      <p className="mt-2">
        Nous collectons les réponses que vous donnez à notre évaluation, des
        données d'analyse standard (pages consultées, localisation approximative
        via l'IP, type d'appareil/navigateur), et des données d'attribution
        marketing (paramètres UTM) si vous êtes arrivé via un lien de campagne.
        Nous ne vous demandons pas de créer un compte ni de fournir votre nom,
        email ou coordonnées bancaires pour utiliser ce site.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-brand-950">Utilisation des données</h2>
      <p className="mt-2">
        Pour générer votre résultat d'évaluation personnalisé, comprendre quels
        contenus et offres sont utiles aux visiteurs, et améliorer ce site.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-brand-950">Tiers</h2>
      <p className="mt-2">
        Nous pouvons utiliser des outils d'analyse (comme Google Analytics
        et/ou PostHog) pour comprendre l'usage du site. Lorsque vous cliquez
        vers un produit recommandé, vous quittez ce site et êtes soumis à la
        politique de confidentialité de ce marchand — les offres sont
        actuellement gérées via Amazon et son programme Partenaires, ainsi que
        Digistore24 pour certains produits.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-brand-950">Publication sur TikTok</h2>
      <p className="mt-2">
        Nous utilisons l'API TikTok (Content Posting API) pour publier
        automatiquement nos vidéos courtes sur notre compte TikTok officiel.
        Seuls le fichier vidéo, le titre et la légende que nous produisons
        sont transmis à TikTok à cette fin — aucune donnée personnelle des
        visiteurs de ce site n'est partagée avec TikTok. L'utilisation de
        cette intégration est soumise à la{" "}
        <a
          href="https://www.tiktok.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          politique de confidentialité de TikTok
        </a>
        .
      </p>

      <h2 className="mt-8 text-lg font-semibold text-brand-950">Vos choix</h2>
      <p className="mt-2">
        Vous pouvez utiliser ce site sans fournir d'information personnelle
        identifiable. Si votre navigateur bloque les scripts d'analyse, le site
        continue de fonctionner normalement.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-brand-950">Contact</h2>
      <p className="mt-2">
        Les questions concernant cette politique peuvent être envoyées à
        l'adresse de contact indiquée là où ce site est publié.
      </p>
    </div>
  );
}
