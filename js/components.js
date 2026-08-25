/**
 * =============================================================================
 * SINTETIZZA - COMPONENTES DOM OFICIAIS & INTERATIVIDADE
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
        <a href="index.html" class="brand-logo-link" title="Sintetizza Eventos - Início">
          <img src="assets/images/logo.png" alt="Sintetizza Eventos" class="brand-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="brand-name" style="display:none;">SINTETIZZA <span>EVENTOS</span></div>
        </a>

        <nav class="nav-menu" id="desktop-nav">
          <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Início</a>
          <a href="quem-somos.html" class="nav-link ${activePage === 'quem-somos' ? 'active' : ''}">Quem Somos</a>
          <a href="produtos.html" class="nav-link ${activePage === 'produtos' ? 'active' : ''}">Produtos & Soluções</a>
          <a href="contato.html" class="nav-link ${activePage === 'contato' ? 'active' : ''}">Contato</a>
        </nav>

        <div class="header-actions">
          <a href="orcamento.html" class="btn btn-primary btn-sm quote-nav-btn" title="Ver Orçamento">
            <span>Orçamento</span>
            <span class="quote-count-badge" id="header-quote-badge">${count}</span>
          </a>

          <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+meu+evento" target="_blank" class="btn btn-whatsapp btn-sm hide-mobile">
            <span>WhatsApp (15) 99835-3108</span>
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
        
        <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 10px;">
          <a href="orcamento.html" class="btn btn-primary btn-block">
            Ver Lista de Orçamento (${count})
          </a>
          <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+meu+evento" target="_blank" class="btn btn-whatsapp btn-block">
            Chamar no WhatsApp
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

// Renderizador do Footer Corporativo
function renderFooter() {
  const footerElem = document.getElementById("site-footer-container");
  if (!footerElem) return;

  footerElem.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          
          <!-- Coluna 1: Marca & Resumo -->
          <div class="footer-brand-wrap">
            <a href="index.html" class="brand-logo-link" style="margin-bottom: 4px;">
              <img src="assets/images/logo.png" alt="Sintetizza Eventos" style="height: 38px; filter: brightness(0) invert(1);" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
              <div class="brand-name" style="color:#FFF; display:none;">SINTETIZZA <span>EVENTOS</span></div>
            </a>
            <p class="footer-brand-desc">
              Locação e montagem de infraestrutura completa para feiras, congressos, shows e eventos corporativos com alta tecnologia e segurança certificada.
            </p>
            <div class="footer-badge-box">
              <strong style="color: var(--color-brand); display:block; margin-bottom: 2px;">CREA-SP / ART Habilitada</strong>
              <span>Equipes certificadas nas normas NR-10 (Elétrica) e NR-35 (Trabalho em Altura).</span>
            </div>
          </div>

          <!-- Coluna 2: Navegação -->
          <div class="footer-col">
            <h4>Navegação</h4>
            <div class="footer-links">
              <a href="index.html">Página Inicial</a>
              <a href="quem-somos.html">Quem Somos</a>
              <a href="produtos.html">Catálogo Completo</a>
              <a href="orcamento.html">Solicitar Orçamento</a>
              <a href="contato.html">Fale Conosco</a>
            </div>
          </div>

          <!-- Coluna 3: Soluções -->
          <div class="footer-col">
            <h4>Soluções</h4>
            <div class="footer-links">
              <a href="produtos.html?cat=estruturas">Palcos & Box Truss</a>
              <a href="produtos.html?cat=coberturas">Tendas & Galpões</a>
              <a href="produtos.html?cat=audio">Sonorização Line Array</a>
              <a href="produtos.html?cat=audiovisual">Painéis de LED P3.9</a>
              <a href="produtos.html?cat=iluminacao">Iluminação Cênica DMX</a>
              <a href="produtos.html?cat=climatizacao">Climatizadores Evaporativos</a>
              <a href="produtos.html?cat=energia">Grupos Geradores Silenciados</a>
              <a href="produtos.html?cat=stands">Stands para Feiras</a>
            </div>
          </div>

          <!-- Coluna 4: Atendimento & Região -->
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
                <span class="footer-contact-icon">🕒</span>
                <span>${SINTETIZZA_CONFIG.serviceHours}</span>
              </div>
            </div>

            <div style="margin-top: 18px;">
              <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+meu+evento" target="_blank" class="btn btn-whatsapp btn-sm btn-block">
                Falar com Especialista
              </a>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} ${SINTETIZZA_CONFIG.companyName}. Todos os direitos reservados.
          </div>
          <div class="footer-bottom-links">
            <a href="orcamento.html">Montar Orçamento Técnico ➔</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Renderiza Dock Flutuante de Ações (WhatsApp + Orçamento)
function renderFloatingQuoteButton() {
  const existing = document.getElementById("floating-dock");
  if (existing) existing.remove();

  const count = QuoteCart.getItemCount();

  const dock = document.createElement("div");
  dock.className = "floating-dock";
  dock.id = "floating-dock";
  dock.innerHTML = `
    <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+meu+evento" target="_blank" class="floating-whatsapp-btn" title="Chamar no WhatsApp">
      <span>WhatsApp</span>
    </a>
    <a href="orcamento.html" class="floating-quote-btn" id="floating-quote-btn" title="Ver Orçamento">
      <span>Meu Orçamento</span>
      <span class="floating-quote-count" id="floating-quote-count">${count}</span>
    </a>
  `;

  document.body.appendChild(dock);
}

// Renderiza Card de Produto com Imagem Real e Alta Qualidade
function createProductCardHTML(product) {
  const isAdded = QuoteCart.hasItem(product.id);
  const badgeHTML = product.badge 
    ? `<span class="badge badge-brand product-tag">${product.badge}</span>` 
    : `<span class="badge badge-dark product-tag">${product.categoryLabel}</span>`;

  const specsHTML = product.specs && product.specs.length 
    ? product.specs.slice(0, 2).map(s => `<span class="spec-chip">${s.label}: <strong>${s.value}</strong></span>`).join("")
    : "";

  const imgSrc = product.image || product.fallbackImage || "assets/images/original/principal-novo-2.png";
  const fallbackSrc = product.fallbackImage || "assets/images/original/principal-novo-2.png";

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrap">
        ${badgeHTML}
        <img src="${imgSrc}" 
             alt="${product.name}" 
             class="product-card-img" 
             loading="lazy" 
             onerror="if (this.src !== '${fallbackSrc}') { this.src = '${fallbackSrc}'; } else { this.style.opacity = '0.7'; }">
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
            ${isAdded ? '✓ Adicionado' : '+ Orçamento'}
          </button>
          <a href="produto-detalhe.html?id=${product.id}" class="btn btn-sm btn-dark">
            Ficha ➔
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
      btnElem.innerHTML = "+ Orçamento";
    }
    showToast(`"${product.name}" removido do orçamento.`);
  } else {
    QuoteCart.addItem(productId, 1);
    if (btnElem) {
      btnElem.classList.add("added");
      btnElem.innerHTML = "✓ Adicionado";
    }
    showToast(`"${product.name}" adicionado ao orçamento!`, "success");
  }
};

// Sincronização de contadores reativos
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

