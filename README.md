# Spartans-Wardrobe-Web

## Overview
Spartan's Wardrobe is a leading apparel retailer, founded in 2025 which uses authentic fabrics to bring a quality and healthy clothing to customers.

## Features
- **Product Catalog**: Displays 8 T-shirts and 8 Hoodies with images, descriptions, and prices in LKR.
- **Interactive Modals**: Email subscription popup, product detail modal with size and quantity selection, and cart modal.
- **Cart Functionality**: Add products to cart, update quantities, calculate totals, and simulate checkout.
- **Smooth Navigation**: Scroll to sections (Home, T-shirts, Hoodies, About, Contact) with smooth transitions.
- **Form Validation**: Validates email subscriptions, contact forms, and newsletter sign-ups with client-side checks.
- **Size Charts**: Includes HTML tables for T-shirt and Hoodie size measurements (Chest, Length, Sleeve in cm).
- **Responsive Design**: Basic responsiveness with viewport meta and CSS media queries for size charts.
- **Hover Effects**: Product images scale on hover, with transitions for buttons and table rows.

## Technologies Used
- **HTML5**: Semantic structure with sections, modals, forms, tables, and media embedding.
- **CSS3**: Flexbox and Grid layouts, box model styling, transitions, and responsive design with media queries.
- **JavaScript (ES6+)**: DOM manipulation, event handling, array methods, and interactive functionality.

## Installation

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- No server required; runs locally via file system or simple HTTP server.

### Setup
1. **Clone the Repository**:

   ```bash
   git clone https://github.com/zurii-07/Spartans-Wardrobe-Web.git
   ```

2. **Navigate to Project Directory**:

   ```bash
   cd Spartans-Wardrobe-Web
   ```

3. **Run Locally**:

-Open index.html directly in a browser by double-clicking the file.
-Alternatively, use a local server (e.g., Python HTTP server):

```bash
python -m http.server 8000
```
-Then visit http://localhost:8000 in your browser.

4. **Verify File Structure**:

-Ensure CSS/, JS/, and IMAGES/ folders are in the root directory with respective files (styles.css, script.js, and image files).

## Usage

-**Explore Products**: Scroll to T-shirts or Hoodies sections to view products. Click "+ Add" to open the product modal and select size/quantity.

-**Subscribe**: Enter an email in the initial modal or footer form to simulate subscription (alerts confirm success).

-**Cart Management**: Click the cart icon to view items, update totals, and simulate checkout.

-**Contact**: Fill out the contact form with valid details to receive a success alert.

-**Size Charts**: Check T-shirt and Hoodie size charts below each product section for measurements.

## File Structure

```bash
spartans-wardrobe/
│
├── index.html          # Main HTML file with structure and content
├── CSS/
│   └── styles.css      # CSS for layout, styling, and responsiveness
├── JS/
│   └── script.js       # JavaScript for interactivity and logic
├── IMAGES/             # Folder containing all product and icon images
│   ├── T-1.jpeg        # Example T-shirt image
│   ├── H-1.jpg         # Example Hoodie image
│   ├── About.jpg       # About section image
│   └── icons8-*.png    # Icon images (e.g., shopping cart, email)
└── README.md           # This file
```

## License

- This project is licensed under the MIT License - see the LICENSE.md file for details (if applicable, create one).

## Acknowledgments

- Inspired by the warrior spirit of ancient Spartans.
- Built by Surakkitha Galappaththi as a personal project. (surakkithag@gmail.com)
- Thanks to online resources for CSS Grid and JavaScript ES6 tutorials.

## Screenshots

### Home
![Home](IMAGES/1 Home.png)

### T-Shirt Section
![Tshirt](IMAGES/2 T-Shirt.png)

### Hoodie Section
![Hoodie](IMAGES/3 Hoodies.png)

### About Us
![About](IMAGES/4 About.png)

### Contact Us
![Contact](IMAGES/5 Contact Us.png)

### Footer
![Footer](IMAGES/5 Footer.png)
