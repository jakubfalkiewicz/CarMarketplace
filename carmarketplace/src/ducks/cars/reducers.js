import types from "./types"

const carsReducer = (state = [], action) => {
    switch(action.type) {
		case types.GET_CARS_LIST:
			return [...action.payload]
		case types.CAR_LIST_SORT:
			return [...action.payload]
		case types.CAR_LIST_FILTER:
			return [...action.payload]
        case types.CAR_CREATE:
            return [...state,action.payload]
		case types.ADD_OWNER:
			return [...state.map(car => car.id !== action.payload.id ? car : {...car,owner_id: action.payload.id} )]
		case types.CAR_EDIT:
			return [...state.map(car => car.id !== action.payload.id ? car : action.payload)]
        case types.CAR_DELETE:
            return [...action.payload]
        default:
            return state
    }
}




const initialState = [
	{
		"id":2,
		"title":"VW Golf IV 1.6 LPG manual",
		"make":"Volkswagen",
		"model":"Golf IV",
		"price":9999,
		"production_year":1999,
		"mileage": 199999,
		"fuel_type":"Petrol/LPG",
		"engine_size":1595,
		"horse_power":101,
		"wheel_drive":"Front",
		"gearbox":"Manual",
		"vin":"WVWZZZ1JZXD279969",
		"image_url":"https://samochody-szwajcaria.pl/wp-content/uploads/2010/04/golf.jpg",
		"description":"Well maintained, golf 4 with a new LPG installation. Previous driver was an old non-smoking lady",
		"owner_id":2
	},
	{
		"id":1,
		"title":"Toyota Yaris I 1.0",
		"make":"Toyota",
		"model":"Yaris I",
		"price":7999,
		"production_year":2002,
		"mileage": 249999,
		"fuel_type":"Petrol",
		"engine_size":998,
		"horse_power":68,
		"wheel_drive":"Front",
		"gearbox":"Manual",
		"vin":"VNKKL96350A119959",
		"image_url":"https://d-mf.ppstatic.pl/art/e6/p6/3xeom1skoo8ocg8o0084o/dsc_0578.1200.jpg",
		"description":"Toyota never let me down. This car is unbreakable. Rust has showed on left rear wing recently",
		"owner_id":2
	},
	{
		"id":5,
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
		"description":"Fastest production electric car from Porsche. It can go 0-100km/h in 2.1 seconds and has range of over 400km",
		"owner_id":5
	},
	{
		"id":12,
		"title":"Cupra Formentor 4x4 310HP",
		"make":"Cupra",
		"model":"Formentor",
		"price":199999,
		"production_year":2021,
		"mileage": 14000,
		"fuel_type":"Petrol",
		"engine_size":1984,
		"horse_power":310,
		"wheel_drive":"All",
		"gearbox":"Automatic",
		"vin":"VSSZZZKMZMR013455",
		"image_url":"https://d-mf.ppstatic.pl/art/cv/oy/bwyursow0gwkgokgwwogk/psx_20210805_215649.1200.jpg",
		"description":"Almost brand new Cupra Formentor. The car is very fast and comfy. Great for family with kids",
		"owner_id":4
	},
    {
		"id":3,
		"title":"VW Passat B5 1.9TDI",
		"make":"Volkswagen",
		"model":"Passat",
		"price":12999,
		"production_year":2000,
		"mileage": 299000,
		"fuel_type":"Diesel",
		"engine_size":1896,
		"horse_power":110,
		"wheel_drive":"Front",
		"gearbox":"Manual",
		"vin":"VSSZZZKMZMR009876",
		"image_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/VW_Passat_B5.jpg/1200px-VW_Passat_B5.jpg",
		"description":"Very good car with robust, powerful engine. Has new tires on it",
		"owner_id":2
	},
    {
		"id":7,
		"title":"BMW M3 E46 Convertible manual",
		"make":"BMW",
		"model":"M3",
		"price":89999,
		"production_year":2001,
		"mileage": 109000,
		"fuel_type":"Petrol",
		"engine_size":3246,
		"horse_power":343,
		"wheel_drive":"Rear",
		"gearbox":"Manual",
		"vin":"VSSZZZKMZMR698720",
		"image_url":"https://www.gieldaklasykow.pl/wp-content/uploads/2018/10/bmw-m3-canrio-e46-19.jpg",
		"description":"Cool classic sports car with manual transmission. The car for a collector or a car freak",
		"owner_id":6
	},
    {
		"id":6,
		"title":"Tesla Model 3 Performance",
		"make":"Tesla",
		"model":"Model 3",
		"price":299999,
		"production_year":2020,
		"mileage": 49000,
		"fuel_type":"Electric",
		"engine_size":0,
		"horse_power":513,
		"wheel_drive":"All",
		"gearbox":"Automatic",
		"vin":"WP0AA2Y15MSB93875",
		"image_url":"https://pro.bbcdn.io/ac/ace445b7-99c6-40a0-b8bd-d9f47725c703?rule=legacy-largest",
		"description":"Fastest compact production electric car from Tesla. It can go 0-100km/h in 3.5 seconds and has range of over 450km",
		"owner_id":5
	},
    {
		"id":11,
		"title":"Volkswagen 7.5R 400HP DSG",
		"make":"Volkswagen",
		"model":"Golf",
		"price":149999,
		"production_year":2018,
		"mileage": 79000,
		"fuel_type":"Petrol",
		"engine_size":1984,
		"horse_power":400,
		"wheel_drive":"All",
		"gearbox":"Automatic",
		"vin":"WP0AA2Y15MSC21908",
		"image_url":"https://tvsengineering.com/wp-content/uploads/2020/02/fb1-1-1024x698.jpg?v=1588424765",
		"description":"Chip tuned golf 7.5R. Modifications: Wagner Intercooler, downpipe, MG Motorsport Exhaust. Michelin pilot sport 4S tires",
		"owner_id":4
	},
    {
		"id":8,
		"title":"Honda S2000 2.2 manual",
		"make":"Honda",
		"model":"S2000",
		"price":119999,
		"production_year":2005,
		"mileage": 69000,
		"fuel_type":"Petrol",
		"engine_size":2157,
		"horse_power":242,
		"wheel_drive":"Rear",
		"gearbox":"Manual",
		"vin":"WP0AA2Y15MSD03984",
		"image_url":"https://a.allegroimg.com/original/11979e/47d504db453ab9610cbdf3aa9c7a",
		"description":"Most iconic japanese car of all times. Perfect engine and weight distribution makes this car very fun to drive on track",
		"owner_id":3
	},
    {
		"id":9,
		"title":"Nissan GT-R Nismo",
		"make":"Nissan",
		"model":"GT-R",
		"price":499999,
		"production_year":2019,
		"mileage": 39000,
		"fuel_type":"Petrol",
		"engine_size":3799,
		"horse_power":600,
		"wheel_drive":"All",
		"gearbox":"Automatic",
		"vin":"WP0AA2Y15MMF09481",
		"image_url":"https://www.moto3m.pl/wp-content/uploads/2016/04/Nissan-GT-R-NISMO-G0-NISMO-00260.jpg",
		"description":"Very fast and practical car for couples. Limited edition too 500 cars",
		"owner_id":3
	},
    {
		"id":10,
		"title":"Lamborghini Huracan STO",
		"make":"Lamborghini",
		"model":"Huracan",
		"price":1299999,
		"production_year":2021,
		"mileage": 105,
		"fuel_type":"Petrol",
		"engine_size":5204,
		"horse_power":640,
		"wheel_drive":"Rear",
		"gearbox":"Automatic",
		"vin":"WP0AA2Y15MLL83998",
		"image_url":"https://www.autogen.pl/cars/LamboHurSTO/1.jpg",
		"description":"Street legal track weapon",
		"owner_id":4
	},
    {
		"id":4,
		"title":"Citroen C5 2.0 HDi 163HP",
		"make":"Citroen",
		"model":"C5",
		"price":26999,
		"production_year":2012,
		"mileage": 209000,
		"fuel_type":"Diesel",
		"engine_size":1997,
		"horse_power":163,
		"wheel_drive":"Front",
		"gearbox":"Manual",
		"vin":"WP0AA2Y15MLw98121",
		"image_url":"https://i.ytimg.com/vi/fY5_LL9mm2s/maxresdefault.jpg",
		"description":"Very comfortable french family sedan. Good for long trips - 35mpg fuel economy",
		"owner_id":2
	},
	// {
	// 	"id":14,
	// 	"title": "Audi A8L D2 LONG 4.2 LPG",
	// 	"make": "Audi",
	// 	"model": "A8",
	// 	"price": 13999,
	// 	"production_year": 1998,
	// 	"mileage": 319999,
	// 	"fuel_type": "Petrol/LPG",
	// 	"engine_size": 4172,
	// 	"horse_power": 310,
	// 	"wheel_drive": "All",
	// 	"gearbox": "Automatic",
	// 	"vin": "VNKKL96350A098104",
	// 	"image_url": "https://thumbs.img-sprzedajemy.pl/1000x901c/c3/ee/4b/sprzedamzamienie-audi-a8l-d2-42-lpg-527116840.jpg",
	// 	"description": "Very comfy limousine for long trips. Recently replaced pneumatic suspension and oils",
	// 	"owner_id":2
	// },
	// {
	// 	"id": 16,
	// 	"title": "Skoda Octavia 140HP TDi sedan",
	// 	"make": "Skoda",
	// 	"model": "Octavia",
	// 	"price": 11499,
	// 	"production_year": 2005,
	// 	"mileage": 339000,
	// 	"fuel_type": "Diesel",
	// 	"engine_size": 1968,
	// 	"horse_power": 140,
	// 	"wheel_drive": "Front",
	// 	"gearbox": "Manual",
	// 	"vin": "177823698dbvbvbve",
	// 	"image_url": "https://www.autocentrum.pl/ac-file/article/5dcd1d7d583a0f4d75292394.jpg",
	// 	"description": "Very reliable car. Nothing has broken since last year. Brakes and camshaft were replaced 3 years ago",
	// 	"owner_id": 2
	// },
	// {
	// 	"id": 21,
	// 	"title": "Alfa Romeo Stelvio QV ",
	// 	"make": "Alfa Romeo",
	// 	"model": "Stelvio",
	// 	"price": 350000,
	// 	"production_year": 2019,
	// 	"mileage": 66000,
	// 	"fuel_type": "Petrol",
	// 	"engine_size": 2891,
	// 	"horse_power": 510,
	// 	"wheel_drive": "All",
	// 	"gearbox": "Automatic",
	// 	"vin": "dgjhkiudhydfjngkj",
	// 	"image_url": "https://www.media.stellantis.com/cache/0/4/b/c/6/04bc6f1dc0eab7645f671442bf3795717204d551.jpeg",
	// 	"description": "Best suv for track. Engine inspired from ferrari.",
	// 	"owner_id": 3
	// },
	// {
	// 	"id": 21,
	// 	"title": "Alfa Romeo Stelvio QV ",
	// 	"make": "Alfa Romeo",
	// 	"model": "Stelvio",
	// 	"price": 350000,
	// 	"production_year": 2019,
	// 	"mileage": 66000,
	// 	"fuel_type": "Petrol",
	// 	"engine_size": 2891,
	// 	"horse_power": 510,
	// 	"wheel_drive": "All",
	// 	"gearbox": "Automatic",
	// 	"vin": "dgjhkiudhydfjngkj",
	// 	"image_url": "https://www.media.stellantis.com/cache/0/4/b/c/6/04bc6f1dc0eab7645f671442bf3795717204d551.jpeg",
	// 	"description": "Best suv for track. Engine inspired from ferrari.",
	// 	"owner_id": 3
	// },
	// {
	// 	"id": 22,
	// 	"title": "Alfa Romeo Guilia 2.2 JTD ",
	// 	"make": "Alfa Romeo",
	// 	"model": "Guilia",
	// 	"price": 135000,
	// 	"production_year": 2018,
	// 	"mileage": 85000,
	// 	"fuel_type": "Diesel",
	// 	"engine_size": 2143,
	// 	"horse_power": 210,
	// 	"wheel_drive": "All",
	// 	"gearbox": "Automatic",
	// 	"vin": "458t7gy4578gy9578",
	// 	"image_url": "https://s-trojmiasto.pl/zdj/c/n/9/2917/3000x0/2917051.jpg",
	// 	"description": "Well maintained Alfa Romeo Guilia 2.2 JTD. All wheel drive and automatic transmission make this car very good to drive.",
	// 	"owner_id": 6
	// },
	// {
	// 	"id": 29,
	// 	"title": "Mercedes c32 AMG",
	// 	"make": "Mercedes-Benz",
	// 	"model": "C-class",
	// 	"price": 81500,
	// 	"production_year": 2004,
	// 	"mileage": 49000,
	// 	"fuel_type": "Petrol",
	// 	"engine_size": 3199,
	// 	"horse_power": 354,
	// 	"wheel_drive": "Rear",
	// 	"gearbox": "Automatic",
	// 	"vin": "juhgf3f89y8f92y9f",
	// 	"image_url": "https://motoinspiracje.pl/wp-content/uploads/2020/07/3-37.jpg",
	// 	"description": "Without a star there is no ride ;)",
	// 	"owner_id": 7
	// }
]










export default carsReducer