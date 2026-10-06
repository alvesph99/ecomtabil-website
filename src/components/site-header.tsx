"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  activeLink?: "affiliates";
  lightBackground?: boolean;
  rootPath?: string;
  transparent?: boolean;
};

export function SiteHeader({
  activeLink,
  lightBackground = false,
  rootPath = "",
  transparent = false,
}: SiteHeaderProps) {
  const [hasScrolled, setHasScrolled] = useState(!transparent);
  const toHome = (hash: string) => `${rootPath}${hash}`;

  useEffect(() => {
    if (!transparent) return;

    function updateHeader() {
      setHasScrolled(window.scrollY > 16);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, [transparent]);

  return (
    <header
      className={`site-header${lightBackground ? " site-header--on-light" : ""}${hasScrolled ? " site-header--scrolled" : ""}`}
    >
      <div className="nav shell">
        <Link className="site-header__logo" href={toHome("#inicio")} aria-label="Ecomtabil, início">
          <Image className="site-header__logo-white" src="/images/logo-ecomtabil-white.svg" alt="" width={148} height={38} unoptimized />
          <Image className="site-header__logo-color" src="/images/logo-ecomtabil-color.svg" alt="" width={148} height={38} unoptimized />
        </Link>
        <nav aria-label="Navegação principal">
          <Link href={toHome("#inicio")}>Home</Link>
          <Link href={toHome("#sobre")}>Sobre</Link>
          <Link href="/planos">Planos</Link>
          <Link href={toHome("#blog")}>Blog</Link>
          <Link href="/afiliados" aria-current={activeLink === "affiliates" ? "page" : undefined}>Afiliados</Link>
        </nav>
        <a className="site-header__client" href="https://onvio.com.br/clientcenter/pt/home" target="_blank" rel="noreferrer">
          Área do cliente
        </a>
      </div>
    </header>
  );
}
