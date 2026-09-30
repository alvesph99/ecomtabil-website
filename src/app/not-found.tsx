import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl items-center px-6 py-16 sm:px-10">
      <section aria-labelledby="not-found-title">
        <p className="text-sm font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">Ecomtabil</p>
        <h1 id="not-found-title" className="mt-4 text-4xl font-semibold tracking-tight">Pagina nao encontrada.</h1>
        <p className="mt-4 max-w-prose leading-7 text-[var(--muted)]">O endereco pode estar incorreto ou a pagina ainda nao existe.</p>
        <Link className="mt-8 inline-block font-semibold text-[var(--brand)] underline underline-offset-4" href="/">
          Voltar para o inicio
        </Link>
      </section>
    </main>
  );
}
