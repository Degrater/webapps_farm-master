const express = require('express');
const app = express();

const pool = new Pool({
    user: 'dmitry',
    host: 'localhost',
    database: 'basket',
    password: 'Dimawilow2089',
    port: 5432,
  });

