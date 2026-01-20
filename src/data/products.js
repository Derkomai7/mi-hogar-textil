export const categories = [
    { id: 'cama', name: 'Cama', label_es: 'Cama', label_en: 'Bedding', image: 'https://images.unsplash.com/photo-1522771753018-be8035dd9195?auto=format&fit=crop&q=80&w=800' },
    { id: 'bano', name: 'Baño', label_es: 'Baño', label_en: 'Bath', image: 'https://images.unsplash.com/photo-1584622050111-993a42eb3bf9?auto=format&fit=crop&q=80&w=800' },
    { id: 'salon', name: 'Salón', label_es: 'Salón', label_en: 'Living', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800' },
    { id: 'ropa', name: 'Ropa', label_es: 'Ropa de Casa', label_en: 'Loungewear', image: 'https://images.unsplash.com/photo-1517254797898-04ecd2529cc0?auto=format&fit=crop&q=80&w=800' },
];

export const products = [
    {
        id: 1,
        name: "Juego Sábanas Algodón Egipcio",
        price: 89.99,
        category: "cama",
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1522771753018-be8035dd9195?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1616627547584-750e7d63251c?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1580301762395-9c64265e9d5e?auto=format&fit=crop&q=80&w=800",
        description: "Calidez inigualable para el invierno.",
        sizes: ["130x170"],
        colors: ["Gris Marengo", "Crema"],
        bestseller: true
    },
];
