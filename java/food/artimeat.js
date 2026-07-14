// =========================
// بيانات الموردين والمنتجات
// =========================

const suppliers = [


    {
        id: 1,
        name: "Nodel",
        logo: "../../../images/brands/nodel.webp",
        page: "#",

        products: [

            {
                name: "كفتة حاتي 350 جرام",
                image: "../../../images/sub-category/sup-food/kofthhati.webp"
            },

            {
                name: "كفتة بقري 350 جرام",
                image: "../../../images/sub-category/sup-food/kofthcow.webp"
            },

            {
                name: "استربس بارد 900 جرام",
                image: "../../../images/sub-category/sup-food/strips.webp"
            },

            {
                name: "استربس حار 900 جرام",
                image: "../../../images/sub-category/sup-food/hotstrips.webp"
            },

        ]
    },

    {
        id: 2,
        name: "Foodina",
        logo: "../../../images/brands/foodina.webp",
        page: "#",

        products: [

            {
                name: "ستربس",
                image: "../../../images/sub-category/sup-food/stripsfoodina.webp"
            },

            {
                name: "بانيه حار",
                image: "../../../images/sub-category/sup-food/hottinders.webp"
            },

            {
                name: "بانيه",
                image: "../../../images/sub-category/sup-food/tinders.webp"
            },

            {
                name: "سجق بقري",
                image: "../../../images/sub-category/sup-food/biefsusige.webp"
            },

        ]
    },

    {
        id: 3,
        name: "Al-Shaheen-Group foods",
        logo: "../../../images/brands/threechefs.webp",
        page: "#",

        products: [

            {
                name: "بيف هوت دوج 1 كيلو 25 قطعة 12 سم",
                image: "../../../images/sub-category/sup-food/biefhotdog.webp"
            },

            {
                name: "ثري شفس استربس دجاج عادي 12 قطعه 1 كيلو",
                image: "../../../images/sub-category/sup-food/strips12.webp"
            },

            {
                name: "ثري شفس بيف برجر 1 كيلو 10 قطع",
                image: "../../../images/sub-category/sup-food/biefburger.webp"
            },

            {
                name: "دجاج بانيه عادي 12 قطعة 1 كيلو",
                image: "../../../images/sub-category/sup-food/tinders12.webp"
            },

        ]
    },

    {
        id: 4,
        name: "Shahd-Chiken",
        logo: "../../../images/brands/shahd.webp",
        page: "#",

        products: [


        ]
    },

    {
        id: 5,
        name: "JIVCO",
        logo: "../../../images/brands/jivco.webp",
        page: "#",

        products: [

            {
                name: "تشيكن استربس",
                image: "../../../images/sub-category/sup-food/jivacostrips.webp"
            },

            {
                name: "شاورما",
                image: "../../../images/sub-category/sup-food/shawerma.webp"
            },

        ]
    },

    {
        id: 6,
        name: "Shahd",
        logo: "../../../images/brands/shahdwithu.webp",
        page: "#",

        products: [

            {
                name: "ستريبس دجاج 750gm",
                image: "../../../images/sub-category/sup-food/stripssh.webp"
            },

            {
                name: "فراخ ستريبس حار 750gm",
                image: "../../../images/sub-category/sup-food/hotstripssh.webp"
            },

            {
                name: "جناح دجاج 700gm",
                image: "../../../images/sub-category/sup-food/normalwings.webp"
            },

            {
                name: "جناح دجاج حار 700gm",
                image: "../../../images/sub-category/sup-food/hotwings.webp"
            },

        ]
    },

    {
        id: 7,
        name: "Image-Food",
        logo: "../../../images/brands/imagefood.webp",
        page: "#",

        products: [

            {
                name: "استربس فراخ عادي و حراق",
                image: "../../../images/sub-category/sup-food/imagestrips.webp"
            },

        ]
    },

    {
        id: 8,
        name: "Masrya",
        logo: "../../../images/brands/masrya1.webp",
        page: "#",

        products: [

            {
                name: "كوردن بلو",
                image: "../../../images/sub-category/sup-food/masryacoden.webp"
            },

            {
                name: "شيش",
                image: "../../../images/sub-category/sup-food/masryashish.webp"
            },

            {
                name: "حلقات بصل نقاوة",
                image: "../../../images/sub-category/sup-food/masryaunion.webp"
            },

            {
                name: "ستربس",
                image: "../../../images/sub-category/sup-food/masrya.webp"
            },

        ]
    },

    {
        id: 9,
        name: "GEDO",
        logo: "../../../images/brands/gedo.webp",
        page: "#",

        products: [

            {
                name: "حلقات بصل سمارت فود",
                image: "../../../images/sub-category/sup-food/foodsmartunion.webp"
            },

            {
                name: "برجر جامبو",
                image: "../../../images/sub-category/sup-food/gedoburger.webp"
            },

            {
                name: "برجر جبنه جامبو",
                image: "../../../images/sub-category/sup-food/cheeseburger.webp"
            },

            {
                name: "جاست فروزن كفته",
                image: "../../../images/sub-category/sup-food/justkofth.webp"
            },

        ]
    },






];
renderSuppliers(suppliers);