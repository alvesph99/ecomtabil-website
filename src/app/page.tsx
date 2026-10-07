import Image from "next/image";
import { Faq } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { UnitsGrid } from "@/components/units-grid";

const closingWhatsapp = `https://wa.me/5511980883377?text=${encodeURIComponent(
  "Olá! Quero agendar um diagnóstico gratuito da minha operação de E-commerce.",
)}`;

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
    "Rotinas contábeis estruturadas para empresas que vivem o E-commerce.",
    "accounting",
  ],
  [
    "Fiscal e tributário",
    "Apuração e acompanhamento alinhados à realidade da sua operação.",
    "tax",
  ],
  [
    "Marketplaces",
    "Conhecimento das particularidades de quem vende nos principais canais digitais.",
    "marketplaces",
  ],
  [
    "ERP e integrações",
    "Operação, sistemas e contabilidade trabalhando com informações consistentes.",
    "erp",
  ],
  [
    "Certificado digital",
    "Emissão e renovação simplificadas para manter a rotina da sua empresa em dia.",
    "digital-certificate",
  ],
  [
    "Folha de pagamento e pró-labore",
    "Estrutura para acompanhar o crescimento da equipe e dos sócios.",
    "payroll",
  ],
  [
    "Consultoria",
    "Análise especializada para decisões que vão além da rotina contábil.",
    "consulting",
  ],
  [
    "Regularização empresarial",
    "Base empresarial organizada para acompanhar o próximo estágio do negócio.",
    "regularization",
  ],
];

const marketplaces = [
  ["AliExpress", "/images/marketplaces/aliexpress-logo.svg"],
  ["Amazon", "/images/marketplaces/amazon-logo.svg"],
  ["Shein", "/images/marketplaces/shein-logo.svg"],
  ["Mercado Livre", "/images/marketplaces/mercado-livre-logo.svg"],
  ["Shopee", "/images/marketplaces/shopee-logo.svg"],
  ["Shopify", "/images/marketplaces/shopify-logo.svg"],
  ["TikTok Shop", "/images/marketplaces/tiktokshop-logo.svg"],
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
  marketplaces[8],
  marketplaces[3],
  marketplaces[6],
  marketplaces[7],
];

const blogPosts = [
  {
    category: "Tributação",
    readingTime: "6 min de leitura",
    title: "Lucro Real para E-commerce: quando esse regime faz sentido?",
    image: "/images/service-analytics.png",
  },
  {
    category: "Marketplaces",
    readingTime: "5 min de leitura",
    title: "Como vender em marketplaces sem perder sua margem de vista",
    image: "/images/marketplaces-image.png",
  },
  {
    category: "Gestão",
    readingTime: "7 min de leitura",
    title: "ERP e contabilidade: por que integrar os dados da operação?",
    image: "/images/erp-integracoes.png",
  },
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
            <Cta href={closingWhatsapp}>Agendar um diagnóstico</Cta>
          </div>
          <div
            className="hero-art intro-art"
            aria-label="Uma operação de E-commerce conectada"
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
                Seu contador entende de E-commerce ou apenas recebe suas notas?
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
                  Uma operação de E-commerce não deveria ser tratada como uma
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
          <div className="whole-marketplaces" aria-hidden="true">
            {[
              "mercado-livre-box-logo.png",
              "amazon-box-logo.png",
              "shopee-box-logo.png",
              "shopify-box-logo.png",
              "magalu-box-logo.png",
              "shein-box-logo.png",
              "tiktokshop-box-logo.png",
            ].map((logo) => (
              <Image
                key={logo}
                className="whole-marketplaces__logo"
                src={`/images/marketplaces-box-logos/${logo}`}
                alt=""
                width={150}
                height={150}
                sizes="(max-width: 800px) 100px, 120px"
              />
            ))}
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
          <Cta href={closingWhatsapp}>Quero Analisar Minha Operação</Cta>
        </div>
        <div className="seller-copy">
          <article className="seller-card">
            <div className="seller-card__image">
              <Image
                src="/images/seller-operator.png"
                alt="Operação de E-commerce em uma estação de expedição"
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
                alt="Rotina de expedição com itens de E-commerce organizados"
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
            <em>Vivência de E-commerce.</em>
          </h2>
          <div className="facts">
            <div>
              <b>Mais de 20 anos</b>
              <span>em experiência como seller</span>
            </div>
            <div>
              <b>Seller + Contador + Tributarista</b>
              <span>visão dos dois lados da sua operação</span>
            </div>
            <div>
              <b>E-commerce e Marketplaces</b>
              <span>
                especialização no ambiente em que nossos clientes vendem
              </span>
            </div>
            <div>
              <b>Planejamento Tributário</b>
              <span>
                decisões tributárias alinhadas ao momento e aos objetivos do
                negócio
              </span>
            </div>
            <div>
              <b>Consultoria de E-commerce</b>
              <span>
                orientação prática para conectar operação, margem e crescimento
              </span>
            </div>
            <div>
              <b>Pague Menos Imposto</b>
              <span>
                revisão da estrutura tributária para reduzir custos dentro da
                lei
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
              Especialização contábil para E-commerce que vende nos principais
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
            {services.map(([title, description, image]) => (
              <article key={title} className="service-card">
                <div
                  className={`service-card__image service-card__image--${image}`}
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
        className="about section"
        id="sobre"
        aria-labelledby="about-title"
      >
        <div className="about__inner shell">
          <div className="about__copy">
            <p className="marker">Sobre nós</p>
            <h2 id="about-title">
              Um pouco da história da{" "}
              <span className="highlight">E- comtabil</span>
            </h2>
            <p className="about__lead">
              Quem vende online precisa de uma contabilidade que entenda sua
              operação.
            </p>
            <p>
              Por trás da marca está Andre Braga, contador e tributarista, com
              mais de 20 anos de experiência como seller.
            </p>
            <p>
              Uma trajetória que une conhecimento técnico à experiência prática
              de quem conhece os desafios dos marketplaces: comissões, fretes,
              repasses, devoluções e impostos que impactam a margem.
            </p>
            <p>
              Sabemos que faturar mais exige atenção aos números. E que crescer
              com segurança começa por entender o resultado do negócio.
            </p>
            <p>
              É com essa visão que a E-comtabil se apresenta: contabilidade
              especializada em e-commerce e marketplaces, com clareza na
              comunicação e foco na realidade do seller.
            </p>
          </div>
          <div className="about__visual">
            <div className="about__image">
              <Image
                src="/images/andre-contador-especialista.jpeg"
                alt="Imagem do CEO da E-comtabil, Andre Braga, contador e tributarista com mais de 20 anos de experiência como seller"
                fill
                sizes="(max-width: 800px) calc(100vw - 48px), 44vw"
              />
            </div>
            <aside className="about__profile" aria-label="Sobre André Braga">
              <div>
                <strong>André Braga</strong>
                <span>CEO da E-comtabil</span>
                <span>Contador e Tributarista</span>
                <span>Seller há mais de 20 anos</span>
              </div>
              <p>
                André iniciou sua carreira como seller no Mercado Livre no
                início dos anos 2000.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="blog-preview section"
        id="blog"
        aria-labelledby="blog-title"
      >
        <div className="shell">
          <div className="blog-preview__heading">
            <div>
              <p className="marker">Conteúdo para quem vende online</p>
              <h2 id="blog-title">
                Decisões melhores começam com informação que faz sentido.
              </h2>
            </div>
            <p>
              Conteúdos práticos sobre contabilidade, tributação e gestão para a
              rotina de E-commerce.
            </p>
          </div>

          <div className="blog-preview__grid">
            {blogPosts.map(({ category, readingTime, title, image }) => (
              <article className="blog-card" key={title}>
                <a className="blog-card__image" href="/blog" tabIndex={-1}>
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 800px) calc(100vw - 40px), 33vw"
                  />
                  <span>{readingTime}</span>
                </a>
                <div className="blog-card__content">
                  <p>{category}</p>
                  <h3>
                    <a href="/blog">{title}</a>
                  </h3>
                  <a className="blog-card__link" href="/blog">
                    Ler artigo <Arrow />
                  </a>
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
          <div className="process-intro__action">
            <Cta href={closingWhatsapp}>Quero Trocar de Contador</Cta>
          </div>
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

      <section
        className="units-section section"
        id="unidades"
        aria-labelledby="units-title"
      >
        <div className="shell">
          <div className="units-section__heading">
            <h2 id="units-title">
              Uma <span className="highlight">E- comtabil</span> mais perto de
              você.
            </h2>
            <p>
              A mesma especialização em e-commerce, com presença em diferentes
              regiões. Encontre a unidade mais próxima da sua operação.
            </p>
          </div>
          <UnitsGrid />
          <p className="units-section__note">Imagens ilustrativas da rotina de e-commerce.</p>
        </div>
      </section>

      <Faq />

      <section className="closing" aria-labelledby="closing-title">
        <div className="shell">
          <h2 id="closing-title">
            Não deixe a contabilidade limitar seu crescimento.
          </h2>
          <p>
            Receba um diagnóstico gratuito da sua operação e descubra como a
            <span style={{ whiteSpace: "nowrap" }}> E-comtabil</span> pode
            ajudar.
          </p>
          <div className="actions">
            <Cta href={closingWhatsapp}>Agende agora um diagnóstico</Cta>
          </div>
        </div>
      </section>
      <SiteFooter />
      <a
        className="whatsapp-float"
        href={closingWhatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar um diagnóstico pelo WhatsApp"
      >
        <Image
          src="/images/whatsapp-icon.svg"
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
          unoptimized
        />
      </a>
    </main>
  );
}
import { HeroCarousel } from "@/components/hero-carousel";
