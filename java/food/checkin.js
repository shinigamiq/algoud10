// =========================
// بيانات الموردين والمنتجات
// =========================

const suppliers = [


    {
        id: 1,
        name: "Shahd-Chicken",
        logo: "../../../images/brands/Shahd.webp",
        page: "#",

        products: [

            {
                name: "جناح دجاج فريش",
                image: "../../../images/sub-category/sup-food/Fresh-Chicken-Wings.webp"
            },

            {
                name: "فيلية دجاج فريش",
                image: "../../../images/sub-category/sup-food/Fresh-Chicken-Fillet.webp"
            },

            {
                name: "دبوس دجاج فريش",
                image: "../../../images/sub-category/sup-food/Fresh-Chicken-Drumsticks.webp"
            },

            {
                name: "شيش دجاج فريش",
                image: "../../../images/sub-category/sup-food/Fresh-Chicken-Shish.webp"
            },

        ]
    },

    {
        id: 2,
        name: "مؤسسة فريش للمواد الغذائية",
        logo: "../../../images/brands/fresh.webp",
        page: "#",

        products: [

            {
                name: "Frozen Whole Chicken - دجاج كامل مجمد",
                image: "../../../images/sub-category/sup-food/frozenchiken.webp"
            },

            {
                name: "Common quail - سمان",
                image: "../../../images/sub-category/sup-food/common.webp"
            },

            {
                name: "Frozen Duck - بط كامل مجمد",
                image: "../../../images/sub-category/sup-food/duck.webp"
            },

            {
                name: "Frozen Duck - بط كامل مجمد",
                image: "../../../images/sub-category/sup-food/fullduck.webp"
            },

        ]
    },






];
renderSuppliers(suppliers);