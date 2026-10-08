// Centralize aqui os dados que a equipe comercial deve validar antes da campanha.
export const ibitingaContact = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/5511980883377",
  location: "Ibitinga • São Paulo",
  hours: "Segunda a sexta, das 8h às 18h",
  appointment: "Atendimento presencial com agendamento. Consulte o endereço com a equipe.",
};

export const services = [
  ["ledger", "Contábil e fiscal", "Apuração de impostos, escrituração e obrigações organizadas para a rotina de quem vende online."],
  ["chart", "Planejamento tributário", "Análise do enquadramento e da estrutura da empresa, considerando produtos, canais e momento da operação."],
  ["store", "Marketplaces", "Taxas, comissões e repasses de Mercado Livre, Shopee, Amazon e outros canais no contexto da sua contabilidade."],
  ["link", "ERP e integrações", "Orientação para conectar as informações de vendas, notas e estoque à rotina contábil."],
  ["growth", "Do MEI à próxima etapa", "Acompanhamento da transição do MEI e da organização necessária para uma nova fase do negócio."],
  ["box", "Preparação para fulfillment", "Organização contábil, fiscal e cadastral para avançar em estruturas logísticas. A aprovação depende de cada plataforma."],
  ["chart", "Lucro Presumido e Lucro Real", "Acompanhamento de operações com maior faturamento e complexidade, conforme a necessidade de cada empresa."],
  ["people", "Consultoria próxima", "Uma equipe que entende o seu vocabulário e ajuda a transformar dúvidas em próximos passos."],
] as const;

export const questions = [
  ["Já tenho contador. Como funciona a troca?", "Podemos avaliar sua operação antes da decisão. Na migração, alinhamos a data de início, os documentos e a transferência das informações com o escritório anterior, com um roteiro claro de responsabilidades."],
  ["Vocês atendem MEI e fazem o desenquadramento?", "Sim. Avaliamos o momento do negócio e orientamos a organização e a transição do MEI quando necessária. O diagnóstico considera a atividade, o faturamento e os planos de crescimento."],
  ["Atendem Simples Nacional, Lucro Presumido e Lucro Real?", "Sim. O acompanhamento e a proposta são definidos conforme o regime e a complexidade da operação. A escolha do enquadramento exige uma análise individual dos dados da empresa."],
  ["Preciso ir presencialmente ao escritório?", "A rotina pode ser conduzida online. Para conversar presencialmente em Ibitinga, fale com a equipe e confirme a disponibilidade, o horário e o endereço do atendimento."],
  ["Atendem empresas fora de Ibitinga?", "Sim. A Ecomtabil atende operações de e-commerce em todo o Brasil. Esta página é dedicada aos sellers de Ibitinga e região."],
  ["Vocês entendem Mercado Livre, Shopee e Amazon?", "Sim. Nossa especialização considera a dinâmica dos marketplaces, incluindo notas, taxas, comissões, repasses e logística. Também acompanhamos negócios que vendem em loja própria e em múltiplos canais."],
  ["Trabalham com os ERPs utilizados por sellers?", "Avaliamos os sistemas utilizados na sua empresa e a forma de compartilhar informações com a contabilidade. As possibilidades de integração são confirmadas no diagnóstico, conforme o ERP e o plano contratado."],
  ["Minha empresa está crescendo. Meu regime ainda é adequado?", "O crescimento é um bom momento para revisar a estrutura. Analisamos os dados da empresa antes de indicar qualquer mudança, sem prometer uma economia que ainda não foi demonstrada."],
  ["Vocês podem preparar minha empresa para o fulfillment?", "Ajudamos na preparação contábil, fiscal e cadastral da operação. Elegibilidade, aprovação e acesso são definidos pelas próprias plataformas e não podem ser garantidos pela contabilidade."],
  ["Quanto custa a contabilidade?", "A proposta considera o regime tributário, os canais de venda, o volume e a complexidade da operação. Na conversa inicial, você entende o escopo e os honorários antes de contratar."],
  ["Como funciona o diagnóstico?", "Você conta onde vende, em que fase está e quais dificuldades enfrenta. A equipe combina uma conversa, identifica os pontos que precisam de análise e apresenta os próximos passos. A conversa inicial é gratuita e sem compromisso."],
] as const;
