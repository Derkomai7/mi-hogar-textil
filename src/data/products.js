export const categories = [
    { id: 'cama', name: 'Cama', label_es: 'Cama', label_en: 'Bedding', image: 'https://images.unsplash.com/photo-1582224163312-0735047647c6?fm=jpg&q=80&w=600&auto=format&fit=crop' },
    { id: 'bano', name: 'Baño', label_es: 'Baño', label_en: 'Bath', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop' },
    { id: 'salon', name: 'Salón', label_es: 'Salón', label_en: 'Living', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600&auto=format&fit=crop' },
    { id: 'ropa', name: 'Ropa', label_es: 'Ropa de Casa', label_en: 'Loungewear', image: 'https://images.unsplash.com/photo-1744690049442-7b2a726717ee?fm=jpg&q=80&w=600&auto=format&fit=crop' },
];

export const products = [
    {
        id: 1,
        name_es: "Juego Sábanas Algodón Egipcio",
        name_en: "Egyptian Cotton Sheets Set",
        price: 89.99,
        category: "cama",
        image: "https://images.unsplash.com/photo-1522771753018-be8035dd9195?q=80&w=1000&auto=format&fit=crop",
        desc_es: "Sábanas de 600 hilos para un confort absoluto.",
        desc_en: "600 thread count sheets for absolute comfort.",
        sizes: ["135", "150", "180"],
        colors: ["Blanco", "Beige", "Gris"],
        bestseller: true
    },
    {
        id: 2,
        name_es: "Funda Nórdica Lino Lavado",
        name_en: "Washed Linen Duvet Cover",
        price: 129.50,
        category: "cama",
        image: "https://images.unsplash.com/photo-1595166687009-32863484f937?q=80&w=1000&auto=format&fit=crop",
        desc_es: "Estilo natural y transpirable.",
        desc_en: "Natural and breathable style.",
        sizes: ["150", "180", "200"],
        colors: ["Natural", "Verde Oliva", "Teja"],
        bestseller: true
    },
    {
        id: 3,
        name_es: "Set Toallas Premium",
        name_en: "Premium Towel Set",
        price: 45.00,
        category: "bano",
        image: "https://images.unsplash.com/photo-1583089862943-e407275bb506?q=80&w=1000&auto=format&fit=crop",
        desc_es: "Algodón 100% de alto gramaje.",
        desc_en: "High weight 100% cotton.",
        sizes: ["Set 3 Piezas"],
        colors: ["Blanco", "Azul Marino", "Gris Perla"],
        bestseller: false
    },
    {
        id: 4,
        name_es: "Albornoz Waffle",
        name_en: "Waffle Bathrobe",
        price: 59.95,
        category: "bano",
        image: "https://images.unsplash.com/photo-1543085603-c4fa83f06bd0?q=80&w=1000&auto=format&fit=crop",
        desc_es: "Ligero y absorbente, textura nido de abeja.",
        desc_en: "Lightweight and absorbent, honeycomb texture.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blanco", "Rosa Empolvado"],
        bestseller: true
    },
    {
        id: 5,
        name_es: "Cojín Terciopelo",
        name_en: "Velvet Cushion",
        price: 25.99,
        category: "salon",
        image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?q=80&w=1000&auto=format&fit=crop",
        desc_es: "Toque de elegancia para tu sofá.",
        desc_en: "Touch of elegance for your sofa.",
        sizes: ["45x45", "50x50"],
        colors: ["Mostaza", "Verde Esmeralda", "Azul Noche"],
        bestseller: false
    },
    {
        id: 6,
        name_es: "Manta de Lana Merino",
        name_en: "Merino Wool Blanket",
        price: 150.00,
        category: "salon",
        image: "https://images.unsplash.com/photo-1512918580421-32c29925bd8f?q=80&w=1000&auto=format&fit=crop",
        desc_es: "Calidez inigualable para el invierno.",
        desc_en: "Unbeatable warmth for winter.",
        sizes: ["130x170"],
        colors: ["Gris Marengo", "Crema"],
        bestseller: true
    },
];
