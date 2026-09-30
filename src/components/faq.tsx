"use client";

import { useState } from "react";

const questions = [
  [
    "Como funciona a contabilidade para ecommerce?",
    "Acompanhamos a operação considerando vendas, marketplaces, integrações, documentos fiscais e obrigações contábeis. O ponto de partida é entender como sua empresa vende hoje.",
  ],
  [
    "Quais benefícios estão incluídos em cada plano?",
    "A estrutura é definida de acordo com o momento da empresa e pode reunir rotinas contábeis, fiscal e tributário, folha, pró-labore e acompanhamento especializado.",
  ],
  [
    "Como é definido o valor dos serviços?",
    "O investimento considera a realidade da operação, como faturamento, canais de venda, regime tributário, equipe e necessidades de acompanhamento.",
  ],
  [
    "Como escolher a estrutura ideal para meu ecommerce?",
    "Antes de indicar uma estrutura, entendemos seus canais, sistemas, volume de operação e objetivos. Assim, a recomendação acompanha o estágio atual da empresa.",
  ],
  [
    "O que ganho ao trocar de contabilidade?",
    "Você passa a contar com uma equipe que conhece a rotina de quem vende online e ajuda a organizar os pontos contábeis, fiscais e operacionais da operação.",
  ],
  [
    "Posso abrir ou regularizar minha empresa com a Ecomtabil?",
    "Sim. Avaliamos a situação da empresa e orientamos os próximos passos para abertura, regularização ou mudança de estrutura, conforme cada caso.",
  ],
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__inner shell">
        <div className="faq__list">
          {questions.map(([question, answer], index) => (
            <article
              key={question}
              className={`faq__item${openIndex === index ? " faq__item--open" : ""}`}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {question}
                </button>
              </h3>
              <div className="faq__answer" id={`faq-answer-${index}`}>
                <div>
                  <p>{answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="faq__intro">
          <h2 id="faq-title">Perguntas frequentes</h2>
          <p>
            Tire suas dúvidas sobre uma contabilidade preparada para a rotina do
            ecommerce.
          </p>
        </div>
      </div>
    </section>
  );
}
