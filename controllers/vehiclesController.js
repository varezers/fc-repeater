const got = require('got')

exports.getLastData = async (req, rep) => {
	try {
		const {
			apiKey,
		} = req.query

		const searchParams = String(
			new URLSearchParams([
				['key', apiKey],
			])
		) + '&json'

		const {
			body
		} = await got.get(
			'https://app.ecofleet.com/seeme/Api/Vehicles/getLastData',
			{
				searchParams,
				responseType: 'json'
			}
		)
		return body.response
	} catch (err) {
		throw err
	}
}

exports.getRawData = async (req, rep) => {
	try {
		const {
			apiKey,
			objectId,
			begTimestamp,
			endTimestamp
		} = req.query

		const searchParams = String(
			new URLSearchParams([
				['key', apiKey],
				['objectId', objectId],
				['begTimestamp', begTimestamp],
				['endTimestamp', endTimestamp],
			])
		) + '&json'

		const {
			body
		} = await got.get(
			'https://app.ecofleet.com/seeme/Api/Vehicles/getRawData',
			{
				searchParams,
				responseType: 'json',
			}
		)

		const waypoints = body.response.map(x => {
			if (
				x.Speed === null &&
				x.EngineStatus === null
			) {
				return x
			} else {
				return false
			}
		}).filter(Boolean)

		return waypoints
	} catch (err) {
		console.log(err);
		throw err
	}
}
