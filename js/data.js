/**
 * =============================================================================
 * SINTETIZZA - BASE DE DADOS OFICIAL & CATÁLOGO DE SOLUÇÕES TÉCNICAS
 * =============================================================================
 */

const SINTETIZZA_CONFIG = {
  companyName: "Sintetizza Eventos",
  companyShortName: "Sintetizza",
  tagline: "Infraestrutura Completa, Sonorização, Iluminação, Painéis de LED e Climatização",
  email: "sintetizzalocacoes@gmail.com",
  emailQuotes: "sintetizzalocacoes@gmail.com",
  phone: "(15) 99835-3108",
  whatsappNumber: "5515998353108",
  whatsappDisplay: "(15) 99835-3108",
  address: "Sorocaba e Região - SP",
  serviceHours: "Segunda a Sexta: 08h às 18h | Plantão Operacional 24h em Eventos",
  instagramUrl: "https://www.instagram.com/sintetizza_locacoes/"
};

const CATEGORIES = [
  { id: "all", name: "Todos os Itens", icon: "layers" },
  { id: "estruturas", name: "Palcos & Box Truss", icon: "box" },
  { id: "coberturas", name: "Tendas & Galpões", icon: "tent" },
  { id: "audio", name: "Sonorização & Áudio", icon: "volume-2" },
  { id: "iluminacao", name: "Iluminação & Cênica", icon: "sun" },
  { id: "audiovisual", name: "Painéis de LED & Vídeo", icon: "tv" },
  { id: "climatizacao", name: "Climatização", icon: "wind" },
  { id: "energia", name: "Geradores & Elétrica", icon: "zap" },
  { id: "stands", name: "Stands & Mobiliário", icon: "layout" },
  { id: "operacao", name: "Engenharia & Laudos ART", icon: "shield-check" }
];

const PRODUCTS = [
  {
    id: "box-truss-palco-q30",
    name: "Palco Box Truss Q30 / Q50",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    image: "assets/images/original/boxtruss.png",
    fallbackImage: "assets/images/original/principal-novo-2.png",
    shortDesc: "Estrutura de alumínio modular reforçada com piso naval e ART.",
    fullDesc: "Palco modular e coberturas em estrutura de alumínio Box Truss Q30 e Q50 de alta resistência. Inclui piso em compensado naval antiderrapante, escadas normatizadas, guarda-corpos de segurança e montagem completa por equipe qualificada NR-35.",
    specs: [
      { label: "Estrutura", value: "Alumínio Estrutural Q30 / Q50" },
      { label: "Piso", value: "Compensado naval antiderrapante 18mm" },
      { label: "Capacidade de Carga", value: "500 kg/m²" },
      { label: "Certificação", value: "ART / CREA oficial inclusa" }
    ],
    features: [
      "Montagem modular em diversas alturas (0,60m a 2,00m)",
      "Guarda-corpos e escadas de acesso normatizadas",
      "Equipe homologada NR-35 para trabalho em altura",
      "Dimensionamento de cobertura em duas ou quatro águas"
    ],
    isFeatured: true,
    badge: "Mais Solicitado"
  },
  {
    id: "gradil-metal-fechamento",
    name: "Gradil de Metal & Fechamentos",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    image: "assets/images/original/gradil-metal.png",
    fallbackImage: "assets/images/original/principal-novo-2.png",
    shortDesc: "Grades de contenção e disciplinadores de fluxo em aço galvanizado.",
    fullDesc: "Módulos de contenção pesada e direcionadores de fluxo em aço galvanizado a fogo. Essenciais para isolamento de áreas VIP, controle de acesso, corredores de emergência e segurança patrimonial do público.",
    specs: [
      { label: "Material", value: "Aço galvanizado a quente" },
      { label: "Dimensões", value: "2,00m (comp.) x 1,20m (alt.)" },
      { label: "Sistema de Encaixe", value: "Pino de engate rápido com trava" },
      { label: "Base", value: "Pés tubulares de alta estabilidade" }
    ],
    features: [
      "Alta estabilidade contra empuxo de público",
      "Montagem ágil e alinhamento milimétrico",
      "Normatizado para segurança de grandes multidões"
    ],
    isFeatured: false,
    badge: "Segurança"
  },
  {
    id: "stands-para-feiras-bancadas",
    name: "Stands para Feiras & Estandes Modulares",
    category: "stands",
    categoryLabel: "Stands & Mobiliário",
    image: "assets/images/original/stands-para-feiras.png",
    fallbackImage: "assets/images/original/bg10.png",
    shortDesc: "Montagem de estandes modulares em Octanorm, piso elevado e testeiras.",
    fullDesc: "Estruturas completas para expositores em feiras, congressos e convenções de negócios. Sistema modular Octanorm com placas TS brancas, piso elevado revestido em carpete, testeira de identificação, iluminação focal e balcão de atendimento.",
    specs: [
      { label: "Sistema", value: "Octanorm Alumínio Anodizado" },
      { label: "Paredes", value: "Painéis TS brancos 4mm" },
      { label: "Piso", value: "Tablado elevado com carpete resinado" },
      { label: "Iluminação", value: "Spots LED focais inclusos" }
    ],
    features: [
      "Layouts customizados (3x3m, 6x3m, 10x5m ou especiais)",
      "Testeira para aplicação de logotipo da empresa",
      "Mobiliário de apoio disponível (mesas bistrô, banquetas)"
    ],
    isFeatured: true,
    badge: "Corporativo"
  },
  {
    id: "painel-led-p39-outdoor-indoor",
    name: "Painel de LED P3.9 Alta Resolução",
    category: "audiovisual",
    categoryLabel: "Painéis de LED & Vídeo",
    image: "assets/images/original/locacao-de-painel-de-led.png",
    fallbackImage: "assets/images/original/principal-novo-3.png",
    shortDesc: "Telas de alta definição e brilho para ambientes externos e internos.",
    fullDesc: "Gabinetes de painel de LED P3.9 de altíssima taxa de atualização (3840Hz), anti-flicker e excelente reprodução cromática. Perfeitos para transmissão ao vivo, conferências corporativas, telões de palco, exibição de patrocinadores e shows.",
    specs: [
      { label: "Pixel Pitch", value: "3.91 mm (Indoor / Outdoor)" },
      { label: "Taxa de Atualização", value: "3840 Hz (Gravação sem linhas)" },
      { label: "Brilho", value: "5.500 nits (Alta visibilidade ao sol)" },
      { label: "Processamento", value: "Processadora de Vídeo 4K / Switcher" }
    ],
    features: [
      "Transmissão de câmeras, apresentações PPT e vídeos Full HD/4K",
      "Montagem suspensa (fly) em Box Truss ou em solo com estrutura própria",
      "Operador técnico de switcher e vídeo durante todo o evento"
    ],
    isFeatured: true,
    badge: "Alta Tecnologia"
  },
  {
    id: "som-line-array-profissional",
    name: "Sistema de Som Line Array & Riders",
    category: "audio",
    categoryLabel: "Sonorização & Áudio",
    image: "assets/images/original/som-e-luz.png",
    fallbackImage: "assets/images/original/sintetizza-eventos.jpg",
    shortDesc: "Sonoplastia de alta fidelidade e pressão sonora homogênea para shows e palestras.",
    fullDesc: "Sistemas profissionais de áudio Line Array, subwoofers de alta potência, mesas digitais de 32 a 64 canais, microfones sem fio UHF com varredura digital e monitoramento de palco. Atendimento desde reuniões executivas até grandes festivais.",
    specs: [
      { label: "Capacidade", value: "Eventos de 50 a 10.000 pessoas" },
      { label: "Mesa de Som", value: "Mesa Digital 32/64 Canais (Yamaha/Behringer)" },
      { label: "Microfonia", value: "Sistemas Shure / Sennheiser UHF" },
      { label: "Processamento", value: "DSP Digital com alinhamento acústico" }
    ],
    features: [
      "Engenheiro / Técnico de som dedicado durante o evento",
      "Microfones sem fio bastão, headset e lapela",
      "Alinhamento acústico conforme a geometria do local"
    ],
    isFeatured: true,
    badge: "Destaque"
  },
  {
    id: "iluminacao-cenica-moving-led",
    name: "Iluminação Cênica & Moving Heads",
    category: "iluminacao",
    categoryLabel: "Iluminação & Cênica",
    image: "assets/images/original/som-e-luz.png",
    fallbackImage: "assets/images/original/principal-novo-3.png",
    shortDesc: "Kits de iluminação DMX com Moving Heads Beam/Spot, refletores Par LED e haze.",
    fullDesc: "Projetos luminotécnicos que transformam o ambiente do evento. Inclui refletores Par LED RGBW para iluminação arquitetural e cênica, moving heads Beam 230W/Spot para efeitos dinâmicos, luz branca quente para palestrantes e mesa DMX controlada por operador.",
    specs: [
      { label: "Moving Heads", value: "Beam 230W 7R / Spot LED" },
      { label: "Refletores", value: "Par LED 18x18W Full RGBW" },
      { label: "Controle", value: "Mesa DMX / Avolites Titan" },
      { label: "Efeitos", value: "Máquina de fumaça cênica (Haze) inclusa" }
    ],
    features: [
      "Criação de cenários de luz personalizados com a identidade do evento",
      "Iluminação focal anti-sombra para fotos e filmagens",
      "Operador de iluminação profissional"
    ],
    isFeatured: true,
    badge: "Cênica"
  },
  {
    id: "galpao-estruturado-duas-aguas",
    name: "Galpão Estruturado Duas Águas",
    category: "coberturas",
    categoryLabel: "Tendas & Galpões",
    image: "assets/images/original/galpoes.png",
    fallbackImage: "assets/images/original/sintetizza-eventos.jpg",
    shortDesc: "Galpões temporários de grande porte sem colunas internas.",
    fullDesc: "Grandes estruturas modulares de duas águas em perfis de alumínio e aço zincado, com vãos livres de 10m a 30m de largura e comprimento expansível a cada 5 metros. Cobertura em lona PVC blackout com laudo antichamas e proteção térmica.",
    specs: [
      { label: "Vão Livre", value: "10m, 15m, 20m, 25m e 30m sem colunas" },
      { label: "Pé Direito", value: "4,00m a 6,00m" },
      { label: "Lona", value: "PVC Blackout antichamas e antimofo" },
      { label: "Norma de Vento", value: "Conformidade ABNT NBR 6123" }
    ],
    features: [
      "100% de área útil interna aproveitável",
      "Fechamentos laterais rígidos ou em lona com portas de emergência",
      "Totalmente compatível com sistemas de climatização industrial"
    ],
    isFeatured: true,
    badge: "Grandes Áreas"
  },
  {
    id: "climatizadores-evaporativos-industriais",
    name: "Climatizadores Evaporativos Ecológicos",
    category: "climatizacao",
    categoryLabel: "Climatização",
    image: "assets/images/original/climatizadores.png",
    fallbackImage: "assets/images/original/bg10.png",
    shortDesc: "Redução de até 12°C na temperatura com renovação contínua de ar fresco.",
    fullDesc: "Solução sustentável e de alto rendimento para climatização de tendas, galpões, áreas gastronômicas e pavilhões. Os climatizadores evaporativos insuflam ar 100% renovado, reduzindo a sensação térmica e eliminando poeira e odores com baixo ruído.",
    specs: [
      { label: "Vazão de Ar", value: "18.000 a 30.000 m³/h por equipamento" },
      { label: "Área de Cobertura", value: "150 a 300 m² por unidade" },
      { label: "Consumo de Energia", value: "Baixo consumo elétrico (monofásico/trifásico)" },
      { label: "Nível de Ruído", value: "Operação silenciosa para palestras" }
    ],
    features: [
      "Ar 100% renovado e umidificado sem molhar o ambiente",
      "Ideal para eventos abertos ou coberturas temporárias",
      "Instalação rápida com abastecimento de água integrado"
    ],
    isFeatured: false,
    badge: "Climatização"
  },
  {
    id: "gerador-silenciado-grupos",
    name: "Grupos Geradores Silenciados (55kVA a 350kVA)",
    category: "energia",
    categoryLabel: "Geradores & Elétrica",
    image: "assets/images/original/geradores-1.png",
    fallbackImage: "assets/images/original/sintetizza-eventos.jpg",
    shortDesc: "Fornecimento de energia contínua e sem oscilações com técnico operador.",
    fullDesc: "Grupos geradores cabinados super silenciados (65 dB a 7m), desenvolvidos especialmente para eventos onde o nível de ruído é crítico. Acompanha cabeamento flexível de potência, quadros de distribuição QTA/QTM e operador técnico de plantão.",
    specs: [
      { label: "Potências Disponíveis", value: "55 kVA, 100 kVA, 150 kVA, 250 kVA e 350 kVA" },
      { label: "Nível de Ruído", value: "Cabinagem Super Silenciada (65 dB)" },
      { label: "Tensões de Saída", value: "127V / 220V / 380V Trifásico" },
      { label: "Segurança", value: "Passa-cabos emborrachados inclusos" }
    ],
    features: [
      "Técnico eletricista / operador presente durante toda a operação",
      "Quadro de transferência automática ou manual (QTA/QTM)",
      "Autonomia de combustível dimensionada para a carga do evento"
    ],
    isFeatured: false,
    badge: "Energia Segura"
  },
  {
    id: "tenda-piramidal-reforcada",
    name: "Tendas Piramidais Galvanizadas (5x5m a 10x10m)",
    category: "coberturas",
    categoryLabel: "Tendas & Galpões",
    image: "assets/images/original/tendas.png",
    fallbackImage: "assets/images/original/galpoes.png",
    shortDesc: "Coberturas modulares resistentes com lona antichamas e proteção UV.",
    fullDesc: "Tendas estruturadas em tubos de aço galvanizado a fogo com encaixes de alta pressão. Cobertura em lona PVC de alta gramatura com tratamento antichamas, blackout e proteção total contra chuva e raios solares.",
    specs: [
      { label: "Modulações", value: "3x3m, 5x5m, 8x8m, 10x10m e acoplamentos" },
      { label: "Estrutura", value: "Aço carbono galvanizado anticorrosão" },
      { label: "Lona", value: "PVC vulcanizado com blackout térmico" },
      { label: "Ancoragem", value: "Estacas de aço / blocos de contrapeso" }
    ],
    features: [
      "Fechamentos laterais translúcidos ou opacos opcionais",
      "Calhas de escoamento pluvial entre módulos acoplados",
      "Montagem rápida e segura por equipe certificada NR-35"
    ],
    isFeatured: false,
    badge: "Coberturas"
  },
  {
    id: "arquibancadas-modulares-seguranca",
    name: "Arquibancadas Modulares & Estruturas para Público",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    image: "assets/images/original/arquibancadas.png",
    fallbackImage: "assets/images/original/principal-novo-2.png",
    shortDesc: "Módulos de arquibancada com degraus antiderrapantes, guarda-corpos e ART.",
    fullDesc: "Arquibancadas tubulares modulares em aço galvanizado para eventos esportivos, desfiles, convenções e shows. Montagem nivelada com corrimãos, guarda-corpos laterais/traseiros e capacidade de carga dimensionada para grandes públicos.",
    specs: [
      { label: "Capacidade", value: "Projetos de 100 a 5.000 assentos" },
      { label: "Piso", value: "Compensado naval antiderrapante 18mm" },
      { label: "Segurança", value: "Guarda-corpos de 1,20m com tela de proteção" },
      { label: "Norma", value: "ABNT NBR 14170 e laudo ART/CREA" }
    ],
    features: [
      "Assentos em madeira tratada ou concha plástica",
      "Corredores de circulação e escadas com iluminação de emergência",
      "Laudo de estabilidade estrutural assinado por engenheiro"
    ],
    isFeatured: true,
    badge: "Alta Capacidade"
  },
  {
    id: "container-camarim-bilheteria",
    name: "Containers Habitáveis (Camarim, Escritório e Bilheteria)",
    category: "stands",
    categoryLabel: "Stands & Mobiliário",
    image: "assets/images/original/container.png",
    fallbackImage: "assets/images/original/stands-para-feiras.png",
    shortDesc: "Módulos termoacústicos climatizados para camarins, produção e bilheterias.",
    fullDesc: "Containers marítimos adaptados com revestimento térmico, ar-condicionado Split, piso vinílico, pontos elétricos e fechadura de segurança. Perfeitos para camarins de artistas, salas de produção técnica e bilheterias com guichês.",
    specs: [
      { label: "Dimensões", value: "6,00m (comp.) x 2,40m (larg.) x 2,60m (alt.)" },
      { label: "Climatização", value: "Ar-condicionado Split 12.000 a 18.000 BTUs" },
      { label: "Revestimento", value: "Isolamento termoacústico e piso vinílico" }
    ],
    features: [
      "Modelos com banheiro privativo e chuveiro",
      "Mobiliário básico incluso (espelho camarim, sofá, frigobar)",
      "Entrega e posicionamento com caminhão Munck próprio"
    ],
    isFeatured: false,
    badge: "Infraestrutura"
  },
  {
    id: "coordenacao-tecnica-art-alvara",
    name: "Engenharia Técnica, Laudo ART & Alvará de Eventos",
    category: "operacao",
    categoryLabel: "Engenharia & Laudos ART",
    image: "assets/images/original/alvara-para-eventos.png",
    fallbackImage: "assets/images/original/sintetizza-eventos.jpg",
    shortDesc: "Responsabilidade técnica com engenheiro registrado no CREA e laudos de segurança.",
    fullDesc: "Assessoria técnica e emissão de Anotação de Responsabilidade Técnica (ART) por engenheiro civil e mecânico devidamente habilitado no CREA-SP. Inclui laudos de estabilidade mecânica, projeto estrutural de palcos e coberturas, e suporte na vistoria do Corpo de Bombeiros (AVCB).",
    specs: [
      { label: "Registro", value: "CREA-SP / Conselho Regional de Engenharia" },
      { label: "Normas Atendidas", value: "NR-10, NR-35, NBR 6123 e Instruções Técnicas CB" },
      { label: "Documentação", value: "ART estrutural, elétrica e memorial de cálculo" }
    ],
    features: [
      "Vistoria presencial e acompanhamento da montagem in loco",
      "Tranquilidade jurídica e conformidade para produtoras e prefeituras",
      "Equipe de montagem equipada com EPIs e treinamentos válidos"
    ],
    isFeatured: false,
    badge: "Engenharia"
  },
  {
    id: "projetores-alta-potencia-telas",
    name: "Projetores Laser & Telas de Alta Definição",
    category: "audiovisual",
    categoryLabel: "Painéis de LED & Vídeo",
    image: "assets/images/original/projetores.jpg",
    fallbackImage: "assets/images/original/locacao-de-painel-de-led.png",
    shortDesc: "Projeção de 5.000 a 10.000 ANSI lúmens para auditórios e conferências.",
    fullDesc: "Equipamentos de projeção corporativa de alto contraste e luminosidade, ideais para auditórios, salas de convenções, workshops e salas plenárias. Telas tensionadas de 100 a 300 polegadas em formato 16:9.",
    specs: [
      { label: "Brilho", value: "5.000 a 10.000 ANSI Lúmens" },
      { label: "Resolução", value: "Full HD / WUXGA Laser" },
      { label: "Telas", value: "100\" a 300\" tensionadas (front e rear projection)" }
    ],
    features: [
      "Passadores de slides com laser pointer e retorno de palco",
      "Cabeamento HDMI e SDI blindado para longas distâncias",
      "Suporte e suporte técnico audiovisual de plantão"
    ],
    isFeatured: false,
    badge: "Projeção"
  },
  {
    id: "servicos-de-eletrica-subestacao",
    name: "Instalações Elétricas & Quadros de Distribuição",
    category: "energia",
    categoryLabel: "Geradores & Elétrica",
    image: "assets/images/original/servicos-de-eletrica.png",
    fallbackImage: "assets/images/original/geradores-1.png",
    shortDesc: "Infraestrutura elétrica provisória, quadros QTA/QTM e cabeamento blindado com NR-10.",
    fullDesc: "Dimensionamento e execução de rede elétrica temporária de baixa e média tensão para praças de alimentação, iluminação de pavilhões, stands e palcos. Instalação de quadros com proteção DR, disjuntores termomagnéticos e cabos flexíveis antichamas.",
    specs: [
      { label: "Norma", value: "NR-10 e ABNT NBR 5410" },
      { label: "Proteção", value: "Quadros com DR e disjuntores blindados" },
      { label: "Cabos", value: "Cabos flexíveis unipolares e multipolares antichamas" },
      { label: "Passa-cabos", value: "Protetores de cabos emborrachados para tráfego pesado" }
    ],
    features: [
      "Laudo de conformidade elétrica e emissão de ART específica",
      "Eletricistas certificados presentes durante todo o evento",
      "Equilíbrio de fases e monitoramento constante de amperagem"
    ],
    isFeatured: false,
    badge: "NR-10"
  },
  {
    id: "mobiliario-mesas-bistros",
    name: "Mobiliário para Eventos & Mesas Bistrô",
    category: "stands",
    categoryLabel: "Stands & Mobiliário",
    image: "assets/images/original/moveis-e-utensilios.png",
    fallbackImage: "assets/images/original/stands-para-feiras.png",
    shortDesc: "Mesas bistrô, banquetas altas, cadeiras estofadas e balcões de atendimento.",
    fullDesc: "Locação de mobiliário corporativo de alta qualidade para estandes, áreas VIP, lounges e plenárias. Peças higienizadas, cromadas e em madeira laqueada para complementar a estética do seu evento.",
    specs: [
      { label: "Tipos", value: "Bistrôs, banquetas, cadeiras e sofás modulares" },
      { label: "Acabamento", value: "Cromado, aço escovado, preto e branco" },
      { label: "Higiene", value: "Embalados e higienizados por unidade" }
    ],
    features: [
      "Entrega e disposição conforme layout da planta",
      "Substituição imediata em caso de avaria",
      "Combinações exclusivas para estandes Octanorm"
    ],
    isFeatured: false,
    badge: "Mobiliário"
  },
  {
    id: "estruturas-eventos-esportivos",
    name: "Pórticos de Largada & Estruturas Esportivas",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    image: "assets/images/original/eventos-esportivos.png",
    fallbackImage: "assets/images/original/principal-novo-2.png",
    shortDesc: "Pórticos em Box Truss Q30 para corridas, pódios e gradis de isolamento.",
    fullDesc: "Infraestrutura completa para circuitos de corrida de rua, ciclismo, campeonatos e arenas esportivas. Inclui pórticos de largada e chegada, pódios de premiação, torres de cronometragem e fechamentos de segurança.",
    specs: [
      { label: "Pórticos", value: "Vãos de 6m a 14m em Box Truss Q30" },
      { label: "Ancoragem", value: "Blocos de concreto e contraventamento" },
      { label: "Comunicação", value: "Suportes para testeiras e lonas de patrocinadores" }
    ],
    features: [
      "Estrutura com laudo de estabilidade mecânica",
      "Montagem ágil na madrugada para liberação de vias públicas",
      "Compatível com fixação de telões de LED e cronômetros digitais"
    ],
    isFeatured: false,
    badge: "Esportivo"
  },
  {
    id: "estruturas-eventos-corporativos",
    name: "Plenárias & Estruturas para Convenções",
    category: "estruturas",
    categoryLabel: "Palcos & Box Truss",
    image: "assets/images/original/eventos-corporativos.png",
    fallbackImage: "assets/images/original/sintetizza-eventos.jpg",
    shortDesc: "Cenografia, fundos de palco, púlpitos e iluminação corporativa para convenções.",
    fullDesc: "Soluções integradas para reuniões estratégicas, lançamentos de produtos, assembleias e convenções de vendas. Unimos palcos discretos com carpete, totens de identificação, backdrops e integração total com áudio e vídeo.",
    specs: [
      { label: "Acabamento", value: "Carpete novo e saias de palco em tecido antichama" },
      { label: "Backdrop", value: "Estruturas Box Truss envelopadas ou madeira" },
      { label: "Púlpitos", value: "Acrílico com passagem oculta de cabos" }
    ],
    features: [
      "Montagem com isolamento acústico e visual executivo",
      "Adequação rigorosa a hotéis e centros de convenções",
      "Equipe com traje executivo para suporte durante o evento"
    ],
    isFeatured: true,
    badge: "Executivo"
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
    (p.specs && p.specs.some(s => s.value.toLowerCase().includes(q) || s.label.toLowerCase().includes(q)))
  );
}


