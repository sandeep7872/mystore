const products = JSON.parse(localStorage.getItem("products") || "[]");
const cart = JSON.parse(localStorage.getItem("cart") || "[]");

function renderProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";
  products.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "border p-3 rounded bg-white shadow";
    card.innerHTML = `
      <img src="${p.image}" class="h-32 w-full object-cover rounded" />
      <h3 class="font-bold mt-2">${p.name}</h3>
      <p class="text-green-700">₹${p.price}</p>
      <button onclick="addToCart(${i})" class="mt-2 bg-green-500 text-white px-3 py-1 rounded">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(products[index].name + " added to cart");
}

renderProducts();
