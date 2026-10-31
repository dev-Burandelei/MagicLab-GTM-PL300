const productList = document.querySelector("#product-list");
const cartCount = document.querySelector("#cart-count");
const cartPanel = document.querySelector("#cart-panel");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const overlay = document.querySelector("#overlay");

let cart = [];

const currency = value =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

function renderProducts(category = "todos") {
  const filtered = category === "todos"
    ? products
    : products.filter(product => product.category === category);

  productList.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">${product.icon}</div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-bottom">
          <strong>${currency(product.price)}</strong>
          <button data-add="${product.id}">Adicionar</button>
        </div>
      </div>
    </article>
  `).join("");

  trackEvent("view_item_list", {
    item_list_name: category === "todos" ? "Todos os produtos" : category,
    items: filtered.map(product => toGA4Item(product))
  });
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  trackEvent("add_to_cart", {
    currency: "BRL",
    value: product.price,
    items: [toGA4Item(product)]
  });

  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  cartCount.textContent = totalItems;
  cartTotal.textContent = currency(total);

  cartItems.innerHTML = cart.length
    ? cart.map(item => `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <p>${item.quantity} × ${currency(item.price)}</p>
          </div>
          <button class="remove-item" data-remove="${item.id}">
            Remover
          </button>
        </div>
      `).join("")
    : "<p>Seu carrinho está vazio.</p>";
}

function removeFromCart(productId) {
  const item = cart.find(product => product.id === productId);
  if (!item) return;

  trackEvent("remove_from_cart", {
    currency: "BRL",
    value: item.price,
    items: [toGA4Item(item)]
  });

  cart = cart.filter(product => product.id !== productId);
  renderCart();
}

function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.add("visible");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  trackEvent("view_cart", {
    currency: "BRL",
    value: total,
    items: cart.map(item => toGA4Item(item, item.quantity))
  });
}

function closeCart() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("visible");
}

function checkout() {
  if (cart.length === 0) {
    alert("Adicione produtos ao carrinho primeiro.");
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  trackEvent("begin_checkout", {
    currency: "BRL",
    value: total,
    items: cart.map(item => toGA4Item(item, item.quantity))
  });

  alert(
    "Checkout demonstrativo iniciado!\n\n" +
    "Nenhum pagamento foi realizado."
  );
}

productList.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(button.dataset.add);
});

cartItems.addEventListener("click", event => {
  const button = event.target.closest("[data-remove]");
  if (button) removeFromCart(button.dataset.remove);
});

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    renderProducts(button.dataset.category);
  });
});

document.querySelector("#cart-button").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
document.querySelector("#checkout-button").addEventListener("click", checkout);
overlay.addEventListener("click", closeCart);

renderProducts();
renderCart();