(() => {
  const categories = [
    ['Rice', '🍚'], ['Dal', '🫘'], ['Flour', '🌾'], ['Oil', '🫗'], ['Spices', '🌶️'], ['Vegetables', '🥬'], ['Fruits', '🍌'], ['Dairy', '🥛'], ['Snacks', '🍪'], ['Beverages', '🧃'], ['Personal Care', '🧴'], ['Cleaning Products', '🧹'], ['Household Items', '🏠'], ['Other Groceries', '🧺']
  ];
  const products = [
    { id: 1, name: 'Tomatoes', local: 'Fresh tomatoes', price: 36, unit: '1 kg', emoji: '🍅', category: 'Vegetables' },
    { id: 2, name: 'Rice', local: 'Sona masuri rice', price: 68, unit: '1 kg', emoji: '🍚', category: 'Rice' },
    { id: 3, name: 'Milk', local: 'Fresh milk', price: 32, unit: '500 ml', emoji: '🥛', category: 'Dairy' },
    { id: 4, name: 'Bananas', local: 'Robusta bananas', price: 48, unit: '1 dozen', emoji: '🍌', category: 'Fruits' },
    { id: 5, name: 'Toor dal', local: 'Premium dal', price: 132, unit: '1 kg', emoji: '🫘', category: 'Dal' },
    { id: 6, name: 'Biscuits', local: 'Tea-time biscuits', price: 30, unit: '2 packs', emoji: '🍪', category: 'Snacks' },
    { id: 7, name: 'Wheat flour', local: ' chakki atta', price: 54, unit: '1 kg', emoji: '🌾', category: 'Flour' },
    { id: 8, name: 'Sunflower oil', local: 'Refined cooking oil', price: 142, unit: '1 litre', emoji: '🫗', category: 'Oil' },
    { id: 9, name: 'Turmeric powder', local: 'Pure turmeric', price: 42, unit: '100 g', emoji: '🌶️', category: 'Spices' },
    { id: 10, name: 'Tea', local: 'Everyday tea leaves', price: 86, unit: '250 g', emoji: '🫖', category: 'Beverages' },
    { id: 11, name: 'Bath soap', local: 'Gentle soap', price: 38, unit: '3 bars', emoji: '🧴', category: 'Personal Care' },
    { id: 12, name: 'Washing powder', local: 'Laundry powder', price: 72, unit: '500 g', emoji: '🧹', category: 'Cleaning Products' }
  ];
  const shops = [
    { id: 1, name: 'Sri Lakshmi General Store', distance: '0.8 km away', time: 'Ready in 30 min', emoji: '🏪', phone: '919876543210', rating: '4.8', latitude: 16.6812, longitude: 80.8381 },
    { id: 2, name: 'Ravi Kirana & More', distance: '1.2 km away', time: 'Ready in 45 min', emoji: '🛒', phone: '919876543211', rating: '4.6', latitude: 16.6848, longitude: 80.8264 },
    { id: 3, name: 'Annapurna Stores', distance: '1.8 km away', time: 'Ready in 30 min', emoji: '🏬', phone: '919876543212', rating: '4.7', latitude: 16.6689, longitude: 80.8392 },
    { id: 4, name: 'JAGADESH GENRAL STORES', distance: '1.4 km away', time: 'Open · Closes 10 pm', emoji: '🏪', phone: '9492487747', rating: '3.5', latitude: 16.6863264, longitude: 80.8408346 },
    { id: 5, name: 'SankaraRao Cool Drinks, General Stores & Tiffins', distance: '1.1 km away', time: 'Open · Closes 10 pm', emoji: '🛒', phone: '9494368128', rating: '4.0', latitude: 16.6847518, longitude: 80.8387745 },
    { id: 6, name: 'Mutyala Rao Fancy & General Stores', distance: '1.0 km away', time: 'Open · Closes 9:30 pm', emoji: '🏬', phone: '', rating: '2.5', latitude: 16.684807, longitude: 80.837803 },
    { id: 7, name: 'Sri Sai Kirana and General Stores', distance: '1.3 km away', time: 'Open · Closes 10 pm', emoji: '🏪', phone: '7799403331', rating: 'New', latitude: 16.6858967, longitude: 80.8407461 },
    { id: 8, name: 'BISMILLA COOL DRINK SHOP', distance: '5.2 km away', time: 'Open · Closes 11 pm', emoji: '🛒', phone: '8466042236', rating: '1.0', latitude: 16.682277, longitude: 80.7858636 },
    { id: 9, name: 'KHR General Stores', distance: '5.6 km away', time: 'Open · Closes 10 pm', emoji: '🏬', phone: '8656224030', rating: '3.6', latitude: 16.6779506, longitude: 80.7802608 },
    { id: 10, name: 'KANAKA DURGA GENERAL STORES', distance: '5.4 km away', time: 'Open · Closes 10 pm', emoji: '🏪', phone: '', rating: 'New', latitude: 16.6796574, longitude: 80.7829733 },
    { id: 11, name: 'TVS General Stores', distance: '5.3 km away', time: 'Open · Closes 9:30 pm', emoji: '🛒', phone: '9291234545', rating: '5.0', latitude: 16.6787117, longitude: 80.7822381 },
    { id: 12, name: 'Sri Padmavathi Super Market', distance: '5.3 km away', time: 'Open now', emoji: '🏬', phone: '', rating: 'New', latitude: 16.677713, longitude: 80.7823323 },
    { id: 13, name: 'DHARANI GENERAL STORES', distance: '11.5 km away', time: 'Open · Closes 10 pm', emoji: '🏪', phone: '8985352787', rating: '4.3', latitude: 16.650716, longitude: 80.7289227 },
    { id: 14, name: 'Sri Ramu General Stores', distance: '5.5 km away', time: 'Open now', emoji: '🛒', phone: '9885027392', rating: '5.0', latitude: 16.6792066, longitude: 80.7809474 }
  ];
  const villages = ['Kothapalli', 'Marriguda', 'Lakshmipuram'];
  const savedAvailability = JSON.parse(localStorage.getItem('gramamart-shop-availability') || '{}');
  shops.forEach(shop => { shop.unavailableProducts = savedAvailability[shop.id] || []; });
  const savedLocation = JSON.parse(localStorage.getItem('gramamart-location') || 'null');
  const defaultLocation = { latitude: 16.67533, longitude: 80.83273, accuracy: null };
  const persistedOrders = JSON.parse(localStorage.getItem('gramamart-orders') || '[]');
  const state = {
    cart: [],
    role: 'customer',
    village: localStorage.getItem('gramamart-village') || 'Kothapalli',
    locationChoice: localStorage.getItem('gramamart-location-choice') || 'village',
    locationName: localStorage.getItem('gramamart-location-name') || 'Kalaturu, Andhra Pradesh',
    name: localStorage.getItem('gramamart-name') || 'Lakshmi',
    ownerName: localStorage.getItem('gramamart-owner-name') || '',
    shopName: localStorage.getItem('gramamart-shop-name') || 'Sri Lakshmi General Store',
    shopLocation: localStorage.getItem('gramamart-shop-location') || 'Kothapalli, Andhra Pradesh',
    shopPhone: localStorage.getItem('gramamart-shop-phone') || '',
    shopOpeningTime: localStorage.getItem('gramamart-shop-opening') || '07:00',
    shopClosingTime: localStorage.getItem('gramamart-shop-closing') || '20:30',
    shopLatitude: Number(localStorage.getItem('gramamart-shop-latitude')) || shops[0].latitude,
    shopLongitude: Number(localStorage.getItem('gramamart-shop-longitude')) || shops[0].longitude,
    shop: shops[0],
    payment: 'pay_at_shop',
    pickup: { date: 'Today', time: '6:00 PM' },
    location: savedLocation || defaultLocation,
    locationLive: false,
    locationWatchId: null,
    order: null,
    orderStatus: 'placed',
    verified: false,
    productRatings: JSON.parse(localStorage.getItem('gramamart-ratings') || '{}'),
    orders: persistedOrders
  };
  const socket = window.io ? window.io() : null;
  function syncOrdersFromServer(nextOrders) {
    state.orders = Array.isArray(nextOrders) ? nextOrders : [];
    saveOrders();
    renderMerchant();
    renderOrders();
    renderTracking();
  }
  if (socket) {
    socket.on('connect', () => {
      if (state.shop?.id) socket.emit('join-shop', state.shop.id);
    });
    socket.on('orders-updated', (nextOrders) => {
      const liveOrder = state.order ? nextOrders.find(order => order.id === state.order) : null;
      if (liveOrder) state.orderStatus = liveOrder.status;
      syncOrdersFromServer(nextOrders);
    });
    socket.on('order-created', (newOrder) => {
      const existing = state.orders.find(order => order.id === newOrder.id);
      if (existing) {
        Object.assign(existing, newOrder);
      } else {
        state.orders = [newOrder, ...state.orders];
      }
      saveOrders();
      renderOrders();
      renderMerchant();
    });
    socket.on('order-updated', (updatedOrder) => {
      const index = state.orders.findIndex(order => order.id === updatedOrder.id);
      if (index !== -1) {
        state.orders[index] = { ...state.orders[index], ...updatedOrder };
      } else {
        state.orders = [updatedOrder, ...state.orders];
      }
      saveOrders();
      renderOrders();
      renderMerchant();
      if (state.order === updatedOrder.id) state.orderStatus = updatedOrder.status;
      renderTracking();
    });
    socket.on('shop-updated', (profile) => {
      if (Number(profile.id) !== 1) return;
      shops[0] = { ...shops[0], ...profile };
      if (state.shop.id === 1) state.shop = shops[0];
      state.shopName = profile.name || state.shopName;
      state.shopLocation = profile.location || state.shopLocation;
      state.shopLatitude = Number(profile.latitude) || state.shopLatitude;
      state.shopLongitude = Number(profile.longitude) || state.shopLongitude;
      renderShops('#homeShops', true); renderShops(); updateOwnerMapDetails();
    });
  }
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const money = value => `₹${value}`;
  const distanceKm = (first, second) => { const radians = value => value * Math.PI / 180; const latitudeDelta = radians(second.latitude - first.latitude); const longitudeDelta = radians(second.longitude - first.longitude); const a = Math.sin(latitudeDelta / 2) ** 2 + Math.cos(radians(first.latitude)) * Math.cos(radians(second.latitude)) * Math.sin(longitudeDelta / 2) ** 2; return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); };
  const shopDistance = shop => state.location ? `${distanceKm(state.location, shop).toFixed(1)} km away` : shop.distance;
  const selectedAreaLabel = () => state.locationChoice === 'live' ? state.locationName : (state.village || 'Select location');

  function showScreen(id) {
    $$('.screen').forEach(screen => screen.classList.toggle('active', screen.id === id));
    if (id === 'shopsScreen') renderLocationStatus();
    window.scrollTo(0, 0);
  }
  function toast(message) {
    const node = $('#toast');
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => node.classList.remove('show'), 2200);
  }
  function renderLanguages() {
    const languages = ['English', 'Telugu', 'Hindi', 'Tamil', 'Kannada', 'Malayalam', 'Marathi', 'Bengali', 'Gujarati', 'Punjabi', 'Odia', 'Assamese', 'Urdu'];
    const current = I18N.language;
    $('#languageGrid').innerHTML = languages.map((language, index) => `<button class="language-card ${language === current ? 'selected' : ''}" data-language="${language}"><span class="lang-icon">${['A', 'అ', 'अ', 'அ', 'ಅ', 'അ', 'अ', 'অ', 'અ', 'ਅ', 'ଓ', 'অ', 'ا'][index]}</span><span>${language}</span></button>`).join('');
    $$('.language-card').forEach(button => button.addEventListener('click', () => {
      I18N.apply(button.dataset.language);
      localStorage.setItem('gramamart-language', button.dataset.language);
      renderLanguages(); renderCategories();
      $('#languageValue').textContent = button.dataset.language;
    }));
    $('#languageValue').textContent = current;
  }
  function applyTranslations() {
    I18N.apply(I18N.language);
    document.documentElement.lang = I18N.language;
    const placeholders = { search: 'Search groceries', enterMobile: 'Enter mobile number' };
    $$('[data-i18n-placeholder]').forEach(input => { input.placeholder = I18N.t(input.dataset.i18nPlaceholder) || placeholders[input.dataset.i18nPlaceholder]; });
    renderLanguages();
  }
  function renderCategories() { $('#categoryRow').innerHTML = categories.map(([name, emoji], index) => `<button class="category ${index === 0 ? 'active' : ''}" data-category="${name}"><span>${emoji}</span><small>${I18N.t(`categories.${name}`)}</small></button>`).join(''); $$('#categoryRow .category').forEach(button => button.addEventListener('click', () => { $$('#categoryRow .category').forEach(item => item.classList.remove('active')); button.classList.add('active'); renderProducts(button.dataset.category); showScreen('productsScreen'); })); }
  function renderShops(target = '#shopList', compact = false) {
    const nearbyShops = [...shops].sort((first, second) => state.location ? distanceKm(state.location, first) - distanceKm(state.location, second) : 0);
    if (!compact && $('#shopCount')) $('#shopCount').textContent = `${nearbyShops.length} shops`;
    $(target).innerHTML = nearbyShops.map(shop => `<button class="${compact ? 'home-shop' : 'shop-card'}" data-shop-id="${shop.id}"><span class="shop-logo">${shop.emoji}</span><span><b>${shop.name}</b><small>★ ${shop.rating} · ${shopDistance(shop)} · ${shop.time}</small></span><i>›</i></button>`).join('');
    $$(`${target} [data-shop-id]`).forEach(button => button.addEventListener('click', () => {
      state.shop = shops.find(shop => shop.id === Number(button.dataset.shopId));
      $('#selectedShopTitle').textContent = state.shop.name.split(' ')[0] + ' Store';
      $('#productShopName').textContent = state.shop.name;
      renderProducts();
      showScreen('productsScreen');
    }));
  }
  function renderProducts(filter = 'all', search = '') {
    const query = search.toLowerCase();
    const visible = products.filter(product => (filter === 'all' || product.category === filter) && (!query || `${product.name} ${product.local}`.toLowerCase().includes(query)));
    $('#productsGrid').innerHTML = visible.map(product => {
      const quantity = state.cart.find(item => item.id === product.id)?.quantity || 0;
      const rating = state.productRatings[product.id] || '4.7';
      const available = !(state.shop.unavailableProducts || []).includes(product.id);
      return `<article class="product-card ${available ? '' : 'unavailable-product'}"><div class="product-image" role="img" aria-label="${product.name}">${product.emoji}</div><small>${product.local}</small><b>${product.name}</b><span>${product.unit} · <em class="product-rating">★ ${rating}</em></span><strong>${available ? money(product.price) : 'Unavailable'}</strong><button class="add-product" data-product-id="${product.id}" ${available ? '' : 'disabled'}>${available ? (quantity ? `− ${quantity} +` : '＋ Add') : 'Not available'}</button></article>`;
    }).join('') || '<p class="empty-state">No groceries found in this category.</p>';
    $$('.add-product').forEach(button => button.addEventListener('click', () => {
      if (button.disabled) return;
      const product = products.find(item => item.id === Number(button.dataset.productId));
      const existing = state.cart.find(item => item.id === product.id);
      if (existing) existing.quantity += 1; else state.cart.push({ ...product, quantity: 1 });
      renderProducts(filter, search); renderCartCount(); toast(`${product.name} ${I18N.t('added') || 'added to cart'}`);
    }));
  }
  function renderCartCount() { $('#cartCount').textContent = state.cart.reduce((total, item) => total + item.quantity, 0); }
  function renderCart() {
    const subtotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    $('#cartItems').innerHTML = state.cart.length ? state.cart.map(item => `<div class="cart-item"><span class="cart-emoji">${item.emoji}</span><div><b>${item.name}</b><small>${item.unit} · ${money(item.price)}</small></div><div class="quantity"><button data-cart-id="${item.id}" data-change="-1">−</button><b>${item.quantity}</b><button data-cart-id="${item.id}" data-change="1">+</button></div></div>`).join('') : '<div class="empty-cart"><span>🧺</span><h2>Your cart is empty</h2><p>Add a few groceries from a nearby shop.</p></div>';
    $('#subtotal').textContent = money(subtotal); $('#total').textContent = money(subtotal);
    $$('.quantity button').forEach(button => button.addEventListener('click', () => {
      const item = state.cart.find(entry => entry.id === Number(button.dataset.cartId));
      item.quantity += Number(button.dataset.change);
      if (item.quantity <= 0) state.cart = state.cart.filter(entry => entry.id !== item.id);
      renderCart(); renderCartCount();
    }));
  }
  function renderVillages() {
    $('#villageOptions').innerHTML = villages.map((village, index) => { const selected = state.locationChoice !== 'live' && state.village === village; return `<button class="village-option ${selected ? 'selected-village' : ''}" data-village="${village}"><span>📍</span><span><small>${index === 0 ? 'YOUR CURRENT AREA' : 'NEARBY VILLAGE'}</small><b>${village}</b><em>Telangana</em></span><i>${selected ? '✓' : '○'}</i></button>`; }).join('');
    $$('.village-option').forEach(button => button.addEventListener('click', () => { state.village = button.dataset.village; state.locationChoice = 'village'; localStorage.setItem('gramamart-location-choice', 'village'); renderVillages(); }));
    const locationOption = $('#useLocationOption');
    if (locationOption) { locationOption.classList.toggle('selected-village', state.locationChoice === 'live'); locationOption.querySelector('i').textContent = state.locationChoice === 'live' ? '✓' : '○'; locationOption.querySelector('em').textContent = state.locationLive ? `${state.locationName} · Live location connected` : state.locationName; }
  }
  function renderPickup() { $('#pickupShops').innerHTML = shops.map(shop => `<button class="pickup-shop ${state.shop.id === shop.id ? 'selected' : ''}" data-shop-id="${shop.id}"><span class="shop-logo">${shop.emoji}</span><span><b>${shop.name}</b><p>${shop.distance} · ${shop.time}</p></span><i>${state.shop.id === shop.id ? '✓' : '○'}</i></button>`).join(''); $$('.pickup-shop').forEach(button => button.addEventListener('click', () => { state.shop = shops.find(shop => shop.id === Number(button.dataset.shopId)); renderPickup(); })); $$('.payment-option').forEach(button => button.classList.toggle('selected', button.dataset.payment === state.payment)); $$('.payment-option').forEach(button => { const indicator = button.querySelector('i'); if (indicator) indicator.textContent = button.dataset.payment === state.payment ? '✓' : '○'; button.addEventListener('click', () => { if (button.dataset.payment === 'online') return toast('Online payment will be available soon. Pay at Shop is ready now.'); state.payment = 'pay_at_shop'; renderPickup(); }); }); }
  function placeOrder() { state.order = `GM${Math.floor(10000 + Math.random() * 89999)}`; state.orderStatus = 'placed'; state.verified = false; $('#orderNumber').textContent = state.order; $('#trackingNumber').textContent = state.order; $('#orderSummary').textContent = `${state.shop.name} · Today, 6:00 PM`; $('#paymentSummary').textContent = 'Pay at Shop · Pay when you collect your order'; $('#trackingMeta').textContent = `${state.shop.name} · Today, 6:00 PM`; state.cart = []; renderCartCount(); renderOrders(); renderTracking(); renderMerchant(); showScreen('confirmationScreen'); }
  function saveOrders() {
    localStorage.setItem('gramamart-orders', JSON.stringify(state.orders));
  }
  async function loadOrdersFromServer() {
    try {
      const response = await fetch(`/api/orders?shopId=${state.shop.id}`);
      if (!response.ok) return;
      const orders = await response.json();
      state.orders = orders;
      saveOrders();
      renderMerchant();
      renderOrders();
    } catch (error) {
      console.warn('Could not load orders from server:', error);
    }
  }
  function getOrdersForShop(shopId = state.shop?.id) {
    return [...state.orders]
      .filter(order => Number(order.shopId) === Number(shopId))
      .sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt));
  }
  async function updateOrderStatus(orderId, nextStatus) {
    const targetOrder = state.orders.find(order => order.id === orderId);
    if (!targetOrder) return false;

    try {
      const response = await fetch(`/api/orders/${orderId}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus })
      });
      if (!response.ok) return false;
      const updatedOrder = await response.json();
      Object.assign(targetOrder, updatedOrder);
    } catch (error) {
      console.warn('Order status update failed, updating locally:', error);
      targetOrder.status = nextStatus;
    }

    state.order = orderId;
    state.orderStatus = targetOrder.status;
    saveOrders();
    renderTracking();
    renderOrders();
    renderMerchant();
    return true;
  }
  function collectOwnerProfile() {
    const ownerName = $('#ownerNameInput').value.trim();
    const shopName = $('#ownerShopNameInput').value.trim();
    const shopLocation = $('#ownerShopLocationInput').value.trim();
    const shopPhone = $('#ownerPhoneInput').value.replace(/\D/g, '');
    const openingTime = $('#ownerOpeningTimeInput').value;
    const closingTime = $('#ownerClosingTimeInput').value;
    const latitude = Number($('#ownerLatitudeInput').value);
    const longitude = Number($('#ownerLongitudeInput').value);
    if (!ownerName || !shopName || !shopLocation || shopPhone.length !== 10 || !openingTime || !closingTime || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      toast('Complete shop details, phone number, hours, and map coordinates.');
      return false;
    }

    state.ownerName = ownerName;
    state.shopName = shopName;
    state.shopLocation = shopLocation;
    state.shopPhone = shopPhone;
    state.shopOpeningTime = openingTime;
    state.shopClosingTime = closingTime;
    state.shopLatitude = latitude;
    state.shopLongitude = longitude;
    state.shop.name = shopName;
    state.shop.latitude = latitude;
    state.shop.longitude = longitude;

    localStorage.setItem('gramamart-owner-name', state.ownerName);
    localStorage.setItem('gramamart-shop-name', state.shopName);
    localStorage.setItem('gramamart-shop-location', state.shopLocation);
    localStorage.setItem('gramamart-shop-phone', state.shopPhone);
    localStorage.setItem('gramamart-shop-opening', state.shopOpeningTime);
    localStorage.setItem('gramamart-shop-closing', state.shopClosingTime);
    localStorage.setItem('gramamart-shop-latitude', String(latitude));
    localStorage.setItem('gramamart-shop-longitude', String(longitude));

    fetch('/api/shops/1', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: state.shopName, location: state.shopLocation, ownerName: state.ownerName, phone: state.shopPhone, openingTime, closingTime, latitude, longitude }) }).catch(error => console.warn('Could not save shop profile to server:', error));

    $('#merchantOrderCard')?.setAttribute('data-shop-name', state.shopName);
    return true;
  }
  function fillOwnerProfile() {
    $('#ownerNameInput').value = state.ownerName;
    $('#ownerShopNameInput').value = state.shopName;
    $('#ownerShopLocationInput').value = state.shopLocation;
    $('#ownerPhoneInput').value = state.shopPhone;
    $('#ownerOpeningTimeInput').value = state.shopOpeningTime;
    $('#ownerClosingTimeInput').value = state.shopClosingTime;
    $('#ownerLatitudeInput').value = state.shopLatitude;
    $('#ownerLongitudeInput').value = state.shopLongitude;
  }
  function updateOwnerMapDetails() {
    $('#ownerShopAddress').textContent = `${state.shopName} · ${state.shopLocation}`;
    $('#ownerLocationStatus').textContent = `Location tracked: ${state.shopLatitude.toFixed(5)}, ${state.shopLongitude.toFixed(5)} · ${state.shopOpeningTime}-${state.shopClosingTime}`;
  }
  async function loadShopProfile() {
    try {
      const response = await fetch('/api/shops/1');
      if (!response.ok) return;
      const profile = await response.json();
      shops[0] = { ...shops[0], ...profile };
      if (state.shop.id === 1) state.shop = shops[0];
      state.shopName = profile.name || state.shopName;
      state.shopLocation = profile.location || state.shopLocation;
      state.shopLatitude = Number(profile.latitude) || state.shopLatitude;
      state.shopLongitude = Number(profile.longitude) || state.shopLongitude;
      renderShops('#homeShops', true); renderShops(); updateOwnerMapDetails();
    } catch (error) { console.warn('Could not load shop profile:', error); }
  }
  function renderTracking() {
    if (!state.order) return;
    const steps = ['placed', 'accepted', 'packing', 'ready_for_pickup', 'completed'];
    const current = state.orderStatus === 'picked_up' ? 4 : Math.max(0, steps.indexOf(state.orderStatus));
    const labels = { placed: 'Order placed', accepted: 'Shopkeeper accepted', packing: 'Items being packed', ready_for_pickup: 'Ready for pickup', picked_up: 'Order picked up', completed: 'Order completed', cancelled: 'Order cancelled' };
    const cancelButton = $('#cancelOrder');
    if (cancelButton) cancelButton.hidden = ['completed', 'picked_up', 'cancelled'].includes(state.orderStatus);
    if (state.orderStatus === 'completed') {
      $('#trackingStatus').textContent = 'Order completed. Come and pick it up here.';
      $('#trackingMeta').textContent = `${state.shop.name} · ${state.pickup.date}, ${state.pickup.time} · Please collect from the shop.`;
    } else if (state.orderStatus === 'cancelled') {
      $('#trackingStatus').textContent = 'Order cancelled';
      $('#trackingMeta').textContent = `${state.shop.name} · This order will not be prepared.`;
    } else {
      $('#trackingStatus').textContent = labels[state.orderStatus] || 'Order placed';
      $('#trackingMeta').textContent = `${state.shop.name} · ${state.pickup.date}, ${state.pickup.time}`;
    }
    $$('.timeline > div').forEach((row, index) => { row.classList.toggle('done', index < current || (index === current && state.orderStatus === 'completed')); row.classList.toggle('current', index === current && state.orderStatus !== 'completed'); row.classList.toggle('future', index > current); const icon = row.querySelector('i'); if (icon) icon.textContent = row.classList.contains('done') ? '✓' : row.classList.contains('current') ? '◌' : '○'; });
  }
  function renderMerchant() {
    const card = $('#merchantOrderCard');
    if (!card) return;

    const merchantOrders = getOrdersForShop();
    if (!merchantOrders.length) {
      card.innerHTML = '<div class="merchant-empty"><span>📦</span><h2>No active orders</h2><p>New customer orders will appear here.</p></div>';
      return;
    }

    const actions = {
      placed: ['Accept order', 'accepted'],
      accepted: ['Start packing', 'packing'],
      packing: ['Mark ready for pickup', 'ready_for_pickup'],
      ready_for_pickup: ['Verify QR / Order ID', 'picked_up'],
      picked_up: ['Complete order', 'completed'],
      completed: ['Order completed', 'completed'],
      cancelled: ['Order cancelled', 'cancelled']
    };

    card.innerHTML = merchantOrders.map(order => {
      const [label, next] = actions[order.status] || ['Update order', order.status];
      const statusText = order.status.replaceAll('_', ' ');
      const isCurrent = state.order === order.id || (!state.order && order.id === merchantOrders[0].id);
      return `<article class="merchant-order ${isCurrent ? 'selected' : ''}" data-order-id="${order.id}">
        <div class="merchant-order-top">
          <span>🧾</span>
          <div>
            <small>ORDER ${order.id}</small>
            <h2>${order.customerName}</h2>
            <p>${order.shopName} · ${order.pickup.date}, ${order.pickup.time}</p>
          </div>
          <b class="merchant-status">${statusText}</b>
        </div>
        <div class="merchant-qr">
          <div class="qr-code"><i></i><i></i><i></i></div>
          <span>${order.status === 'completed' ? 'Order completed. Please come and pick up here.' : 'Customer shows this QR or Order ID at pickup.'}</span>
        </div>
        <button class="primary-btn merchant-action" data-order-id="${order.id}" data-next-status="${next}" ${['completed', 'picked_up', 'cancelled'].includes(order.status) ? 'disabled' : ''}>${label}</button>
        ${['completed', 'picked_up', 'cancelled'].includes(order.status) ? '' : `<button class="secondary-btn merchant-cancel" data-order-id="${order.id}">Cancel order</button>`}
      </article>`;
    }).join('');

    $$('.merchant-action').forEach(button => {
      button.addEventListener('click', async () => {
        const orderId = button.dataset.orderId;
        const targetOrder = state.orders.find(order => order.id === orderId);
        const next = button.dataset.nextStatus;
        if (!targetOrder) return;

        try {
          const response = await fetch(`/api/orders/${orderId}/status`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: next })
          });

          if (response.ok) {
            const updatedOrder = await response.json();
            const index = state.orders.findIndex(order => order.id === orderId);
            if (index !== -1) state.orders[index] = { ...state.orders[index], ...updatedOrder };
            state.order = orderId;
            state.orderStatus = updatedOrder.status;
            if (state.orderStatus === 'ready_for_pickup') state.verified = true;
            saveOrders();
          }
        } catch (error) {
          console.warn('Status update failed, updating locally:', error);
          state.order = orderId;
          state.orderStatus = targetOrder.status;
          if (state.orderStatus === 'ready_for_pickup') state.verified = true;
          targetOrder.status = next;
          state.orderStatus = next;
          saveOrders();
        }

        renderTracking();
        renderOrders();
        renderMerchant();

        if (state.orderStatus === 'completed') {
          const pickupMessage = `Order completed. Please come and pick it up here: ${state.shopName || state.shop.name}`;
          toast(pickupMessage);
        } else {
          toast(`Order marked ${state.orderStatus.replaceAll('_', ' ')}.`);
        }
      });
    });
    $$('.merchant-cancel').forEach(button => button.addEventListener('click', async () => {
      if (!window.confirm('Cancel this order?')) return;
      const cancelled = await updateOrderStatus(button.dataset.orderId, 'cancelled');
      if (cancelled) toast('Order cancelled for the customer.');
      else toast('This order could not be cancelled.');
    }));
  }
  function renderMerchantPanel(panel = 'inventory') { const node = $('#merchantPanel'); if (!node) return; const inventory = products.map(product => { const available = !(state.shop.unavailableProducts || []).includes(product.id); return `<button class="inventory-row ${available ? '' : 'low'}" data-stock-product="${product.id}"><span>${product.emoji}</span><b>${product.name}</b><small>${money(product.price)} · ${available ? 'Available' : 'Unavailable'}</small><i>${available ? 'Mark unavailable' : 'Mark available'}</i></button>`; }).join(''); const panels = { inventory: `<h2>Inventory</h2>${inventory}<button class="primary-btn">＋ Add product</button>`, sales: '<h2>Today\'s sales</h2><div class="merchant-sales-total">₹18,420 <small>64 orders across pickup slots</small></div><p class="merchant-muted">Best seller: Sona masuri rice</p><p class="merchant-muted">Low-stock alerts: 2 products need attention</p>', shop: '<h2>Shop profile</h2><label class="merchant-field">Shop name<input value="Sri Lakshmi General Store"></label><label class="merchant-field">Opening time<input value="7:00 AM"></label><label class="merchant-field">Closing time<input value="8:30 PM"></label><button class="primary-btn">Save shop details</button>' }; node.innerHTML = panels[panel] || panels.inventory; $$('#merchantPanel [data-stock-product]').forEach(button => button.addEventListener('click', () => { const productId = Number(button.dataset.stockProduct); state.shop.unavailableProducts ||= []; state.shop.unavailableProducts = state.shop.unavailableProducts.includes(productId) ? state.shop.unavailableProducts.filter(id => id !== productId) : [...state.shop.unavailableProducts, productId]; savedAvailability[state.shop.id] = state.shop.unavailableProducts; localStorage.setItem('gramamart-shop-availability', JSON.stringify(savedAvailability)); renderMerchantPanel('inventory'); renderProducts(); toast(state.shop.unavailableProducts.includes(productId) ? 'Product marked unavailable.' : 'Product marked available.'); })); }
  function renderOrders() {
    const customerOrders = state.orders.filter(order => order.customerName === state.name || order.shopId === state.shop?.id || !state.orders.length);
    $('#ordersList').innerHTML = customerOrders.length ? customerOrders.map(order => `<article class="order-history-card"><button class="order-card" data-screen="trackingScreen"><span>🛍️</span><div><small>ORDER ID ${order.id}</small><b>${order.shopName}</b><p>${order.status.replaceAll('_', ' ')} · ${order.pickup.date}, ${order.pickup.time}</p></div><strong>›</strong></button><div class="order-history-actions"><button data-action="reorder">🔄 Order again</button><button data-action="rate-order">⭐ Rate shop</button></div></article>`).join('') : '<div class="empty-cart"><span>🧾</span><h2>No orders yet</h2><p>Your pickup orders will appear here.</p><button class="primary-btn" data-screen="homeScreen">Start shopping</button></div>';
  }
  function renderNotifications() { $('#notificationsList').innerHTML = `<article class="notification-item unread"><span>📦</span><div><b>Your order ${state.order || 'GM50121'} is being prepared</b><p>Your shopkeeper will let you know when it is ready for pickup.</p><small>Just now</small></div></article><article class="notification-item"><span>🏪</span><div><b>Pickup is simple</b><p>Show your order ID or QR code at your chosen shop.</p><small>Today</small></div></article>`; }
  function cacheCatalog() { try { localStorage.setItem('gramamart-catalog-cache', JSON.stringify({ products, shops, savedAt: Date.now() })); } catch (error) { /* Storage can be unavailable in private browsing. */ } }
  function updateNetworkNotice() { const notice = $('#networkNotice'); if (!notice) return; notice.hidden = navigator.onLine; }
  function speakInstructions() { if (!('speechSynthesis' in window)) return toast('Voice instructions are not supported on this phone.'); const languageCodes = { English: 'en-IN', Telugu: 'te-IN', Hindi: 'hi-IN', Tamil: 'ta-IN', Kannada: 'kn-IN', Malayalam: 'ml-IN', Marathi: 'mr-IN', Bengali: 'bn-IN', Gujarati: 'gu-IN', Punjabi: 'pa-IN', Odia: 'or-IN', Assamese: 'as-IN', Urdu: 'ur-IN' }; const voiceText = { English: 'Choose a shop, add groceries, select a pickup time, and pay when you collect your order.', Telugu: 'దుకాణాన్ని ఎంచుకుని, సరుకులు జోడించి, పికప్ సమయాన్ని ఎంచుకోండి. సరుకులు తీసుకునేటప్పుడు చెల్లించండి.', Hindi: 'दुकान चुनें, सामान जोड़ें, पिकअप समय चुनें और सामान लेते समय भुगतान करें।', Tamil: 'கடையைத் தேர்ந்தெடுத்து, பொருட்களைச் சேர்த்து, பெறும் நேரத்தைத் தேர்வு செய்யுங்கள். பொருட்களைப் பெறும்போது பணம் செலுத்துங்கள்.', Kannada: 'ಅಂಗಡಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ, ಸಾಮಗ್ರಿಗಳನ್ನು ಸೇರಿಸಿ, ಪಿಕಪ್ ಸಮಯವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ. ಸಾಮಗ್ರಿಗಳನ್ನು ಪಡೆಯುವಾಗ ಪಾವತಿಸಿ.', Malayalam: 'കട തിരഞ്ഞെടുക്കുക, സാധനങ്ങൾ ചേർക്കുക, പിക്കപ്പ് സമയം തിരഞ്ഞെടുക്കുക. സാധനങ്ങൾ എടുക്കുമ്പോൾ പണമടയ്ക്കുക.', Marathi: 'दुकान निवडा, सामान जोडा, पिकअपची वेळ निवडा आणि सामान घेताना पैसे द्या.', Bengali: 'দোকান বেছে নিন, পণ্য যোগ করুন, পিকআপের সময় বেছে নিন এবং পণ্য নেওয়ার সময় টাকা দিন।', Gujarati: 'દુકાન પસંદ કરો, સામાન ઉમેરો, પિકઅપનો સમય પસંદ કરો અને સામાન લેતી વખતે ચુકવણી કરો.', Punjabi: 'ਦੁਕਾਨ ਚੁਣੋ, ਸਮਾਨ ਜੋੜੋ, ਪਿਕਅੱਪ ਦਾ ਸਮਾਂ ਚੁਣੋ ਅਤੇ ਸਮਾਨ ਲੈਣ ਵੇਲੇ ਭੁਗਤਾਨ ਕਰੋ।', Odia: 'ଦୋକାନ ବାଛନ୍ତୁ, ସାମଗ୍ରୀ ଯୋଡନ୍ତୁ, ପିକଅପ୍ ସମୟ ବାଛନ୍ତୁ ଏବଂ ସାମଗ୍ରୀ ନେବାବେଳେ ପଇସା ଦିଅନ୍ତୁ।', Assamese: 'দোকান বাছক, সামগ্ৰী যোগ কৰক, পিকআপৰ সময় বাছক আৰু সামগ্ৰী লওঁতে পইচা দিয়ক।', Urdu: 'دکان منتخب کریں، سامان شامل کریں، پک اپ کا وقت منتخب کریں اور سامان لیتے وقت ادائیگی کریں۔' }; const speech = new SpeechSynthesisUtterance(voiceText[I18N.language] || voiceText.English); speech.lang = languageCodes[I18N.language] || 'en-IN'; window.speechSynthesis.cancel(); window.speechSynthesis.speak(speech); toast('Playing instructions'); }
  function startVoiceSearch(inputId) { const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition; if (!Recognition) return toast('Voice search is not supported on this phone.'); const recognition = new Recognition(); recognition.lang = ({ English: 'en-IN', Telugu: 'te-IN', Hindi: 'hi-IN', Tamil: 'ta-IN', Kannada: 'kn-IN', Malayalam: 'ml-IN', Marathi: 'mr-IN', Bengali: 'bn-IN', Gujarati: 'gu-IN', Punjabi: 'pa-IN', Odia: 'or-IN', Assamese: 'as-IN', Urdu: 'ur-IN' })[I18N.language] || 'en-IN'; recognition.onstart = () => toast('Listening...'); recognition.onresult = event => { const input = $(`#${inputId}`); input.value = event.results[0][0].transcript; input.dispatchEvent(new Event('input', { bubbles: true })); }; recognition.onerror = () => toast('Please try voice search again.'); recognition.start(); }
  function renderLocationStatus() { if (!$('#locationStatus') || !state.location) return; $('#locationStatus').textContent = state.locationLive ? `Live location connected · ±${Math.round(state.location.accuracy || 0)} m` : state.location.accuracy ? `Last location saved · ±${Math.round(state.location.accuracy)} m` : 'Saved location'; $('#locationCoordinates').hidden = false; $('#locationCoordinates').textContent = `${state.location.latitude.toFixed(5)}, ${state.location.longitude.toFixed(5)}`; $('#useLiveLocation').textContent = state.locationLive ? '⏹ Stop live location' : state.location.accuracy ? '📍 Connect live location' : '📍 Add live location'; }
  function stopLiveLocation() { if (state.locationWatchId !== null) navigator.geolocation.clearWatch(state.locationWatchId); state.locationWatchId = null; state.locationLive = false; renderLocationStatus(); toast('Live location disconnected.'); }
  function requestLiveLocation() { if (!navigator.geolocation) return toast('Live location is not available on this device.'); if (state.locationLive) return stopLiveLocation(); const button = $('#useLiveLocation'); if (button) { button.disabled = true; button.textContent = '📍 Connecting...'; } state.locationWatchId = navigator.geolocation.watchPosition(position => { state.location = { latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy }; state.locationLive = true; localStorage.setItem('gramamart-location', JSON.stringify(state.location)); renderLocationStatus(); if (button) { button.disabled = false; button.textContent = '⏹ Stop live location'; } renderShops('#homeShops', true); renderShops(); }, error => { if (button) { button.disabled = false; renderLocationStatus(); } state.locationLive = false; const message = error.code === error.PERMISSION_DENIED ? 'Location permission was not allowed. You can use your village instead.' : 'Live location paused. You can use your village instead.'; toast(message); }); toast('Connecting to live location...'); }
  function openOrderReview() { if (!state.cart.length) return toast('Add groceries before continuing'); const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0); $('#reviewTotal').textContent = money(total); $('#reviewDetails').textContent = `${state.cart.length} grocery item${state.cart.length === 1 ? '' : 's'} from ${state.shop.name} for ${state.pickup.date}, ${state.pickup.time}.`; $('#orderReviewModal').hidden = false; }
  async function createOrder() {
    const orderId = `GM${Math.floor(10000 + Math.random() * 89999)}`;
    const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order = {
      id: orderId,
      status: 'placed',
      customerName: state.name,
      shopId: state.shop.id,
      shopName: state.shop.name,
      items: [...state.cart],
      pickup: { ...state.pickup },
      total,
      payment: state.payment,
      createdAt: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });
      if (response.ok) {
        const serverOrder = await response.json();
        state.orders = [...state.orders.filter(existing => existing.id !== serverOrder.id), serverOrder];
        saveOrders();
      }
    } catch (error) {
      console.warn('Server order save failed, using local fallback:', error);
      state.orders = [...state.orders.filter(existing => existing.id !== orderId), order];
      saveOrders();
    }

    state.order = orderId;
    state.orderStatus = 'placed';
    state.verified = false;
    $('#orderNumber').textContent = state.order; $('#trackingNumber').textContent = state.order; $('#orderSummary').textContent = state.shop.name; $('#pickupDate').textContent = state.pickup.date; $('#pickupTime').textContent = state.pickup.time; $('#confirmationTotal').textContent = money(total); $('#paymentSummary').textContent = 'Pay at Shop · Pay when you collect your order'; $('#trackingMeta').textContent = `${state.shop.name} · ${state.pickup.date}, ${state.pickup.time}`; state.cart = []; $('#orderReviewModal').hidden = true; renderCartCount(); renderOrders(); renderNotifications(); renderTracking(); renderMerchant(); showScreen('confirmationScreen');
  }
  function addProductFromPrompt() { const name = window.prompt('Product name'); if (!name) return; const price = Number(window.prompt('Price in rupees', '50')); const stock = Number(window.prompt('Stock quantity', '10')); if (!Number.isFinite(price) || price < 0 || !Number.isFinite(stock) || stock < 0) return toast('Please enter a valid price and stock.'); const product = { id: Math.max(...products.map(item => item.id)) + 1, name, local: name, price, unit: '1 pack', emoji: '🧺', category: 'Other Groceries' }; products.push(product); renderMerchantPanel('inventory'); renderProducts(); cacheCatalog(); toast(`${name} added to your shop inventory.`); }

  document.addEventListener('click', event => { const action = event.target.closest('[data-action]'); if (action?.dataset.action === 'reorder') { state.cart = products.slice(0, 3).map(product => ({ ...product, quantity: 1 })); renderCart(); renderCartCount(); showScreen('cartScreen'); toast('Your previous groceries are ready to review.'); return; } if (action?.dataset.action === 'rate-order') { const rating = window.prompt('Rate this shop from 1 to 5', '5'); if (rating) toast('Thank you for rating this shop.'); return; } const addButton = event.target.closest('#merchantPanel .primary-btn'); if (addButton && $('#merchantPanel h2')?.textContent === 'Inventory') { addProductFromPrompt(); return; } const target = event.target.closest('[data-screen]'); if (!target) return; if (target.dataset.screen === 'cartScreen') renderCart(); if (target.dataset.screen === 'notificationsScreen') renderNotifications(); showScreen(target.dataset.screen); });
  $$('.role-switch button').forEach(button => button.addEventListener('click', () => { $$('.role-switch button').forEach(item => item.classList.remove('active')); button.classList.add('active'); state.role = button.dataset.role; }));
  $('#languageContinue').addEventListener('click', () => showScreen('loginScreen'));
  $('#sendOtp').addEventListener('click', () => { if ($('#mobileInput').value.replace(/\D/g, '').length !== 10) return toast('Please enter a valid 10-digit number'); showScreen('otpScreen'); });
  $('#verifyOtp').addEventListener('click', () => { if (state.role === 'shopkeeper') { if (!state.ownerName || !state.shopName || !state.shopLocation || !state.shopPhone) { fillOwnerProfile(); showScreen('ownerProfileScreen'); return; } const shopHeader = document.querySelector('#shopkeeperScreen .merchant-header h1'); if (shopHeader) shopHeader.textContent = state.shopName; const merchantTitle = document.querySelector('#shopkeeperScreen .merchant-header p'); if (merchantTitle) merchantTitle.textContent = state.shopName.toUpperCase(); updateOwnerMapDetails(); if (socket) socket.emit('join-shop', state.shop.id); loadOrdersFromServer(); renderMerchant(); renderMerchantPanel('inventory'); showScreen('shopkeeperScreen'); return; } state.village = ''; state.locationChoice = state.location ? 'live' : 'village'; localStorage.removeItem('gramamart-village'); localStorage.setItem('gramamart-location-choice', state.locationChoice); requestLiveLocation(); showScreen('profileScreen'); });
  $('#ownerProfileContinue').addEventListener('click', () => { if (!collectOwnerProfile()) return; updateOwnerMapDetails(); const shopHeader = document.querySelector('#shopkeeperScreen .merchant-header h1'); if (shopHeader) shopHeader.textContent = state.shopName; const merchantTitle = document.querySelector('#shopkeeperScreen .merchant-header p'); if (merchantTitle) merchantTitle.textContent = state.shopName.toUpperCase(); if (socket) socket.emit('join-shop', state.shop.id); loadOrdersFromServer(); renderMerchant(); renderMerchantPanel('inventory'); showScreen('shopkeeperScreen'); });
  $('#ownerUseLocation').addEventListener('click', () => { if (!navigator.geolocation) return toast('Location is not available on this device.'); navigator.geolocation.getCurrentPosition(position => { $('#ownerLatitudeInput').value = position.coords.latitude.toFixed(6); $('#ownerLongitudeInput').value = position.coords.longitude.toFixed(6); toast('Shop location added from your device.'); }, () => toast('Allow location access or enter coordinates manually.')); });
  $('#ownerOpenMap').addEventListener('click', () => { const query = `${state.shopLatitude},${state.shopLongitude}`; window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank'); });
  $('#ownerEditProfile').addEventListener('click', () => { fillOwnerProfile(); showScreen('ownerProfileScreen'); });
  $('#profileContinue').addEventListener('click', () => { state.name = $('#nameInput').value.trim() || 'Lakshmi'; localStorage.setItem('gramamart-name', state.name); renderVillages(); showScreen('villageScreen'); });
  $('#useLocationOption').addEventListener('click', () => { state.locationChoice = 'live'; localStorage.setItem('gramamart-location-choice', 'live'); renderVillages(); toast('Using your current location to find nearby shops.'); });
  $('#villageContinue').addEventListener('click', () => { if (state.locationChoice !== 'live' && !state.village) return toast('Choose your village or use your current location'); if (state.locationChoice === 'live') localStorage.removeItem('gramamart-village'); else localStorage.setItem('gramamart-village', state.village); $('#currentVillage').textContent = selectedAreaLabel(); $('#mapVillage').textContent = selectedAreaLabel(); $('#customerName').textContent = state.name; $('#settingsName').textContent = state.name; renderShops('#homeShops', true); showScreen('homeScreen'); });
  $('#clearCart').addEventListener('click', () => { state.cart = []; renderCart(); renderCartCount(); });
  $('#checkout').addEventListener('click', () => { if (!state.cart.length) return toast('Add groceries before continuing'); renderPickup(); showScreen('pickupScreen'); });
  $('#placeOrder').addEventListener('click', openOrderReview);
  $('#confirmPlaceOrder').addEventListener('click', createOrder);
  $('#cancelPlaceOrder').addEventListener('click', () => { $('#orderReviewModal').hidden = true; });
  $('#closeOrderReview').addEventListener('click', () => { $('#orderReviewModal').hidden = true; });
  $('#trackOrder').addEventListener('click', () => { renderTracking(); showScreen('trackingScreen'); });
  $('#cancelOrder').addEventListener('click', async () => {
    if (!state.order || !window.confirm('Cancel this order?')) return;
    const cancelled = await updateOrderStatus(state.order, 'cancelled');
    if (cancelled) {
      renderNotifications();
      toast('Your order has been cancelled.');
    } else {
      toast('This order could not be cancelled.');
    }
  });
  $('#changeLanguage').addEventListener('click', () => { renderLanguages(); showScreen('languageScreen'); });
  $('#speakInstructions').addEventListener('click', speakInstructions);
  $('#callShop').addEventListener('click', () => { window.location.href = `tel:+${state.shop.phone}`; });
  $('#openShopMap').addEventListener('click', () => { const query = state.location ? `${state.shop.latitude},${state.shop.longitude}` : `${state.shop.name}, ${state.village}`; const origin = state.location ? `&origin=${state.location.latitude},${state.location.longitude}` : ''; window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}${origin}`, '_blank'); });
  $('#useLiveLocation').addEventListener('click', requestLiveLocation);
  $$('.voice-btn').forEach(button => button.addEventListener('click', () => startVoiceSearch(button.dataset.voiceSearch)));
  $$('.help-row').forEach(button => button.addEventListener('click', () => { const messages = { voice: 'Tap the microphone and say the grocery you need.', pickup: 'Choose a shop, select a time, then show your QR code when you collect.', call: 'You can call your chosen shop from the product screen.' }; if (button.dataset.help === 'voice') speakInstructions(); else toast(messages[button.dataset.help]); }));
  $('#homeSearch').addEventListener('input', event => { renderProducts('all', event.target.value); showScreen('productsScreen'); });
  $('#shopSearch').addEventListener('input', event => renderShops('#shopList', false));
  $('#productSearch').addEventListener('input', event => renderProducts($('.product-chips .active')?.dataset.category || 'all', event.target.value));
  $$('.product-chips button').forEach(button => button.addEventListener('click', () => { $$('.product-chips button').forEach(item => item.classList.remove('active')); button.classList.add('active'); renderProducts(button.dataset.category, $('#productSearch').value); }));
  $$('.pickup-times button').forEach(button => button.addEventListener('click', () => { $$('.pickup-times button').forEach(item => item.classList.remove('selected')); button.classList.add('selected'); state.pickup = { date: button.childNodes[0].textContent.trim(), time: button.querySelector('b').textContent.trim() }; }));
  $('#customerName').textContent = state.name; $('#settingsName').textContent = state.name; $('#currentVillage').textContent = state.village; $('#mapVillage').textContent = state.village;
  localStorage.setItem('gramamart-location-name', state.locationName);
  $$('.merchant-tools button').forEach(button => button.addEventListener('click', () => renderMerchantPanel(button.dataset.merchantPanel)));
  window.addEventListener('online', updateNetworkNotice); window.addEventListener('offline', updateNetworkNotice); updateNetworkNotice(); cacheCatalog();
  applyTranslations(); renderCategories(); renderShops('#homeShops', true); renderShops(); renderProducts(); renderCart(); renderOrders(); renderNotifications(); renderTracking(); renderMerchant(); renderMerchantPanel(); renderCartCount(); renderVillages(); loadShopProfile();
})();