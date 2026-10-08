import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Faq } from "@/components/faq";
import { DiagnosticForm } from "./diagnostic-form";
import { ibitingaContact, questions, services } from "./content";
import "./ibitinga.css";

export const metadata: Metadata = {
  title: "Contabilidade online em Ibitinga para e-commerce",
  description: "Contabilidade para sellers de Ibitinga: marketplaces, ERP, fiscal e planejamento tributário. Conheça a Ecomtabil e solicite um diagnóstico da sua operação.",
  alternates: { canonical: "/ibitinga" },
  openGraph: { title: "De Ibitinga para o Brasil. Sua contabilidade acompanha.", description: "Contabilidade especializada em e-commerce com a proximidade que seu negócio precisa.", url: "/ibitinga", locale: "pt_BR", type: "website", images: [{ url: "/ecomtabil-website/images/seller-operation.png", width: 1536, height: 1024, alt: "Operação de e-commerce" }] },
};

function Icon({ name = "check" }: { name?: string }) {
  const paths: Record<string, React.ReactNode> = {
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    box: <><path d="m3 7 9-5 9 5v10l-9 5-9-5V7Zm0 0 9 5 9-5M12 12v10M7 4l10 6" /></>,
    ledger: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 7h6M9 11h6M9 15h2m3 0h1M9 18h2m3 0h1" /></>,
    chart: <><path d="M4 3v17h17M8 16v-4m5 4V9m5 7V5" /></>,
    store: <><path d="M4 10v11h16V10M3 6l2-3h14l2 3v4H3V6Zm6 15v-7h6v7" /></>,
    link: <><path d="m9 15 6-6m-7 4-2 2a3 3 0 0 0 4 4l3-3m-2-8 3-3a3 3 0 0 1 4 4l-2 2" /></>,
    growth: <><path d="m3 17 7-7 4 4 7-10m-7 0h7v7" /></>,
    people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name] ?? paths.check}</svg>;
}

function Cta({ children = "Quero analisar minha operação", direct = false }: { children?: React.ReactNode; direct?: boolean }) {
  const url = new URL(ibitingaContact.whatsapp);
  url.searchParams.set("text", "Olá! Sou de Ibitinga e quero conversar com um especialista em e-commerce.");
  return <a className="button" href={direct ? url.toString() : "#diagnostico"}>{children}<Icon name="arrow" /></a>;
}

export default function IbitingaPage() {
  return (
    <div className="ibitinga-page">
      <a className="ibi-skip" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader rootPath="/" lightBackground />
      <main id="conteudo">
        <section className="ibi-hero" id="inicio">
          <div className="shell ibi-hero-grid">
            <div className="ibi-hero-copy">
              <p className="ibi-location"><Icon name="pin" /> Contabilidade para e-commerce em Ibitinga-SP</p>
              <h1>Seller de Ibitinga: sua contabilidade precisa entender <em>como você vende.</em></h1>
              <p>Você leva seus produtos para o Brasil inteiro. A gente cuida da estrutura contábil para acompanhar esse movimento — com experiência em marketplaces e proximidade em Ibitinga.</p>
              <div className="ibi-actions"><Cta>Falar com um especialista em Ibitinga</Cta><a className="ibi-text-link" href="#sobre-ibitinga">Conhecer a Ecomtabil <Icon name="arrow" /></a></div>
              <p className="ibi-micro">Conversa inicial gratuita. Sem compromisso.</p>
            </div>
            <div className="ibi-hero-visual">
              <Image src="/ecomtabil-website/images/seller-operation.png" alt="Profissional organizando a operação de uma loja online" width={1536} height={1024} priority sizes="(max-width: 800px) 100vw, 48vw" />
              <div className="ibi-photo-note"><span className="ibi-icon"><Icon name="box" /></span><div><strong>Seu próximo pedido pode ir longe.</strong><span>Sua contabilidade precisa acompanhar.</span></div></div>
              <span className="ibi-local-stamp"><Icon name="pin" /> Ibitinga, SP <small>Daqui para o Brasil.</small></span>
            </div>
          </div>
          <div className="shell ibi-proof-strip">{["+20 anos de experiência", "De seller para seller", "Especialistas em e-commerce", "Proximidade em Ibitinga"].map(text => <span key={text}><Icon />{text}</span>)}</div>
        </section>

        <section className="ibi-marketplaces shell" aria-label="Canais de venda que fazem parte da nossa especialização">
          <p>A sua operação passa por aqui.<br /><strong>A nossa especialização também.</strong></p>
          <div>{[["Mercado Livre", "mercado-livre"], ["Shopee", "shopee"], ["Amazon", "amazon"], ["Magalu", "magalu"], ["Shopify", "shopify"]].map(([name, file]) => <Image key={file} src={`/ecomtabil-website/images/marketplaces/${file}-logo.svg`} alt={name} width={110} height={42} />)}</div>
        </section>

        <section className="section ibi-white" id="rotina"><div className="shell">
          <div className="ibi-heading"><h2>Seu negócio acontece no marketplace.<br /><em>Sua contabilidade precisa estar lá também.</em></h2><p>Entre o pedido aprovado e o dinheiro na conta, existe uma operação inteira. Quem cuida dos seus números precisa enxergar tudo isso.</p></div>
          <div className="ibi-pain-grid">{[
            ["store", "Vendeu. Mas quanto ficou?", "Taxas, frete, comissões e repasses fazem parte da conta. Faturar mais não significa, por si só, ter mais margem."],
            ["link", "A venda está em um sistema. A nota, em outro.", "ERP, estoque e canais precisam conversar com a contabilidade para que a informação não se perca pelo caminho."],
            ["growth", "Sua empresa cresceu. A estrutura acompanhou?", "Sair do MEI, rever o enquadramento e preparar novas operações exige olhar para o negócio de verdade."],
          ].map(([icon, title, text]) => <article key={title}><Icon name={icon} /><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="ibi-insight"><p>O problema não é apenas pagar imposto.<br /><strong>É saber se a sua operação está estruturada da forma certa.</strong></p><Cta /></div>
        </div></section>

        <section className="section ibi-city"><div className="shell ibi-split">
          <div className="ibi-editorial-image"><Image src="/ecomtabil-website/images/service-packing.png" alt="Preparação de produtos e embalagens para envio de pedidos online" width={1024} height={1024} sizes="(max-width: 800px) 100vw, 45vw" /><span>Produzir aqui. Vender para todo lugar.</span></div>
          <div className="ibi-copy"><p className="marker">Do bordado ao e-commerce</p><h2>Ibitinga aprendeu a vender para <em>o Brasil inteiro.</em></h2><p>O bordado, a cama, a mesa e o banho ganharam uma nova vitrine. Hoje, uma loja de Ibitinga pode receber pedidos de todo o país sem sair da cidade.</p><p>O comércio evoluiu. Vieram mais canais, mais notas, novas formas de entrega e decisões que já não cabem em uma contabilidade genérica.</p><p><strong>Sua empresa pode ter raízes locais e uma operação nacional. A contabilidade precisa entender as duas coisas.</strong></p><Cta>Quero uma contabilidade que me acompanhe</Cta></div>
        </div></section>

        <section className="section ibi-white" id="sobre-ibitinga"><div className="shell ibi-authority">
          <div className="ibi-copy"><p className="marker">De seller para seller</p><h2>Não aprendemos e-commerce só para atender sellers.<br /><em>Nós já éramos sellers.</em></h2><p>A Ecomtabil une conhecimento contábil e tributário à experiência prática de quem vive o comércio online.</p><p>À frente está <strong>André Braga, contador e tributarista com mais de 20 anos de experiência como seller.</strong> Alguém que conhece tanto os números quanto os desafios do outro lado do balcão digital.</p><ul className="ibi-checks"><li><Icon />Vivência com marketplaces e operações digitais</li><li><Icon />Visão contábil, fiscal e tributária do negócio</li><li><Icon />Atendimento próximo, com linguagem de seller</li></ul></div>
          <figure className="ibi-portrait"><Image src="/ecomtabil-website/images/andre-contador-especialista.jpeg" alt="André Braga, à frente da Ecomtabil" width={800} height={900} sizes="(max-width: 800px) 100vw, 40vw" /><figcaption><strong>André Braga</strong><span>Contador, tributarista e seller.</span></figcaption></figure>
        </div></section>

        <section className="section ibi-services" id="servicos"><div className="shell"><div className="ibi-heading"><h2>Da rotina fiscal às decisões que fazem sua operação <em>avançar.</em></h2><p>Especialização para o seu momento: da primeira estrutura à gestão de uma operação com múltiplos canais.</p></div><div className="ibi-service-grid">{services.map(([icon, title, description]) => <article key={title}><span className="ibi-icon"><Icon name={icon} /></span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="ibi-section-action"><Cta>Entender o que minha empresa precisa</Cta></div></div></section>

        <section className="section ibi-white"><div className="shell"><div className="ibi-heading ibi-heading-center"><h2>Entender de contabilidade é o começo.<br /><em>Entender sua operação faz a diferença.</em></h2></div>
          <div className="ibi-comparison" role="region" aria-label="Comparativo de abordagens contábeis" tabIndex={0}><table><thead><tr><th scope="col">Na prática</th><th scope="col">Abordagem generalista</th><th scope="col">Com a Ecomtabil</th></tr></thead><tbody>{[
            ["Contexto do negócio", "Atendimento a diferentes segmentos", "Especialização em sellers e e-commerce"],
            ["Canais de venda", "Rotinas empresariais gerais", "Marketplaces, loja própria e múltiplos canais"],
            ["Informação contábil", "Documentos da rotina fiscal", "Olhar para notas, taxas, repasses e ERP"],
            ["Próxima etapa", "Acompanhamento das obrigações", "Estrutura para transição do MEI e crescimento"],
            ["Relacionamento", "Varia conforme o escritório", "Atendimento online e proximidade em Ibitinga"],
          ].map(([label, general, specialist]) => <tr key={label}><th scope="row">{label}</th><td>{general}</td><td><Icon />{specialist}</td></tr>)}</tbody></table></div><p className="ibi-micro">Comparativo de foco de atuação. O escopo de cada escritório e da sua proposta pode variar.</p>
        </div></section>

        <section className="section ibi-case"><div className="shell ibi-split"><div className="ibi-copy"><p className="marker">De Ibitinga para o Brasil</p><h2>Mais pedidos pedem <em>uma nova estrutura.</em></h2><p>Pense em uma confecção de enxovais que começa a vender em marketplaces. A loja cresce, entra em novos canais e passa a lidar com um volume de notas e repasses que antes não existia.</p><p>É nesse momento que a contabilidade precisa sair do modo “só emitir guias” e acompanhar a operação inteira.</p><span className="ibi-example-label">Cenário ilustrativo, não um depoimento ou resultado de cliente.</span><Cta>Quero conversar sobre o meu cenário</Cta></div><ol className="ibi-case-steps">{[
          ["Antes", "Vendas em vários canais, informações dispersas e pouca clareza sobre as rotinas fiscais."],
          ["O desafio", "Organizar o crescimento sem deixar notas, enquadramento e obrigações para depois."],
          ["O trabalho", "Mapear os canais, revisar a estrutura e alinhar os dados do ERP com a contabilidade."],
          ["O objetivo", "Uma base organizada para tomar decisões e acompanhar a próxima fase do negócio."],
        ].map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="section ibi-diagnostic" id="diagnostico"><div className="shell ibi-split"><div className="ibi-copy"><p className="marker">Diagnóstico da sua operação</p><h2>Antes de falar em plano, queremos entender <em>como você vende.</em></h2><p>Sem uma proposta genérica. Conte seu momento e descubra como podemos ajudar sua empresa a se organizar para crescer.</p><ol className="ibi-process"><li><span>1</span><div><h3>Você conta sua realidade</h3><p>Canais, estrutura atual e principais dúvidas.</p></div></li><li><span>2</span><div><h3>A gente conecta os pontos</h3><p>Uma conversa com quem entende a operação de e-commerce.</p></div></li><li><span>3</span><div><h3>Você conhece os próximos passos</h3><p>Escopo e proposta adequados ao seu negócio, antes de qualquer contratação.</p></div></li></ol></div><DiagnosticForm whatsapp={ibitingaContact.whatsapp} /></div></section>

        <section className="section ibi-white" id="unidade"><div className="shell ibi-local"><div className="ibi-copy"><p className="marker">Ecomtabil Ibitinga</p><h2>Online quando você precisa.<br /><em>Perto quando faz diferença.</em></h2><p>A praticidade de resolver a rotina à distância, com a proximidade de uma operação na sua cidade. Seu negócio não precisa escolher entre especialização e atendimento próximo.</p><Cta direct>Falar com a equipe de Ibitinga</Cta></div><div className="ibi-address"><div className="ibi-address-location"><Icon name="pin" /><h3>{ibitingaContact.location}</h3></div><p>Atendimento a sellers de Ibitinga e região.</p><dl><div><dt><Icon name="people" /> Presencial</dt><dd>{ibitingaContact.appointment}</dd></div><div><dt><Icon name="clock" /> Horário previsto</dt><dd>{ibitingaContact.hours}. Confirme a disponibilidade pelo WhatsApp.</dd></div></dl><a href="https://www.google.com/maps/search/?api=1&query=Ibitinga%2C%20SP" target="_blank" rel="noreferrer" className="ibi-text-link">Ver Ibitinga no mapa <Icon name="arrow" /></a></div></div></section>

        <Faq questions={questions} title="Ainda tem dúvidas?" description="Trocar de contador ou estruturar uma nova fase merece uma boa conversa. Comece por aqui." />

        <section className="section ibi-closing"><div className="shell"><Icon name="pin" /><h2>Perto da sua empresa.<br /><em>Por dentro do seu mercado.</em></h2><p>Você já entende de vender online.<br />Tenha ao seu lado uma contabilidade que também entende.</p><div className="ibi-actions"><Cta direct>Falar com a Ecomtabil em Ibitinga</Cta><a className="ibi-text-link" href="#diagnostico">Solicitar meu diagnóstico <Icon name="arrow" /></a></div><p className="ibi-micro">Sua próxima fase começa com uma conversa.</p></div></section>
      </main>
      <SiteFooter rootPath="/" />
    </div>
  );
}
