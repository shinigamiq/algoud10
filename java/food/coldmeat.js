// =========================
// بيانات الموردين والمنتجات
// =========================

const suppliers = [

    {
        id: 1,
        name: "La Curva",
        logo: "../../../images/brands/lacurva.jpg",
        page: "#",

        products: [

            {
                name: "لحم كتف بارازيلي ميتابوى/منيرفا",
                image: "../../../images/sub-category/sup-food/mnirfa.webp"
            },

            {
                name: "عروق فلتو برازيلي / بلدى",
                image: "../../../images/sub-category/sup-food/fllato.webp"
            },

        ]
    },

    {
        id: 2,
        name: "شركة الصطفى",
        logo: "../../../images/brands/mostafa.webp",
        page: "#",

        products: [

            {
                name: "مكعبات لحمه",
                image: "../../../images/sub-category/sup-food/meatcupe.webp"
            },



        ]
    },

    {
        id: 3,
        name: "MF-For-Import-Export",
        logo: "../../../images/brands/faroq.webp",
        page: "#",

        products: [

            {
                name: "فخدة ضاني أسترالي",
                image: "../../../images/sub-category/sup-food/astruilia.webp"
            },

            {
                name: "فلانك هندي التمام",
                image: "../../../images/sub-category/sup-food/flank.webp"
            },

            {
                name: "موزة ضاني لام",
                image: "../../../images/sub-category/sup-food/lam.webp"
            },

            {
                name: "كتف برازيلي ماستر بوي",
                image: "../../../images/sub-category/sup-food/sholder.webp"
            },



        ]
    },



];
renderSuppliers(suppliers);