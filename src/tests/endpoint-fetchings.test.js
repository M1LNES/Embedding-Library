import sinon from 'sinon'
import { assert } from 'chai'
import {
	fetchBoardFields,
	fetchDataAllRequests,
	fetchWidgetData,
} from '../client/functions/widget-config'
import {
	MOCKED_DATA,
	MOCKED_EXPANDED_REQUEST,
	MOCKED_FIELDS,
	MOCKED_MULTIPLE_REQUESTS,
	MOCKED_MULTIPLE_REQUESTS_DATA,
	MOCKED_WIDGETS,
} from './mocked-constants'

describe('Fetching functions', () => {
	let fetchStub
	const boardID = 1671
	const widgetID = 25430

	beforeEach(() => {
		fetchStub = sinon.stub(global, 'fetch')
	})

	afterEach(() => {
		fetchStub.restore()
	})

	describe('Fetching board FIELDS', () => {
		const mockResponseData = MOCKED_FIELDS

		it('Successful data fetch - tokens added via props', async () => {
			fetchStub.resolves({
				ok: true,
				json: () => Promise.resolve(mockResponseData),
			})

			const result = await fetchBoardFields(1671)

			assert.deepStrictEqual(result, mockResponseData)
		}),
			it('Successful data fetch - tokens not added via props', async () => {
				fetchStub.resolves({
					ok: true,
					json: () => Promise.resolve(mockResponseData),
				})

				const result = await fetchBoardFields(1671, () => ({
					ACCESS_TOKEN: 'mockAccessTokenValid',
					OMNI_API_TOKEN: 'mockOmniTokenValid',
				}))

				assert.deepStrictEqual(result, mockResponseData)
			}),
			it('Data fetch - invalid token Omni Studio', async () => {
				fetchStub.resolves({
					ok: false,
					json: () =>
						Promise.resolve({
							success: false,
							message: 'OmniStudio failed: invalid token',
						}),
				})

				const result = await fetchBoardFields(1671, () => ({
					ACCESS_TOKEN: 'validToken',
					OMNI_API_TOKEN: 'invalidToken',
				}))

				assert.deepStrictEqual(result, null)
			}),
			it('Data fetch - invalid token - Public API', async () => {
				fetchStub.resolves({
					ok: false,
					json: () =>
						Promise.resolve({
							success: false,
							message: 'Authorization is not valid.',
						}),
				})

				const result = await fetchBoardFields(1671, () => ({
					ACCESS_TOKEN: 'invalidToken',
					OMNI_API_TOKEN: 'validToken',
				}))

				assert.deepStrictEqual(result, null)
			}),
			it('Fetching from not existing board', async () => {
				fetchStub.resolves({
					ok: true,
					json: () => Promise.resolve([]),
				})

				const result = await fetchBoardFields(1671, () => ({
					ACCESS_TOKEN: 'mockAccessTokenValid',
					OMNI_API_TOKEN: 'mockOmniTokenValid',
				}))

				assert.deepStrictEqual(result, [])
			}),
			it('Widget ID set to random string', async () => {
				fetchStub.resolves({
					ok: false,
					json: () =>
						Promise.resolve({
							success: false,
							message:
								'OmniStudio failed: invalid input syntax for type integer: "grdgr"',
						}),
				})

				const result = await fetchBoardFields('grdgr', () => ({
					ACCESS_TOKEN: 'mockAccessTokenValid',
					OMNI_API_TOKEN: 'mockOmniTokenValid',
				}))

				assert.deepStrictEqual(result, null)
			})
	}),
		describe('Fetching widget config from board', () => {
			const mockResponseData = MOCKED_WIDGETS

			const mockResponseDataFiltered = MOCKED_WIDGETS.find(
				(item) => item.id === widgetID
			)

			it('Successful data fetch - tokens added via props', async () => {
				fetchStub.resolves({
					ok: true,
					json: () => Promise.resolve(mockResponseData),
				})

				const result = await fetchWidgetData(boardID, widgetID)

				assert.deepStrictEqual(result, mockResponseDataFiltered)
			}),
				it('Successful data fetch - tokens not added via props', async () => {
					fetchStub.resolves({
						ok: true,
						json: () => Promise.resolve(mockResponseData),
					})

					const result = await fetchWidgetData(boardID, widgetID, () => ({
						ACCESS_TOKEN: 'mockAccessTokenValid',
						OMNI_API_TOKEN: 'mockOmniTokenValid',
					}))

					assert.deepStrictEqual(result, mockResponseDataFiltered)
				}),
				it('Data fetch - invalid token Omni Studio', async () => {
					fetchStub.resolves({
						ok: false,
						json: () =>
							Promise.resolve({
								success: false,
								message: 'OmniStudio failed: invalid token',
							}),
					})

					const result = await fetchWidgetData(boardID, widgetID, () => ({
						ACCESS_TOKEN: 'validToken',
						OMNI_API_TOKEN: 'invalidToken',
					}))

					assert.deepStrictEqual(result, null)
				}),
				it('Data fetch - invalid token - Public API', async () => {
					fetchStub.resolves({
						ok: false,
						json: () =>
							Promise.resolve({
								success: false,
								message: 'Authorization is not valid.',
							}),
					})

					const result = await fetchWidgetData(boardID, widgetID, () => ({
						ACCESS_TOKEN: 'invalidToken',
						OMNI_API_TOKEN: 'validToken',
					}))

					assert.deepStrictEqual(result, null)
				}),
				it('Data fetch - widgetID not found in the board', async () => {
					const notExistingWidget = 9876

					fetchStub.resolves({
						ok: true,
						json: () => Promise.resolve(mockResponseData),
					})

					const result = await fetchWidgetData(
						boardID,
						notExistingWidget,
						() => ({
							ACCESS_TOKEN: 'invalidToken',
							OMNI_API_TOKEN: 'validToken',
						})
					)

					assert.deepStrictEqual(result, 'Not found')
				})
		})
	describe('Fetching data from Emplifi public API', () => {
		const mockResponseData = MOCKED_EXPANDED_REQUEST

		it('Data fetch - valid tokens', async () => {
			fetchStub.resolves({
				ok: true,
				json: () => Promise.resolve(MOCKED_DATA),
			})

			const result = await fetchDataAllRequests(mockResponseData, () => ({
				ACCESS_TOKEN: 'invalidToken',
				OMNI_API_TOKEN: 'validToken',
			}))
			const result2 = await fetchDataAllRequests(mockResponseData)

			assert.deepStrictEqual(result, MOCKED_DATA)
			assert.deepStrictEqual(result2, MOCKED_DATA)
		}),
			it('Data fetch - invalid token', async () => {
				fetchStub.resolves({
					ok: false,
					json: () =>
						Promise.resolve({ success: false, message: 'User token expired' }),
				})

				const result = await fetchDataAllRequests(mockResponseData, () => ({
					ACCESS_TOKEN: 'invalidToken',
				}))
				const result2 = await fetchDataAllRequests(mockResponseData)

				assert.deepStrictEqual(result, null)
				assert.deepStrictEqual(result2, null)
			}),
			it('Data fetch - multiple requests', async () => {
				fetchStub.onCall(0).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_MULTIPLE_REQUESTS_DATA[0]),
				})
				fetchStub.onCall(1).resolves({
					ok: true,
					json: () => Promise.resolve(MOCKED_MULTIPLE_REQUESTS_DATA[1]),
				})

				const result = await fetchDataAllRequests(
					MOCKED_MULTIPLE_REQUESTS,
					() => ({
						ACCESS_TOKEN: 'validToken',
					})
				)
				assert.deepStrictEqual(result, MOCKED_MULTIPLE_REQUESTS_DATA)
			})
	})
})
