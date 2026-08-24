/**
 * Sintetizza Eventos - Componentes DOM Reutilizáveis
 */

// Renderizador do Header
function renderHeader(activePage = "home") {
  const headerElem = document.getElementById("site-header-container");
  if (!headerElem) return;

  const count = QuoteCart.getItemCount();

  headerElem.innerHTML = `
    <header class="site-header" id="main-header">
      <div class="container header-container">
        <a href="index.html" class="brand-logo-link">
          <img src="assets/images/logo.png" alt="Sintetizza Eventos" class="brand-logo-img" onerror="this.src='assets/images/icon.png'">
          <div class="brand-name">SINTETIZZA <span>EVENTOS</span></div>
        </a>

        <nav class="nav-menu" id="desktop-nav">
          <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Início</a>
          <a href="quem-somos.html" class="nav-link ${activePage === 'quem-somos' ? 'active' : ''}">Quem Somos</a>
          <a href="produtos.html" class="nav-link ${activePage === 'produtos' ? 'active' : ''}">Produtos & Soluções</a>
          <a href="contato.html" class="nav-link ${activePage === 'contato' ? 'active' : ''}">Fale Conosco</a>
        </nav>

        <div class="header-actions">
          <a href="orcamento.html" class="btn btn-primary btn-sm quote-nav-btn">
            <span class="btn-text">Solicitar Orçamento</span>
            <span class="quote-count-badge" id="header-quote-badge">${count}</span>
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
        <a href="contato.html" class="nav-link ${activePage === 'contato' ? 'active' : ''}">Fale Conosco</a>
        <div style="margin-top: 20px;">
          <a href="orcamento.html" class="btn btn-primary btn-block">
            Solicitar Orçamento (${count})
          </a>
        </div>
      </div>
    </header>
  `;

  // Toggle do menu mobile
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("is-active");
      drawer.classList.toggle("is-open");
    });
  }

  // Efeito de scroll no header
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
            <a href="index.html" class="brand-logo-link" style="margin-bottom: 16px;">
              <img src="assets/images/logo.png" alt="Sintetizza Eventos" class="brand-logo-img" onerror="this.src='assets/images/icon.png'">
              <div class="brand-name">SINTETIZZA <span>EVENTOS</span></div>
            </a>
            <p style="color: var(--color-text-light-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
              Engenharia, estruturas de alumínio, coberturas, sonorização profissional, iluminação cênica e audiovisual para eventos inesquecíveis e seguros.
            </p>
            <div class="flex gap-sm">
              <a href="https://instagram.com" target="_blank" class="btn btn-dark btn-sm" style="padding: 8px 12px;" title="Instagram">
                📸 @sintetizzaeventos
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Navegação</h4>
            <div class="footer-links">
              <a href="index.html">Início</a>
              <a href="quem-somos.html">Quem Somos</a>
              <a href="produtos.html">Catálogo de Produtos</a>
              <a href="orcamento.html">Montar Orçamento</a>
              <a href="contato.html">Fale Conosco</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Soluções</h4>
            <div class="footer-links">
              <a href="produtos.html?cat=estruturas">Palcos & Box Truss</a>
              <a href="produtos.html?cat=coberturas">Tendas Piramidais & Cristal</a>
              <a href="produtos.html?cat=audio">Sonorização Line Array</a>
              <a href="produtos.html?cat=audiovisual">Painéis de LED P3.9</a>
              <a href="produtos.html?cat=iluminacao">Iluminação Cênica & Efeitos</a>
              <a href="produtos.html?cat=energia">Geradores Silenciados</a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Atendimento</h4>
            <div class="footer-contact-list">
              <div class="footer-contact-item">
                <span class="footer-contact-icon">📍</span>
                <span>${SINTETIZZA_CONFIG.address}</span>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon">📞</span>
                <span>${SINTETIZZA_CONFIG.phone}</span>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon">✉️</span>
                <span>${SINTETIZZA_CONFIG.emailQuotes}</span>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon">⏱️</span>
                <span>${SINTETIZZA_CONFIG.serviceHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} ${SINTETIZZA_CONFIG.companyName}. Todos os direitos reservados.
          </div>
          <div class="footer-bottom-links">
            <a href="orcamento.html" style="color: var(--color-brand-primary); font-weight: 700;">Solicitar Proposta Comercial</a>
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
  btn.title = "Ver Itens Selecionados no Orçamento";
  btn.innerHTML = `
    <span>📋 Orçamento</span>
    <span class="floating-quote-count" id="floating-quote-count">${count}</span>
  `;

  document.body.appendChild(btn);
}

// Renderiza Card de Produto
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
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
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
          <a href="produto-detalhe.html?id=${product.id}" class="btn btn-sm btn-dark" title="Ver Detalhes">
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
    <span>${type === 'success' ? '✅' : 'ℹ️'}</span>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Manipulador Global de Toggle no Orçamento
window.handleToggleQuote = function(productId, btnElem) {
  const product = getProductById(productId);
  if (!product) return;

  if (QuoteCart.hasItem(productId)) {
    QuoteCart.removeItem(productId);
    if (btnElem) {
      btnElem.classList.remove("added");
      btnElem.innerHTML = "+ Adicionar";
    }
    showToast(`"${product.name}" removido do orçamento.`);
  } else {
    QuoteCart.addItem(productId, 1);
    if (btnElem) {
      btnElem.classList.add("added");
      btnElem.innerHTML = "✓ No Orçamento";
    }
    showToast(`"${product.name}" adicionado ao seu orçamento!`, "success");
  }
};

// Sincronização em tempo real de contadores quando o QuoteCart atualiza
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
