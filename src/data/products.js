export const categories = [
    { id: 'cama', name: 'Cama', label_es: 'Cama', label_en: 'Bedding', image: 'https://images.unsplash.com/photo-1505693416388-b0346efee74f?q=80&w=1000&auto=format&fit=crop' },
    { id: 'bano', name: 'Baño', label_es: 'Baño', label_en: 'Bath', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop' },
    { id: 'salon', name: 'Salón', label_es: 'Salón', label_en: 'Living', image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1000&auto=format&fit=crop' },
    { id: 'ropa', name: 'Ropa', label_es: 'Ropa de Casa', label_en: 'Loungewear', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop' },
];

export const products = [
    {
        id: 1,
        name: "Juego Sábanas Algodón Egipcio",
        price: 89.99,
        category: "cama",
        image: "https://images.unsplash.com/photo-1522771753018-be8035dd9195?q=80&w=1000&auto=format&fit=crop",
        description: "Sábanas de 600 hilos para un confort absoluto.",
        sizes: ["135", "150", "180"],
        colors: ["Blanco", "Beige", "Gris"],
        bestseller: true
    },
    {
        id: 2,
        name: "Funda Nórdica Lino Lavado",
        price: 129.50,
        category: "cama",
        image: "https://images.unsplash.com/photo-1595166687009-32863484f937?q=80&w=1000&auto=format&fit=crop",
        description: "Estilo natural y transpirable.",
        sizes: ["150", "180", "200"],
        colors: ["Natural", "Verde Oliva", "Teja"],
        bestseller: true
    },
    {
        id: 3,
        name: "Set Toallas Premium",
        price: 45.00,
        category: "bano",
        image: "https://images.unsplash.com/photo-1583089862943-e407275bb506?q=80&w=1000&auto=format&fit=crop",
        description: "Algodón 100% de alto gramaje.",
        sizes: ["Set 3 Piezas"],
        colors: ["Blanco", "Azul Marino", "Gris Perla"],
        bestseller: false
    },
    {
        id: 4,
        name: "Albornoz Waffle",
        price: 59.95,
        category: "bano",
        image: "https://images.unsplash.com/photo-1543085603-c4fa83f06bd0?q=80&w=1000&auto=format&fit=crop",
        description: "Ligero y absorbente, textura nido de abeja.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blanco", "Rosa Empolvado"],
        bestseller: true
    },
    {
        id: 5,
        name: "Cojín Terciopelo",
        price: 25.99,
        category: "salon",
        image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?q=80&w=1000&auto=format&fit=crop",
        description: "Toque de elegancia para tu sofá.",
        sizes: ["45x45", "50x50"],
        colors: ["Mostaza", "Verde Esmeralda", "Azul Noche"],
        bestseller: false
    },
    {
        id: 6,
        name: "Manta de Lana Merino",
        price: 150.00,
        category: "salon",
        image: "https://images.unsplash.com/photo-1512918580421-32c29925bd8f?q=80&w=1000&auto=format&fit=crop",
        description: "Calidez inigualable para el invierno.",
        sizes: ["130x170"],
        colors: ["Gris Marengo", "Crema"],
        bestseller: true
    },
];
