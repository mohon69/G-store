// Load Heading
const heading = localStorage.getItem('storeHeading');
if (heading) {
  document.getElementById('store-title').innerText = heading;
}

// Load Button Names
const btn1Name = localStorage.getItem('btn1Name');
const btn2Name = localStorage.getItem('btn2Name');
const btn3Name = localStorage.getItem('btn3Name');
const btn4Name = localStorage.getItem('btn4Name');

if (btn1Name) document.getElementById('top-sell').innerText = btn1Name;
if (btn2Name) document.getElementById('new').innerText = btn2Name;
if (btn3Name) document.getElementById('sell').innerText = btn3Name;
if (btn4Name) document.getElementById('category').innerText = btn4Name;

// Load Banner
const bannerImage = localStorage.getItem('bannerImage');
if (bannerImage) {
  document.getElementById('banner-img').src = bannerImage;
}

// Load Products
const products = JSON.parse(localStorage.getItem('products')) || [];
const productList = document.getElementById('product-list');

products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <p>Price: ${product.price}TK</p>
    <button>Buy Now</button>
  `;
  productList.appendChild(productDiv);
});