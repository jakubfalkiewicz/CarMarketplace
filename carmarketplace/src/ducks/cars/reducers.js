import types from "./types"

const carsReducer = (state = initialState, action) => {
    switch(action.type) {
		case types.CAR_LIST_FILTER:
			return action.payload
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
		"id":"0f6047d7-fefa-49e6-bc3e-869942974cc1",
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
		"owner_id":"fb0baa8c-e63b-4108-ad96-eeefb4292c86"
	},
	{
		"id":"86dd4675-f1b4-4e25-adba-5b14af7ea6d3",
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
		"owner_id":"fb0baa8c-e63b-4108-ad96-eeefb4292c86"
	},
	{
		"id":"d5ce4a00-a9d4-4ee6-84e6-3934c2126fb1",
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
		"owner_id":"9f58e6c0-74d5-42cc-9f52-5acdea16ba52"
	},
	{
		"id":"3db47e40-150d-4ca0-a9c6-63889eff6246",
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
		"owner_id":"5508763b-a9ff-49a8-b65b-52bd05344d0b"
	},
    {
		"id":"ebfdf5fe-520c-4de8-92f5-50cfb3aa1544",
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
		"owner_id":"fb0baa8c-e63b-4108-ad96-eeefb4292c86"
	},
    {
		"id":"e0ac64ce-c56f-4058-b099-fbaf07d222cb",
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
		"owner_id":"345670f4-f05b-475c-884a-50e8ebe31182"
	},
    {
		"id":"86de88f8-f408-436c-91f2-e712e67423d9",
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
		"owner_id":"9f58e6c0-74d5-42cc-9f52-5acdea16ba52"
	},
    {
		"id":"9ee10351-a797-4307-8b80-476515722a21",
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
		"owner_id":"5508763b-a9ff-49a8-b65b-52bd05344d0b"
	},
    {
		"id":"715aa100-0ebd-4090-8b1b-2a70dfbe7a5e",
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
		"owner_id":"34242842-1b3e-4d9c-8cb6-98f87a66dc89"
	},
    {
		"id":"8013afb2-f142-4e2b-ac29-0f8658705af7",
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
		"owner_id":"34242842-1b3e-4d9c-8cb6-98f87a66dc89"
	},
    {
		"id":"bae57694-f728-4a90-b349-3d215438160d",
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
		"owner_id":"5508763b-a9ff-49a8-b65b-52bd05344d0b"
	},
    {
		"id":"9b3b66da-bb01-4ed1-b8d1-593734018cfb",
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
		"owner_id":"fb0baa8c-e63b-4108-ad96-eeefb4292c86"
	},

]










export default carsReducer