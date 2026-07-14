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
                name: "جميع منتجات وادي فود",
                image: "../../../images/sub-category/sup-food/wadifood.webp"
            },

            {
                name: "لحم برازيلي وش فخدة",
                image: "../../../images/sub-category/sup-food/brazilianmeat.webp"
            },

            {
                name: "صوص رانش GSF",
                image: "../../../images/sub-category/sup-food/ranch.webp"
            }

        ]
    },

    {
        id: 2,
        name: "Motive Industry",
        logo: "../../../images/brands/motive.png",
        page: "#",

        products: [

            {
                name: "Motive",
                image: "../../../images/sub-category/sup-food/motive.webp"
            },

            {
                name: "فلفل هالبينو",
                image: "../../../images/sub-category/sup-food/jalbino.webp"
            },

            {
                name: "مستردة ديجون",
                image: "../../../images/sub-category/sup-food/masterd.webp"
            },

            {
                name: "مايونيز بريميم",
                image: "../../../images/sub-category/sup-food/maio (2).webp"
            }

        ]
    },

    {
        id: 3,
        name: "Future Hospitality",
        logo: "../../../images/brands/future.jpg",
        page: "#",

        products: [

            {
                name: "مرقة دجاج كنور",
                image: "../../../images/sub-category/sup-food/knorrchicken.webp"
            },

            {
                name: "شاي ليبتون",
                image: "../../../images/sub-category/sup-food/grrentea.webp"
            },

            {
                name: "كاتشب",
                image: "../../../images/sub-category/sup-food/ketchup.webp"
            },

            {
                name: "كريمة خفق",
                image: "../../../images/sub-category/sup-food/whipping.webp"
            }

        ]
    },

    {
        id: 4,
        name: "Star Food",
        logo: "../../../images/brands/starfood.jpg",
        page: "#",

        products: [

            {
                name: "ماء ورد ستار 250 مل",
                image: "../../../images/sub-category/sup-food/flowerwater.webp"
            },



        ]
    },

    {
        id: 5,
        name: "Hendawy",
        logo: "../../../images/brands/hendawy.webp",
        page: "#",

        products: [

            {
                name: "مرقة دجاج كنور 6 عبوات 1 كيلو",
                image: "../../../images/sub-category/sup-food/knorrmraqh.webp"
            },

            {
                name: "جميرا جبنة موزاريلا طبيعى مبشورة",
                image: "../../../images/sub-category/sup-food/jamiratabiai.webp"
            },

            {
                name: "جميرا جبنة موزاريلا نباتى مبشورة",
                image: "../../../images/sub-category/sup-food/jamiranbati.webp"
            },




        ]
    },

    {
        id: 6,
        name: "Prima",
        logo: "../../../images/brands/prima.webp",
        page: "#",

        products: [

            {
                name: "cream cheese 240g | كريم تشيز 240جم",
                image: "../../../images/sub-category/sup-food/creamcheese.webp"
            },

            {
                name: "Fresh Cream 240g | قشطه 240جم",
                image: "../../../images/sub-category/sup-food/freshcream.webp"
            },

            {
                name: "Egyptian Cottage Cheese 400g | جبنه قريش لباني 400جم",
                image: "../../../images/sub-category/sup-food/cottagecheese.webp"
            },

            {
                name: "Spread Cheese With Cream 240g | جبنه مطبوخه بالكريمه 240جم",
                image: "../../../images/sub-category/sup-food/spreadcheese.webp"
            },



        ]
    },

    {
        id: 7,
        name: "Waradly For General Trading",
        logo: "../../../../images/brands/waradly.webp",
        page: "#",

        products: [

            {
                name: "No products",
                image: ""
            },



        ]
    },

    {
        id: 8,
        name: "Saraya Egypt",
        logo: "../../../images/brands/saraya.webp",
        page: "#",

        products: [

            {
                name: "لاكانتو بديل طبيعي للسكر (مونكفروت مع اريثريتول) 40 كيس",
                image: "../../../images/sub-category/sup-food/lacanto40.webp"
            },

            {
                name: "لاكانتو بديل طبيعي للسكر (مونكفروت مع اريثريتول) 100 كيس",
                image: "../../../images/sub-category/sup-food/lacanto100.webp"
            },

            {
                name: "لاكانتو بديل طبيعي للسكر (مونكفروت مع اريثريتول) 235 جرام",
                image: "../../../images/sub-category/sup-food/lacanto235.webp"
            },

            {
                name: "لاكانتو بديل طبيعي للسكر (مونكفروت مع اريثريتول) 454 جرام",
                image: "../../../images/sub-category/sup-food/lacanto454.webp"
            },



        ]
    },

    {
        id: 9,
        name: "Altyseercompany",
        logo: "../../../images/brands/motive.png",
        page: "#",

        products: [

            {
                name: "كاتشب جالون 10 ك هاينز",
                image: "../../../images/sub-category/sup-food/ketchup.webp"
            },

            {
                name: "هوت صوص زجاجة 165 ملل",
                image: "../../../images/sub-category/sup-food/hot.webp"
            },

            {
                name: "مرقة مكعبات كنور",
                image: "../../../images/sub-category/sup-food/marqtknor.webp"
            },

            {
                name: "صوص ديمى جلاس كنور",
                image: "../../../images/sub-category/sup-food/dimeknor.webp"
            },



        ]
    },

    {
        id: 10,
        name: "Elsupplierfortrade",
        logo: "../../../images/brands/Elsupplierfortrade.webp",
        page: "#",

        products: [

            {
                name: "فول مدمس سادة700جم *6 برطمان",
                image: "../../../images/sub-category/sup-food/fool700.webp"
            },

            {
                name: "فول مدمس سادة400جم *24 برطمان",
                image: "../../../images/sub-category/sup-food/fool400.webp"
            },

            {
                name: "فول مدمس سادة 3كجم *4 صفيحة",
                image: "../../../images/sub-category/sup-food/fool3k.webp"
            },

            {
                name: "حبوب ذرة حلوه كاملة 400جم *24 صفيحة",
                image: "../../../images/sub-category/sup-food/corn400.webp"
            },



        ]
    },

    {
        id: 11,
        name: "Alhbobaty-And-Shouli",
        logo: "../../../images/brands/alhbobaty.webp",
        page: "#",

        products: [

            {
                name: "قهوة سريعة التحضير 3 في 1، قهوة مبيضة محلاة من يوني كافيه - 24 ظرف × 20 جم، تحضير سريع ومذاق غني",
                image: "../../../images/sub-category/sup-food/3in1coffe.webp"
            },

            {
                name: "قهوة يوني كافية ميكس 2 في 1 الفورية بدون سكر - 24 ظرف × 12 جم",
                image: "../../../images/sub-category/sup-food/2in1coffe.webp"
            },

            {
                name: "بن الحموي قهوة سادة وسط - 180 جم",
                image: "../../../images/sub-category/sup-food/bonsadah.webp"
            },

            {
                name: "بن الحموي قهوة وسط محوج - 180 جم",
                image: "../../../images/sub-category/sup-food/bonmhog.webp"
            },




        ]
    },

    {
        id: 12,
        name: "Omar-Effendi",
        logo: "../../../images/brands/omareffendi.webp",
        page: "#",

        products: [


            {
                name: "قهوه عمر افندي / ساده 200 جرام",
                image: "../../../images/sub-category/sup-food/omarsadah.webp"
            },

            {
                name: "نسكافيه جولد عمر افندي 200 جرام",
                image: "../../../images/sub-category/sup-food/omargold.webp"
            },

            {
                name: "نسكافيه كلاسيك عمر افندي 200 جرام",
                image: "../../../images/sub-category/sup-food/omarclassic.webp"
            },



        ]
    },

    {
        id: 13,
        name: "Veltrix",
        logo: "../../../images/brands/veltrix.webp",
        page: "#",

        products: [


            {
                name: "بطاطس نصف مقلية 2.5 k",
                image: "../../../images/sub-category/sup-food/halffrayed.webp"
            },

            {
                name: "خص كابوشتا ٨ للراك",
                image: "../../../images/sub-category/sup-food/kapotcha.webp"
            },

            {
                name: "بصل",
                image: "../../../images/sub-category/sup-food/union.webp"
            },

            {
                name: "بروكلي",
                image: "../../../images/sub-category/sup-food/brokly.webp"
            },



        ]
    },


];
renderSuppliers(suppliers);