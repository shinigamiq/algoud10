


// =========================
// عرض البيانات
// =========================

const results = document.getElementById("results");

function renderSuppliers() {

    results.innerHTML = "";

    suppliers.forEach((supplier) => {

        const supplierRow = document.createElement("div");
        supplierRow.className = "supplier-row";

        // كارت المورد
        const supplierCard = document.createElement("div");
        supplierCard.className = "supplier-card";

        supplierCard.innerHTML = `
            <img src="${supplier.logo}" alt="${supplier.name}">
            <h3>${supplier.name}</h3>
            <button onclick="window.location.href='${supplier.page}'">
                صفحة المورد
            </button>
        `;

        // المنتجات
        const productsContainer = document.createElement("div");
        productsContainer.className = "products";

        supplier.products.forEach((product) => {

            const productCard = document.createElement("div");
            productCard.className = "product-card";

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
            `;

            productsContainer.appendChild(productCard);

        });

        supplierRow.appendChild(supplierCard);
        supplierRow.appendChild(productsContainer);

        results.appendChild(supplierRow);

    });

}

// تشغيل الصفحة
renderSuppliers();