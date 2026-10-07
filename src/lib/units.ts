export const units = [
  {
    slug: "alphaville",
    title: "Matriz | Alphaville - SP",
    detail: "Alphaville, São Paulo",
    state: "SP",
    image: "/images/contabilidade-especializada.webp",
    href: "/unidades/alphaville",
  },
  {
    slug: "sao-paulo",
    title: "São Paulo - SP",
    detail: "Capital paulista",
    state: "SP",
    image: "/images/consultoria.jpg",
    href: "/unidades/sao-paulo",
  },
  {
    slug: "araraquara",
    title: "Araraquara - SP",
    detail: "Interior de São Paulo",
    state: "SP",
    image: "/images/seller-operator.png",
    href: "/unidades/araraquara",
  },
  {
    slug: "ibitinga",
    title: "Ibitinga - SP",
    detail: "Perto de quem vende para o Brasil",
    state: "SP",
    image: "/images/seller-operation.png",
    href: "/ibitinga",
  },
  {
    slug: "extrema",
    title: "Extrema - MG",
    detail: "Sul de Minas Gerais",
    state: "MG",
    image: "/images/service-packing.png",
    href: "/unidades/extrema",
  },
  {
    slug: "nova-serrana",
    title: "Nova Serrana - MG",
    detail: "Minas Gerais",
    state: "MG",
    image: "/images/service-analytics.png",
    href: "/unidades/nova-serrana",
  },
] as const;

export function unitWhatsapp(title: string) {
  const url = new URL(process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/5511980883377");
  url.searchParams.set("text", `Olá! Quero falar com a unidade ${title} da E-comtabil.`);
  return url.toString();
}
