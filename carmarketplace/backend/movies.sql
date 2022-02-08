DROP TABLE IF EXISTS director;
DROP TABLE IF EXISTS actors;
DROP TABLE IF EXISTS car;
DROP TABLE IF EXISTS person;


CREATE TABLE IF NOT EXISTS person (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  mail VARCHAR(30) NOT NULL,
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

