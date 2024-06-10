const products = {
    Haushalt: [
        { name: 'Mixer', price: 5.99 },
        { name: 'Grill', price: 19.99 },
        { name: 'Waschmaschine', price: 69.99 },
        { name: 'Staubsauger', price: 399.99 },
    ],
    Spielzeug: [
        { name: 'Legoset', price: 7.49 },
        { name: 'Spielzeugauto', price: 29.99 },
        { name: 'Fußball', price: 89.99 },
        { name: 'Rutsche', price: 599.99 },
    ],
    Technik: [
        { name: 'SD-Karte', price: 9.99 },
        { name: 'CPU-Lüfter', price: 39.99 },
        { name: 'Tastatur (Mechanisch)', price: 149.99 },
        { name: 'Smartphone', price: 999.99 },
    ],
    Wohnen: [
        { name: 'Kissen', price: 11.99 },
        { name: 'Lampe', price: 49.99 },
        { name: 'Hocker', price: 199.99 },
        { name: 'Sofa', price: 899.99 },
    ]
};

let cart = [];

function showCategory(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products[category].forEach((product, index) => {
        productList.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Preis: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${category}', ${index})">In den Warenkorb</button>
            </div>
        `;
    });
}

function addToCart(category, index) {
    const product = products[category][index];
    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <li>
                ${item.name} - $${item.price.toFixed(2)}
                <button onclick="removeFromCart(${index})">x</button>
            </li>
        `;
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Gesamtpreis: $${total.toFixed(2)}`;
}
function generateOffer() {
    //Open window
    const offerWindow = window.open('', '', 'width=600,height=400');

    //random offer number
    const offerNumber = Math.floor(Math.random() * 1000000);

    //Get the current date 
    const currentDate = new Date().toLocaleDateString('de-DE');
    const validUntilDate = new Date();
    validUntilDate.setDate(validUntilDate.getDate() + 30);

    //HTML content for offer window
    offerWindow.document.write('<html><head><title>Angebot</title></head><body>');
    offerWindow.document.write('<h1>Ihr Angebot</h1>');
    offerWindow.document.write(`<p>Nummer: ${offerNumber}</p>`);
    offerWindow.document.write('<p>Sehr geehrte Kunde XY,</p>');
    offerWindow.document.write('<p>Ich danke Ihnen für Ihre Anfrage. Bezugnehmend die Anfrage vom ' + currentDate + ' biete ich Ihnen folgende Leistungen an:</p>');
    offerWindow.document.write('<ul>');

    let total = 0;

    // Loop through each item in the cart
    cart.forEach(item => {
        // Generate a random discount percentage between 1% and 30%
        const discount = Math.floor(Math.random() * 30) + 1;
        // Calculate the discounted price
        const discountedPrice = (item.price * (1 - discount / 100)).toFixed(2);
        // Add the discounted price to the total
        total += parseFloat(discountedPrice);

        // Write the item details
        offerWindow.document.write(`<li>Bezeichnung der Leistung: ${item.name}</li>`);
        offerWindow.document.write(`<li>Umfang/Menge: 1 Stück</li>`);
        offerWindow.document.write(`<li>Preis: $${item.price.toFixed(2)}</li>`);
        offerWindow.document.write(`<li>Rabatt: ${discount}%</li>`);
        offerWindow.document.write(`<li>Rabattierter Preis: $${discountedPrice}</li>`);
        offerWindow.document.write('<br>');
    });

    offerWindow.document.write('</ul>');
    //subtotal
    offerWindow.document.write(`<p>Zwischensumme: $${total.toFixed(2)}</p>`);
    offerWindow.document.write('<p>Zusatzkosten: Keine</p>');
    offerWindow.document.write(`<p>Datum des Angebots: ${currentDate}</p>`);
    offerWindow.document.write(`<p>Gültigkeitsdauer: ${validUntilDate.toLocaleDateString('de-DE')}</p>`);
    //delivery date 
    offerWindow.document.write('<p>Lieferdatum: Nach Absprache</p>');
    offerWindow.document.write('<p>Wir freuen uns auf Ihre Rückmeldung und stehen für Rückfragen zur Verfügung.</p>');
    offerWindow.document.write('<p>Unsere Allgemeinen Geschäftsbedingungen finden Sie auf unserer Webseite.</p>');
    offerWindow.document.write('<p>Zahlungsbedingungen: 7 Tage nach Erfüllung der Leistung</p>');
    offerWindow.document.write('<p>Eigentumsvorbehalt, Erfüllungsort, Gerichtsstand: Laut AGB</p>');
    offerWindow.document.write('</body></html>');
    offerWindow.document.close();
}
    // Store the offer in local storage
    const offer = {
        number: offerNumber,
        date: currentDate,
        validUntil: validUntilDate.toLocaleDateString('de-DE'),
        items: cart,
        totalPrice: total.toFixed(2)
    };

    const offers = JSON.parse(localStorage.getItem('offers')) || [];
    offers.push(offer);
    localStorage.setItem('offers', JSON.stringify(offers));

// Initialize the page with the first category
showCategory('Haushalt');
