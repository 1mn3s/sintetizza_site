/**
 * =============================================================================
 * SINTETIZZA - COMPONENTES DOM REUTILIZÁVEIS (LEVE & AMARELO PREDOMINANTE)
 * =============================================================================
 */

// Renderizador do Header
function renderHeader(activePage = "home") {
  const headerElem = document.getElementById("site-header-container");
  if (!headerElem) return;

  const count = QuoteCart.getItemCount();

  headerElem.innerHTML = `
    <header class="site-header" id="main-header">
      <div class="container header-container">
        <a href="index.html" class="brand-logo-link" title="Sintetizza Eventos">
          <div class="brand-name">SINTETIZZA <span>EVENTOS</span></div>
        </a>

        <nav class="nav-menu" id="desktop-nav">
          <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Início</a>
          <a href="quem-somos.html" class="nav-link ${activePage === 'quem-somos' ? 'active' : ''}">Quem Somos</a>
          <a href="produtos.html" class="nav-link ${activePage === 'produtos' ? 'active' : ''}">Produtos & Soluções</a>
          <a href="contato.html" class="nav-link ${activePage === 'contato' ? 'active' : ''}">Contato</a>
        </nav>

        <div class="header-actions">
          <a href="orcamento.html" class="btn btn-primary btn-sm quote-nav-btn" title="Orçamento">
            <span class="btn-text">Orçamento</span>
            <span class="quote-count-badge" id="header-quote-badge">${count}</span>
          </a>

          <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}" target="_blank" class="btn btn-dark btn-sm hide-mobile">
            <span>(15) 99835-3108</span>
          </a>

          <button class="mobile-toggle" id="mobile-menu-toggle" aria-label="Abrir Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div class="mobile-drawer" id="mobile-drawer">
        <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Início</a>
        <a href="quem-somos.html" class="nav-link ${activePage === 'quem-somos' ? 'active' : ''}">Quem Somos</a>
        <a href="produtos.html" class="nav-link ${activePage === 'produtos' ? 'active' : ''}">Produtos & Soluções</a>
        <a href="contato.html" class="nav-link ${activePage === 'contato' ? 'active' : ''}">Contato</a>
        
        <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px;">
          <a href="orcamento.html" class="btn btn-primary btn-block">
            Orçamento (${count})
          </a>
          <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}" target="_blank" class="btn btn-whatsapp btn-block">
            WhatsApp: (15) 99835-3108
          </a>
        </div>
      </div>
    </header>
  `;

  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("is-active");
      drawer.classList.toggle("is-open");
    });
  }

  window.addEventListener("scroll", () => {
    const mainHeader = document.getElementById("main-header");
    if (mainHeader) {
      if (window.scrollY > 20) {
        mainHeader.classList.add("scrolled");
      } else {
        mainHeader.classList.remove("scrolled");
      }
    }
  });
}

// Renderizador do Footer
function renderFooter() {
  const footerElem = document.getElementById("site-footer-container");
  if (!footerElem) return;

  footerElem.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="brand-name" style="margin-bottom: 12px;">SINTETIZZA <span>EVENTOS</span></div>
            <p style="color: var(--color-text-secondary); font-size: 0.9rem; line-height: 1.5; margin-bottom: 16px;">
              Estruturas, sonorização, iluminação, painéis de LED, climatização e geradores para eventos.
            </p>
            <div class="flex gap-sm">
              <a href="${SINTETIZZA_CONFIG.instagramUrl}" target="_blank" class="btn btn-dark btn-sm" style="padding: 6px 12px;">
                ${SINTETIZZA_CONFIG.instagram}
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Navegação</h4>
            <div class="footer-links">
              <a href="index.html">Início</a>
              <a href="quem-somos.html">Quem Somos</a>
              <a href="produtos.html">Catálogo</a>
              <a href="orcamento.html">Orçamento</a>
              <a href="contato.html">Contato</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Soluções</h4>
            <div class="footer-links">
              <a href="produtos.html?cat=estruturas">Palcos & Box Truss</a>
              <a href="produtos.html?cat=coberturas">Tendas & Galpões</a>
              <a href="produtos.html?cat=audio">Sonorização</a>
              <a href="produtos.html?cat=iluminacao">Iluminação</a>
              <a href="produtos.html?cat=audiovisual">Painéis de LED</a>
              <a href="produtos.html?cat=climatizacao">Climatização</a>
              <a href="produtos.html?cat=energia">Geradores</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Atendimento</h4>
            <div class="footer-contact-list">
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <span>${SINTETIZZA_CONFIG.address}</span>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <span>${SINTETIZZA_CONFIG.phone}</span>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <span>${SINTETIZZA_CONFIG.emailQuotes}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} ${SINTETIZZA_CONFIG.companyName}. Todos os direitos reservados.
          </div>
          <div class="footer-bottom-links">
            <a href="orcamento.html" style="color: #0F172A; font-weight: 700;">Solicitar Orçamento ➔</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Botão Flutuante de Orçamento
function renderFloatingQuoteButton() {
  const existing = document.getElementById("floating-quote-btn");
  if (existing) existing.remove();

  const count = QuoteCart.getItemCount();

  const btn = document.createElement("a");
  btn.href = "orcamento.html";
  btn.className = "floating-quote-btn";
  btn.id = "floating-quote-btn";
  btn.title = "Ver Orçamento";
  btn.innerHTML = `
    <span>Orçamento</span>
    <span class="floating-quote-count" id="floating-quote-count">${count}</span>
  `;

  document.body.appendChild(btn);
}

// Renderiza Card de Produto com Bloco Vazio de Imagem
function createProductCardHTML(product) {
  const isAdded = QuoteCart.hasItem(product.id);
  const badgeHTML = product.badge 
    ? `<span class="badge badge-brand product-tag">${product.badge}</span>` 
    : `<span class="badge badge-dark product-tag">${product.categoryLabel}</span>`;

  const specsHTML = product.specs && product.specs.length 
    ? product.specs.slice(0, 2).map(s => `<span class="spec-chip">${s.label}: ${s.value}</span>`).join("")
    : "";

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrap">
        ${badgeHTML}
        <div class="image-placeholder">
          <span class="image-placeholder-label">[ Espaço para Imagem ]</span>
        </div>
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.shortDesc}</p>
        <div class="product-specs">
          ${specsHTML}
        </div>
        <div class="product-actions">
          <button class="btn btn-sm btn-primary btn-add-quote ${isAdded ? 'added' : ''}" 
                  onclick="handleToggleQuote('${product.id}', this)">
            ${isAdded ? '✓ No Orçamento' : '+ Adicionar'}
          </button>
          <a href="produto-detalhe.html?id=${product.id}" class="btn btn-sm btn-dark">
            Detalhes ➔
          </a>
        </div>
      </div>
    </article>
  `;
}

// Toast Notifier
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Toggle Orçamento
window.handleToggleQuote = function(productId, btnElem) {
  const product = getProductById(productId);
  if (!product) return;

  if (QuoteCart.hasItem(productId)) {
    QuoteCart.removeItem(productId);
    if (btnElem) {
      btnElem.classList.remove("added");
      btnElem.innerHTML = "+ Adicionar";
    }
    showToast(`Item removido do orçamento.`);
  } else {
    QuoteCart.addItem(productId, 1);
    if (btnElem) {
      btnElem.classList.add("added");
      btnElem.innerHTML = "✓ No Orçamento";
    }
    showToast(`Item adicionado ao orçamento!`, "success");
  }
};

// Sincronização de contadores
window.addEventListener("quoteUpdated", (e) => {
  const count = e.detail.count;
  const headerBadge = document.getElementById("header-quote-badge");
  if (headerBadge) {
    headerBadge.textContent = count;
    headerBadge.classList.add("animate-pop");
    setTimeout(() => headerBadge.classList.remove("animate-pop"), 300);
  }

  const floatCount = document.getElementById("floating-quote-count");
  if (floatCount) {
    floatCount.textContent = count;
  }
});
