const data = [
    {
        id: 2645900,
        name: "iPhone 13",
        description: "Apple A15 Bionic 4GB RAM, 128GB storage, 6.1 inches.",
        price: 1100,
        category: "phone",
        image: "images/iPhone-13-Pro-Max-back.jpeg",
    },
    {
        id: 2645901,
        name: "MacBook Pro",
        description: 'Apple M1 chip 7-core GPU, 8GB RAM, 512GB SSD, 14 inches, Windows 10.',
        price: 1300,
        category: "computer",
        image: "images/laptop2.jpg",
    },
    {
        id: 2645902,
        name: "Intel laptop",
        description: 'Intel Core i7 9th, Gen 16GB RAM, 512GB SSD, 4GB NVIDIA Graphics Card, 16.3 inches, Windows 10, 1 year Warranty.',
        price: 1750,
        category: "computer",
        image: "images/H1b90a27f701449388ce4f29c29ee2600O.jpg",
    },
    {
        id: 2645903,
        name: "Pro wireless headset",
        description: "Wireless headset with a microphone.",
        price: 250,
        category: "headset",
        image: "images/pro-wireless-headset-gallery-1.png",
    },
    {
        id: 2645904,
        name: "Samsung Galaxy S22",
        description: "Qualcomm Snapdragon 8 Gen 1 8GB RAM, 128GB storage, 6.1 inches.",
        price: 849,
        category: "phone",
        image: "images/Samsung-Galaxy-S22-Exynos-featured-image-packshot-review-Recovered.jpg",
    },
    {
        id: 2645905,
        name: "Nokia Tablet",
        description: "Nokia T20, 10.4 inches, 4GB RAM, 32GB storage, with wifi and 4G technologies (blue).",
        price: 199,
        category: "tablet",
        image: "images/tablet.jpg",
    },
    {
        id: 2645906,
        name: "Intel laptop",
        description: "Intel Celeron N4020, Intel UHD Graphics 600, 11.6 inches HD (1366 x 768), 64GB SSD, 4GB LPDDR4, 1.21 kg (2.7 lbs).",
        price: 550,
        category: "computer",
        image: "images/laptop.jpg",
    },
    {
        id: 2645907,
        name: "HP Desktop Computer",
        description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
        price: 850,
        category: "computer",
        image: "images/desktop-pc.jpg",
    },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
    // {
    //     id: 2645907,
    //     name: "HP Desktop Computer",
    //     description: "HP Elite Desktop PC Computer, Intel Core i5 3.1-GHz, 8GB RAM, 1TB Hard Drive, 19 inches, LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10.",
    //     price: 750,
    //     category: "computer",
    //     image: "images/desktop-pc.jpg",
    // },
]

export default data;