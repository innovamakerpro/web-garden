// === MENU DATA ===
const menuData = {
  hamburguesas: [
    { name: "Sky Burger", desc: "Ternera, tomate, ketchup, mayonesa, mix de lechugas, cebolla caramelizada, huevo puntilla crujiente", price: "16,00€", image: "images/2023_10_SKY-BURGER-1-1024x683.jpg" },
    { name: "Entraña", desc: "Carne de entraña, rulo de cabra, cebolla caramelizada, salsa miel mostaza, mix de lechuga", price: "16,00€", image: "images/2023_10_DSC06067-1024x683.jpg" },
    { name: "Especial", desc: "Carne de vaca, bacon, queso, lechuga, tomate, cebolla caramelizada, salsa criminal de la casa", price: "16,00€", image: "images/2023_10_FOTO-3-1024x683.jpg" },
    { name: "Brutalisima de Pollo", desc: "Pollo rebozado, queso cheddar, mezclum lechuga, tomate, salsa criminal, ketchup", price: "16,00€", image: "images/2023_10_FOTO-CARTA-BRUTALISIMA-POLLO-1024x683.jpg" },
    { name: "Hamburguesa de No Pollo 🌱", desc: "Proteína de soja, queso vegano, mezclum lechuga, tomate, cebolla, salsa criminal vegana", price: "16,00€", image: "images/2023_10_no-pollo-foto-carta-1024x683.jpg" },
    { name: "Madre Tierra 🌱", desc: "Proteína de soja, guacamole, queso vegano, lechuga, tomate, frijoles negros", price: "16,00€", image: "images/2023_09_MADRE-TIERRA--1024x683.jpg" }
  ],
  parrillada: [
    { name: "Parrillada de Carne al Estilo Garden", desc: "Churrasco, costillas en salsa teriyaki, chorizo criollo, butifarra, chicharrón, pollo en chimichurri, yuca frita, patacones", price: "54,99€", image: "images/2023_11_PARRILLA-GARDEN-1024x683.jpg" },
    { name: "Plato Combinado de Carne", desc: "Chuleta de cerdo a la parrilla, huevo frito crujiente, patatas fritas, ensalada fresca. Incluye bebida", price: "18,00€", image: "images/2023_09_CHULETON-1024x619.jpg" },
    { name: "Plato Combinado de Pollo", desc: "Filete de pollo a la parrilla, huevo frito crujiente, patatas fritas, ensalada fresca. Incluye bebida", price: "18,00€", image: "images/2023_10_brochet-a-3-1-1024x683.jpg" },
    { name: "Chicharrón", desc: "Panceta de cerdo frita con tostadas de plátano macho y pico de gallo", price: "13,00€", image: "images/2024_01_IMG_2300-1024x683.jpg" }
  ],
  nachos: [
    { name: "Nachos Gratinados", desc: "Bacon, pollo, cheddar, guacamole, frijoles, salsa boloñesa, gratinados con mozzarella", price: "15,99€", image: "images/2023_10_nachos-1--1024x683.jpg" },
    { name: "Nachos Garden", desc: "Con salsa Garden (pimiento verde, rojo y pollo)", price: "14,50€", image: "images/2021_04_Nachos-Garden-The-Beer-Garden-Pamplona-1024x683.jpg" },
    { name: "Patatas Garden", desc: "Salsa ranchera, maíz, pollo, bacon y gratinadas con mozzarella", price: "13,50€", image: "images/2023_11_PATATAS-GARDEN-1024x683.jpg" },
    { name: "Patatas Criminales", desc: "Salchipapa al estilo Garden con carne picada y salsas de la casa", price: "13,50€", image: "images/2023_10_PATATAS-CRIMINALES--1024x683.jpg" },
    { name: "Alitas de Pollo", desc: "Con salsa de ketchup, miel-mostaza y salsa de la casa (picante)", price: "11,99€", image: "images/2021_04_Alitas-de-Pollo-The-Beer-Garden-Pamplona-1024x683.jpg" },
    { name: "Alitas Sweet Chilli", desc: "Bañadas en salsa sweet chilli (un poco picantes), salsa ranchera y criminal de la casa", price: "12,99€", image: "images/2023_12_SWEET-CHILLI-1024x683.jpg" },
    { name: "Fingers de Pollo de Corral", desc: "Con salsa de ketchup y salsa de la casa (picante)", price: "13,99€", image: "images/2023_12_FINGERS-1024x688.jpg" },
    { name: "Cazuelita Marina al Ajillo", desc: "Gambas flambeadas y salteadas al estilo Garden con toque picante", price: "15,99€", image: "images/2023_10_DSC00698-1024x683.jpg" },
    { name: "Rabas de Calamar", desc: "Con alioli de tinta de calamar", price: "13,99€", image: "images/2023_09_RABAS-1024x635.jpg" }
  ],
  ensaladas: [
    { name: "Ensalada Tropical Garden", desc: "Lechuga variada, mango, piña caramelizada, tomate cherry, salsa criminal, langostinos salteados", price: "14,99€", image: "images/2023_10_1CARTA-1024x683.jpg" },
    { name: "Ensalada César", desc: "Pollo de corral crujiente, lechuga variada, maíz, zanahoria, tomate cherry, crujiente de pan, salsa césar de la casa", price: "13,99€", image: "images/2023_09_CRISPY-CHIKEN-1024x683.jpg" },
    { name: "Ensalada Mar y Tierra", desc: "Lechuga variada, frutos secos, aguacate, fresas, maíz, salmón, queso de cabra, vinagreta de frutos silvestres", price: "14,50€", image: "images/2023_09_PICANHA-1024x628.jpg" },
    { name: "Tostadas 4 Quesos", desc: "Queso crema, roquefort, cabra, mozzarella y miel", price: "14,50€", image: "images/2021_04_Tostadas-4-Quesos-The-Beer-Garden-Pamplona-1024x683.jpg" },
    { name: "Tostadas Verduras", desc: "Pimiento verde, pimiento rojo, cebolla, calabacín, berenjena", price: "13,50€", image: "images/2021_04_Tostadas-Verduras-The-Beer-Garden-Pamplona-1024x683.jpg" },
    { name: "Tostadas Garden", desc: "Salmón ahumado, salsa de queso de la casa, aguacate, sésamo", price: "14,00€", image: "images/2021_04_Tostadas-Garden-The-Beer-Garden-Pamplona-1024x683.jpg" }
  ],
  hotdogs: [
    { name: "Techno Spice", desc: "Salchicha Frankfurt, pan artesanal, piña caramelizada, mozzarella, bacon deshidratado, mostaza y ketchup", price: "12,00€", image: "images/2023_09_TECHNO-SPICE-1024x635.jpg" },
    { name: "Tradicional", desc: "Salchicha Frankfurt, cebolla crujiente, mostaza y ketchup", price: "8,00€", image: "images/2021_04_Hot-Dog-Tradicional-The-Beer-Garden-Pamplona-1024x683.jpg" }
  ],
  bocadillos: [
    { name: "Valhalla", desc: "Carne de cerdo deshuesada en salsa teriyaki casera, plátano macho maduro", price: "13,99€", image: "images/2024_01_VALHALLA-FOTO-CARTA-1024x683.jpg" },
    { name: "Crispy Chicken", desc: "Pechuga de pollo rebozada, lechuga, tomate, aguacate, salsa de piña y coco, salsa criminal, salsa ranchera", price: "13,99€", image: "images/2023_09_CRISPY-CHIKEN-1024x683.jpg" }
  ],
  burritos: [
    { name: "Burrito Sancho Panza", desc: "Verduras salteadas con salsa teriyaki casera, carne boloñesa, bacon, frijoles, mozzarella. ¡Pídelo picante!", price: "13,00€", image: "images/2021_04_Burrito-Garden-The-Beer-Garden-Pamplona-1024x683.jpg" },
    { name: "Burrito Garden 🌱", desc: "Verduras en juliana salteadas y aderezadas al estilo Garden", price: "10,00€", image: "images/2021_04_Burrito-Garden-The-Beer-Garden-Pamplona-1024x683.jpg" },
    { name: "Empanadas", desc: "Hechas al momento. A elegir: carne, pollo, vegana o mixta. Pedido mínimo 3 uds.", price: "1,70€/ud", image: "images/2021_04_Empanadas-The-Beer-Garden-Pamplona-1024x683.jpg" }
  ],
  postres: [
    { name: "Brownie", desc: "Con explosión de chocolate caliente y helado de vainilla", price: "8,00€", image: "images/2023_12_DSC03819-1024x683.jpg" },
    { name: "Gofre con Fruta y Nata", desc: "Fruta de temporada, nata, siropes caseros de mango y frutos rojos", price: "10,50€", image: "images/2021_04_Gofre-Helado-The-Beer-Garden-Pamplona-1024x683.jpg" },
    { name: "Gofre con Helado", desc: "Helado de vainilla con chocolate", price: "9,00€", image: "images/2021_04_Gofre-Helado-The-Beer-Garden-Pamplona-1024x683.jpg" }
  ],
  cocteles: [
    { name: "Bulldog", desc: "2 Coronitas, tequila, sal, triple sec, zumo de lima, naranja, sirope de mango y melocotón", price: "17,00€", image: "images/2023_11_BULLDOG-CARTA-778x1024.jpg" },
    { name: "Blood Transfusion", desc: "Tequila, vodka, zumo de lima, pulpa de frutos rojos, salsa balsámica, sirope de melocotón", price: "17,50€", image: "images/2024_01_BLOOD-1-743x1024.jpg" },
    { name: "Italian Love", desc: "Ron blanco, amareto, malibu, frambuesa macerada, maracuyá, zumo de piña", price: "12,50€", image: "images/2024_01_coctel-2-839x1024.jpg" },
    { name: "Sunset", desc: "Ginebra, ginebra rosa, pulpa de mango y mora, zumo de lima", price: "14,99€", image: "images/2023_11_sunset-660x1024.jpg" },
    { name: "Mojitos", desc: "Clásico, fresa, maracuyá, mango, plata o plomo. Ron blanco, hojas de menta, lima fresca", price: "10,00€", image: "images/2023_11_MOJITO-CLASICO-698x1024.jpg" },
    { name: "Spicy Garden 🌶️", desc: "Tequila, triple seco, zumo de lima, jalapeños, fresa natural. ¡Cóctel picante!", price: "10,50€", image: "images/2023_11_SPICY-GARDEN-847x1024.jpg" },
    { name: "Eclipse", desc: "Vodka negro, ron blanco, licor de maracuyá, zumo de lima, zumo de arándanos", price: "12,50€", image: "images/2023_11_ECLIPSE-CARTA-884x1024.jpg" },
    { name: "Orgasmo", desc: "Vodka, licor de café, baileys, licor de cacao, nata, chispas de chocolate y almendras", price: "13,00€", image: "images/2023_11_ORGASMO-CARTA-734x1024.jpg" },
    { name: "Jack Sour", desc: "Whisky Jack Daniel's, zumo de lima, clara de huevo, canela en polvo y rama, azúcar morena", price: "12,50€", image: "images/2023_11_JACK-SOUR-CARTA-905x1024.jpg" },
    { name: "Malú", desc: "Brandy Veterano, zumo de lima, zumo de piña, sirope de coco, nata líquida", price: "11,50€", image: "images/2023_11_MALU-644x1024.jpg" },
    { name: "Coco Garden", desc: "Ron blanco, ron de coco, piña natural, crema de coco, lima, sirope de coco", price: "11,00€", image: "images/2023_11_COCO-GARDEN-CARTA-796x1024.jpg" },
    { name: "Margarita Frozen", desc: "Tequila, triple seco, zumo de lima, sirope de azúcar, sal", price: "9,50€", image: "images/2023_11_MARGARITA-723x1024.jpg" },
    { name: "Daiquiri Frozen", desc: "Ron blanco, sirope de sandía, zumo de lima natural, azúcar", price: "8,50€", image: "images/2023_11_DAIQUIRI-FRESA-CARTA-790x1024.jpg" },
    { name: "Tropical Garden", desc: "Ron añejo, amaretto, blue curaçao, zumo de lima, sirope de coco, puré de piña", price: "13,50€", image: "images/2023_11_TROPICAL-GARDEN-CARTA-887x1024.jpg" },
    { name: "Burmango", desc: "Ron oscuro, licor de melocotón, zumo de lima, puré de mango, sirope de mango", price: "11,50€", image: "images/2023_11_BURMANGO-770x1024.jpg" },
    { name: "Jameson Love", desc: "Whisky Jameson, maracuyá natural, leche condensada, fresas", price: "14,50€", image: "images/2023_11_JAMENSON-LOVE-786x1024.jpg" },
    { name: "Moon Spritz", desc: "Aperol, Puerto de Indias Lemon Berry, frizzante, agua carbonatada, naranja, menta", price: "12,00€", image: "images/2023_12_Moon-Spritz-1024x966.jpg" },
    { name: "Green Fresh", desc: "Tequila, vodka, zumo de lima, kiwi, pepino natural, sirope de azúcar", price: "11,50€", image: "images/2021_07_Green-Fresh-595x1024.jpg" },
    { name: "Moscow Mule", desc: "Vodka, zumo de lima, sirope de jengibre, sirope de azúcar, ginger beer", price: "10,50€", image: "images/2024_01_FRESA-3-688x1024.jpg" },
    { name: "Poliamor", desc: "Vodka AU de sandía, triple sec, lima fresca macerada, sirope de azúcar, agua carbonatada", price: "12,00€", image: "images/elementor_thumbs_Poliamor-scaled-qhe7m9hy4jowkwq0gl92mdl3kznev3timecsur89aw.jpg" }
  ],
  cervezas: [
    { name: "Michelada", desc: "Mango, maracuyá, sal, lima. Elige: picante, poco picante o sin picante", price: "6,50€", image: "images/2022_03_image_6487327-5-1024x832.jpg" },
    { name: "Budweiser (Pinta)", desc: "Cerveza americana clásica", price: "4,50€", image: "images/2021_03_CERVEZAS-THE-BEER-GARDEN-SLIDER-1.jpg" },
    { name: "Franziskaner (Pinta)", desc: "Cerveza de trigo alemana premium", price: "6,00€", image: "images/2021_03_CERVEZAS-THE-BEER-GARDEN-SLIDER-1.jpg" },
    { name: "Guinness Negra", desc: "La icónica cerveza irlandesa de barril", price: "5,50€", image: "images/2021_03_CERVEZAS-THE-BEER-GARDEN-SLIDER-1.jpg" },
    { name: "IPA (Pinta)", desc: "India Pale Ale artesanal", price: "6,00€", image: "images/2021_03_CERVEZAS-THE-BEER-GARDEN-SLIDER-1.jpg" },
    { name: "Leffe Rosa (Caña)", desc: "Cerveza belga con toques afrutados", price: "4,50€", image: "images/2021_03_CERVEZAS-THE-BEER-GARDEN-SLIDER-1.jpg" },
    { name: "Kwak Tostada", desc: "Cerveza belga tostada especial", price: "5,50€", image: "images/2021_03_CERVEZAS-THE-BEER-GARDEN-SLIDER-1.jpg" },
    { name: "Corona", desc: "La clásica cerveza mexicana", price: "3,70€", image: "images/2021_03_CERVEZAS-THE-BEER-GARDEN-SLIDER-1.jpg" }
  ]
};

// === RENDER MENU ===
function renderMenu(tab) {
  const container = document.getElementById('cartaContent');
  const items = menuData[tab] || [];
  container.innerHTML = items.map(item => `
    <div class="carta-item ${item.image ? 'has-img' : ''}">
      ${item.image ? `<div class="carta-item-img"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>` : ''}
      <div class="carta-item-content">
        <div class="carta-item-info">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
        </div>
        <span class="carta-item-price">${item.price}</span>
      </div>
    </div>
  `).join('');
}

// === TABS ===
document.querySelectorAll('.carta-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.carta-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.tab);
  });
});
renderMenu('hamburguesas');

// === NAVBAR SCROLL ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// === MOBILE MENU ===
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// === SCROLL REVEAL ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-left,.reveal-right,.reveal-up').forEach(el => observer.observe(el));

// === FORM ===
document.getElementById('reservasForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const nombre = fd.get('nombre');
  const telefono = fd.get('telefono');
  const fecha = fd.get('fecha');
  const hora = fd.get('hora');
  const personas = fd.get('personas');
  const mensaje = fd.get('mensaje') || '';

  // Save reservation to localStorage for admin panel
  const reservas = JSON.parse(localStorage.getItem('tbg_reservas') || '[]');
  const personasNum = parseInt(personas) || 1;
  reservas.push({
    id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
    nombre,
    telefono,
    fecha,
    hora,
    personas: personasNum,
    mensaje,
    estado: 'pendiente',
    mesaId: null,
    createdAt: new Date().toISOString()
  });
  localStorage.setItem('tbg_reservas', JSON.stringify(reservas));

  // Show thank-you overlay
  e.target.reset();
  const overlay = document.createElement('div');
  overlay.className = 'reserva-confirm-overlay';
  overlay.innerHTML = `
    <div class="reserva-confirm-box">
      <div class="confirm-icon">✓</div>
      <h3>¡Gracias por tu reserva!</h3>
      <p>Hemos recibido tu solicitud, <strong>${nombre}</strong>.<br>Te confirmaremos a la brevedad.</p>
      <button class="btn btn-primary" id="confirmOkBtn">Aceptar</button>
    </div>
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('visible'));

  document.getElementById('confirmOkBtn').addEventListener('click', () => {
    overlay.classList.remove('visible');
    setTimeout(() => { overlay.remove(); }, 400);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// === PARTICLES ===
(function createParticles() {
  const container = document.getElementById('heroParticles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      position:absolute;
      width:${size}px;height:${size}px;
      background:rgba(212,168,83,${Math.random() * 0.3 + 0.1});
      border-radius:50%;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation:float ${Math.random() * 6 + 4}s ease-in-out infinite;
      animation-delay:${Math.random() * 4}s;
    `;
    container.appendChild(p);
  }
  const style = document.createElement('style');
  style.textContent = `@keyframes float{0%,100%{transform:translateY(0) translateX(0);opacity:.3}50%{transform:translateY(-30px) translateX(10px);opacity:.8}}`;
  document.head.appendChild(style);
})();

// === ACTIVE NAV LINK ===
const sections = document.querySelectorAll('.section, .hero, .footer');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});
