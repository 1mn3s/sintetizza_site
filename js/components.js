/**
 * =============================================================================
 * SINTETIZZA - COMPONENTES DOM REUTILIZÁVEIS, HEADER, FOOTER, MOBILE BAR & REVIEWS
 * =============================================================================
 */

// Utilitário de segurança para texto inserido em templates HTML.
// Use em qualquer valor que possa vir do usuário antes de interpolar em innerHTML.
function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// 1. Renderizador do Header
function renderHeader(activePage = "home") {
  const headerElem = document.getElementById("site-header-container");
  if (!headerElem) return;

  const count = QuoteCart.getItemCount();

  headerElem.innerHTML = `
    <!-- Header Principal -->
    <header class="site-header" id="main-header">
      <div class="container header-container">
        <a href="index.html" class="brand-logo-link" title="Sintetizza Eventos - Início">
          <img src="assets/images/logo.png" alt="Sintetizza Eventos" class="brand-logo-img" width="170" height="48" loading="eager" decoding="async">
        </a>

        <nav class="nav-menu" id="desktop-nav" aria-label="Menu Principal">
          <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Início</a>
          <a href="produtos.html" class="nav-link ${activePage === 'produtos' ? 'active' : ''}">Equipamentos & Soluções</a>
          <a href="quem-somos.html" class="nav-link ${activePage === 'quem-somos' ? 'active' : ''}">Quem Somos</a>
          <a href="contato.html" class="nav-link ${activePage === 'contato' ? 'active' : ''}">Contato</a>
        </nav>

        <div class="header-actions">
          <a href="orcamento.html" class="btn btn-primary btn-sm quote-nav-btn" title="Ver Orçamento">
            <span class="btn-text">Orçamento</span>
            <span class="quote-count-badge" id="header-quote-badge">${count}</span>
          </a>

          <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${encodeURIComponent(SINTETIZZA_CONFIG.whatsappDefaultMsg)}" target="_blank" rel="noopener" class="header-whatsapp-icon hide-mobile" title="Falar no WhatsApp" aria-label="Falar no WhatsApp">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.74.46 3.44 1.32 4.94L2 22l5.31-1.39a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2Zm5.75 14.15c-.24.69-1.4 1.31-1.96 1.36-.5.05-1.14.07-1.84-.12-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.85-4.24-5-4.44-.15-.19-1.19-1.58-1.19-3.02s.75-2.15 1.02-2.45c.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.25.59.84 2.04.91 2.19.08.15.13.32.03.51-.1.2-.15.32-.3.49-.15.17-.32.38-.45.51-.15.15-.31.31-.13.61.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.33 2.4 1.48.3.15.47.13.64-.08.2-.23.74-.86.94-1.16.2-.3.4-.25.67-.15.28.1 1.75.83 2.05.98.3.15.5.23.57.36.08.13.08.74-.16 1.43Z"/>
            </svg>
          </a>

          <button class="mobile-toggle" id="mobile-menu-toggle" aria-label="Abrir Menu de Navegação" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Gaveta Mobile -->
      <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
        <div class="mobile-drawer-header">
          <div class="brand-name">SINTETIZZA <span>EVENTOS</span></div>
          <span class="badge badge-brand-soft">Sorocaba e Região</span>
        </div>

        <nav class="mobile-nav-links">
          <a href="index.html" class="mobile-nav-item ${activePage === 'home' ? 'active' : ''}">
            <span>Início</span>
          </a>
          <a href="produtos.html" class="mobile-nav-item ${activePage === 'produtos' ? 'active' : ''}">
            <span>Catálogo de Equipamentos</span>
          </a>
          <a href="orcamento.html" class="mobile-nav-item ${activePage === 'orcamento' ? 'active' : ''}">
            <span>Solicitar Orçamento</span> <span class="badge badge-brand">${count}</span>
          </a>
          <a href="quem-somos.html" class="mobile-nav-item ${activePage === 'quem-somos' ? 'active' : ''}">
            <span>Quem Somos & Laudos ART</span>
          </a>
          <a href="contato.html" class="mobile-nav-item ${activePage === 'contato' ? 'active' : ''}">
            <span>Contato & Localização</span>
          </a>
        </nav>
        
        <div class="mobile-drawer-actions">
          <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${encodeURIComponent(SINTETIZZA_CONFIG.whatsappDefaultMsg)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block btn-lg">
            <span>Conversar no WhatsApp</span>
          </a>
          <a href="tel:${SINTETIZZA_CONFIG.phoneRaw}" class="btn btn-dark btn-block btn-lg">
            <span>Ligar Agora: ${SINTETIZZA_CONFIG.phone}</span>
          </a>
          <a href="orcamento.html" class="btn btn-primary btn-block btn-lg">
            <span>Construtor de Orçamento (${count})</span>
          </a>
        </div>
      </div>
    </header>
  `;

  // Listeners de toggle e scroll
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = toggleBtn.classList.toggle("is-active");
      drawer.classList.toggle("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen);
      drawer.setAttribute("aria-hidden", !isOpen);
      document.body.classList.toggle("no-scroll", isOpen);
    });
  }

  let scrollFrame;
  const updateHeaderOnScroll = () => {
    const mainHeader = document.getElementById("main-header");
    if (mainHeader) {
      mainHeader.classList.toggle("scrolled", window.scrollY > 20);
    }
    scrollFrame = undefined;
  };

  updateHeaderOnScroll();
  window.addEventListener("scroll", () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateHeaderOnScroll);
  }, { passive: true });
}

// Applies subtle, one-time entrance motion to content added during initial render and filtering.
function initScrollReveal(scope = document) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("js-motion");
  const selector = [
    ".section-header",
    ".product-card",
    ".strategic-group-card",
    ".feature-card",
    ".review-card",
    ".service-card",
    ".contact-card",
    ".quote-action-box",
    ".product-detail-grid",
    ".gallery-viewer",
    ".footer-trust-strip"
  ].join(", ");
  const elements = [...scope.querySelectorAll(selector)].filter((element) => !element.classList.contains("reveal-on-scroll"));

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -6%" });

  elements.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    observer.observe(element);
  });
}

// 2. Renderizador do Footer com Dados Transparentes (E-E-A-T)
function renderFooter() {
  const footerElem = document.getElementById("site-footer-container");
  if (!footerElem) return;

  footerElem.innerHTML = `
    <footer class="site-footer site-footer-compact">
      <div class="container">
        <div class="footer-compact-grid">
          <div class="footer-compact-brand">
            <a href="index.html" class="brand-logo-link" aria-label="Sintetizza Eventos - Início">
              <img src="assets/images/logo.png" alt="Sintetizza Eventos" class="brand-logo-img" width="170" height="48" loading="lazy" decoding="async">
            </a>
            <p>Estruturas e infraestrutura para eventos em Sorocaba e região.</p>
          </div>

          <nav class="footer-compact-nav" aria-label="Navegação do rodapé">
            <a href="produtos.html">Soluções</a>
            <a href="quem-somos.html">Quem Somos</a>
            <a href="contato.html">Contato</a>
            <a href="orcamento.html">Orçamento</a>
          </nav>

          <div class="footer-compact-contact">
            <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${encodeURIComponent(SINTETIZZA_CONFIG.whatsappDefaultMsg)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
              Falar no WhatsApp
            </a>
            <a href="mailto:${SINTETIZZA_CONFIG.emailQuotes}">${SINTETIZZA_CONFIG.emailQuotes}</a>
          </div>
        </div>

        <div class="footer-compact-bottom">
          <span>&copy; ${new Date().getFullYear()} Sintetizza Estruturas. Todos os direitos reservados.</span>
          <div>
            <a href="politica-de-privacidade.html">Privacidade</a>
            <a href="termos-de-uso.html">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// 3. Barra Fixa Inferior Mobile (Mobile First Quick Actions)
function renderMobileStickyBar() {
  const existing = document.getElementById("mobile-sticky-actions");
  if (existing) existing.remove();
}

// 4. Botão Flutuante de WhatsApp (Desktop)

function renderFloatingQuoteButton() {
  const existing = document.getElementById("floating-action-group");
  if (existing) existing.remove();

  const group = document.createElement("div");
  group.id = "floating-action-group";
  group.className = "floating-action-group hide-mobile";
  group.innerHTML = `
    <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${encodeURIComponent(SINTETIZZA_CONFIG.whatsappDefaultMsg)}" 
       target="_blank" 
       rel="noopener"
       class="floating-btn-wa" 
       title="Falar no WhatsApp">
      <span class="floating-btn-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
          <path fill="currentColor" d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.74.46 3.44 1.32 4.94L2 22l5.31-1.39a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2Zm5.75 14.15c-.24.69-1.4 1.31-1.96 1.36-.5.05-1.14.07-1.84-.12-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.85-4.24-5-4.44-.15-.19-1.19-1.58-1.19-3.02s.75-2.15 1.02-2.45c.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.25.59.84 2.04.91 2.19.08.15.13.32.03.51-.1.2-.15.32-.3.49-.15.17-.32.38-.45.51-.15.15-.31.31-.13.61.17.3.77 1.27 1.66 2.06 1.14 1.02 2.1 1.33 2.4 1.48.3.15.47.13.64-.08.2-.23.74-.86.94-1.16.2-.3.4-.25.67-.15.28.1 1.75.83 2.05.98.3.15.5.23.57.36.08.13.08.74-.16 1.43Z"/>
        </svg>
      </span>
      <span class="sr-only">Falar no WhatsApp</span>
    </a>
  `;

  document.body.appendChild(group);
}

// 5. Renderiza Card de Produto com Imagem Real e Otimizada
function createProductCardHTML(product) {
  const isAdded = QuoteCart.hasItem(product.id);
  const badgeHTML = product.badge 
    ? `<span class="badge badge-brand product-tag">${product.badge}</span>` 
    : `<span class="badge badge-dark product-tag">${product.categoryLabel}</span>`;

  const specsHTML = product.specs && product.specs.length 
    ? product.specs.slice(0, 2).map(s => `<span class="spec-chip">${s.label}: <strong>${s.value}</strong></span>`).join("")
    : "";

  const imageSrc = product.image || "assets/images/principal-novo-2.png";

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-image-wrap">
        ${badgeHTML}
        <img src="${imageSrc}" 
             alt="${product.name} - Sintetizza Eventos" 
             class="product-img" 
             loading="lazy" 
             decoding="async" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="image-placeholder" style="display: none;">
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--color-text-primary);">${product.name}</span>
          <span class="image-placeholder-label">[ Foto do Equipamento ]</span>
        </div>
      </div>
      <div class="product-body">
        <div class="product-cat-label">${product.categoryLabel}</div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.shortDesc}</p>
        <div class="product-specs">
          ${specsHTML}
        </div>
        <div class="product-actions">
          <button class="btn btn-sm btn-primary btn-add-quote ${isAdded ? 'added' : ''}" 
                  onclick="handleToggleQuote('${product.id}', this)"
                  aria-label="${isAdded ? 'Item já adicionado' : 'Adicionar ao orçamento'}">
            ${isAdded ? ' No Orçamento' : '+ Adicionar'}
          </button>
          <a href="produto-detalhe.html?id=${product.id}" class="btn btn-sm btn-dark" title="Ver Ficha Técnica">
            Detalhes ➔
          </a>
        </div>
      </div>
    </article>
  `;
}

function createStrategicGroupCardHTML(group) {
  const bullets = (group.bullets || []).map(item => `<li>${item}</li>`).join("");

  return `
    <article class="strategic-group-card">
      <div class="strategic-group-top">
        <span class="strategic-group-icon">${group.icon || "◆"}</span>
        <span class="strategic-group-accent">${group.accent || "Soluções"}</span>
      </div>
      <h3 class="strategic-group-title">${group.title}</h3>
      <p class="strategic-group-desc">${group.description}</p>
      <ul class="strategic-group-list">
        ${bullets}
      </ul>
      <a href="${group.href}" class="strategic-group-link">Explorar soluções ➔</a>
    </article>
  `;
}

// 6. Renderizador da Seção de Avaliações Google
function renderGoogleReviewsGrid(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = GOOGLE_REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar">${r.author.charAt(0)}</div>
        <div class="review-meta">
          <div class="review-author">
            ${r.author}
            ${r.verified ? '<span class="review-badge-verified" title="Cliente Verificado"> Verificado</span>' : ''}
          </div>
          <div class="review-role">${r.role} • ${r.city}</div>
        </div>
      </div>
      <div class="review-rating">
        <div class="review-stars"></div>
        <span class="review-date">${r.date}</span>
      </div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-event-tag">
        <span>Evento:</span> <strong>${r.event}</strong>
      </div>
    </div>
  `).join("");
}

// 7. Renderizador do FAQ Accordion
function renderFAQAccordion(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="faq-list">
      ${FAQ_ITEMS.map((item, index) => `
        <div class="faq-item ${index === 0 ? 'is-open' : ''}" data-faq-index="${index}">
          <button type="button" class="faq-question" aria-expanded="${index === 0 ? 'true' : 'false'}">
            <span>${item.question}</span>
            <span class="faq-toggle-icon">${index === 0 ? '−' : '+'}</span>
          </button>
          <div class="faq-answer" style="${index === 0 ? 'display: block;' : 'display: none;'}">
            <p>${item.answer}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  container.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const icon = item.querySelector(".faq-toggle-icon");
      const isOpen = item.classList.contains("is-open");

      container.querySelectorAll(".faq-item").forEach(other => {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector(".faq-answer").style.display = "none";
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-toggle-icon").textContent = "+";
        }
      });

      if (isOpen) {
        item.classList.remove("is-open");
        answer.style.display = "none";
        btn.setAttribute("aria-expanded", "false");
        icon.textContent = "+";
      } else {
        item.classList.add("is-open");
        answer.style.display = "block";
        btn.setAttribute("aria-expanded", "true");
        icon.textContent = "−";
      }
    });
  });
}

// 8. Toast Notifier
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

  const messageElement = document.createElement("div");
  messageElement.textContent = String(message ?? "");
  toast.appendChild(messageElement);

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// 9. Toggle Orçamento
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
      btnElem.innerHTML = " Adicionado";
    }
    showToast(`"${product.name}" adicionado ao orçamento!`, "success");
  }
};

// 10. Sincronização de Contadores
window.addEventListener("quoteUpdated", (e) => {
  const count = e.detail.count;
  
  const headerBadge = document.getElementById("header-quote-badge");
  if (headerBadge) {
    headerBadge.textContent = count;
    headerBadge.classList.add("animate-pop");
    setTimeout(() => headerBadge.classList.remove("animate-pop"), 300);
  }

  const mobileBarCount = document.getElementById("mobile-bar-quote-badge");
  if (mobileBarCount) {
    mobileBarCount.textContent = count;
  }
});
