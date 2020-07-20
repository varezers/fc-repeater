const vehiclesController = require('../controllers/vehiclesController')

module.exports = [
	{
		method: 'GET',
		url: '/api/vehicles/getLastData',
		handler: vehiclesController.getLastData,
		schema: {
			querystring: {
				apiKey: { type: 'string' },
			},
		},
	},
	{
		method: 'GET',
		url: '/api/vehicles/getRawData',
		schema: {
			querystring: {
				apiKey: { type: 'string' },
				objectId: { type: 'integer' },
				begTimestamp: { type: 'string' },
				endTimestamp: { type: 'string' },
			},
		},
		handler: vehiclesController.getRawData
	}
]
