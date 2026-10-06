import Image from "next/image";
import Link from "next/link";

type SiteFooterProps = {
  rootPath?: string;
};

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_URL;
const scheduling = process.env.NEXT_PUBLIC_SCHEDULING_URL;

export function SiteFooter({ rootPath = "" }: SiteFooterProps) {
  const toHome = (hash: string) => `${rootPath}${hash}`;

  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <Link
            className="footer-logo"
            href={toHome("#inicio")}
            aria-label="Ecomtabil, início"
          >
            <Image
              src="/images/logo-ecomtabil-white.svg"
              alt="Ecomtabil"
              width={190}
              height={48}
              unoptimized
            />
          </Link>
          <p>
            Contabilidade especializada para quem vende, integra e cresce no
            E-commerce.
          </p>
          <div className="socials">
            <Link
              href="https://www.facebook.com/p/Ecomtabil-61578926471204/"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/ecomtabil/"
              aria-label="Instagram"
            >
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
            </Link>
            <Link href={toHome("#inicio")} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6.2 8.6H2.7V21h3.5V8.6ZM4.5 3A2.1 2.1 0 1 0 4.5 7a2.1 2.1 0 0 0 0-4ZM21.3 13.8c0-3.7-2-5.4-4.6-5.4-2.1 0-3.1 1.2-3.6 2v-1.8H9.6V21h3.5v-6.1c0-1.6.3-3.2 2.3-3.2 2 0 2 1.8 2 3.3V21h3.6v-7.2Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/@e-comtabil1656"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1C2 9.1 2 12 2 12s0 2.9.4 4.8a3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1C22 14.9 22 12 22 12s0-2.9-.4-4.8ZM10 15.4V8.6l5.7 3.4-5.7 3.4Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
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
            <Link href={toHome("#sobre")}>Sobre nós</Link>
            <Link href={toHome("#especializacao")}>Nossos serviços</Link>
            <Link href={toHome("#processo")}>Como funciona</Link>
            <Link href={toHome("#ecossistema")}>Ecossistema</Link>
          </div>
          <div>
            <h3>Serviços</h3>
            <Link href={toHome("#especializacao")}>
              Contabilidade para E-commerce
            </Link>
            <Link href={toHome("#especializacao")}>Fiscal e tributário</Link>
            <Link href={toHome("#especializacao")}>ERP e integrações</Link>
            <Link href={toHome("#especializacao")}>Marketplaces</Link>
          </div>
          <div>
            <h3>Suporte</h3>
            <a href={whatsapp ?? toHome("#inicio")}>Fale conosco</a>
            <a href={scheduling ?? toHome("#inicio")}>Agendar conversa</a>
            <Link href={toHome("#faq")}>Dúvidas frequentes</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>
          © {new Date().getFullYear()} Ecomtabil. Todos os direitos reservados.
        </span>
        <div>
          <Link href={toHome("#inicio")}>Termos de uso</Link>
          <Link href={toHome("#inicio")}>Política de privacidade</Link>
          <a href={whatsapp ?? toHome("#inicio")}>Contato</a>
        </div>
      </div>
    </footer>
  );
}
