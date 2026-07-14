function renderSuppliers(data) {

    const results = document.getElementById("results");

    results.innerHTML = "";

    data.forEach((supplier) => {

        const supplierRow = document.createElement("div");
        supplierRow.className = "supplier-row";

        const supplierCard = document.createElement("div");
        supplierCard.className = "supplier-card";

        supplierCard.innerHTML = `
            <img src="${supplier.logo}">
            <h3>${supplier.name}</h3>
            <button onclick="window.location.href='${supplier.page}'">
                صفحة المورد
            </button>
        `;

        const productsContainer = document.createElement("div");
        productsContainer.className = "products";

        supplier.products.forEach((product) => {

            const productCard = document.createElement("div");
            productCard.className = "product-card";

            productCard.innerHTML = `
                <img src="${product.image}">
                <p>${product.name}</p>
            `;

            productsContainer.appendChild(productCard);

        });

        supplierRow.appendChild(supplierCard);
        supplierRow.appendChild(productsContainer);

        results.appendChild(supplierRow);

    });

}