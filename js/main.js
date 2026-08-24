/**
 * Sintetizza Eventos - Script Principal e Inicializador das Páginas
 */

document.addEventListener("DOMContentLoaded", () => {
  // Identifica a página atual
  const path = window.location.pathname;
  let activePage = "home";

  if (path.includes("quem-somos")) activePage = "quem-somos";
  else if (path.includes("produtos") || path.includes("produto-detalhe")) activePage = "produtos";
  else if (path.includes("orcamento")) activePage = "orcamento";
  else if (path.includes("contato")) activePage = "contato";

  // Injeta Header e Footer
  renderHeader(activePage);
  renderFooter();
  renderFloatingQuoteButton();

  // Inicializadores específicos de cada página
  initHomePage();
  initProductsPage();
  initProductDetailPage();
  initContactPage();
});

/* -------------------------------------------------------------
 * 1. INICIALIZAÇÃO DA PÁGINA INICIAL (HOME)
 * ------------------------------------------------------------- */
function initHomePage() {
  const featuredGrid = document.getElementById("home-featured-products-grid");
  if (!featuredGrid) return;

  const featured = PRODUCTS.filter(p => p.isFeatured).slice(0, 6);
  featuredGrid.innerHTML = featured.map(p => createProductCardHTML(p)).join("");
}

/* -------------------------------------------------------------
 * 2. INICIALIZAÇÃO DA PÁGINA DE PRODUTOS / SOLUÇÕES
 * ------------------------------------------------------------- */
function initProductsPage() {
  const catalogGrid = document.getElementById("catalog-products-grid");
  const filterTabsContainer = document.getElementById("category-filter-tabs");
  const searchInput = document.getElementById("catalog-search-input");
  
  if (!catalogGrid) return;

  // Lê categoria inicial da URL (ex: produtos.html?cat=estruturas)
  const urlParams = new URLSearchParams(window.location.search);
  let currentCategory = urlParams.get("cat") || "all";
  let currentSearch = "";

  // Renderiza pills de categorias
  if (filterTabsContainer) {
    filterTabsContainer.innerHTML = CATEGORIES.map(cat => {
      const count = cat.id === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length;
      return `
        <button class="filter-pill ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
          <span>${cat.icon}</span>
          <span>${cat.name}</span>
          <span class="filter-pill-count">${count}</span>
        </button>
      `;
    }).join("");

    // Adiciona listener para troca de categoria
    filterTabsContainer.addEventListener("click", (e) => {
      const pill = e.target.closest(".filter-pill");
      if (!pill) return;

      filterTabsContainer.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      currentCategory = pill.dataset.category;
      applyCatalogFilters();
    });
  }

  // Listener para busca em tempo real
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      applyCatalogFilters();
    });
  }

  // Função para filtrar e renderizar o grid
  function applyCatalogFilters() {
    let list = PRODUCTS;

    if (currentCategory && currentCategory !== "all") {
      list = list.filter(p => p.category === currentCategory);
    }

    if (currentSearch && currentSearch.trim() !== "") {
      const q = currentSearch.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        (p.features && p.features.some(f => f.toLowerCase().includes(q)))
      );
    }

    const countLabel = document.getElementById("catalog-results-count");
    if (countLabel) {
      countLabel.textContent = `Mostrando ${list.length} solução(ões)`;
    }

    if (list.length === 0) {
      catalogGrid.innerHTML = `
        <div class="empty-catalog-state">
          <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
          <h3>Nenhum produto encontrado</h3>
          <p style="color: var(--color-text-secondary); margin-bottom: 20px;">Tente buscar por outro termo ou selecione outra categoria.</p>
          <a href="orcamento.html" class="btn btn-outline">Solicitar Estrutura Sob Medida</a>
        </div>
      `;
      return;
    }

    catalogGrid.innerHTML = list.map(p => createProductCardHTML(p)).join("");
  }

  // Execução inicial
  applyCatalogFilters();
}

/* -------------------------------------------------------------
 * 3. INICIALIZAÇÃO DA PÁGINA DE DETALHE DO PRODUTO
 * ------------------------------------------------------------- */
function initProductDetailPage() {
  const detailContainer = document.getElementById("product-detail-root");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const product = getProductById(productId) || PRODUCTS[0];
  if (!product) return;

  // Atualiza título da página
  document.title = `${product.name} | Sintetizza Eventos`;

  // Renderiza breadcrumb
  const breadcrumbProduct = document.getElementById("detail-breadcrumb-product");
  if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;

  const isAdded = QuoteCart.hasItem(product.id);

  detailContainer.innerHTML = `
    <div class="product-detail-grid">
      <!-- Galeria / Imagem Principal -->
      <div class="product-gallery">
        <img src="${product.image}" alt="${product.name}" class="product-gallery-main">
      </div>

      <!-- Informações Detalhadas & Ações -->
      <div class="product-detail-info">
        <div>
          <span class="badge badge-brand" style="margin-bottom: 12px;">${product.categoryLabel}</span>
          <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 12px;">${product.name}</h1>
          <p style="font-size: 1.1rem; color: var(--color-text-secondary); line-height: 1.6;">
            ${product.fullDesc || product.shortDesc}
          </p>
        </div>

        <!-- Especificações Técnicas -->
        <div>
          <h3 style="font-size: 1.2rem; margin-bottom: 12px; border-bottom: 2px solid var(--color-brand-primary); display: inline-block; padding-bottom: 4px;">
            Especificações de Engenharia
          </h3>
          <table class="detail-specs-table">
            <tbody>
              ${product.specs.map(s => `
                <tr>
                  <td>${s.label}</td>
                  <td><strong>${s.value}</strong></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <!-- Diferenciais Inclusos -->
        <div>
          <h4 style="font-size: 1.1rem; margin-bottom: 10px;">O que está incluso nesta solução:</h4>
          <ul style="display: flex; flex-direction: column; gap: 8px;">
            ${product.features.map(f => `
              <li style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem;">
                <span style="color: var(--color-success); font-weight: bold;">✔</span>
                <span>${f}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Card de Adição ao Orçamento -->
        <div class="quote-action-box">
          <div class="flex items-center justify-between">
            <span style="font-weight: 700; color: var(--color-text-primary);">Configurar Quantidade:</span>
            <div class="quote-qty-controls">
              <button type="button" class="qty-btn" id="detail-qty-minus">-</button>
              <span class="qty-display" id="detail-qty-value">1</span>
              <button type="button" class="qty-btn" id="detail-qty-plus">+</button>
            </div>
          </div>

          <div class="flex flex-col gap-sm">
            <button class="btn btn-primary btn-block btn-lg" id="detail-btn-add-quote">
              ${isAdded ? '✓ Adicionar Mais ao Orçamento' : '+ Adicionar ao Meu Orçamento'}
            </button>
            <a href="orcamento.html" class="btn btn-outline btn-block">
              Ver Minha Lista de Orçamento
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Lógica do controle de quantidade do detalhe
  let currentQty = 1;
  const qtyDisplay = document.getElementById("detail-qty-value");
  const btnMinus = document.getElementById("detail-qty-minus");
  const btnPlus = document.getElementById("detail-qty-plus");
  const btnAdd = document.getElementById("detail-btn-add-quote");

  if (btnMinus && btnPlus && qtyDisplay && btnAdd) {
    btnMinus.addEventListener("click", () => {
      if (currentQty > 1) {
        currentQty--;
        qtyDisplay.textContent = currentQty;
      }
    });

    btnPlus.addEventListener("click", () => {
      currentQty++;
      qtyDisplay.textContent = currentQty;
    });

    btnAdd.addEventListener("click", () => {
      QuoteCart.addItem(product.id, currentQty);
      showToast(`+${currentQty}x "${product.name}" adicionado ao seu orçamento!`, "success");
      btnAdd.innerHTML = "✓ Adicionado! Adicionar Mais";
    });
  }

  // Renderiza produtos relacionados
  const relatedGrid = document.getElementById("related-products-grid");
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
    if (related.length === 0) {
      relatedGrid.innerHTML = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map(p => createProductCardHTML(p)).join("");
    } else {
      relatedGrid.innerHTML = related.map(p => createProductCardHTML(p)).join("");
    }
  }
}

/* -------------------------------------------------------------
 * 4. INICIALIZAÇÃO DA PÁGINA DE CONTATO
 * ------------------------------------------------------------- */
function initContactPage() {
  const form = document.getElementById("contact-message-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const whatsappText = encodeURIComponent(
      `Olá Sintetizza Eventos!\n\n` +
      `Me chamo *${name}*\n` +
      `E-mail: ${email}\n` +
      `Telefone: ${phone || 'Não informado'}\n\n` +
      `Mensagem:\n${message}`
    );

    const waUrl = `https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${whatsappText}`;
    
    // Abre WhatsApp ou exibe mensagem de sucesso
    window.open(waUrl, "_blank");
    showToast("Mensagem pronta para envio no WhatsApp!", "success");
    form.reset();
  });
}
