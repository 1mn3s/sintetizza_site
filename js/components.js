/**
 * =============================================================================
 * SINTETIZZA - COMPONENTES DOM REUTILIZÁVEIS, HEADER, FOOTER, MOBILE BAR & REVIEWS
 * =============================================================================
 */

// 1. Renderizador do Header
function renderHeader(activePage = "home") {
  const headerElem = document.getElementById("site-header-container");
  if (!headerElem) return;

  const count = QuoteCart.getItemCount();

  headerElem.innerHTML = `
    <!-- Barra Superior de Confiança & Plantão -->
    <div class="top-trust-bar">
      <div class="container top-trust-container">
        <div class="top-trust-left">
          <span><strong>Plantão 24h & ART Inclusa</strong> | Sorocaba e Região SP</span>
          <span class="top-trust-rating">★ 4.9 no Google (+128 avaliações)</span>
        </div>
        <div class="top-trust-right">
          <a href="tel:${SINTETIZZA_CONFIG.phoneRaw}" class="top-trust-link" title="Ligar para a Sintetizza">
            Telefone: ${SINTETIZZA_CONFIG.phone}
          </a>
          <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${encodeURIComponent(SINTETIZZA_CONFIG.whatsappDefaultMsg)}" target="_blank" rel="noopener" class="top-trust-link text-whatsapp" title="WhatsApp Sintetizza">
            WhatsApp em 15 min
          </a>
        </div>
      </div>
    </div>

    <!-- Header Principal -->
    <header class="site-header" id="main-header">
      <div class="container header-container">
        <a href="index.html" class="brand-logo-link" title="Sintetizza Eventos - Início">
          <picture>
            <source srcset="assets/images/logo.webp" type="image/webp">
            <img src="assets/images/logo.png" alt="Sintetizza Eventos - Estruturas e Soluções" class="brand-logo-img" width="170" height="36" loading="eager" decoding="async">
          </picture>
        </a>

        <nav class="nav-menu" id="desktop-nav" aria-label="Menu Principal">
          <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Início</a>
          <a href="produtos.html" class="nav-link ${activePage === 'produtos' ? 'active' : ''}">Equipamentos & Soluções</a>
          <a href="quem-somos.html" class="nav-link ${activePage === 'quem-somos' ? 'active' : ''}">Quem Somos</a>
          <a href="contato.html" class="nav-link ${activePage === 'contato' ? 'active' : ''}">Contato</a>
        </nav>

        <div class="header-actions">
          <a href="tel:${SINTETIZZA_CONFIG.phoneRaw}" class="btn btn-dark btn-sm hide-tablet" title="Ligue Agora">
            <span>${SINTETIZZA_CONFIG.phone}</span>
          </a>

          <a href="orcamento.html" class="btn btn-primary btn-sm quote-nav-btn" title="Ver Orçamento">
            <span class="btn-text">Orçamento</span>
            <span class="quote-count-badge" id="header-quote-badge">${count}</span>
          </a>

          <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${encodeURIComponent(SINTETIZZA_CONFIG.whatsappDefaultMsg)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm hide-mobile" title="Falar no WhatsApp">
            <span>WhatsApp ➔</span>
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
            <span>Início</span> ➔
          </a>
          <a href="produtos.html" class="mobile-nav-item ${activePage === 'produtos' ? 'active' : ''}">
            <span>Catálogo de Equipamentos</span> ➔
          </a>
          <a href="orcamento.html" class="mobile-nav-item ${activePage === 'orcamento' ? 'active' : ''}">
            <span>Solicitar Orçamento</span> <span class="badge badge-brand">${count}</span>
          </a>
          <a href="quem-somos.html" class="mobile-nav-item ${activePage === 'quem-somos' ? 'active' : ''}">
            <span>Quem Somos & Laudos ART</span> ➔
          </a>
          <a href="contato.html" class="mobile-nav-item ${activePage === 'contato' ? 'active' : ''}">
            <span>Contato & Localização</span> ➔
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

  window.addEventListener("scroll", () => {
    const mainHeader = document.getElementById("main-header");
    if (mainHeader) {
      if (window.scrollY > 20) {
        mainHeader.classList.add("scrolled");
      } else {
        mainHeader.classList.remove("scrolled");
      }
    }
  }, { passive: true });
}

// 2. Renderizador do Footer com Dados Transparentes (E-E-A-T)
function renderFooter() {
  const footerElem = document.getElementById("site-footer-container");
  if (!footerElem) return;

  const clientLogos = [
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.27.jpeg", alt: "Cliente atendido pela Sintetizza" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(1).jpeg", alt: "Logo de cliente da Sintetizza" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(10).jpeg", alt: "Logo de cliente atendido em eventos" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(12).jpeg", alt: "Marca cliente da Sintetizza" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(14).jpeg", alt: "Cliente corporativo atendido pela Sintetizza" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(17).jpeg", alt: "Cliente de infraestrutura para eventos" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(20).jpeg", alt: "Logo de cliente parceiro da Sintetizza" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(23).jpeg", alt: "Cliente parceiro em eventos e ativações" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(24).jpeg", alt: "Cliente institucional da Sintetizza" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(25).jpeg", alt: "Marca já atendida em eventos" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(27).jpeg", alt: "Cliente com eventos realizados pela Sintetizza" },
    { src: "Galeria/Clientes/WhatsApp Image 2026-08-31 at 12.20.56(29).jpeg", alt: "Parceiro de eventos atendido pela Sintetizza" }
  ];
  const footerLogos = clientLogos.map(({ src, alt }) => `<img src="${src}" alt="${alt}" loading="lazy">`).join("");
  const footerLogosDuplicate = clientLogos.map(({ src }) => `<img src="${src}" alt="" loading="lazy">`).join("");

  footerElem.innerHTML = `
    <!-- Barra de Confiança Pré-Footer -->
    <div class="footer-trust-strip">
      <div class="container">
        <div class="trust-strip-grid">
          <div class="trust-strip-item">
            <span class="trust-icon-box">✓</span>
            <div>
              <strong>Montagem Segura & ART Inclusa</strong>
              <p>Normas NR-10 e NR-35 com responsabilidade técnica.</p>
            </div>
          </div>
          <div class="trust-strip-item">
            <span class="trust-icon-box">⚡</span>
            <div>
              <strong>Plantão Operacional 24h</strong>
              <p>Suporte e técnicos presentes em todo o evento.</p>
            </div>
          </div>
          <div class="trust-strip-item">
            <span class="trust-icon-box">★</span>
            <div>
              <strong>Nota 4.9 no Google Reviews</strong>
              <p>Mais de 500 eventos atendidos com pontualidade.</p>
            </div>
          </div>
          <div class="trust-strip-item">
            <span class="trust-icon-box">🚚</span>
            <div>
              <strong>Frota Própria & Montagem Rápida</strong>
              <p>Sorocaba, Itu, Campinas, São Paulo e todo o interior.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Principal -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          
          <!-- Coluna 1: Sobre & Google Rating -->
          <div class="footer-col">
            <div class="brand-name" style="margin-bottom: 12px;">SINTETIZZA <span>EVENTOS</span></div>
            <p style="color: var(--color-text-secondary); font-size: 0.9rem; line-height: 1.6; margin-bottom: 14px;">
              Locação e montagem de palcos, tendas, som line array, iluminação cênica, painéis de LED, climatizadores e geradores de energia.
            </p>
            <div class="google-badge-card">
              <div class="google-stars">★★★★★</div>
              <div style="font-weight: 800; color: var(--color-text-primary); font-size: 0.95rem;">Nota 4.9 no Google</div>
              <div style="font-size: 0.8rem; color: var(--color-text-secondary);">(+128 avaliações reais de clientes)</div>
            </div>
          </div>

          <!-- Coluna 2: Navegação -->
          <div class="footer-col">
            <h4>Navegação</h4>
            <div class="footer-links">
              <a href="index.html">Página Inicial</a>
              <a href="produtos.html">Catálogo de Equipamentos</a>
              <a href="orcamento.html">Solicitar Orçamento Online</a>
              <a href="quem-somos.html">Quem Somos & Infraestrutura</a>
              <a href="contato.html">Fale Conosco</a>
              <a href="politica-de-privacidade.html">Política de Privacidade</a>
              <a href="termos-de-uso.html">Termos de Uso</a>
            </div>
          </div>

          <!-- Coluna 3: Soluções por Categoria -->
          <div class="footer-col">
            <h4>Soluções Técnicas</h4>
            <div class="footer-links">
              <a href="produtos.html?cat=estruturas">Palcos & Box Truss Q30/Q50</a>
              <a href="produtos.html?cat=coberturas">Tendas & Galpões Modulares</a>
              <a href="produtos.html?cat=audio">Sonorização Line Array</a>
              <a href="produtos.html?cat=iluminacao">Iluminação Cênica & Moving</a>
              <a href="produtos.html?cat=audiovisual">Painéis de LED P3.9 HD</a>
              <a href="produtos.html?cat=climatizacao">Climatizadores & Ventiladores</a>
              <a href="produtos.html?cat=energia">Geradores & Elétrica Pro</a>
              <a href="produtos.html?cat=seguranca">Arquibancadas & Estruturas</a>
            </div>
          </div>

          <!-- Coluna 4: Informações de Confiança & Contato -->
          <div class="footer-col">
            <h4>Atendimento & Empresa</h4>
            <div class="footer-contact-list">
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <div>
                  <strong>Razão Social:</strong><br>
                  <span>${SINTETIZZA_CONFIG.legalName}</span>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <div>
                  <strong>CNPJ:</strong> <span>${SINTETIZZA_CONFIG.cnpj}</span>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <div>
                  <strong>WhatsApp Comercial:</strong><br>
                  <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${encodeURIComponent(SINTETIZZA_CONFIG.whatsappDefaultMsg)}" target="_blank" rel="noopener" style="color: var(--color-success); font-weight: 700;">
                    ${SINTETIZZA_CONFIG.whatsappDisplay} (Clique p/ conversar)
                  </a>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <div>
                  <strong>Instagram Oficial:</strong><br>
                  <a href="${SINTETIZZA_CONFIG.instagramUrl}" target="_blank" rel="noopener" style="color: #E1306C; font-weight: 700;">
                    ${SINTETIZZA_CONFIG.instagram} ➔
                  </a>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <div>
                  <strong>Telefone Fixo / Celular:</strong><br>
                  <a href="tel:${SINTETIZZA_CONFIG.phoneRaw}" style="font-weight: 700;">
                    ${SINTETIZZA_CONFIG.phone}
                  </a>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <div>
                  <strong>E-mail:</strong><br>
                  <a href="mailto:${SINTETIZZA_CONFIG.emailQuotes}">
                    ${SINTETIZZA_CONFIG.emailQuotes}
                  </a>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-bullet">•</span>
                <div>
                  <strong>Localização:</strong> <span>${SINTETIZZA_CONFIG.address}</span>
                </div>
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

        <section class="footer-client-marquee" aria-label="Marcas atendidas pela Sintetizza">
          <span class="footer-client-label">Marcas atendidas</span>
          <div class="footer-client-viewport">
            <div class="footer-client-track">
              <div class="footer-client-set">
                ${footerLogos}
              </div>
              <div class="footer-client-set" aria-hidden="true">
                ${footerLogosDuplicate}
              </div>
            </div>
          </div>
        </section>

        <div class="footer-bottom">
          <div>
            &copy; ${new Date().getFullYear()} ${SINTETIZZA_CONFIG.legalName} - CNPJ: ${SINTETIZZA_CONFIG.cnpj}. Todos os direitos reservados.
          </div>
          <div class="footer-bottom-links">
            <a href="politica-de-privacidade.html">Privacidade (LGPD)</a>
            <span>•</span>
            <a href="termos-de-uso.html">Termos de Uso</a>
            <span>•</span>
            <a href="orcamento.html" style="color: #0F172A; font-weight: 800;">Solicitar Orçamento ➔</a>
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

  const count = QuoteCart.getItemCount();

  const bar = document.createElement("div");
  bar.id = "mobile-sticky-actions";
  bar.className = "mobile-sticky-actions";
  bar.innerHTML = `
    <a href="tel:${SINTETIZZA_CONFIG.phoneRaw}" class="mobile-sticky-btn btn-call" title="Ligar para Sintetizza">
      <span class="icon">📞</span>
      <span>Ligar</span>
    </a>
    <a href="https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${encodeURIComponent(SINTETIZZA_CONFIG.whatsappDefaultMsg)}" target="_blank" rel="noopener" class="mobile-sticky-btn btn-wa" title="WhatsApp Rápido">
      <span class="icon">💬</span>
      <span>WhatsApp</span>
    </a>
    <a href="orcamento.html" class="mobile-sticky-btn btn-quote" title="Ver Orçamento">
      <span class="icon">📋</span>
      <span>Orçamento</span>
      <span class="mobile-sticky-badge" id="mobile-bar-quote-badge">${count}</span>
    </a>
  `;

  document.body.appendChild(bar);
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

  const imageSrc = product.image || "assets/images/logo.png";

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
            ${isAdded ? '✓ No Orçamento' : '+ Adicionar'}
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
            ${r.verified ? '<span class="review-badge-verified" title="Cliente Verificado">✓ Verificado</span>' : ''}
          </div>
          <div class="review-role">${r.role} • ${r.city}</div>
        </div>
      </div>
      <div class="review-rating">
        <div class="review-stars">★★★★★</div>
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
  toast.innerHTML = `<div>${message}</div>`;

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
      btnElem.innerHTML = "✓ Adicionado";
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
