// =========================
// بيانات الموردين والمنتجات
// =========================

const suppliers = [

    {
        id: 1,
        name: "Foodina",
        logo: "../../../images/brands/lacurva.jpg",
        page: "#",

        products: [

            {
                name: "لانشون مبرد فاخر بقري ساده",
                image: "../../../images/sub-category/sup-food/lanchonsadah.webp"
            },

            {
                name: "لانشون فاخر مبرد بقري بالزيتون",
                image: "../../../images/sub-category/sup-food/olivelanchon.webp"
            },

            {
                name: "سلامي مدخن",
                image: "../../../images/sub-category/sup-food/slamy.webp"
            },

            {
                name: "صدر رومي مدخن",
                image: "../../../images/sub-category/sup-food/romi.webp"
            },


        ]
    },

    {
        id: 2,
        name: "شركة الصطفى",
        logo: "../../../images/brands/logytrade.webp",
        page: "#",

        products: [

            {
                name: "اللحيمي لانشون بقري بقطع البسطرمه -5ك",
                image: "../../../images/sub-category/sup-food/bastermhcow.webp"
            },

            {
                name: "اللحيمي لانشون بقري بالفلفل الاسود - 5ك",
                image: "../../../images/sub-category/sup-food/blackpapercow.webp"
            },

            {
                name: "اللحيمي لانشون بقري بالزيتون - 5",
                image: "../../../images/sub-category/sup-food/olivecow.webp"
            },

            {
                name: "اللحيمي لانشون بقري ساده - 5ك",
                image: "../../../images/sub-category/sup-food/cow.webp"
            },



        ]
    },




];
renderSuppliers(suppliers);