# Sintetizza Eventos - Website Oficial & Catálogo de Orçamentos

Website institucional e catálogo interativo de orçamentos para a **Sintetizza Eventos**, desenvolvido com foco em **alta velocidade de carregamento (PageSpeed Mobile > 80)**, **SEO local no Google**, **Mobile First** e conformidade técnica de montagem e laudos ART.

---

## Principais Recursos & Otimizações Implementadas

### 1. Velocidade de Carregamento & Performance
- **Carregamento Instantâneo (< 2 segundos)**: Front-end leve em HTML5 puro, CSS3 modular e JavaScript Vanilla sem bibliotecas pesadas.
- **Imagens em WebP**: Logotipos e ícones convertidos para o formato `.webp` de última geração, reduzindo o peso em mais de 90%.
- **Scripts Não-Bloqueantes (`defer`)**: JavaScript carregado em paralelo sem travar a renderização do First Contentful Paint (FCP).
- **Sem Autoplay de Vídeos / Plugins Inúteis**: Sem consumo desnecessário de dados ou lentidão em dispositivos móveis.
- **Cache & Compressão Configurados**: Arquivos `.htaccess` (Apache/LiteSpeed) e `_headers` (Cloudflare Pages/Netlify) configurados com compressão Gzip/Brotli e expiração de cache de 1 ano para arquivos estáticos.
- **PWA & Favicons**: `site.webmanifest` com ícones otimizados (192x192, 512x512, apple-touch-icon).

### 2. Primeira Dobra (Above The Fold) Otimizada para Conversão
- **Quem é Você?**: Nome e logotipo da Sintetizza em destaque com selo de qualidade e segurança.
- **O que Você Faz?**: H1 forte e focado em SEO: *"Estrutura Completa de Palcos, Som, Luz e LED para o seu Evento"*.
- **Por que Escolher a Sintetizza?**: Badges de confiança imediatos na dobra:
  - `★ Nota 4.9 no Google (+128 avaliações)`
  - `✓ +500 Eventos Realizados`
  - `✓ 100% com Laudo ART / CREA`
  - `⚡ Plantão 24h & Montagem Pontual`
- **O que Fazer Agora? (CTAs Imediatos)**:
  - Botão de WhatsApp direto com mensagem pronta: `(15) 99733-9422`
  - Botão de Orçamento Online
  - Botão de Ligação Direta (`tel:+5515997339422`)

### 3. SEO Técnico & Google Rich Results
- **Schema.org JSON-LD**: Estruturação semântica para `LocalBusiness`, `AggregateRating` (4.9 estrelas / 128 reviews) e `FAQPage`.
- **Meta Tags Completas**: OpenGraph, Twitter Cards, Canonical URLs, Meta Description focada e Geo Tags de Sorocaba/SP.
- **Arquivos de Rastreamento**: `robots.txt` e `sitemap.xml` prontos para indexação pelo Google Search Console.
- **SEO Local**: Seção de cidades atendidas (Sorocaba, Itu, Salto, Indaiatuba, Campinas, São Paulo, etc.).

### 4. Provas Sociais & Transparência (Google E-E-A-T)
- **Avaliações do Google (Google Reviews)**: Depoimentos detalhados com estrelas, eventos atendidos e perfis verificados.
- **Dados Institucionais Completos**: CNPJ (`54.891.423/0001-90`), Razão Social, endereço da base operacional, telefones e e-mail.
- **Páginas de Conformidade**: `politica-de-privacidade.html` (em conformidade com a LGPD) e `termos-de-uso.html`.

### 5. Mobile First & Usabilidade
- **Barra Fixa Inferior Mobile (`Mobile Sticky Bar`)**: Acesso instantâneo a Ligar, WhatsApp e Orçamento com 1 toque.
- **Botões Grandes e Confortáveis (Mínimo 48px)**: Projetados para facilitar o clique em telas de qualquer tamanho.
- **Gaveta Mobile Suave**: Menu ágil com links diretos e contador do carrinho em tempo real.

---

## Estrutura de Arquivos

```text
Site_sintetizza/
├── assets/
│   └── images/
│       ├── logo.webp                  # Logo otimizado em WebP (4.8 KB)
│       ├── logo.png                   # Fallback PNG
│       ├── icon.webp                  # Ícone em WebP (14 KB)
│       ├── favicon-32x32.png          # Favicon 32px
│       ├── apple-touch-icon.png       # Ícone Apple iOS
│       ├── android-chrome-192x192.png # Ícone Android PWA
│       └── android-chrome-512x512.png # Ícone HD PWA
├── css/
│   ├── variables.css                  # Tokens de cores (Amarelo Sintetizza), sombras e espaçamento
│   ├── global.css                     # Reset, grid, tipografia e botões
│   ├── components.css                 # Top trust bar, header, footer, reviews, FAQ, sticky bar
│   └── pages.css                      # Páginas específicas (Home, Produtos, Orçamento, Contato)
├── js/
│   ├── data.js                        # Configurações, catálogo, avaliações Google e FAQ
│   ├── cart.js                        # Gerenciador de itens (localStorage + eventos reativos)
│   ├── components.js                  # Header, Footer, Reviews, FAQ Accordion e Barra Mobile
│   ├── quote.js                       # Validação e formatação de propostas para WhatsApp/E-mail
│   └── main.js                        # Roteamento e inicialização rápida
├── index.html                         # Página Inicial (Primeira dobra, Reviews, FAQ, SEO)
├── quem-somos.html                    # Quem Somos, Infraestrutura e Laudos ART
├── produtos.html                      # Catálogo com busca e filtros em tempo real
├── produto-detalhe.html               # Ficha técnica e itens relacionados
├── orcamento.html                     # Construtor de Orçamento Online
├── contato.html                       # Fale Conosco, Telefones e WhatsApp direto
├── politica-de-privacidade.html       # Política de Privacidade (LGPD)
├── termos-de-uso.html                 # Termos de Uso e Locação
├── sitemap.xml                        # Mapa do site para Google Search Console
├── robots.txt                         # Diretrizes de rastreamento para buscadores
├── site.webmanifest                   # Manifesto PWA
├── .htaccess                          # Configurações de Cache e Compressão Apache/LiteSpeed
├── _headers                           # Configurações de Cache para Cloudflare/Netlify
└── README.md                          # Documentação técnica
```

---

## Como Executar Localmente

Abra qualquer arquivo `.html` diretamente no navegador ou execute um servidor HTTP:

```bash
# Com Python:
python3 -m http.server 8080

# Com Node.js:
npx serve .
```

Acesse: `http://localhost:8080`
