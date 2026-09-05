import type { Metadata } from "next";
import { SITE } from "@/config/active";

export const metadata: Metadata = { title: "Affiliation" };

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-sm leading-relaxed text-brand-800">
      <h1 className="text-2xl font-bold text-brand-950">Affiliation</h1>

      <p className="mt-6">
        Certains liens de ce site sont des liens d'affiliation. Nous pouvons
        percevoir une commission si vous effectuez un achat, sans coût
        supplémentaire pour vous.
      </p>

      <p className="mt-4">
        {SITE.siteName} participe à des programmes d'affiliation, notamment le
        programme Partenaires Amazon et des offres gérées via Digistore24.
        Lorsque vous cliquez sur un produit recommandé et effectuez un achat,
        nous pouvons recevoir une commission du marchand. Cela n'affecte pas le
        prix que vous payez.
      </p>

      <p className="mt-4">
        Notre résultat d'évaluation et nos recommandations sont générés à
        partir des réponses que vous fournissez. Nous n'acceptons aucun
        paiement en échange d'une recommandation spécifique, et nous ne
        publions ni faux avis, ni faux témoignages, ni faux compteurs de stock,
        ni fausses réductions.
      </p>

      <p className="mt-4">
        Ce site ne fournit pas de conseil médical ou financier. Les
        recommandations de produits sont informatives et ne doivent pas être
        considérées comme une garantie de résultat, de bénéfice pour la santé
        ou de retour financier.
      </p>
    </div>
  );
}
