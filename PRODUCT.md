# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js com App Router, TypeScript, React e Tailwind CSS. PostgreSQL e Prisma serao adicionados somente quando uma funcionalidade real exigir persistencia. A aplicacao sera executada diretamente por Node.js em uma VM propria, sem Docker.

## Users

Sellers, empresas de ecommerce e operacoes de marketplace ativas ou em crescimento, especialmente negocios maduros e de maior ticket que precisam de estrutura contabil, fiscal e tributaria especializada.

## Product Purpose

A Ecomtabil apresenta uma contabilidade que entende a operacao de ecommerce alem das obrigacoes isoladas: marketplaces, ERPs, fiscal, tributacao, logistica, estoque, integracoes e crescimento. A landing page deve iniciar uma conversa consultiva pelo WhatsApp ou levar o visitante ao agendamento de uma call com especialista.

## Positioning

A combinacao de mais de 20 anos de experiencia contabil com vivencia pratica como seller permite entender a rotina do cliente sem que ele precise explicar do zero como funcionam marketplaces, ERPs e operacoes digitais.

## Capabilities and Constraints

- Landing page inicial; pagina de vendas, formularios, pagamentos, integracoes, autenticacao e persistencia sao expansoes futuras.
- Use Server Actions para operacoes internas iniciadas pelo frontend e Route Handlers para endpoints HTTP, integracoes externas e webhooks.
- Nao criar backend separado, autenticacao, banco, gateway de pagamento, Docker, filas ou infraestrutura distribuida sem necessidade concreta.
- Nunca expor secrets no navegador; validar entradas recebidas no servidor quando houver endpoints ou formularios.
- Ao mencionar Mercado Livre, usar apenas "especialistas em Mercado Livre"; nao declarar parceria ou certificacao oficial.
- Nao prometer habilitacao, aprovacao ou acesso garantido a fulfillment.

## Brand Commitments

Nome: Ecomtabil, sem acento. Especializacao: ecommerce, marketplaces e ERPs. A comunicacao deve ser proxima, direta, segura e especialista, sem juridiquês, promessas promocionais ou posicionamento por preco baixo. O design system define Plus Jakarta Sans para titulos, Poppins para UI e texto, primary `#37A3A4`, secondary `#263238`, accent `#FF5200`, ritmo de superficies claras, suaves e escuras, e fotografia editorial real como linguagem principal.

## Evidence on Hand

- Documento de contexto: `C:\Users\PauloAlves\Downloads\Ecomtabil_Contexto_e_Proposta_v1.pdf`.
- Design system: `C:\Users\PauloAlves\Downloads\Ecomtabil_Design_System_v1.pdf`.
- Copy da landing: `C:\Users\PauloAlves\Downloads\Ecomtabil_Copy_Landing_Page_v1.pdf`.
- Dados institucionais presentes no documento sao provisorios e nao devem ser publicados como definitivos.
- Ainda nao ha design system, copy definitiva, depoimentos, estudos de caso ou assets aprovados para a landing page.

## Product Principles

1. Especializacao operacional antes de promessas genericas.
2. Conversa consultiva antes de venda por preco.
3. Baixa complexidade operacional e crescimento incremental.
4. Seguranca e performance como padrao, sem infraestrutura prematura.

## Accessibility & Inclusion

Seguir WCAG 2.1 AA como referencia para contraste, navegacao por teclado, semantica e foco visivel.
