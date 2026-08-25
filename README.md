# Sintetizza Eventos - Wireframe & Catálogo de Orçamentos

Protótipo wireframe em **Tema Claro (Light Theme)** com a identidade e cor predominante no **Amarelo Sintetizza**, desenvolvido de forma leve, limpa e funcional para a **Sintetizza Eventos**.

---

## Características do Design

1. **Tema Claro & Leve**:
   - Superfícies em branco (`#FFFFFF`) e cinza suave (`#F8FAFC` / `#F1F5F9`), sem blocos escuros pesados.

2. **Amarelo Predominante da Marca**:
   - Destaques, botões principais, badges e seletores em Amarelo institucional (`#F1CF00` / `#FFFBEB`), com alto contraste e leitura confortável.

3. **Wireframe com Espaços Demarcados**:
   - Áreas de imagens com blocos neutros vazios (`[ Espaço para Imagem ]`).

4. **Zero Emojis & Sem Desfoques (No Blur)**:
   - Interface limpa, com alta nitidez e carregamento instantâneo.

5. **Funcionalidades 100% Preservadas**:
   - Catálogo com busca e filtros em tempo real;
   - Carrinho de orçamento integrado com persistência no `localStorage`;
   - Ficha técnica com seletor de quantidade e itens relacionados;
   - Formulário de orçamento com envio direto para WhatsApp e e-mail;
   - Menu responsivo com gaveta mobile.

---

## Estrutura de Arquivos

```text
Site_sintetizza/
├── css/
│   ├── variables.css              # Tokens de design, tema claro e amarelo predominante
│   ├── global.css                 # Reset, grid, tipografia, badges e botões
│   ├── components.css             # Header, Footer, Cards, Botão Flutuante e Placeholders
│   └── pages.css                  # Estilos específicos de cada página (Banner, Orçamento, Contato)
├── js/
│   ├── data.js                    # Dados dos produtos, categorias e configurações
│   ├── cart.js                    # Gerenciador de itens de orçamento (localStorage + eventos)
│   ├── components.js              # Componentes reutilizáveis (Header, Footer, Cards)
│   ├── quote.js                   # Lógica de validação e formatação de proposta
│   └── main.js                    # Roteamento, filtros em tempo real e inicialização
├── index.html                     # Página Inicial
├── quem-somos.html                # Quem Somos
├── produtos.html                  # Catálogo de Soluções com busca e filtros
├── produto-detalhe.html           # Detalhes técnicos do equipamento
├── orcamento.html                 # Formulário e Construtor de Orçamento
├── contato.html                   # Fale Conosco
└── README.md                      # Documentação
```

---

## Como Testar Localmente

Abra qualquer arquivo HTML (`index.html`) diretamente no navegador ou execute um servidor local:

```bash
# Com Node.js:
npx serve .

# Com Python:
python -m http.server 8080
```

Acesse no navegador: `http://localhost:8080`
