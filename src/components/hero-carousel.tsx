"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Banner = {
  image: string;
  alt: string;
  href?: string;
};

const banners: Banner[] = [];

function Arrow({ direction }: { direction: "previous" | "next" }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d={direction === "next" ? "M3 10h13m-5-5 5 5-5 5" : "M17 10H4m5 5-5-5 5-5"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function HeroCarousel() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const hasBanners = banners.length > 0;

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return <section className="banner-carousel" id="inicio" aria-label="Banners em destaque" aria-roledescription="carousel">
    <header className={`site-header${hasScrolled ? " site-header--scrolled" : ""}`}><div className="nav shell"><a className="site-header__logo" href="#inicio" aria-label="Ecomtabil, início"><Image className="site-header__logo-white" src="/images/logo-ecomtabil-white.svg" alt="" width={148} height={38} unoptimized /><Image className="site-header__logo-color" src="/images/logo-ecomtabil-color.svg" alt="" width={148} height={38} unoptimized /></a><nav aria-label="Navegação principal"><a href="#inicio">Home</a><a href="/sobre">Sobre</a><a href="/planos">Planos</a><a href="/blog">Blog</a><a href="/afiliados">Afiliados</a></nav><a className="site-header__client" href="/area-do-cliente">Área do cliente</a></div></header>
    <div className="shell banner-carousel__stage">
      {hasBanners ? <div className="banner-carousel__slide"><Image src={banners[0].image} alt={banners[0].alt} fill sizes="(max-width: 800px) 100vw, 1180px" /></div> : <div className="banner-carousel__placeholder"><div className="banner-carousel__placeholder-grid" /><div><span>Banner 01</span><strong>Área reservada para campanhas, anúncios e conteúdos em destaque.</strong></div><p>Os criativos serão adicionados aqui.</p></div>}
    </div>
    <div className="banner-carousel__footer shell"><span>{hasBanners ? "01 / 01" : "Carrossel preparado"}</span><div className="banner-carousel__arrows"><button type="button" aria-label="Banner anterior" disabled><Arrow direction="previous" /></button><button type="button" aria-label="Próximo banner" disabled><Arrow direction="next" /></button></div></div>
  </section>;
}
