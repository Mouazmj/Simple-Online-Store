import { inventories } from "./info"

let shoppingCart = []
// Sections
const landing = document.getElementById('landing')
const productList = document.getElementById('products-list')
const productDetails = document.getElementById('products-details')
const emptyDetails = document.getElementById('emptyproductdetails')
const cart = document.getElementById('cart')
const allSections = [landing, productList, productDetails, cart]

//Navigation bar
const navButtons = document.querySelectorAll('.nav-items a')

const addToCart = (id) => {
    const productId = inventories.find(p => p.id === parseInt(id))
    if (productId) {
        shoppingCart.push(productId)
        alert(`Added ${productId.name} to cart!`)
    }
    updateCartUI()
}

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
// Event listners for navigation buttons, on what section to shwo whena a button is clicked
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
            productList.appendChild(productCard) // product-details is class for the details button and add-to-cart is the class for the select button
        })
    }
    // Initial render of products to show in the product list section
    productList.addEventListener('click', (e) => {
                if (e.target.classList.contains('product-details')) {
                    const productId = e.target.getAttribute('data-id')
                    const product = inventories.find(p => p.id === parseInt(productId))
                    if (product) {
                        emptyDetails.innerHTML = `
                            <h2>Name: ${product.name}</h2>
                            <p>Description: ${product.description}</p>
                            <p>Price: $${product.price}</p>
                            <button class="add-to-cart" data-id="${product.id}">Select</button>
                            <button id="back-to-products" class="back-button">Back to Products</button>
                        `
                        showSection(productDetails) // Show the product details section when the details button is clicked
                    }
                    // Event listner for the add to cart button and the remove from cart button
                } else if (e.target.classList.contains('add-to-cart')) {
                    const productId = e.target.getAttribute('data-id')
                        addToCart(productId) 
                }
            })

            productDetails.addEventListener('click', (e) => {
                if (e.target.classList.contains('add-to-cart')) {
                    const productId = e.target.getAttribute('data-id')
                    addToCart(productId)
                }  else if (e.target.id === 'back-to-products') {
                        showSection(productList)
                    }
            })
               
    
            // Function to update the shopping cart UI
            const updateCartUI = () => {
                cart.innerHTML = '<h2>Shopping Cart</h2>'
                if (shoppingCart.length > 0) {
                    cart.innerHTML += `
                        <ul>
                            ${shoppingCart.map(item => `<li>${item.name} - $${item.price}  <button class="remove-cart-items" data-id="${item.id}">Remove Item</button></li>`).join('')}
                        </ul>
                        Total Price: $${shoppingCart.reduce((total, item) => total + item.price, 0)}
                    `
                }
            }

            // Event listner for the remove from cart button
            cart.addEventListener('click', (e) => {
                if ( e.target.classList.contains('remove-cart-items')) {
                    const productId = e.target.getAttribute('data-id')
                    const index = shoppingCart.findIndex(item => item.id === parseInt(productId))
                    if (index !== -1) {
                        shoppingCart.splice(index, 1)
                        updateCartUI()
                    }
                }
            })

          console.log('Inventories loaded:', inventories)
          console.log('Product list element:', productList)
          console.log('Product details element:', productDetails)
          console.log('Cart element:', cart)

          renderProducts()
          showSection(landing)