/**
 * =============================================================================
 * SINTETIZZA - BASE DE DADOS WIREFRAME (LEVE & SEM EMOJIS)
 * =============================================================================
 */

const SINTETIZZA_CONFIG = {
  companyName: "Sintetizza Eventos",
  companyShortName: "Sintetizza",
  tagline: "Estruturas, Som, Luz, Vídeo e Climatização para Eventos",
  email: "sintetizzalocacoes@gmail.com",
  emailQuotes: "sintetizzalocacoes@gmail.com",
  phone: "(15) 99835-3108",
  whatsappNumber: "5515998353108",
  whatsappDisplay: "(15) 99835-3108",
  address: "Sorocaba e Região - SP",
  serviceHours: "Seg a Sex: 08h às 18h | Plantão 24h",
  instagram: "@sintetizza_locacoes",
  instagramUrl: "https://www.instagram.com/sintetizza_locacoes/"
};

const CATEGORIES = [
  { id: "all", name: "Todos os Itens" },
  { id: "estruturas", name: "Palcos & Box Truss" },
  { id: "coberturas", name: "Tendas & Galpões" },
  { id: "audio", name: "Sonorização & Áudio" },
  { id: "iluminacao", name: "Iluminação & Cênica" },
  { id: "audiovisual", name: "Painéis de LED & Vídeo" },
  { id: "climatizacao", name: "Climatização" },
  { id: "energia", name: "Geradores & Energia" },
  { id: "stands", name: "Stands & Mobiliário" },
  { id: "operacao", name: "Equipe & Laudos ART" }
];

const PRODUCTS = [
  {
    id: "box-truss-palco-q30",
    name: "Palco Box Truss Q30 / Q50",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    shortDesc: "Estrutura de alumínio modular para palcos e suporte técnico.",
    fullDesc: "Palco modular e cobertura em Box Truss Q30/Q50 com piso naval antiderrapante e ART.",
    specs: [
      { label: "Material", value: "Alumínio Estrutural Q30 / Q50" },
      { label: "Piso", value: "Compensado naval antiderrapante" },
      { label: "Laudo", value: "ART / CREA inclusa" }
    ],
    features: [
      "Montagem modular configurável",
      "Escadas e guarda-corpos normatizados",
      "Equipe técnica especializada"
    ],
    isFeatured: true,
    badge: "Destaque"
  },
  {
    id: "gradil-metal-fechamento",
    name: "Gradil de Metal & Fechamentos",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    shortDesc: "Módulos de contenção e organizadores de fluxo de público.",
    fullDesc: "Grades de aço galvanizado para contenção, áreas VIP e direcionamento de fluxo.",
    specs: [
      { label: "Material", value: "Aço galvanizado" },
      { label: "Medidas", value: "2,00m x 1,20m" },
      { label: "Encaixe", value: "Pino de engate rápido" }
    ],
    features: [
      "Alta estabilidade e segurança",
      "Instalação e alinhamento rápido"
    ],
    isFeatured: false,
    badge: "Segurança"
  },
  {
    id: "tenda-piramidal-reforcada",
    name: "Tenda Piramidal 10x10m / 5x5m",
    category: "coberturas",
    categoryLabel: "Tendas & Galpões",
    shortDesc: "Cobertura modular em lona PVC blackout antichamas.",
    fullDesc: "Tendas estruturadas em aço zincado com lona impermeável e proteção UV.",
    specs: [
      { label: "Tamanhos", value: "3x3m, 5x5m, 8x8m e 10x10m" },
      { label: "Estrutura", value: "Aço galvanizado" },
      { label: "Lona", value: "PVC Blackout antichamas" }
    ],
    features: [
      "Proteção solar e pluvial total",
      "Fechamentos laterais opcionais",
      "Montagem rápida NR-35"
    ],
    isFeatured: true,
    badge: "Destaque"
  },
  {
    id: "galpao-estruturado-temporario",
    name: "Galpão Estruturado Duas Águas",
    category: "coberturas",
    categoryLabel: "Tendas & Galpões",
    shortDesc: "Galpão temporário de grande vão livre sem colunas centrais.",
    fullDesc: "Estrutura para feiras, convenções e armazenagem com vão de 10m a 30m.",
    specs: [
      { label: "Vão Livre", value: "10m a 30m" },
      { label: "Pé Direito", value: "4m a 6m" },
      { label: "Norma", value: "NBR 6123 ventos" }
    ],
    features: [
      "100% de área útil interna",
      "Compatível com climatização"
    ],
    isFeatured: false,
    badge: "Grandes Áreas"
  },
  {
    id: "som-line-array-profissional",
    name: "Sistema de Som Line Array",
    category: "audio",
    categoryLabel: "Sonorização & Áudio",
    shortDesc: "Sonorização de alta fidelidade e pressão sonora homogênea.",
    fullDesc: "Sistemas line array, subwoofers, mesa digital e microfonia sem fio UHF.",
    specs: [
      { label: "Capacidade", value: "Eventos de 50 a 10.000 pessoas" },
      { label: "Mesa", value: "Digital 16/32/64 canais" },
      { label: "Microfonia", value: "UHF sem fio com scan digital" }
    ],
    features: [
      "Técnico e operador de som inclusos",
      "Processamento DSP anti-microfonia"
    ],
    isFeatured: true,
    badge: "Áudio"
  },
  {
    id: "iluminacao-cenica-moving-led",
    name: "Iluminação Cênica & Moving Heads",
    category: "iluminacao",
    categoryLabel: "Iluminação & Cênica",
    shortDesc: "Refletores LED, moving heads Beam/Spot e efeitos cênicos.",
    fullDesc: "Kits de iluminação DMX com refletores RGBW, luz focal e efeitos de palco.",
    specs: [
      { label: "Equipamentos", value: "Moving Beam 230W, Par LED 18x18W" },
      { label: "Controle", value: "Mesa DMX profissional" },
      { label: "Efeitos", value: "Haze cênico e Sparkular" }
    ],
    features: [
      "Iluminação focal para palestrantes",
      "Criação de cenários de luz dinâmicos"
    ],
    isFeatured: true,
    badge: "Luz"
  },
  {
    id: "painel-led-p39-outdoor-indoor",
    name: "Painel de LED P3.9 Alta Resolução",
    category: "audiovisual",
    categoryLabel: "Painéis de LED & Vídeo",
    shortDesc: "Telas de alto brilho para ambientes externos e internos.",
    fullDesc: "Módulos de painel de LED P3.9 com processadora de vídeo 4K e switcher.",
    specs: [
      { label: "Pixel Pitch", value: "3.91 mm" },
      { label: "Frequência", value: "3840 Hz (Anti-flicker)" },
      { label: "Brilho", value: "Outdoor / Indoor" }
    ],
    features: [
      "Transmissão de slides, vídeos e câmeras",
      "Montagem em solo ou suspensa"
    ],
    isFeatured: true,
    badge: "Vídeo"
  },
  {
    id: "projetores-alta-potencia-telas",
    name: "Projetores & Telas de Projeção",
    category: "audiovisual",
    categoryLabel: "Painéis de LED & Vídeo",
    shortDesc: "Projetores multimídia laser de alta potência e telas tensionadas.",
    fullDesc: "Equipamentos de projeção para auditórios, salas corporativas e workshops.",
    specs: [
      { label: "Potência", value: "5.000 a 10.000 ANSI Lúmens" },
      { label: "Telas", value: "100\" a 300\" tensionadas" }
    ],
    features: [
      "Monitores de retorno para palco",
      "Cabeamento HDMI/SDI de longa distância"
    ],
    isFeatured: false,
    badge: "Projeção"
  },
  {
    id: "climatizadores-evaporativos-industriais",
    name: "Climatizadores Evaporativos",
    category: "climatizacao",
    categoryLabel: "Climatização",
    shortDesc: "Redução de temperatura e renovação contínua de ar.",
    fullDesc: "Climatizadores ecológicos de alta vazão para tendas, galpões e eventos abertos.",
    specs: [
      { label: "Vazão", value: "18.000 a 30.000 m³/h" },
      { label: "Cobertura", value: "150 a 300 m² cada" }
    ],
    features: [
      "Renovação de ar 100% fresco",
      "Baixo consumo e ruído silencioso"
    ],
    isFeatured: false,
    badge: "Climatização"
  },
  {
    id: "gerador-silenciado-grupos",
    name: "Gerador de Energia Silenciado",
    category: "energia",
    categoryLabel: "Geradores & Energia",
    shortDesc: "Fornecimento elétrico contínuo com quadros e operador.",
    fullDesc: "Grupos geradores cabinados super silenciados de 55kVA a 350kVA com cabos e QTA.",
    specs: [
      { label: "Potências", value: "55kVA a 350kVA" },
      { label: "Ruído", value: "Super Silenciado (65 dB)" },
      { label: "Saídas", value: "127V / 220V / 380V Trifásico" }
    ],
    features: [
      "Operador técnico durante todo o evento",
      "Passa-cabos emborrachados inclusos"
    ],
    isFeatured: false,
    badge: "Energia"
  },
  {
    id: "stands-para-feiras-bancadas",
    name: "Stands para Feiras & Mobiliário",
    category: "stands",
    categoryLabel: "Stands & Mobiliário",
    shortDesc: "Montagem de estandes modulares, balcões e arquibancadas.",
    fullDesc: "Divisórias modulares, testeiras, piso elevado com carpete e mobiliário de apoio.",
    specs: [
      { label: "Sistema", value: "Octanorm / Box Truss" },
      { label: "Piso", value: "Tablado elevado com carpete" }
    ],
    features: [
      "Projetos sob medida para feiras",
      "Mobiliário básico incluso"
    ],
    isFeatured: false,
    badge: "Stands"
  },
  {
    id: "coordenacao-tecnica-art-alvara",
    name: "Coordenação Técnica & Laudo ART",
    category: "operacao",
    categoryLabel: "Equipe & Laudos ART",
    shortDesc: "Responsabilidade técnica com engenheiro habilitado CREA.",
    fullDesc: "Emissão de ART, laudos de estabilidade, vistoria de bombeiros e equipe homologada.",
    specs: [
      { label: "Normas", value: "NR-10, NR-35 e NBR 6123" },
      { label: "Documentação", value: "ART / CREA oficial" }
    ],
    features: [
      "Acompanhamento técnico in loco",
      "Equipe uniformizada com EPIs"
    ],
    isFeatured: false,
    badge: "Engenharia"
  }
];

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
    (p.specs && p.specs.some(s => s.value.toLowerCase().includes(q)))
  );
}
