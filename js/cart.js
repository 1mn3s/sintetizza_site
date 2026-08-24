/**
 * Sintetizza Eventos - Gerenciador de Lista de Orçamento (Quote / Cart Manager)
 */

const QuoteCart = {
  STORAGE_KEY: "sintetizza_quote_items",

  // Carrega itens do localStorage
  getRawItems() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Erro ao ler carrinho de orçamento:", e);
      return [];
    }
  },

  // Salva no localStorage e notifica ouvintes
  saveItems(items) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
      this.dispatchUpdateEvent();
    } catch (e) {
      console.error("Erro ao salvar itens no localStorage:", e);
    }
  },

  // Retorna itens hidratados com detalhes do produto
  getItems() {
    const raw = this.getRawItems();
    return raw.map(item => {
      if (item.isCustom) {
        return {
          id: item.id,
          name: item.name,
          categoryLabel: "Item Personalizado",
          quantity: item.quantity || 1,
          notes: item.notes || "",
          isCustom: true,
          image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80"
        };
      }
      const product = getProductById(item.id);
      if (!product) {
        return {
          id: item.id,
          name: item.name || "Item Selecionado",
          categoryLabel: "Geral",
          quantity: item.quantity || 1,
          notes: item.notes || "",
          image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80"
        };
      }
      return {
        ...product,
        quantity: item.quantity || 1,
        notes: item.notes || ""
      };
    });
  },

  // Total de itens distintos ou soma de quantidades
  getItemCount() {
    const items = this.getRawItems();
    return items.reduce((acc, item) => acc + (Number(item.quantity) || 1), 0);
  },

  // Verifica se produto já está na lista
  hasItem(productId) {
    const items = this.getRawItems();
    return items.some(item => item.id === productId);
  },

  // Adiciona produto
  addItem(productId, quantity = 1, notes = "") {
    const items = this.getRawItems();
    const existingIndex = items.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      items[existingIndex].quantity = (Number(items[existingIndex].quantity) || 1) + Number(quantity);
      if (notes) items[existingIndex].notes = notes;
    } else {
      const product = getProductById(productId);
      items.push({
        id: productId,
        name: product ? product.name : "Item",
        quantity: Number(quantity) || 1,
        notes: notes || "",
        isCustom: false
      });
    }

    this.saveItems(items);
    return true;
  },

  // Adiciona item customizado
  addCustomItem(name, notes = "", quantity = 1) {
    if (!name || !name.trim()) return false;
    const items = this.getRawItems();
    const customId = `custom-${Date.now()}`;
    items.push({
      id: customId,
      name: name.trim(),
      quantity: Number(quantity) || 1,
      notes: notes.trim(),
      isCustom: true
    });
    this.saveItems(items);
    return true;
  },

  // Atualiza quantidade
  updateQuantity(productId, quantity) {
    const qty = parseInt(quantity, 10);
    if (qty <= 0) {
      return this.removeItem(productId);
    }
    const items = this.getRawItems();
    const target = items.find(item => item.id === productId);
    if (target) {
      target.quantity = qty;
      this.saveItems(items);
    }
  },

  // Remove produto
  removeItem(productId) {
    let items = this.getRawItems();
    items = items.filter(item => item.id !== productId);
    this.saveItems(items);
  },

  // Limpa tudo
  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.dispatchUpdateEvent();
  },

  // Dispara evento customizado no window
  dispatchUpdateEvent() {
    const event = new CustomEvent("quoteUpdated", {
      detail: {
        count: this.getItemCount(),
        items: this.getItems()
      }
    });
    window.dispatchEvent(event);
  }
};
