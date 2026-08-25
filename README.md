# Sintetizza Eventos - Website Corporativo & Catálogo Interativo

Website profissional, corporativo e sério da **Sintetizza Eventos**, desenvolvido com base no ecossistema e identidade visual oficial da marca ([sintetizza.com.br](http://www.sintetizza.com.br/)).

---

## Destaques do Novo Design

1. **Identidade Visual Corporativa & Séria**:
   - Paleta executiva em **Obsidian Slate** (`#0B0F19`, `#0F172A`) com toques de **Ouro Sintetizza** (`#F59E0B`), transmitindo autoridade, sofisticação e seriedade.
   - Tipografia moderna e legível (**Plus Jakarta Sans**) com hierarquia visual clara.

2. **Fotografia e Ativos Oficiais**:
   - Integração completa de imagens de alta definição de palcos Box Truss, painéis de LED P3.9, sistemas de som Line Array, climatizadores, geradores silenciados, tendas e galpões.
   - Logotipo oficial vetorizado/renderizado com alta fidelidade.

3. **Arquitetura de Conversão & Orçamento Técnico**:
   - **Dock Flutuante de Ações**: Acesso rápido com 1 clique ao WhatsApp comercial e ao carrinho de orçamento em qualquer página e dispositivo.
   - **Carrinho Interativo Reativo**: Persistência no `localStorage` com controle de quantidade (+ / -) e thumbnails dos produtos.
   - **Geração Multicanal**: Envio de propostas formatadas automaticamente para **WhatsApp** ou **E-mail**.

4. **Selo de Engenharia & Conformidade Legal**:
   - Destaque para homologações **CREA-SP / ART**, normas de segurança **NR-10** (Elétrica) e **NR-35** (Trabalho em Altura).

---

## Estrutura de Arquivos

```text
sintetizza_site/
├── assets/
│   └── images/
│       ├── logo.png               # Logo oficial da Sintetizza
│       ├── favicon.png            # Favicon oficial
│       └── original/              # Fotos dos equipamentos e eventos
├── css/
│   ├── variables.css              # Tokens de design corporativo (Slate Obsidian & Gold)
│   ├── global.css                 # Reset, grid, tipografia, badges e botões
│   ├── components.css             # Header glassmorphic, Footer, Cards, Dock Flutuante
│   └── pages.css                  # Hero corporativo, fichas técnicas, tabelas e orçamentos
├── js/
│   ├── data.js                    # Base de dados oficial dos produtos, fotos e specs
│   ├── cart.js                    # Gerenciador de itens de orçamento (localStorage + eventos)
│   ├── components.js              # Componentes DOM (Header com logo, Footer, Cards com fotos)
│   ├── quote.js                   # Lógica de validação e formatação de propostas
│   └── main.js                    # Roteamento, busca em tempo real e spotlight dinâmico
├── index.html                     # Página Inicial corporativa
├── quem-somos.html                # Quem Somos (história, pilares e conformidade ART)
├── produtos.html                  # Catálogo de Soluções com busca e filtros em tempo real
├── produto-detalhe.html           # Ficha técnica detalhada com checklist e imagens
├── orcamento.html                 # Formulário e Construtor de Orçamento
├── contato.html                   # Fale Conosco e canais diretos de atendimento
└── README.md                      # Documentação
```

---

## Como Executar Localmente

Abra qualquer arquivo HTML no navegador ou inicialize um servidor HTTP:

```bash
# Com Python:
python3 -m http.server 8080

# Com Node.js:
npx serve .
```

Acesse no navegador: `http://localhost:8080`

