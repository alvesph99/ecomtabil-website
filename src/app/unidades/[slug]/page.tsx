import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { units, unitWhatsapp } from "@/lib/units";

type Props = { params: Promise<{ slug: string }> };
const localUnits = units.filter((unit) => unit.slug !== "ibitinga");

export function generateStaticParams() {
  return localUnits.map((unit) => ({ slug: unit.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const unit = localUnits.find((item) => item.slug === slug);
  if (!unit) return {};

  return {
    title: `Unidade ${unit.title}`,
    description: `Conheça a unidade ${unit.title} da Ecomtabil e fale com a equipe sobre contabilidade especializada em e-commerce.`,
    alternates: { canonical: unit.href },
  };
}

export default async function UnitPage({ params }: Props) {
  const { slug } = await params;
  const unit = localUnits.find((item) => item.slug === slug);
  if (!unit) notFound();

  return (
    <>
      <SiteHeader rootPath="/" lightBackground />
      <main>
        <section className="unit-landing section" aria-labelledby="unit-title">
          <div className="shell unit-landing__grid">
            <div className="unit-landing__copy">
              <Link className="unit-landing__back" href="/unidades">← Todas as unidades</Link>
              <h1 id="unit-title">Unidade {unit.title}</h1>
              <p>Uma equipe que entende a rotina de quem vende online, com atendimento contábil voltado a operações de e-commerce.</p>
              <p>Conte como sua operação funciona hoje. Vamos entender seus canais de venda, seu momento e o tipo de apoio contábil de que você precisa.</p>
              <a className="button" href={unitWhatsapp(unit)} target="_blank" rel="noreferrer">
                Falar com a unidade {unit.title}
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
            <figure className="unit-landing__visual">
              <Image src={unit.image} alt="" fill priority sizes="(max-width: 800px) calc(100vw - 40px), 45vw" />
              <figcaption>Imagem ilustrativa da rotina de e-commerce.</figcaption>
            </figure>
          </div>
        </section>
      </main>
      <SiteFooter rootPath="/" />
    </>
  );
}
