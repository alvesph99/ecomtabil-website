import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { UnitsGrid } from "@/components/units-grid";

export const metadata: Metadata = {
  title: "Unidades",
  description: "Conheça as unidades da Ecomtabil em São Paulo e Minas Gerais e encontre atendimento especializado em e-commerce.",
  alternates: { canonical: "/unidades" },
};

export default function UnitsPage() {
  return (
    <>
      <SiteHeader rootPath="/" lightBackground />
      <main>
        <section className="units-section units-index section" aria-labelledby="units-index-title">
          <div className="shell">
            <div className="units-section__heading">
              <h1 id="units-index-title">Encontre a Ecomtabil perto de você.</h1>
              <p>Escolha uma unidade para conhecer o atendimento e conversar com a nossa equipe.</p>
            </div>
            <UnitsGrid />
            <p className="units-section__note">Imagens ilustrativas da rotina de e-commerce.</p>
          </div>
        </section>
      </main>
      <SiteFooter rootPath="/" />
    </>
  );
}
