/**
 * =============================================================================
 * SINTETIZZA - GERENCIADOR DE ORÇAMENTO (CART / QUOTE)
 * =============================================================================
 */

const QuoteCart = {
  STORAGE_KEY: "sintetizza_quote_items",

  getRawItems() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveItems(items) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
      this.dispatchUpdateEvent();
    } catch (e) {}
  },

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
          isCustom: true
        };
      }
      const product = getProductById(item.id);
      if (!product) {
        return {
          id: item.id,
          name: item.name || "Item Selecionado",
          categoryLabel: "Geral",
          quantity: item.quantity || 1,
          notes: item.notes || ""
        };
      }
      return {
        ...product,
        quantity: item.quantity || 1,
        notes: item.notes || ""
      };
    });
  },

  getItemCount() {
    const items = this.getRawItems();
    return items.reduce((acc, item) => acc + (Number(item.quantity) || 1), 0);
  },

  hasItem(productId) {
    const items = this.getRawItems();
    return items.some(item => item.id === productId);
  },

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

  removeItem(productId) {
    let items = this.getRawItems();
    items = items.filter(item => item.id !== productId);
    this.saveItems(items);
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.dispatchUpdateEvent();
  },

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
