import type { Metadata } from "next";

import { AffiliateForm } from "@/components/affiliate-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Programa de Afiliados",
  description:
    "Indique a E-comtabil e ganhe comissões por cada cliente convertido.",
};

const benefits = [
  [
    "01",
    "Comissões atrativas",
    "Ganhe comissões atraentes por cada indicação convertida em cliente.",
  ],
  [
    "02",
    "Sem limite de indicações",
    "Indique quantos clientes quiser e multiplique seus ganhos.",
  ],
  [
    "03",
    "Crescimento contínuo",
    "Quanto mais clientes você indicar, mais você ganha.",
  ],
];

const steps = [
  [
    "01",
    "Cadastre-se",
    "Preencha o formulário e torne-se um afiliado em minutos.",
  ],
  [
    "02",
    "Compartilhe seu link",
    "Use seu link único de afiliado para indicar clientes.",
  ],
  [
    "03",
    "Ganhe comissões",
    "Receba sua comissão quando seus indicados se tornarem clientes.",
  ],
];

const resources = [
  "Link único de afiliado personalizado",
  "Painel completo de acompanhamento",
  "Material de marketing pronto para usar",
  "Suporte dedicado para afiliados",
  "Pagamentos mensais automáticos",
  "Sem limite de indicações",
];

const questions = [
  [
    "Como funciona o programa de afiliados?",
    "Você recebe um link único para indicar clientes. Quando uma indicação se torna cliente da E-comtabil, você recebe a comissão correspondente.",
  ],
  [
    "Quanto posso ganhar como afiliado?",
    "As comissões variam conforme o plano contratado pelo cliente indicado. Não há limite de indicações, então seu potencial de ganho é ilimitado.",
  ],
  [
    "Como recebo minhas comissões?",
    "As comissões são pagas mensalmente, após a confirmação da conversão do cliente indicado. O painel do afiliado permite acompanhar seus ganhos.",
  ],
  [
    "Preciso ter conhecimento técnico para ser afiliado?",
    "Não. Fornecemos materiais de apoio, links personalizados e suporte para você começar a indicar clientes.",
  ],
  [
    "Existe algum custo para participar?",
    "Não. O programa é gratuito: você não paga para participar e ganha pelas indicações convertidas.",
  ],
  [
    "Como acompanho minhas indicações?",
    "Você terá acesso a um painel exclusivo para acompanhar indicações, comissões pendentes e pagamentos realizados.",
  ],
];

export default function AffiliatePage() {
  return (
    <main className="affiliate-page">
      <SiteHeader
        activeLink="affiliates"
        lightBackground
        rootPath="/"
        transparent
      />

      <section className="affiliate-hero">
        <div className="affiliate-hero__content shell">
          <span className="banner-carousel__eyebrow">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M10 13.5a4 4 0 0 0 6 .4l2.6-2.6a4 4 0 0 0-5.7-5.7l-1.5 1.5M14 10.5a4 4 0 0 0-6-.4l-2.6 2.6a4 4 0 0 0 5.7 5.7l1.5-1.5" />
            </svg>
            Programa de afiliados
          </span>
          <h1>
            <span className="banner-carousel__highlight--orange">
              Ganhe dinheiro
            </span>{" "}
            indicando a melhor contabilidade para{" "}
            <span className="banner-carousel__highlight--teal">
              E-commerce.
            </span>
          </h1>
          <p>
            Seja um afiliado E-comtabil e ganhe comissões atrativas por cada
            cliente que você indicar. Sem custos, sem complicação. Apenas
            ganhos.
          </p>
          <div className="affiliate-hero__actions">
            <a className="button" href="#cadastro">
              Quero ser afiliado
            </a>
            <a className="affiliate-hero__secondary" href="#como-funciona">
              Saber mais
            </a>
          </div>
        </div>
      </section>

      <section
        className="affiliate-benefits section"
        aria-labelledby="benefits-title"
      >
        <div className="shell">
          <p className="marker">Por que ser um afiliado?</p>
          <div className="affiliate-section-heading">
            <h2 id="benefits-title">
              Vantagens exclusivas para quem faz parte do nosso programa.
            </h2>
            <p>
              Uma parceria feita para transformar boas indicações em ganhos
              recorrentes.
            </p>
          </div>
          <div className="affiliate-benefits__grid">
            {benefits.map(([number, title, text]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="affiliate-steps section"
        id="como-funciona"
        aria-labelledby="steps-title"
      >
        <div className="shell affiliate-steps__inner">
          <div className="affiliate-steps__heading">
            <p className="marker">Como funciona</p>
            <h2 id="steps-title">Comece a ganhar em 3 passos simples.</h2>
          </div>
          <div className="affiliate-steps__list">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="affiliate-signup section"
        id="cadastro"
        aria-labelledby="signup-title"
      >
        <div className="shell">
          <div className="affiliate-signup__heading">
            <p className="marker">Cadastre-se agora</p>
            <h2 id="signup-title">Torne-se um afiliado em poucos minutos.</h2>
            <p>
              Preencha o formulário abaixo e comece a ganhar comissões hoje
              mesmo.
            </p>
          </div>
          <AffiliateForm />
        </div>
      </section>

      <section
        className="affiliate-resources section"
        aria-labelledby="resources-title"
      >
        <div className="shell affiliate-resources__inner">
          <div>
            <p className="marker">Recursos do programa</p>
            <h2 id="resources-title">
              Tudo que você precisa para ter sucesso.
            </h2>
          </div>
          <ul>
            {resources.map((resource) => (
              <li key={resource}>{resource}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="affiliate-faq section"
        aria-labelledby="affiliate-faq-title"
      >
        <div className="shell affiliate-faq__inner">
          <div>
            <p className="marker">Dúvidas sobre o programa de afiliados?</p>
            <h2 id="affiliate-faq-title">
              Tire suas dúvidas e comece a ganhar hoje mesmo.
            </h2>
          </div>
          <div className="affiliate-faq__list">
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="affiliate-closing"
        id="termos"
        aria-labelledby="affiliate-closing-title"
      >
        <div className="shell">
          <p className="marker">Pronto para começar?</p>
          <h2 id="affiliate-closing-title">
            Cadastre-se agora e comece a indicar clientes hoje mesmo.
          </h2>
          <a className="button" href="#cadastro">
            Quero ser afiliado agora
          </a>
        </div>
      </section>

      <SiteFooter rootPath="/" />
    </main>
  );
}
