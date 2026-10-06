"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import { SiteHeader } from "@/components/site-header";

const AUTOPLAY_DURATION = 6000;

const banners = [
  {
    alt: "Ecomtabil: contabilidade conectada à operação do seu e-commerce",
    image: "/images/banners/contabilidade-conectada.png",
  },
  {
    alt: "Ecomtabil: contabilidade para empresas de Lucro Real, ecommerce e marketplaces",
    image: "/images/banners/lucro-real.png",
  },
  {
    alt: "Ecomtabil: benefício fiscal para operações de ecommerce em Minas Gerais",
    image: "/images/banners/beneficio-fiscal-minas-gerais.png",
  },
  {
    alt: "Ecomtabil: plano MEI para organizar a contabilidade do seu ecommerce",
    image: "/images/banners/mei-ao-full.png",
  },
];

function Arrow({ direction }: { direction: "previous" | "next" }) {
  const path =
    direction === "next"
      ? "M3 10h13m-5-5 5 5-5 5"
      : "M17 10H4m5 5-5-5 5-5";

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
      className="banner-carousel"
      id="inicio"
      aria-label="Banners em destaque"
      aria-roledescription="carousel"
    >
      <SiteHeader transparent />

      <div className="banner-carousel__stage">
        <div className="banner-carousel__viewport" ref={emblaRef}>
          <div className="banner-carousel__container">
            {banners.map((banner, index) => (
              <div className="banner-carousel__slide" key={banner.image}>
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1920px) 100vw, 1920px"
                  unoptimized
                />
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
            aria-label={isAutoplayPlaying ? "Pausar carrossel" : "Reproduzir carrossel"}
            aria-pressed={!isAutoplayPlaying}
          >
            {isAutoplayPlaying ? (
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M7 5v10M13 5v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="m7.5 5 7 5-7 5V5Z" fill="currentColor" />
              </svg>
            )}
          </button>
          <div className="banner-carousel__dots" aria-label="Navegação dos banners">
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
