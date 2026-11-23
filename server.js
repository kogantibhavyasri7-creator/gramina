const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 4173;

const orders = [];
const shops = [
  { id: 1, name: 'Sri Lakshmi General Store', location: 'Kothapalli, Andhra Pradesh', ownerName: '', phone: '', openingTime: '7:00 AM', closingTime: '8:30 PM', latitude: 16.6812, longitude: 80.8381 },
  { id: 2, name: 'Ravi Kirana & More', location: 'Marriguda, Andhra Pradesh' }
];

app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.get('/api/orders', (req, res) => {
  const shopId = req.query.shopId;
  const filtered = shopId ? orders.filter(order => Number(order.shopId) === Number(shopId)) : orders;
  res.json(filtered);
});

app.post('/api/orders', (req, res) => {
  const order = {
    id: req.body.id || `GM${Math.floor(10000 + Math.random() * 89999)}`,
    customerName: req.body.customerName || 'Customer',
    shopId: Number(req.body.shopId),
    shopName: req.body.shopName || 'Shop',
    status: req.body.status || 'placed',
    pickup: req.body.pickup || { date: 'Today', time: '6:00 PM' },
    total: Number(req.body.total || 0),
    payment: req.body.payment || 'pay_at_shop',
    createdAt: new Date().toISOString(),
    items: req.body.items || []
  };

  orders.push(order);
  io.emit('order-created', order);
  io.emit('orders-updated', orders);

  res.status(201).json(order);
});

app.post('/api/orders/:id/status', (req, res) => {
  const { id } = req.params;
  const target = orders.find(order => order.id === id);
  if (!target) {
    return res.status(404).json({ error: 'Order not found' });
  }

  const nextStatus = req.body.status || target.status;
  const allowedStatuses = ['placed', 'accepted', 'packing', 'ready_for_pickup', 'picked_up', 'completed', 'cancelled'];
  if (!allowedStatuses.includes(nextStatus)) {
    return res.status(400).json({ error: 'Invalid order status' });
  }
  if (['completed', 'cancelled'].includes(target.status)) {
    return res.status(409).json({ error: 'This order can no longer be changed' });
  }

  target.status = nextStatus;
  io.emit('order-updated', target);
  io.emit('orders-updated', orders);

  res.json(target);
});

app.get('/api/shops', (req, res) => {
  res.json(shops);
});

app.get('/api/shops/:id', (req, res) => {
  const shop = shops.find(item => item.id === Number(req.params.id));
  if (!shop) return res.status(404).json({ error: 'Shop not found' });
  res.json(shop);
});

app.put('/api/shops/:id', (req, res) => {
  const shop = shops.find(item => item.id === Number(req.params.id));
  if (!shop) return res.status(404).json({ error: 'Shop not found' });

  Object.assign(shop, {
    name: req.body.name || shop.name,
    location: req.body.location || shop.location,
    ownerName: req.body.ownerName || shop.ownerName,
    phone: req.body.phone || shop.phone,
    openingTime: req.body.openingTime || shop.openingTime,
    closingTime: req.body.closingTime || shop.closingTime,
    latitude: Number.isFinite(Number(req.body.latitude)) ? Number(req.body.latitude) : shop.latitude,
    longitude: Number.isFinite(Number(req.body.longitude)) ? Number(req.body.longitude) : shop.longitude
  });
  io.emit('shop-updated', shop);
  res.json(shop);
});

io.on('connection', (socket) => {
  socket.on('join-shop', (shopId) => {
    if (shopId) socket.join(`shop:${shopId}`);
  });

  socket.emit('welcome', { message: 'Connected to GramaMart realtime server' });
});

server.listen(PORT, () => {
  console.log(`GramaMart realtime server running on http://localhost:${PORT}`);
});
