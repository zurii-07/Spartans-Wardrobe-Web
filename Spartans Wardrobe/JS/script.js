// Spartans Wardrobe\JS\script.js
document.addEventListener('DOMContentLoaded', () => {
    // Products data
    const products = [
        { id: 1, name: 'Classic Cotton T-Shirt', price: 24.99, desc: 'Comfortable 100% cotton t-shirt perfect for everyday wear.', images: ['Spartans Wardrobe\\IMAGES\\T-1.jpeg'] },
        { id: 2, name: 'Premium Graphic Tee', price: 29.99, desc: 'High-quality graphic tee with unique design and soft fabric.', images: ['Spartans Wardrobe\\IMAGES\\T-2.jpg'] },
        { id: 3, name: 'Vintage Wash T-Shirt', price: 1999, desc: 'Trendy vintage-style t-shirt with a worn-in feel.', images: ['Spartans Wardrobe\\IMAGES\\T-3.jpg'] },
        { id: 4, name: 'Sport Performance Tee', price: 2999, desc: 'Moisture-wicking performance tee for active lifestyles.', images: ['Spartans Wardrobe\\IMAGES\\T-4.jpg'] },
        { id: 5, name: 'Sport Performance Tee', price: 3120, desc: 'Moisture-wicking performance tee for active lifestyles.', images: ['Spartans Wardrobe\\IMAGES\\T-5.jpeg'] },
        { id: 6, name: 'Sport Performance Tee', price: 1499, desc: 'Moisture-wicking performance tee for active lifestyles.', images: ['Spartans Wardrobe\\IMAGES\\T-6.jpeg'] },
        { id: 7, name: 'Sport Performance Tee', price: 2999, desc: 'Moisture-wicking performance tee for active lifestyles.', images: ['Spartans Wardrobe\\IMAGES\\T-7.jpeg'] },
        { id: 8, name: 'Sport Performance Tee', price: 2450, desc: 'Moisture-wicking performance tee for active lifestyles.', images: ['Spartans Wardrobe\\IMAGES\\T-8.jpeg'] },
        { id: 9, name: 'Cozy Pullover Hoodie', price: 3500, desc: 'Ultra-soft fleece hoodie perfect for cold weather.', images: ['Spartans Wardrobe\\IMAGES\\H-1.jpg'] },
        { id: 10, name: 'Zip-Up Hoodie', price: 4999, desc: 'Durable zip-up hoodie with premium construction.', images: ['Spartans Wardrobe\\IMAGES\\H-2.jpeg'] },
        { id: 11, name: 'Oversized Hoodie', price: 5900, desc: 'Trendy oversized fit hoodie for maximum comfort.', images: ['Spartans Wardrobe\\IMAGES\\H-3.jpeg'] },
        { id: 12, name: 'Heavyweight Hoodie', price: 7000, desc: 'Premium heavyweight hoodie built to last.', images: ['Spartans Wardrobe\\IMAGES\\H-4.jpeg'] },
        { id: 13, name: 'Heavyweight Hoodie', price: 4500, desc: 'Premium heavyweight hoodie built to last.', images: ['Spartans Wardrobe\\IMAGES\\H-5.jpeg'] },
        { id: 14, name: 'Heavyweight Hoodie', price: 8999, desc: 'Premium heavyweight hoodie built to last.', images: ['Spartans Wardrobe\\IMAGES\\H-6.jpg'] },
        { id: 15, name: 'Heavyweight Hoodie', price: 6500, desc: 'Premium heavyweight hoodie built to last.', images: ['Spartans Wardrobe\\IMAGES\\H-7.jpeg'] },
        { id: 16, name: 'Heavyweight Hoodie', price: 7900, desc: 'Premium heavyweight hoodie built to last.', images: ['Spartans Wardrobe\\IMAGES\\H-8.jpeg'] }
    ];

        // Cart array
    let cart = [];

    // Show email modal on load
    const emailModal = document.getElementById('emailModal');
    emailModal.style.display = 'flex';

    // Close modals
    const closes = document.querySelectorAll('.close');
    closes.forEach(close => {
        close.addEventListener('click', () => {
            close.parentElement.parentElement.style.display = 'none';
        });
    });

    // Email form validation and submit
    document.getElementById('emailForm').addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('subscribeEmail').value;
        if (email && /\S+@\S+\.\S+/.test(email)) {
            alert('Subscribed successfully! You can now browse.');
            emailModal.style.display = 'none';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Footer newsletter validation
    document.getElementById('footerNewsletter').addEventListener('submit', e => {
        e.preventDefault();
        const email = e.target[0].value;
        if (email && /\S+@\S+\.\S+/.test(email)) {
            alert('Subscribed successfully!');
            e.target[0].value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Contact form validation
    document.getElementById('contactForm').addEventListener('submit', e => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const subject = e.target[2].value;
        const message = e.target[3].value;
        if (name && email && /\S+@\S+\.\S+/.test(email) && subject && message) {
            alert('Message sent successfully! We will get back to you soon.');
            e.target.reset();
        } else {
            alert('Please fill all fields correctly.');
        }
    });

        // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Shop Now button scrolls to T-Shirts
    document.querySelector('.shop-now').addEventListener('click', () => {
        document.getElementById('tshirts').scrollIntoView({ behavior: 'smooth' });
    });

    // Product image hover effect -have to add more images
    const productImgs = document.querySelectorAll('.product img');
    productImgs.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

        // Add to cart buttons - open product modal
    const addBtns = document.querySelectorAll('.add-btn');
    const productModal = document.getElementById('productModal');
    let currentProduct;
    addBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.parentElement.dataset.id);
            currentProduct = products.find(p => p.id === id);
            document.getElementById('modalImage').src = currentProduct.images[0].replace(/\\/g, '/');
            document.getElementById('modalName').textContent = currentProduct.name;
            document.getElementById('modalPrice').textContent = `Total: LKR ${currentProduct.price.toFixed(2)}`;
            document.getElementById('modalDesc').textContent = currentProduct.desc;
            document.getElementById('modalSize').value = 'M'; // Default
            document.getElementById('modalQty').value = 1;
            productModal.style.display = 'flex';
        });
    });

    // Add to cart from modal
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        const size = document.getElementById('modalSize').value;
        const qty = parseInt(document.getElementById('modalQty').value);
        if (qty > 0) {
            const existingItem = cart.find(item => item.id === currentProduct.id && item.size === size);
            if (existingItem) {
                existingItem.qty += qty;
            } else {
                cart.push({ id: currentProduct.id, name: currentProduct.name, price: currentProduct.price, size, qty });
            }
            updateCart();
            productModal.style.display = 'none';
            alert(`${qty} ${currentProduct.name} (Size: ${size}) added to cart!`);
        } else {
            alert('Quantity must be at least 1.');
        }
    });

    // Update cart badge and total
    function updateCart() {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        document.getElementById('cartBadge').textContent = totalItems;
        const cartItemsDiv = document.getElementById('cartItems');
        cartItemsDiv.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} (Size: ${item.size}) x ${item.qty} = LKR ${(item.price * item.qty).toFixed(2)}`;
            cartItemsDiv.appendChild(itemDiv);
            total += item.price * item.qty;
        });
        document.getElementById('cartTotal').textContent = `Total: LKR ${total.toFixed(2)}`;
    }

    // Show cart modal
    document.querySelector('.cart-icon').addEventListener('click', () => {
        if (cart.length > 0) {
            updateCart();
            document.getElementById('cartModal').style.display = 'flex';
        } else {
            alert('Your cart is empty!');
        }
    });

        // Checkout button (placeholder)
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout with total: LKR ' + document.getElementById('cartTotal').textContent.split(' ')[1]);
            cart = []; // Clear cart after checkout (for demo)
            updateCart();
            document.getElementById('cartModal').style.display = 'none';
        } else {
            alert('Your cart is empty!');
        }
    });

    });