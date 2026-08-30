/**
 * =============================================================================
 * SINTETIZZA - SCRIPT PRINCIPAL (ROTEAMENTO, REVIEWS, FAQ & EVENTOS)
 * =============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  let activePage = "home";

  if (path.includes("quem-somos")) activePage = "quem-somos";
  else if (path.includes("produtos") || path.includes("produto-detalhe")) activePage = "produtos";
  else if (path.includes("orcamento")) activePage = "orcamento";
  else if (path.includes("contato")) activePage = "contato";

  // Componentes Globais
  renderHeader(activePage);
  renderFooter();
  renderFloatingQuoteButton();
  renderMobileStickyBar();

  // Inicialização de Páginas
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

  // Renderiza Avaliações Google
  renderGoogleReviewsGrid("home-google-reviews-grid");

  // Renderiza FAQ Accordion
  renderFAQAccordion("home-faq-accordion");
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
      countLabel.textContent = `${list.length} item(s) encontrado(s)`;
    }

    if (list.length === 0) {
      catalogGrid.innerHTML = `
        <div class="empty-catalog-state">
          <h3>Nenhum item encontrado</h3>
          <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Tente outra busca ou solicite uma cotação personalizada.</p>
          <a href="orcamento.html" class="btn btn-primary">Solicitar Orçamento Personalizado</a>
        </div>
      `;
      return;
    }

    catalogGrid.innerHTML = list.map(p => createProductCardHTML(p)).join("");
  }

  applyCatalogFilters();
}

// 3. Detalhe do Produto
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

  detailContainer.innerHTML = `
    <div class="product-detail-grid">
      <!-- Galeria Otimizada com Foto Real -->
      <div class="product-gallery" style="min-height: 380px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--color-surface-alt); border-radius: var(--radius-md); overflow: hidden; position: relative; padding: 20px;">
        <img src="${product.image || 'assets/images/logo.png'}" 
             alt="${product.name} - Sintetizza Eventos" 
             class="product-detail-hero-img" 
             style="width: 100%; height: auto; max-height: 420px; object-fit: contain;" 
             loading="eager" 
             decoding="async" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="image-placeholder" style="display: none; min-height: 320px; border: none; background: transparent;">
          <span style="font-size: 1.15rem; font-weight: 800; color: var(--color-text-primary); margin-bottom: 4px;">${product.name}</span>
          <span class="badge badge-brand" style="margin-bottom: 8px;">${product.categoryLabel}</span>
          <span class="image-placeholder-label">[ Foto Técnica do Equipamento ]</span>
        </div>
      </div>

      <!-- Informações do Equipamento -->
      <div class="product-detail-info">
        <div>
          <span class="badge badge-brand" style="margin-bottom: 10px;">${product.categoryLabel}</span>
          <h1 style="font-size: clamp(1.7rem, 2.5vw, 2.3rem); margin-bottom: 10px;">${product.name}</h1>
          <p style="font-size: 1rem; color: var(--color-text-secondary); line-height: 1.6;">
            ${product.fullDesc || product.shortDesc}
          </p>
        </div>

        <!-- Especificações Técnicas -->
        <div>
          <h3 style="font-size: 1.1rem; margin-bottom: 10px; border-bottom: 2px solid var(--color-brand-primary); display: inline-block; padding-bottom: 4px;">
            Especificações Técnicas
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

        <!-- Itens Inclusos & Garantia -->
        <div>
          <h4 style="font-size: 1rem; margin-bottom: 8px;">Diferenciais & O que está incluso:</h4>
          <ul style="display: flex; flex-direction: column; gap: 8px;">
            ${product.features.map(f => `
              <li style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem;">
                <span style="color: var(--color-brand-primary); font-weight: 800;">✓</span>
                <span>${f}</span>
              </li>
            `).join("")}
            <li style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem;">
              <span style="color: var(--color-brand-primary); font-weight: 800;">✓</span>
              <span>Emissão de ART / CREA e equipe homologada</span>
            </li>
          </ul>
        </div>

        <!-- Caixa de Ação do Orçamento -->
        <div class="quote-action-box">
          <div class="flex items-center justify-between">
            <span style="font-weight: 700; color: var(--color-text-primary);">Quantidade Necessária:</span>
            <div class="quote-qty-controls">
              <button type="button" class="qty-btn" id="detail-qty-minus" aria-label="Diminuir quantidade">-</button>
              <span class="qty-display" id="detail-qty-value">1</span>
              <button type="button" class="qty-btn" id="detail-qty-plus" aria-label="Aumentar quantidade">+</button>
            </div>
          </div>

          <div class="flex flex-col gap-sm">
            <button class="btn btn-primary btn-block btn-lg" id="detail-btn-add-quote">
              ${isAdded ? '✓ Adicionado! (Adicionar Mais)' : '+ Adicionar ao Orçamento'}
            </button>
            <a href="orcamento.html" class="btn btn-dark btn-block">
              Ver Orçamento Completo ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Interatividade do Detalhe
  const btnMinus = document.getElementById("detail-qty-minus");
  const btnPlus = document.getElementById("detail-qty-plus");
  const qtyDisplay = document.getElementById("detail-qty-value");
  const btnAdd = document.getElementById("detail-btn-add-quote");

  if (btnMinus && btnPlus && qtyDisplay && btnAdd) {
    let currentQty = 1;

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
      showToast(`+${currentQty}x ${product.name} adicionado ao orçamento!`, "success");
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

// 4. Contato
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
      `=========================================\n` +
      `CONTATO VIA SITE - SINTETIZZA EVENTOS\n` +
      `=========================================\n` +
      `• Nome: ${name}\n` +
      `• E-mail: ${email}\n` +
      `• Telefone: ${phone || 'Não informado'}\n\n` +
      `Mensagem:\n${message}\n` +
      `=========================================`
    );

    const waUrl = `https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${whatsappText}`;
    window.open(waUrl, "_blank");
    showToast("Mensagem aberta no WhatsApp!", "success");
    form.reset();
  });
}
