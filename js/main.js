/**
 * =============================================================================
 * SINTETIZZA - SCRIPT PRINCIPAL (PROFISSIONAL & CORPORATIVO)
 * =============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  let activePage = "home";

  if (path.includes("quem-somos")) activePage = "quem-somos";
  else if (path.includes("produtos") || path.includes("produto-detalhe")) activePage = "produtos";
  else if (path.includes("orcamento")) activePage = "orcamento";
  else if (path.includes("contato")) activePage = "contato";

  renderHeader(activePage);
  renderFooter();
  renderFloatingQuoteButton();

  initHomePage();
  initProductsPage();
  initProductDetailPage();
  initContactPage();
});

// 1. Página Inicial (Home)
function initHomePage() {
  const featuredGrid = document.getElementById("home-featured-products-grid");
  if (featuredGrid) {
    const featured = PRODUCTS.filter(p => p.isFeatured).slice(0, 6);
    featuredGrid.innerHTML = featured.map(p => createProductCardHTML(p)).join("");
  }

  // Hero Spotlight Card Dinâmico
  const heroSpotlight = document.getElementById("hero-spotlight-container");
  if (heroSpotlight) {
    const spotlightItem = PRODUCTS[0]; // Box Truss Palco ou Painel de LED
    const isAdded = QuoteCart.hasItem(spotlightItem.id);
    const imgSrc = spotlightItem.image || "assets/images/original/principal-novo-2.png";

    heroSpotlight.innerHTML = `
      <div style="margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
        <span class="badge badge-brand">Equipamento em Destaque</span>
        <span style="color: var(--color-slate-400); font-size: 0.85rem; font-weight: 600;">Sorocaba e Região SP</span>
      </div>
      <div class="hero-card-image-wrap">
        <img src="${imgSrc}" alt="${spotlightItem.name}" loading="lazy">
      </div>
      <h3 style="color: var(--color-white); font-size: 1.2rem; margin-bottom: 6px; font-weight: 800;">
        ${spotlightItem.name}
      </h3>
      <p style="color: var(--color-slate-300); font-size: 0.88rem; margin-bottom: 16px; line-height: 1.5;">
        ${spotlightItem.shortDesc}
      </p>
      <div class="flex gap-sm">
        <button class="btn btn-primary btn-sm flex-grow ${isAdded ? 'added' : ''}" onclick="handleToggleQuote('${spotlightItem.id}', this)">
          ${isAdded ? '✓ No Orçamento' : '+ Adicionar ao Orçamento'}
        </button>
        <a href="produto-detalhe.html?id=${spotlightItem.id}" class="btn btn-outline-white btn-sm">
          Ver Ficha
        </a>
      </div>
    `;
  }
}

// 2. Catálogo de Produtos
function initProductsPage() {
  const catalogGrid = document.getElementById("catalog-products-grid");
  const filterTabsContainer = document.getElementById("category-filter-tabs");
  const searchInput = document.getElementById("catalog-search-input");
  
  if (!catalogGrid) return;

  const urlParams = new URLSearchParams(window.location.search);
  let currentCategory = urlParams.get("cat") || "all";
  let currentSearch = "";

  if (filterTabsContainer) {
    filterTabsContainer.innerHTML = CATEGORIES.map(cat => {
      const count = cat.id === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length;
      return `
        <button class="filter-pill ${cat.id === currentCategory ? 'active' : ''}" data-category="${cat.id}">
          <span>${cat.name}</span>
          <span class="filter-pill-count">${count}</span>
        </button>
      `;
    }).join("");

    filterTabsContainer.addEventListener("click", (e) => {
      const pill = e.target.closest(".filter-pill");
      if (!pill) return;

      filterTabsContainer.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      currentCategory = pill.dataset.category;
      applyCatalogFilters();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      applyCatalogFilters();
    });
  }

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
        (p.features && p.features.some(f => f.toLowerCase().includes(q))) ||
        (p.specs && p.specs.some(s => s.value.toLowerCase().includes(q)))
      );
    }

    const countLabel = document.getElementById("catalog-results-count");
    if (countLabel) {
      countLabel.textContent = `${list.length} equipamento(s) disponível(is)`;
    }

    if (list.length === 0) {
      catalogGrid.innerHTML = `
        <div class="empty-catalog-state">
          <h3 style="font-size: 1.3rem; margin-bottom: 8px;">Nenhum equipamento encontrado</h3>
          <p style="color: var(--color-slate-600); margin-bottom: 20px;">
            Não encontrou o que procura? Montamos projetos personalizados sob medida.
          </p>
          <a href="orcamento.html" class="btn btn-primary">Solicitar Orçamento Personalizado</a>
        </div>
      `;
      return;
    }

    catalogGrid.innerHTML = list.map(p => createProductCardHTML(p)).join("");
  }

  applyCatalogFilters();
}

// 3. Ficha Técnica / Detalhe do Produto
function initProductDetailPage() {
  const detailContainer = document.getElementById("product-detail-root");
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const product = getProductById(productId) || PRODUCTS[0];
  if (!product) return;

  document.title = `${product.name} | Sintetizza Eventos`;

  const breadcrumbProduct = document.getElementById("detail-breadcrumb-product");
  if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;

  const isAdded = QuoteCart.hasItem(product.id);
  const imgSrc = product.image || product.fallbackImage || "assets/images/original/principal-novo-2.png";
  const fallbackSrc = product.fallbackImage || "assets/images/original/principal-novo-2.png";

  detailContainer.innerHTML = `
    <div class="product-detail-grid">
      
      <!-- Galeria com Imagem Real -->
      <div class="product-gallery">
        <img src="${imgSrc}" 
             alt="${product.name}" 
             id="detail-main-image"
             onerror="if (this.src !== '${fallbackSrc}') { this.src = '${fallbackSrc}'; }">
        <span class="badge badge-brand" style="position: absolute; top: 16px; left: 16px;">${product.categoryLabel}</span>
      </div>

      <!-- Informações do Produto -->
      <div class="product-detail-info">
        <div>
          <span class="section-subtitle">${product.categoryLabel}</span>
          <h1 style="font-size: clamp(1.8rem, 3vw, 2.4rem); margin-bottom: 12px; color: var(--color-slate-950);">${product.name}</h1>
          <p style="font-size: 1.05rem; color: var(--color-slate-600); line-height: 1.65;">
            ${product.fullDesc || product.shortDesc}
          </p>
        </div>

        <!-- Especificações -->
        <div>
          <h3 style="font-size: 1.15rem; margin-bottom: 12px; color: var(--color-slate-950); border-bottom: 2px solid var(--color-brand); display: inline-block; padding-bottom: 4px;">
            Especificações Técnicas
          </h3>
          <table class="detail-specs-table">
            <tbody>
              ${product.specs.map(s => `
                <tr>
                  <td>${s.label}</td>
                  <td>${s.value}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <!-- O que está incluso -->
        <div style="background: var(--color-slate-50); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--color-border-light);">
          <h4 style="font-size: 1rem; margin-bottom: 10px; color: var(--color-slate-950);">Itens Inclusos na Locação:</h4>
          <ul style="display: flex; flex-direction: column; gap: 8px;">
            ${product.features.map(f => `
              <li style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: var(--color-slate-700);">
                <span style="color: var(--color-brand); font-weight: 800; font-size: 1.1rem;">✓</span>
                <span>${f}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Ação de Orçamento -->
        <div class="quote-action-box">
          <div class="flex items-center justify-between">
            <span style="font-weight: 800; color: var(--color-slate-950); font-size: 1rem;">Quantidade Necessária:</span>
            <div class="quote-qty-controls">
              <button type="button" class="qty-btn" id="detail-qty-minus" aria-label="Diminuir">-</button>
              <span class="qty-display" id="detail-qty-value">1</span>
              <button type="button" class="qty-btn" id="detail-qty-plus" aria-label="Aumentar">+</button>
            </div>
          </div>

          <div class="flex flex-col gap-sm">
            <button class="btn btn-primary btn-block btn-lg" id="detail-btn-add-quote">
              ${isAdded ? '✓ No Orçamento (Adicionar Mais)' : '+ Adicionar à Lista de Orçamento'}
            </button>
            
            <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=Ol%C3%A1%2C+gostaria+de+consultar+a+disponibilidade+de%3A+${encodeURIComponent(product.name)}" target="_blank" class="btn btn-whatsapp btn-block">
              Tirar Dúvida no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  `;

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
      showToast(`+${currentQty}x "${product.name}" adicionado ao orçamento!`, "success");
      btnAdd.innerHTML = "✓ Adicionado! Adicionar Mais";
    });
  }

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

// 4. Página de Contato
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
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    const whatsappText = encodeURIComponent(
      `*MENSAGEM DE CONTATO - SITE SINTETIZZA*\n\n` +
      `*Nome:* ${name}\n` +
      `*E-mail:* ${email}\n` +
      `*Telefone:* ${phone || 'Não informado'}\n\n` +
      `*Mensagem:*\n${message}`
    );

    const waUrl = `https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${whatsappText}`;
    window.open(waUrl, "_blank");
    showToast("Mensagem aberta no WhatsApp!", "success");
    form.reset();
  });
}

