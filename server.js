const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
// const PORT = 5000;
const PORT = process.env.PORT || 5000;

const Contact = require('./models/contact');

app.use(cors());
app.use(express.json());


// Serve static JSON data
app.get('/api/slides', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, 'data', 'slides.json'));
  res.json(JSON.parse(data));
});

app.get('/api/features', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, 'data', 'features.json'));
  res.json(JSON.parse(data));
});

app.get('/api/pricing', (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, 'data', 'pricing.json'));
  res.json(JSON.parse(data));
});

// Contact form handler
// app.post('/api/contact', (req, res) => {
//   const { name, email, message } = req.body;
//   console.log('Contact form submitted:', { name, email, message });
//   res.status(200).json({ success: true, message: 'Form received' });
// });

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB error:', err));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Message received!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/sniperthink', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));
