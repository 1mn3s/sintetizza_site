/**
 * =============================================================================
 * SINTETIZZA - LÓGICA DE ORÇAMENTO & ENVIO MULTICANAL
 * =============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("quote-page-root")) return;

  initQuotePage();
});

function initQuotePage() {
  renderQuoteItemsList();
  setupQuoteForm();
  setupCustomItemModal();

  window.addEventListener("quoteUpdated", () => {
    renderQuoteItemsList();
  });
}

// Renderiza a lista de itens selecionados com thumbnails reais
function renderQuoteItemsList() {
  const container = document.getElementById("quote-items-container");
  const countDisplay = document.getElementById("quote-total-items-badge");
  const emptyState = document.getElementById("quote-empty-state");
  const itemsSection = document.getElementById("quote-items-section");
  
  if (!container) return;

  const items = QuoteCart.getItems();
  const totalCount = QuoteCart.getItemCount();

  if (countDisplay) countDisplay.textContent = `${totalCount} item(s) selecionado(s)`;

  if (items.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (itemsSection) itemsSection.style.display = "none";
    container.innerHTML = "";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (itemsSection) itemsSection.style.display = "block";

  container.innerHTML = items.map(item => {
    const thumbImg = item.image || item.fallbackImage || "assets/images/original/principal-novo-2.png";
    return `
      <div class="quote-item-row" data-id="${item.id}">
        <div class="quote-item-info">
          <div class="quote-item-thumb">
            <img src="${thumbImg}" alt="${item.name}" onerror="this.src='assets/images/original/principal-novo-2.png'">
          </div>
          <div>
            <div class="quote-item-title">${item.name}</div>
            <div class="quote-item-cat">${item.categoryLabel || 'Item'} ${item.notes ? `• <em>${item.notes}</em>` : ''}</div>
          </div>
        </div>

        <div class="flex items-center gap-md">
          <div class="quote-qty-controls">
            <button type="button" class="qty-btn" onclick="handleUpdateQty('${item.id}', ${item.quantity - 1})" title="Diminuir">-</button>
            <span class="qty-display">${item.quantity}</span>
            <button type="button" class="qty-btn" onclick="handleUpdateQty('${item.id}', ${item.quantity + 1})" title="Aumentar">+</button>
          </div>

          <button type="button" class="quote-item-remove" onclick="handleRemoveItem('${item.id}')" title="Remover item">
            &times;
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Manipuladores
window.handleUpdateQty = function(id, qty) {
  QuoteCart.updateQuantity(id, qty);
};

window.handleRemoveItem = function(id) {
  QuoteCart.removeItem(id);
  showToast("Item removido do orçamento.");
};

window.handleClearQuote = function() {
  if (confirm("Deseja limpar todos os itens da solicitação de orçamento?")) {
    QuoteCart.clear();
    showToast("Lista de orçamento limpa com sucesso.");
  }
};

// Formulário de envio
function setupQuoteForm() {
  const form = document.getElementById("quote-request-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const items = QuoteCart.getItems();
    if (items.length === 0) {
      alert("Por favor, adicione pelo menos um item ao orçamento antes de enviar.");
      return;
    }

    const formData = {
      clientName: form.clientName.value.trim(),
      clientEmail: form.clientEmail.value.trim(),
      clientPhone: form.clientPhone.value.trim(),
      clientCompany: form.clientCompany.value.trim() || "Não informado",
      eventType: form.eventType.value,
      eventDate: form.eventDate.value || "A definir",
      eventCity: form.eventCity.value.trim() || "Não informado",
      eventAudience: form.eventAudience.value.trim() || "Não informado",
      observations: form.observations.value.trim() || "Nenhuma",
      items: items
    };

    const summaryText = buildQuoteSummaryText(formData);

    const emailSubject = encodeURIComponent(`Solicitação de Orçamento - ${formData.clientName} [${formData.eventType}]`);
    const emailBody = encodeURIComponent(summaryText);
    const mailtoUrl = `mailto:${SINTETIZZA_CONFIG.emailQuotes}?subject=${emailSubject}&body=${emailBody}`;

    const whatsappMsg = encodeURIComponent(summaryText);
    const whatsappUrl = `https://wa.me/${SINTETIZZA_CONFIG.whatsappNumber}?text=${whatsappMsg}`;

    showQuoteSuccessModal(formData, mailtoUrl, whatsappUrl);
  });
}

function buildQuoteSummaryText(data) {
  let text = `=========================================\n`;
  text += `SOLICITAÇÃO DE ORÇAMENTO - SINTETIZZA EVENTOS\n`;
  text += `=========================================\n\n`;
  
  text += `*DADOS DO CLIENTE:*\n`;
  text += `• Nome: ${data.clientName}\n`;
  text += `• Empresa / Produtora: ${data.clientCompany}\n`;
  text += `• E-mail: ${data.clientEmail}\n`;
  text += `• Telefone / WhatsApp: ${data.clientPhone}\n\n`;

  text += `*DADOS DO EVENTO:*\n`;
  text += `• Tipo de Evento: ${data.eventType}\n`;
  text += `• Data Prevista: ${data.eventDate}\n`;
  text += `• Cidade / Local: ${data.eventCity}\n`;
  text += `• Público Estimado: ${data.eventAudience}\n\n`;

  text += `*EQUIPAMENTOS E ESTRUTURAS SOLICITADAS:*\n`;
  data.items.forEach((item, idx) => {
    text += `${idx + 1}. [${item.quantity}x] ${item.name} (${item.categoryLabel || 'Item'})\n`;
    if (item.notes) text += `   Obs: ${item.notes}\n`;
  });

  text += `\n*OBSERVAÇÕES TÉCNICAS:*\n`;
  text += `${data.observations}\n`;
  text += `=========================================`;

  return text;
}

function showQuoteSuccessModal(data, mailtoUrl, whatsappUrl) {
  let modal = document.getElementById("quote-success-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "quote-success-modal";
    modal.className = "modal-backdrop";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--color-slate-950);">
          Orçamento Pré-configurado!
        </h3>
        <button class="modal-close-btn" onclick="closeQuoteModal()" aria-label="Fechar">&times;</button>
      </div>
      <div class="modal-body">
        <p style="color: var(--color-slate-600); margin-bottom: 20px; font-size: 1rem; line-height: 1.6;">
          Olá <strong>${data.clientName}</strong>! Sua lista técnica com <strong>${data.items.length} item(s)</strong> está pronta. Escolha seu canal preferido para envio imediato:
        </p>

        <div class="flex flex-col gap-md" style="margin-bottom: 20px;">
          <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp btn-block btn-lg" onclick="handleFinishQuote()">
            <span>Enviar no WhatsApp (Atendimento Mais Rápido)</span>
          </a>

          <a href="${mailtoUrl}" class="btn btn-dark btn-block btn-lg" onclick="handleFinishQuote()">
            <span>Enviar por E-mail Formal</span>
          </a>
        </div>

        <p style="font-size: 0.85rem; color: var(--color-slate-500); text-align: center;">
          Plantão comercial: Sorocaba e Região SP • Retorno ágil em horário comercial.
        </p>
      </div>
    </div>
  `;

  modal.classList.add("is-active");
}

function showCustomItemModal() {
  let modal = document.getElementById("custom-item-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "custom-item-modal";
    modal.className = "modal-backdrop";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-header">
        <div>
          <span class="badge badge-brand-soft" style="margin-bottom: 8px;">Item Personalizado</span>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--color-slate-950);">
            Adicionar item fora do catálogo
          </h3>
        </div>
        <button class="modal-close-btn" onclick="closeCustomItemModal()" aria-label="Fechar">&times;</button>
      </div>
      <div class="modal-body">
        <form id="custom-item-form" class="quote-form" style="gap: 16px;">
          <div class="form-group">
            <label class="form-label" for="customItemName">Nome do item <span class="required">*</span></label>
            <input type="text" id="customItemName" name="customItemName" class="form-control" placeholder="Ex: praticável 2x1, tenda 6x6, fechamento especial" required>
            <span class="form-helper">Descreva o equipamento, medida ou estrutura desejada.</span>
          </div>

          <div class="field-grid" style="grid-template-columns: 140px 1fr;">
            <div class="form-group">
              <label class="form-label" for="customItemQty">Quantidade</label>
              <input type="number" id="customItemQty" name="customItemQty" class="form-control" min="1" value="1" inputmode="numeric">
            </div>

            <div class="form-group">
              <label class="form-label" for="customItemNotes">Observações</label>
              <input type="text" id="customItemNotes" name="customItemNotes" class="form-control" placeholder="Metragem, acabamento, cor, prazo ou detalhe técnico">
            </div>
          </div>

          <div class="quote-inline-actions">
            <button type="submit" class="btn btn-primary btn-block">
              Salvar item personalizado
            </button>
            <button type="button" class="btn btn-outline btn-block" onclick="closeCustomItemModal()">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  modal.classList.add("is-active");

  const form = document.getElementById("custom-item-form");
  const nameInput = document.getElementById("customItemName");
  if (nameInput) nameInput.focus();

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const itemName = form.customItemName.value.trim();
      const itemNotes = form.customItemNotes.value.trim();
      const quantity = Math.max(1, Number(form.customItemQty.value) || 1);

      if (!itemName) {
        showToast("Informe o nome do item personalizado.", "error");
        return;
      }

      QuoteCart.addCustomItem(itemName, itemNotes, quantity);
      closeCustomItemModal();
      showToast(`"${itemName}" adicionado à sua lista!`, "success");
    });
  }
}

window.closeQuoteModal = function() {
  const modal = document.getElementById("quote-success-modal");
  if (modal) modal.classList.remove("is-active");
};

window.closeCustomItemModal = function() {
  const modal = document.getElementById("custom-item-modal");
  if (modal) modal.classList.remove("is-active");
};

window.handleFinishQuote = function() {
  setTimeout(() => {
    closeQuoteModal();
    showToast("Orçamento encaminhado com sucesso!", "success");
  }, 800);
};

function setupCustomItemModal() {
  const customBtn = document.getElementById("btn-add-custom-item");
  if (!customBtn) return;

  customBtn.addEventListener("click", () => {
    showCustomItemModal();
  });
}

