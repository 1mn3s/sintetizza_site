
(() => {
  const form = document.querySelector("[data-lead-form]");
  if (!form) return;

  const service = document.body.dataset.service || "evento";
  const serviceLabel = document.body.dataset.serviceLabel || service;
  const whatsapp = "5515997339422";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const nome = (data.get("nome") || "").toString().trim();
    const telefone = (data.get("telefone") || "").toString().trim();
    const cidade = (data.get("cidade") || "").toString().trim();
    const dataEvento = (data.get("dataEvento") || "").toString().trim();
    const servicoEscolhido = (data.get("servico") || "").toString().trim();
    const leadService = servicoEscolhido || serviceLabel;

    if (!nome || !telefone || !cidade) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      lead_service: leadService,
      lead_city: cidade
    });

    const params = new URLSearchParams(location.search);
    const origem = params.get("utm_campaign") || params.get("gclid") || "site";
    const mensagem = [
      "Olá! Quero solicitar um orçamento pela página da Sintetizza.",
      "",
      "Serviço: " + leadService,
      "Nome: " + nome,
      "Telefone: " + telefone,
      "Cidade: " + cidade,
      "Data do evento: " + (dataEvento || "A definir"),
      "Origem: " + origem
    ].join("\n");

    const waUrl = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(mensagem);
    const opened = window.open(waUrl, "_blank", "noopener,noreferrer");

    if (!opened) location.href = waUrl;
    window.setTimeout(() => {
      location.href = "obrigado.html?servico=" + encodeURIComponent(service);
    }, 350);
  });
})();
