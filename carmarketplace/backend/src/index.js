const express = require('express');
const app = express();
const cors = require('cors');
const client = require('./config/psqlClient');
const cars = require('./routes/cars');
const persons = require('./routes/persons');

app.use(express.json());
app.use(cors());
app.use("/api/cars", cars);
app.use("/api/persons", persons);
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

client
.connect()
.then(() => {
  console.log('Connected to PostgreSQL');

  client.query(`CREATE TABLE IF NOT EXISTS person (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    mail VARCHAR(60) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    city VARCHAR(60) NOT NULL,
    upload_date TIMESTAMP NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS car (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    make VARCHAR(20) NOT NULL,
    model VARCHAR(20) NOT NULL,
    price INTEGER NOT NULL,
    production_year INTEGER NOT NULL,
    mileage INTEGER NOT NULL,
    fuel_type VARCHAR(20) NOT NULL,
    engine_size INTEGER NOT NULL,
    horse_power INTEGER NOT NULL,
    wheel_drive VARCHAR(20) NOT NULL,
    gearbox VARCHAR(20) NOT NULL,
    vin VARCHAR(17) NOT NULL,
    image_url VARCHAR NULL,
    description VARCHAR(255) NULL,
    upload_date TIMESTAMP NOT NULL,
    owner_id INTEGER NULL, 
    FOREIGN KEY (owner_id) REFERENCES person (id)
  );
  
  
  CREATE TABLE IF NOT EXISTS actor (
    id SERIAL PRIMARY KEY,
    car_id INTEGER NOT NULL,
    person_id INTEGER NOT NULL, 
    FOREIGN KEY (person_id) REFERENCES person (id),
    FOREIGN KEY (car_id) REFERENCES car (id)
  );
  
  
  `);

  const port = process.env.PORT || 5000
  app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
  });
})
.catch(err => console.error('Connection error', err.stack));