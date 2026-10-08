"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const toHome = (hash: string) => `${rootPath}${hash}`;
  const navigation = [
    { label: "Home", href: toHome("#inicio") },
    { label: "Sobre", href: toHome("#sobre") },
    { label: "Planos", href: "/planos" },
    { label: "Unidades", href: "/unidades" },
    { label: "Blog", href: toHome("#blog") },
    {
      label: "Afiliados",
      href: "/afiliados",
      current: activeLink === "affiliates",
    },
  ];

  useEffect(() => {
    if (!transparent) return;

    function updateHeader() {
      setHasScrolled(window.scrollY > 16);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, [transparent]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const desktop = window.matchMedia("(min-width: 801px)");
    const closeOnDesktop = () => {
      if (desktop.matches) drawerRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isMenuOpen]);

  function openMenu() {
    drawerRef.current?.showModal();
    setIsMenuOpen(true);
  }

  function closeMenu() {
    drawerRef.current?.close();
  }

  return (
    <header
      className={`site-header${lightBackground ? " site-header--on-light" : ""}${hasScrolled ? " site-header--scrolled" : ""}`}
    >
      <div className="nav shell">
        <Link
          className="site-header__logo"
          href={toHome("#inicio")}
          aria-label="Ecomtabil, início"
        >
          <Image
            className="site-header__logo-white"
            src="/ecomtabil-website/images/logo-ecomtabil-white.svg"
            alt=""
            width={148}
            height={38}
            unoptimized
          />
          <Image
            className="site-header__logo-color"
            src="/ecomtabil-website/images/logo-ecomtabil-color.svg"
            alt=""
            width={148}
            height={38}
            unoptimized
          />
        </Link>
        <nav aria-label="Navegação principal">
          {navigation.map(({ label, href, current }) => (
            <Link
              key={label}
              href={href}
              aria-current={current ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="site-header__client"
          href="https://onvio.com.br/clientcenter/pt/home"
          target="_blank"
          rel="noreferrer"
        >
          Área do cliente
        </a>
        <button
          ref={menuButtonRef}
          className="site-header__menu-trigger"
          type="button"
          aria-label="Abrir menu"
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          onClick={openMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <dialog
        ref={drawerRef}
        className="site-header__drawer"
        aria-label="Menu de navegação"
        onClose={() => {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="site-header__drawer-heading">
          <span>Menu</span>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
            autoFocus
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 5l14 14M19 5 5 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav className="site-header__drawer-nav" aria-label="Navegação mobile">
          {navigation.map(({ label, href, current }) => (
            <Link
              key={label}
              href={href}
              aria-current={current ? "page" : undefined}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="site-header__drawer-client"
          href="https://onvio.com.br/clientcenter/pt/home"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Área do cliente
        </a>
      </dialog>
    </header>
  );
}
