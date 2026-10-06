# Ecomtabil

Base da nova landing page da Ecomtabil. O projeto comeca enxuto: uma unica aplicacao Next.js, sem backend separado, banco de dados, autenticacao ou Docker antes de haver uma necessidade real.

## Arquitetura

O Next.js e a aplicacao web e a camada de servidor ao mesmo tempo:

- **Server Components** sao o padrao para paginas e componentes sem interacao no navegador.
- **Client Components** entram apenas quando houver estado, eventos do usuario ou APIs do navegador.
- **Server Actions** atendem operacoes internas iniciadas pela interface, como o envio de um formulario.
- **Route Handlers** atendem HTTP externo, como webhooks e APIs de provedores.

Essa escolha evita manter e publicar um segundo projeto de backend. Quando for preciso persistir dados, adicione PostgreSQL e Prisma ao mesmo projeto; nao crie modelos ou tabelas antes de uma funcionalidade que os use.

## Estrutura

```text
src/
  app/                 # Rotas, paginas, metadata, sitemap e robots
  components/          # Componentes de interface reutilizaveis (crie quando houver o primeiro uso)
  actions/             # Server Actions (crie quando houver uma operacao interna)
  lib/                 # Regras de negocio e clientes de integracoes (crie conforme necessario)
  types/               # Tipos compartilhados (crie conforme necessario)
public/                # Imagens, fontes e outros arquivos estaticos aprovados
```

Os diretorios sem uso ainda nao existem de proposito. Isso evita uma estrutura vazia e prematura.

## Requisitos

- Node.js 20.9 ou superior (Node 24 tambem funciona).
- npm, disponivel com o Node.js.

## Instalar e executar localmente

```bash
npm install
copy .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). No PowerShell, use:

```powershell
Copy-Item .env.example .env.local
```

## Variaveis de ambiente

Use `.env.local` somente na sua maquina ou no servidor. Ele nao e versionado.

| Variavel | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publica sem barra final; usada nas URLs canonicas, sitemap e metadata. |
| `NEXT_PUBLIC_WHATSAPP_URL` | Link publico do WhatsApp; enquanto vazio, os CTAs correspondentes ficam indisponiveis. |
| `NEXT_PUBLIC_SCHEDULING_URL` | Link publico de agendamento; enquanto vazio, o CTA correspondente fica indisponivel. |
| `PAYMENT_WEBHOOK_SECRET` | Exemplo de secret futuro. Nunca use o prefixo `NEXT_PUBLIC_` para secrets. |

## Qualidade e build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

`npm run build` produz a versao otimizada. `npm run start` a executa localmente em modo de producao.

## Como evoluir sem criar complexidade

### Formularios e Server Actions

Quando um formulario precisar enviar dados para uma operacao interna, crie uma funcao em `src/actions/` com `"use server"`. Valide todos os dados no servidor antes de processa-los. A pagina ou componente chama essa acao diretamente, sem criar uma API interna apenas para o frontend.

### APIs, integracoes e webhooks

Crie um Route Handler em `src/app/api/<nome>/route.ts` quando outro sistema precisar chamar o projeto. Para um webhook, por exemplo, use `src/app/api/webhooks/<provedor>/route.ts` e valide a assinatura antes de tratar o evento. Clientes de APIs externas e regras especificas ficam em `src/lib/`.

### Pagamentos

Quando houver um provedor escolhido, o navegador deve pedir a criacao de checkout ao servidor. A chave secreta fica no ambiente do servidor. O provedor confirma eventos por webhook em um Route Handler; a interface nao deve considerar um pagamento confirmado so porque recebeu uma resposta do navegador.

### Banco de dados

Adicione PostgreSQL e Prisma apenas junto da primeira funcionalidade que necessite salvar dados. Nessa etapa, instale `prisma` e `@prisma/client`, crie `prisma/schema.prisma` e um cliente reutilizavel em `src/lib/prisma.ts`. Migrations devem ser versionadas; credenciais devem continuar no ambiente.

### Autenticacao

Adicione autenticacao quando houver uma rota ou dado que realmente precise de identidade de usuario. Mantenha a logica de sessao em `src/lib/auth/` e proteja os trechos de servidor, nao apenas os elementos visiveis no navegador.

## Deploy na VM

Docker nao faz parte desta base. Na VM, use um usuario sem privilegios para executar a aplicacao:

```bash
npm ci
npm run build
NODE_ENV=production npm run start
```

Em producao, coloque Nginx ou Caddy na frente do Next.js para terminar HTTPS, encaminhar trafego para a porta da aplicacao e servir como reverse proxy. O proxy e configuracao do servidor, separado deste repositorio. Defina as variaveis de ambiente no gerenciador de servico usado na VM (por exemplo, systemd), sem versionar secrets.

## Decisoes importantes

- App Router e Server Components reduzem JavaScript enviado ao navegador e favorecem SEO e performance.
- TypeScript estrito, ESLint e alias `@/` mantem o codigo previsivel desde o inicio.
- `robots.ts`, `sitemap.ts` e metadata ja estao configurados para SEO tecnico.
- A pagina atual e apenas uma confirmacao de funcionamento. O design system e a copy aprovados serao aplicados depois, sem necessidade de mudar a arquitetura.

## Devlog

### Landing page inicial

- Implementada a landing page da Ecomtabil com a copy e a direcao visual aprovadas.
- Criados blocos de posicionamento, especializacao, fulfillment, autoridade, processo, ecossistema de servicos e CTA final.
- Adicionados ativos editoriais de operacao ecommerce e cards responsivos para os servicos.
- Incluida a secao de marketplaces com esteira de logos; Mercado Livre aparece duas vezes por ciclo sem alterar sua escala.
- Preparada uma area de carrossel para banners futuros e header fixo, transparente no topo e branco apos a rolagem.
- Validacoes executadas: `npm run lint`, `npm run typecheck` e `npm run build`.

### Iteracoes de layout

- Reorganizada a narrativa de posicionamento, com diagrama operacional em light theme e logo da Ecomtabil no centro.
- Adicionados halo pulsante no diagrama, cards de autoridade, secao de marketplaces e esteira animada de logos.
- Ajustadas as composicoes de processo, especializacao e operacao para melhorar hierarquia, ritmo e responsividade.

### Refinamentos de identidade e temas

- Atualizados header e footer com os logos oficiais da Ecomtabil; o header alterna de branco para colorido apos a rolagem.
- Configurados favicons especificos para os modos claro e escuro do sistema.
- Invertidos os temas das secoes de conhecimento e operacao, mantendo contraste, elementos graficos e responsividade adequados.
- Intensificados de forma sutil os aneis em teal na secao clara de operacao e aperfeicoado o hover da lista de especializacoes.

### Navegacao, conversao e conteudo editorial

- Centralizada a navegacao do header, com links para Home, Sobre, Planos, Blog e Afiliados, alem do CTA de Area do cliente.
- Mantidos os CTAs ativos mesmo sem URLs externas configuradas; enquanto isso, eles retornam temporariamente ao inicio da pagina.
- Criada uma secao de perguntas frequentes com acordeao acessivel, uma resposta aberta por vez e transicoes de abertura, fechamento e hover.
- Convertida a CTA final para dark mode com token proprio de fundo (`--closing-bg`).
- Reestruturada a secao de vivencia operacional em split-screen: titulo sticky e tres cards empilhados no desktop, simplificados para leitura vertical no mobile e em `prefers-reduced-motion`.
- Adicionadas imagens editoriais locais para os cards de seller, experiencia contabil e operacao de ecommerce.

### Servicos em faixa horizontal

- Simplificado o cabecalho da secao de ecossistema, removendo o texto complementar de "Uma visao integrada".
- Atualizados os cards de servico com imagem no topo, titulo e descricao abaixo, cantos arredondados e superficie dark uniforme.
- Transformada a grade de servicos em uma lista horizontal sem quebra de linha, que alcanca a borda direita da viewport e permite scroll com snap para acessar todos os itens.

### Composicao de ecossistema e especializacao

- Reorganizada a secao de ecossistema em duas colunas no desktop, com titulo a esquerda e a faixa horizontal de servicos deslocada para a direita.
- Ajustados o tema claro da secao, a altura dos cards e a escala tipografica dos paragrafos para melhorar leitura e presenca visual.
- Convertidos os itens da secao de especializacao em cards sticky empilhados no desktop, com profundidade sutil e espacamento final reduzido antes da proxima secao.
- Mantida uma lista vertical convencional em telas menores e para pessoas com `prefers-reduced-motion` ativo.
- Adicionado o quarto passo no processo consultivo, que recomenda o plano ideal conforme regime tributario, faturamento, volume operacional e necessidades da empresa.
- Mantida a coluna de introducao do processo sticky no desktop enquanto os passos avancam na coluna direita; em telas menores, a secao permanece em fluxo vertical.
- Atualizados os dados institucionais no footer com a razao social, CNPJ e CRC/SP da empresa.
- Adicionada uma boundary propria para a secao de operacao, permitindo que ela permaneça sticky somente durante seu trecho de scroll antes de a secao laranja avancar por cima no desktop.

### Hero e carrossel de campanhas

- Substituido o placeholder da hero por um carrossel funcional com Embla Carousel e plugin de autoplay.
- Adicionados controles laterais, navegacao por dots e suporte a arraste; os controles ficam ativos automaticamente quando houver mais de um banner.
- Incluidos os banners de Lucro Real e beneficio fiscal em Minas Gerais, exportados em 3840 x 1360 para a hero desktop de 1920 x 680.
- Mantido o header transparente sobre a arte e aplicado recorte responsivo para telas menores.
- Reorganizado o CSS da pagina com blocos comentados e seletores relacionados agrupados, preservando os estilos ainda utilizados.

### Ajustes de marketplaces e tipografia

- Incluido o TikTok Shop na esteira animada de marketplaces.
- Reduzida de forma proporcional a escala dos titulos `h1` e `h2`, incluindo as variacoes de processo, ecossistema, marketplaces e CTA final.

### CTAs e especializacao

- Centralizados os CTAs de conversao no WhatsApp de diagnostico, com mensagem pre-preenchida e sem o agendamento secundario na CTA final.
- Substituido o texto de apoio da secao de processo por uma CTA para troca de contador.
- Adicionada uma CTA para analise operacional na secao de vivencia de seller.
- Ajustados espacamento, icones e numeracao dos cards de especializacao para reforcar a leitura da sequencia.
- Incluidos assets de logos em caixa para os principais marketplaces, incluindo TikTok Shop.

### Atualizacao visual e WhatsApp

- Atualizados banners da hero e arquivos editoriais relacionados a campanhas da Ecomtabil.
- Refinadas cores das superfícies escuras e textos de posicionamento para manter consistência na comunicação de E-commerce.
- Adicionado atalho flutuante de WhatsApp com ícone oficial local, levando ao mesmo diagnóstico com mensagem pré-preenchida usado nos CTAs da página.

### Composicao da operacao

- Adicionadas as logos dos marketplaces em caixas na lateral direita da secao “A operacao inteira, nao um problema isolado.”
- Ajustada a composicao para manter o texto em destaque e reorganizar as caixas responsivamente abaixo do conteudo em telas menores.
- Reduzidas discretamente as setas de navegacao do carrossel de banners.

### Conteudo editorial e servicos

- Adicionada a secao "Um pouco da historia da E-comtabil", com conteudo institucional, imagem editorial e navegacao direta pelo header e footer.
- Atualizados os links de suporte para o FAQ e para a Area do cliente no Onvio; incluidos CTAs de diagnostico nas secoes de introducao e encerramento.
- Expandida a secao de autoridade com Planejamento Tributario, Consultoria de E-commerce e Pague Menos Imposto.
- Incluido o banner MEI ao carrossel principal.
- Adicionado o servico de Certificado digital e definido um asset exclusivo para cada card de servico, incluindo Contabilidade especializada, Fiscal e tributario, ERP, Folha de pagamento, Consultoria e Regularizacao empresarial.
- Refinadas a composicao das caixas de marketplaces na secao operacional e a escala de titulos e subtitulos da pagina.

### Programa de afiliados e componentes compartilhados

- Criada a rota `/afiliados` com hero, beneficios, etapas, recursos, FAQ, CTA final e formulario responsivo para cadastro de afiliados.
- Incluidos campos para nome, e-mail, telefone, origem, cupom, area de atuacao e aceite dos termos, com validacao nativa e retorno visual de envio.
- Extraidos o header e o footer da landing para componentes reutilizaveis, preservando a transicao do header fixo e os links contextuais entre a home e paginas internas.
- Atualizada a secao sobre com a foto de Andre Braga, um cartao de perfil sobreposto e enquadramento ajustado da imagem.
- Adicionado o banner `contabilidade-conectada.png` como primeiro slide do carrossel principal.
- Atualizado o sitemap para incluir a pagina de afiliados.

### Controles e assets do carrossel

- Reduzida para 600px a altura dos banners no desktop e atualizados os arquivos das campanhas para versoes otimizadas.
- Sincronizado o indicador de progresso com o temporizador do Embla, eliminando ciclos duplicados de duracao.
- Alterados os indicadores inativos para dots circulares e o indicador ativo para uma pill de progresso.
- Adicionado controle acessivel de pause e play, que pausa simultaneamente o autoplay e a animacao do indicador.
- Incluido o asset `afiliados-background.png` para a evolucao visual da pagina do programa de afiliados.
- Refinado o enquadramento da foto na secao sobre a E-comtabil.

### Organizacao dos estilos globais

- Reorganizado o `globals.css` para acompanhar a ordem das secoes da pagina inicial.
- Agrupados seletores-base, refinamentos e regras responsivas relacionados, sem alterar os valores visuais existentes.
- Adicionados divisores comentados para facilitar a manutencao dos estilos compartilhados, da home e da pagina de afiliados.
