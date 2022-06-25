/// <reference path="./products.js" />

/**
 *
 * @param {string} selector
 * @param {typeof products} products
 */
function initProductsCard(selector, products) {
  const parent = document.getElementById(selector);
  parent.innerHTML = "";

  for (let i = 0; i < products.length; i += 1) {
    const product = products[i];
    const card = document.createElement("div");
    card.className = "card";
    
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = `/images/${product.img_url}`;
    img.setAttribute("alt", product.name);
    figure.append(img);
    card.append(figure);
    
    const info = document.createElement('div')
    info.className = 'info'
    const name = document.createElement('header')
    name.innerText = product.name
    const detail = document.createElement('div')
    detail.className = 'detail'
    detail.innerText = product.detail
    const price = document.createElement('p')
    price.className = 'price'
    price.innerText = format(product.price)
    const footer = document.createElement('footer')
    const add = document.createElement('button')
    add.innerText = 'Adicionar'
    add.onclick = function() {
      cart.addProduct(product)
    }

    footer.append(add)
    info.append(name, detail, price, footer)
    card.append(info);

    parent.append(card)
  }
}

initProductsCard('products-cards', products)