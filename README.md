# 🌐 Sintetizza Eventos - Website Institucional & Catálogo de Orçamentos

Website institucional de alta conversão desenvolvido sob medida para a **Sintetizza Eventos**, clonando o design system, identidade visual (amarelo `#F1CF00`, dark surface `#111318`) e regras de engenharia e orçamentação do aplicativo mobile.

---

## 📁 Estrutura de Arquivos

```text
site/
├── assets/
│   └── images/
│       ├── logo.png               # Logo oficial da Sintetizza
│       └── icon.png               # Ícone do app
├── css/
│   ├── variables.css              # Tokens de design, cores, tipografia e raios
│   ├── global.css                 # Reset, grid, tipografia e classes utilitárias
│   ├── components.css             # Header, Footer, Cards, Badges, Botão Flutuante e Modais
│   └── pages.css                  # Estilos específicos de cada uma das 5 páginas
├── js/
│   ├── data.js                    # Catálogo de produtos, categorias e configurações da empresa
│   ├── cart.js                    # Gerenciador de itens de orçamento (localStorage + reatividade)
│   ├── components.js              # Fábrica de componentes DOM reutilizáveis
│   ├── quote.js                   # Lógica de validação, formatação de proposta e integrações
│   └── main.js                    # Roteamento, filtros em tempo real e inicialização
├── index.html                     # Página Inicial (Hero, Destaques, Processo, Diferenciais, CTA)
├── quem-somos.html                # Página Institucional (História, ART/CREA, Normas NR-10/NR-35)
├── produtos.html                  # Catálogo de Soluções com busca e filtros por categoria
├── produto-detalhe.html           # Visualização técnica detalhada do produto e especificações
├── orcamento.html                 # Formulário e Construtor de Solicitação de Orçamento
├── contato.html                   # Fale Conosco (Canais diretos, WhatsApp e formulário)
└── README.md                      # Guia completo de configuração e publicação
```

---

## 🚀 Páginas & Funcionalidades Inclusas

1. **Home (`index.html`)**:
   - Banner principal com chamada para ação ("Solicite um Orçamento Rápido");
   - Contadores de credibilidade (+500 eventos, 100% ART, 24h plantão);
   - Grid com soluções em destaque;
   - Bloco "Por Que a Sintetizza" e fluxo em 4 passos de contratação.

2. **Quem Somos (`quem-somos.html`)**:
   - Missão, visão e valores da empresa;
   - Informações sobre normas de segurança (NR-10, NR-35, ABNT, laudos antichamas);
   - Infraestrutura e frota logística própria.

3. **Produtos & Soluções (`produtos.html`)**:
   - Catálogo organizado por categorias (*Estruturas & Palcos, Tendas & Coberturas, Som Line Array, Iluminação, Painéis de LED, Geradores, Equipe*);
   - Barra de busca em tempo real e filtros em abas com contagem de produtos;
   - Botão dinâmico "+ Adicionar" / "✓ No Orçamento" e botão para ver detalhes.

4. **Visualização Detalhada do Produto (`produto-detalhe.html`)**:
   - Tabela com especificações técnicas e de engenharia;
   - Lista do que está incluso (montagem, operador, ART);
   - Seletor de quantidade e produtos relacionados.

5. **Formulário de Solicitação de Orçamento (`orcamento.html`)**:
   - Resumo em tempo real dos itens selecionados com ajuste de quantidade e remoção;
   - Opção para adicionar "Item Personalizado";
   - Formulário com dados do cliente (Nome, Empresa, E-mail, WhatsApp) e do evento (Tipo, Data, Cidade, Público, Requisitos técnicos).

6. **Integração do Pedido de Orçamento**:
   - **WhatsApp**: Gera automaticamente uma mensagem completa e formatada com a lista de itens e dados do cliente para atendimento imediato;
   - **E-mail Corporativo**: Prepara mensagem estruturada pronta para envio ao e-mail comercial configurado (`orcamentos@sintetizzaeventos.com.br`).

7. **Página Fale Conosco (`contato.html`)**:
   - Cards com contatos diretos (WhatsApp, e-mail comercial, endereço, plantão 24h);
   - Formulário de mensagem rápida integrado.

8. **Layout 100% Responsivo**:
   - Otimizado para Computadores, Tablets e Celulares;
   - Menu lateral retrátil (drawer) no mobile;
   - Botão flutuante estratégico de conversão com contador no rodapé.

---

## 🛠️ Como Testar Localmente

Para rodar o site no seu computador:

### Opção 1: Abrir direto no navegador
Basta dar duplo clique em `site/index.html` ou abrir no Chrome/Firefox/Edge.

### Opção 2: Usar um servidor local (Recomendado)
Se tiver Node.js instalado:
```bash
# Na raiz do projeto
npx serve site
# ou usando Python:
cd site && python3 -m http.server 8080
```
Acesse no navegador: `http://localhost:8080` ou `http://localhost:3000`.

---

## 🌐 Como Publicar / Hospedar o Site

Como o site é construído em HTML, CSS e JavaScript estático com manipulação de DOM nativa, ele é extremamente leve, rápido e pode ser hospedado gratuitamente ou em qualquer servidor:

### 1. Hospedagem Gratuita na Vercel
1. Instale a Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto:
   ```bash
   vercel site
   ```
3. O site estará online com HTTPS gratuito em segundos.

### 2. Hospedagem no Netlify ou GitHub Pages
- **Netlify**: Basta arrastar a pasta `site` para o painel do [Netlify Drop](https://app.netlify.com/drop).
- **GitHub Pages**: Suba a pasta `site` no repositório e ative o GitHub Pages nas configurações.

### 3. Hospedagem Tradicional (Hostinger, Locaweb, cPanel, Apache)
1. Acesse o Gerenciador de Arquivos ou FTP (FileZilla) da sua hospedagem;
2. Envie o conteúdo de dentro da pasta `site/` para dentro da pasta `public_html/` do seu servidor;
3. O site funcionará imediatamente com seu domínio (ex: `www.sintetizzaeventos.com.br`).

---

## ⚙️ Como Personalizar Informações da Empresa

Abra o arquivo `site/js/data.js` para atualizar rapidamente dados como:
- Número de WhatsApp (`whatsappNumber`);
- E-mail de orçamentos (`emailQuotes`);
- Telefone e endereço;
- Adicionar ou editar novos produtos e fotos.
