export const units = [
  {
    slug: "alphaville",
    title: "Matriz | Alphaville - SP",
    detail: "Alphaville, São Paulo",
    state: "SP",
    image: "/ecomtabil-website/images/unidades/alphaville.webp",
    href: "/unidades/alphaville",
  },
  {
    slug: "sao-paulo",
    title: "São Paulo - SP",
    detail: "Capital paulista",
    state: "SP",
    image: "/ecomtabil-website/images/unidades/sao-paulo.webp",
    href: "/unidades/sao-paulo",
  },
  {
    slug: "araraquara",
    title: "Araraquara - SP",
    detail: "Interior de São Paulo",
    state: "SP",
    image: "/ecomtabil-website/images/unidades/araraquara.webp",
    href: "/unidades/araraquara",
  },
  {
    slug: "ibitinga",
    title: "Ibitinga - SP",
    detail: "Perto de quem vende para o Brasil",
    state: "SP",
    image: "/ecomtabil-website/images/unidades/ibitinga.webp",
    href: "/ibitinga",
  },
  {
    slug: "extrema",
    title: "Extrema - MG",
    detail: "Sul de Minas Gerais",
    state: "MG",
    image: "/ecomtabil-website/images/unidades/extrema.webp",
    href: "/unidades/extrema",
  },
  {
    slug: "nova-serrana",
    title: "Nova Serrana - MG",
    detail: "Minas Gerais",
    state: "MG",
    image: "/ecomtabil-website/images/unidades/nova-serrana.webp",
    href: "/unidades/nova-serrana",
  },
] as const;

export function unitWhatsapp(unit: (typeof units)[number]) {
  const phone =
    unit.slug === "ibitinga" || unit.slug === "araraquara"
      ? "5516996535785"
      : "5511980883377";
  const url = new URL(`https://wa.me/${phone}`);
  url.searchParams.set("text", `Olá! Quero falar com a unidade ${unit.title} da E-comtabil.`);
  return url.toString();
}
