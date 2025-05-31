const express = require('express');
const path = require('path');
const app = express();

// View engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => res.render('home'));

app.get('/login', (req, res) => res.render('login'));

app.get('/help', (req, res) => res.render('help'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'shreya' && password === '2109') {
    res.send(`Login successful. Welcome, ${username}!`);
  } else {
    res.send('Invalid username or password');
  }
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
