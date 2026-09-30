import Image from "next/image";
import { Faq } from "@/components/faq";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_URL;
const scheduling = process.env.NEXT_PUBLIC_SCHEDULING_URL;

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M3 10h13m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function Cta({
  href,
  children,
  ghost = false,
}: {
  href?: string;
  children: React.ReactNode;
  ghost?: boolean;
}) {
  const destination = href ?? "#inicio";

  return (
    <a
      className={`button${ghost ? " button--ghost" : ""}`}
      href={destination}
      {...(href ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <Arrow />
    </a>
  );
}

const expertise = [
  [
    "Marketplaces",
    "Entendemos a dinâmica fiscal e operacional dos principais canais e como ela afeta a contabilidade.",
  ],
  [
    "ERP",
    "Gestão, fiscal e contábil precisam trabalhar com informações consistentes, não em silos.",
  ],
  [
    "Tributação",
    "Analisamos a estrutura tributária considerando o momento e o crescimento da operação.",
  ],
  [
    "Fiscal e contábil",
    "Obrigações organizadas sem perder de vista aquilo que os números dizem sobre o negócio.",
  ],
];

const services = [
  [
    "Contabilidade especializada",
    "Rotinas contábeis estruturadas para empresas que vivem o ecommerce.",
  ],
  [
    "Fiscal e tributário",
    "Apuração e acompanhamento alinhados à realidade da sua operação.",
  ],
  [
    "Marketplaces",
    "Conhecimento das particularidades de quem vende nos principais canais digitais.",
  ],
  [
    "ERP e integrações",
    "Operação, sistemas e contabilidade trabalhando com informações consistentes.",
  ],
  [
    "Folha e pró-labore",
    "Estrutura para acompanhar o crescimento da equipe e dos sócios.",
  ],
  [
    "Consultoria",
    "Análise especializada para decisões que vão além da rotina contábil.",
  ],
  [
    "Regularização empresarial",
    "Base empresarial organizada para acompanhar o próximo estágio do negócio.",
  ],
];

const marketplaces = [
  ["AliExpress", "/images/marketplaces/aliexpress-logo.svg"],
  ["Amazon", "/images/marketplaces/amazon-logo.svg"],
  ["Shein", "/images/marketplaces/shein-logo.svg"],
  ["Mercado Livre", "/images/marketplaces/mercado-livre-logo.svg"],
  ["Shopee", "/images/marketplaces/shopee-logo.svg"],
  ["Shopify", "/images/marketplaces/shopify-logo.svg"],
  ["Loja Integrada", "/images/marketplaces/loja-integrada-logo.svg"],
  ["Magalu", "/images/marketplaces/magalu-logo.svg"],
];

const marketplaceBelt = [
  marketplaces[0],
  marketplaces[1],
  marketplaces[2],
  marketplaces[3],
  marketplaces[4],
  marketplaces[5],
  marketplaces[3],
  marketplaces[6],
  marketplaces[7],
];

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />

      <section className="intro shell section" aria-labelledby="intro-title">
        <p className="marker">A Ecomtabil nasceu dentro desse universo.</p>
        <div>
          <div className="intro-copy">
            <h2 id="intro-title">
              Contabilidade feita por quem entende o <em>outro lado</em> da
              operação.
            </h2>
            <p>De seller para seller. Com visão de contador.</p>
          </div>
          <div
            className="hero-art intro-art"
            aria-label="Uma operação de ecommerce conectada"
          >
            <div className="grid" />
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="hub">
              <Image
                src="/images/ecomtabil-logo-white.svg"
                alt="Ecomtabil"
                width={66}
                height={66}
                unoptimized
              />
            </div>
            <div className="tag tag-a">
              <small>Pedido</small>
              <b>#04821</b>
              <i />
            </div>
            <div className="tag tag-b">
              <small>Fiscal</small>
              <b>OK</b>
              <i />
            </div>
            <div className="tag tag-c">
              <small>Estoque</small>
              <b>Sincronizado</b>
              <i />
            </div>
            <p className="art-note note-a">
              OPERAÇÃO
              <br />
              EM MOVIMENTO
            </p>
            <p className="art-note note-b">FISCAL · ERP · MARKETPLACES</p>
          </div>
        </div>
      </section>

      <section
        className="special"
        id="especializacao"
        aria-labelledby="special-title"
      >
        <div className="shell section">
          <div className="special-head">
            <div>
              <p className="marker">Conhecimento aplicado à rotina.</p>
              <h2 id="special-title">
                Seu contador entende de ecommerce ou apenas recebe suas notas?
              </h2>
            </div>
            <p>
              A Ecomtabil trabalha com empresas que vivem o comércio eletrônico
              todos os dias. Nossa especialização está em entender as
              particularidades de operações que vendem por marketplaces, lojas
              próprias e diferentes canais digitais.
            </p>
          </div>
          <div className="special-list">
            {expertise.map(([title, text], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Arrow />
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="whole-boundary">
        <section className="whole" aria-labelledby="whole-title">
          <div className="shell">
            <div className="whole-top">
              <div>
                <p className="marker">
                  A operação inteira, não um problema isolado.
                </p>
                <h2 id="whole-title">
                  Uma operação de ecommerce não deveria ser tratada como uma
                  empresa qualquer.
                </h2>
              </div>
              <div>
                <p>
                  Quando a operação cresce, fiscal, ERP, estoque e logística
                  deixam de funcionar isoladamente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <section className="fulfillment" aria-labelledby="fulfillment-title">
        <div className="shell fulfillment-inner">
          <div className="fulfillment-art" aria-hidden="true">
            <div className="box big">F</div>
            <div className="box small" />
            <span>
              ESTRUTURA
              <br />
              PARA AVANÇAR
            </span>
          </div>
          <div>
            <p className="marker">Fulfillment é evolução de operação.</p>
            <h2 id="fulfillment-title">
              Quer levar sua operação para o fulfillment? A contabilidade também
              faz parte desse caminho.
            </h2>
            <p>
              Por trás da evolução logística existem processos, documentos,
              configurações fiscais e uma operação que precisa estar preparada
              para atender às exigências desse novo estágio.
            </p>
            <p>
              A Ecomtabil conhece esse caminho e ajuda sua empresa a identificar
              e organizar os pontos necessários para avançar com mais segurança.
            </p>
            <Cta href={whatsapp}>Conversar com um especialista</Cta>
          </div>
        </div>
      </section> */}

      <section className="growth" aria-labelledby="growth-title">
        <div className="shell">
          <div>
            <p className="marker">Estrutura para o próximo estágio.</p>
            <h2 id="growth-title">
              A contabilidade que serviu para começar pode não ser a que você
              precisa para crescer.
            </h2>
          </div>
          <p>
            Mais pedidos. Mais canais. Mais produtos. Mais estados. Mais
            integrações. Mais decisões tributárias. Mais responsabilidade sobre
            margem e fluxo de caixa.
          </p>
        </div>
      </section>

      <section className="seller shell section" aria-labelledby="seller-title">
        <div className="quote">
          <span>“</span>
          <h2 id="seller-title">
            Antes de entender seu balanço, nós entendemos sua operação.
          </h2>
        </div>
        <div className="seller-copy">
          <article className="seller-card">
            <div className="seller-card__image">
              <Image
                src="/images/seller-operator.png"
                alt="Operação de ecommerce em uma estação de expedição"
                fill
                sizes="(max-width: 800px) calc(100vw - 94px), 34vw"
              />
            </div>
            <div className="seller-card__body">
              <h3>Seller e contador, na mesma mesa.</h3>
              <p>
                Uma visão que conecta a rotina de vendas aos impactos fiscais e
                contábeis de cada decisão.
              </p>
            </div>
          </article>
          <article className="seller-card seller-card--years">
            <div className="seller-card__image">
              <Image
                src="/images/seller-experience.png"
                alt="Mesa de trabalho com documentos e ferramentas contábeis"
                fill
                sizes="(max-width: 800px) calc(100vw - 94px), 34vw"
              />
            </div>
            <div className="seller-card__body">
              <b>+20</b>
              <div>
                <h3>anos de experiência contábil.</h3>
                <p>
                  Prática para organizar obrigações e dar mais segurança às
                  decisões da empresa.
                </p>
              </div>
            </div>
          </article>
          <article className="seller-card">
            <div className="seller-card__image">
              <Image
                src="/images/seller-operation.png"
                alt="Rotina de expedição com itens de ecommerce organizados"
                fill
                sizes="(max-width: 800px) calc(100vw - 94px), 34vw"
              />
            </div>
            <div className="seller-card__body">
              <h3>Conhecimento que acompanha a operação.</h3>
              <p>
                Marketplaces, ERP, estoque e logística já fazem parte do
                contexto antes da primeira conversa.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="authority" aria-labelledby="authority-title">
        <div className="shell">
          <p className="marker">Especialização comprovada pela prática.</p>
          <h2 id="authority-title">
            Experiência contábil.
            <br />
            <em>Vivência de ecommerce.</em>
          </h2>
          <div className="facts">
            <div>
              <b>+20 anos</b>
              <span>de experiência contábil</span>
            </div>
            <div>
              <b>Seller + Contador</b>
              <span>visão dos dois lados da operação</span>
            </div>
            <div>
              <b>Ecommerce e Marketplaces</b>
              <span>
                especialização no ambiente em que nossos clientes vendem
              </span>
            </div>
            <div>
              <b>Atendimento nacional</b>
              <span>
                estrutura digital para atender sellers em todo o Brasil
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="marketplaces" aria-labelledby="marketplaces-title">
        <div className="shell">
          <div className="marketplaces__heading">
            <p className="marker">Ecossistema que a sua operação já conhece.</p>
            <h2 id="marketplaces-title">
              Trabalhamos com os principais marketplaces do Brasil.
            </h2>
            <p>
              Especialização contábil para ecommerce que vende nos principais
              canais digitais.
            </p>
          </div>
          <div className="marketplaces__logos">
            <div className="marketplaces__track">
              {[...marketplaceBelt, ...marketplaceBelt].map(
                ([name, src], index) => (
                  <div key={`${name}-${index}`} className="marketplace-logo">
                    <Image
                      src={src}
                      alt={name}
                      width={112}
                      height={64}
                      unoptimized
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="ecosystem"
        id="ecossistema"
        aria-labelledby="ecosystem-title"
      >
        <div className="shell ecosystem__inner">
          <div className="ecosystem__heading">
            <div>
              <p className="marker">Uma visão integrada.</p>
              <h2 id="ecosystem-title">
                Especialização para diferentes partes da sua operação.
              </h2>
            </div>
          </div>
          <div className="service-grid">
            {services.map(([title, description], i) => (
              <article key={title} className="service-card">
                <div
                  className={`service-card__image service-card__image--${i % 4}`}
                  aria-hidden="true"
                />
                <div className="service-card__content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="process shell section"
        id="processo"
        aria-labelledby="process-title"
      >
        <div className="process-intro">
          <h2 id="process-title">
            Você não precisa trocar de contador no escuro.
          </h2>
          <p>Entendemos sua operação antes de falar em plano.</p>
        </div>
        <div className="steps">
          {[
            [
              "Entendemos sua operação",
              "Entendemos como sua empresa vende, seu faturamento, marketplaces, ERP, regime tributário e momento atual.",
            ],
            [
              "Identificamos o cenário",
              "Analisamos sua estrutura e identificamos as necessidades contábeis, fiscais e tributárias.",
            ],
            [
              "Definimos o próximo passo",
              "Um especialista apresenta a estrutura adequada para o momento da sua empresa.",
            ],
            [
              "Escolhemos o plano ideal",
              "Recomendamos o plano mais adequado considerando regime tributário, faturamento, volume da operação e necessidades da sua empresa.",
            ],
          ].map(([t, d], i) => (
            <article key={t}>
              <span>0{i + 1}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Faq />

      <section className="closing" aria-labelledby="closing-title">
        <div className="shell">
          <h2 id="closing-title">
            Simplifique já a gestão contábil do seu negócio online
          </h2>
          <p>
            Receba um diagnóstico gratuito da sua operação e descubra como a
            E-comtabil pode ajudar.
          </p>
          <div className="actions">
            <Cta href={whatsapp}>Falar com um especialista no WhatsApp</Cta>
            <Cta href={scheduling} ghost>
              Agendar uma conversa
            </Cta>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-main shell">
          <div className="footer-brand">
            <a
              className="footer-logo"
              href="#inicio"
              aria-label="Ecomtabil, início"
            >
              <Image
                src="/images/logo-ecomtabil-white.svg"
                alt="Ecomtabil"
                width={190}
                height={48}
                unoptimized
              />
            </a>
            <p>
              Contabilidade especializada para quem vende, integra e cresce no
              ecommerce.
            </p>
            <div className="socials">
              <a href="#inicio" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#inicio" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a href="#inicio" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6.2 8.6H2.7V21h3.5V8.6ZM4.5 3A2.1 2.1 0 1 0 4.5 7a2.1 2.1 0 0 0 0-4ZM21.3 13.8c0-3.7-2-5.4-4.6-5.4-2.1 0-3.1 1.2-3.6 2v-1.8H9.6V21h3.5v-6.1c0-1.6.3-3.2 2.3-3.2 2 0 2 1.8 2 3.3V21h3.6v-7.2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#inicio" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1C2 9.1 2 12 2 12s0 2.9.4 4.8a3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1C22 14.9 22 12 22 12s0-2.9-.4-4.8ZM10 15.4V8.6l5.7 3.4-5.7 3.4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <div className="footer-company">
              <strong>Multi BPO E-Comtabil LTDA</strong>
              <span>Atendimento especializado em todo o Brasil.</span>
              <span>CNPJ N° 65.298.538/0001-70</span>
              <span>CRC/SP N° 364.261</span>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>Empresa</h3>
              <a href="#inicio">Sobre nós</a>
              <a href="#especializacao">Nossos serviços</a>
              <a href="#processo">Como funciona</a>
              <a href="#ecossistema">Ecossistema</a>
            </div>
            <div>
              <h3>Serviços</h3>
              <a href="#especializacao">Contabilidade para ecommerce</a>
              <a href="#especializacao">Fiscal e tributário</a>
              <a href="#especializacao">ERP e integrações</a>
              <a href="#especializacao">Marketplaces</a>
            </div>
            <div>
              <h3>Suporte</h3>
              <a href={whatsapp ?? "#inicio"}>Fale conosco</a>
              <a href={scheduling ?? "#inicio"}>Agendar conversa</a>
              <a href="#processo">Dúvidas frequentes</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom shell">
          <span>
            © {new Date().getFullYear()} Ecomtabil. Todos os direitos
            reservados.
          </span>
          <div>
            <a href="#inicio">Termos de uso</a>
            <a href="#inicio">Política de privacidade</a>
            <a href={whatsapp ?? "#inicio"}>Contato</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
import { HeroCarousel } from "@/components/hero-carousel";
