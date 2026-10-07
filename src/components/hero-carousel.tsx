"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import { SiteHeader } from "@/components/site-header";

const AUTOPLAY_DURATION = 6000;

type Banner = {
  alt: string;
  image: string;
  mobileImage: string;
  eyebrow: string;
  icon: "document" | "money" | "location" | "warehouse";
  title: { text: string; tone?: "orange" | "teal" }[];
  description: string;
  theme: "light" | "dark";
  mobileTheme?: "light" | "dark";
};

const banners: Banner[] = [
  {
    alt: "Contador em um ambiente de trabalho de ecommerce",
    image: "/images/banners/light-contabilidade-conectada.webp",
    mobileImage: "/images/banners/dark-contabilidade-conectada-mobile.webp",
    eyebrow: "Contabilidade conectada à sua operação",
    icon: "document",
    title: [
      { text: "A " },
      { text: "Contabilidade Certa", tone: "orange" },
      { text: " para o " },
      { text: "Seu Negócio", tone: "teal" },
    ],
    description:
      "Base contábil, fiscal e cadastral para avançar com segurança nos marketplaces.",
    theme: "light",
    mobileTheme: "dark",
  },
  {
    alt: "Painel de vendas online com alertas de marketplaces",
    image: "/images/banners/dark-lucro-real.webp",
    mobileImage: "/images/banners/dark-lucro-real-mobile.webp",
    eyebrow: "Especialistas em Lucro Real",
    icon: "money",
    title: [
      { text: "Sua Operação Cresceu.", tone: "orange" },
      { text: " Sua Contabilidade" },
      { text: " Precisa Acompanhar.", tone: "teal" },
    ],
    description:
      "Contabilidade especializada em Lucro Real, E-commerce e marketplaces.",
    theme: "dark",
  },
  {
    alt: "Mapa de Minas Gerais ao lado de uma operação de ecommerce",
    image: "/images/banners/dark-beneficio-fiscal-minas-gerais.webp",
    mobileImage:
      "/images/banners/dark-beneficio-fiscal-minas-gerais-mobile.webp",
    eyebrow: "Benefício fiscal em Minas Gerais",
    icon: "location",
    title: [
      { text: "Pague Menos Impostos", tone: "orange" },
      { text: " com " },
      { text: "Oportunidades Fiscais em Minas Gerais.", tone: "teal" },
    ],
    description:
      "Entenda como uma estrutura fiscal adequada pode reduzir seus custos tributários.",
    theme: "dark",
  },
  {
    alt: "Centro de fulfillment com produtos prontos para expedição",
    image: "/images/banners/dark-mei-ao-full.webp",
    mobileImage: "/images/banners/dark-mei-ao-full-mobile.webp",
    eyebrow: "Do MEI ao Fulfillment",
    icon: "warehouse",
    title: [
      { text: "Quer Entrar para o Full?", tone: "orange" },
      { text: " Seu " },
      { text: "Próximo Passo Está Aqui.", tone: "teal" },
    ],
    description:
      "Prepare sua base contábil, fiscal e cadastral para avançar nos marketplaces.",
    theme: "dark",
  },
];
const diagnosticWhatsapp = `https://wa.me/5511980883377?text=${encodeURIComponent(
  "Olá! Quero agendar um diagnóstico gratuito da minha operação de E-commerce.",
)}`;

function Arrow({ direction }: { direction: "previous" | "next" }) {
  const path =
    direction === "next" ? "M3 10h13m-5-5 5 5-5 5" : "M17 10H4m5 5-5-5 5-5";

  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d={path}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BannerTagIcon({ icon }: { icon: Banner["icon"] }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      {icon === "document" && (
        <>
          <path d="M5 2.5h9l5 5V21H5V2.5Z M14 2.5V8h5" />
          <path d="M8.5 16.5v-3m3 3v-5m3 5v-2" />
        </>
      )}
      {icon === "money" && (
        <>
          <rect x="2.5" y="5" width="19" height="14" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M5.5 8h2m9 8h2" />
        </>
      )}
      {icon === "location" && (
        <>
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
      {icon === "warehouse" && (
        <>
          <path d="m2.5 9.5 9.5-7 9.5 7V21h-19V9.5Z" />
          <path d="M8 21v-8h8v8M2.5 10H21.5" />
        </>
      )}
    </svg>
  );
}

export function HeroCarousel() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: AUTOPLAY_DURATION,
        playOnInit: banners.length > 1,
        stopOnInteraction: false,
        stopOnFocusIn: false,
        stopOnMouseEnter: false,
      }),
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: banners.length > 1 },
    [autoplay],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [progressKey, setProgressKey] = useState(0);
  const [isAutoplayPlaying, setIsAutoplayPlaying] = useState(true);
  const hasMultipleBanners = scrollSnaps.length > 1;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const api = emblaApi;

    function onInit() {
      setScrollSnaps(api.scrollSnapList());
      onSelect();
      setProgressKey((key) => key + 1);
      setIsAutoplayPlaying(autoplay.isPlaying());
    }

    function onAutoplayPlay() {
      setIsAutoplayPlaying(true);
    }

    function onAutoplayStop() {
      setIsAutoplayPlaying(false);
    }

    function onAutoplayTimerSet() {
      setProgressKey((key) => key + 1);
    }

    onInit();
    api.on("reInit", onInit);
    api.on("select", onSelect);
    api.on("autoplay:timerset", onAutoplayTimerSet);
    api.on("autoplay:play", onAutoplayPlay);
    api.on("autoplay:stop", onAutoplayStop);

    return () => {
      api.off("reInit", onInit);
      api.off("select", onSelect);
      api.off("autoplay:timerset", onAutoplayTimerSet);
      api.off("autoplay:play", onAutoplayPlay);
      api.off("autoplay:stop", onAutoplayStop);
    };
  }, [autoplay, emblaApi, onSelect]);

  function scrollTo(index: number) {
    emblaApi?.scrollTo(index);
    autoplay.reset();
  }

  function scrollPrevious() {
    emblaApi?.scrollPrev();
    autoplay.reset();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
    autoplay.reset();
  }

  function toggleAutoplay() {
    if (autoplay.isPlaying()) {
      autoplay.stop();
      return;
    }

    autoplay.play();
  }

  return (
    <section
      className={`banner-carousel${banners[selectedIndex].mobileTheme === "dark" ? " banner-carousel--mobile-dark" : ""}`}
      id="inicio"
      aria-label="Banners em destaque"
      aria-roledescription="carousel"
    >
      <SiteHeader
        transparent
        lightBackground={banners[selectedIndex].theme === "light"}
      />

      <div className="banner-carousel__stage">
        <div className="banner-carousel__viewport" ref={emblaRef}>
          <div className="banner-carousel__container">
            {banners.map((banner, index) => (
              <div
                className={`banner-carousel__slide banner-carousel__slide--${banner.theme}${banner.mobileTheme === "dark" ? " banner-carousel__slide--mobile-dark" : ""}`}
                key={banner.image}
              >
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet={banner.mobileImage}
                  />
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    unoptimized
                  />
                </picture>
                <div className="banner-carousel__copy">
                  <span className="banner-carousel__eyebrow">
                    <BannerTagIcon icon={banner.icon} />
                    {banner.eyebrow}
                  </span>
                  <h2>
                    {banner.title.map(({ text, tone }, partIndex) =>
                      tone ? (
                        <span
                          className={`banner-carousel__highlight--${tone}`}
                          key={partIndex}
                        >
                          {text}
                        </span>
                      ) : (
                        text
                      ),
                    )}
                  </h2>
                  <p>{banner.description}</p>
                  <a
                    className="button"
                    href={diagnosticWhatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Agendar um diagnóstico
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="banner-carousel__control banner-carousel__control--previous"
          type="button"
          onClick={scrollPrevious}
          aria-label="Banner anterior"
          disabled={!hasMultipleBanners}
        >
          <Arrow direction="previous" />
        </button>
        <button
          className="banner-carousel__control banner-carousel__control--next"
          type="button"
          onClick={scrollNext}
          aria-label="Próximo banner"
          disabled={!hasMultipleBanners}
        >
          <Arrow direction="next" />
        </button>

        <div className="banner-carousel__indicator-controls">
          <button
            className="banner-carousel__autoplay-toggle"
            type="button"
            onClick={toggleAutoplay}
            aria-label={
              isAutoplayPlaying ? "Pausar carrossel" : "Reproduzir carrossel"
            }
            aria-pressed={!isAutoplayPlaying}
          >
            {isAutoplayPlaying ? (
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 5v10M13 5v10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="m7.5 5 7 5-7 5V5Z" fill="currentColor" />
              </svg>
            )}
          </button>
          <div
            className="banner-carousel__dots"
            aria-label="Navegação dos banners"
          >
            {scrollSnaps.map((_, index) => {
              const isActive = index === selectedIndex;

              return (
                <button
                  className={`banner-carousel__dot${isActive ? " is-active" : ""}${isAutoplayPlaying ? "" : " is-paused"}`}
                  type="button"
                  key={`${index}-${isActive ? progressKey : "idle"}`}
                  onClick={() => scrollTo(index)}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`Exibir banner ${index + 1}`}
                >
                  <span />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
