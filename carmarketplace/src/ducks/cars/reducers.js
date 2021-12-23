import types from "./types"

const carsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CAR_CREATE:
            return [...state,action.payload]
        case types.CAR_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)]
        default:
            return state
    }
}






const initialState = [
	{
		"title":"VW Golf IV 1.6 LPG manual",
		"make":"Volkswagen",
		"model":"Golf IV",
		"price":9999,
		"production_year":1999,
		"mileage": 199999,
		"fuel_type":"Petrol/LPG",
		"engine_size":1600,
		"horse_power":102,
		"wheel_drive":"Front",
		"gearbox":"Manual",
		"vin":"WVWZZZ1JZXD279969",
		"image_url":"https://samochody-szwajcaria.pl/wp-content/uploads/2010/04/golf.jpg",
		"description":"Well maintained, golf 4 with a new LPG installation. Previous driver was an old non-smoking lady"
	},
	{
		"title":"Toyota Yaris I 1.0",
		"make":"Toyota",
		"model":"Yaris I",
		"price":7999,
		"production_year":2002,
		"mileage": 249999,
		"fuel_type":"Petrol",
		"engine_size":1000,
		"horse_power":60,
		"wheel_drive":"Front",
		"gearbox":"Manual",
		"vin":"VNKKL96350A119959",
		"image_url":"https://d-mf.ppstatic.pl/art/e6/p6/3xeom1skoo8ocg8o0084o/dsc_0578.1200.jpg",
		"description":"Toyota never let me down. This car is unbreakable. Rust has showed on left rear wing recently"
	},
	{
		"title":"Porsche Taycan Turbo S",
		"make":"Porsche",
		"model":"Taycan",
		"price":999999,
		"production_year":2021,
		"mileage": 1000,
		"fuel_type":"Electric",
		"engine_size":0,
		"horse_power":761,
		"wheel_drive":"All",
		"gearbox":"Automatic",
		"vin":"WP0AA2Y15MSA14368",
		"image_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Porsche_Taycan_4S_IMG_3526.jpg/1200px-Porsche_Taycan_4S_IMG_3526.jpg",
		"description":"Fastest production electric car from prosche. It can go 0-100km/h in 2.1 seconds and has range of over 400km"
	},
	{
		"title":"Cupra Formentor 4x4 310HP",
		"make":"Cupra",
		"model":"Formentor",
		"price":199999,
		"production_year":2021,
		"mileage": 14000,
		"fuel_type":"Petrol",
		"engine_size":2000,
		"horse_power":310,
		"wheel_drive":"All",
		"gearbox":"Automatic",
		"vin":"VSSZZZKMZMR013455",
		"image_url":"https://d-mf.ppstatic.pl/art/cv/oy/bwyursow0gwkgokgwwogk/psx_20210805_215649.1200.jpg",
		"description":"Almost brand new Cupra Formentor. The car is very fast and comfy. Great for family with kids"
	}


]










export default carsReducer