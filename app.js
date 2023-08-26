const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {addUserData} = require('./public/connector');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Select static files
app.use(express.static('public', {
  // Настройка MIME-типов для каждого типа файла
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    } else if (path.endsWith('.css')) {
      res.set('Content-Type', 'text/css');
    } else if (path.endsWith('.png')) {
      res.set('Content-Type', 'image/png');
    }
  }
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/history', (req, res) => {
  res.sendFile(__dirname + '/public/history.html');
});

app.get('/generate-token', (req, res) => {
  const token = generateToken();
  res.send(token);
});

app.get('/package' , (req,res) =>{
  res.sendFile(__dirname + '/public/package.html');
})


app.post('/input', (req, res) => {
  const { value } = req.body;
  addUserData(value);
  res.json({ status: 'success', value });
});

// Start server
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});