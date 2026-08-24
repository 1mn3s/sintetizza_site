/**
 * Sintetizza Eventos - Base de Dados de Produtos, Soluções e Configurações
 */

const SINTETIZZA_CONFIG = {
  companyName: "Sintetizza Eventos",
  companyShortName: "Sintetizza",
  tagline: "Engenharia, Estruturas e Tecnologia para Grandes Eventos",
  email: "contato@sintetizzaeventos.com.br",
  emailQuotes: "orcamentos@sintetizzaeventos.com.br",
  phone: "(11) 98765-4321",
  whatsappNumber: "5511987654321", // Formato internacional sem caracteres especiais
  whatsappDisplay: "(11) 98765-4321",
  address: "Av. Industrial dos Eventos, 1500 - Galpão 04, São Paulo - SP",
  serviceHours: "Segunda a Sexta: 08h às 18h | Plantão Operacional 24h",
  instagram: "@sintetizzaeventos",
  linkedin: "company/sintetizza-eventos"
};

const CATEGORIES = [
  { id: "all", name: "Todos os Produtos", icon: "📦" },
  { id: "estruturas", name: "Estruturas & Palcos", icon: "🏗️" },
  { id: "coberturas", name: "Tendas & Coberturas", icon: "🎪" },
  { id: "audio", name: "Sonorização Profissional", icon: "🔊" },
  { id: "iluminacao", name: "Iluminação & Efeitos", icon: "💡" },
  { id: "audiovisual", name: "Painéis de LED & Vídeo", icon: "🖥️" },
  { id: "energia", name: "Geradores & Energia", icon: "⚡" },
  { id: "operacao", name: "Equipe & Logística", icon: "👷" }
];

const PRODUCTS = [
  {
    id: "palco-box-truss-q30",
    name: "Palco com Cobertura Box Truss Q30 / Q50",
    category: "estruturas",
    categoryLabel: "Estruturas & Palcos",
    shortDesc: "Estrutura em alumínio de alta resistência com piso em compensado naval antiderrapante e ART inclusa.",
    fullDesc: "Sistema modular completo de palco e cobertura estrutural em alumínio liga estrutural (Box Truss Q30 e Q50). Desenvolvido para atender desde apresentações corporativas, festivais até grandes shows, garantindo segurança com laudos técnicos e ART assinada por engenheiro responsável.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Material", value: "Alumínio Estrutural Q30 / Q50" },
      { label: "Capacidade de Carga", value: "Até 1.500 kg por vão" },
      { label: "Piso", value: "Compensado naval 18mm antiderrapante e anti-chamas" },
      { label: "Pé Direito", value: "4m a 8m regulável" },
      { label: "Documentação", value: "ART de montagem e laudos técnicos inclusos" }
    ],
    features: [
      "Montagem rápida e modular adaptável a qualquer terreno",
      "Guarda-corpos de segurança e escadas normatizadas",
      "Lona antichamas vulcanizada com tratamento anti-UV",
      "Equipe de rigger e montagem especializada"
    ],
    isFeatured: true,
    badge: "Mais Solicitado"
  },
  {
    id: "tenda-piramidal-galvanizada",
    name: "Tenda Piramidal Reforçada 10x10m / 5x5m",
    category: "coberturas",
    categoryLabel: "Tendas & Coberturas",
    shortDesc: "Tendas estruturadas em aço zincado com lona PVC blackout impermeável e calhas de escoamento.",
    fullDesc: "Solução ideal para feiras, casamentos ao ar livre, áreas de credenciamento, praças de alimentação e eventos corporativos. Oferece proteção solar total com isolamento térmico por lona blackout e sistema de união modular com calhas galvanizadas.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Tamanhos Disponíveis", value: "5x5m, 10x10m e projetos sob medida" },
      { label: "Estrutura", value: "Aço carbono galvanizado a fogo" },
      { label: "Lona", value: "PVC vinílica Blackout (antichamas, antimofo e anti-UV)" },
      { label: "Fixação", value: "Estacas de solo ou contrapesos de concreto" }
    ],
    features: [
      "Acoplamento contínuo sem goteiras com calhas embutidas",
      "Opção de fechamento lateral transparente ou branco",
      "Instalação rápida com equipe certificada NR-35"
    ],
    isFeatured: true,
    badge: "Destaque"
  },
  {
    id: "sistema-som-line-array",
    name: "Sistema de Som Line Array & Subwoofers",
    category: "audio",
    categoryLabel: "Sonorização Profissional",
    shortDesc: "Sonorização de alta definição para auditórios, convenções, bandas e eventos corporativos.",
    fullDesc: "Sistema acústico de precisão projetado com simuladores de pressão sonora (SPL) para cobertura homogênea e inteligibilidade de fala cristalina. Acompanha processamento digital DSP, amplificadores classe D e mesa digital de alta performance.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Cobertura", value: "Eventos de 100 a 10.000 pessoas" },
      { label: "Mesa de Som", value: "Digital 32/64 canais com controle wireless por tablet" },
      { label: "Subwoofers", value: "High-power 18\" e 21\" com resposta estendida" },
      { label: "Microfonia", value: "Sistemas sem fio digitais UHF com scan automático" }
    ],
    features: [
      "Operador de áudio e técnico de PA/Monitor inclusos",
      "Processamento digital anti-feedback e equalização de sala",
      "Microfones de lapela, auricular e bastão profissional"
    ],
    isFeatured: true,
    badge: "Alta Fidelidade"
  },
  {
    id: "painel-led-alta-definicao",
    name: "Painel de LED P3.9 Outdoor / Indoor",
    category: "audiovisual",
    categoryLabel: "Painéis de LED & Vídeo",
    shortDesc: "Alta taxa de atualização e brilho intenso visível sob luz solar direta para palcos e estandes.",
    fullDesc: "Módulos de painel de LED com pitch 3.9mm para alta resolução, taxa de atualização de 3840Hz (livre de flickering em transmissões ao vivo ou fotos) e processadora de vídeo profissional com suporte a múltiplas entradas (HDMI, SDI, DP).",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Pixel Pitch", value: "3.91 mm" },
      { label: "Brilho", value: "Até 5.000 nits (Outdoor) / 1.200 nits (Indoor)" },
      { label: "Taxa de Atualização", value: "3840 Hz (Anti-flicker para câmeras)" },
      { label: "Processadora", value: "Novastar / Colorlight com switcher de vídeo" }
    ],
    features: [
      "Transmissão simultânea de slides, vídeos 4K e câmeras ao vivo",
      "Montagem suspensa (fly) ou com suporte de solo rígido",
      "Operador de vídeo e VJ durante todo o evento"
    ],
    isFeatured: true,
    badge: "Tecnologia Visual"
  },
  {
    id: "iluminacao-cenica-moving-heads",
    name: "Iluminação Cênica, Moving Heads & Efeitos",
    category: "iluminacao",
    categoryLabel: "Iluminação & Efeitos",
    shortDesc: "Kits de iluminação DMX com moving heads Beam/Spot, refletores LED RGBW e máquina de haze.",
    fullDesc: "Projeto luminotécnico dinâmico capaz de transformar qualquer ambiente. Inclui mapa de luz personalizado, refletores de ribalta para ambientação, iluminação focal para palestrantes e efeitos de pista de dança sincronizados via mesa DMX.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Equipamentos", value: "Moving Heads 7R/Beam 230W, Par LED 18x18W RGBWA+UV" },
      { label: "Controle", value: "Console DMX GrandMA onPC / Avolites" },
      { label: "Efeitos", value: "Haze cênico fino, fumaça baixa e faíscas frias (Sparkular)" },
      { label: "Iluminação de Foco", value: "Elipsoidais e Fresnéis LED 3200K/5600K" }
    ],
    features: [
      "Iluminação cênica de destaque para fotos e filmagens",
      "Criação de cenários de luz dinâmicos por momento do cronograma",
      "Light Designer e técnico de operação dedicados"
    ],
    isFeatured: false,
    badge: "Cênica & Show"
  },
  {
    id: "gerador-energia-silenciado",
    name: "Gerador de Energia Silenciado 50kVA a 250kVA",
    category: "energia",
    categoryLabel: "Geradores & Energia",
    shortDesc: "Autonomia energética ininterrupta com cabos trifásicos, quadro de transferência e combustível.",
    fullDesc: "Garantia de fornecimento elétrico estável e redundante para que seu evento nunca pare. Geradores cabinados de baixíssimo ruído acústico, ideais para áreas urbanas e eventos de alto padrão, acompanhados de operador de máquinas e cabos dimensionados.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Potências", value: "50kVA, 80kVA, 150kVA, 250kVA" },
      { label: "Nível de Ruído", value: "Super silenciado (65dB a 7 metros)" },
      { label: "Distribuição", value: "Main Power trifásico com saídas Steck e borneira" },
      { label: "Combustível", value: "Diesel S10 de alta eficiência com autonomia estendida" }
    ],
    features: [
      "Operador técnico presente durante todo o período de uso",
      "Passa-cabos de borracha antiderrapante de alta proteção",
      "Quadro de transferência e proteção contra surtos elétricos"
    ],
    isFeatured: false,
    badge: "Energia Segura"
  },
  {
    id: "operacao-logistica-equipe",
    name: "Coordenação Operacional, Rigger & Montagem",
    category: "operacao",
    categoryLabel: "Equipe & Logística",
    shortDesc: "Equipe técnica homologada com NR-35, NR-10 e coordenador de produção no local.",
    fullDesc: "A execução perfeita do evento depende de pessoas experientes. A Sintetizza fornece coordenadores de montagem, técnicos especialistas em áudio, luz e vídeo, riggers e equipe de apoio com uniformização padrão e todos os EPIs exigidos pelas normas de segurança do trabalho.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Normas", value: "NR-10 (Elétrica), NR-35 (Trabalho em Altura), PCMSO" },
      { label: "Uniformização", value: "Padrão preto corporativo com identificação" },
      { label: "Logística", value: "Frota própria de caminhões e vans operacionais" },
      { label: "Acompanhamento", value: "Do briefing inicial ao desmonte completo" }
    ],
    features: [
      "Zero preocupação com mão de obra e segurança",
      "Coordenação de cronograma de montagem e passagens de som",
      "Comunicação via rádio integrada durante o evento"
    ],
    isFeatured: false,
    badge: "Suporte 360°"
  },
  {
    id: "tenda-cristal-casamento",
    name: "Tenda Cristal Panorâmica para Casamentos",
    category: "coberturas",
    categoryLabel: "Tendas & Coberturas",
    shortDesc: "Cobertura 100% transparente premium para eventos sociais sofisticados e integração com a natureza.",
    fullDesc: "Projetada para eventos elegantes como casamentos, recepções e jantares de gala. A lona cristal permite a visualização do céu e da paisagem natural durante o dia e ganha um efeito deslumbrante com a iluminação cênica noturna.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    specs: [
      { label: "Acabamento", value: "Lona PVC Cristal 100% transparente anti-chamas" },
      { label: "Estrutura", value: "Box Truss em alumínio polido ou aço branco" },
      { label: "Pé Direito", value: "4m a 6m livre de colunas internas" },
      { label: "Personalização", value: "Cortinados e rebaixamento de teto disponíveis" }
    ],
    features: [
      "Integração visual com jardins e cenários abertos",
      "Total proteção contra chuva e vento com calhas perimetrais",
      "Harmonia perfeita com lustres e micro-lâmpadas (fairy lights)"
    ],
    isFeatured: false,
    badge: "Luxo & Design"
  }
];

// Helper Functions
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
    (p.features && p.features.some(f => f.toLowerCase().includes(q)))
  );
}
