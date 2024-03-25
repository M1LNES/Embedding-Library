/* eslint-disable no-mixed-spaces-and-tabs */

import { PUBLIC_API_DATA_FETCHING_ERROR } from '../constants/api-messages'

/**
 *  Fetching widget config from Omni API.
 *
 * @param {number} boardID - ID of the board.
 * @param {number} widgetID - ID of the widget.
 * @param {func} tokenFunc Function that returns object with tokens (these tokens are ussed instead of .env variables).
 * @returns {object|null|string} - Widget config if widget on that board is found,
 * 								   or 'Not found' if widget is not found on that board,
 * 								   or null if error occured during fetching.
 */
async function fetchWidgetData(boardID, widgetID, tokenFunc) {
	const tokens = tokenFunc?.()

	try {
		const response = await fetch(`/api/widget-config/${boardID}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-PBToken': tokens?.ACCESS_TOKEN,
				'X-OSToken': tokens?.OMNI_API_TOKEN,
			},
		})

		if (!response.ok) {
			throw new Error('OMNI_STUDIO_FETCHING_WIDGET_ERROR')
		}
		const data = await response.json()
		const result = data.find((item) => item.id === widgetID)
		return result ? result : 'Not found'
	} catch (error) {
		console.error('OMNI_STUDIO_FETCHING_WIDGET_ERROR')
		return null
	}
}

/**
 *  Fetching data from Emplifi Public API.
 *
 * @param {string} path - Endpoint in Emplifi Public API that returns data.
 * @param {object} payload - Request payload (structure).
 * @param {func} tokenFunc Function that returns object with tokens (these tokens are ussed instead of .env variables).
 * @returns {object|null} - Fetched object if request was successfull,
 * 							or null if error occured during fetching.
 */
async function fetchDataFromRequest(path, payload, tokenFunc) {
	const tokens = tokenFunc?.()
	try {
		const response = await fetch('/api/widget-data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-PBToken': tokens?.ACCESS_TOKEN,
			},
			body: JSON.stringify({
				path: path,
				payload: payload,
			}),
		})

		if (!response.ok) {
			throw new Error(PUBLIC_API_DATA_FETCHING_ERROR)
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error(PUBLIC_API_DATA_FETCHING_ERROR)
		return null
	}
}

/**
 * Fetches all data requests from expanded data request.
 * @param {Array|Object} requestsExpanded - Expanded request(s) (if only one request - object, otherwise array).
 * @param {func} tokenFunc Function that returns object with tokens (these tokens are ussed instead of .env variables).
 * @returns {Promise<Array|Object>} A promise with fetched data (for multiple requests array, for onee request object).
 */
async function fetchDataAllRequests(requestsExpanded, tokenFunc) {
	const fetchedData = Array.isArray(requestsExpanded)
		? await Promise.all(
				requestsExpanded.map(async (request) => {
					return await fetchDataFromRequest(
						request.path,
						request.payload,
						tokenFunc
					)
				})
		  )
		: await fetchDataFromRequest(
				requestsExpanded.path,
				requestsExpanded.payload,
				tokenFunc
		  )

	return fetchedData
}

/**
 * Fetches the widgets fields of a board from Omni API.
 * @param {string} boardID - ID of the board.
 * @param {func} tokenFunc Function that returns object with tokens (these tokens are ussed instead of .env variables).
 * @returns {Promise<Object|null>} A promise with an object containing the fields of the board,
 *                                  or null if an error occurs during fetching.
 */
async function fetchBoardFields(boardID, tokenFunc) {
	const tokens = tokenFunc?.()

	try {
		const response = await fetch(`/api/board-fields/${boardID}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-PBToken': tokens?.ACCESS_TOKEN,
				'X-OSToken': tokens?.OMNI_API_TOKEN,
			},
		})

		if (!response.ok) {
			throw new Error('Error during fetching fields from board.')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Error during fetching fields from board.')
		return null
	}
}

export {
	fetchWidgetData,
	fetchDataFromRequest,
	fetchDataAllRequests,
	fetchBoardFields,
}
