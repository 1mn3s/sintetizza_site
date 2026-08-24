/**
 * Sintetizza Eventos - Lógica do Fluxo de Solicitação de Orçamento
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("quote-page-root")) return;

  initQuotePage();
});

function initQuotePage() {
  renderQuoteItemsList();
  setupQuoteForm();
  setupCustomItemModal();

  // Ouve mudanças na lista
  window.addEventListener("quoteUpdated", () => {
    renderQuoteItemsList();
  });
}

// Renderiza a lista de itens selecionados
function renderQuoteItemsList() {
  const container = document.getElementById("quote-items-container");
  const countDisplay = document.getElementById("quote-total-items-badge");
  const emptyState = document.getElementById("quote-empty-state");
  const itemsSection = document.getElementById("quote-items-section");
  const sidebarCount = document.getElementById("sidebar-items-count");
  
  if (!container) return;

  const items = QuoteCart.getItems();
  const totalCount = QuoteCart.getItemCount();

  if (countDisplay) countDisplay.textContent = `${totalCount} item(s)`;
  if (sidebarCount) sidebarCount.textContent = totalCount;

  if (items.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (itemsSection) itemsSection.style.display = "none";
    container.innerHTML = "";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (itemsSection) itemsSection.style.display = "block";

  container.innerHTML = items.map(item => `
    <div class="quote-item-row" data-id="${item.id}">
      <div class="quote-item-info">
        <img src="${item.image || 'assets/images/icon.png'}" alt="${item.name}" class="quote-item-thumb">
        <div>
          <div class="quote-item-title">${item.name}</div>
          <div class="quote-item-cat">${item.categoryLabel || 'Solução'} ${item.notes ? `• <em>Obs: ${item.notes}</em>` : ''}</div>
        </div>
      </div>

      <div class="flex items-center gap-md">
        <div class="quote-qty-controls">
          <button type="button" class="qty-btn" onclick="handleUpdateQty('${item.id}', ${item.quantity - 1})" title="Diminuir">-</button>
          <span class="qty-display">${item.quantity}</span>
          <button type="button" class="qty-btn" onclick="handleUpdateQty('${item.id}', ${item.quantity + 1})" title="Aumentar">+</button>
        </div>

        <button type="button" class="quote-item-remove" onclick="handleRemoveItem('${item.id}')" title="Remover item">
          🗑️
        </button>
      </div>
    </div>
  `).join("");
}

// Manipuladores de Ação de Quantidade
window.handleUpdateQty = function(id, qty) {
  QuoteCart.updateQuantity(id, qty);
};

window.handleRemoveItem = function(id) {
  QuoteCart.removeItem(id);
  showToast("Item removido do orçamento.");
};

window.handleClearQuote = function() {
  if (confirm("Deseja realmente limpar todos os itens da solicitação de orçamento?")) {
    QuoteCart.clear();
    showToast("Lista de orçamento limpa com sucesso.");
  }
};

// Configuração do formulário de envio de orçamento
function setupQuoteForm() {
  const form = document.getElementById("quote-request-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const items = QuoteCart.getItems();
    if (items.length === 0) {
      alert("Por favor, adicione pelo menos um item ou especifique sua necessidade no formulário antes de enviar.");
      return;
    }

    const formData = {
      clientName: form.clientName.value.trim(),
      clientEmail: form.clientEmail.value.trim(),
      clientPhone: form.clientPhone.value.trim(),
      clientCompany: form.clientCompany.value.trim() || "Pessoa Física",
      eventType: form.eventType.value,
      eventDate: form.eventDate.value || "A definir",
      eventCity: form.eventCity.value.trim() || "Não informado",
      eventAudience: form.eventAudience.value.trim() || "Não informado",
      observations: form.observations.value.trim() || "Nenhuma observação adicional",
      items: items
    };

    // Monta o resumo formatado
    const summaryText = buildQuoteSummaryText(formData);

    // Integração 1: Envio por E-mail (mailto estruturado + feedback)
    const emailSubject = encodeURIComponent(`Solicitação de Orçamento - ${formData.clientName} [${formData.eventType}]`);
    const emailBody = encodeURIComponent(summaryText);
    const mailtoUrl = `mailto:${SINTETIZZA_CONFIG.emailQuotes}?subject=${emailSubject}&body=${emailBody}`;

    // Integração 2: Envio por WhatsApp (Link direto com mensagem pronta)
    const whatsappMsg = encodeURIComponent(summaryText);
    const whatsappUrl = `https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${whatsappMsg}`;

    // Exibe modal de confirmação com opções de canal
    showQuoteSuccessModal(formData, mailtoUrl, whatsappUrl);
  });
}

// Constrói o texto do orçamento formatado
function buildQuoteSummaryText(data) {
  let text = `=========================================\n`;
  text += `🎯 SOLICITAÇÃO DE ORÇAMENTO - SINTETIZZA EVENTOS\n`;
  text += `=========================================\n\n`;
  
  text += `📋 DADOS DO CLIENTE:\n`;
  text += `• Nome: ${data.clientName}\n`;
  text += `• Empresa / Órgão: ${data.clientCompany}\n`;
  text += `• E-mail: ${data.clientEmail}\n`;
  text += `• Telefone/WhatsApp: ${data.clientPhone}\n\n`;

  text += `🎪 DADOS DO EVENTO:\n`;
  text += `• Tipo de Evento: ${data.eventType}\n`;
  text += `• Data Prevista: ${data.eventDate}\n`;
  text += `• Cidade / Local: ${data.eventCity}\n`;
  text += `• Público Estimado: ${data.eventAudience} pessoas\n\n`;

  text += `📦 ITENS E ESTRUTURAS SELECIONADAS:\n`;
  data.items.forEach((item, idx) => {
    text += `${idx + 1}. [Qtd: ${item.quantity}x] ${item.name} (${item.categoryLabel || 'Geral'})\n`;
    if (item.notes) text += `   Observação: ${item.notes}\n`;
  });

  text += `\n💬 OBSERVAÇÕES & NECESSIDADES ADICIONAIS:\n`;
  text += `${data.observations}\n\n`;
  text += `Data da Solicitação: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}\n`;
  text += `=========================================`;

  return text;
}

// Modal de sucesso de envio de orçamento
function showQuoteSuccessModal(data, mailtoUrl, whatsappUrl) {
  let modal = document.getElementById("quote-success-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "quote-success-modal";
    modal.className = "modal-backdrop";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-dialog" style="max-width: 600px;">
      <div class="modal-header">
        <h3 style="color: var(--color-text-primary); font-size: 1.3rem;">🎉 Solicitação Gerada com Sucesso!</h3>
        <button class="modal-close-btn" onclick="closeQuoteModal()">&times;</button>
      </div>
      <div class="modal-body">
        <p style="color: var(--color-text-secondary); margin-bottom: 20px;">
          Olá <strong>${data.clientName}</strong>! Sua lista contendo <strong>${data.items.length} item(s)</strong> foi consolidada. Escolha como prefere enviar para nosso departamento de engenharia e orçamentos:
        </p>

        <div class="flex flex-col gap-md" style="margin-bottom: 24px;">
          <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp btn-block btn-lg" onclick="handleFinishQuote()">
            📱 Enviar no WhatsApp da Sintetizza (Atendimento Imediato)
          </a>

          <a href="${mailtoUrl}" class="btn btn-dark btn-block btn-lg" onclick="handleFinishQuote()">
            ✉️ Enviar via E-mail Corporativo (${SINTETIZZA_CONFIG.emailQuotes})
          </a>
        </div>

        <div style="background: var(--color-surface-alt); padding: 16px; border-radius: var(--radius-md); font-size: 0.85rem; color: var(--color-text-secondary);">
          <strong>ℹ️ O que acontece agora?</strong><br>
          Nossa equipe técnica comercial receberá a lista detalhada com seus requisitos de infraestrutura e enviará a proposta orçamentária completa em até 2 horas úteis.
        </div>
      </div>
    </div>
  `;

  modal.classList.add("is-active");
}

window.closeQuoteModal = function() {
  const modal = document.getElementById("quote-success-modal");
  if (modal) modal.classList.remove("is-active");
};

window.handleFinishQuote = function() {
  setTimeout(() => {
    closeQuoteModal();
    showToast("Orçamento enviado! Nossa equipe entrará em contato.", "success");
  }, 1000);
};

// Modal de adicionar item personalizado
function setupCustomItemModal() {
  const customBtn = document.getElementById("btn-add-custom-item");
  if (!customBtn) return;

  customBtn.addEventListener("click", () => {
    const itemName = prompt("Qual estrutura, equipamento ou serviço específico você precisa?");
    if (itemName && itemName.trim()) {
      const itemNotes = prompt("Alguma especificação técnica ou metragem? (Opcional):", "");
      QuoteCart.addCustomItem(itemName, itemNotes || "");
      showToast(`"${itemName}" adicionado como item personalizado!`, "success");
    }
  });
}
