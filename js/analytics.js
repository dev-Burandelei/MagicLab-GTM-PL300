window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, ecommerce = {}) {
  window.dataLayer.push({ ecommerce: null });

  window.dataLayer.push({
    event: eventName,
    ecommerce
  });

  // Ajuda a testar os eventos antes de configurar o GTM.
  console.log("Evento enviado:", eventName, ecommerce);
}

function toGA4Item(product, quantity = 1) {
  return {
    item_id: product.id,
    item_name: product.name,
    item_category: product.category,
    price: product.price,
    quantity
  };
}