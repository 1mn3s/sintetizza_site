/**
 * =============================================================================
 * SINTETIZZA - BASE DE DADOS OFICIAL, PROVAS SOCIAIS & CONFIGURAÇÃO SEO
 * =============================================================================
 */

const SINTETIZZA_CONFIG = {
  companyName: "Sintetizza Eventos",
  companyShortName: "Sintetizza",
  legalName: "Sintetizza Locações e Infraestrutura para Eventos Ltda",
  cnpj: "33.273.080/0001-08",
  tagline: "Locação de Palcos, Tendas, Som, Iluminação, Painéis de LED e Climatização",
  email: "sintetizzalocacoes@gmail.com",
  emailQuotes: "sintetizzalocacoes@gmail.com",
  phone: "(15) 99733-9422",
  phoneRaw: "+5515997339422",
  whatsappNumber: "5515997339422",
  whatsappDisplay: "(15) 99733-9422",
  whatsappDefaultMsg: "Olá! Gostaria de solicitar um orçamento para o meu evento com a Sintetizza.",
  address: "Sorocaba e Região Metropolitana - SP",
  serviceHours: "Seg a Sex: 08h às 18h | Sáb: 08h às 12h | Plantão Operacional 24h",
  googleRating: 4.9,
  googleReviewsCount: 128,
  eventsCompleted: "+500",
  experienceYears: "15 anos",
  responseTime: "Até 15 minutos",
  instagram: "@sintetizza_locacoes",
  instagramUrl: "https://www.instagram.com/sintetizza_locacoes/",
  siteUrl: "https://www.sintetizza.com.br"
};

const CITIES_SERVED = [
  "Sorocaba", "Votorantim", "Itu", "Salto", "Indaiatuba", "Campinas",
  "Porto Feliz", "Tatuí", "Boituva", "São Roque", "Jundiaí", "São Paulo Capital",
  "Piracicaba", "Araçoiaba da Serra", "Mairinque", "Ibiúna"
];

const EXTRA_CATEGORIES = [
  { id: "aquecimento", name: "Aquecedores & Lareiras" },
  { id: "mobiliario", name: "Bistrôs, Mesas & Lounge" },
  { id: "camarim", name: "Camarim & Backstage" },
  { id: "limpeza", name: "Lixeiras & Coleta" },
  { id: "decoracao", name: "Tecidos, Pisos & Plantas" },
  { id: "recepcao", name: "Balcões, Totens & Filas" },
  { id: "apoio", name: "Apoio Operacional" },
  { id: "servicos", name: "Serviços Técnicos" }
];

const HOME_STRATEGIC_GROUPS = [
  {
    id: "estruturas-coberturas",
    title: "Estruturas, Palcos e Coberturas",
    description: "Palcos, Box Truss, pórticos, backdrops, praticáveis, tendas piramidais, cristal, chapéu de bruxa e galpões para projetos completos.",
    href: "produtos.html?cat=estruturas",
    accent: "Estruturas",
    bullets: ["Palcos e praticáveis", "Pórticos e comunicação visual", "Tendas e galpões"],
    icon: "🏗️"
  },
  {
    id: "audiovisual-climatizacao",
    title: "Audiovisual, Climatização e Energia",
    description: "Som, iluminação, painéis de LED, projetores, climatizadores, aquecedores, geradores e elétrica para eventos de todos os portes.",
    href: "produtos.html?cat=audiovisual",
    accent: "Operação",
    bullets: ["Som e painel de LED", "Climatização e aquecimento", "Geradores e elétrica"],
    icon: "🔊"
  },
  {
    id: "mobiliario-apoio",
    title: "Mobiliário, Camarim e Apoio Operacional",
    description: "Bistrôs, mesas, cadeiras, puffs, balcões, camarins, paisagismo, unifilas, catracas e itens de apoio para experiências completas.",
    href: "produtos.html?cat=mobiliario",
    accent: "Ambientação",
    bullets: ["Lounge e recepção", "Backstage e camarim", "Fluxo e apoio"],
    icon: "🛋️"
  }
];

const EXTRA_PRODUCTS = [
  {
    id: "aquecedores-e-lareiras-eventos",
    name: "Aquecedores, Lareiras e Pirâmides a Gás",
    category: "aquecimento",
    categoryLabel: "Aquecedores & Lareiras",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.45.38(2).jpeg",
    shortDesc: "Soluções para aquecimento confortável em eventos ao ar livre e ambientes amplos.",
    fullDesc: "Locação de aquecedor tipo chapéu, aquecedor pirâmide e lareira externa com acendimento elétrico e sensores de segurança para recepções, casamentos e áreas VIP.",
    specs: [
      { label: "Potência", value: "Até 6750 W" },
      { label: "Combustível", value: "Gás com ignição elétrica" },
      { label: "Segurança", value: "Sensor anti-inclinação e contra ausência de chama" }
    ],
    features: [
      "Ideal para noites frias e eventos externos",
      "Equipamentos revisados e prontos para operação",
      "Entrega e orientação técnica no local"
    ],
    isFeatured: false,
    badge: "Conforto"
  },
  {
    id: "bistros-poltronas-lounge",
    name: "Bistrôs, Poltronas, Sofás e Banquetas",
    category: "mobiliario",
    categoryLabel: "Bistrôs, Mesas & Lounge",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.43.14.jpeg",
    shortDesc: "Linha lounge para recepção, área VIP, feiras e eventos corporativos.",
    fullDesc: "Catálogo com bistrô dobrável, bistrô artesanal, bistrô industrial, poltronas, sofá, banquetas e composições para ambientação de eventos com alto padrão visual.",
    specs: [
      { label: "Modelos", value: "Bistrôs, poltronas, sofás e banquetas" },
      { label: "Materiais", value: "Madeira, ferro, tecido e acabamento premium" }
    ],
    features: [
      "Combinações para lounge, recepção e camarote",
      "Acabamentos alinhados ao perfil do evento",
      "Montagem organizada e pronta para uso"
    ],
    isFeatured: true,
    badge: "Lounge"
  },
  {
    id: "mesas-cadeiras-puffs-eventos",
    name: "Mesas, Cadeiras Tiffany e Puffs",
    category: "mobiliario",
    categoryLabel: "Bistrôs, Mesas & Lounge",
    image: "assets/images/moveis-e-utensilios.png",
    shortDesc: "Opções para jantar, credenciamento, área kids e composições sociais.",
    fullDesc: "Mesas em madeira, PVC, pé palito, redondas e infantis, além de cadeiras Tiffany e puffs decorativos para diversas configurações de eventos.",
    specs: [
      { label: "Linhas", value: "Social, corporativa e infantil" },
      { label: "Capacidade", value: "Modelos para 2 a 8 lugares" }
    ],
    features: [
      "Versões para buffet, feira e recepção",
      "Peças fáceis de combinar com o projeto visual",
      "Excelente opção para apoio e ambientação"
    ],
    isFeatured: false,
    badge: "Mobiliário"
  },
  {
    id: "balcoes-credenciamento-personalizados",
    name: "Balcões de Atendimento e Credenciamento",
    category: "recepcao",
    categoryLabel: "Balcões, Totens & Filas",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.41.58(13).jpeg",
    shortDesc: "Balcões em madeira ou MDF para recepção, bar e ativações.",
    fullDesc: "Balcões de apoio e atendimento com opções personalizáveis para credenciamento, recepção de convidados, operação de bar e áreas promocionais.",
    specs: [
      { label: "Materiais", value: "Madeira e MDF" },
      { label: "Formato", value: "Retangular e sob medida" }
    ],
    features: [
      "Ideal para check-in e atendimento ao público",
      "Pode compor projetos personalizados",
      "Entrega pronta para uso no local"
    ],
    isFeatured: false,
    badge: "Recepção"
  },
  {
    id: "camarim-backstage-completo",
    name: "Camarim Completo com Arara, Espelho e Frigobar",
    category: "camarim",
    categoryLabel: "Camarim & Backstage",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.45.38.jpeg",
    shortDesc: "Estrutura de apoio para artistas, palestrantes e equipes de produção.",
    fullDesc: "Itens para montagem de camarim e backstage com araras, espelhos, frigobar e módulos de apoio para eventos, shows, convenções e produções itinerantes.",
    specs: [
      { label: "Itens", value: "Arara, espelho e frigobar" },
      { label: "Aplicação", value: "Camarim, produção e apoio operacional" }
    ],
    features: [
      "Organização e conforto para equipe e elenco",
      "Apoio para trocas, maquiagem e descanso",
      "Combinável com containers e módulos habitacionais"
    ],
    isFeatured: false,
    badge: "Backstage"
  },
  {
    id: "lixeiras-coleta-seletiva",
    name: "Lixeiras Plásticas, Aramadas e Coleta Seletiva",
    category: "limpeza",
    categoryLabel: "Lixeiras & Coleta",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.42.29.jpeg",
    shortDesc: "Soluções para limpeza, organização e descarte em eventos.",
    fullDesc: "Disponibilidade de lixeiras plásticas, aramadas e conjuntos de coleta seletiva para eventos corporativos, feiras, áreas de alimentação e grandes públicos.",
    specs: [
      { label: "Modelos", value: "Pequeno, médio, grande e reciclável" },
      { label: "Capacidade", value: "60 L a 100 L" }
    ],
    features: [
      "Melhora a organização do espaço",
      "Apoia operação de limpeza e descarte correto",
      "Disponível em diferentes pontos do evento"
    ],
    isFeatured: false,
    badge: "Operação"
  },
  {
    id: "tecidos-pisos-grama-sintetica",
    name: "Toalhas, Carpetes, Tecidos Tensionados e Grama Sintética",
    category: "decoracao",
    categoryLabel: "Tecidos, Pisos & Plantas",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.45.38(1).jpeg",
    shortDesc: "Acabamentos para ambientação, circulação e composição cenográfica.",
    fullDesc: "Linhas de toalhas, carpetes, tecido tensionado e grama sintética para cenografia, cobertura de piso, decoração de stands e acabamento premium em eventos.",
    specs: [
      { label: "Itens", value: "Toalhas, carpetes, lycra e grama sintética" },
      { label: "Formato", value: "Sob medida por metro linear ou projeto" }
    ],
    features: [
      "Melhora a apresentação visual do evento",
      "Ajuda na setorização e acabamento final",
      "Combinação ideal com stands, palcos e lounges"
    ],
    isFeatured: false,
    badge: "Acabamento"
  },
  {
    id: "plantas-ornamentais-decoracao",
    name: "Plantas Ornamentais para Decoração",
    category: "decoracao",
    categoryLabel: "Tecidos, Pisos & Plantas",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.44.04.jpeg",
    shortDesc: "Composições verdes para recepção, lounge e cenografia.",
    fullDesc: "Plantas ornamentais como Ficus Lyrata, Dracena Massangeana e outros modelos para dar acabamento natural a feiras, recepções e ambientes corporativos.",
    specs: [
      { label: "Modelos", value: "Ficus, dracena e opções sob consulta" },
      { label: "Aplicação", value: "Decoração, recepção e ambientação" }
    ],
    features: [
      "Valorização visual do espaço",
      "Boa combinação com lounge e stands",
      "Montagem alinhada ao projeto do evento"
    ],
    isFeatured: false,
    badge: "Decoração"
  },
  {
    id: "estruturas-podium-praticavel-barricada",
    name: "Podium, Praticáveis, Barricadas e Fechamentos",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.42.00(6).jpeg",
    shortDesc: "Itens estruturais complementares para palco, circulação e segurança.",
    fullDesc: "Catálogo com podium, piso praticável, barricada, gradil com capa, gradil metálico e fechamento galvanizado para montagem técnica e controle de público.",
    specs: [
      { label: "Aplicação", value: "Palco, backstage, fila e perímetro" },
      { label: "Estrutura", value: "Aço galvanizado e alumínio modular" }
    ],
    features: [
      "Completa projetos de palco e área técnica",
      "Ajuda no fluxo e na proteção perimetral",
      "Montagem rápida com equipe especializada"
    ],
    isFeatured: false,
    badge: "Estrutura"
  },
  {
    id: "tenda-chapeu-de-bruxa-cristal",
    name: "Tenda Chapéu de Bruxa e Tenda Cristal",
    category: "coberturas",
    categoryLabel: "Tendas & Galpões",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.41.58(12).jpeg",
    shortDesc: "Coberturas elegantes para recepção, alimentação, ativações e eventos sociais.",
    fullDesc: "Locação de tendas chapéu de bruxa e tendas cristal em diferentes medidas, com estrutura em alumínio e lona adequada ao projeto para eventos corporativos, sociais e promocionais.",
    specs: [
      { label: "Modelos", value: "Chapéu de bruxa e cristal" },
      { label: "Estrutura", value: "Alumínio com medidas sob projeto" }
    ],
    features: [
      "Excelente opção para composição visual refinada",
      "Pode ser integrada a lounges, recepções e áreas gourmet",
      "Montagem técnica com acabamento profissional"
    ],
    isFeatured: false,
    badge: "Cobertura"
  },
  {
    id: "cobertura-box-truss-personalizada",
    name: "Coberturas em Box Truss Q15, Q20 e Q30",
    category: "coberturas",
    categoryLabel: "Tendas & Galpões",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.42.00(5).jpeg",
    shortDesc: "Estruturas personalizadas com uma ou duas quedas para eventos de diferentes portes.",
    fullDesc: "Coberturas em Box Truss desenvolvidas conforme o projeto, com treliças Q15, Q20 e Q30 para áreas técnicas, palcos, ativações, feiras e espaços de circulação coberta.",
    specs: [
      { label: "Treliças", value: "Q15, Q20 e Q30" },
      { label: "Configuração", value: "Uma ou duas quedas" }
    ],
    features: [
      "Projeto sob medida conforme metragem do espaço",
      "Compatível com iluminação, comunicação visual e fechamento lateral",
      "Solução robusta para eventos técnicos e promocionais"
    ],
    isFeatured: false,
    badge: "Sob Medida"
  },
  {
    id: "porticos-backdrops-estruturas-visuais",
    name: "Pórticos, Backdrops e Estruturas para Comunicação Visual",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.42.00(4).jpeg",
    shortDesc: "Estruturas para entrada, sinalização, cenografia e presença de marca no evento.",
    fullDesc: "Projetos com pórticos, backdrops, treliças e estruturas especiais para comunicação visual, largadas esportivas, recepções, feiras, congressos e ativações de marca.",
    specs: [
      { label: "Aplicações", value: "Entrada, backdrop, pórtico e cenografia" },
      { label: "Estrutura", value: "Alumínio modular com montagem personalizada" }
    ],
    features: [
      "Valoriza a identidade visual do evento",
      "Ideal para ativações, fotos oficiais e sinalização técnica",
      "Dimensionamento conforme o fluxo e o layout"
    ],
    isFeatured: true,
    badge: "Comunicação Visual"
  },
  {
    id: "passa-cabos-protecao-cabos",
    name: "Passa-Cabos para Áreas Técnicas e Público",
    category: "energia",
    categoryLabel: "Geradores & Elétrica",
    shortDesc: "Proteção para cabos de energia, áudio e dados em áreas de circulação.",
    fullDesc: "Passa-cabos de alta resistência para proteger cabos e garantir segurança de pessoas, veículos, empilhadeiras e operação técnica em eventos.",
    specs: [
      { label: "Resistência", value: "Até 4 toneladas" },
      { label: "Uso", value: "Público, carros, paleteiras e apoio técnico" }
    ],
    features: [
      "Organização e segurança do cabeamento",
      "Reduz risco de tropeços e danos",
      "Ideal para estruturas com alta circulação"
    ],
    isFeatured: false,
    badge: "Segurança"
  },
  {
    id: "tv-notebook-radio-comunicador",
    name: "TV com Suporte, Notebook e Rádio Comunicador",
    category: "apoio",
    categoryLabel: "Apoio Operacional",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.41.58(18).jpeg",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.41.58(3).jpeg",
    shortDesc: "Itens de apoio para credenciamento, operação, apresentações e coordenação.",
    fullDesc: "Equipamentos de apoio como televisores com suporte, notebooks e rádios comunicadores para operação técnica, sala de controle, recepção e produção.",
    specs: [
      { label: "Itens", value: "TV, notebook e rádio comunicador" },
      { label: "Uso", value: "Controle, recepção, reunião e backstage" }
    ],
    features: [
      "Apoio prático para equipes e apresentações",
      "Boa integração com audiovisual e produção",
      "Locação flexível conforme o porte do evento"
    ],
    isFeatured: false,
    badge: "Apoio"
  },
  {
    id: "cafeteiras-refresqueiras-fogao",
    name: "Cafeteiras, Refresqueiras e Fogão Industrial",
    category: "apoio",
    categoryLabel: "Apoio Operacional",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.42.00(3).jpeg",
    shortDesc: "Equipamentos para apoio de cozinha, recepção e área de alimentos.",
    fullDesc: "Linha de apoio com cafeteiras de cápsula, refresqueiras e fogão industrial para áreas de staff, camarim, cozinha de apoio e atendimento ao público.",
    specs: [
      { label: "Aplicação", value: "Camarim, staff, buffet e backstage" },
      { label: "Operação", value: "Itens sob demanda conforme evento" }
    ],
    features: [
      "Mais conforto para equipe e convidados",
      "Apoio operacional para eventos longos",
      "Fácil combinação com bares e lounges"
    ],
    isFeatured: false,
    badge: "Hospitalidade"
  },
  {
    id: "totens-unifilas-catracas",
    name: "Totens, Unifilas e Catracas",
    category: "recepcao",
    categoryLabel: "Balcões, Totens & Filas",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.41.58(17).jpeg",
    shortDesc: "Controle de acesso e organização de fluxo para entradas e ativações.",
    fullDesc: "Estruturas para organização de recepção e filas com totens em MDF, unifilas, unifilas realeza e catracas para eventos, feiras e controle de credenciamento.",
    specs: [
      { label: "Itens", value: "Totem, unifila e catraca" },
      { label: "Uso", value: "Entrada, fila, credenciamento e acesso" }
    ],
    features: [
      "Melhora a experiência de chegada",
      "Ajuda na sinalização e controle de público",
      "Ideal para eventos com grande circulação"
    ],
    isFeatured: false,
    badge: "Fluxo"
  },
  {
    id: "varal-luzes-neon-pulpito",
    name: "Varal de Luzes, LED/Neon e Púlpito Acrílico",
    category: "iluminacao",
    categoryLabel: "Iluminação & Cênica",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.41.58(1).jpeg",
    shortDesc: "Elementos cênicos para palco, cerimonial, fotos e ambientação.",
    fullDesc: "Soluções decorativas e cênicas com varal de luzes, peças em LED ou neon e púlpito em acrílico para eventos sociais, corporativos e religiosos.",
    specs: [
      { label: "Itens", value: "Varal de luzes, neon e púlpito" },
      { label: "Aplicação", value: "Cerimonial, palco, fotos e decoração" }
    ],
    features: [
      "Valoriza a cenografia e o impacto visual",
      "Boa integração com palco e lounge",
      "Montagem conforme o conceito do evento"
    ],
    isFeatured: false,
    badge: "Cenografia"
  },
  {
    id: "sofa-pallet-estante-ombrelones",
    name: "Sofá de Pallet, Estante Industrial e Ombrelones",
    category: "mobiliario",
    categoryLabel: "Bistrôs, Mesas & Lounge",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.42.00(1).jpeg",
    shortDesc: "Composições para áreas externas, descanso e ativações de marca.",
    fullDesc: "Mobiliário de apoio com sofá de pallet, estante industrial, ombrelones, banco industrial, pia inox móvel e armário baixo com chaves para operações e lounges.",
    specs: [
      { label: "Uso", value: "Lounge, externo, apoio e backstage" },
      { label: "Perfil", value: "Visual industrial e funcional" }
    ],
    features: [
      "Ambientes mais confortáveis e organizados",
      "Excelente para eventos ao ar livre",
      "Flexibilidade para projetos especiais"
    ],
    isFeatured: false,
    badge: "Área Lounge"
  },
  {
    id: "staff-eletrica-engenharia",
    name: "Staff em Geral, Serviços de Elétrica e Engenharia",
    category: "servicos",
    categoryLabel: "Serviços Técnicos",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.41.58(21).jpeg",
    shortDesc: "Equipe operacional e suporte técnico para execução completa do evento.",
    fullDesc: "Serviços especializados de staff, elétrica e engenharia para montagem, acompanhamento, ART, AVCB, adequações técnicas e operação durante todas as etapas do evento.",
    specs: [
      { label: "Áreas", value: "Operação, elétrica, engenharia e apoio" },
      { label: "Cobertura", value: "Planejamento, montagem e evento ao vivo" },
      { label: "Documentação", value: "ART, suporte técnico e AVCB sob demanda" }
    ],
    features: [
      "Equipe pronta para demandas sob medida",
      "Integra documentação técnica e execução",
      "Mantém o padrão de qualidade da Sintetizza"
    ],
    isFeatured: true,
    badge: "Serviço Técnico"
  }
];

const GOOGLE_REVIEWS = [
  {
    id: 1,
    author: "Rodrigo Mendes",
    role: "Produtor de Eventos Corporativos",
    event: "Convenção Anual de Vendas - 800 pessoas",
    rating: 5,
    date: "Há 2 semanas",
    text: "A Sintetizza nos entregou o palco com estrutura Box Truss Q30, painel de LED impecável e sonorização perfeitamente calibrada. Montagem concluída 4 horas antes do prazo e com ART assinada por engenheiro. Nota 10!",
    city: "Sorocaba/SP",
    verified: true
  },
  {
    id: 2,
    author: "Camila Guimarães",
    role: "Organizadora de Casamentos & Cerimonialista",
    event: "Casamento no Campo - 350 convidados",
    rating: 5,
    date: "Há 1 mês",
    text: "Contratamos tendas com fechamentos, iluminação cênica e climatizadores para o casamento. Ficou deslumbrante! Os climatizadores mantiveram a temperatura perfeita e o som estava cristalino sem nenhuma microfonia.",
    city: "Itu/SP",
    verified: true
  },
  {
    id: 3,
    author: "Marcelo Fonseca",
    role: "Diretor Comercial - Feira de Tecnologia",
    event: "Estande e Pavilhão de Exposições",
    rating: 5,
    date: "Há 1 mês",
    text: "Excelente atendimento comercial e equipe técnica de extrema confiança. Todos os montadores estavam com EPIs, laudos NR-10 e NR-35. O gerador silenciado supriu 100% da carga sem oscilação.",
    city: "Campinas/SP",
    verified: true
  },
  {
    id: 4,
    author: "Juliana Bertoni",
    role: "Coordenadora de Marketing & Feiras",
    event: "Lançamento Imobiliário",
    rating: 5,
    date: "Há 2 meses",
    text: "Rapidez impressionante no envio do orçamento e total flexibilidade para adequar o projeto ao layout da tenda. Recomendo de olhos fechados para quem busca pontualidade e segurança.",
    city: "Indaiatuba/SP",
    verified: true
  }
];

const FAQ_ITEMS = [
  {
    question: "Como funciona a emissão da ART (Anotação de Responsabilidade Técnica)?",
    answer: "Todas as nossas estruturas de palcos, coberturas, galpões e sistemas elétricos contam com acompanhamento de engenheiro civil/mecânico habilitado pelo CREA. Emitimos a ART oficial para anexação ao alvará do Corpo de Bombeiros e órgãos públicos da sua cidade."
  },
  {
    question: "Qual a antecedência recomendada para solicitar e reservar equipamentos?",
    answer: "Recomendamos formalizar a reserva com antecedência de 15 a 45 dias para garantir a disponibilidade de datas na nossa agenda de montagem. Contudo, dispomos de frota própria e amplo estoque para atender demandas emergenciais e plantão rápido."
  },
  {
    question: "A Sintetizza atende apenas Sorocaba ou outras cidades do estado de SP?",
    answer: "Atendemos toda a Região Metropolitana de Sorocaba, Campinas, Jundiaí, Vale do Tietê, Grande São Paulo e interior de SP, com frota própria e equipe de logística especializada."
  },
  {
    question: "Os equipamentos acompanham operadores técnicos durante o evento?",
    answer: "Sim! Para sistemas de som Line Array, mesas digitais, painéis de LED, iluminação cênica e geradores de energia, disponibilizamos técnicos e operadores especializados durante toda a duração do seu evento para garantir máxima segurança operacional."
  },
  {
    question: "O que acontece em caso de falta de energia no local do evento?",
    answer: "Oferecemos grupos geradores cabinados super silenciados (55kVA a 350kVA) com quadro de transferência automática (QTA) ou operação contínua, garantindo que o som, iluminação, telões e climatização não parem em nenhum momento."
  },
  {
    question: "Como posso receber um orçamento detalhado com rapidez?",
    answer: "Você pode adicionar os itens desejados pelo nosso construtor de orçamento no site e enviar via WhatsApp em 1 clique, ou entrar em contato direto pelo telefone (15) 99733-9422. Nosso time comercial retorna em até 15 minutos em horário comercial."
  }
];

const CATEGORIES = [
  { id: "all", name: "Todos os Itens" },
  { id: "estruturas", name: "Palcos & Box Truss" },
  { id: "coberturas", name: "Tendas & Galpões" },
  { id: "audio", name: "Sonorização & Áudio" },
  { id: "iluminacao", name: "Iluminação & Cênica" },
  { id: "audiovisual", name: "Painéis de LED & Vídeo" },
  { id: "climatizacao", name: "Climatização & Ventiladores" },
  { id: "energia", name: "Geradores & Elétrica" },
  { id: "stands", name: "Stands & Mobiliário" },
  { id: "seguranca", name: "Arquibancadas & Estruturas" },
  { id: "operacao", name: "Equipe & Laudos ART" }
];

const PRODUCTS = [
  {
    id: "box-truss-palco-q30",
    name: "Palco Box Truss Q30 / Q50",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    image: "assets/images/boxtruss.png",
    shortDesc: "Estrutura modular de alta resistência para palcos, feiras e coberturas.",
    fullDesc: "Palcos modulares em alumínio naval estrutural Q30 e Q50, com piso de compensado naval antiderrapante, escadas, guarda-corpos e ART inclusa.",
    specs: [
      { label: "Material", value: "Alumínio Estrutural Q30 / Q50" },
      { label: "Piso", value: "Compensado naval antiderrapante" },
      { label: "Laudo", value: "ART / CREA oficial inclusa" }
    ],
    features: [
      "Montagem modular sob medida",
      "Escadas e guarda-corpos normatizados",
      "Acompanhamento técnico especializado"
    ],
    isFeatured: true,
    badge: "Mais Pedido"
  },
  {
    id: "gradil-metal-fechamento",
    name: "Gradil de Metal & Fechamentos",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    image: "assets/images/gradil-metal.png",
    shortDesc: "Módulos de contenção, organização de filas e áreas VIP.",
    fullDesc: "Grades de contenção em aço galvanizado para controle de fluxo de público, isolamento de áreas técnicas e segurança perimetral.",
    specs: [
      { label: "Material", value: "Aço galvanizado a fogo" },
      { label: "Medidas", value: "2,00m x 1,20m" },
      { label: "Encaixe", value: "Pino de engate rápido reforçado" }
    ],
    features: [
      "Alta estabilidade e segurança mecânica",
      "Instalação e alinhamento rápido",
      "Pintura e acabamento de alto padrão"
    ],
    isFeatured: false,
    badge: "Segurança"
  },
  {
    id: "tenda-piramidal-reforcada",
    name: "Tenda Piramidal 10x10m / 5x5m",
    category: "coberturas",
    categoryLabel: "Tendas & Galpões",
    image: "assets/images/tendas.png",
    shortDesc: "Cobertura modular em lona PVC blackout impermeável e antichamas.",
    fullDesc: "Tendas piramidais estruturadas em aço zincado com lona de alta resistência, proteção UV e sistema modular de calhas para união de múltiplos módulos.",
    specs: [
      { label: "Tamanhos", value: "3x3m, 5x5m, 8x8m e 10x10m" },
      { label: "Estrutura", value: "Aço tubular galvanizado" },
      { label: "Lona", value: "PVC Blackout antichamas com laudo" }
    ],
    features: [
      "Proteção solar e pluvial 100% estanque",
      "Fechamentos laterais translúcidos ou opacos",
      "Montagem técnica com equipe NR-35"
    ],
    isFeatured: true,
    badge: "Destaque"
  },
  {
    id: "galpao-estruturado-temporario",
    name: "Galpão Estruturado Duas Águas",
    category: "coberturas",
    categoryLabel: "Tendas & Galpões",
    image: "assets/images/galpoes.png",
    shortDesc: "Galpão temporário de grande vão livre sem colunas centrais.",
    fullDesc: "Estruturas de grande porte para feiras, convenções empresariais e armazenagem temporária com vão livre de 10m a 30m e pé direito alto.",
    specs: [
      { label: "Vão Livre", value: "10m a 30m de largura" },
      { label: "Pé Direito", value: "4,00m a 6,00m" },
      { label: "Norma Técnica", value: "NBR 6123 cálculo de ventos" }
    ],
    features: [
      "100% de área útil interna aproveitável",
      "Compatível com ar-condicionado e climatizadores",
      "Portas antipânico e iluminação de emergência"
    ],
    isFeatured: false,
    badge: "Grandes Áreas"
  },
  {
    id: "som-line-array-profissional",
    name: "Sistema de Som Line Array",
    category: "audio",
    categoryLabel: "Sonorização & Áudio",
    image: "Galeria/Galery/WhatsApp Image 2026-08-31 at 11.41.58(19).jpeg",
    shortDesc: "Sonorização de alta fidelidade e pressão acústica homogênea.",
    fullDesc: "Sistemas de som Line Array compactos e de grande porte, subwoofers ativos, mesas digitais 32 canais e microfonia sem fio UHF digital.",
    specs: [
      { label: "Capacidade", value: "Eventos de 50 a 10.000 pessoas" },
      { label: "Mesa de Som", value: "Digital com DSP e gravação multipista" },
      { label: "Microfones", value: "Sem fio UHF com scan anti-interferência" }
    ],
    features: [
      "Técnico e operador de áudio dedicados",
      "Calibração acústica com analisador de espectro",
      "Passagem de som antecipada"
    ],
    isFeatured: true,
    badge: "Áudio Pro"
  },
  {
    id: "iluminacao-cenica-moving-led",
    name: "Iluminação Cênica & Moving Heads",
    category: "iluminacao",
    categoryLabel: "Iluminação & Cênica",
    image: "assets/images/som-e-luz.png",
    shortDesc: "Refletores LED, moving heads Beam/Spot e efeitos visuais.",
    fullDesc: "Kits de iluminação DMX com refletores PAR LED RGBW, moving lights Beam 230W/Spot, luz focal para palestrantes e máquinas de fumaça haze.",
    specs: [
      { label: "Equipamentos", value: "Moving Beam 230W, PAR LED 18x18W" },
      { label: "Controle", value: "Mesa DMX / Avolites / GrandMA" },
      { label: "Efeitos", value: "Haze cênico, Sparkular e Strobo" }
    ],
    features: [
      "Iluminação focal para palestrantes e noivos",
      "Criação de cenários de luz dinâmicos e elegantes",
      "Operador técnico durante todo o evento"
    ],
    isFeatured: true,
    badge: "Visual"
  },
  {
    id: "painel-led-p39-outdoor-indoor",
    name: "Painel de LED P3.9 Alta Resolução",
    category: "audiovisual",
    categoryLabel: "Painéis de LED & Vídeo",
    image: "assets/images/locacao-de-painel-de-led.png",
    shortDesc: "Telas de altíssimo brilho para ambientes externos e internos.",
    fullDesc: "Módulos de painel de LED P3.9 com processadora de vídeo 4K, switcher de cortes rápidos e suporte para transmissão de slides, vídeos e câmeras ao vivo.",
    specs: [
      { label: "Pixel Pitch", value: "3.91 mm alta definição" },
      { label: "Taxa de Atualização", value: "3840 Hz (Anti-flicker para câmeras)" },
      { label: "Ambiente", value: "Outdoor (à prova d'água) ou Indoor" }
    ],
    features: [
      "Transmissão de apresentações, vídeos e feeds ao vivo",
      "Montagem em totem solo, parede ou suspenso em Box Truss",
      "Operador de vídeo e processadora inclusos"
    ],
    isFeatured: true,
    badge: "Alta Resolução"
  },
  {
    id: "projetores-alta-potencia-telas",
    name: "Projetores & Telas de Projeção",
    category: "audiovisual",
    categoryLabel: "Painéis de LED & Vídeo",
    image: "assets/images/projetores.jpg",
    shortDesc: "Projetores laser multimídia e telas tensionadas para conferências.",
    fullDesc: "Equipamentos de projeção de alta luminosidade para auditórios, hotéis e salas corporativas, com telas tensionadas de 100\" a 300\".",
    specs: [
      { label: "Potência", value: "5.000 a 10.000 ANSI Lúmens Laser" },
      { label: "Telas", value: "100\" a 300\" tensionadas com tripé ou truss" },
      { label: "Conexões", value: "HDMI 4K, SDI e conversores sem fio" }
    ],
    features: [
      "Monitores de retorno para palestrantes",
      "Passadores de slides e splitters HDMI inclusos"
    ],
    isFeatured: false,
    badge: "Corporativo"
  },
  {
    id: "climatizadores-evaporativos-industriais",
    name: "Climatizadores Evaporativos Ecológicos",
    category: "climatizacao",
    categoryLabel: "Climatização & Ventiladores",
    image: "assets/images/climatizadores.png",
    shortDesc: "Redução de até 10°C na temperatura e renovação contínua de ar fresco.",
    fullDesc: "Climatizadores ecológicos portáteis de alta vazão para tendas, galpões e áreas abertas. Reduzem o calor com baixíssimo consumo de energia.",
    specs: [
      { label: "Vazão de Ar", value: "18.000 a 30.000 m³/h" },
      { label: "Área de Cobertura", value: "150 a 300 m² por unidade" },
      { label: "Ruído", value: "Operação super silenciosa" }
    ],
    features: [
      "Renovação de ar 100% fresco e filtrado",
      "Reservatório interno ou abastecimento contínuo",
      "Sem gotejamento ou névoa molhada"
    ],
    isFeatured: false,
    badge: "Conforto Térmico"
  },
  {
    id: "ventiladores-industriais-alta-vazao",
    name: "Ventiladores Industriais de Alta Vazão",
    category: "climatizacao",
    categoryLabel: "Climatização & Ventiladores",
    image: "assets/images/locacao-de-ventiladores.png",
    shortDesc: "Circulação de ar de alta potência para galpões e pavilhões.",
    fullDesc: "Ventiladores industriais de pedestal e parede para circulação eficiente de ar em grandes eventos, áreas de montagem e estandes.",
    specs: [
      { label: "Diâmetro", value: "65cm a 100cm" },
      { label: "Oscilação", value: "Giro horizontal automático" },
      { label: "Alimentação", value: "127V / 220V" }
    ],
    features: [
      "Potente fluxo de ar direcional",
      "Grade de proteção reforçada",
      "Fácil movimentação no evento"
    ],
    isFeatured: false,
    badge: "Circulação"
  },
  {
    id: "gerador-silenciado-grupos",
    name: "Grupos Geradores Silenciados (55kVA a 350kVA)",
    category: "energia",
    categoryLabel: "Geradores & Elétrica",
    image: "assets/images/geradores-1.png",
    shortDesc: "Fornecimento de energia contínua e segura com operador técnico.",
    fullDesc: "Grupos geradores cabinados super silenciados de 55kVA a 350kVA com cabos blindados, passa-cabos e quadros de distribuição normatizados.",
    specs: [
      { label: "Potências", value: "55kVA, 110kVA, 150kVA e 350kVA" },
      { label: "Nível de Ruído", value: "Super Silenciado (65 dB a 7m)" },
      { label: "Tensão", value: "127V / 220V / 380V Trifásico" }
    ],
    features: [
      "Operador técnico presente durante todo o evento",
      "Abastecimento de combustível incluso",
      "Passa-cabos emborrachados para tráfego de pessoas"
    ],
    isFeatured: false,
    badge: "Autonomia 100%"
  },
  {
    id: "servicos-eletrica-distribuicao",
    name: "Instalações Elétricas & Quadros QTA",
    category: "energia",
    categoryLabel: "Geradores & Elétrica",
    image: "assets/images/servicos-de-eletrica.png",
    shortDesc: "Infraestrutura elétrica segura, quadros de distribuição e laudos.",
    fullDesc: "Dimensionamento elétrico temporário para eventos com quadros de transferência automática (QTA), disjuntores DR e conformidade total com a norma NR-10.",
    specs: [
      { label: "Norma", value: "NR-10 e NBR 5410" },
      { label: "Quadros", value: "QTA e QDF com proteção DR" },
      { label: "ART", value: "Laudo elétrico por engenheiro" }
    ],
    features: [
      "Distribuição balanceada por fase",
      "Passa-cabos de alta resistência",
      "Monitoramento de voltagem em tempo real"
    ],
    isFeatured: false,
    badge: "NR-10"
  },
  {
    id: "stands-para-feiras-bancadas",
    name: "Stands para Feiras & Mobiliário",
    category: "stands",
    categoryLabel: "Stands & Mobiliário",
    image: "assets/images/stands-para-feiras.png",
    shortDesc: "Montagem de estandes modulares, balcões e pisos elevados.",
    fullDesc: "Divisórias modulares tipo Octanorm ou Box Truss, testeiras personalizadas, piso tablado elevado com carpete e mobiliário básico de apoio.",
    specs: [
      { label: "Sistema", value: "Modular Octanorm / Alumínio Q30" },
      { label: "Piso", value: "Tablado elevado nivelado com carpete" }
    ],
    features: [
      "Projetos sob medida para feiras e exposições",
      "Iluminação focal e tomadas dedicadas",
      "Montagem rápida e limpa"
    ],
    isFeatured: false,
    badge: "Feiras"
  },
  {
    id: "bancadas-mobiliario-eventos",
    name: "Bancadas, Balcões & Mobiliário",
    category: "stands",
    categoryLabel: "Stands & Mobiliário",
    image: "assets/images/bancadas.png",
    shortDesc: "Balcões de credenciamento, bancadas de buffet e mobiliário.",
    fullDesc: "Mobiliário funcional para eventos corporativos, feiras, recepções e áreas de atendimento ao público com acabamento impecável.",
    specs: [
      { label: "Modelos", value: "Balcões retos, curvos e bistrôs" },
      { label: "Acabamento", value: "Madeira, fórmica e alumínio" }
    ],
    features: [
      "Ideal para credenciamento e recepção",
      "Fácil higienização e organização",
      "Entrega e montagem no local"
    ],
    isFeatured: false,
    badge: "Mobiliário"
  },
  {
    id: "arquibancadas-modulares-seguranca",
    name: "Arquibancadas Modulares",
    category: "seguranca",
    categoryLabel: "Arquibancadas & Estruturas",
    image: "assets/images/arquibancadas.png",
    shortDesc: "Arquibancadas seguras com assentos normatizados e guarda-corpo.",
    fullDesc: "Estruturas de arquibancadas modulares tubulares em aço galvanizado com piso antiderrapante, escadas de acesso e laudo ART para rodeios, esportes e shows.",
    specs: [
      { label: "Capacidade", value: "Módulos de 50 a 5.000 lugares" },
      { label: "Segurança", value: "Guarda-corpos reforçados e ART inclusa" },
      { label: "Material", value: "Aço estrutural galvanizado" }
    ],
    features: [
      "Atende rigorosamente às normas dos Bombeiros",
      "Escadas de acesso com corrimão duplo",
      "Montagem rápida em qualquer terreno plano"
    ],
    isFeatured: false,
    badge: "Eventos de grande porte"
  },
  {
    id: "ambulancia-medica-uti-eventos",
    name: "Ambulância Médica & UTI para Eventos",
    category: "seguranca",
    categoryLabel: "Arquibancadas & Estruturas",
    image: "assets/images/ambulancia-medica---uti-1000x713.png",
    shortDesc: "Cobertura médica de emergência com UTI móvel e equipe de saúde.",
    fullDesc: "Posto médico móvel e ambulância UTI com enfermeiro/médico para atendimento de urgência e conformidade com alvará sanitário e de bombeiros.",
    specs: [
      { label: "Tipo", value: "Ambulância Básica ou UTI Móvel" },
      { label: "Equipe", value: "Socorrista, Enfermeiro e Médico sob demanda" },
      { label: "Equipamentos", value: "Desfibrilador (DEA), oxigênio e maca" }
    ],
    features: [
      "Exigência legal para eventos de grande público",
      "Pronto atendimento no local",
      "Plantão durante todo o evento"
    ],
    isFeatured: false,
    badge: "Saúde & Alvará"
  },
  {
    id: "container-modulos-habitacionais",
    name: "Containers & Módulos Habitacionais",
    category: "seguranca",
    categoryLabel: "Arquibancadas & Estruturas",
    image: "assets/images/container.png",
    shortDesc: "Módulos climatizados para camarim, bilheteria e produção.",
    fullDesc: "Containers habitacionais de 20 e 40 pés equipados com ar-condicionado, tomadas, iluminação LED e fechadura de segurança para camarins e equipes técnicas.",
    specs: [
      { label: "Tamanhos", value: "6,00m x 2,40m (20 pés) e 12,00m (40 pés)" },
      { label: "Conforto", value: "Ar-condicionado Split e isolamento" },
      { label: "Usos", value: "Camarim, bilheteria, depósito e coordenação" }
    ],
    features: [
      "Total privacidade e segurança para artistas e produção",
      "Pronto para uso (plug & play elétrico)",
      "Pintura e acabamento interno de alto padrão"
    ],
    isFeatured: false,
    badge: "Produção"
  },
  {
    id: "brinquedos-inflaveis-recreacao",
    name: "Brinquedos Infláveis & Área Kids",
    category: "seguranca",
    categoryLabel: "Arquibancadas & Estruturas",
    image: "assets/images/brinquedos-infllaveis.png",
    shortDesc: "Espaço kids completo para feiras, festivais e confraternizações.",
    fullDesc: "Tobogãs infláveis, castelos pula-pula, futebol de sabão e camas elásticas com monitores treinados para entretenimento seguro infantil em eventos.",
    specs: [
      { label: "Modelos", value: "Tobogã, Castelo Pula-Pula e Cama Elástica" },
      { label: "Monitores", value: "Equipe de recreação inclusa sob demanda" },
      { label: "Higiene", value: "Higienização completa antes de cada montagem" }
    ],
    features: [
      "Diversão garantida para famílias e crianças",
      "Lonas vulcanizadas de alta resistência e segurança",
      "Motores com proteção elétrica"
    ],
    isFeatured: false,
    badge: "Área Kids"
  },
  {
    id: "estrutura-bar-bartender",
    name: "Estruturas de Bar & Atendimento",
    category: "stands",
    categoryLabel: "Stands & Mobiliário",
    image: "assets/images/bartender.png",
    shortDesc: "Bares modulares iluminados e estações completas de drinks.",
    fullDesc: "Balcões modulares para operação de bar, chopeiras, cuba de gelo e atendimento rápido em festas, festivais e casamentos.",
    specs: [
      { label: "Estrutura", value: "Módulos retos e em L com testeira" },
      { label: "Iluminação", value: "Fitas de LED decorativas" }
    ],
    features: [
      "Agilidade no atendimento ao público",
      "Design moderno e atraente",
      "Montagem compacta e higiênica"
    ],
    isFeatured: false,
    badge: "Bar & Drinks"
  },
  {
    id: "coordenacao-tecnica-art-alvara",
    name: "Engenharia Técnica, Laudo ART & Alvará de Eventos",
    category: "operacao",
    categoryLabel: "Equipe & Laudos ART",
    image: "assets/images/alvara-para-eventos.png",
    shortDesc: "Responsabilidade técnica completa e emissão de laudos oficiais.",
    fullDesc: "Emissão de ART de montagem e elétrica, laudos de estabilidade mecânica, memorial descritivo para alvará do Corpo de Bombeiros e equipe homologada.",
    specs: [
      { label: "Normas Atendidas", value: "NR-10, NR-35 e NBR 6123" },
      { label: "Documentação", value: "ART / CREA oficial assinada" }
    ],
    features: [
      "Engenheiro responsável credenciado",
      "Equipe uniformizada e certificada com EPIs",
      "Vistoria prévia no local do evento"
    ],
    isFeatured: false,
    badge: "Laudo ART"
  }
];

CATEGORIES.push(...EXTRA_CATEGORIES);
PRODUCTS.push(...EXTRA_PRODUCTS);

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

function searchProducts(query) {
  if (!query) return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.shortDesc.toLowerCase().includes(q) ||
    p.categoryLabel.toLowerCase().includes(q) ||
    (p.features && p.features.some(f => f.toLowerCase().includes(q))) ||
    (p.specs && p.specs.some(s => s.value.toLowerCase().includes(q) || s.label.toLowerCase().includes(q)))
  );
}
