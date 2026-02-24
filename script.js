import { inventories } from "./info"

let shoppingCart = []
// Sections
const landing = document.getElementById('landing')
const productList = document.getElementById('products-list')
const productDetails = document.getElementById('products-details')
const cart = document.getElementById('cart')
const allSections = [landing, productList, productDetails, cart]

//Navigation bar
const navButtons = document.querySelectorAll('.nav-items a')

// Function to show a specific section and hide others
const showSection = (sectionShow) => {
    allSections.forEach(section => {
        if (section === sectionShow) {
            section.classList.remove('hidden')
        } else {
            section.classList.add('hidden')
        }
    })
}
// Event listners for navigation buttons
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
    // Function to render products on the product list section
    const renderProducts = () => {
        inventories.forEach(product => {
            const productCard = document.createElement('div')
            productCard.classList.add('product-card') // The class of the products div - important
            productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button class="product-details" data-id="${product.id}">View Details</button>
            <button class="add-to-cart" data-id="${product.id}">Select</button>
            `
            productList.appendChild(productCard)
        })
    }
    // Initial render of products
    productList.addEventListener('click', (e) => {
                if (e.target.classList.contains('product-details')) {
                    const productId = e.target.getAttribute('data-id')
                    const product = inventories.find(p => p.id === parseInt(productId))
                    if (product) {
                        productDetails.innerHTML = `
                            <h2>Name: ${product.name}</h2>
                            <p>Description: ${product.description}</p>
                            <p>Price: $${product.price}</p>
                        `
                        showSection(productDetails)
                    }
                }
            })

          console.log('Inventories loaded:', inventories)
          console.log('Product list element:', productList)
          console.log('Product details element:', productDetails)
          console.log('Cart element:', cart)

          renderProducts()
          showSection(landing)