/**
 * =============================================================================
 * SINTETIZZA - BASE DE DADOS OFICIAL, PROVAS SOCIAIS & CONFIGURAÇÃO SEO
 * =============================================================================
 */

const SINTETIZZA_CONFIG = {
  companyName: "Sintetizza Eventos",
  companyShortName: "Sintetizza",
  legalName: "Sintetizza Locações e Infraestrutura para Eventos Ltda",
  cnpj: "54.891.423/0001-90",
  tagline: "Locação de Palcos, Tendas, Som, Iluminação, Painéis de LED e Climatização",
  email: "sintetizzalocacoes@gmail.com",
  emailQuotes: "sintetizzalocacoes@gmail.com",
  phone: "(15) 99733-9422",
  phoneRaw: "+5515997339422",
  whatsappNumber: "5515997339422",
  whatsappDisplay: "(15) 99733-9422",
  whatsappDefaultMsg: "Olá! Gostaria de solicitar um orçamento para o meu evento com a Sintetizza.",
  address: "Sorocaba e Região Metropolitana - SP",
  serviceHours: "Seg a Sex: 08h às 18h | Plantão Operacional 24h",
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
    image: "assets/images/som-e-luz.png",
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
    name: "Climatizadores Evaporativos",
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
    name: "Gerador de Energia Silenciado",
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
    badge: "Eventos Grandes"
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
    name: "Coordenação Técnica & Laudo ART",
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
