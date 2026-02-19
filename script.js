const inventories = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        quantity: 10,
        description: "A high-performance laptop suitable for gaming and office work."
    },
    {
        id: 2,
        name: "Smartphone",
        price: 499.99,
        quantity: 20,
        description: "A sleek smartphone with a powerful camera and long battery life."
    },
    {
        id: 3,
        name: "Wireless Headphones",
        price: 129.50,
        quantity: 50,
        description: "Noise-canceling over-ear headphones with high-fidelity sound."
    },
    {
        id: 4,
        name: "Gaming Mouse",
        price: 45.00,
        quantity: 100,
        description: "Ergonomic wireless mouse with adjustable DPI and RGB lighting."
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        price: 89.99,
        quantity: 35,
        description: "Backlit mechanical keyboard with tactile brown switches."
    },
    {
        id: 6,
        name: "External Monitor",
        price: 249.00,
        quantity: 15,
        description: "27-inch 4K UHD monitor with IPS panel for color accuracy."
    },
    {
        id: 7,
        name: "Portable SSD",
        price: 79.00,
        quantity: 40,
        description: "1TB high-speed external solid-state drive for fast data transfer."
    },
    {
        id: 8,
        name: "Webcam",
        price: 59.95,
        quantity: 25,
        description: "1080p HD webcam with built-in microphone for video calls."
    },
    {
        id: 9,
        name: "Tablet",
        price: 329.00,
        quantity: 12,
        description: "Slim and lightweight tablet optimized for reading and media."
    },
    {
        id: 10,
        name: "Smartwatch",
        price: 199.00,
        quantity: 30,
        description: "Water-resistant smartwatch with heart rate monitor and GPS."
    },
    {
        id: 11,
        name: "Bluetooth Speaker",
        price: 65.00,
        quantity: 45,
        description: "Compact portable speaker with deep bass and 12-hour battery life."
    },
    {
        id: 12,
        name: "USB-C Hub",
        price: 34.50,
        quantity: 60,
        description: "Multi-port adapter with HDMI, USB-A, and SD card slots."
    },
    {
        id: 13,
        name: "Gaming Console",
        price: 499.00,
        quantity: 8,
        description: "Next-generation console for immersive 4K gaming experiences."
    },
    {
        id: 14,
        name: "Graphics Card",
        price: 750.00,
        quantity: 5,
        description: "High-performance GPU for heavy rendering and gaming."
    },
    {
        id: 15,
        name: "Microphone",
        price: 115.00,
        quantity: 20,
        description: "Studio-quality condenser microphone for streaming and podcasts."
    },
    {
        id: 16,
        name: "Wireless Router",
        price: 149.00,
        quantity: 18,
        description: "Wi-Fi 6 router for fast and stable home networking."
    },
    {
        id: 17,
        name: "Power Bank",
        price: 29.99,
        quantity: 80,
        description: "20,000 mAh fast-charging portable power bank."
    },
    {
        id: 18,
        name: "Laser Printer",
        price: 189.00,
        quantity: 10,
        description: "Efficient wireless laser printer for high-volume office use."
    },
    {
        id: 19,
        name: "VR Headset",
        price: 399.00,
        quantity: 7,
        description: "All-in-one virtual reality system for fully immersive play."
    },
    {
        id: 20,
        name: "Laptop Stand",
        price: 39.00,
        quantity: 55,
        description: "Adjustable aluminum stand for improved ergonomics."
    },
    {
        id: 21,
        name: "Cable Organizer",
        price: 9.99,
        quantity: 150,
        description: "Silicone cable clips to keep your desk clutter-free."
    },
    {
        id: 22,
        name: "Gaming Chair",
        price: 279.00,
        quantity: 6,
        description: "Ergonomic chair with lumbar support for long gaming sessions."
    }
]
const landing = document.getElementById('landing')
const productList = document.getElementById('product-list')
const productDetails = document.getElementById('products-details')
const cart = document.getElementById('cart')
const productNav = document.getElementById('products nav')

const allSections = [landing, productList, productDetails, cart]
const navButtons = document.querySelectorAll('.nav-items a')

const showSection = (sectionShow) => {
    allSections.forEach(section => {
        if (section === sectionShow) {
            section.classList.remove('hidden')
        } else {
            section.classList.add('hidden')
        }
    })
}

navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()

            if (button.id === 'products') {
                showSection(productList)
            } else if (button.id === 'home') {
                showSection(landing)
            } else if (button.id === 'cart-link') {
                showSection(cart)
            } 
        })
    })

    const renderProducts = () => {
        inventories.forEach(product => {
            const productCard = document.createElement('div')
            productCard.classList.add('product-card')
            productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button class="product-details" data-id="${product.id}">View Details</button>
            <button class="add-to-cart" data-id="${product.id}">Select</button>
            `
            productList.appendChild(productCard)
        })
    }