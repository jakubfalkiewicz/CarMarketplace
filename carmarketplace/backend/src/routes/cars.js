const express = require("express");
const client = require('../config/psqlClient');
const router = express.Router({mergeParams: true});

const messages = {
    VIN_DUPLICATE: 'VIN_DUPLICATE',
    OWNER_NOT_EXISTS: 'OWNER_NOT_EXISTS', 
    ELEMENT_NOT_EXIST: 'ELEMENT_NOT_EXIST'
};

router.get('/', async (req, res) => {
    const cars = await client.query("SELECT * FROM car");
    return res.send(cars.rows);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const carRows = await client.query("SELECT * FROM car WHERE id = $1", [id]); 

    const car = carRows.rows[0];

    if(!car) {
        return res.status(500).send(messages.ELEMENT_NOT_EXIST);
    }

    return res.send(car);
  });

router.post('/', async (req, res) => {
    const carToAdd = req.body;
    const duplicate = await client.query("SELECT * FROM car WHERE vin = $1", [ carToAdd.vin ]);

    if(duplicate.rows[0]) {
        return res.status(500).send(messages.VIN_DUPLICATE);
    }

    // if(carToAdd.owner_id) {
    //     const owner = await client.query("SELECT * FROM person WHERE id = $1", [ carToAdd.owner_id ]);

    //     if(!owner.rows[0]) {
    //         return res.status(500).send(messages.OWNER_NOT_EXISTS);
    //     }
    
    // }

    const insertedCarRows = await client.query(
        "INSERT INTO car (title, make, model, price, production_year, mileage, fuel_type, engine_size, horse_power, wheel_drive, gearbox, vin, image_url, description, upload_date, owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *",
        [carToAdd.title, carToAdd.make, carToAdd.model, carToAdd.price, carToAdd.production_year, carToAdd.mileage, carToAdd.fuel_type, carToAdd.engine_size, carToAdd.horse_power, carToAdd.wheel_drive, carToAdd.gearbox, carToAdd.vin, carToAdd.image_url, carToAdd.description, carToAdd.upload_date, carToAdd.owner_id ? carToAdd.owner_id : null]
      );

    const insertedCar = insertedCarRows.rows[0];
    return res.send(insertedCar);  
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const carToDelete = await client.query("SELECT * FROM car WHERE id = $1", [ id ]);
    const response = await client.query("DELETE from car WHERE id = $1", [id]);

    return response.rowCount > 0 ? res.send(carToDelete.rows[0]) : res.sendStatus(400); 
});

router.put('/:id', async (req, res) => {
    const carToAdd = req.body;
    const id = req.params.id;
    console.log(req.body)

    if(carToAdd.owner_id) {
        const owner = await client.query("SELECT * FROM person WHERE id = $1", [ carToAdd.owner_id ]);

        if(!owner.rows[0]) {
            return res.status(500).send(messages.OWNER_NOT_EXISTS);
        }
    
    }

    const result = await client.query(`UPDATE car SET title = $1, make = $2, model = $3, price = $4, production_year = $5, mileage = $6, fuel_type = $7, engine_size = $8, horse_power = $9, wheel_drive = $10, gearbox = $11, vin = $12, image_url = $13, description = $14, upload_date = $15, owner_id = $16 WHERE id = $17`,
    [carToAdd.title, carToAdd.make, carToAdd.model, carToAdd.price, carToAdd.production_year, carToAdd.mileage, carToAdd.fuel_type, carToAdd.engine_size, carToAdd.horse_power, carToAdd.wheel_drive, carToAdd.gearbox, carToAdd.vin, carToAdd.image_url, carToAdd.description, carToAdd.upload_date, carToAdd.owner_id ? carToAdd.owner_id : null, id]
    );
    
    return result.rowCount > 0 ? res.send(carToAdd) : res.sendStatus(400);
});


router.patch('/:id/owner', async (req, res) => {
    const ownerToSet = req.body;
    const id = req.params.id;

    if(ownerToSet) {
        const owner = await client.query("SELECT * FROM person WHERE id = $1", [ ownerToSet.id ]);

        if(!owner.rows[0]) {
            return res.status(500).send(messages.OWNER_NOT_EXISTS);
        }
    
    }

    const result = await client.query(`UPDATE car SET owner_id = $1 WHERE id = $2`,
        [ownerToSet ? ownerToSet.id : null, id]
    );
    
    return result.rowCount > 0 ? res.sendStatus(200) : res.sendStatus(400);
});



module.exports = router;
