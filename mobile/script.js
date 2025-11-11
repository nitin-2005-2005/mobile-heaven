
        // Enhanced JavaScript with Product Detail Pages

        // Product data for different categories
        const phoneModels = {
            covers: [
                { name: "iPhone 15 Pro", brand: "iphone", price: 24.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "iPhone 15", brand: "iphone", price: 22.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "iPhone 14 Pro", brand: "iphone", price: 19.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "iPhone 14", brand: "iphone", price: 17.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "iPhone 13", brand: "iphone", price: 15.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Samsung Galaxy S23 Ultra", brand: "samsung", price: 21.99, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Samsung Galaxy S23", brand: "samsung", price: 19.99, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Samsung Galaxy Z Fold5", brand: "samsung", price: 29.99, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Google Pixel 8 Pro", brand: "google", price: 18.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Google Pixel 8", brand: "google", price: 16.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "OnePlus 11", brand: "oneplus", price: 17.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Xiaomi 13 Pro", brand: "xiaomi", price: 15.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
            ],
            glass: [
                { name: "iPhone 15 Pro", brand: "iphone", price: 14.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "iPhone 15", brand: "iphone", price: 12.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Samsung Galaxy S23 Ultra", brand: "samsung", price: 16.99, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Google Pixel 8 Pro", brand: "google", price: 13.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
            ],
            lamination: [
                { name: "iPhone 15 Pro", brand: "iphone", price: 9.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Samsung Galaxy S23 Ultra", brand: "samsung", price: 9.99, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
                { name: "Google Pixel 8 Pro", brand: "google", price: 8.99, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
            ]
        };

        let currentProductCategory = '';
        let currentProductType = '';

        // Function to show product detail page
        function showProductDetailPage(category, productType) {
            // Hide main content
            document.querySelectorAll('section, header, footer').forEach(el => {
                el.style.display = 'none';
            });
            
            // Show detail page
            const detailPage = document.getElementById('product-detail-page');
            detailPage.style.display = 'block';
            
            currentProductCategory = category;
            currentProductType = productType;
            
            // Update page title
            const title = document.getElementById('detail-page-title');
            const subtitle = document.getElementById('detail-page-subtitle');
            
            const categoryNames = {
                'covers': 'Mobile Covers',
                'glass': 'Glass Guards', 
                'lamination': 'Laminations'
            };
            
            const productNames = {
                'Hard Case Cover': 'Hard Case Covers',
                'Silicone Case': 'Silicone Cases',
                'Leather Case': 'Leather Cases',
                'Transparent Case': 'Transparent Cases',
                'Wallet Case': 'Wallet Cases',
                'Armor Case': 'Armor Cases',
                'Bumper Case': 'Bumper Cases',
                'Flip Case': 'Flip Cases',
                'Designer Case': 'Designer Cases',
                'Rugged Case': 'Rugged Cases',
                'Slim Case': 'Slim Cases',
                'Carbon Fiber Case': 'Carbon Fiber Cases',
                'Wooden Case': 'Wooden Cases',
                'Metallic Case': 'Metallic Cases',
                'Gel Case': 'Gel Cases',
                'Tempered Glass': 'Tempered Glass',
                'Privacy Glass': 'Privacy Glass',
                'Anti-Glare Glass': 'Anti-Glare Glass',
                'Blue Light Filter': 'Blue Light Filter Glass',
                '3D Curved Glass': '3D Curved Glass',
                'Front Membrane': 'Front Membrane',
                'Back Membrane': 'Back Membrane',
                'Matte Lamination': 'Matte Laminations',
                'Glossy Lamination': 'Glossy Laminations',
                'Pattern Skin': 'Pattern Skins',
                'Solid Color Skin': 'Solid Color Skins',
                'Carbon Fiber Skin': 'Carbon Fiber Skins',
                'Wooden Skin': 'Wooden Skins',
                'Metallic Skin': 'Metallic Skins',
                'Glitter Skin': 'Glitter Skins'
            };
            
            title.textContent = `${productNames[productType] || productType} - All Models`;
            subtitle.textContent = `Compatible ${categoryNames[category]} for your device`;
            
            // Load models
            loadPhoneModels(category, productType);
        }

        // Function to go back to main page
        function goBackToMain() {
            // Hide detail page
            document.getElementById('product-detail-page').style.display = 'none';
            
            // Show main content
            document.querySelectorAll('section, header, footer').forEach(el => {
                el.style.display = 'block';
            });
            
            // Scroll to the appropriate section
            const sectionId = currentProductCategory === 'covers' ? 'covers' : 
                             currentProductCategory === 'glass' ? 'glass-guards' : 'laminations';
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }

        // Function to load phone models
        function loadPhoneModels(category, productType) {
            const modelsContainer = document.getElementById('models-container');
            modelsContainer.innerHTML = '';
            
            const models = phoneModels[category] || [];
            
            if (models.length === 0) {
                modelsContainer.innerHTML = '<p style="text-align: center; color: #7f8c8d; font-size: 1.2rem;">No models available for this product type.</p>';
                return;
            }
            
            models.forEach(model => {
                const modelCard = document.createElement('div');
                modelCard.className = 'model-card';
                modelCard.setAttribute('data-brand', model.brand);
                
                modelCard.innerHTML = `
                    <img src="${model.image}" alt="${model.name}">
                    <h4>${model.name}</h4>
                    <span class="model-price">$${model.price.toFixed(2)}</span>
                    <button class="buy-now-btn" 
                            data-product="${productType} for ${model.name}" 
                            data-price="${model.price}">
                        Buy Now
                    </button>
                `;
                
                modelsContainer.appendChild(modelCard);
            });
            
            // Add event listeners to Buy Now buttons
            document.querySelectorAll('.buy-now-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const product = e.target.getAttribute('data-product');
                    const price = parseFloat(e.target.getAttribute('data-price'));
                    
                    addToCart(product, price);
                    showNotification(`${product} added to cart!`, 'success');
                });
            });
        }

        // Filter models by brand
        function filterModels(category) {
            const modelCards = document.querySelectorAll('.model-card');
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            modelCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-brand') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Update active filter button
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        // Add click event listeners to product cards
        document.addEventListener('DOMContentLoaded', function() {
            // Add click listeners to product cards
            const clickableProducts = document.querySelectorAll('.clickable-product');
            
            clickableProducts.forEach(product => {
                product.addEventListener('click', function(e) {
                    // Don't trigger if clicking the add to cart button
                    if (!e.target.classList.contains('add-to-cart')) {
                        const category = this.getAttribute('data-category');
                        const productName = this.querySelector('h3, h4').textContent;
                        
                        showProductDetailPage(category, productName);
                    }
                });
            });

            // Filter functionality for product detail page
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    filterModels(category);
                });
            });
        });

        // All your existing shopping cart and other functionality remains the same
        // ... (keeping all existing JavaScript) ...

        // Shopping Cart Functionality (existing code)
        let cart = [];
        let cartCount = 0;
        let cartTotal = 0;
        let selectedPaymentMethod = null;
        let isLoggedIn = false;
        let currentUser = null;

        // DOM Elements
        const cartBtn = document.getElementById('cart-btn');
        const cartModal = document.getElementById('cart-modal');
        const loginBtn = document.getElementById('login-btn');
        const loginModal = document.getElementById('login-modal');
        const loginForm = document.getElementById('login-form');
        const userInfo = document.getElementById('user-info');
        const userAvatar = document.getElementById('user-avatar');
        const userName = document.getElementById('user-name');
        const logoutBtn = document.getElementById('logout-btn');
        const closeModals = document.querySelectorAll('.close');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        const cartCountElement = document.getElementById('cart-count');
        const checkoutBtn = document.getElementById('checkout-btn');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const contactForm = document.getElementById('contact-form');
        const paymentOptions = document.querySelectorAll('.payment-option');
        const sections = document.querySelectorAll('.section');

        // Open Cart Modal
        cartBtn.addEventListener('click', () => {
            cartModal.style.display = 'block';
            renderCartItems();
        });

        // Open Login Modal
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });

        // Close Modals
        closeModals.forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                cartModal.style.display = 'none';
                loginModal.style.display = 'none';
            });
        });

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === cartModal) {
                cartModal.style.display = 'none';
            }
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });

        // Login Form Submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation (in a real app, this would be done on the server)
            if (email && password) {
                // Simulate login
                currentUser = {
                    name: email.split('@')[0],
                    email: email
                };
                
                isLoggedIn = true;
                updateUserInterface();
                loginModal.style.display = 'none';
                showNotification('Login successful!', 'success');
                
                // Clear form
                loginForm.reset();
            } else {
                showNotification('Please fill in all fields', 'error');
            }
        });

        // Logout
        logoutBtn.addEventListener('click', () => {
            isLoggedIn = false;
            currentUser = null;
            updateUserInterface();
            showNotification('You have been logged out', 'success');
        });

        // Update user interface based on login status
        function updateUserInterface() {
            if (isLoggedIn) {
                loginBtn.style.display = 'none';
                userInfo.style.display = 'flex';
                userName.textContent = currentUser.name;
                userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
            } else {
                loginBtn.style.display = 'block';
                userInfo.style.display = 'none';
            }
        }

        // Add to Cart Functionality
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const product = e.target.getAttribute('data-product');
                const price = parseFloat(e.target.getAttribute('data-price'));
                
                addToCart(product, price);
                
                // Show confirmation
                showNotification(`${product} added to cart!`, 'success');
            });
        });

        // Add item to cart
        function addToCart(product, price) {
            const existingItem = cart.find(item => item.product === product);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    product: product,
                    price: price,
                    quantity: 1
                });
            }
            
            updateCart();
        }

        // Remove item from cart
        function removeFromCart(product) {
            cart = cart.filter(item => item.product !== product);
            updateCart();
        }

        // Update quantity of item in cart
        function updateQuantity(product, change) {
            const item = cart.find(item => item.product === product);
            
            if (item) {
                item.quantity += change;
                
                if (item.quantity <= 0) {
                    removeFromCart(product);
                } else {
                    updateCart();
                }
            }
        }

        // Update cart UI and totals
        function updateCart() {
            cartCount = cart.reduce((total, item) => total + item.quantity, 0);
            cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            
            cartCountElement.textContent = cartCount;
            cartTotalElement.textContent = cartTotal.toFixed(2);
            
            if (cartModal.style.display === 'block') {
                renderCartItems();
            }
        }

        // Render cart items in modal
        function renderCartItems() {
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
                return;
            }
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <h4>${item.product}</h4>
                        <p>$${item.price.toFixed(2)} each</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" data-product="${item.product}" data-change="-1">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-product="${item.product}" data-change="1">+</button>
                        <button class="remove-btn" data-product="${item.product}">Remove</button>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.quantity-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const product = e.target.getAttribute('data-product');
                    const change = parseInt(e.target.getAttribute('data-change'));
                    updateQuantity(product, change);
                });
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const product = e.target.getAttribute('data-product');
                    removeFromCart(product);
                });
            });
        }

        // Payment Method Selection
        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options
                paymentOptions.forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                option.classList.add('selected');
                selectedPaymentMethod = option.getAttribute('data-method');
            });
        });

        // Checkout functionality
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'error');
                return;
            }
            
            if (!selectedPaymentMethod) {
                showNotification('Please select a payment method', 'error');
                return;
            }
            
            if (!isLoggedIn) {
                showNotification('Please login to complete your purchase', 'error');
                loginModal.style.display = 'block';
                return;
            }
            
            // Process payment (simulated)
            processPayment();
        });

        // Process payment (simulated)
        function processPayment() {
            // Show loading state
            checkoutBtn.textContent = 'Processing...';
            checkoutBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert(`Thank you for your order! Payment of $${cartTotal.toFixed(2)} has been processed via ${selectedPaymentMethod}.`);
                cart = [];
                updateCart();
                cartModal.style.display = 'none';
                
                // Reset checkout button
                checkoutBtn.textContent = 'Checkout';
                checkoutBtn.disabled = false;
                
                // Reset payment method
                paymentOptions.forEach(opt => opt.classList.remove('selected'));
                selectedPaymentMethod = null;
            }, 2000);
        }

        // Contact form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // In a real application, you would send this data to a server
            console.log('Contact form submitted:', { name, email, message });
            
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        });

        // Show notification
        function showNotification(message, type = 'success') {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = `notification ${type === 'error' ? 'error' : ''}`;
            notification.innerHTML = `
                <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
                <span>${message}</span>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Shop Now button functionality
        document.querySelector('.cta-btn').addEventListener('click', () => {
            document.querySelector('#covers').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate product cards with delay
                    if (entry.target.id === 'covers' || entry.target.id === 'glass-guards') {
                        const cards = entry.target.querySelectorAll('.product-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('animate');
                            }, index * 100);
                        });
                    }
                    
                    // Animate lamination items with delay
                    if (entry.target.id === 'laminations') {
                        const items = entry.target.querySelectorAll('.lamination-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('animate');
                            }, index * 100);
                        });
                    }
                    
                    // Animate accessory items with delay
                    if (entry.target.id === 'accessories') {
                        const items = entry.target.querySelectorAll('.accessory-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('animate');
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe sections
        sections.forEach(section => {
            observer.observe(section);
        });

        // Initialize
        updateUserInterface();
    