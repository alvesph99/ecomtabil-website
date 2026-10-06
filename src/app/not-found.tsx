import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <SiteHeader rootPath="/" />

      <section className="not-found-content" aria-labelledby="not-found-title">
        <div className="shell">
          <p className="marker">Página em construção</p>
          <h1 id="not-found-title">Estamos trabalhando nisso</h1>
          <p>
            Esta página ainda não está disponível. Enquanto preparamos as
            novidades, você pode continuar navegando pela E-comtabil.
          </p>
          <Link className="button" href="/">
            Voltar para a home
          </Link>
        </div>
      </section>

      <SiteFooter rootPath="/" />
    </main>
  );
}
